// voice_cloner.js - AI Voice Cloning Engine for TinyToons Studio
// Uses ElevenLabs Multilingual v2 API to clone user voice sample
// and synthesize any cartoon story narration in the user's exact voice.
// Zero external dependencies - uses Node.js built-in https, fs, path, crypto.

const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CONFIG_FILE = path.join(__dirname, 'voice_cloner_config.json');
const CACHE_DIR = path.join(__dirname, 'output', 'voice_cache');

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function getConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {
    apiKey: process.env.ELEVENLABS_API_KEY || '',
    voiceId: '',
    voiceName: 'Manikanta Voice',
    sampleFile: 'user_voice.mp4'
  };
}

function saveConfig(cfg) {
  const current = getConfig();
  const merged = { ...current, ...cfg };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2), 'utf8');
  return merged;
}

function getVoiceStatus() {
  const cfg = getConfig();
  const samplePath = path.join(__dirname, cfg.sampleFile || 'user_voice.mp4');
  const hasSample = fs.existsSync(samplePath);
  return {
    hasApiKey: !!cfg.apiKey,
    hasSample: hasSample,
    sampleFile: cfg.sampleFile || 'user_voice.mp4',
    voiceId: cfg.voiceId || '',
    voiceName: cfg.voiceName || 'Manikanta Voice',
    isCloned: !!(cfg.apiKey && cfg.voiceId)
  };
}

/**
 * Clones the user's voice sample by uploading it to ElevenLabs Instant Voice Cloning API
 */
function cloneUserVoice(apiKey, audioFilePath, voiceName = 'Manikanta Voice') {
  return new Promise((resolve, reject) => {
    if (!apiKey) {
      return reject(new Error('ElevenLabs API key is required.'));
    }

    const resolvedPath = path.isAbsolute(audioFilePath) ? audioFilePath : path.join(__dirname, audioFilePath);
    if (!fs.existsSync(resolvedPath)) {
      return reject(new Error(`Voice sample file not found: ${resolvedPath}`));
    }

    const fileBuffer = fs.readFileSync(resolvedPath);
    const fileName = path.basename(resolvedPath);
    const boundary = '----WebKitFormBoundary' + crypto.randomBytes(16).toString('hex');

    const preamble = Buffer.concat([
      Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="name"\r\n\r\n${voiceName}\r\n`),
      Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="description"\r\n\r\nCustom AI voice clone for TinyToons kids video narration\r\n`),
      Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="files"; filename="${fileName}"\r\nContent-Type: audio/mp4\r\n\r\n`)
    ]);
    const postamble = Buffer.from(`\r\n--${boundary}--\r\n`);
    const payload = Buffer.concat([preamble, fileBuffer, postamble]);

    const req = https.request('https://api.elevenlabs.io/v1/voices/add', {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': payload.length
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (res.statusCode >= 400 || json.detail) {
            const errDetail = typeof json.detail === 'object' ? JSON.stringify(json.detail) : json.detail;
            return reject(new Error(`ElevenLabs Clone Error (${res.statusCode}): ${errDetail || data}`));
          }

          if (json.voice_id) {
            saveConfig({
              apiKey: apiKey,
              voiceId: json.voice_id,
              voiceName: voiceName,
              sampleFile: fileName
            });
            resolve({
              success: true,
              voiceId: json.voice_id,
              voiceName: voiceName
            });
          } else {
            reject(new Error(`Unexpected response: ${data}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Synthesizes speech using the cloned voice via ElevenLabs Multilingual v2
 * Supports Telugu, Hindi, English, Tamil, Kannada, Spanish, etc.
 */
function synthesizeClonedSpeech(text, voiceId, apiKey) {
  return new Promise((resolve, reject) => {
    const cfg = getConfig();
    const finalKey = apiKey || cfg.apiKey;
    const finalVoiceId = voiceId || cfg.voiceId;

    if (!finalKey || !finalVoiceId) {
      return reject(new Error('Cloned voice is not configured yet. Please enter your ElevenLabs API key and clone your voice first.'));
    }

    // Cache lookup
    const cacheKey = crypto.createHash('md5').update(`${finalVoiceId}_${text}`).digest('hex');
    const cachePath = path.join(CACHE_DIR, `${cacheKey}.mp3`);

    if (fs.existsSync(cachePath)) {
      return resolve({
        fromCache: true,
        filePath: cachePath,
        audioBuffer: fs.readFileSync(cachePath)
      });
    }

    const payload = JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.85,
        style: 0.2,
        use_speaker_boost: true
      }
    });

    const req = https.request(`https://api.elevenlabs.io/v1/text-to-speech/${finalVoiceId}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: {
        'xi-api-key': finalKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      if (res.statusCode >= 400) {
        let errData = '';
        res.on('data', chunk => errData += chunk);
        res.on('end', () => {
          reject(new Error(`Synthesis Error (${res.statusCode}): ${errData}`));
        });
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        try {
          fs.writeFileSync(cachePath, audioBuffer);
        } catch (e) {
          console.warn("Failed to write to voice cache:", e);
        }
        resolve({
          fromCache: false,
          filePath: cachePath,
          audioBuffer: audioBuffer
        });
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

module.exports = {
  getConfig,
  saveConfig,
  getVoiceStatus,
  cloneUserVoice,
  synthesizeClonedSpeech
};
