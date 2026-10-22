// Daily Kids Video Generator & Channel Publisher
// Rotates automatically through the 3 requested categories:
// 1. YouTube Shorts (Animal Facts, ABCs, Numbers, Quizzes - 9:16)
// 2. Bedtime Stories & Moral Tales (Cartoons - 16:9)
// 3. Nursery Rhymes & Sing-Alongs (Bouncy Karaoke - 16:9)
// Supports all languages: Telugu (తెలుగు), Hindi (हिन्दी), English, Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Spanish (Español)

const fs = require('fs');
const path = require('path');
const { 
  KIDS_CONTENT_LIBRARY, 
  KIDS_CONTENT_LIBRARY_TE, 
  KIDS_CONTENT_LIBRARY_HI,
  KIDS_CONTENT_LIBRARY_EN,
  KIDS_CONTENT_LIBRARY_TA,
  KIDS_CONTENT_LIBRARY_KN,
  KIDS_CONTENT_LIBRARY_ES
} = require('./content_library.js');

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 7-Day Telugu Content Rotation Matrix (తెలుగు ప్రణాళిక)
const ROTATION_SCHEDULE_TE = [
  { day: 'Sunday', category: 'shorts', episodeId: 'te_short_numbers_telugu', desc: '🎈 1 నుండి 5 వరకు సంఖ్యల సరదా! (Telugu Counting 1 to 5)' },
  { day: 'Monday', category: 'shorts', episodeId: 'te_short_animal_quiz_1', desc: '🦁 జంతువుల శబ్దాల క్విజ్: ఎవరు గర్జిస్తారు? (Lion Sound Quiz)' },
  { day: 'Tuesday', category: 'stories', episodeId: 'te_story_rabbit_tortoise', desc: '🐢 నీతికథ: కుందేలు మరియు తాబేలు పరుగు పందెం (Rabbit & Tortoise)' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'te_rhyme_chitti_chilakamma', desc: '🦜 తెలుగు రైమ్: చిట్టి చిలకమ్మా అమ్మ కొట్టిందా? (Chitti Chilakamma)' },
  { day: 'Thursday', category: 'shorts', episodeId: 'te_short_telugu_varnamala', desc: '🍎 తెలుగు అక్షరమాల సరదా: "అ" అరటిపండు, "ఆ" ఆవు (Aksharamala)' },
  { day: 'Friday', category: 'stories', episodeId: 'te_story_thirsty_crow', desc: '🐦 నీతికథ: దాహం వేసిన తెలివైన కాకి కథ (The Thirsty Crow)' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'te_rhyme_chandamama_raave', desc: '🌙 అమృతమైన జోలపాట: చందమామ రావే జాబిల్లి రావే (Chandamama Raave)' }
];

// 7-Day Hindi Content Rotation Matrix (हिन्दी प्रणालिका)
const ROTATION_SCHEDULE_HI = [
  { day: 'Sunday', category: 'shorts', episodeId: 'hi_short_numbers_hindi', desc: '🎈 1 से 5 तक गिनती का मज़ा! (Counting 1 to 5)' },
  { day: 'Monday', category: 'shorts', episodeId: 'hi_short_animal_quiz_1', desc: '🦁 जंगली जानवरों की आवाज़ें: शेर की दहाड़ (Lion Sound Quiz)' },
  { day: 'Tuesday', category: 'stories', episodeId: 'hi_story_rabbit_tortoise', desc: '🐢 पंचतंत्र कथा: कछुआ और खरगोश की दौड़ (Rabbit & Tortoise)' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'hi_rhyme_machli_jal', desc: '🐟 बालगीत: मछली जल की रानी है, जीवन उसका पानी है (Machli Jal)' },
  { day: 'Thursday', category: 'shorts', episodeId: 'hi_short_hindi_varnamala', desc: '🍎 हिंदी वर्णमाला: अ से अनार, आ से आम (Varnamala)' },
  { day: 'Friday', category: 'stories', episodeId: 'hi_story_thirsty_crow', desc: '🐦 नीतिकथा: चतुर प्यासा कौआ और मटका (The Thirsty Crow)' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'hi_rhyme_lakdi_ki_kathi', desc: '🪵 प्रसिद्ध बाल कविता: लकड़ी की काठी, काठी पे घोड़ा (Lakdi Ki Kathi)' }
];

