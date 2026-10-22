// YouTube Data API v3 Real Resumable Video Uploader & OAuth Controller
// Zero external dependencies - pure Node.js (https, http, fs, path, url)
// Strict COPPA Compliance (selfDeclaredMadeForKids: true)

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

const CREDENTIALS_PATH = path.join(__dirname, 'client_secret.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const OUTPUT_DIR = path.join(__dirname, 'output');

/**
 * Reads credentials from client_secret.json
 */
function getClientCredentials() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    return null;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const info = raw.installed || raw.web || raw;
    return {
      client_id: info.client_id,
      client_secret: info.client_secret,
      redirect_uris: info.redirect_uris || ['http://localhost:3000/oauth2callback']
    };
  } catch (e) {
    return null;
  }
}

/**
 * Reads stored OAuth tokens
 */
function getStoredToken() {
  if (!fs.existsSync(TOKEN_PATH)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
  } catch (e) {
    return null;
  }
}

/**
 * Saves tokens to token.json
 */
function saveToken(tokenData) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokenData, null, 2), 'utf8');
}

/**
 * Saves client credentials to client_secret.json
 */
function saveClientCredentials(clientId, clientSecret) {
  const creds = {
    installed: {
      client_id: clientId.trim(),
      client_secret: clientSecret.trim(),
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      redirect_uris: ["http://localhost:3000/oauth2callback"]
    }
  };
  fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(creds, null, 2), 'utf8');
  return creds.installed;
}

/**
 * Generates Google OAuth 2.0 Authorization URL
 */
function getAuthUrl(clientId, redirectUri = 'http://localhost:3000/oauth2callback', loginHint = 'dattimanikanta22@gmail.com') {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube',
    access_type: 'offline',
    prompt: 'consent'
  });
  if (loginHint) {
    params.set('login_hint', loginHint);
  }
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

/**
 * Exchanges authorization code for tokens
 */
function exchangeCodeForTokens(code, clientId, clientSecret, redirectUri = 'http://localhost:3000/oauth2callback') {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    }).toString();

    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            return reject(new Error(`OAuth Error: ${json.error_description || json.error}`));
          }
          const tokenData = {
            access_token: json.access_token,
            refresh_token: json.refresh_token,
            scope: json.scope,
            token_type: json.token_type,
            expiry_date: Date.now() + (json.expires_in * 1000)
          };
          saveToken(tokenData);
          resolve(tokenData);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Gets a valid access token (refreshes if needed)
 */
