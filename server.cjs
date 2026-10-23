// Kids Video Automation - Local Backend Server (Node.js)
// Zero external npm dependencies required - uses Node built-in http, fs, path

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const OUTPUT_DIR = path.join(__dirname, 'output');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Routes
  if (pathname === '/api/save-video' && req.method === 'POST') {
    handleSaveVideo(req, res);
    return;
  }

  if (pathname === '/api/upload-youtube' && req.method === 'POST') {
    handleYouTubeUpload(req, res);
    return;
  }

  if (pathname === '/api/youtube-status' && req.method === 'GET') {
    handleYouTubeStatus(req, res);
    return;
  }

  if (pathname === '/api/connect-youtube' && req.method === 'POST') {
    handleConnectYouTube(req, res);
    return;
  }

  if (pathname === '/oauth2callback' && req.method === 'GET') {
    handleOAuth2Callback(req, res, parsedUrl);
    return;
  }

  if (pathname === '/api/clone-voice/status' && req.method === 'GET') {
    const voiceCloner = require('./voice_cloner.js');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(voiceCloner.getVoiceStatus()));
    return;
  }

  if (pathname === '/api/clone-voice/setup' && req.method === 'POST') {
    handleCloneVoiceSetup(req, res);
    return;
  }

  if (pathname === '/api/tts' && req.method === 'GET') {
    handleTTS(req, res, parsedUrl);
    return;
  }

  if (pathname === '/api/daily-status' && req.method === 'GET') {
    const files = fs.readdirSync(OUTPUT_DIR);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      totalGenerated: files.length,
      files: files
    }));
    return;
  }

  // Static File Serving
  if (pathname === '/') pathname = '/index.html';
  const filePath = path.join(__dirname, pathname);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

function handleSaveVideo(req, res) {
  let body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const buffer = Buffer.concat(body);
    const customHeader = req.headers['x-filename'];
    const fileName = customHeader ? path.basename(customHeader) : `kids_video_${Date.now()}.webm`;
    const targetPath = path.join(OUTPUT_DIR, fileName);

    fs.writeFile(targetPath, buffer, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: true, 
          fileName: fileName,
          path: `output/${fileName}`
        }));
      }
    });
  });
}

function handleYouTubeStatus(req, res) {
  try {
    const { getClientCredentials, getStoredToken, getAuthUrl } = require('./youtube_uploader.js');
    const creds = getClientCredentials();
    const token = getStoredToken();
    const isConnected = !!(creds && token && (token.refresh_token || token.access_token));
    const authUrl = creds ? getAuthUrl(creds.client_id) : null;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      isConnected,
      hasCredentials: !!creds,
      authUrl
    }));
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: e.message }));
  }
}

function handleConnectYouTube(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      let clientId = (data.clientId || '').trim();
      let clientSecret = (data.clientSecret || '').trim();

      // Support raw Google Cloud downloaded client_secret.json format
      if (!clientId && data.installed) {
        clientId = (data.installed.client_id || '').trim();
        clientSecret = (data.installed.client_secret || '').trim();
      } else if (!clientId && data.web) {
        clientId = (data.web.client_id || '').trim();
        clientSecret = (data.web.client_secret || '').trim();
      }

      if (!clientId || !clientSecret) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Client ID and Client Secret are required' }));
        return;
      }

      const { saveClientCredentials, getAuthUrl } = require('./youtube_uploader.js');
      saveClientCredentials(clientId, clientSecret);
      const authUrl = getAuthUrl(clientId);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        authUrl: authUrl,
        message: 'Credentials saved! Opening authorization...'
      }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Invalid JSON request' }));
    }
  });
}

