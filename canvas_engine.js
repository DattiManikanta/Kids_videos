// Kids Canvas Engine - High Definition 2D Visual Generator
// Supports 9:16 YouTube Shorts (1080x1920) and 16:9 Landscape (1920x1080)
// High-grade cartoon rendering: Characters, Scenery, Particles, Karaoke Subtitles

class KidsCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = 1080;
    this.height = 1920;
    this.aspectRatio = "9:16";
    this.time = 0;
    this.particles = [];
    this.confetti = [];
    this.currentScene = null;
    this.sceneProgress = 0; // 0 to 1
    this.subtitles = "";
    this.highlightCharIndex = -1;
    this.highlightLength = 0;
    this.heading = "";
    this.bgStyle = "rainbow_sky";
    this.character = "question_mark";
    this.characterAction = "idle";
    this.animId = null;
    this.isRunning = false;

    this.initParticles();
  }

  setDimensions(aspectRatio) {
    this.aspectRatio = aspectRatio;
    if (aspectRatio === "9:16") {
      this.width = 1080;
      this.height = 1920;
    } else {
      this.width = 1920;
      this.height = 1080;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5 - 0.5,
        color: ['#FFD93D', '#FF6B6B', '#4D96FF', '#6BCB77', '#FF78F0', '#FFFFFF'][Math.floor(Math.random() * 6)],
        opacity: Math.random() * 0.8 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05
      });
    }
  }

  triggerConfetti() {
    this.confetti = [];
    for (let i = 0; i < 80; i++) {
      this.confetti.push({
        x: this.width / 2 + (Math.random() - 0.5) * 200,
        y: this.height * 0.4,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 15 - 5,
        size: Math.random() * 14 + 8,
        color: ['#FF1E56', '#00E5FF', '#FFEB3B', '#76FF03', '#FF007F', '#FFA500'][Math.floor(Math.random() * 6)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        gravity: 0.4
      });
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    let lastT = performance.now();

    const loop = (now) => {
      const dt = (now - lastT) / 1000;
      lastT = now;
      this.time += dt;

      this.render();
      if (this.isRunning) {
        this.animId = requestAnimationFrame(loop);
      }
    };

    this.animId = requestAnimationFrame(loop);
  }

  stop() {
    this.isRunning = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  setScene(scene, bgStyle) {
    this.currentScene = scene;
    this.bgStyle = bgStyle || "rainbow_sky";
    this.heading = scene.heading || "";
    this.subtitles = scene.subtitles || scene.narration || "";
    this.character = scene.character || "question_mark";
    this.characterAction = scene.characterAction || "idle";
    this.highlightCharIndex = -1;
    this.highlightLength = 0;

    if (scene.confetti) {
      this.triggerConfetti();
    }
  }

  setHighlight(index, length) {
    this.highlightCharIndex = index;
    this.highlightLength = length;
  }

  // ==========================================
  // MASTER RENDER
  // ==========================================
  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Background
    this.renderBackground(ctx, w, h);

    // 2. Scenery & Ambient Elements (Clouds, Hills, Stars, Trees)
    this.renderScenery(ctx, w, h);

    // 3. Floating Sparkle Particles
    this.renderParticles(ctx, w, h);

    // 4. Main Animated Character / Subject
    this.renderCharacter(ctx, w, h);

    // 5. Confetti Explosions
    this.renderConfetti(ctx);

    // 6. Header Badge
    this.renderHeader(ctx, w, h);

    // 7. Subtitles / Karaoke Banner
    this.renderSubtitles(ctx, w, h);

    // 8. Watermark / Brand Badge
    this.renderBranding(ctx, w, h);
  }

  // ==========================================
  // BACKGROUNDS
  // ==========================================
  renderBackground(ctx, w, h) {
    const t = this.time;
    let grad;

    switch (this.bgStyle) {
      case "jungle":
        grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#56AB2F');
        grad.addColorStop(0.6, '#A8E063');
        grad.addColorStop(1, '#388E3C');
        break;

      case "starry_night":
      case "cosmic_nebula":
        grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#0F0C29');
        grad.addColorStop(0.5, '#302B63');
        grad.addColorStop(1, '#24243E');
        break;

      case "enchanted_forest":
        grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#11998E');
        grad.addColorStop(0.6, '#38EF7D');
        grad.addColorStop(1, '#1A5235');
        break;

      case "sunny_park":
      case "sunny_town":
      case "farm_sunny":
        grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#29B6F6');
        grad.addColorStop(0.5, '#81D4FA');
        grad.addColorStop(1, '#E1F5FE');
        break;

      case "rainbow_sky":
      default:
        grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#667EEA');
        grad.addColorStop(0.5, '#764BA2');
        grad.addColorStop(1, '#F38181');
        break;
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  // ==========================================
  // SCENERY
  // ==========================================
  renderScenery(ctx, w, h) {
    const t = this.time;

    // A. Starry Night Skies
    if (this.bgStyle === "starry_night" || this.bgStyle === "cosmic_nebula") {
      // Twinkling stars
      ctx.save();
      for (let i = 0; i < 60; i++) {
        const sx = ((i * 137.5) % w);
        const sy = ((i * 83.2) % (h * 0.7));
        const alpha = 0.3 + 0.7 * Math.sin(t * 3 + i);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, (i % 3) + 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      return;
    }

    // B. Daylight / Sunshine
    // Sun
    ctx.save();
    const sunX = w * 0.85;
    const sunY = h * 0.15;
    const sunPulse = 1 + 0.05 * Math.sin(t * 2);

    ctx.fillStyle = '#FFF176';
    ctx.shadowColor = '#FFD54F';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 70 * sunPulse, 0, Math.PI * 2);
    ctx.fill();

    // Sun Rays
    ctx.strokeStyle = '#FFE082';
    ctx.lineWidth = 6;
    for (let r = 0; r < 12; r++) {
      const angle = (r * Math.PI / 6) + t * 0.2;
      const rx1 = sunX + Math.cos(angle) * 85;
      const ry1 = sunY + Math.sin(angle) * 85;
      const rx2 = sunX + Math.cos(angle) * 115;
      const ry2 = sunY + Math.sin(angle) * 115;
      ctx.beginPath();
      ctx.moveTo(rx1, ry1);
      ctx.lineTo(rx2, ry2);
      ctx.stroke();
    }
    ctx.restore();

    // Fluffy Floating Clouds
    this.drawCloud(ctx, (w * 0.2 + t * 20) % (w + 200) - 100, h * 0.12, 1.0);
    this.drawCloud(ctx, (w * 0.65 + t * 15) % (w + 200) - 100, h * 0.22, 0.8);

    // Rolling Green Hills (Bottom 35%)
    ctx.save();
    // Back hill
    ctx.fillStyle = '#66BB6A';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * 0.72);
    ctx.quadraticCurveTo(w * 0.35, h * 0.64, w * 0.7, h * 0.75);
    ctx.quadraticCurveTo(w * 0.85, h * 0.79, w, h * 0.73);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Front hill
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * 0.8);
    ctx.quadraticCurveTo(w * 0.45, h * 0.72, w, h * 0.82);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Cute Daisies / Flowers on hills
    for (let f = 0; f < 8; f++) {
      const fx = (f * w) / 8 + 40;
      const fy = h * 0.85 + Math.sin(f + t) * 8;
      this.drawFlower(ctx, fx, fy);
    }
    ctx.restore();
  }

  drawCloud(ctx, x, y, scale = 1.0) {
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(x, y, 40 * scale, 0, Math.PI * 2);
    ctx.arc(x + 35 * scale, y - 20 * scale, 45 * scale, 0, Math.PI * 2);
    ctx.arc(x + 80 * scale, y - 10 * scale, 40 * scale, 0, Math.PI * 2);
    ctx.arc(x + 110 * scale, y + 5 * scale, 32 * scale, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawFlower(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    for (let p = 0; p < 5; p++) {
      const a = (p * Math.PI * 2) / 5;
      ctx.beginPath();
      ctx.arc(x + Math.cos(a) * 10, y + Math.sin(a) * 10, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#FFEB3B';
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ==========================================
  // PARTICLES
  // ==========================================
  renderParticles(ctx, w, h) {
    ctx.save();
    this.particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      // Draw mini star / sparkle
      this.drawMiniStar(ctx, 0, 0, p.size);
      ctx.restore();
    });
    ctx.restore();
  }

  drawMiniStar(ctx, cx, cy, r) {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(Math.cos((i * Math.PI) / 2) * r, Math.sin((i * Math.PI) / 2) * r);
      ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3));
    }
    ctx.closePath();
    ctx.fill();
  }

  // ==========================================
  // CONFETTI
  // ==========================================
  renderConfetti(ctx) {
    if (this.confetti.length === 0) return;
    ctx.save();
    this.confetti.forEach((c) => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += c.gravity;
      c.rotation += c.rotSpeed;

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rotation);
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
      ctx.restore();
    });
    // Filter off-screen
    this.confetti = this.confetti.filter((c) => c.y < this.height + 50);
    ctx.restore();
  }

  // ==========================================
  // CHARACTERS & VISUAL SUBJECTS
  // ==========================================
  renderCharacter(ctx, w, h) {
    const t = this.time;
    const cx = w / 2;
    const cy = this.aspectRatio === "9:16" ? h * 0.48 : h * 0.52;

    ctx.save();
    ctx.translate(cx, cy);

    // Apply Actions (Bounce, Wobble, Jump)
    if (this.characterAction === "bounce" || this.characterAction === "sing_dance") {
      const bounceY = Math.abs(Math.sin(t * 5)) * -35;
      const squashX = 1 + 0.08 * Math.cos(t * 10);
      const squashY = 1 - 0.08 * Math.cos(t * 10);
      ctx.translate(0, bounceY);
      ctx.scale(squashX, squashY);
    } else if (this.characterAction === "wobble") {
      ctx.rotate(Math.sin(t * 4) * 0.12);
    } else if (this.characterAction === "jump_celebrate" || this.characterAction === "party") {
      const jumpY = Math.abs(Math.sin(t * 7)) * -50;
      ctx.translate(0, jumpY);
      ctx.rotate(Math.sin(t * 6) * 0.08);
    }

    switch (this.character) {
      case "happy_lion":
      case "shadow_lion":
        this.drawLion(ctx, 0, 0, this.character === "shadow_lion");
        break;

      case "bunny_curious":
      case "bunny_and_bird":
      case "bunny_climbing":
      case "bunny_sleeping":
        this.drawBunny(ctx, 0, 0, this.character === "bunny_sleeping");
        break;

      case "yellow_school_bus":
      case "bus_with_wipers":
      case "bus_honking":
      case "bus_party":
        this.drawSchoolBus(ctx, 0, 0);
        break;

      case "main_dancing_star":
      case "shining_diamond_star":
      case "chorus_stars":
      case "baby_star":
        this.drawStarCharacter(ctx, 0, 0);
        break;

      case "crescent_moon":
      case "crescent_moon_sleepy":
        this.drawMoon(ctx, 0, 0, this.character === "crescent_moon_sleepy");
        break;

      case "spotted_cow":
        this.drawCow(ctx, 0, 0);
        break;

      case "fluffy_sheep":
        this.drawSheep(ctx, 0, 0);
        break;

      case "letter_A":
      case "shiny_apple":
        this.drawLetterA(ctx, 0, 0);
        break;

      case "balloon_red":
      case "balloon_pair":
      case "balloon_quad":
      case "balloon_five":
        this.drawBalloons(ctx, 0, 0);
        break;

      case "timer_clock":
        this.drawCountdownClock(ctx, 0, 0);
        break;

      case "subscribe_bell":
        this.drawSubscribeBell(ctx, 0, 0);
        break;

      case "parrot_chitti":
      case "flying_parrot":
        this.drawParrot(ctx, 0, 0);
        break;

      case "thirsty_crow":
      case "crow_pitcher":
        this.drawCrow(ctx, 0, 0, this.character === "crow_pitcher");
        break;

      case "slow_tortoise":
      case "tortoise_winning":
        this.drawTortoise(ctx, 0, 0, this.character === "tortoise_winning");
        break;

      case "bujji_meka":
      case "baby_goat":
        this.drawBabyGoat(ctx, 0, 0);
        break;

      case "letter_te_A":
      case "banana_apple_basket":
        this.drawTeluguLetterA(ctx, 0, 0);
        break;

      case "letter_hi_A":
        this.drawHindiLetterA(ctx, 0, 0);
        break;

      case "letter_ta_A":
        this.drawTamilLetterA(ctx, 0, 0);
        break;

      case "letter_kn_A":
        this.drawKannadaLetterA(ctx, 0, 0);
        break;

      case "swimming_fish":
        this.drawFish(ctx, 0, 0);
        break;

      case "wooden_horse":
        this.drawWoodenHorse(ctx, 0, 0);
        break;

      case "question_mark":
      default:
        this.drawQuestionMark(ctx, 0, 0);
        break;
    }

    ctx.restore();
  }

  // --- CHARACTER DRAWING ROUTINES ---

  drawParrot(ctx, x, y) {
    const t = this.time;
    ctx.save();
    
    // Perch / Branch
    ctx.fillStyle = '#795548';
    ctx.beginPath();
    ctx.roundRect(-120, 110, 240, 24, 12);
    ctx.fill();

    // Long Teal Tail
    ctx.fillStyle = '#00897B';
    ctx.beginPath();
    ctx.moveTo(-15, 60);
    ctx.lineTo(15, 60);
    ctx.lineTo(5 + Math.sin(t * 3) * 10, 160);
    ctx.lineTo(-5 + Math.sin(t * 3) * 10, 160);
    ctx.closePath();
    ctx.fill();

    // Vibrant Lime Green Body
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.ellipse(0, 20, 75, 95, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bright Lime Belly
    ctx.fillStyle = '#81C784';
    ctx.beginPath();
    ctx.ellipse(0, 30, 50, 65, 0, 0, Math.PI * 2);
    ctx.fill();

    // Flapping Wing
    const wingAngle = Math.sin(t * 6) * 0.15;
    ctx.save();
    ctx.translate(-40, 10);
    ctx.rotate(wingAngle);
    ctx.fillStyle = '#2E7D32';
    ctx.beginPath();
    ctx.ellipse(0, 20, 35, 60, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Red Neck Ring (Indian Ringneck Parakeet / చిలక)
    ctx.fillStyle = '#E91E63';
    ctx.beginPath();
    ctx.ellipse(0, -45, 48, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(0, -60, 55, 0, Math.PI * 2);
    ctx.fill();

    // Cute Big Eyes
    this.drawCartoonEyes(ctx, -22, -65, 22, -65, 16);

    // Cute Curved Hooked Beak (Red & Orange)
    ctx.fillStyle = '#FF3D00';
    ctx.beginPath();
    ctx.moveTo(0, -55);
    ctx.quadraticCurveTo(35, -45, 20, -20);
    ctx.quadraticCurveTo(0, -35, -5, -45);
    ctx.closePath();
    ctx.fill();

    // Little Yellow Feet
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.arc(-25, 110, 12, 0, Math.PI * 2);
    ctx.arc(25, 110, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawCrow(ctx, x, y, withPitcher = false) {
    const t = this.time;
    ctx.save();

    // Pitcher / Clay Pot (కుండ)
    if (withPitcher) {
      ctx.save();
      ctx.translate(90, 40);
      
      // Terracotta Pot Base
      const potGrad = ctx.createLinearGradient(-50, -40, 50, 40);
      potGrad.addColorStop(0, '#D84315');
      potGrad.addColorStop(1, '#8D6E63');
      ctx.fillStyle = potGrad;
      ctx.beginPath();
      ctx.ellipse(0, 20, 55, 60, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pot Neck & Rim
      ctx.fillStyle = '#BF360C';
      ctx.beginPath();
      ctx.roundRect(-30, -45, 60, 20, 8);
      ctx.fill();

      // Glistening Blue Water inside pot
      ctx.fillStyle = '#29B6F6';
      ctx.beginPath();
      ctx.ellipse(0, -25, 25, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Sparkles on water
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(6, -27, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // Crow Body (Glossy Slate / Charcoal)
    ctx.fillStyle = '#263238';
    ctx.beginPath();
    ctx.ellipse(withPitcher ? -40 : 0, 20, 65, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wing
    ctx.fillStyle = '#1A237E';
    ctx.beginPath();
    ctx.ellipse(withPitcher ? -70 : -35, 15, 30, 55, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Head
    const hx = withPitcher ? -35 : 0;
    const hy = -55;
    ctx.fillStyle = '#263238';
    ctx.beginPath();
    ctx.arc(hx, hy, 48, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    this.drawCartoonEyes(ctx, hx - 16, hy - 8, hx + 16, hy - 8, 14);

    // Beak
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.moveTo(hx + 10, hy - 8);
    ctx.lineTo(hx + 55, hy + 2);
    ctx.lineTo(hx + 10, hy + 12);
    ctx.closePath();
    ctx.fill();

    // Shiny Pebble in beak if withPitcher
    if (withPitcher) {
      ctx.fillStyle = '#B0BEC5';
      ctx.beginPath();
      ctx.arc(hx + 50, hy + 10, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  drawTortoise(ctx, x, y, isWinning = false) {
    const t = this.time;
    ctx.save();

    // Green Shell
    const shellGrad = ctx.createLinearGradient(0, -60, 0, 60);
    shellGrad.addColorStop(0, '#66BB6A');
    shellGrad.addColorStop(1, '#2E7D32');
    ctx.fillStyle = shellGrad;
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(0, 0, 120, 85, 0, Math.PI, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Shell Hexagon Patterns
    ctx.strokeStyle = '#81C784';
    ctx.lineWidth = 5;
    [-45, 0, 45].forEach(sx => {
      ctx.beginPath();
      ctx.arc(sx, -35, 22, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Smiling Cute Head
    const headBob = Math.sin(t * 3) * 6;
    ctx.fillStyle = '#81C784';
    ctx.beginPath();
    ctx.ellipse(115, -15 + headBob, 45, 35, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    this.drawCartoonEyes(ctx, 110, -22 + headBob, 130, -22 + headBob, 12);

    // Big Smile
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(125, -10 + headBob, 14, 0.2, Math.PI * 0.8);
    ctx.stroke();

    // Cute Round Feet
    ctx.fillStyle = '#66BB6A';
    [-70, -20, 30, 80].forEach(fx => {
      ctx.beginPath();
      ctx.ellipse(fx, 15, 22, 16, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Winner Gold Medal if winning
    if (isWinning) {
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(115, -55 + headBob, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#D50000';
      ctx.font = 'bold 16px "Fredoka", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('1st', 115, -50 + headBob);
    }

    ctx.restore();
  }

  drawBabyGoat(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Fluffy White/Cream Body
    ctx.fillStyle = '#FFF8E1';
    ctx.beginPath();
    ctx.ellipse(0, 25, 95, 75, 0, 0, Math.PI * 2);
    ctx.fill();

    // Little Legs
    [-55, -20, 20, 55].forEach(lx => {
      ctx.fillStyle = '#FFE082';
      ctx.beginPath();
      ctx.roundRect(lx - 12, 70, 24, 45, 8);
      ctx.fill();
      // Little Hooves
      ctx.fillStyle = '#5D4037';
      ctx.beginPath();
      ctx.roundRect(lx - 12, 105, 24, 10, 4);
      ctx.fill();
    });

    // Cute Head
    const headX = 65;
    const headY = -35;
    ctx.fillStyle = '#FFF9C4';
    ctx.beginPath();
    ctx.arc(headX, headY, 52, 0, Math.PI * 2);
    ctx.fill();

    // Floppy Cute Ears
    const earWag = Math.sin(t * 5) * 0.2;
    ctx.save();
    ctx.translate(headX - 35, headY - 20);
    ctx.rotate(-0.5 + earWag);
    ctx.fillStyle = '#FFCCBC';
    ctx.beginPath();
    ctx.ellipse(0, 20, 16, 32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(headX + 25, headY - 20);
    ctx.rotate(0.5 - earWag);
    ctx.fillStyle = '#FFCCBC';
    ctx.beginPath();
    ctx.ellipse(0, 20, 16, 32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Eyes
    this.drawCartoonEyes(ctx, headX - 16, headY - 5, headX + 16, headY - 5, 14);

    // Pink Snout & Smile
    ctx.fillStyle = '#F8BBD0';
    ctx.beginPath();
    ctx.ellipse(headX + 5, headY + 22, 22, 14, 0, 0, Math.PI * 2);
    ctx.fill();

    // Red Ribbon with Golden Bell
    ctx.strokeStyle = '#D50000';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(25, 0, 45, 30, 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Golden Bell
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(45, 25, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawTeluguLetterA(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Glowing Golden Royal Sunburst
    const sunGrad = ctx.createRadialGradient(0, 0, 30, 0, 0, 170);
    sunGrad.addColorStop(0, '#FFF59D');
    sunGrad.addColorStop(0.7, '#FFD54F');
    sunGrad.addColorStop(1, '#FFB300');
    ctx.fillStyle = sunGrad;
    ctx.shadowColor = '#FF8F00';
    ctx.shadowBlur = 40;

    ctx.beginPath();
    ctx.arc(0, 0, 160, 0, Math.PI * 2);
    ctx.fill();

    // Decorative White Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Telugu Letter 'అ' in Gorgeous Royal Calligraphy
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#B71C1C';
    ctx.font = 'bold 180px "Noto Sans Telugu", "Ramabhadra", "Nirmala UI", "Gautami", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('అ', 0, 5);

    // Cute Banana Icon beside badge
    ctx.fillStyle = '#FFEE58';
    ctx.beginPath();
    ctx.arc(120, -110, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.font = '36px sans-serif';
    ctx.fillText('🍌', 120, -110);

    ctx.restore();
  }

  drawLion(ctx, x, y, isShadow = false) {
    const t = this.time;
    ctx.save();

    // Mane
    ctx.fillStyle = isShadow ? '#2C3E50' : '#E67E22';
    for (let i = 0; i < 16; i++) {
      const a = (i * Math.PI * 2) / 16;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * 140, Math.sin(a) * 140, 48, 0, Math.PI * 2);
      ctx.fill();
    }

    // Face
    ctx.fillStyle = isShadow ? '#34495E' : '#F39C12';
    ctx.beginPath();
    ctx.arc(0, 0, 130, 0, Math.PI * 2);
    ctx.fill();

    if (!isShadow) {
      // Cheeks
      ctx.fillStyle = '#FFA726';
      ctx.beginPath();
      ctx.ellipse(-50, 40, 35, 25, 0, 0, Math.PI * 2);
      ctx.ellipse(50, 40, 35, 25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Big Cute Cartoon Eyes
      this.drawCartoonEyes(ctx, -45, -20, 45, -20);

      // Nose
      ctx.fillStyle = '#8E44AD';
      ctx.beginPath();
      ctx.moveTo(-18, 15);
      ctx.lineTo(18, 15);
      ctx.lineTo(0, 35);
      ctx.closePath();
      ctx.fill();

      // Big Smile
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(-25, 45, 22, 0.1, Math.PI * 0.9);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(25, 45, 22, 0.1, Math.PI * 0.9);
      ctx.stroke();

      // Golden Crown
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(-70, -110);
      ctx.lineTo(-45, -80);
      ctx.lineTo(0, -130);
      ctx.lineTo(45, -80);
      ctx.lineTo(70, -110);
      ctx.lineTo(60, -60);
      ctx.lineTo(-60, -60);
      ctx.closePath();
      ctx.fill();
    } else {
      // Silhouette question mark on chest
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 90px "Fredoka", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('?', 0, 30);
    }

    ctx.restore();
  }

  drawBunny(ctx, x, y, isSleeping = false) {
    const t = this.time;
    ctx.save();

    // Long Floppy Ears
    ctx.fillStyle = '#ECEFF1';
    // Left Ear
    ctx.beginPath();
    ctx.ellipse(-55, -150, 32, 95, -0.2 + Math.sin(t * 3) * 0.05, 0, Math.PI * 2);
    ctx.fill();
    // Right Ear
    ctx.beginPath();
    ctx.ellipse(55, -150, 32, 95, 0.2 - Math.sin(t * 3) * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // Inner Ears (Pink)
    ctx.fillStyle = '#FF80AB';
    ctx.beginPath();
    ctx.ellipse(-55, -150, 18, 70, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(55, -150, 18, 70, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = '#ECEFF1';
    ctx.beginPath();
    ctx.ellipse(0, 30, 95, 85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(0, -50, 85, 0, Math.PI * 2);
    ctx.fill();

    if (isSleeping) {
      // Sleeping Eyes (Curved lines)
      ctx.strokeStyle = '#455A64';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(-35, -50, 18, 0.1, Math.PI * 0.9);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(35, -50, 18, 0.1, Math.PI * 0.9);
      ctx.stroke();

      // Zzz Floating
      ctx.fillStyle = '#90CAF9';
      ctx.font = 'bold 36px "Fredoka", sans-serif';
      ctx.fillText('Z', 70 + Math.sin(t * 2) * 5, -120 + Math.sin(t * 2) * -15);
      ctx.fillText('z', 95 + Math.sin(t * 2 + 1) * 5, -150 + Math.sin(t * 2) * -20);
    } else {
      // Awake Cute Eyes
      this.drawCartoonEyes(ctx, -35, -55, 35, -55);
    }

    // Pink Nose & Mouth
    ctx.fillStyle = '#FF4081';
    ctx.beginPath();
    ctx.arc(0, -32, 10, 0, Math.PI * 2);
    ctx.fill();

    // Whiskers
    ctx.strokeStyle = '#78909C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-20, -30); ctx.lineTo(-75, -40);
    ctx.moveTo(-20, -25); ctx.lineTo(-75, -22);
    ctx.moveTo(20, -30); ctx.lineTo(75, -40);
    ctx.moveTo(20, -25); ctx.lineTo(75, -22);
    ctx.stroke();

    ctx.restore();
  }

  drawStarCharacter(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Glowing Aura
    const auraPulse = 1 + 0.1 * Math.sin(t * 4);
    ctx.shadowColor = '#FFEB3B';
    ctx.shadowBlur = 40;

    // Golden Star Shape
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    const spikes = 5;
    const outerR = 140 * auraPulse;
    const innerR = 65 * auraPulse;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (i * Math.PI) / spikes - Math.PI / 2;
      ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fill();

    // Cute Cheeks
    ctx.fillStyle = '#FF80AB';
    ctx.beginPath();
    ctx.arc(-40, 20, 16, 0, Math.PI * 2);
    ctx.arc(40, 20, 16, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    this.drawCartoonEyes(ctx, -32, -10, 32, -10);

    // Big Smiling Mouth
    ctx.strokeStyle = '#D81B60';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 15, 20, 0.2, Math.PI * 0.8);
    ctx.stroke();

    ctx.restore();
  }

  drawSchoolBus(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Bus Body (Bright Yellow)
    ctx.fillStyle = '#FFD54F';
    ctx.strokeStyle = '#FFA000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(-180, -90, 360, 160, [25, 25, 10, 10]);
    ctx.fill();
    ctx.stroke();

    // Black Stripe
    ctx.fillStyle = '#37474F';
    ctx.fillRect(-180, -5, 360, 22);

    // Windows
    ctx.fillStyle = '#81D4FA';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 4;
    [-140, -60, 20, 100].forEach((wx) => {
      ctx.beginPath();
      ctx.roundRect(wx, -70, 65, 55, 10);
      ctx.fill();
      ctx.stroke();

      // Kids smiling in windows
      ctx.fillStyle = '#FFCA28';
      ctx.beginPath();
      ctx.arc(wx + 32, -35, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#81D4FA'; // Reset
    });

    // Spinning Wheels
    const wheelRot = t * 12;
    [-110, 110].forEach((whX) => {
      ctx.save();
      ctx.translate(whX, 70);
      ctx.rotate(wheelRot);
      // Tire
      ctx.fillStyle = '#263238';
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.fill();
      // Rim
      ctx.fillStyle = '#ECEFF1';
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 2);
      ctx.fill();
      // Hubcap lines
      ctx.strokeStyle = '#78909C';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-18, 0); ctx.lineTo(18, 0);
      ctx.moveTo(0, -18); ctx.lineTo(0, 18);
      ctx.stroke();
      ctx.restore();
    });

    // Headlights
    ctx.fillStyle = '#FFF59D';
    ctx.beginPath();
    ctx.arc(175, 20, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawMoon(ctx, x, y, isSleepy = false) {
    const t = this.time;
    ctx.save();

    // Crescent Moon
    ctx.fillStyle = '#FFF9C4';
    ctx.shadowColor = '#FFF59D';
    ctx.shadowBlur = 35;

    ctx.beginPath();
    ctx.arc(0, 0, 120, 0.4, Math.PI * 1.6);
    ctx.bezierCurveTo(40, -60, 40, 60, Math.cos(0.4) * 120, Math.sin(0.4) * 120);
    ctx.closePath();
    ctx.fill();

    // Cute Sleepy Face on Moon
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(-20, -10, 15, 0.1, Math.PI * 0.9);
    ctx.stroke();

    // Rosy Cheek
    ctx.fillStyle = '#FFAB91';
    ctx.beginPath();
    ctx.arc(-15, 20, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawLetterA(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Big 3D Letter A
    ctx.fillStyle = '#FF1744';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 20;

    ctx.font = 'bold 240px "Fredoka", "Bubblegum Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('A', -90, 0);

    // Shiny Juicy Red Apple beside A
    ctx.translate(90, 0);
    ctx.fillStyle = '#E53935';
    ctx.beginPath();
    ctx.arc(-35, 10, 75, 0, Math.PI * 2);
    ctx.arc(35, 10, 75, 0, Math.PI * 2);
    ctx.fill();

    // Green Leaf
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.ellipse(20, -75, 30, 16, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Brown Stem
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, -60);
    ctx.quadraticCurveTo(10, -90, 5, -100);
    ctx.stroke();

    // Apple Smiling Face
    this.drawCartoonEyes(ctx, -25, 0, 25, 0, 12);
    ctx.strokeStyle = '#B71C1C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 25, 18, 0.1, Math.PI * 0.9);
    ctx.stroke();

    ctx.restore();
  }

  drawBalloons(ctx, x, y) {
    const t = this.time;
    ctx.save();

    const colors = ['#FF1744', '#2979FF', '#FFEA00', '#00E676', '#D500F9'];
    colors.forEach((col, i) => {
      const bx = (i - 2) * 55 + Math.sin(t * 3 + i) * 10;
      const by = Math.cos(t * 3 + i) * 15 - (i % 2) * 40;

      // Balloon string
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bx, by + 50);
      ctx.quadraticCurveTo(bx + Math.sin(t + i) * 15, by + 120, 0, 160);
      ctx.stroke();

      // Balloon oval
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.ellipse(bx, by, 42, 52, 0, 0, Math.PI * 2);
      ctx.fill();

      // Knot
      ctx.beginPath();
      ctx.moveTo(bx - 6, by + 50);
      ctx.lineTo(bx + 6, by + 50);
      ctx.lineTo(bx, by + 56);
      ctx.closePath();
      ctx.fill();

      // Number on balloon
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px "Fredoka", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${i + 1}`, bx, by + 12);
    });

    ctx.restore();
  }

  drawCountdownClock(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Clock Face
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#FF7043';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(0, 0, 130, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Number Countdown Pulse
    const sec = Math.max(1, 3 - Math.floor((t % 3)));
    ctx.fillStyle = '#E64A19';
    ctx.font = 'bold 130px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${sec}`, 0, 10);

    ctx.restore();
  }

  drawSubscribeBell(ctx, x, y) {
    const t = this.time;
    ctx.save();

    // Golden Bell
    ctx.rotate(Math.sin(t * 8) * 0.15); // Ringing oscillation
    ctx.fillStyle = '#FFD600';
    ctx.shadowColor = '#FFA000';
    ctx.shadowBlur = 30;

    ctx.beginPath();
    ctx.moveTo(0, -90);
    ctx.quadraticCurveTo(80, -30, 85, 45);
    ctx.lineTo(-85, 45);
    ctx.quadraticCurveTo(-80, -30, 0, -90);
    ctx.closePath();
    ctx.fill();

    // Clapper
    ctx.fillStyle = '#E65100';
    ctx.beginPath();
    ctx.arc(0, 58, 22, 0, Math.PI * 2);
    ctx.fill();

    // Red Subscribe Badge
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.roundRect(-120, 95, 240, 55, 28);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 30px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🔔 SUBSCRIBE', 0, 133);

    ctx.restore();
  }

  drawCow(ctx, x, y) {
    ctx.save();
    // White Body
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(0, 20, 120, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Black Spots
    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.arc(-40, 10, 28, 0, Math.PI * 2);
    ctx.arc(45, 30, 32, 0, Math.PI * 2);
    ctx.arc(0, -25, 22, 0, Math.PI * 2);
    ctx.fill();

    // Pink Snout
    ctx.fillStyle = '#F8BBD0';
    ctx.beginPath();
    ctx.ellipse(0, 55, 45, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#880E4F';
    ctx.beginPath();
    ctx.arc(-18, 55, 6, 0, Math.PI * 2);
    ctx.arc(18, 55, 6, 0, Math.PI * 2);
    ctx.fill();

    // Eyes & Horns
    this.drawCartoonEyes(ctx, -30, -5, 30, -5);
    ctx.fillStyle = '#FFA726';
    ctx.beginPath();
    ctx.arc(-55, -45, 14, 0, Math.PI * 2);
    ctx.arc(55, -45, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawSheep(ctx, x, y) {
    ctx.save();
    // Fluffy Cloud Body
    ctx.fillStyle = '#FAFAFA';
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI * 2) / 10;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * 80, Math.sin(a) * 60, 42, 0, Math.PI * 2);
      ctx.fill();
    }

    // Black Face
    ctx.fillStyle = '#424242';
    ctx.beginPath();
    ctx.ellipse(0, 0, 50, 42, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cute Droopy Ears
    ctx.beginPath();
    ctx.ellipse(-55, -10, 22, 14, -0.4, 0, Math.PI * 2);
    ctx.ellipse(55, -10, 22, 14, 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Cute Big Eyes
    this.drawCartoonEyes(ctx, -18, -6, 18, -6, 12);
    ctx.restore();
  }

  drawQuestionMark(ctx, x, y) {
    const t = this.time;
    ctx.save();
    ctx.fillStyle = '#FFD54F';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 8;
    ctx.font = 'bold 220px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText('?', 0, 0);
    ctx.fillText('?', 0, 0);
    ctx.restore();
  }

  // --- Multi-Language Letter & Cartoon Routines ---

  drawFish(ctx, x, y) {
    const t = this.time;
    ctx.save();
    ctx.translate(x, y);

    // Swimming gentle wave motion
    const swimAngle = Math.sin(t * 6) * 0.08;
    ctx.rotate(swimAngle);

    // Bubbles
    for (let b = 0; b < 4; b++) {
      const bx = -140 - (b * 40);
      const by = -80 + Math.sin(t * 4 + b) * 30 - ((t * 80 + b * 50) % 220);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.strokeStyle = '#4D96FF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(bx, by, 12 + b * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Tail fin (wiggling)
    const tailWiggle = Math.sin(t * 12) * 22;
    ctx.save();
    ctx.translate(-150, 0);
    ctx.fillStyle = '#FF9A3C';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-60, -70 + tailWiggle, -110, -50 + tailWiggle);
    ctx.quadraticCurveTo(-70, 0, -110, 50 + tailWiggle);
    ctx.quadraticCurveTo(-60, 70 + tailWiggle, 0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();

    // Body (chubby cute oval)
    const bodyGrad = ctx.createRadialGradient(20, -20, 20, 0, 0, 160);
    bodyGrad.addColorStop(0, '#FFD54F');
    bodyGrad.addColorStop(0.5, '#FF9800');
    bodyGrad.addColorStop(1, '#F57C00');
    ctx.fillStyle = bodyGrad;

    ctx.beginPath();
    ctx.ellipse(0, 0, 160, 115, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 6;
    ctx.stroke();

    // White clownfish stripes
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(-20, 0, 28, 105, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(60, 0, 22, 90, 0, 0, Math.PI * 2);
    ctx.fill();

    // Top fin
    ctx.fillStyle = '#FF9A3C';
    ctx.beginPath();
    ctx.moveTo(-40, -110);
    ctx.quadraticCurveTo(20, -180, 80, -100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Side fin (flapping)
    ctx.save();
    ctx.translate(10, 20);
    ctx.rotate(Math.sin(t * 8) * 0.25);
    ctx.fillStyle = '#FFB74D';
    ctx.beginPath();
    ctx.ellipse(0, 0, 45, 25, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Sparkling Eyes
    this.drawCartoonEyes(ctx, 80, -35, 80, -35, 24);

    // Smiling Fish Lips
    ctx.fillStyle = '#FF5252';
    ctx.beginPath();
    ctx.arc(155, 10, 18, 0.2, Math.PI * 1.8);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  drawWoodenHorse(ctx, x, y) {
    const t = this.time;
    ctx.save();
    ctx.translate(x, y);

    // Rocking back and forth motion
    const rockAngle = Math.sin(t * 4) * 0.12;
    ctx.rotate(rockAngle);

    // Curved wooden rockers at base
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 60, 180, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

    // Wooden legs
    ctx.strokeStyle = '#A1887F';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-90, 20);
    ctx.lineTo(-110, 140);
    ctx.moveTo(70, 20);
    ctx.lineTo(100, 140);
    ctx.stroke();

    // Horse Body
    const horseGrad = ctx.createLinearGradient(-100, -60, 100, 40);
    horseGrad.addColorStop(0, '#D7CCC8');
    horseGrad.addColorStop(1, '#BCAAA4');
    ctx.fillStyle = horseGrad;

    ctx.beginPath();
    ctx.roundRect(-100, -20, 180, 75, 30);
    ctx.fill();
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 6;
    ctx.stroke();

    // Horse Neck & Head
    ctx.beginPath();
    ctx.moveTo(40, -10);
    ctx.lineTo(85, -110);
    ctx.lineTo(150, -90);
    ctx.lineTo(120, -30);
    ctx.lineTo(80, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cute Ears
    ctx.fillStyle = '#8D6E63';
    ctx.beginPath();
    ctx.moveTo(95, -110);
    ctx.lineTo(105, -145);
    ctx.lineTo(120, -110);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cheerful Red Saddle
    ctx.fillStyle = '#E53935';
    ctx.beginPath();
    ctx.roundRect(-40, -25, 75, 45, 12);
    ctx.fill();
    ctx.strokeStyle = '#FFD54F';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Tail (fluffy yarn)
    ctx.fillStyle = '#E57373';
    ctx.beginPath();
    ctx.moveTo(-100, 0);
    ctx.quadraticCurveTo(-140, 20, -135, 70);
    ctx.quadraticCurveTo(-110, 50, -95, 30);
    ctx.closePath();
    ctx.fill();

    // Eye
    this.drawCartoonEyes(ctx, 110, -75, 110, -75, 12);

    ctx.restore();
  }

  drawLetterBadge(ctx, letter, subtitle, fontFam, color1 = '#FF416C', color2 = '#FF4B2B') {
    const t = this.time;
    ctx.save();

    // Glowing outer ring
    const pulse = 1 + 0.04 * Math.sin(t * 5);
    ctx.scale(pulse, pulse);

    const grad = ctx.createLinearGradient(-150, -150, 150, 150);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
    ctx.fillStyle = grad;

    ctx.shadowColor = 'rgba(255, 65, 108, 0.45)';
    ctx.shadowBlur = 35;
    ctx.beginPath();
    ctx.arc(0, 0, 150, 0, Math.PI * 2);
    ctx.fill();

    // Inner white circle
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(0, 0, 125, 0, Math.PI * 2);
    ctx.fill();

    // Letter
    ctx.fillStyle = color2;
    ctx.shadowColor = 'transparent';
    ctx.font = `bold 125px "${fontFam}", "Fredoka", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 0, -8);

    // Sparkles
    for (let s = 0; s < 4; s++) {
      const sa = (s * Math.PI) / 2 + t * 2;
      const sx = Math.cos(sa) * 165;
      const sy = Math.sin(sa) * 165;
      this.drawMiniStar(ctx, sx, sy, 14);
    }

    ctx.restore();
  }

  drawTeluguLetterA(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    this.drawLetterBadge(ctx, 'అ', 'అరటిపండు', 'Noto Sans Telugu', '#FF8008', '#FFC837');
    ctx.restore();
  }

  drawHindiLetterA(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    this.drawLetterBadge(ctx, 'अ', 'अनार', 'Fredoka', '#FF416C', '#FF4B2B');
    ctx.restore();
  }

  drawTamilLetterA(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    this.drawLetterBadge(ctx, 'அ', 'அணில்', 'Fredoka', '#8A2387', '#E94057');
    ctx.restore();
  }

  drawKannadaLetterA(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    this.drawLetterBadge(ctx, 'ಅ', 'ಅರಸ', 'Fredoka', '#11998E', '#38EF7D');
    ctx.restore();
  }

  drawCartoonEyes(ctx, x1, y1, x2, y2, radius = 22) {
    const t = this.time;
    const isBlink = (Math.floor(t * 1.5) % 5 === 0) && (t % 1 < 0.15);

    [-1, 1].forEach((dir) => {
      const ex = dir === -1 ? x1 : x2;
      const ey = dir === -1 ? y1 : y2;

      ctx.save();
      ctx.translate(ex, ey);

      if (isBlink) {
        // Closed Eye Arc
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.8, 0.1, Math.PI * 0.9);
        ctx.stroke();
      } else {
        // White sclera
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        // Big Pupil
        ctx.fillStyle = '#1A237E';
        ctx.beginPath();
        ctx.arc(dir * 3, 2, radius * 0.65, 0, Math.PI * 2);
        ctx.fill();

        // White Sparkle Highlights
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(dir * 3 - 4, -4, radius * 0.28, 0, Math.PI * 2);
        ctx.arc(dir * 3 + 4, 6, radius * 0.14, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
  }

  // ==========================================
  // HEADER BANNER
  // ==========================================
  renderHeader(ctx, w, h) {
    if (!this.heading) return;

    ctx.save();
    const isShort = this.aspectRatio === "9:16";
    const hy = isShort ? h * 0.18 : h * 0.14;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Banner Pill Box
    ctx.font = isShort 
      ? 'bold 52px "Noto Sans Telugu", "Ramabhadra", "Mandali", "Nirmala UI", "Gautami", "Fredoka", sans-serif' 
      : 'bold 44px "Noto Sans Telugu", "Ramabhadra", "Mandali", "Nirmala UI", "Gautami", "Fredoka", sans-serif';
    const textWidth = ctx.measureText(this.heading).width;
    const pillW = Math.max(textWidth + 80, 420);
    const pillH = isShort ? 100 : 80;

    // Glowing shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 8;

    // Gradient Pill
    const grad = ctx.createLinearGradient(w / 2 - pillW / 2, 0, w / 2 + pillW / 2, 0);
    grad.addColorStop(0, '#FF416C');
    grad.addColorStop(1, '#FF4B2B');
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.roundRect(w / 2 - pillW / 2, hy - pillH / 2, pillW, pillH, pillH / 2);
    ctx.fill();

    // Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 6;
    ctx.stroke();

    // Text with slight 3D shadow
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(this.heading, w / 2, hy + 2);

    ctx.restore();
  }

  // ==========================================
  // BOUNCY KARAOKE SUBTITLES
  // ==========================================
  renderSubtitles(ctx, w, h) {
    if (!this.subtitles) return;

    ctx.save();
    const isShort = this.aspectRatio === "9:16";
    const subY = isShort ? h * 0.82 : h * 0.86;
    const fontSize = isShort ? 50 : 42;

    ctx.font = `bold ${fontSize}px "Noto Sans Telugu", "Ramabhadra", "Mandali", "Nirmala UI", "Gautami", "Fredoka", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap & Karaoke Highlight
    const maxWidth = w * 0.88;
    const words = this.subtitles.split(' ');
    let lines = [];
    let currentLine = "";

    words.forEach((word) => {
      const test = currentLine ? `${currentLine} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = test;
      }
    });
    if (currentLine) lines.push(currentLine);

    // Draw Subtitle Box
    const lineH = fontSize * 1.38;
    const boxH = lines.length * lineH + 40;
    const boxW = Math.min(w * 0.92, maxWidth + 60);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.68)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.roundRect(w / 2 - boxW / 2, subY - boxH / 2, boxW, boxH, 25);
    ctx.fill();

    // Draw Lines with Vibrant Yellow & White
    lines.forEach((line, i) => {
      const ly = subY - (lines.length - 1) * (lineH / 2) + i * lineH;
      
      // Outline for readability
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 6;
      ctx.strokeText(line, w / 2, ly);

      // Gradient / Bright Fill
      ctx.fillStyle = '#FFEB3B'; // Joyful Cocomelon-style yellow
      ctx.fillText(line, w / 2, ly);
    });

    ctx.restore();
  }

  // ==========================================
  // BRANDING BADGE
  // ==========================================
  renderBranding(ctx, w, h) {
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 28px "Noto Sans Telugu", "Fredoka", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('⭐ @manikantadatti6150', w - 40, 50);
    ctx.restore();
  }
}

window.KidsCanvasEngine = KidsCanvasEngine;