function getValidAccessToken() {
  return new Promise((resolve, reject) => {
    const creds = getClientCredentials();
    if (!creds) {
      return reject(new Error('Missing client_secret.json. Please connect YouTube first.'));
    }

    const token = getStoredToken();
    if (!token) {
      return reject(new Error('Missing token.json. Please authorize your YouTube channel.'));
    }

    // Check if token is still valid (give 2 min buffer)
    if (token.expiry_date && Date.now() < (token.expiry_date - 120000) && token.access_token) {
      return resolve(token.access_token);
    }

    if (!token.refresh_token) {
      return reject(new Error('No refresh token found. Please re-authorize YouTube.'));
    }

    // Refresh token
    const postData = new URLSearchParams({
      client_id: creds.client_id,
      client_secret: creds.client_secret,
      refresh_token: token.refresh_token,
      grant_type: 'refresh_token'
    }).toString();

    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            return reject(new Error(`Token refresh failed: ${json.error_description || json.error}`));
          }
          token.access_token = json.access_token;
          token.expiry_date = Date.now() + (json.expires_in * 1000);
          if (json.refresh_token) token.refresh_token = json.refresh_token;
          saveToken(token);
          resolve(token.access_token);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Finds the latest video in output directory
 */
function getLatestVideoFile() {
  if (!fs.existsSync(OUTPUT_DIR)) return null;
  const files = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.webm') || f.endsWith('.mp4'))
    .map(f => ({
      name: f,
      path: path.join(OUTPUT_DIR, f),
      mtime: fs.statSync(path.join(OUTPUT_DIR, f)).mtime
    }))
    .sort((a, b) => b.mtime - a.mtime);

  return files.length > 0 ? files[0].path : null;
}

/**
 * Uploads a video file directly to YouTube using Resumable Upload protocol
 * @param {Object} metadata
 * @param {string} videoFilePath (optional, auto-picks latest recorded video if not provided)
 */
async function uploadVideoToYouTube(metadata, videoFilePath) {
  // 1. Resolve video file path
  let targetFile = videoFilePath;
  if (!targetFile || !fs.existsSync(targetFile)) {
    targetFile = getLatestVideoFile();
  }

  if (!targetFile || !fs.existsSync(targetFile)) {
    throw new Error('No recorded video file found to upload. Please click "Record & Export Video" first in the studio!');
  }

  const stat = fs.statSync(targetFile);
  const fileSize = stat.size;

  if (fileSize === 0) {
    throw new Error('Video file is empty.');
  }

  // 2. Obtain valid Access Token
  const accessToken = await getValidAccessToken();

  // 3. Prepare Video Resource Metadata (COPPA Made For Kids strictly enforced)
  const videoResource = {
    snippet: {
      title: (metadata.title || 'తెలుగు పిల్లల సరదా కథ 🌟 Fun Kids Video').slice(0, 100),
      description: metadata.description || 'Welcome to our Kids channel! Subscribe for daily stories and rhymes!\n\n#telugukids #chandamamakathalu',
      tags: Array.isArray(metadata.tags) ? metadata.tags.slice(0, 30) : ['kids', 'telugu kids', 'nursery rhymes'],
      categoryId: '27', // Education
      defaultLanguage: metadata.language || 'te',
      defaultAudioLanguage: metadata.language || 'te'
    },
    status: {
      privacyStatus: metadata.privacyStatus || 'public',
      selfDeclaredMadeForKids: true // Mandatory for kids content
    }
  };

  console.log('----------------------------------------------------------------');
  console.log('🚀 Initiating YouTube Upload Session...');
  console.log(`📁 File: ${path.basename(targetFile)} (${(fileSize / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`📌 Title: ${videoResource.snippet.title}`);
  console.log(`👶 Made For Kids: YES`);
  console.log('----------------------------------------------------------------');

  // 4. Initiate Resumable Upload
  const uploadUrl = await initiateResumableUpload(accessToken, videoResource, fileSize, targetFile);

  // 5. Upload File Chunks / Stream
  const uploadResult = await streamFileToUploadUrl(uploadUrl, targetFile, fileSize);

  console.log('----------------------------------------------------------------');
  console.log('🎉 UPLOAD COMPLETE!');
  console.log(`📺 Video ID: ${uploadResult.id}`);
  console.log(`🔗 Watch URL: https://youtu.be/${uploadResult.id}`);
  console.log('----------------------------------------------------------------');

  return {
    success: true,
    id: uploadResult.id,
    url: `https://youtu.be/${uploadResult.id}`,
    title: videoResource.snippet.title
  };
}

function initiateResumableUpload(accessToken, videoResource, fileSize, targetFile) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(videoResource);
    const isMp4 = targetFile.endsWith('.mp4');
    const mimeType = isMp4 ? 'video/mp4' : 'video/webm';

    const req = https.request('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Upload-Content-Type': mimeType,
        'X-Upload-Content-Length': fileSize.toString(),
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        let errBody = '';
        res.on('data', chunk => errBody += chunk);
        res.on('end', () => {
          reject(new Error(`Failed to initiate YouTube upload (${res.statusCode}): ${errBody}`));
        });
        return;
      }

      const location = res.headers['location'];
      if (!location) {
        return reject(new Error('Google did not return upload Location header.'));
      }
      resolve(location);
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function streamFileToUploadUrl(uploadUrl, filePath, fileSize) {
  return new Promise((resolve, reject) => {
    const isMp4 = filePath.endsWith('.mp4');
    const mimeType = isMp4 ? 'video/mp4' : 'video/webm';

    const parsed = new URL(uploadUrl);
    const req = https.request(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Length': fileSize.toString(),
        'Content-Type': mimeType
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode === 200 || res.statusCode === 201) {
            const json = JSON.parse(body);
            resolve(json);
          } else {
            reject(new Error(`YouTube Upload failed (${res.statusCode}): ${body}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);

    // Stream file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(req);
  });
}

// Standalone CLI helper
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes('--auth')) {
    const creds = getClientCredentials();
    if (!creds) {
      console.error('Please create client_secret.json or run connect_youtube.bat first.');
      process.exit(1);
    }
    const authUrl = getAuthUrl(creds.client_id);
    console.log('Open this link in your browser to authorize your YouTube channel:');
    console.log(authUrl);
  } else {
    console.log('YouTube Uploader Module Loaded.');
  }
}

module.exports = {
  uploadVideoToYouTube,
  getClientCredentials,
  getStoredToken,
  saveClientCredentials,
  getAuthUrl,
  exchangeCodeForTokens,
  getValidAccessToken
};