async function handleOAuth2Callback(req, res, parsedUrl) {
  const code = parsedUrl.searchParams.get('code');
  const error = parsedUrl.searchParams.get('error');

  const { getClientCredentials, exchangeCodeForTokens, getAuthUrl } = require('./youtube_uploader.js');
  const creds = getClientCredentials();

  // If visited directly without code or error, automatically redirect to Google Auth!
  if (!code && !error) {
    if (creds && creds.client_id) {
      const authUrl = getAuthUrl(creds.client_id, (creds.redirect_uris && creds.redirect_uris[0]) || 'http://localhost:3000/oauth2callback');
      res.writeHead(302, { 'Location': authUrl });
      res.end();
      return;
    }
  }

  if (error || !code) {
    const authUrl = (creds && creds.client_id) ? getAuthUrl(creds.client_id, (creds.redirect_uris && creds.redirect_uris[0]) || 'http://localhost:3000/oauth2callback') : null;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html>
      <body style="font-family:'Segoe UI',sans-serif;text-align:center;padding:50px;background:#FFF5F5;">
        <div style="max-width:550px;margin:0 auto;background:white;padding:35px;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
          <h1 style="color:#D32F2F;margin-bottom:12px;">⚠️ Google Authorization</h1>
          <p style="color:#4A5568;line-height:1.6;font-size:15px;">
            ${error ? `Google notification: <code>${error}</code>` : 'Please authorize TinyToons Studio with your Google account to enable auto-uploads.'}
          </p>
          ${authUrl ? `
            <div style="margin:25px 0;">
              <a href="${authUrl}" style="background:#16A34A;color:white;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;font-size:16px;display:inline-block;box-shadow:0 4px 15px rgba(22,163,74,0.35);">
                🔑 Authorize with Google Account
              </a>
            </div>
          ` : ''}
          <p><a href="/" style="color:#2563EB;text-decoration:none;font-size:14px;">← Back to TinyToons Studio</a></p>
        </div>
      </body>
      </html>
    `);
    return;
  }

  try {
    if (!creds) throw new Error('client_secret.json missing');

    await exchangeCodeForTokens(code, creds.client_id, creds.client_secret, 'http://localhost:3000/oauth2callback');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>YouTube Connected!</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: white; padding: 40px; border-radius: 24px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); max-width: 540px; text-align: center; }
          h1 { color: #2e7d32; font-size: 32px; margin-bottom: 10px; }
          h2 { color: #374151; font-size: 20px; font-weight: 600; margin-top: 0; }
          p { color: #4b5563; font-size: 16px; line-height: 1.6; margin: 16px 0; }
          .badge { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 14px; margin-bottom: 16px; }
          .btn { display: inline-block; background: #16a34a; color: white; padding: 14px 32px; border-radius: 14px; text-decoration: none; font-weight: bold; font-size: 16px; transition: transform 0.2s; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.35); }
          .btn:hover { transform: scale(1.05); }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">🎉 @manikantadatti6150 Connected</span>
          <h1>🎉 YouTube Channel Connected!</h1>
          <h2>Your Channel is Successfully Connected!</h2>
          <p>
            Your Google Account has been authorized and securely linked to TinyToons Studio.
            The upload token is saved. You can now use 1-Click Auto-Publish to create and upload videos directly to @manikantadatti6150!
          </p>
          <div style="margin-top: 25px;">
            <a href="/" class="btn">🚀 Open Studio</a>
          </div>
        </div>
      </body>
      </html>
    `);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html><body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1 style="color:#d32f2f;">❌ Authorization Error</h1>
        <p>${err.message}</p>
        <p><a href="/">Back to Studio</a></p>
      </body></html>
    `);
  }
}

function handleYouTubeUpload(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const { uploadVideoToYouTube, getClientCredentials, getStoredToken } = require('./youtube_uploader.js');

      const creds = getClientCredentials();
      const token = getStoredToken();

      if (!creds || !token) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          needsAuth: true,
          message: 'YouTube account not connected yet. Click "Connect YouTube Channel" to link your channel once.'
        }));
        return;
      }

      uploadVideoToYouTube(data)
        .then(result => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            videoId: result.id,
            url: result.url,
            message: `Video uploaded successfully to YouTube! Watch at ${result.url}`
          }));
        })
        .catch(err => {
          console.error("YouTube upload error:", err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: err.message }));
        });
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Invalid JSON request' }));
    }
  });
}

function handleTTS(req, res, parsedUrl) {
  const text = parsedUrl.searchParams.get('text') || '';
  const lang = parsedUrl.searchParams.get('lang') || 'te';
  const voice = parsedUrl.searchParams.get('voice') || '';

  if (!text) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Text query parameter is required' }));
    return;
  }

  // If cloned voice requested
  if (voice === 'cloned') {
    const voiceCloner = require('./voice_cloner.js');
    const status = voiceCloner.getVoiceStatus();
    if (status.isCloned) {
      voiceCloner.synthesizeClonedSpeech(text)
        .then(result => {
          res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Access-Control-Allow-Origin': '*',
            'X-Voice-Engine': 'ElevenLabs-Cloned'
          });
          res.end(result.audioBuffer);
        })
        .catch(err => {
          console.warn("Cloned voice synthesis failed, falling back to Google HD:", err.message);
          serveGoogleTTS(text, lang, res, err.message);
        });
      return;
    }
  }

  serveGoogleTTS(text, lang, res);
}

function serveGoogleTTS(text, lang, res, fallbackReason) {
  const targetUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(lang)}&q=${encodeURIComponent(text)}`;

  https.get(targetUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }, (ttsRes) => {
    res.writeHead(ttsRes.statusCode, {
      'Content-Type': 'audio/mpeg',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400',
      'X-Voice-Engine': 'Google-HD',
      'X-Voice-Fallback-Reason': fallbackReason || ''
    });
    ttsRes.pipe(res);
  }).on('error', (err) => {
    console.error("TTS fetch error:", err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message }));
  });
}

function handleCloneVoiceSetup(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const voiceCloner = require('./voice_cloner.js');
      const apiKey = (data.apiKey || '').trim();
      const voiceName = data.voiceName || 'Manikanta Voice';
      const sampleFile = data.sampleFile || 'user_voice.mp4';

      if (!apiKey) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'ElevenLabs API key is required.' }));
        return;
      }

      voiceCloner.cloneUserVoice(apiKey, sampleFile, voiceName)
        .then(result => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            voiceId: result.voiceId,
            voiceName: result.voiceName,
            message: `Voice cloned successfully! Voice ID: ${result.voiceId}`
          }));
        })
        .catch(err => {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: err.message
          }));
        });
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Invalid JSON request' }));
    }
  });
}

server.listen(PORT, () => {
  console.log('================================================================');
  console.log(`🌟 TinyToons Kids Video Studio is running at: http://localhost:${PORT}`);
  console.log('================================================================');
});
