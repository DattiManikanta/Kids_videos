// test_push_video.cjs - 1-Step Video Tester & YouTube Auto-Pusher
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { getStoredToken, getClientCredentials, getAuthUrl, uploadVideoToYouTube, getLatestVideoFile } = require('./youtube_uploader.js');

async function run() {
  console.log('================================================================');
  console.log('🚀 TINYTOONS TEST VIDEO AUTO-PUSHER (@manikantadatti6150)');
  console.log('================================================================\n');

  const creds = getClientCredentials();
  if (!creds) {
    console.error('❌ client_secret.json missing!');
    return;
  }

  const token = getStoredToken();
  if (!token) {
    console.log('⚠️ YouTube authorization token (token.json) not found yet.');
    console.log('👉 Opening Google Authorization in your default browser...');
    const authUrl = getAuthUrl(creds.client_id);
    console.log(`\n🔗 If your browser does not open automatically, open this link:\n${authUrl}\n`);
    try {
      execSync(`start "" "${authUrl}"`);
    } catch (e) {}
    console.log('Quick Steps:');
    console.log('1. Select dattimanikanta22@gmail.com.');
    console.log('2. Click Advanced -> Go to Quickstart (unsafe) -> Continue / Allow.');
    console.log('3. Once you see "YouTube Channel Connected!", run this test again:');
    console.log('   ..\\tools\\node.exe test_push_video.cjs\n');
    return;
  }

  console.log('✅ YouTube Account Authorized: Token found!');
  const latestVideo = getLatestVideoFile();

  if (!latestVideo) {
    console.log('⚠️ No recorded video found in output/ directory yet.');
    console.log('🎬 Opening TinyToons Studio to record an animated test video...');
    const studioUrl = 'http://localhost:3000/?autorun=1&lang=en';
    try {
      execSync(`start "" "${studioUrl}"`);
    } catch (e) {}
    console.log('▶️ The studio is now recording today\'s episode!');
    console.log('   Once the episode finishes playing (about 25 seconds), it will automatically save to output/ and upload.\n');
    return;
  }

  console.log(`📹 Found recorded video: ${path.basename(latestVideo)}`);
  console.log('🚀 Uploading test video to YouTube channel @manikantadatti6150...');

  try {
    const result = await uploadVideoToYouTube({
      title: '🦁 Guess The Animal Sound! #Shorts #KidsLearning (TinyToons Test)',
      description: 'Can you guess which friendly animal is making this sound? Test your toddler with this fun animal sound riddle! Subscribe to @manikantadatti6150 for daily kids magic! 🌟\n\n#kidsshorts #animalsounds #youtubekids #cartoons #animation #toddlerfun',
      tags: ['kids shorts', 'animal sounds', 'toddler learning', 'guess the animal', 'manikantadatti6150', 'animation'],
      language: 'en',
      privacyStatus: 'public'
    }, latestVideo);

    console.log('\n================================================================');
    console.log('🎉 SUCCESS! YOUR TEST VIDEO IS LIVE ON YOUTUBE!');
    console.log(`📺 Watch it here: ${result.url}`);
    console.log('================================================================\n');
  } catch (err) {
    console.error('❌ Upload error:', err.message);
  }
}

run();
