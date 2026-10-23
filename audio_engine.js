// Kids Audio Engine - Web Audio API Procedural Synthesizer & Speech Narration
// Features:
// 1. Procedural background melodies (no copyright issues, 100% royalty free)
// 2. Kid-friendly cartoon sound effects (pops, boings, chimes, cheers, countdown ticks)
// 3. Cheerful Voiceover Narration via SpeechSynthesis API
// 4. MediaStreamDestination for seamless mixing into video recordings

class KidsAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.bgmGain = null;
    this.sfxGain = null;
    this.destNode = null;
    this.isMuted = false;
    this.currentTrack = null;
    this.bgmTimer = null;
    this.synth = window.speechSynthesis || null;
    this.preferredLang = 'te'; // Default to Telugu
    this.voiceMode = 'online_hd'; // 'online_hd', 'system', 'microphone', 'custom_audio'
    this.currentAudioSource = null;
    this.voicePitch = 1.35; // Cheerful playful cartoon pitch
    this.voiceRate = 0.95;  // Clear, friendly pace for kids
    this.micStream = null;
    this.micSource = null;
    this.micGain = null;
    this.customAudioBuffer = null;
    this.isMicActive = false;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.9, this.ctx.currentTime);

    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(0.25, this.ctx.currentTime); // Gentle background level

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);

    // Stream destination for video recorder
    this.destNode = this.ctx.createMediaStreamDestination();

    // Connect to both speakers and recording stream
    this.bgmGain.connect(this.masterGain);
    this.sfxGain.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
    this.masterGain.connect(this.destNode);

    this.loadVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  setLanguage(lang = 'te') {
    this.preferredLang = lang;
    this.loadVoices();
  }

  loadVoices() {
    if (!this.synth) return [];
    const voices = this.synth.getVoices();
    this.availableVoices = voices;

    const langPrefixes = {
      te: ['te', 'telugu'],
      hi: ['hi', 'hindi'],
      ta: ['ta', 'tamil'],
      kn: ['kn', 'kannada'],
      es: ['es', 'spanish'],
      en: ['en']
    };

    const targetCodes = langPrefixes[this.preferredLang] || ['en'];

    // 1. Look for native language voice
    const nativeVoice = voices.find(v => 
      targetCodes.some(prefix => v.lang.toLowerCase().startsWith(prefix) || v.name.toLowerCase().includes(prefix))
    );

    // 2. Look for Indian regional / English voice fallback for Indian languages
    const indianFallback = (this.preferredLang !== 'en' && this.preferredLang !== 'es') ? voices.find(v => 
      v.lang === 'en-IN' || 
      v.lang.startsWith('hi') || 
      v.name.includes('India') || 
      v.name.includes('Ravi') || 
      v.name.includes('Heera') || 
      v.name.includes('Neerja')
    ) : null;

    // 3. Cheerful natural voice fallback
    const naturalVoice = voices.find(v => 
      v.lang.startsWith("en") && 
      (v.name.includes("Natural") || v.name.includes("Zira") || v.name.includes("Samantha") || v.name.includes("Victoria") || v.name.includes("Google UK English Female"))
    ) || voices.find(v => v.lang.startsWith("en")) || voices[0];

    this.selectedVoice = nativeVoice || indianFallback || naturalVoice;
    return voices;
  }

  setVoiceByName(name) {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    const found = voices.find(v => v.name === name);
    if (found) {
      this.selectedVoice = found;
    }
  }

  setVoiceMode(mode) {
    this.voiceMode = mode;
    if (mode !== 'microphone' && this.isMicActive) {
      this.disableMicrophone();
    }
  }

  setVoicePitch(pitch) {
    this.voicePitch = Math.max(0.6, Math.min(2.0, parseFloat(pitch) || 1.0));
  }

  setVoiceRate(rate) {
    this.voiceRate = Math.max(0.6, Math.min(1.8, parseFloat(rate) || 1.0));
  }

  async enableMicrophone() {
    this.resume();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      this.micStream = stream;
      this.micSource = this.ctx.createMediaStreamSource(stream);
      this.micGain = this.ctx.createGain();
      this.micGain.gain.setValueAtTime(1.15, this.ctx.currentTime); // Crisp clear voice boost
      this.micSource.connect(this.micGain);
      this.micGain.connect(this.masterGain);
      this.isMicActive = true;
      this.voiceMode = 'microphone';
      return { success: true, stream };
    } catch (err) {
      console.error("Microphone access error:", err);
      this.isMicActive = false;
      return { success: false, error: err.message };
    }
  }

  disableMicrophone() {
    if (this.micStream) {
      this.micStream.getTracks().forEach(t => t.stop());
      this.micStream = null;
    }
    if (this.micSource) {
      try { this.micSource.disconnect(); } catch (e) {}
      this.micSource = null;
    }
    this.isMicActive = false;
  }

  async loadCustomAudioFile(file) {
    this.resume();
    try {
      const arrayBuffer = await file.arrayBuffer();
      const decodedBuffer = await this.ctx.decodeAudioData(arrayBuffer);
      this.customAudioBuffer = decodedBuffer;
      this.voiceMode = 'custom_audio';
      return { success: true, duration: decodedBuffer.duration };
    } catch (err) {
      console.error("Error loading custom audio:", err);
      return { success: false, error: err.message };
    }
  }

  async loadCustomAudioFromUrl(url = '/user_voice.mp4') {
    this.resume();
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP error " + res.status);
      const arrayBuffer = await res.arrayBuffer();
      const decodedBuffer = await this.ctx.decodeAudioData(arrayBuffer);
      this.customAudioBuffer = decodedBuffer;
      this.voiceMode = 'custom_audio';
      return { success: true, duration: decodedBuffer.duration };
    } catch (err) {
      console.error("Error loading audio from URL:", err);
      return { success: false, error: err.message };
    }
  }

  getAudioStream() {
    this.init();
    return this.destNode ? this.destNode.stream : null;
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ==========================================
  // PROCEDURAL BACKGROUND MUSIC (KIDS TUNES)
  // ==========================================
  startBGM(style = "playful_bounce") {
    this.stopBGM();
    this.resume();

    // Melodic notes (frequencies)
    const scales = {
      playful_bounce: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25], // C Major
      cheerful_whistle: [329.63, 392.00, 440.00, 493.88, 587.33, 659.25],         // E Pentatonic
      bouncy_melody: [293.66, 369.99, 440.00, 554.37, 587.33],                    // D Major
      gentle_acoustic: [261.63, 329.63, 392.00, 493.88, 523.25],                  // C Major 7th
      lullaby_piano: [220.00, 261.63, 329.63, 392.00, 440.00],                    // A Minor / Pentatonic
      twinkle_melody: [261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00],   // Twinkle Twinkle
      bus_bouncy_tempo: [293.66, 329.63, 369.99, 440.00, 493.88, 587.33],
      country_banjo: [196.00, 246.94, 293.66, 392.00, 440.00]
    };

    const notes = scales[style] || scales.playful_bounce;
    let step = 0;
    const tempo = style.includes("lullaby") ? 480 : 260; // ms per beat

    const playStep = () => {
      if (!this.ctx) return;
      const freq = notes[step % notes.length];
      
      // Xylophone / Glockenspiel bell tone
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = style.includes("lullaby") ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      // Playful marimba envelope
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (tempo / 1000) * 1.5);
      
      osc.connect(gain);
      gain.connect(this.bgmGain);
      
      osc.start(now);
      osc.stop(now + (tempo / 1000) * 1.6);

      // Bass note every 4 steps
      if (step % 4 === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = "sine";
        bassOsc.frequency.setValueAtTime(freq / 2, now);
        bassGain.gain.setValueAtTime(0.15, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        bassOsc.connect(bassGain);
        bassGain.connect(this.bgmGain);
        bassOsc.start(now);
        bassOsc.stop(now + 0.85);
      }

      step++;
      this.bgmTimer = setTimeout(playStep, tempo);
    };

    playStep();
  }

  stopBGM() {
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  // ==========================================
  // CARTOON SOUND EFFECTS
  // ==========================================
  playSFX(type) {
    this.resume();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch (type) {
      case "pop_sound":
      case "pop": {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
        gain.gain.setValueAtTime(0.6, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.12);
        break;
      }

      case "chime_sparkle":
      case "sparkle_magic":
      case "sparkle": {
        [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.001, now + i * 0.08);
          gain.gain.linearRampToValueAtTime(0.3, now + i * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(this.sfxGain);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.45);
        });
        break;
      }

      case "cheer_fanfare":
      case "cheer_gentle": {
        // Triumphant cartoon brass chord
        [261.63, 329.63, 392.00, 523.25].forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
          osc.connect(gain);
          gain.connect(this.sfxGain);
          osc.start(now);
          osc.stop(now + 0.95);
        });
        break;
      }

      case "countdown_ticks": {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }

      case "drum_roll": {
        for (let i = 0; i < 8; i++) {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(140 + Math.random() * 20, now + i * 0.08);
          gain.gain.setValueAtTime(0.3, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.06);
          osc.connect(gain);
          gain.connect(this.sfxGain);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.07);
        }
        break;
      }

      case "lion_roar": {
        // Playful cartoon growl
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(90, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.7);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.8);
        break;
      }

      case "bus_horn": {
        [349.23, 440.00].forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.linearRampToValueAtTime(0.001, now + 0.35);
          osc.connect(gain);
          gain.connect(this.sfxGain);
          osc.start(now);
          osc.stop(now + 0.4);
        });
        break;
      }

      default: {
        // Default happy ding
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(659.25, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.28);
      }
    }
  }

  // ==========================================
  // SPEECH SYNTHESIS NARRATION & ONLINE TELUGU AUDIO
  // ==========================================
  speak(text, onWordBoundary, onEnd) {
    this.resume();
    this.stopSpeech();

    // 1. Microphone Mode: User speaks live into their microphone
    if (this.voiceMode === 'microphone') {
      const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
      const durationMs = Math.max(5000, Math.min(10000, words * 500));

      if (onWordBoundary) {
        const wordArr = (text || '').split(' ');
        const stepTime = durationMs / Math.max(wordArr.length, 1);
        let charOffset = 0;
        wordArr.forEach((w, idx) => {
          setTimeout(() => {
            if (this.voiceMode === 'microphone') {
              onWordBoundary(charOffset, w.length);
            }
          }, idx * stepTime);
          charOffset += w.length + 1;
        });
      }

      this.currentAudioSource = setTimeout(() => {
        this.currentAudioSource = null;
        if (onEnd) onEnd();
      }, durationMs);
      return;
    }

    // 2. Custom Uploaded Audio File
    if (this.voiceMode === 'custom_audio' && this.customAudioBuffer) {
      const source = this.ctx.createBufferSource();
      source.buffer = this.customAudioBuffer;
      source.connect(this.masterGain);
      this.currentAudioSource = source;
      source.onended = () => {
        this.currentAudioSource = null;
        if (onEnd) onEnd();
      };
      source.start(0);
      return;
    }

    const langCodes = {
      te: 'te-IN',
      hi: 'hi-IN',
      ta: 'ta-IN',
      kn: 'kn-IN',
      es: 'es-ES',
      en: 'en-US'
    };
    const targetCode = langCodes[this.preferredLang] || 'en-US';
    const hasNativeVoice = this.selectedVoice && this.selectedVoice.lang.toLowerCase().startsWith(this.preferredLang);

    if (this.voiceMode === 'cloned' || this.voiceMode === 'online_hd' || (this.preferredLang !== 'en' && !hasNativeVoice && this.voiceMode !== 'system_forced')) {
      this.playOnlineTTS(text, this.preferredLang, onWordBoundary, onEnd);
      return;
    }

    if (!this.synth) {
      this.playOnlineTTS(text, this.preferredLang, onWordBoundary, onEnd);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
      utterance.lang = this.selectedVoice.lang || targetCode;
    } else {
      utterance.lang = targetCode;
    }
    utterance.pitch = this.voicePitch; // Cheerful kids style
    utterance.rate = this.voiceRate;
    utterance.volume = 1.0;

    if (onWordBoundary) {
      utterance.onboundary = (e) => {
        if (e.name === 'word') {
          onWordBoundary(e.charIndex, e.charLength || 5);
        }
      };
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn("Speech error, falling back to online audio:", e);
      this.currentUtterance = null;
      this.playOnlineTTS(text, this.preferredLang === 'te' ? 'te' : 'en', onWordBoundary, onEnd);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  async playOnlineTTS(text, lang = 'te', onWordBoundary, onEnd) {
    this.resume();
    this.stopSpeech();

    try {
      const voiceParam = this.voiceMode === 'cloned' ? '&voice=cloned' : '';
      const url = `/api/tts?lang=${encodeURIComponent(lang)}&text=${encodeURIComponent(text)}${voiceParam}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("TTS status: " + res.status);
      const arrayBuffer = await res.arrayBuffer();
      const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);

      const source = this.ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.masterGain);

      this.currentAudioSource = source;
      source.onended = () => {
        this.currentAudioSource = null;
        if (onEnd) onEnd();
      };
      source.start(0);

      // Karaoke boundary simulation during online playback
      if (onWordBoundary) {
        const words = text.split(' ');
        const totalMs = audioBuffer.duration * 1000;
        const wordTime = totalMs / Math.max(words.length, 1);
        let charOffset = 0;
        words.forEach((w, idx) => {
          setTimeout(() => {
            if (this.currentAudioSource === source) {
              onWordBoundary(charOffset, w.length);
            }
          }, idx * wordTime);
          charOffset += w.length + 1;
        });
      }
    } catch (err) {
      console.warn("Online Telugu TTS fetch error, fallback to Web Speech:", err);
      if (this.synth) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang === 'te' ? 'te-IN' : 'en-US';
        u.onend = onEnd;
        this.synth.speak(u);
      } else if (onEnd) {
        setTimeout(onEnd, 2000);
      }
    }
  }

  stopSpeech() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (typeof this.currentAudioSource === 'number') {
      clearTimeout(this.currentAudioSource);
      this.currentAudioSource = null;
    } else if (this.currentAudioSource) {
      try { this.currentAudioSource.stop(); } catch(e) {}
      this.currentAudioSource = null;
    }
    this.currentUtterance = null;
  }

  stopAll() {
    this.stopBGM();
    this.stopSpeech();
  }
}

// Global instance
window.kidsAudio = new KidsAudioEngine();
