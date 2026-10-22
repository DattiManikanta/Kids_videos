// Automated Daily Kids Video Publisher & YouTube Pipeline
// Auto-launches studio rendering engine, records cartoon visual + speaking voice,
// and publishes directly to YouTube channel @manikantadatti6150

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn, execSync } = require('child_process');
const { runDailyPublisher, generatePackageForLang } = require('./daily_generator.js');

const PORT = 3000;
const OUTPUT_DIR = path.join(__dirname, 'output');

function findBrowserPath() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function isServerRunning() {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}/api/daily-status`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1200, () => {
      req.destroy();
      resolve(false);
    });
  });
}

function startServerInBackground() {
  const nodeBin = fs.existsSync(path.join(__dirname, '..', 'tools', 'node.exe'))
    ? path.join(__dirname, '..', 'tools', 'node.exe')
    : 'node';

  console.log('🚀 Starting TinyToons studio server in background...');
  const serverProcess = spawn(nodeBin, [path.join(__dirname, 'server.cjs')], {
    detached: true,
    stdio: 'ignore'
  });
  serverProcess.unref();
}

async function main() {
  const args = process.argv.slice(2);
  const langArg = args.find(a => a.startsWith('--lang='));
  const lang = langArg ? langArg.split('=')[1] : 'en';

  console.log('================================================================');
  console.log('🌟 TINYTOONS AUTOMATED DAILY VIDEO & YOUTUBE PUBLISHER');
  console.log('📺 Target Channel: https://www.youtube.com/@manikantadatti6150');
  console.log(`🌐 Target Language: ${lang.toUpperCase()}`);
  console.log('================================================================\n');

  // 1. Generate Metadata Package
  console.log('📦 Step 1: Generating today\'s SEO package...');
  runDailyPublisher(lang);

  // 2. Check and start server
  console.log('\n🌐 Step 2: Checking studio backend server...');
  let running = await isServerRunning();
  if (!running) {
    startServerInBackground();
    // Wait up to 5 seconds for server to start
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 500));
      running = await isServerRunning();
      if (running) break;
    }
  }

  if (running) {
    console.log(`✅ Studio server is RUNNING at http://localhost:${PORT}`);
  } else {
    console.warn(`⚠️ Warning: Could not confirm server on port ${PORT}. Attempting browser launch...`);
  }

  // 3. Find browser
  const browserPath = findBrowserPath();
  const autorunUrl = `http://localhost:${PORT}/?autorun=1&lang=${encodeURIComponent(lang)}&autoupload=1`;

  if (browserPath) {
    console.log(`\n🎬 Step 3: Launching Animated Video Engine...`);
    console.log(`📁 Browser: ${path.basename(browserPath)}`);
    console.log(`🔗 Studio Autorun URL: ${autorunUrl}\n`);
    console.log('▶️ The studio is now recording today\'s cartoon episode with speaking voice!');
    console.log('   Once playback completes, the video will be encoded and sent to YouTube API.\n');

    const browserProcess = spawn(browserPath, [
      `--app=${autorunUrl}`,
      '--autoplay-policy=no-user-gesture-required',
      '--window-size=1200,850'
    ], { detached: true, stdio: 'ignore' });
    browserProcess.unref();

  } else {
    console.log('\n⚠️ No direct Chrome/Edge executable detected. Opening default browser...');
    try {
      execSync(`start "" "${autorunUrl}"`);
    } catch (e) {
      console.log(`Please open this URL in your browser: ${autorunUrl}`);
    }
  }

  console.log('================================================================');
  console.log('🎉 Automation task launched successfully!');
  console.log('📁 Video output folder: ' + OUTPUT_DIR);
  console.log('📺 YouTube Channel: https://www.youtube.com/@manikantadatti6150');
  console.log('================================================================');
}

if (require.main === module) {
  main().catch(err => {
    console.error('Publisher error:', err);
    process.exit(1);
  });
}

module.exports = { main };
