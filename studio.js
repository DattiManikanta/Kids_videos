// Kids Video Studio - Main Application Controller
// Orchestrates Multi-Language Content Selection, Canvas Rendering,
// Cheerful Spoken Voiceover Narration, Real-Time Video Recording,
// and 1-Click Automated YouTube Publishing (@manikantadatti6150)

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const previewCanvas = document.getElementById('previewCanvas');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const recordBtn = document.getElementById('recordBtn');
  const playBtnText = document.getElementById('playBtnText');
  const pauseBtnText = document.getElementById('pauseBtnText');
  const recordBtnText = document.getElementById('recordBtnText');
  
  const categoryTabs = document.querySelectorAll('.category-tab');
  const episodeSelect = document.getElementById('episodeSelect');
  const currentSceneText = document.getElementById('currentSceneText');
  const progressBar = document.getElementById('sceneProgressBar');
  const sceneTimeline = document.getElementById('sceneTimeline');
  const recordStatus = document.getElementById('recordStatus');
  const exportProgress = document.getElementById('exportProgress');
  
  // Language Switcher Elements
  const appTitle = document.getElementById('appTitle');
  const appTagline = document.getElementById('appTagline');
  const catSectionTitle = document.getElementById('catSectionTitle');
  const tabShortsTitle = document.getElementById('tabShortsTitle');
  const tabShortsDesc = document.getElementById('tabShortsDesc');
  const tabStoriesTitle = document.getElementById('tabStoriesTitle');
  const tabStoriesDesc = document.getElementById('tabStoriesDesc');
  const tabRhymesTitle = document.getElementById('tabRhymesTitle');
  const tabRhymesDesc = document.getElementById('tabRhymesDesc');
  const chooseEpisodeLabel = document.getElementById('chooseEpisodeLabel');
  const aiSectionTitle = document.getElementById('aiSectionTitle');
  const aiSectionSubtitle = document.getElementById('aiSectionSubtitle');
  const generateCustomBtnText = document.getElementById('generateCustomBtnText');

  // Voice Engine Controls
  const voiceSelect = document.getElementById('voiceSelect');
  const testVoiceBtn = document.getElementById('testVoiceBtn');
  const cloneVoiceBtn = document.getElementById('cloneVoiceBtn');
  const micToggleBtn = document.getElementById('micToggleBtn');
  const micBtnIcon = document.getElementById('micBtnIcon');
  const micBtnText = document.getElementById('micBtnText');
  const uploadVoiceBtn = document.getElementById('uploadVoiceBtn');
  const customVoiceFileInput = document.getElementById('customVoiceFileInput');
  const voiceStatusIndicator = document.getElementById('voiceStatusIndicator');
  const voiceStatusText = document.getElementById('voiceStatusText');
  const voiceCloneModal = document.getElementById('voiceCloneModal');
  const elevenApiKeyInput = document.getElementById('elevenApiKeyInput');
  const cloneVoiceSubmitBtn = document.getElementById('cloneVoiceSubmitBtn');
  const closeCloneModalBtn = document.getElementById('closeCloneModalBtn');
  const cloneStatusAlert = document.getElementById('cloneStatusAlert');
  let isVoiceCloned = false;

  // Custom Topic Elements
  const customTopicInput = document.getElementById('customTopicInput');
  const generateCustomBtn = document.getElementById('generateCustomBtn');
  const customCategorySelect = document.getElementById('customCategorySelect');

  // Metadata Fields
  const metaTitle = document.getElementById('metaTitle');
  const metaDesc = document.getElementById('metaDesc');
  const metaTags = document.getElementById('metaTags');
  const copyMetaBtn = document.getElementById('copyMetaBtn');
  const uploadYoutubeBtn = document.getElementById('uploadYoutubeBtn');
  const uploadStatusBanner = document.getElementById('uploadStatusBanner');

  // 1-Click Auto-Publish Elements
  const autoPublishTodayBtn = document.getElementById('autoPublishTodayBtn');
  const autoPublishModal = document.getElementById('autoPublishModal');
  const stepSelect = document.getElementById('stepSelect');
  const stepRecord = document.getElementById('stepRecord');
  const stepSave = document.getElementById('stepSave');
  const stepUpload = document.getElementById('stepUpload');
  const stepRecordDesc = document.getElementById('stepRecordDesc');
  const pipelineProgressFill = document.getElementById('pipelineProgressFill');
  const modalSuccessBox = document.getElementById('modalSuccessBox');
  const modalLiveUrl = document.getElementById('modalLiveUrl');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Multi-Language Content Metadata
  const LANG_META = {
    en: {
      name: 'English',
      badge: 'English',
      exampleTopic: 'e.g. Dinosaur learns to brush teeth, Colors with Fruit, Safari Animals...',
      greeting: 'Hello Little Explorers! Welcome to TinyToons Studio!'
    },
    te: {
      name: 'Telugu',
      badge: 'Telugu (తెలుగు)',
      exampleTopic: 'e.g. Baby elephant bath, Telugu alphabet, Chandamama story...',
      greeting: 'నమస్కారం చిన్నారులూ! TinyToons స్టూడియోకి స్వాగతం!'
    },
    hi: {
      name: 'Hindi',
      badge: 'Hindi (हिन्दी)',
      exampleTopic: 'e.g. Little elephant adventure, Fruit basket, Hindi varnamala...',
      greeting: 'नमस्ते प्यारे बच्चों! TinyToons स्टूडियो में आपका स्वागत है!'
    },
    ta: {
      name: 'Tamil',
      badge: 'Tamil (தமிழ்)',
      exampleTopic: 'e.g. Baby animal sounds, Tamil letters, Moral story...',
      greeting: 'வணக்கம் சுட்டி குழந்தைகளே! TinyToons தமிழ் ஸ்டுடியோவிற்கு நல்வரவு!'
    },
    kn: {
      name: 'Kannada',
      badge: 'Kannada (ಕನ್ನಡ)',
      exampleTopic: 'e.g. Jungle animals, Kannada rhymes, Sweet dreams...',
      greeting: 'ನಮಸ್ಕಾರ ಪುಟಾಣಿ ಮಕ್ಕಳೇ! TinyToons ಕನ್ನಡ ಸ್ಟುಡಿಯೋಗೆ ಸುಸ್ವಾಗತ!'
    },
    es: {
      name: 'Spanish',
      badge: 'Spanish (Español)',
      exampleTopic: 'e.g. Little dinosaur, Fruit basket, Nursery song...',
      greeting: '¡Hola pequeños exploradores! ¡Bienvenidos a TinyToons Studio!'
    }
  };

  // 7-Day Content Rotation Schedules for All Languages
  const ROTATION_SCHEDULES = {
    te: [
      { day: 'Sunday', category: 'shorts', episodeId: 'te_short_cute_dino', desc: '🦖 బుజ్జి డైనోసార్ సరదా డ్యాన్స్!' },
      { day: 'Monday', category: 'shorts', episodeId: 'te_short_animal_quiz_1', desc: '🦁 జంతువుల శబ్దాల క్విజ్ (సింహం గర్జన)' },
      { day: 'Tuesday', category: 'stories', episodeId: 'te_story_rabbit_tortoise', desc: '🐢 కుందేలు మరియు తాబేలు పరుగు పందెం' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'te_rhyme_chitti_chilakamma', desc: '🦜 చిట్టి చిలకమ్మా అమ్మ కొట్టిందా?' },
      { day: 'Thursday', category: 'shorts', episodeId: 'te_short_baby_elephant', desc: '🐘 బుజ్జి ఏనుగు బాబు సరదా నీటి బుడగలు!' },
      { day: 'Friday', category: 'stories', episodeId: 'te_story_thirsty_crow', desc: '🐦 దాహం వేసిన తెలివైన కాకి కథ' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'te_rhyme_chandamama_raave', desc: '🌙 చందమామ రావే జాబిల్లి రావే' }
    ],
    hi: [
      { day: 'Sunday', category: 'shorts', episodeId: 'hi_short_cute_dino', desc: '🦖 नन्हे डायनासोर का प्यारा डांस!' },
      { day: 'Monday', category: 'shorts', episodeId: 'hi_short_animal_quiz_1', desc: '🦁 जंगली जानवरों की आवाज़ें (शेर की दहाड़)' },
      { day: 'Tuesday', category: 'stories', episodeId: 'hi_story_rabbit_tortoise', desc: '🐢 कछुआ और खरगोश की दौड़' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'hi_rhyme_machli_jal', desc: '🐟 मछली जल की रानी है, जीवन उसका पानी है' },
      { day: 'Thursday', category: 'shorts', episodeId: 'hi_short_baby_elephant', desc: '🐘 हाथी राजा और जादुई पानी के बुलबुले!' },
      { day: 'Friday', category: 'stories', episodeId: 'hi_story_thirsty_crow', desc: '🐦 चतुर प्यासा कौआ और मटका' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'hi_rhyme_lakdi_ki_kathi', desc: '🪵 लकड़ी की काठी, काठी पे घोड़ा' }
    ],
    en: [
      { day: 'Sunday', category: 'shorts', episodeId: 'short_cute_dino', desc: '🦖 Baby Dino\'s Stomp & Roar Dance Adventure!' },
      { day: 'Monday', category: 'shorts', episodeId: 'short_animal_quiz_1', desc: '🦁 Guess the Animal Sound: Who says ROAR?' },
      { day: 'Tuesday', category: 'stories', episodeId: 'story_moon_lost_star', desc: '🌙 Bedtime Story: The Moon and the Lost Star' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'rhyme_twinkle_twinkle', desc: '⭐ Sing-Along: Twinkle Twinkle Little Star' },
      { day: 'Thursday', category: 'shorts', episodeId: 'short_baby_elephant', desc: '🐘 Jumbo the Baby Elephant: Rainbow Bubble Fun!' },
      { day: 'Friday', category: 'stories', episodeId: 'story_brave_bunny', desc: '🐰 Moral Tale: Barnaby the Brave Little Bunny' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'rhyme_wheels_on_bus', desc: '🚌 Sing-Along: The Wheels on the Bus' }
    ],
    ta: [
      { day: 'Sunday', category: 'shorts', episodeId: 'ta_short_numbers_tamil', desc: '🎈 1 முதல் 5 எண்கள் வண்ண பலூன்கள்' },
      { day: 'Monday', category: 'shorts', episodeId: 'ta_short_animal_quiz_1', desc: '🦁 விலங்குகள் ஒலி வினாடி வினா (சிங்கம் கர்ஜனை)' },
      { day: 'Tuesday', category: 'stories', episodeId: 'ta_story_rabbit_tortoise', desc: '🐢 ஆமை மற்றும் முயல் பந்தயம்' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'ta_rhyme_nila_nila', desc: '🌙 நிலா நிலா ஓடி வா நில்லாமல் ஓடி வா' },
      { day: 'Thursday', category: 'shorts', episodeId: 'ta_short_tamil_letters', desc: '🍎 தமிழ் உயிர் எழுத்துக்கள்: அ அணில், ஆ ஆடு' },
      { day: 'Friday', category: 'stories', episodeId: 'ta_story_rabbit_tortoise', desc: '🐢 ஈசாப் நீதிக்கதை' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'ta_rhyme_nila_nila', desc: '🌙 மழலையர் தாலாட்டு பாடல்' }
    ],
    kn: [
      { day: 'Sunday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಪ್ರಾಣಿಗಳ ಧ್ವನಿ ರಸಪ್ರಶ್ನೆ' },
      { day: 'Monday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಸಿಂಹದ ಗರ್ಜನೆ' },
      { day: 'Tuesday', category: 'stories', episodeId: 'kn_story_rabbit_tortoise', desc: '🐢 ಮೊಲ ಮತ್ತು ಆಮೆಯ ಓಟದ ಸ್ಪರ್ಧೆ' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'kn_rhyme_chandamama_baa', desc: '🌙 ಚಂದಮಾಮ ಬಾ ಬಾ ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ' },
      { day: 'Thursday', category: 'shorts', episodeId: 'kn_short_animal_quiz_1', desc: '🦁 ಕಾಡಿನ ಪ್ರಾಣಿಗಳು' },
      { day: 'Friday', category: 'stories', episodeId: 'kn_story_rabbit_tortoise', desc: '🐢 ಪಂಚತಂತ್ರ ನೀತಿಕಥೆ' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'kn_rhyme_chandamama_baa', desc: '🌙 ಜೋಗುಳ ಹಾಡು' }
    ],
    es: [
      { day: 'Sunday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 ¿Quién Hace Este Sonido? ¡El León!' },
      { day: 'Monday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 Rugido del Rey de la Selva' },
      { day: 'Tuesday', category: 'stories', episodeId: 'es_story_rabbit_tortoise', desc: '🐢 La Liebre y la Tortuga' },
      { day: 'Wednesday', category: 'rhymes', episodeId: 'es_rhyme_estrellita', desc: '⭐ Estrellita Dónde Estás' },
      { day: 'Thursday', category: 'shorts', episodeId: 'es_short_animal_quiz_1', desc: '🦁 Adivina el Animal' },
      { day: 'Friday', category: 'stories', episodeId: 'es_story_rabbit_tortoise', desc: '🐢 Fábula de Esopo con Moraleja' },
      { day: 'Saturday', category: 'rhymes', episodeId: 'es_rhyme_estrellita', desc: '⭐ Canción de Cuna para Niños' }
    ]
  };

  // Engines
  const canvasEngine = new KidsCanvasEngine(previewCanvas);
  const audioEngine = window.kidsAudio;

  // State
  let currentLang = 'en';
  let currentCategory = 'shorts';
  let currentEpisode = KIDS_CONTENT_LIBRARY.english.shorts[0];
  let currentSceneIndex = 0;
  let isPlaying = false;
  let isRecording = false;
  let sceneTimer = null;
  let mediaRecorder = null;
  let recordedChunks = [];
  let isAutoPublishing = false;

  // Initialize
  function init() {
    setupLanguageSwitch();
    setupCategories();
    setupVoiceControls();
    setupAutoPublishWorkflow();
    
    // Pre-load user WhatsApp voice if available
    audioEngine.loadCustomAudioFromUrl('/user_voice.mp4').then(res => {
      if (res.success) {
        console.log('🎤 User WhatsApp voice loaded successfully!', res.duration, 'seconds');
      }
    });

    // Check URL parameters for CLI / headless invocation
    const urlParams = new URLSearchParams(window.location.search);
    const startLang = urlParams.get('lang') || 'en';
    switchLanguage(startLang);
    canvasEngine.start();

    if (urlParams.get('autorun') === '1') {
      const targetLang = urlParams.get('lang') || 'en';
      console.log('🤖 AUTORUN MODE DETECTED: Target Lang =', targetLang);
      setTimeout(() => {
        runAutoPublishWorkflow(targetLang);
      }, 1500);
    }
  }

  function getCategoryList() {
    const langKeyMap = {
      te: 'telugu',
      hi: 'hindi',
      en: 'english',
      ta: 'tamil',
      kn: 'kannada',
      es: 'spanish'
    };
    const key = langKeyMap[currentLang] || 'english';
    const langLib = KIDS_CONTENT_LIBRARY[key];
    return (langLib && langLib[currentCategory]) ? langLib[currentCategory] : (KIDS_CONTENT_LIBRARY[currentCategory] || []);
  }

  function setupLanguageSwitch() {
    const pills = document.querySelectorAll('.lang-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const lang = pill.dataset.lang;
        if (lang) switchLanguage(lang);
      });
    });
  }

  function switchLanguage(lang) {
    currentLang = lang;

    // Toggle active button class
    document.querySelectorAll('.lang-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.lang === lang);
    });

    // Update Audio Engine Language
    audioEngine.setLanguage(lang);

    const meta = LANG_META[lang] || LANG_META['en'];

    // Keep all UI text strictly in clean, friendly English
    if (appTitle) appTitle.innerHTML = `TinyToons Studio <span class="badge-lang-tag">${meta.badge}</span>`;
    if (appTagline) appTagline.textContent = 'Automated Multi-Language Kids Video & Daily YouTube Channel Hub';
    if (playBtnText) playBtnText.textContent = 'Play Episode';
    if (pauseBtnText) pauseBtnText.textContent = 'Pause';
    if (recordBtnText) recordBtnText.textContent = 'Record & Export Video';
    if (catSectionTitle) catSectionTitle.textContent = '🎯 1. Select Content Category';
    if (tabShortsTitle) tabShortsTitle.textContent = 'Shorts & Riddles';
    if (tabShortsDesc) tabShortsDesc.textContent = 'Animal sounds, ABCs, 123s (9:16)';
    if (tabStoriesTitle) tabStoriesTitle.textContent = 'Bedtime Stories';
    if (tabStoriesDesc) tabStoriesDesc.textContent = 'Moral tales, sweet dreams (16:9)';
    if (tabRhymesTitle) tabRhymesTitle.textContent = 'Nursery Rhymes';
    if (tabRhymesDesc) tabRhymesDesc.textContent = 'Sing-along karaoke songs';
    if (chooseEpisodeLabel) chooseEpisodeLabel.textContent = `Choose Preset Episode (${meta.name}):`;
    if (aiSectionTitle) aiSectionTitle.textContent = '✨ 2. AI Custom Episode Maker';
    if (aiSectionSubtitle) aiSectionSubtitle.textContent = `Generate an animated 5-scene story or riddle in ${meta.name} on any kids topic:`;
    if (customTopicInput) customTopicInput.placeholder = meta.exampleTopic;
    if (generateCustomBtnText) generateCustomBtnText.textContent = '🪄 Generate Animated Episode';

    // Refresh voice list
    populateVoiceSelect();

    // Reload episodes in the new language
    loadEpisodeList();
    const list = getCategoryList();
    if (list.length > 0) {
      selectEpisode(list[0]);
    }
  }

  function setupVoiceControls() {
    populateVoiceSelect();
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => populateVoiceSelect();
    }

    if (voiceSelect) {
      voiceSelect.addEventListener('change', async (e) => {
        const val = e.target.value;
        if (val === 'cloned') {
          if (audioEngine.isMicActive) {
            audioEngine.disableMicrophone();
            updateMicButtonUI(false);
          }
          audioEngine.setVoiceMode('cloned');
          updateVoiceStatusUI('cloned');
        } else if (val === 'microphone') {
          await toggleMicrophone(true);
        } else if (val === 'user_voice_file') {
          if (audioEngine.isMicActive) {
            audioEngine.disableMicrophone();
            updateMicButtonUI(false);
          }
          const res = await audioEngine.loadCustomAudioFromUrl('/user_voice.mp4');
          if (res.success) {
            updateVoiceStatusUI('custom_audio', 'WhatsApp Voice: "Hello! ఎలా ఉన్నావు? బాగున్నావా?"');
          } else {
            alert('Could not load user_voice.mp4: ' + res.error);
          }
        } else if (val === 'custom_audio') {
          if (!audioEngine.customAudioBuffer) {
            if (customVoiceFileInput) customVoiceFileInput.click();
          } else {
            audioEngine.setVoiceMode('custom_audio');
            updateVoiceStatusUI('custom_audio');
          }
        } else {
          if (audioEngine.isMicActive) {
            audioEngine.disableMicrophone();
            updateMicButtonUI(false);
          }
          if (val === 'online_hd') {
            audioEngine.setVoiceMode('online_hd');
            updateVoiceStatusUI('online_hd');
          } else if (val === 'auto') {
            audioEngine.setVoiceMode(currentLang === 'en' ? 'system' : 'online_hd');
            audioEngine.setLanguage(currentLang);
            updateVoiceStatusUI('auto');
          } else {
            audioEngine.setVoiceMode('system_forced');
            audioEngine.setVoiceByName(val);
            updateVoiceStatusUI('system', val);
          }
        }
      });
    }

    // AI Voice Clone Button & Modal Handlers
    if (cloneVoiceBtn && voiceCloneModal) {
      cloneVoiceBtn.addEventListener('click', () => {
        voiceCloneModal.style.display = 'flex';
        checkClonedVoiceStatus();
      });
    }

    if (closeCloneModalBtn && voiceCloneModal) {
      closeCloneModalBtn.addEventListener('click', () => {
        voiceCloneModal.style.display = 'none';
      });
    }

    if (cloneVoiceSubmitBtn) {
      cloneVoiceSubmitBtn.addEventListener('click', () => {
        const apiKey = (elevenApiKeyInput.value || '').trim();
        if (!apiKey) {
          alert('Please enter your ElevenLabs API key from elevenlabs.io to clone your voice.');
          return;
        }

        cloneStatusAlert.style.display = 'block';
        cloneStatusAlert.className = 'status-banner loading';
        cloneStatusAlert.innerHTML = '⏳ Uploading <strong>user_voice.mp4</strong> to ElevenLabs and cloning your voice...';
        cloneVoiceSubmitBtn.disabled = true;

        fetch('/api/clone-voice/setup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apiKey: apiKey,
            sampleFile: 'user_voice.mp4',
            voiceName: 'Manikanta Voice'
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            isVoiceCloned = true;
            cloneStatusAlert.className = 'status-banner success';
            cloneStatusAlert.innerHTML = `🎉 <strong>Voice Cloned Successfully!</strong><br>Voice ID: <code>${data.voiceId}</code><br>All stories & riddles can now be synthesized in your voice!`;
            audioEngine.setVoiceMode('cloned');
            populateVoiceSelect();
            updateVoiceStatusUI('cloned');
            setTimeout(() => {
              voiceCloneModal.style.display = 'none';
            }, 2500);
          } else {
            throw new Error(data.error || 'Failed to clone voice');
          }
        })
        .catch(err => {
          cloneStatusAlert.className = 'status-banner notice';
          cloneStatusAlert.innerHTML = `⚠️ <strong>Voice Clone Error:</strong> ${err.message}`;
        })
        .finally(() => {
          cloneVoiceSubmitBtn.disabled = false;
        });
      });
    }

    // Microphone toggle button
    if (micToggleBtn) {
      micToggleBtn.addEventListener('click', async () => {
        const shouldEnable = !audioEngine.isMicActive;
        await toggleMicrophone(shouldEnable);
      });
    }

    // Custom voice audio file upload
    if (uploadVoiceBtn && customVoiceFileInput) {
      uploadVoiceBtn.addEventListener('click', () => {
        customVoiceFileInput.click();
      });

      customVoiceFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        uploadVoiceBtn.textContent = '⏳ Loading...';
        const res = await audioEngine.loadCustomAudioFile(file);
        uploadVoiceBtn.textContent = '📁 Upload Voice';
        if (res.success) {
          if (audioEngine.isMicActive) {
            audioEngine.disableMicrophone();
            updateMicButtonUI(false);
          }
          if (voiceSelect) voiceSelect.value = 'custom_audio';
          updateVoiceStatusUI('custom_audio', `${file.name} (${res.duration.toFixed(1)}s)`);
          alert(`✅ Custom voice audio loaded: "${file.name}"! It will play during your video recording.`);
        } else {
          alert(`❌ Failed to load audio file: ${res.error}`);
        }
      });
    }

    if (testVoiceBtn) {
      testVoiceBtn.addEventListener('click', () => {
        audioEngine.resume();
        if (audioEngine.voiceMode === 'microphone') {
          alert("🎙️ Microphone is active! Speak into your microphone and you will hear your voice mixed with music.");
          return;
        }
        const testText = (LANG_META[currentLang] && LANG_META[currentLang].greeting) || 'Hello Little Explorers! Welcome to TinyToons Studio!';
        audioEngine.speak(testText, null, null);
      });
    }

    // Check cloned voice status on initial load
    checkClonedVoiceStatus();
  }

  function checkClonedVoiceStatus() {
    fetch('/api/clone-voice/status')
      .then(res => res.json())
      .then(data => {
        if (data.isCloned) {
          isVoiceCloned = true;
          if (cloneStatusAlert) {
            cloneStatusAlert.style.display = 'block';
            cloneStatusAlert.className = 'status-banner success';
            cloneStatusAlert.innerHTML = `✅ <strong>Your Voice is Cloned!</strong> (ID: <code>${data.voiceId}</code>)<br>All stories will be spoken in your voice.`;
          }
          if (audioEngine.voiceMode !== 'microphone' && audioEngine.voiceMode !== 'custom_audio') {
            audioEngine.setVoiceMode('cloned');
          }
          populateVoiceSelect();
          if (audioEngine.voiceMode === 'cloned') {
            updateVoiceStatusUI('cloned');
          }
        }
      })
      .catch(() => {});
  }

  async function toggleMicrophone(enable) {
    if (enable) {
      if (micBtnText) micBtnText.textContent = 'Connecting...';
      const res = await audioEngine.enableMicrophone();
      if (res.success) {
        updateMicButtonUI(true);
        if (voiceSelect) voiceSelect.value = 'microphone';
        updateVoiceStatusUI('microphone');
      } else {
        updateMicButtonUI(false);
        alert(`🎙️ Microphone Permission Needed: Please allow microphone access in your browser to record with your own voice.\n\nError: ${res.error}`);
      }
    } else {
      audioEngine.disableMicrophone();
      updateMicButtonUI(false);
      if (voiceSelect) voiceSelect.value = 'online_hd';
      audioEngine.setVoiceMode('online_hd');
      updateVoiceStatusUI('online_hd');
    }
  }

  function updateMicButtonUI(isActive) {
    if (!micToggleBtn) return;
    if (isActive) {
      micToggleBtn.classList.add('active');
      if (micBtnIcon) micBtnIcon.textContent = '🔴';
      if (micBtnText) micBtnText.textContent = 'Mic Active';
    } else {
      micToggleBtn.classList.remove('active');
      if (micBtnIcon) micBtnIcon.textContent = '🎙️';
      if (micBtnText) micBtnText.textContent = 'Use My Voice';
    }
  }

  function updateVoiceStatusUI(mode, extra) {
    if (!voiceStatusIndicator || !voiceStatusText) return;
    const langName = (LANG_META[currentLang] && LANG_META[currentLang].name) || currentLang.toUpperCase();
    if (mode === 'cloned') {
      voiceStatusIndicator.className = 'voice-status-indicator';
      voiceStatusText.innerHTML = `🧬 <strong>AI Voice Clone Active:</strong> All stories & riddles will be spoken in your exact voice!`;
    } else if (mode === 'microphone') {
      voiceStatusIndicator.className = 'voice-status-indicator mic-active';
      voiceStatusText.innerHTML = `🎙️ <strong>Live Microphone Active:</strong> Speak directly into your mic while the video plays and records!`;
    } else if (mode === 'custom_audio') {
      voiceStatusIndicator.className = 'voice-status-indicator';
      voiceStatusText.innerHTML = `📁 <strong>Custom Voice File Loaded:</strong> ${extra || 'Audio file ready to mix into video!'}`;
    } else if (mode === 'online_hd') {
      voiceStatusIndicator.className = 'voice-status-indicator';
      voiceStatusText.innerHTML = `✨ Voice: <strong>Google Natural ${langName} HD</strong> (Click "Clone My Voice" or "Use My Voice" to speak with your voice!)`;
    } else {
      voiceStatusIndicator.className = 'voice-status-indicator';
      voiceStatusText.innerHTML = `🗣️ Voice: <strong>${extra || 'System Voice'}</strong>`;
    }
  }

  function populateVoiceSelect() {
    if (!voiceSelect) return;
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    voiceSelect.innerHTML = '';

    const langName = (LANG_META[currentLang] && LANG_META[currentLang].name) || currentLang.toUpperCase();

    // 1. Cloned Voice Option (if cloned)
    if (isVoiceCloned) {
      const cloneOpt = document.createElement('option');
      cloneOpt.value = 'cloned';
      cloneOpt.textContent = `🧬 AI Cloned Voice (Manikanta's Exact Voice) [Active]`;
      if (audioEngine.voiceMode === 'cloned') {
        cloneOpt.selected = true;
      }
      voiceSelect.appendChild(cloneOpt);
    }

    // 2. Recommended Natural HD Voice (Google TTS)
    const hdOpt = document.createElement('option');
    hdOpt.value = 'online_hd';
    hdOpt.textContent = `✨ Google Natural ${langName} HD Voice [Recommended]`;
    if (audioEngine.voiceMode === 'online_hd') {
      hdOpt.selected = true;
    }
    voiceSelect.appendChild(hdOpt);

    // 3. User's WhatsApp Voice Recording (user_voice.mp4)
    const userVoiceOpt = document.createElement('option');
    userVoiceOpt.value = 'user_voice_file';
    userVoiceOpt.textContent = `🎤 My WhatsApp Voice: "Hello! ఎలా ఉన్నావు? బాగున్నావా?" [Sample]`;
    if (audioEngine.voiceMode === 'custom_audio') {
      userVoiceOpt.selected = true;
    }
    voiceSelect.appendChild(userVoiceOpt);

    // 4. Microphone Option
    const micOpt = document.createElement('option');
    micOpt.value = 'microphone';
    micOpt.textContent = `🎙️ Live Microphone (Use My Own Real Voice!)`;
    if (audioEngine.isMicActive || audioEngine.voiceMode === 'microphone') {
      micOpt.selected = true;
    }
    voiceSelect.appendChild(micOpt);

    // 5. Custom Audio File Option
    const customOpt = document.createElement('option');
    customOpt.value = 'custom_audio';
    customOpt.textContent = `📁 Custom Audio File (Upload File)`;
    if (audioEngine.voiceMode === 'custom_audio') {
      customOpt.selected = true;
    }
    voiceSelect.appendChild(customOpt);

    // 4. Auto Detect Option
    const autoOpt = document.createElement('option');
    autoOpt.value = 'auto';
    autoOpt.textContent = `🔄 Auto Detect System Voice (${langName})`;
    voiceSelect.appendChild(autoOpt);

    // 5. System installed voices
    voices.forEach((v) => {
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      voiceSelect.appendChild(opt);
    });
  }

  function setupCategories() {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        loadEpisodeList();
        const list = getCategoryList();
        if (list.length > 0) selectEpisode(list[0]);
      });
    });
  }

  function loadEpisodeList() {
    episodeSelect.innerHTML = '';
    const list = getCategoryList();
    list.forEach((ep) => {
      const opt = document.createElement('option');
      opt.value = ep.id;
      opt.textContent = `${ep.title} (${ep.scenes.length} Scenes)`;
      episodeSelect.appendChild(opt);
    });
  }

  episodeSelect.addEventListener('change', (e) => {
    const list = getCategoryList();
    const found = list.find(item => item.id === e.target.value);
    if (found) selectEpisode(found);
  });

  function selectEpisode(episode) {
    stopPlayback();
    currentEpisode = episode;
    currentSceneIndex = 0;

    // Set Aspect Ratio
    canvasEngine.setDimensions(episode.aspectRatio || "9:16");
    adjustCanvasContainer(episode.aspectRatio);

    // Update Metadata
    updateMetadataDisplay();

    // Render Timeline Icons
    renderTimeline();

    // Set First Scene
    loadScene(0);
  }

  function adjustCanvasContainer(aspectRatio) {
    const wrapper = document.querySelector('.canvas-viewport');
    if (!wrapper) return;
    if (aspectRatio === "9:16") {
      wrapper.classList.remove('landscape');
      wrapper.classList.add('shorts');
    } else {
      wrapper.classList.remove('shorts');
      wrapper.classList.add('landscape');
    }
  }

  function renderTimeline() {
    sceneTimeline.innerHTML = '';
    currentEpisode.scenes.forEach((scene, i) => {
      const chip = document.createElement('div');
      chip.className = `scene-chip ${i === currentSceneIndex ? 'active' : ''}`;
      chip.innerHTML = `
        <span class="chip-num">#${i + 1}</span>
        <span class="chip-title">${scene.heading.slice(0, 16)}</span>
      `;
      chip.addEventListener('click', () => {
        stopPlayback();
        currentSceneIndex = i;
        loadScene(i);
      });
      sceneTimeline.appendChild(chip);
    });
  }

  function loadScene(index) {
    if (!currentEpisode.scenes[index]) return;
    const scene = currentEpisode.scenes[index];
    currentSceneIndex = index;

    // Update Canvas
    canvasEngine.setScene(scene, currentEpisode.bgStyle);

    // Update UI
    currentSceneText.textContent = `Scene ${index + 1} of ${currentEpisode.scenes.length}: ${scene.heading}`;
    progressBar.style.width = `${((index + 1) / currentEpisode.scenes.length) * 100}%`;

    // Highlight timeline chip
    document.querySelectorAll('.scene-chip').forEach((chip, i) => {
      chip.classList.toggle('active', i === index);
    });
  }

  // Playback System
  function playEpisode() {
    if (isPlaying) return;
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-flex';

    audioEngine.startBGM(currentEpisode.musicTrack || "playful_bounce");
    playCurrentScene();
  }

  function pausePlayback() {
    isPlaying = false;
    playBtn.style.display = 'inline-flex';
    pauseBtn.style.display = 'none';

    if (sceneTimer) clearTimeout(sceneTimer);
    audioEngine.stopAll();
  }

  function stopPlayback() {
    isPlaying = false;
    playBtn.style.display = 'inline-flex';
    pauseBtn.style.display = 'none';

    if (sceneTimer) clearTimeout(sceneTimer);
    audioEngine.stopAll();
  }

  function playCurrentScene() {
    if (!isPlaying) return;
    const scene = currentEpisode.scenes[currentSceneIndex];
    if (!scene) {
      stopPlayback();
      currentSceneIndex = 0;
      loadScene(0);
      return;
    }

    loadScene(currentSceneIndex);

    // Update progress in Auto-Publish Modal if active
    if (isAutoPublishing && pipelineProgressFill) {
      const pct = Math.round(((currentSceneIndex + 1) / currentEpisode.scenes.length) * 100);
      pipelineProgressFill.style.width = `${pct}%`;
      if (stepRecordDesc) {
        stepRecordDesc.textContent = `Playing Scene ${currentSceneIndex + 1}/${currentEpisode.scenes.length}: ${scene.heading.slice(0, 24)}... (${pct}%)`;
      }
    }

    // Play Sound Effect
    if (scene.soundEffect) {
      setTimeout(() => audioEngine.playSFX(scene.soundEffect), 300);
    }

    // Speak Narration in the authentic selected language
    audioEngine.speak(
      scene.narration,
      (charIndex, length) => {
        canvasEngine.setHighlight(charIndex, length);
      },
      () => {
        if (!isPlaying) return;
        sceneTimer = setTimeout(() => {
          if (currentSceneIndex < currentEpisode.scenes.length - 1) {
            currentSceneIndex++;
            playCurrentScene();
          } else {
            if (isRecording) {
              stopRecording();
            } else {
              stopPlayback();
            }
          }
        }, 900);
      }
    );
  }

  playBtn.addEventListener('click', () => {
    audioEngine.resume();
    playEpisode();
  });

  pauseBtn.addEventListener('click', pausePlayback);

  // Video Recording Engine (MediaRecorder)
  recordBtn.addEventListener('click', () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  });

  function startRecording() {
    audioEngine.resume();
    stopPlayback();
    isRecording = true;
    recordedChunks = [];

    recordBtn.classList.add('recording');
    recordBtn.innerHTML = `<span>⏹️ Stop Recording</span>`;
    recordStatus.style.display = 'block';
    exportProgress.textContent = "Recording in progress... Please do not close this window.";

    // Capture Canvas + Spoken Audio + BGM
    const canvasStream = previewCanvas.captureStream(60);
    const audioStream = audioEngine.getAudioStream();

    const combinedStream = new MediaStream();
    canvasStream.getVideoTracks().forEach(track => combinedStream.addTrack(track));
    if (audioStream) {
      audioStream.getAudioTracks().forEach(track => combinedStream.addTrack(track));
    }

    let options = { mimeType: 'video/webm;codecs=vp9,opus' };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options = { mimeType: 'video/webm;codecs=vp8,opus' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = { mimeType: 'video/webm' };
      }
    }

    try {
      mediaRecorder = new MediaRecorder(combinedStream, options);
    } catch (e) {
      mediaRecorder = new MediaRecorder(combinedStream);
    }

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = saveRecordedVideo;
    mediaRecorder.start(100);

    // Start playing from Scene 0
    currentSceneIndex = 0;
    playEpisode();
  }

  function stopRecording() {
    if (!isRecording) return;
    isRecording = false;
    recordBtn.classList.remove('recording');
    recordBtn.innerHTML = `<span>⏺️ Record & Export Video</span>`;
    exportProgress.textContent = "Finalizing video file...";

    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    stopPlayback();
  }

  let latestRecordedBlob = null;
  let latestRecordedFileName = null;
  let onVideoSavedCallback = null;

  function saveRecordedVideo() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    latestRecordedBlob = blob;
    const url = URL.createObjectURL(blob);
    const fileName = `${currentEpisode.id}_${Date.now()}.webm`;
    latestRecordedFileName = fileName;

    // Trigger local download for user
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    exportProgress.innerHTML = `✅ <strong>Video Saved!</strong> <code>${fileName}</code>`;

    // Send video to server output folder
    sendVideoToServer(blob, fileName).then((data) => {
      if (onVideoSavedCallback) {
        const cb = onVideoSavedCallback;
        onVideoSavedCallback = null;
        cb(data);
      }
    });
  }

  function sendVideoToServer(blob, fileName) {
    return fetch('/api/save-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'video/webm',
        'X-Filename': fileName
      },
      body: blob
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        exportProgress.innerHTML += `<br>📁 Saved to project output: <code>${data.path}</code>`;
      }
      return data;
    })
    .catch(() => ({ success: false }));
  }

  // 1-Click Automated Daily Video Producer & YouTube Publisher
  function setupAutoPublishWorkflow() {
    if (autoPublishTodayBtn) {
      autoPublishTodayBtn.addEventListener('click', () => {
        runAutoPublishWorkflow(currentLang);
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        if (autoPublishModal) autoPublishModal.style.display = 'none';
      });
    }
  }

  function runAutoPublishWorkflow(targetLang = 'te') {
    isAutoPublishing = true;
    audioEngine.resume();

    // 1. Show modal
    if (autoPublishModal) autoPublishModal.style.display = 'flex';
    if (modalSuccessBox) modalSuccessBox.style.display = 'none';

    // Step 1: Select Episode
    updateStepUI('stepSelect', 'active');
    updateStepUI('stepRecord', '');
    updateStepUI('stepSave', '');
    updateStepUI('stepUpload', '');

    switchLanguage(targetLang);

    // Pick today's episode from schedule
    const now = new Date();
    const dayIdx = now.getDay();
    const sched = (ROTATION_SCHEDULES[targetLang] && ROTATION_SCHEDULES[targetLang][dayIdx]) || (ROTATION_SCHEDULES['en'][dayIdx]);

    const targetCategory = sched.category || 'shorts';
    const list = KIDS_CONTENT_LIBRARY[targetLang === 'te' ? 'telugu' : (targetLang === 'hi' ? 'hindi' : (targetLang === 'ta' ? 'tamil' : (targetLang === 'kn' ? 'kannada' : (targetLang === 'es' ? 'spanish' : 'english'))))][targetCategory] || [];
    const episode = list.find(ep => ep.id === sched.episodeId) || list[0];

    if (episode) {
      selectEpisode(episode);
    }

    setTimeout(() => {
      // Step 1 Complete -> Step 2 Active
      updateStepUI('stepSelect', 'completed');
      updateStepUI('stepRecord', 'active');

      // Hook callback for when video recording completes
      onVideoSavedCallback = (saveResult) => {
        // Step 2 Complete -> Step 3 Complete -> Step 4 Active
        updateStepUI('stepRecord', 'completed');
        updateStepUI('stepSave', 'completed');
        updateStepUI('stepUpload', 'active');

        // Immediately trigger YouTube upload
        publishToYouTubeAPI()
          .then(result => {
            updateStepUI('stepUpload', 'completed');
            if (modalSuccessBox) modalSuccessBox.style.display = 'block';
            if (modalLiveUrl) {
              modalLiveUrl.href = result.url || 'https://www.youtube.com/@manikantadatti6150';
              modalLiveUrl.textContent = `👉 Watch on YouTube: ${result.url || 'https://www.youtube.com/@manikantadatti6150'}`;
            }
            isAutoPublishing = false;
          })
          .catch(err => {
            updateStepUI('stepUpload', '');
            alert("YouTube Publish: " + err.message);
            isAutoPublishing = false;
          });
      };

      // Start Recording
      startRecording();
    }, 1200);
  }

  function updateStepUI(stepId, state) {
    const el = document.getElementById(stepId);
    if (!el) return;
    el.classList.remove('active', 'completed');
    if (state) el.classList.add(state);
  }

  function publishToYouTubeAPI() {
    return fetch('/api/upload-youtube', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        episodeId: currentEpisode.id,
        title: metaTitle.value,
        description: metaDesc.value,
        tags: currentEpisode.seo.tags,
        aspectRatio: currentEpisode.aspectRatio,
        language: currentLang
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        return data;
      } else {
        throw new Error(data.message || data.error || 'YouTube upload failed');
      }
    });
  }

  // AI Prompt Generator for Any Custom Kids Topic
  generateCustomBtn.addEventListener('click', () => {
    const topic = customTopicInput.value.trim();
    if (!topic) {
      alert("Please enter a fun topic for your kids video (e.g. 'Baby Dinosaur', 'Counting Apples')");
      return;
    }

    const cat = customCategorySelect.value;
    const newEp = generateCustomEpisode(topic, cat, currentLang);
    
    // Add to library
    const langKeyMap = { te: 'telugu', hi: 'hindi', en: 'english', ta: 'tamil', kn: 'kannada', es: 'spanish' };
    const targetLib = KIDS_CONTENT_LIBRARY[langKeyMap[currentLang]];
    if (targetLib && targetLib[cat]) {
      targetLib[cat].unshift(newEp);
    }
    
    currentCategory = cat;
    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === cat));
    loadEpisodeList();
    episodeSelect.value = newEp.id;
    selectEpisode(newEp);

    alert(`✨ Episode "${newEp.title}" created with 5 animated scenes & spoken voiceover! Click Play to watch!`);
  });

  // YouTube Metadata & Direct API Upload
  function updateMetadataDisplay() {
    metaTitle.value = currentEpisode.seo.title;
    const channelSubTag = `\n\n👉 Subscribe to @manikantadatti6150 for daily kids magic:\nhttps://www.youtube.com/@manikantadatti6150\n\n#kidsvideo #shorts #ytkids #animation #cartoons`;
    metaDesc.value = `${currentEpisode.seo.description}${channelSubTag}`;
    metaTags.value = [...currentEpisode.seo.tags, 'manikantadatti6150', '@manikantadatti6150', 'kids cartoon'].join(', ');
  }

  copyMetaBtn.addEventListener('click', () => {
    const textToCopy = `TITLE:\n${metaTitle.value}\n\nDESCRIPTION:\n${metaDesc.value}\n\nTAGS:\n${metaTags.value}\n\nMADE FOR KIDS: YES (COPPA Compliant)`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyMetaBtn.textContent = "✅ Copied!";
      setTimeout(() => { copyMetaBtn.textContent = "📋 Copy Title & Description"; }, 2000);
    });
  });

  // YouTube OAuth Connection & Channel Management
  const ytStatusDot = document.getElementById('ytStatusDot');
  const ytStatusText = document.getElementById('ytStatusText');
  const connectYtBtn = document.getElementById('connectYtBtn');
  const ytConnectForm = document.getElementById('ytConnectForm');
  const ytClientIdInput = document.getElementById('ytClientIdInput');
  const ytClientSecretInput = document.getElementById('ytClientSecretInput');
  const saveYtCredsBtn = document.getElementById('saveYtCredsBtn');
  const cancelYtCredsBtn = document.getElementById('cancelYtCredsBtn');

  let isYouTubeConnected = false;

  function checkYouTubeConnectionStatus() {
    fetch('/api/youtube-status')
      .then(res => res.json())
      .then(data => {
        if (!data || !data.success) return;
        if (data.isConnected) {
          isYouTubeConnected = true;
          if (ytStatusDot) ytStatusDot.className = 'status-dot connected';
          if (ytStatusText) ytStatusText.innerHTML = `✅ <strong>@manikantadatti6150 Connected!</strong> 1-Click Uploads Active`;
          if (connectYtBtn) {
            connectYtBtn.textContent = '✅ Connected';
            connectYtBtn.style.background = '#16a34a';
          }
          if (ytConnectForm) ytConnectForm.style.display = 'none';
        } else if (data.hasCredentials && data.authUrl) {
          isYouTubeConnected = false;
          if (ytStatusDot) ytStatusDot.className = 'status-dot disconnected';
          if (ytStatusText) ytStatusText.innerHTML = `⚠️ Credentials Saved! Click to Authorize with Google`;
          if (connectYtBtn) {
            connectYtBtn.textContent = '🔑 Authorize with Google';
            connectYtBtn.onclick = () => window.open(data.authUrl, '_blank');
          }
        } else {
          isYouTubeConnected = false;
          if (ytStatusDot) ytStatusDot.className = 'status-dot disconnected';
          if (ytStatusText) ytStatusText.innerHTML = 'Channel Not Linked (Click to connect)';
          if (connectYtBtn) {
            connectYtBtn.textContent = '🔗 Connect YouTube';
            connectYtBtn.onclick = () => {
              if (ytConnectForm) ytConnectForm.style.display = ytConnectForm.style.display === 'none' ? 'block' : 'none';
            };
          }
        }
      })
      .catch(() => {});
  }

  const ytSecretFileInput = document.getElementById('ytSecretFileInput');
  if (ytSecretFileInput) {
    ytSecretFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target.result);
          const creds = json.installed || json.web || json;
          if (creds.client_id && ytClientIdInput) ytClientIdInput.value = creds.client_id;
          if (creds.client_secret && ytClientSecretInput) ytClientSecretInput.value = creds.client_secret;
        } catch (err) {
          alert("Invalid JSON file. Please select a valid client_secret.json.");
        }
      };
      reader.readAsText(file);
    });
  }

  if (cancelYtCredsBtn) {
    cancelYtCredsBtn.addEventListener('click', () => {
      if (ytConnectForm) ytConnectForm.style.display = 'none';
    });
  }

  if (saveYtCredsBtn) {
    saveYtCredsBtn.addEventListener('click', () => {
      const clientId = ytClientIdInput ? ytClientIdInput.value.trim() : '';
      const clientSecret = ytClientSecretInput ? ytClientSecretInput.value.trim() : '';

      if (!clientId || !clientSecret) {
        alert("Please enter both Google Client ID and Client Secret!");
        return;
      }

      saveYtCredsBtn.textContent = "Connecting...";

      fetch('/api/connect-youtube', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, clientSecret })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.authUrl) {
          window.open(data.authUrl, '_blank');
          alert("Opening Google Authorization in your browser. Select your @manikantadatti6150 account and click Allow!");
          setTimeout(checkYouTubeConnectionStatus, 4000);
        } else {
          alert("Error: " + (data.error || "Failed to save credentials"));
        }
      })
      .catch(e => alert("Connection error: " + e.message))
      .finally(() => {
        saveYtCredsBtn.textContent = "🔗 Authorize with Google";
      });
    });
  }

  uploadYoutubeBtn.addEventListener('click', () => {
    if (!isYouTubeConnected) {
      if (ytConnectForm) ytConnectForm.style.display = 'block';
      uploadStatusBanner.style.display = 'block';
      uploadStatusBanner.className = 'status-banner notice';
      uploadStatusBanner.innerHTML = `⚠️ <strong>YouTube Not Connected:</strong> Please enter your Client ID & Secret above and authorize with Google.`;
      return;
    }

    uploadStatusBanner.style.display = 'block';
    uploadStatusBanner.className = 'status-banner loading';
    uploadStatusBanner.innerHTML = `🚀 Uploading video directly to your YouTube Channel...`;

    publishToYouTubeAPI()
      .then(data => {
        uploadStatusBanner.className = 'status-banner success';
        uploadStatusBanner.innerHTML = `🎉 <strong>Uploaded to YouTube!</strong><br>Watch at: <a href="${data.url}" target="_blank" style="color:#16a34a;font-weight:bold;">${data.url}</a>`;
      })
      .catch(err => {
        uploadStatusBanner.className = 'status-banner notice';
        uploadStatusBanner.innerHTML = `⚠️ <strong>Upload Notice:</strong><br>${err.message}`;
      });
  });

  // Check connection status on load
  checkYouTubeConnectionStatus();

  // Start Studio
  init();
});