// 7-Day English Content Rotation Matrix
const ROTATION_SCHEDULE_EN = [
  { day: 'Sunday', category: 'shorts', episodeId: 'short_numbers_safari', desc: '🎈 Number Safari: Count 1 to 5 with Flying Balloons!' },
  { day: 'Monday', category: 'shorts', episodeId: 'short_animal_quiz_1', desc: '🦁 Guess the Animal Sound: Who says ROAR?' },
  { day: 'Tuesday', category: 'stories', episodeId: 'story_moon_lost_star', desc: '🌙 Bedtime Story: The Moon and the Lost Star' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'rhyme_twinkle_twinkle', desc: '⭐ Sing-Along: Twinkle Twinkle Little Star' },
  { day: 'Thursday', category: 'shorts', episodeId: 'short_abc_magic', desc: '🍎 ABC Phonics: Letter A is for Apple' },
  { day: 'Friday', category: 'stories', episodeId: 'story_brave_bunny', desc: '🐰 Moral Tale: Barnaby the Brave Little Bunny' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'rhyme_wheels_on_bus', desc: '🚌 Sing-Along: The Wheels on the Bus' }
];

// 7-Day Tamil Content Rotation Matrix (தமிழ் அட்டவணை)
const ROTATION_SCHEDULE_TA = [
  { day: 'Sunday', category: 'shorts', episodeId: 'ta_short_numbers_tamil', desc: '🎈 1 முதல் 5 எண்கள் வண்ண பலூன்கள்' },
  { day: 'Monday', category: 'shorts', episodeId: 'ta_short_animal_quiz_1', desc: '🦁 விலங்குகள் ஒலி வினாடி வினா (சிங்கம் கர்ஜனை)' },
  { day: 'Tuesday', category: 'stories', episodeId: 'ta_story_rabbit_tortoise', desc: '🐢 ஆமை மற்றும் முயல் பந்தயம்' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'ta_rhyme_nila_nila', desc: '🌙 நிலா நிலா ஓடி வா நில்லாமல் ஓடி வா' },
  { day: 'Thursday', category: 'shorts', episodeId: 'ta_short_tamil_letters', desc: '🍎 தமிழ் உயிர் எழுத்துக்கள்: அ அணில், ஆ ஆடு' },
  { day: 'Friday', category: 'stories', episodeId: 'ta_story_rabbit_tortoise', desc: '🐢 ஈசாப் நீதிக்கதை' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'ta_rhyme_nila_nila', desc: '🌙 மழலையர் தாலாட்டு பாடல்' }
];

// 7-Day Kannada Content Rotation Matrix (ಕನ್ನಡ ವೇಳಾಪಟ್ಟಿ)
const ROTATION_SCHEDULE_KN = [
  { day: 'Sunday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಪ್ರಾಣಿಗಳ ಧ್ವನಿ ರಸಪ್ರಶ್ನೆ' },
  { day: 'Monday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಸಿಂಹದ ಗರ್ಜನೆ' },
  { day: 'Tuesday', category: 'stories', episodeId: 'kn_story_rabbit_tortoise', desc: '🐢 ಮೊಲ ಮತ್ತು ಆಮೆಯ ಓಟದ ಸ್ಪರ್ಧೆ' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'kn_rhyme_chandamama_baa', desc: '🌙 ಚಂದಮಾಮ ಬಾ ಬಾ ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ' },
  { day: 'Thursday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಕಾಡಿನ ಪ್ರಾಣಿಗಳು' },
  { day: 'Friday', category: 'stories', episodeId: 'kn_story_rabbit_tortoise', desc: '🐢 ಪಂಚತಂತ್ರ ನೀತಿಕಥೆ' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'kn_rhyme_chandamama_baa', desc: '🌙 ಜೋಗುಳ ಹಾಡು' }
];

// 7-Day Spanish Content Rotation Matrix
const ROTATION_SCHEDULE_ES = [
  { day: 'Sunday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 ¿Quién Hace Este Sonido? ¡El León!' },
  { day: 'Monday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 Rugido del Rey de la Selva' },
  { day: 'Tuesday', category: 'stories', episodeId: 'es_story_rabbit_tortoise', desc: '🐢 La Liebre y la Tortuga' },
  { day: 'Wednesday', category: 'rhymes', episodeId: 'es_rhyme_estrellita', desc: '⭐ Estrellita Dónde Estás' },
  { day: 'Thursday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 Adivina el Animal' },
  { day: 'Friday', category: 'stories', episodeId: 'es_story_rabbit_tortoise', desc: '🐢 Fábula de Esopo con Moraleja' },
  { day: 'Saturday', category: 'rhymes', episodeId: 'es_rhyme_estrellita', desc: '⭐ Canción de Cuna para Niños' }
];

