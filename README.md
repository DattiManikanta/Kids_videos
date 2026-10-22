# 🌟 TinyToons Studio | Automated Multi-Language Kids Video & Daily YouTube Hub

### 🌐 All Languages Supported: 🇮🇳 తెలుగు (Telugu) • 🇮🇳 हिन्दी (Hindi) • 🇬🇧 English • 🇮🇳 தமிழ் (Tamil) • 🇮🇳 ಕನ್ನಡ (Kannada) • 🇪🇸 Español (Spanish)
### 📺 Target Channel: **[@manikantadatti6150](https://www.youtube.com/@manikantadatti6150)**

A complete end-to-end automated kids animation, voice narration, and YouTube publishing platform built for:
1. **📱 Viral YouTube Shorts (9:16)**: Animal sounds, Alphabets & Phonics, 1-5 Counting with colorful balloons.
2. **🌙 Bedtime Stories & Moral Cartoons (16:9)**: Panchatantra and Aesop classics (Tortoise & Hare, Thirsty Crow, Sweet Moon Lullaby story).
3. **🎵 Nursery Rhymes & Sing-Alongs (16:9)**: Cocomelon-style bouncy karaoke subtitles, lively tunes, and animated vector characters.
4. **🗣️ Real Cheerful Spoken Voiceover**: High-Definition Google Natural speech and Web Speech synthesis for every supported language.
5. **⚡ 1-Click Auto-Produce & Auto-Upload to YouTube**: Automatically renders animation + spoken audio into `.webm`/`.mp4` and uploads straight to YouTube with COPPA compliance (`Made For Kids = YES`).

---

## 🎯 Content Libraries Across All 6 Languages

### 1. 🇮🇳 Telugu (తెలుగు)
- **Shorts**: 🦁 జంతువుల శబ్దాల క్విజ్ (సింహం), 🍎 తెలుగు అక్షరమాల ('అ' 'ఆ'), 🎈 1 నుండి 5 వరకు సంఖ్యల సరదా
- **Stories**: 🐢 కుందేలు మరియు తాబేలు పరుగు పందెం, 🐦 దాహం వేసిన తెలివైన కాకి, 🌙 చందమామ జోలపాట కథ
- **Rhymes**: 🦜 చిట్టి చిలకమ్మా, 🌙 చందమామ రావే, 🐐 బుజ్జి మేక బుజ్జి మేక

### 2. 🇮🇳 Hindi (हिन्दी)
- **Shorts**: 🦁 जंगली जानवरों की आवाज़ें (शेर की दहाड़), 🍎 'अ' से अनार, 'आ' से आम (वर्णमाला), 🎈 1 से 5 तक गिनती
- **Stories**: 🐢 कछुआ और खरगोश की दौड़, 🐦 चतुर प्यासा कौआ और मटका, 🌙 चंदा मामा और नन्हा चमकता तारा
- **Rhymes**: 🐟 मछली जल की रानी है, 🪵 लकड़ी की काठी काठी पे घोड़ा, 🌙 चंदा मामा दूर के पुए पकाएं बूर के

### 3. 🇬🇧 English
- **Shorts**: 🦁 Guess Who Says ROAR?, 🍎 Letter A is for Apple, 🎈 Number Safari: Count 1 to 5
- **Stories**: 🐢 The Tortoise and the Hare, 🐰 Barnaby the Brave Little Bunny, 🌙 The Moon and the Lost Star
- **Rhymes**: ⭐ Twinkle Twinkle Little Star, 🚌 The Wheels on the Bus, 🚜 Old MacDonald Had a Farm

### 4. 🇮🇳 Tamil (தமிழ்)
- **Shorts**: 🦁 விலங்குகள் ஒலி வினாடி வினா (சிங்கம்), 🍎 'அ' அணில் 'ஆ' ஆடு, 🎈 1 முதல் 5 எண்கள்
- **Stories**: 🐢 ஆமை மற்றும் முயல் பந்தயம் (ஈசாப் நீதிக்கதை)
- **Rhymes**: 🌙 நிலா நிலா ஓடி வா நில்லாமல் ஓடி வா

### 5. 🇮🇳 Kannada (ಕನ್ನಡ)
- **Shorts**: 🦁 ಪ್ರಾಣಿಗಳ ಧ್ವನಿ ರಸಪ್ರಶ್ನೆ (ಸಿಂಹದ ಗರ್ಜನೆ), 🎈 1 ರಿಂದ 5 ಎಣಿಕೆ
- **Stories**: 🐢 ಮೊಲ ಮತ್ತು ಆಮೆಯ ಓಟದ ಸ್ಪರ್ಧೆ (ಪಂಚತಂತ್ರ ನೀತಿಕಥೆ)
- **Rhymes**: 🌙 ಚಂದಮಾಮ ಬಾ ಬಾ ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ

### 6. 🇪🇸 Spanish (Español)
- **Shorts**: 🦁 ¿Quién Hace Este Sonido? ¡El León!
- **Stories**: 🐢 La Liebre y la Tortuga (Fábula de Esopo)
- **Rhymes**: ⭐ Estrellita Dónde Estás

---

## 🚀 How to Run TinyToons Studio

### Method 1: Web Studio (Interactive 1-Click UI)
Double-click:
```bat
start_studio.bat
```
Opens **`http://localhost:3000`** in your browser.
1. Select any of the **6 Languages** at the top.
2. Click **"⚡ 1-Click Auto-Publish"** on the top bar:
   - Automatically selects today's scheduled episode
   - Records the animated cartoon + spoken voice narration
   - Saves the video file to the `output/` folder
   - Publishes directly to YouTube!

### Method 2: Automatic Daily Windows Publisher (Headless / Scheduled)
Double-click:
```bat
daily_publish.bat
```
- Alternates through the 7-day schedule across the week.
- You can specify any language:
  ```bat
  daily_publish.bat --lang=hi
  daily_publish.bat --lang=te
  daily_publish.bat --lang=en
  daily_publish.bat --lang=all
  ```

### Method 3: Windows Task Scheduler (Daily at 9:00 AM)
Right-click **`setup_daily_task.bat`** and choose **"Run as administrator"**.
Your computer will automatically run the publisher every morning at **09:00 AM**!

---

## 📺 YouTube Auto-Upload & Channel Setup

The publisher is pre-configured to target your channel:
👉 **https://www.youtube.com/@manikantadatti6150**

### 2-Minute OAuth Setup:
1. Open [Google Cloud Console](https://console.cloud.google.com/) and create a project (e.g. *TinyToons Automation*).
2. Go to **APIs & Services > Library** and enable **YouTube Data API v3**.
3. Go to **Credentials > Create Credentials > OAuth 2.0 Client ID**:
   - Application Type: **Web application** (or Desktop)
   - Authorized redirect URIs: `http://localhost:3000/oauth2callback`
4. Click Download JSON, rename it to **`client_secret.json`**, and place it inside the `kids-video-automation/` folder (or copy-paste Client ID & Secret in the studio UI).
5. In the studio, click **"🔗 Channel Connect"** -> Authorize your `@manikantadatti6150` account -> Done! Your token is saved permanently in `token.json` for 100% automated uploads!