const SCHEDULE_MAP = {
  te: ROTATION_SCHEDULE_TE,
  hi: ROTATION_SCHEDULE_HI,
  en: ROTATION_SCHEDULE_EN,
  ta: ROTATION_SCHEDULE_TA,
  kn: ROTATION_SCHEDULE_KN,
  es: ROTATION_SCHEDULE_ES
};

const LIBRARY_MAP = {
  te: KIDS_CONTENT_LIBRARY_TE,
  hi: KIDS_CONTENT_LIBRARY_HI,
  en: KIDS_CONTENT_LIBRARY_EN,
  ta: KIDS_CONTENT_LIBRARY_TA,
  kn: KIDS_CONTENT_LIBRARY_KN,
  es: KIDS_CONTENT_LIBRARY_ES
};

function generatePackageForLang(lang, now = new Date()) {
  const dayIndex = now.getDay();
  const scheduleList = SCHEDULE_MAP[lang] || ROTATION_SCHEDULE_EN;
  const todaySchedule = scheduleList[dayIndex];
  const dateStr = now.toISOString().split('T')[0];

  const lib = LIBRARY_MAP[lang] || KIDS_CONTENT_LIBRARY_EN;
  const categoryList = (lib && lib[todaySchedule.category]) ? lib[todaySchedule.category] : (KIDS_CONTENT_LIBRARY[todaySchedule.category] || []);
  const episode = categoryList.find(ep => ep.id === todaySchedule.episodeId) || categoryList[0];

  if (!episode) {
    console.error(`Error: Could not find episode for lang ${lang}`);
    return null;
  }

  const channelUrl = 'https://www.youtube.com/@manikantadatti6150';
  const description = `${episode.seo.description}\n\n👉 Subscribe to @manikantadatti6150 for daily kids magic:\n${channelUrl}\n\n#kids #cartoons #animation #rhymes #shorts`;

  const dailyPackage = {
    channel: '@manikantadatti6150',
    channelUrl: channelUrl,
    language: lang,
    generatedAt: now.toISOString(),
    day: todaySchedule.day,
    category: todaySchedule.category,
    aspectRatio: episode.aspectRatio,
    durationSec: episode.durationSec,
    targetAge: episode.targetAge,
    title: episode.seo.title,
    description: description,
    tags: [...episode.seo.tags, 'manikantadatti6150', '@manikantadatti6150', `${lang} kids`],
    coppaMadeForKids: true,
    scenesCount: episode.scenes.length,
    scenes: episode.scenes
  };

  const packageFile = path.join(OUTPUT_DIR, `daily_${lang}_${dateStr}_${episode.id}.json`);
  fs.writeFileSync(packageFile, JSON.stringify(dailyPackage, null, 2), 'utf8');

  return { dailyPackage, packageFile, episode, todaySchedule };
}

function runDailyPublisher(targetLang = 'te') {
  const args = process.argv.slice(2);
  const langArg = args.find(a => a.startsWith('--lang='));
  const lang = langArg ? langArg.split('=')[1] : targetLang;

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  console.log('================================================================');
  console.log(`🌟 DAILY KIDS PUBLISHER // Target: @manikantadatti6150`);
  console.log(`📅 Date: ${dateStr}`);
  console.log('================================================================');

  if (lang === 'all') {
    const allLangs = ['te', 'hi', 'en', 'ta', 'kn', 'es'];
    console.log(`⚡ Generating daily video packages for ALL 6 languages: ${allLangs.join(', ').toUpperCase()}`);
    allLangs.forEach(l => {
      const result = generatePackageForLang(l, now);
      if (result) {
        console.log(`✅ [${l.toUpperCase()}] Generated: ${path.basename(result.packageFile)} - "${result.episode.title}"`);
      }
    });
  } else {
    const result = generatePackageForLang(lang, now);
    if (result) {
      console.log(`📺 Language: ${lang.toUpperCase()}`);
      console.log(`📅 Day: ${result.todaySchedule.day} (${result.todaySchedule.category.toUpperCase()})`);
      console.log(`🎬 Featured: ${result.todaySchedule.desc}`);
      console.log(`📌 Title: ${result.episode.seo.title}`);
      console.log(`📁 File: ${result.packageFile}`);
      console.log(`👶 COPPA Made For Kids: YES`);
    }
  }

  console.log('================================================================');
}

if (require.main === module) {
  runDailyPublisher();
}

module.exports = { 
  runDailyPublisher, 
  generatePackageForLang, 
  SCHEDULE_MAP,
  ROTATION_SCHEDULE_TE,
  ROTATION_SCHEDULE_HI,
  ROTATION_SCHEDULE_EN,
  ROTATION_SCHEDULE_TA,
  ROTATION_SCHEDULE_KN,
  ROTATION_SCHEDULE_ES
};
