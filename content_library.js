// Kids Content Library for Automated Video Studio
// Categories:
// 1. YouTube Shorts (Quick Facts, Quizzes, ABCs, 123s - 9:16 format)
// 2. Bedtime Stories & Moral Tales (Narrated multi-scene animated stories)
// 3. Nursery Rhymes & Sing-Alongs (Catchy songs with bouncy karaoke subtitles)

const KIDS_CONTENT_LIBRARY_EN = {
  // ==========================================
  // CATEGORY 1: YOUTUBE SHORTS (FAST, VIRAL)
  // ==========================================
  shorts: [
    {
      id: "short_animal_quiz_1",
      title: "🦁 Guess the Secret Animal Sound! #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-5 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "Who Makes This Sound? 🦁 Fun Animal Quiz for Toddlers! #Shorts #KidsLearning",
        description: "Can you guess which friendly animal is making this sound? Test your toddler with this fun animal sound riddle! Subscribe for daily kids shorts! 🌟\n\n#kidsshorts #animalsounds #toddlerlearning #preschoolfun #youtubekids",
        tags: ["kids shorts", "animal sounds", "toddler learning", "guess the animal", "fun for kids", "preschool learning", "nursery"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 GUESS THE ANIMAL!",
          narration: "Hello Little Explorers! Listen carefully. Who makes this super loud sound?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "Can you guess who makes this sound?"
        },
        {
          duration: 4.5,
          heading: "🔊 LISTEN CLOSELY...",
          narration: "ROOAAR! ROOAAR! Did you hear that? Who has a golden mane and says ROAR?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "ROOAAR! Who says ROAR?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "Counting down! Three! Two! One! Say it with me!",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "3... 2... 1... What's your answer?"
        },
        {
          duration: 6.0,
          heading: "🎉 IT'S A LION! 🦁",
          narration: "It's Leo the King of the Jungle! A brave and happy lion! Great job, little superstar!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "Yay! It's Leo the friendly Lion! 🌟"
        },
        {
          duration: 5.0,
          heading: "🌟 SUBSCRIBE FOR MORE!",
          narration: "Tap the subscribe button to meet more animal friends tomorrow! Bye bye!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "Subscribe for more fun animal games! 🎈"
        }
      ]
    },
    {
      id: "short_abc_magic",
      title: "🍎 A is for Apple! Alphabet Magic #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#4D96FF",
      bgStyle: "rainbow_sky",
      targetAge: "2-4 years",
      musicTrack: "cheerful_whistle",
      durationSec: 24,
      seo: {
        title: "Letter A Phonics Fun! 🍎 A is for Apple & Alligator #Shorts #ABCPhonics",
        description: "Learn the letter A with sweet apples and smiling alligators! Phonics learning for toddlers and preschoolers. Like & Subscribe for Letter B! 🚀\n\n#abc #phonics #letterA #toddlers #learnalphabet #shorts",
        tags: ["letter a", "abc song", "phonics for kids", "alphabet learning", "preschool abc", "kids shorts"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "✨ LETTER OF THE DAY ✨",
          narration: "Look up in the sky! It's the very first letter of the alphabet! The Letter A!",
          soundEffect: "magic_wand",
          character: "letter_A",
          characterAction: "spin_glow",
          subtitles: "Welcome to Letter A Magic!"
        },
        {
          duration: 5.0,
          heading: "🍎 A IS FOR APPLE!",
          narration: "A says Ah, Ah, Apple! Big, red, and juicy! Take a bite! Munch munch munch!",
          soundEffect: "bite_crunch",
          character: "shiny_apple",
          characterAction: "bounce",
          subtitles: "Ah - Ah - Apple! 🍎 So yummy!"
        },
        {
          duration: 5.0,
          heading: "🐊 A IS FOR ALLIGATOR!",
          narration: "A says Ah, Ah, Alligator! Chomping happily with a friendly smile! Chomp chomp!",
          soundEffect: "water_splash",
          character: "cute_alligator",
          characterAction: "chomp",
          subtitles: "Ah - Ah - Alligator! 🐊 Chomp chomp!"
        },
        {
          duration: 5.0,
          heading: "🌟 YOU DID IT!",
          narration: "You learned Letter A! Can you find something around you that starts with A? You are so smart!",
          soundEffect: "cheer_fanfare",
          character: "golden_star",
          characterAction: "twinkle",
          confetti: true,
          subtitles: "Super Job! You know Letter A! 🏆"
        },
        {
          duration: 4.5,
          heading: "❤️ LIKE & SUBSCRIBE!",
          narration: "Subscribe now to learn Letter B next! See you tomorrow, friend!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "Subscribe for Letter B tomorrow! 🎈"
        }
      ]
    },
    {
      id: "short_numbers_safari",
      title: "🎈 Count 1 to 5 with Flying Balloons! #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#6BCB77",
      bgStyle: "sunny_park",
      targetAge: "2-5 years",
      musicTrack: "bouncy_melody",
      durationSec: 25,
      seo: {
        title: "Count 1 to 5 with Colorful Balloons! 🎈 Fun Math for Kids #Shorts",
        description: "Let's count floating balloons together! 1, 2, 3, 4, 5! Fun early math and numbers for toddlers. Subscribe for more numbers! 🌟\n\n#numbersforkids #countto5 #toddlermath #preschoolnumbers #kidsactivities",
        tags: ["numbers for kids", "count 1 to 5", "toddler counting", "math for preschool", "balloon count"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🎈 LET'S COUNT BALLOONS!",
          narration: "Look at the colorful balloons floating into the sky! Let's count them one by one!",
          soundEffect: "pop_sound",
          character: "balloon_red",
          characterAction: "float_up",
          subtitles: "Count the balloons with me! 🎈"
        },
        {
          duration: 5.0,
          heading: "1️⃣ ONE & 2️⃣ TWO!",
          narration: "One red balloon! And here comes two! A bright blue balloon! One, two!",
          soundEffect: "chime_1",
          character: "balloon_pair",
          characterAction: "dance",
          subtitles: "1... 2... Two flying balloons!"
        },
        {
          duration: 5.0,
          heading: "3️⃣ THREE & 4️⃣ FOUR!",
          narration: "Three sunny yellow balloons, and four green ones dancing in the breeze! 1, 2, 3, 4!",
          soundEffect: "chime_2",
          character: "balloon_quad",
          characterAction: "dance",
          subtitles: "3... 4... Higher and higher!"
        },
        {
          duration: 5.5,
          heading: "5️⃣ FIVE PURPLE BALLOONS! 🌟",
          narration: "And number five! A magical purple star balloon! Five balloons in the sky! Hurray!",
          soundEffect: "cheer_fanfare",
          character: "balloon_five",
          characterAction: "party",
          confetti: true,
          subtitles: "High five! We counted all 5! ✋"
        },
        {
          duration: 5.0,
          heading: "🌟 SUBSCRIBE FOR MORE NUMBERS!",
          narration: "Which color was your favorite? Leave a comment and subscribe for more fun math!",
          soundEffect: "sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "Subscribe for more counting games! 🎁"
        }
      ]
    }
  ],

  // ==========================================
  // CATEGORY 2: BEDTIME STORIES & MORAL TALES
  // ==========================================
  stories: [
    {
      id: "story_brave_bunny",
      title: "🐰 Barnaby the Brave Little Bunny",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#FFD93D",
      bgStyle: "enchanted_forest",
      targetAge: "3-7 years",
      musicTrack: "gentle_acoustic",
      durationSec: 40,
      seo: {
        title: "Barnaby the Brave Little Bunny 🐰 | Bedtime Moral Story for Kids | English Cartoon",
        description: "Join Barnaby on a magical forest adventure where he discovers that true bravery means having a kind and helpful heart. Perfect cozy bedtime story for toddlers and young children.\n\n#bedtimestories #moralstories #kidsstorytime #bunnycartoon #fairytaleforkids",
        tags: ["bedtime stories for kids", "moral stories for children", "bunny story", "kids storybook", "kindergarten cartoon"]
      },
      scenes: [
        {
          duration: 8.0,
          heading: "The Whispering Meadow 🌸",
          narration: "Once upon a time, deep in the Whispering Meadow, lived Barnaby. Barnaby was a little bunny with long floppy ears, twitchy whiskers, and a heart full of big dreams.",
          soundEffect: "forest_birds",
          character: "bunny_curious",
          characterAction: "hop_around",
          subtitles: "Once upon a time lived Barnaby the Bunny 🐰"
        },
        {
          duration: 8.0,
          heading: "A Cry for Help 🐥",
          narration: "One afternoon, as golden sunlight tickled the treetops, Barnaby heard a tiny squeak. Peeking beneath a giant oak leaf, he found Pip, a baby bluebird who could not fly back to his nest.",
          soundEffect: "chirp_sound",
          character: "bunny_and_bird",
          characterAction: "comfort",
          subtitles: "Pip the little bluebird needed help! 🐥"
        },
        {
          duration: 8.0,
          heading: "The Tall Stepping Stones 🍃",
          narration: "Barnaby was small, but his courage was mighty. He gathered soft green clover leaves and built a cozy ladder, gently carrying Pip step by step back up to the warm cozy tree.",
          soundEffect: "gentle_wind",
          character: "bunny_climbing",
          characterAction: "reach_up",
          subtitles: "Step by step, Barnaby helped Pip reach home."
        },
        {
          duration: 8.0,
          heading: "A Mother's Gratitude 💖",
          narration: "Mother Bluebird hugged Pip with joy. 'Thank you, Barnaby!' she sang. 'You are the bravest bunny in the whole forest!' Barnaby smiled brightly, his floppy ears glowing with happiness.",
          soundEffect: "cheer_gentle",
          character: "happy_family",
          characterAction: "glow",
          confetti: true,
          subtitles: "You are the bravest bunny in the forest! 🌟"
        },
        {
          duration: 8.0,
          heading: "Goodnight, Sweet Dreams 🌙",
          narration: "As silver stars sprinkled the night sky, Barnaby curled up in his warm burrow. He learned that being brave simply means being kind to those in need. Goodnight, little Barnaby. Sweet dreams.",
          soundEffect: "lullaby_bell",
          character: "bunny_sleeping",
          characterAction: "sleep_breathe",
          subtitles: "True bravery is having a kind heart. Goodnight! 🌙"
        }
      ]
    },
    {
      id: "story_moon_lost_star",
      title: "🌙 The Moon and the Lost Star",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#432C7A",
      bgStyle: "starry_night",
      targetAge: "2-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 36,
      seo: {
        title: "The Moon and the Lost Star 🌟 | Relaxing Sleep Story for Kids | Bedtime Lullaby",
        description: "A calming, peaceful bedtime story about a sleepy crescent moon guiding a lost little star safely back home into the Milky Way galaxy. Relaxing voice and gentle visuals to help kids fall asleep peacefully.\n\n#sleeptime #kidslullaby #bedtimestory #relaxingstory #sweetdreams",
        tags: ["sleep story for kids", "calm bedtime story", "moon and stars", "toddler sleep music", "peaceful stories"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "The Silver Crescent Moon 🌙",
          narration: "High above the sleepy clouds, Mr. Moon was watching over the peaceful world. The night was quiet, cool, and filled with gentle whispers of the night sky.",
          soundEffect: "night_crickets",
          character: "crescent_moon",
          characterAction: "gentle_rock",
          subtitles: "Mr. Moon smiled down on the quiet world 🌙"
        },
        {
          duration: 7.5,
          heading: "A Little Shimmer Below ✨",
          narration: "Suddenly, Mr. Moon noticed a tiny golden shimmer caught on a fluffy pink cloud. It was Twinkie, a baby star who tumbled down from the great starry blanket.",
          soundEffect: "magic_chime",
          character: "baby_star",
          characterAction: "wobble_glow",
          subtitles: "Twinkie the baby star had lost her way ✨"
        },
        {
          duration: 7.5,
          heading: "The Stardust Bridge 🌈",
          narration: "'Don't worry, little star,' whispered Mr. Moon softly. He blew a stream of glittering stardust that turned into a glowing slide, sweeping Twinkie gently back into the sky.",
          soundEffect: "sparkle_sweep",
          character: "stardust_beam",
          characterAction: "slide_up",
          subtitles: "Mr. Moon blew a bridge of sparkling stardust 🌟"
        },
        {
          duration: 7.0,
          heading: "Back with the Constellations 🌌",
          narration: "Twinkie snuggled happily beside her brother and sister stars, glowing brighter than ever. 'Thank you, Mr. Moon!' they all whispered together.",
          soundEffect: "gentle_twinkle",
          character: "galaxy_cluster",
          characterAction: "twinkle_together",
          subtitles: "All the stars twinkled with joy and love 💖"
        },
        {
          duration: 7.0,
          heading: "Sleep Tight, Little Dreamer 💤",
          narration: "Close your eyes now, little explorer. The moon and stars are watching over you all night long. Rest your head and dream wonderful dreams. Goodnight.",
          soundEffect: "lullaby_bell",
          character: "crescent_moon_sleepy",
          characterAction: "dim_glow",
          subtitles: "Close your eyes. The stars are watching you. Goodnight. 💤"
        }
      ]
    }
  ],

  // ==========================================
  // CATEGORY 3: NURSERY RHYMES & SING-ALONG
  // ==========================================
  rhymes: [
    {
      id: "rhyme_twinkle_twinkle",
      title: "⭐ Twinkle Twinkle Little Star Sing-Along",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#5800FF",
      bgStyle: "cosmic_nebula",
      targetAge: "1-5 years",
      musicTrack: "twinkle_melody",
      durationSec: 32,
      seo: {
        title: "Twinkle Twinkle Little Star ⭐ Cute 3D Cartoon Nursery Rhyme for Kids",
        description: "Sing along to the beloved classic rhyme 'Twinkle Twinkle Little Star' with bouncing karaoke lyrics and cute smiling stars! Perfect for bedtime or preschool sing-alongs.\n\n#nurseryrhymes #twinkletwinkle #kidssongs #singalong #cocomelonstyle",
        tags: ["twinkle twinkle little star", "nursery rhymes", "kids songs", "sing along for toddlers", "preschool songs"]
      },
      scenes: [
        {
          duration: 8.0,
          heading: "⭐ Twinkle, Twinkle, Little Star",
          narration: "Twinkle, twinkle, little star! How I wonder what you are!",
          karaokeWords: [
            { word: "Twinkle,", time: 0.5 },
            { word: "twinkle,", time: 2.0 },
            { word: "little", time: 4.0 },
            { word: "star!", time: 5.5 },
            { word: "How", time: 6.2 },
            { word: "I", time: 6.6 },
            { word: "wonder", time: 7.0 },
            { word: "what", time: 7.4 },
            { word: "you", time: 7.7 },
            { word: "are!", time: 8.0 }
          ],
          soundEffect: "bell_twinkle",
          character: "main_dancing_star",
          characterAction: "sing_dance",
          subtitles: "⭐ Twinkle, twinkle, little star! How I wonder what you are!"
        },
        {
          duration: 8.0,
          heading: "💎 Up Above the World So High",
          narration: "Up above the world so high, like a diamond in the sky!",
          karaokeWords: [
            { word: "Up", time: 0.5 },
            { word: "above", time: 1.5 },
            { word: "the", time: 2.5 },
            { word: "world", time: 3.2 },
            { word: "so", time: 4.0 },
            { word: "high,", time: 4.8 },
            { word: "like", time: 5.5 },
            { word: "a", time: 6.0 },
            { word: "diamond", time: 6.5 },
            { word: "in", time: 7.2 },
            { word: "the", time: 7.5 },
            { word: "sky!", time: 8.0 }
          ],
          soundEffect: "sparkle_burst",
          character: "shining_diamond_star",
          characterAction: "glow_burst",
          subtitles: "💎 Up above the world so high, like a diamond in the sky!"
        },
        {
          duration: 8.0,
          heading: "☀️ When the Blazing Sun is Gone",
          narration: "When the blazing sun is gone, when he nothing shines upon!",
          karaokeWords: [
            { word: "When", time: 0.5 },
            { word: "the", time: 1.5 },
            { word: "blazing", time: 2.5 },
            { word: "sun", time: 3.8 },
            { word: "is", time: 4.5 },
            { word: "gone,", time: 5.2 },
            { word: "when", time: 6.0 },
            { word: "he", time: 6.5 },
            { word: "nothing", time: 7.0 },
            { word: "shines", time: 7.5 },
            { word: "upon!", time: 8.0 }
          ],
          soundEffect: "sunset_ambient",
          character: "setting_sun_and_star",
          characterAction: "transition",
          subtitles: "☀️ When the blazing sun is gone, when he nothing shines upon!"
        },
        {
          duration: 8.0,
          heading: "🌟 Then You Show Your Little Light",
          narration: "Then you show your little light, twinkle, twinkle, all the night! Sing with me!",
          karaokeWords: [
            { word: "Then", time: 0.5 },
            { word: "you", time: 1.2 },
            { word: "show", time: 2.0 },
            { word: "your", time: 2.8 },
            { word: "little", time: 3.5 },
            { word: "light,", time: 4.2 },
            { word: "twinkle,", time: 5.0 },
            { word: "twinkle,", time: 6.0 },
            { word: "all", time: 6.8 },
            { word: "the", time: 7.2 },
            { word: "night!", time: 8.0 }
          ],
          soundEffect: "cheer_sparkle",
          character: "chorus_stars",
          characterAction: "party",
          confetti: true,
          subtitles: "🌟 Twinkle, twinkle, all the night! Great singing! 💖"
        }
      ]
    },
    {
      id: "rhyme_wheels_on_bus",
      title: "🚌 The Wheels on the Bus Go Round and Round",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#FFB319",
      bgStyle: "sunny_town",
      targetAge: "1-6 years",
      musicTrack: "bus_bouncy_tempo",
      durationSec: 32,
      seo: {
        title: "The Wheels on the Bus Go Round and Round 🚌 Fun Kids Song & Rhyme",
        description: "Hop on the yellow bus! The wheels go round and round, wipers go swish swish swish, horn goes beep beep beep! Sing along with the whole family.\n\n#wheelsonthebus #kidssongs #toddlerdance #nurseryrhyme #familyfun",
        tags: ["wheels on the bus", "kids sing along", "bus song", "preschool nursery rhymes", "children music"]
      },
      scenes: [
        {
          duration: 8.0,
          heading: "🚌 Round and Round!",
          narration: "The wheels on the bus go round and round, round and round, round and round! All through the town!",
          soundEffect: "bus_vroom",
          character: "yellow_school_bus",
          characterAction: "drive_bump",
          subtitles: "🚌 The wheels on the bus go round and round!"
        },
        {
          duration: 8.0,
          heading: "🌧️ Swish, Swish, Swish!",
          narration: "The wipers on the bus go swish, swish, swish! Swish, swish, swish! Swish, swish, swish! All through the town!",
          soundEffect: "wiper_swish",
          character: "bus_with_wipers",
          characterAction: "wipers_move",
          subtitles: "🌧️ The wipers on the bus go swish, swish, swish!"
        },
        {
          duration: 8.0,
          heading: "📢 Beep, Beep, Beep!",
          narration: "The horn on the bus goes beep, beep, beep! Beep, beep, beep! Beep, beep, beep! All through the town!",
          soundEffect: "bus_horn",
          character: "bus_honking",
          characterAction: "honk_bounce",
          subtitles: "📢 The horn on the bus goes beep, beep, beep!"
        },
        {
          duration: 8.0,
          heading: "🎉 Hurray for the Bus!",
          narration: "The kids on the bus shout yay, yay, yay! Having fun all through the sunny day! Sing it loud, friends!",
          soundEffect: "cheer_fanfare",
          character: "bus_party",
          characterAction: "celebrate",
          confetti: true,
          subtitles: "🎉 The kids on the bus shout yay, yay, yay!"
        }
      ]
    },
    {
      id: "rhyme_old_macdonald",
      title: "🚜 Old MacDonald Had a Farm (E-I-E-I-O)",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#28B463",
      bgStyle: "farm_sunny",
      targetAge: "2-6 years",
      musicTrack: "country_banjo",
      durationSec: 32,
      seo: {
        title: "Old MacDonald Had a Farm 🚜 Animal Sounds Cow Moo & Sheep Baa for Kids",
        description: "Sing along on Old MacDonald's farm with cows, sheep, and friendly farm animals! E-I-E-I-O! Educational rhymes for toddlers.\n\n#oldmacdonald #farmanimals #animalsounds #kidssong #nurseryrhymes",
        tags: ["old macdonald", "farm animals", "cow sound moo", "kids songs", "preschool nursery"]
      },
      scenes: [
        {
          duration: 8.0,
          heading: "🚜 Welcome to the Farm!",
          narration: "Old MacDonald had a farm, E-I-E-I-O! And on that farm he had a cow, E-I-E-I-O!",
          soundEffect: "banjo_chime",
          character: "farmer_tractor",
          characterAction: "drive_tractor",
          subtitles: "🚜 Old MacDonald had a farm, E-I-E-I-O!"
        },
        {
          duration: 8.0,
          heading: "🐮 Moo, Moo Here!",
          narration: "With a moo moo here, and a moo moo there! Here a moo, there a moo, everywhere a moo moo!",
          soundEffect: "cow_moo",
          character: "spotted_cow",
          characterAction: "chew_jump",
          subtitles: "🐮 With a moo moo here, and a moo moo there!"
        },
        {
          duration: 8.0,
          heading: "🐑 Baa, Baa There!",
          narration: "And on that farm he had a sheep, E-I-E-I-O! With a baa baa here, and a baa baa there! Everywhere a baa baa!",
          soundEffect: "sheep_baa",
          character: "fluffy_sheep",
          characterAction: "hop_grass",
          subtitles: "🐑 With a baa baa here, and a baa baa there!"
        },
        {
          duration: 8.0,
          heading: "🎉 E-I-E-I-O!",
          narration: "Old MacDonald had a farm, E-I-E-I-O! All the happy animals singing together in the sunshine!",
          soundEffect: "farm_party",
          character: "all_farm_animals",
          characterAction: "party",
          confetti: true,
          subtitles: "🚜 Old MacDonald had a farm, E-I-E-I-O! 🎉"
        }
      ]
    }
  ]
};

// ==========================================
// TELUGU KIDS CONTENT LIBRARY (తెలుగు పిల్లల కథలు & పాటలు)
// ==========================================
const KIDS_CONTENT_LIBRARY_TE = {
  shorts: [
    {
      id: "te_short_animal_quiz_1",
      title: "🦁 జంతువుల శబ్దాలు | ఎవరు గర్జిస్తారు? #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-6 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "ఈ జంతువు శబ్దం ఏమిటో కనిపెట్టండి? 🦁 Fun Animal Sound Quiz for Kids in Telugu #Shorts",
        description: "చిట్టి నేస్తాలూ! గర్జ్... అని పెద్దగా గర్జించే ఆ జంతువు ఎవరో కనిపెట్టగలరా? సరదా జంతువుల శబ్దాల క్విజ్! Subscribe for daily Telugu kids shorts! 🌟\n\n#telugukids #animalsounds #chandamamakathalu #telugurhymes #ytshorts #kidsshorts",
        tags: ["telugu kids", "animal sounds in telugu", "telugu cartoon", "simham kathalu", "chandamama kathalu", "telugu shorts", "kids learning telugu"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 జంతువును కనిపెట్టండి!",
          narration: "హలో చిట్టి నేస్తాలూ! శ్రద్ధగా వినండి. ఈ పెద్ద శబ్దం ఎవరిదో కనిపెట్టగలరా?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "🦁 ఈ శబ్దం ఎవరిదో కనిపెట్టగలరా?"
        },
        {
          duration: 4.5,
          heading: "🔊 శ్రద్ధగా వినండి...",
          narration: "గర్ర్ర్ర్! గర్ర్ర్ర్! విన్నారా? బంగారు జూలు కలిగి గర్జించే ఆ జంతువు ఎవరు?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "🔊 గర్ర్ర్ర్! ఎవరు గర్జిస్తారు?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "కౌంట్‌డౌన్ మొదలైంది! మూడు... రెండు... ఒకటి! చెప్పండి చూద్దాం!",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "⏰ 3... 2... 1... మీ సమాధానం ఏమిటి?"
        },
        {
          duration: 6.0,
          heading: "🎉 అడవికి రారాజు సింహం! 🦁",
          narration: "భలే చెప్పారు! ఇది అడవికి రారాజు సింహం! ధైర్యవంతుడైన సింహం బాబు! సూపర్ చిన్నారులూ!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 అడవికి రారాజు సింహం! 🦁 భలే కనిపెట్టారు!"
        },
        {
          duration: 5.0,
          heading: "🌟 సబ్‌స్క్రైబ్ చేయండి!",
          narration: "రేపు మరిన్ని సరదా జంతువులను చూడటానికి సబ్‌స్క్రైబ్ చేయండి! బాయ్ బాయ్!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 మరిన్ని వీడియోల కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    },
    {
      id: "te_short_telugu_varnamala",
      title: "🍎 'అ' అంటే అరటిపండు, 'ఆ' అంటే ఆవు | తెలుగు అక్షరాలు #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#4D96FF",
      bgStyle: "rainbow_sky",
      targetAge: "2-5 years",
      musicTrack: "cheerful_whistle",
      durationSec: 25,
      seo: {
        title: "తెలుగు అక్షరాలు 'అ' 'ఆ' సరదాగా నేర్చుకుందాం! 🍎 Telugu Aksharamala for Kids #Shorts",
        description: "'అ' అంటే తియ్యని అరటిపండు, 'ఆ' అంటే తెల్లని ఆవు! పిల్లలకు తెలుగు అక్షరమాల సరదా పాటలు. Like & Subscribe for more Telugu Learning! 🚀\n\n#teluguaksharamala #telugukids #varnamala #telugulearning #chandamama",
        tags: ["telugu varnamala", "telugu aksharalu", "learn telugu", "telugu kids videos", "telugu rhymes", "chandamama"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "✨ తెలుగు అక్షరమాల సరదా ✨",
          narration: "రండి చిన్నారులూ! ఈరోజు మనం తెలుగు అక్షరాల మాయా లోకంలోకి వెళ్దాం!",
          soundEffect: "sparkle_magic",
          character: "letter_te_A",
          characterAction: "spin_glow",
          subtitles: "✨ రండి తెలుగు అక్షరాలు నేర్చుకుందాం! ✨"
        },
        {
          duration: 5.5,
          heading: "🍌 'అ' అంటే అరటిపండు!",
          narration: "మొదటి అక్షరం 'అ'! 'అ' అంటే తియ్యని అరటిపండు! అరటిపండు తినడం ఆరోగ్యానికి ఎంతో మంచిది!",
          soundEffect: "pop_sound",
          character: "letter_te_A",
          characterAction: "bounce",
          subtitles: "🍌 'అ' అంటే తియ్యని అరటిపండు! 🍌"
        },
        {
          duration: 5.5,
          heading: "🐮 'ఆ' అంటే ఆవు!",
          narration: "రెండవ అక్షరం 'ఆ'! 'ఆ' అంటే పాలిచ్చే అమృతమైన ఆవు! ఆవు పాలు తాగితే బలం వస్తుంది!",
          soundEffect: "cow_moo",
          character: "spotted_cow",
          characterAction: "bounce",
          subtitles: "🐮 'ఆ' అంటే తెల్లని అమృతమైన ఆవు! 🐮"
        },
        {
          duration: 5.0,
          heading: "🎉 'అ' 'ఆ' నేర్చుకున్నాం!",
          narration: "'అ' అరటిపండు, 'ఆ' ఆవు! ఆహా ఎంత చక్కగా నేర్చుకున్నారో! చప్పట్లు కొట్టండి!",
          soundEffect: "cheer_fanfare",
          character: "letter_te_A",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 భలే నేర్చుకున్నారు చిన్నారులూ! 👏"
        },
        {
          duration: 4.5,
          heading: "❤️ సబ్‌స్క్రైబ్ చేయండి!",
          narration: "తదుపరి అక్షరం కోసం ఇప్పుడే సబ్‌స్క్రైబ్ చేసుకోండి! లైక్ చేయండి!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 రేపటి అక్షరం కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    },
    {
      id: "te_short_numbers_telugu",
      title: "🎈 1 నుండి 5 వరకు సంఖ్యలు | తెలుగు లెక్కలు #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF8400",
      bgStyle: "rainbow_sky",
      targetAge: "2-5 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "1 నుండి 5 వరకు సంఖ్యల సరదా! 🎈 Count 1 to 5 in Telugu for Kids #Shorts",
        description: "రంగురంగుల బుడగలతో ఒకటి నుండి ఐదు వరకు తెలుగు సంఖ్యలు సరదాగా లెక్కిద్దాం! Subscribe for daily Telugu kids videos!\n\n#telugunumbers #telugulearning #kidslearningtelugu #shorts #chandamamakathalu",
        tags: ["telugu numbers", "telugu counting", "1 to 5 in telugu", "telugu kids shorts", "kids learning"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🎈 రండి లెక్కిద్దాం! 🎈",
          narration: "హలో నేస్తాలూ! ఆకాశంలో రంగు రంగుల బుడగలు ఎగురుతున్నాయి! నాతో కలిసి లెక్కించండి!",
          soundEffect: "pop_sound",
          character: "balloon_red",
          characterAction: "bounce",
          subtitles: "🎈 ఆకాశంలో రంగు రంగుల బుడగలు! 🎈"
        },
        {
          duration: 5.0,
          heading: "1️⃣ ఒకటి & 2️⃣ రెండు",
          narration: "ఒకటి... ఎర్రటి బుడగ! రెండు... నీలి బుడగ! ఒకటి... రెండు!",
          soundEffect: "pop_sound",
          character: "balloon_pair",
          characterAction: "bounce",
          subtitles: "1️⃣ ఒకటి... 2️⃣ రెండు బుడగలు!"
        },
        {
          duration: 5.0,
          heading: "3️⃣ మూడు & 4️⃣ నాలుగు",
          narration: "మూడు... పసుపు బుడగ! నాలుగు... పచ్చని బుడగ! మూడు... నాలుగు!",
          soundEffect: "pop_sound",
          character: "balloon_quad",
          characterAction: "bounce",
          subtitles: "3️⃣ మూడు... 4️⃣ నాలుగు బుడగలు!"
        },
        {
          duration: 5.5,
          heading: "5️⃣ ఐదు బుడగలు! 🎉",
          narration: "ఐదు... గులాబీ బుడగ! మొత్తం ఐదు అందమైన బుడగలు! ఒకటి, రెండు, మూడు, నాలుగు, ఐదు!",
          soundEffect: "cheer_fanfare",
          character: "balloon_five",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 ఐదు రంగురంగుల బుడగలు ఎగిరాయి! 🎈"
        },
        {
          duration: 4.5,
          heading: "🌟 సూపర్ చిన్నారులూ!",
          narration: "మీరు చాలా బాగా లెక్కించారు! రేపటి కొత్త వీడియో కోసం సబ్‌స్క్రైబ్ చేసుకోండి!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 వెరీ గుడ్! సబ్‌స్క్రైబ్ చేసుకోండి! 🔔"
        }
      ]
    }
  ],
  stories: [
    {
      id: "te_story_rabbit_tortoise",
      title: "🐢 కుందేలు మరియు తాబేలు పరుగు పందెం | తెలుగు నీతి కథలు",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#4E9F3D",
      bgStyle: "sunny_park",
      targetAge: "3-8 years",
      musicTrack: "cheerful_whistle",
      durationSec: 35,
      seo: {
        title: "కుందేలు మరియు తాబేలు పరుగు పందెం 🐢 The Tortoise & The Hare in Telugu | Moral Stories",
        description: "అందమైన తెలుగు నీతి కథ: కుందేలు మరియు తాబేలు పరుగు పందెం! నిదానమే ప్రధానం, అహంకారం పనికిరాదు. Subscribe for more Telugu moral stories!\n\n#chandamamakathalu #teluguneetikathalu #telugukids #moralstoriesintelugu #kidsanimation",
        tags: ["telugu moral stories", "chandamama kathalu", "tortoise and rabbit in telugu", "telugu bedtime stories", "neeti kathalu"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🌳 అడవిలో పరుగు పందెం",
          narration: "అనగనగా ఒక అందమైన అడవిలో ఒక వేగంగా పరిగెత్తే కుందేలు, ఒక నెమ్మదైన తాబేలు ఉండేవి. కుందేలు ఎప్పుడూ తన వేగాన్ని చూసి గర్వపడేది.",
          soundEffect: "chime_fanfare",
          character: "bunny_curious",
          characterAction: "bounce",
          subtitles: "🌳 అడవిలో వేగవంతమైన కుందేలు, నెమ్మదైన తాబేలు!"
        },
        {
          duration: 6.5,
          heading: "🏃‍♂️ పందెం మొదలైంది!",
          narration: "ఒకరోజు కుందేలు తాబేలును పరుగు పందెంలో ఓడిస్తానని సవాలు చేసింది. పందెం మొదలైంది! కుందేలు మెరుపులా ముందుకు దూసుకుపోయింది!",
          soundEffect: "cheer_fanfare",
          character: "bunny_climbing",
          characterAction: "wobble",
          subtitles: "🏃‍♂️ కుందేలు మెరుపులా ముందుకు పరిగెత్తింది!"
        },
        {
          duration: 6.5,
          heading: "😴 నిద్రపోయిన కుందేలు",
          narration: "దారిలో కుందేలు వెనక్కి చూసి అనుకుంది: 'తాబేలు ఎక్కడో ఉంది, నేను కాసేపు చెట్టు నీడన నిద్రపోతాను' అని హాయిగా నిద్రపోయింది.",
          soundEffect: "lullaby_tone",
          character: "bunny_sleeping",
          characterAction: "idle",
          subtitles: "😴 చెట్టు కింద హాయిగా నిద్రపోయిన కుందేలు!"
        },
        {
          duration: 7.5,
          heading: "🏆 గెలిచిన తాబేలు!",
          narration: "కానీ తాబేలు ఆగకుండా, నెమ్మదిగా నడుస్తూ కుందేలును దాటి గమ్యస్థానాన్ని చేరుకుంది! కుందేలు లేచి చూసేసరికి తాబేలు విజయం సాధించింది!",
          soundEffect: "cheer_fanfare",
          character: "tortoise_winning",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 పట్టుదలతో నడిచి పందెం గెలిచిన తాబేలు!"
        },
        {
          duration: 6.0,
          heading: "🌟 నీతి: నిదానమే ప్రధానం!",
          narration: "ఈ కథలోని నీతి: నిదానమే ప్రధానం! ఎప్పుడూ అహంకారం చూపకూడదు, పట్టుదలతో పనిచేస్తే విజయం మనదే! సబ్‌స్క్రైబ్ చేసుకోండి!",
          soundEffect: "sparkle_magic",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 నీతి: నిదానమే ప్రధానం! క్రమశిక్షణతో విజయం! 🌟"
        }
      ]
    },
    {
      id: "te_story_thirsty_crow",
      title: "🐦 దాహం వేసిన తెలివైన కాకి | తెలుగు నీతి కథలు",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#FF9900",
      bgStyle: "sunny_town",
      targetAge: "3-8 years",
      musicTrack: "playful_bounce",
      durationSec: 34,
      seo: {
        title: "దాహం వేసిన తెలివైన కాకి కథ 🐦 The Thirsty Crow in Telugu | Telugu Moral Stories",
        description: "ఉపాయం ఉంటే అపాయం తప్పుతుంది! తెలివైన కాకి కథ పిల్లలకు ఎంతో ఇష్టమైన తెలుగు నీతి కథ. Subscribe for more Chandamama Kathalu!\n\n#chandamamakathalu #thirstycrowintelugu #teluguneetikathalu #telugukids #bedtimestories",
        tags: ["thirsty crow in telugu", "telugu neeti kathalu", "chandamama kathalu", "telugu kids stories", "moral stories"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "☀️ దాహం వేసిన కాకి",
          narration: "ఒక ఎండ తీవ్రంగా ఉన్న రోజున, ఒక కాకికి చాలా దాహం వేసింది. నీటి కోసం అడవి అంతా వెతికింది కానీ ఎక్కడా నీరు కనిపించలేదు.",
          soundEffect: "chime_sparkle",
          character: "thirsty_crow",
          characterAction: "wobble",
          subtitles: "☀️ దాహం వేసిన కాకి నీటి కోసం వెతికింది!"
        },
        {
          duration: 6.5,
          heading: "🏺 తోటలో కనిపించిన కుండ",
          narration: "చివరకు ఒక తోటలో కాకికి ఒక కుండ కనిపించింది. కానీ కుండ అడుగున కొద్దిగా మాత్రమే నీరు ఉంది. కాకి ముక్కు నీటికి అందలేదు.",
          soundEffect: "pop_sound",
          character: "crow_pitcher",
          characterAction: "idle",
          subtitles: "🏺 కుండ అడుగున కొద్దిగా మాత్రమే నీరు ఉంది!"
        },
        {
          duration: 7.0,
          heading: "💡 తెలివైన ఆలోచన!",
          narration: "అప్పుడు తెలివైన కాకికి ఒక మంచి ఉపాయం వచ్చింది! దగ్గరలో ఉన్న చిన్న చిన్న రాళ్ళను ముక్కుతో తెచ్చి ఒక్కొక్కటిగా కుండలో వేయడం మొదలుపెట్టింది.",
          soundEffect: "pop_sound",
          character: "crow_pitcher",
          characterAction: "bounce",
          subtitles: "💡 కాకి చిన్న చిన్న రాళ్ళను కుండలో వేసింది!"
        },
        {
          duration: 7.0,
          heading: "💧 పైకి వచ్చిన నీరు!",
          narration: "రాళ్ళు పడగానే కుండలోని నీరు నెమ్మదిగా పైకి వచ్చింది! కాకి సంతోషంగా కడుపునిండా నీరు తాగి దాహం తీర్చుకుంది!",
          soundEffect: "cheer_fanfare",
          character: "thirsty_crow",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "💧 పైకి వచ్చిన నీటిని కాకి కడుపునిండా తాగింది! 🎉"
        },
        {
          duration: 6.0,
          heading: "🌟 నీతి: ఉపాయమే బలం!",
          narration: "ఈ కథలోని నీతి: ఉపాయం ఉంటే ఎలాంటి కష్టాన్నైనా సులభంగా జయించవచ్చు! రేపటి కథ కోసం సబ్‌స్క్రైబ్ చేసుకోండి!",
          soundEffect: "sparkle_magic",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 నీతి: ఆలోచనతో ఎంతటి కష్టమైనా సాధించవచ్చు! 🌟"
        }
      ]
    },
    {
      id: "te_story_chandamama_star",
      title: "🌙 చందమామ మరియు చిన్ని నక్షత్రం | రాత్రి నిద్రవేళ కథ",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#2C3E50",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 35,
      seo: {
        title: "చందమామ మరియు చిన్ని నక్షత్రం జోలపాట కథ 🌙 Telugu Bedtime Story for Kids Sleep",
        description: "పిల్లలు హాయిగా నిద్రపోవడానికి చందమామ మరియు చిన్ని నక్షత్రం అందమైన రాత్రివేళ కథ. Calming lullaby music & soothing narration. Subscribe for daily sleep stories!\n\n#chandamamakathalu #telugubedtimestories #telugukids #lullaby #goodnightstory",
        tags: ["telugu bedtime stories", "chandamama kathalu", "telugu kids lullaby", "sleep story telugu", "goodnight stories"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "✨ మెరిసే చిన్ని నక్షత్రం",
          narration: "రాత్రివేళ ఆకాశంలో నీలి మేఘాల మధ్య ఒక చిన్ని నక్షత్రం తన ఇంటిని వెతుకుతూ ఉండిపోయింది.",
          soundEffect: "sparkle_magic",
          character: "baby_star",
          characterAction: "bounce",
          subtitles: "✨ ఆకాశంలో ఒంటరిగా మెరిసే చిన్ని నక్షత్రం! ✨"
        },
        {
          duration: 7.0,
          heading: "🌙 చందమామ చిరునవ్వు",
          narration: "అప్పుడు తెల్లని వెన్నెల కురిపించే చందమామ చిరునవ్వుతో వచ్చి, 'భయపడకు చిన్ని నక్షత్రమా, నేను నీకు తోడుగా ఉంటాను' అంది.",
          soundEffect: "chime_sparkle",
          character: "crescent_moon",
          characterAction: "idle",
          subtitles: "🌙 చల్లని వెన్నెల పంచే చందమామ తోడుగా వచ్చింది!"
        },
        {
          duration: 7.0,
          heading: "🎶 తీయని జోలపాట",
          narration: "చందమామ చిన్ని నక్షత్రానికి తియ్యని జోలపాట పాడింది. చల్లని పిల్లగాలి వీస్తూ, అందమైన నిద్రను తెచ్చింది.",
          soundEffect: "sparkle_magic",
          character: "main_dancing_star",
          characterAction: "bounce",
          subtitles: "🎶 చందమామ తియ్యని జోలపాట పాడింది! 😴"
        },
        {
          duration: 7.0,
          heading: "⭐ హాయిగా నిద్రపోయింది",
          narration: "చిన్ని నక్షత్రం తన నేస్తాల మధ్యలో హాయిగా వెలుగుతూ కళ్ళు మూసుకుని అందమైన నిద్రలోకి జారుకుంది.",
          soundEffect: "lullaby_tone",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          subtitles: "⭐ నక్షత్రాల మధ్య చిన్ని నక్షత్రం నిద్రపోయింది!"
        },
        {
          duration: 6.5,
          heading: "🌙 శుభరాత్రి నేస్తాలూ!",
          narration: "శుభరాత్రి చిట్టి బాబూ! కళ్ళు మూసుకుని అందమైన కలల లోకంలోకి జారుకోండి. స్వీట్ డ్రీమ్స్!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌙 శుభరాత్రి! అందమైన కలలు కనండి! స్వీట్ డ్రీమ్స్! 😴"
        }
      ]
    }
  ],
  rhymes: [
    {
      id: "te_rhyme_chitti_chilakamma",
      title: "🦜 చిట్టి చిలకమ్మా అమ్మ కొట్టిందా | తెలుగు పిల్లల పాటలు",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#00E676",
      bgStyle: "sunny_park",
      targetAge: "1-6 years",
      musicTrack: "cheerful_whistle",
      durationSec: 32,
      seo: {
        title: "చిట్టి చిలకమ్మా అమ్మ కొట్టిందా 🦜 Chitti Chilakamma Telugu Rhymes for Toddlers | Sing-Along",
        description: "తెలుగులో అందరికీ ఇష్టమైన పిల్లల పాట చిట్టి చిలకమ్మా అమ్మ కొట్టిందా! Bouncy karaoke subtitles in Telugu. Subscribe for daily Telugu nursery rhymes!\n\n#chittichilakamma #telugurhymes #telugukids #chandamama #singalong",
        tags: ["chitti chilakamma", "telugu rhymes", "telugu kids songs", "infobells telugu", "chandamama rhymes", "preschool telugu"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🦜 చిట్టి చిలకమ్మా!",
          narration: "చిట్టి చిలకమ్మా! అమ్మ కొట్టిందా? తోటకెళ్ళావా? పండు తెచ్చావా?",
          soundEffect: "chime_sparkle",
          character: "parrot_chitti",
          characterAction: "bounce",
          subtitles: "🦜 చిట్టి చిలకమ్మా! అమ్మ కొట్టిందా? 🦜"
        },
        {
          duration: 6.5,
          heading: "🍎 తోటకెళ్ళావా? పండు తెచ్చావా?",
          narration: "తోటకెళ్ళావా? తియ్యని పండు తెచ్చావా? గూట్లో పెట్టావా? గుటుక్కు మింగావా?",
          soundEffect: "pop_sound",
          character: "parrot_chitti",
          characterAction: "jump_celebrate",
          subtitles: "🍎 తోటకెళ్ళావా? పండు తెచ్చావా? గూట్లో పెట్టావా? 🍎"
        },
        {
          duration: 6.5,
          heading: "😋 గుటుక్కు మింగావా?",
          narration: "గుటుక్కు మింగావా? ఆహా ఎంత తియ్యని పండో! చిలకమ్మ సంతోషంగా ఎగురుతోంది!",
          soundEffect: "cheer_fanfare",
          character: "parrot_chitti",
          characterAction: "wobble",
          subtitles: "😋 గుటుక్కు మింగావా? ఆహా ఎంత బాగుందో! 😋"
        },
        {
          duration: 6.5,
          heading: "🎶 అందరం కలిసి పాడుదాం!",
          narration: "చిట్టి చిలకమ్మా అమ్మ కొట్టిందా? తోటకెళ్ళావా పండు తెచ్చావా! భలే పాడారు చిన్నారులూ!",
          soundEffect: "cheer_fanfare",
          character: "parrot_chitti",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎶 చిట్టి చిలకమ్మా... అందమైన తెలుగు పాట! 🎶"
        },
        {
          duration: 6.0,
          heading: "🎈 సబ్‌స్క్రైబ్ చేసుకోండి!",
          narration: "మరిన్ని తియ్యని తెలుగు పాటల కోసం సబ్‌స్క్రైబ్ చేసుకోండి! లైక్ చేయండి!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 మరిన్ని పాటల కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    },
    {
      id: "te_rhyme_chandamama_raave",
      title: "🌙 చందమామ రావే జాబిల్లి రావే | అమృతమైన తెలుగు జోలపాట",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#FFD54F",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "twinkle_melody",
      durationSec: 33,
      seo: {
        title: "చందమామ రావే జాబిల్లి రావే 🌙 Chandamama Raave Telugu Rhyme for Kids | Sing-Along",
        description: "తరతరాలుగా తెలుగు పిల్లలు పాడే అమృతమైన పాట చందమామ రావే జాబిల్లి రావే! With glowing moon & stars. Subscribe for daily Telugu songs!\n\n#chandamamaraave #telugurhymes #chandamamakathalu #telugukids #lullaby",
        tags: ["chandamama raave", "telugu nursery rhymes", "telugu lullaby", "chandamama songs", "telugu kids rhymes"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🌙 చందమామ రావే!",
          narration: "చందమామ రావే... జాబిల్లి రావే! కొండెక్కి రావే... గోగుపూలు తేవే!",
          soundEffect: "sparkle_magic",
          character: "crescent_moon",
          characterAction: "bounce",
          subtitles: "🌙 చందమామ రావే... జాబిల్లి రావే! 🌙"
        },
        {
          duration: 6.5,
          heading: "🌸 బండెక్కి రావే!",
          narration: "బండెక్కి రావే... బంతిపూలు తేవే! తేరు మీద రావే... తేనెపట్టు తేవే!",
          soundEffect: "chime_sparkle",
          character: "crescent_moon",
          characterAction: "wobble",
          subtitles: "🌸 బండెక్కి రావే... బంతిపూలు తేవే! 🌸"
        },
        {
          duration: 6.5,
          heading: "🍯 తేనెపట్టు తేవే!",
          narration: "పల్లకీలో రావే... పాలు పెరుగు తేవే! మా బుజ్జి పాపాయికి ముద్దుల వెన్నెల తేవే!",
          soundEffect: "sparkle_magic",
          character: "main_dancing_star",
          characterAction: "bounce",
          subtitles: "🍯 తేరు మీద రావే... తేనెపట్టు తేవే! 🍯"
        },
        {
          duration: 6.5,
          heading: "✨ వెన్నెల కురిపించే చందమామ!",
          narration: "వెండి వెన్నెల వెలుగులతో చందమామ నవ్వుతూ ఆకాశంలో మెరుస్తోంది!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "✨ నవ్వుతూ వెన్నెల పంచే చందమామ! ✨"
        },
        {
          duration: 6.0,
          heading: "⭐ సబ్‌స్క్రైబ్ చేయండి!",
          narration: "చందమామ కథలు, పాటల కోసం ఇప్పుడే సబ్‌స్క్రైబ్ చేసుకోండి! లైక్ చేయండి!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 మరిన్ని జోలపాటల కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    },
    {
      id: "te_rhyme_bujji_meka",
      title: "🐐 బుజ్జి మేక బుజ్జి మేక ఎక్కడికెళ్ళావ్? | పిల్లల పాటలు",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#FF7043",
      bgStyle: "farm_sunny",
      targetAge: "2-6 years",
      musicTrack: "country_banjo",
      durationSec: 32,
      seo: {
        title: "బుజ్జి మేక బుజ్జి మేక ఎక్కడికెళ్ళావ్? 🐐 Bujji Meka Telugu Song for Kids",
        description: "సరదా తెలుగు పిల్లల పాట బుజ్జి మేక బుజ్జి మేక ఎక్కడికెళ్ళావ్! Sing along with happy baby goat on the farm. Subscribe for Telugu kids songs!\n\n#bujjimeka #telugurhymes #farmanimals #telugukids #singalong",
        tags: ["bujji meka", "telugu rhymes for kids", "farm songs telugu", "telugu kids animation", "chandamama"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🐐 బుజ్జి మేక ఎక్కడికెళ్ళావ్?",
          narration: "బుజ్జి మేక బుజ్జి మేక ఎక్కడికెళ్ళావ్? కొండకెళ్ళాను, పచ్చని గడ్డి మేసానూ!",
          soundEffect: "chime_sparkle",
          character: "bujji_meka",
          characterAction: "bounce",
          subtitles: "🐐 బుజ్జి మేక బుజ్జి మేక ఎక్కడికెళ్ళావ్? 🐐"
        },
        {
          duration: 6.5,
          heading: "🌿 పచ్చని గడ్డి మేసాను!",
          narration: "బుజ్జి మేక బుజ్జి మేక ఎవరిని చూశావ్? అడవిలో అందమైన నెమలిని చూశానూ!",
          soundEffect: "pop_sound",
          character: "bujji_meka",
          characterAction: "wobble",
          subtitles: "🌿 కొండకెళ్ళాను, పచ్చని గడ్డి మేశాను! 🌿"
        },
        {
          duration: 6.5,
          heading: "🦚 నెమలిని చూశాను!",
          narration: "బుజ్జి మేక బుజ్జి మేక ఏం తెచ్చావ్? తియ్యని పూలు, చిరునవ్వులు తెచ్చానూ!",
          soundEffect: "sparkle_magic",
          character: "bujji_meka",
          characterAction: "jump_celebrate",
          subtitles: "🦚 అడవిలో అందమైన నెమలిని చూశాను! 🦚"
        },
        {
          duration: 6.5,
          heading: "🎉 మే మే అంటూ గెంతులు!",
          narration: "మే మే అంటూ బుజ్జి మేక సంతోషంగా గెంతులు వేస్తోంది! భలే బుజ్జి మేక!",
          soundEffect: "cheer_fanfare",
          character: "bujji_meka",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 మే మే అంటూ గెంతులు వేసే బుజ్జి మేక! 🐐"
        },
        {
          duration: 6.0,
          heading: "🌟 సబ్‌స్క్రైబ్ చేసుకోండి!",
          narration: "అందరూ చప్పట్లు కొట్టండి! రేపటి సరికొత్త పాట కోసం సబ్‌స్క్రైబ్ చేసుకోండి!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 మరిన్ని జంతువుల పాటల కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    }
  ]
};

// ==========================================
// HINDI KIDS CONTENT LIBRARY (हिन्दी बाल साहित्य & कविताएँ)
// ==========================================
const KIDS_CONTENT_LIBRARY_HI = {
  shorts: [
    {
      id: "hi_short_animal_quiz_1",
      title: "🦁 जंगली जानवरों की आवाज़ें | किसकी है ये दहाड़? #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-6 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "पहचानो यह कौन सा जानवर है? 🦁 Fun Animal Sound Quiz for Kids in Hindi #Shorts",
        description: "प्यारे बच्चों! ध्यान से सुनो। जंगल में 'दहाड़... दहाड़...' की आवाज़ कौन निकालता है? बूझो तो जाने! Subscribe for daily Hindi kids videos! 🌟\n\n#hindikids #animalsounds #kahaniya #balgeet #ytshorts #kidsshorts",
        tags: ["hindi kids", "animal sounds in hindi", "hindi cartoon", "sher ki kahani", "panchatantra kahani", "hindi shorts", "kids learning hindi"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 जानवर को पहचानो!",
          narration: "नमस्ते प्यारे बच्चों! ध्यान से सुनिए। क्या आप बता सकते हैं यह डरावनी आवाज़ किसकी है?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "🦁 क्या आप बता सकते हैं यह आवाज़ किसकी है?"
        },
        {
          duration: 4.5,
          heading: "🔊 ध्यान से सुनो...",
          narration: "दहाड़! दहाड़! क्या आपने सुना? जंगल में कौन इतनी तेज़ दहाड़ लगाता है?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "🔊 दहाड़! दहाड़! जंगल में कौन दहाड़ता है?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "उलटी गिनती शुरू! तीन... दो... एक! जल्दी बताओ कौन है?",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "⏰ 3... 2... 1... आपका उत्तर क्या है?"
        },
        {
          duration: 6.0,
          heading: "🎉 जंगल का राजा शेर! 🦁",
          narration: "अरे वाह! बिल्कुल सही जवाब! यह है जंगल का राजा शेर! कितना बहादुर और शक्तिशाली! शाबाश बच्चों!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 जंगल का राजा शेर! 🦁 बहुत बढ़िया बच्चों!"
        },
        {
          duration: 5.0,
          heading: "🌟 सब्सक्राइब करें!",
          narration: "कल एक और नए जानवर से मिलने के लिए चैनल को सब्सक्राइब करें! बाय बाय!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 हर रोज़ नई वीडियो के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_short_hindi_varnamala",
      title: "🍎 'अ' से अनार, 'आ' से आम | हिंदी वर्णमाला #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#4D96FF",
      bgStyle: "rainbow_sky",
      targetAge: "2-5 years",
      musicTrack: "cheerful_whistle",
      durationSec: 25,
      seo: {
        title: "हिंदी वर्णमाला 'अ' से अनार 'आ' से आम! 🍎 Hindi Varnamala for Kids #Shorts",
        description: "'अ' से लाल-लाल अनार, 'आ' से मीठा-मीठा आम! बच्चों के लिए हिंदी वर्णमाला सीखें। Like & Subscribe for more Hindi Learning! 🚀\n\n#hindivarnamala #hindikids #varnamala #hindilearning #kidsvideos",
        tags: ["hindi varnamala", "a se anar", "learn hindi", "hindi kids videos", "hindi rhymes", "bal kavita"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "✨ हिंदी वर्णमाला का मज़ा ✨",
          narration: "आओ प्यारे बच्चों! आज हम हिंदी वर्णमाला की अनोखी दुनिया में सैर करेंगे!",
          soundEffect: "sparkle_magic",
          character: "letter_hi_A",
          characterAction: "spin_glow",
          subtitles: "✨ आओ मिलकर हिंदी अक्षर सीखें! ✨"
        },
        {
          duration: 5.5,
          heading: "🍎 'अ' से अनार!",
          narration: "'अ' से होता है लाल-लाल रसीला अनार! इसके दाने होते हैं बड़े मज़ेदार!",
          soundEffect: "pop_sound",
          character: "shiny_apple",
          characterAction: "bounce",
          subtitles: "🍎 'अ' से अनार, लाल-लाल दानेदार!"
        },
        {
          duration: 5.5,
          heading: "🥭 'आ' से आम!",
          narration: "'आ' से होता है मीठा-मीठा पीला आम! फलों का राजा इसका नाम!",
          soundEffect: "chime_sparkle",
          character: "banana_apple_basket",
          characterAction: "wobble",
          subtitles: "🥭 'आ' से आम, फलों का राजा इसका नाम!"
        },
        {
          duration: 5.0,
          heading: "🎉 शाबाश बच्चों!",
          narration: "बहुत खूब बच्चों! आपने बहुत अच्छा सीखा! चलिए ताली बजाइए!",
          soundEffect: "cheer_fanfare",
          character: "star_mascot",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 'अ' से अनार, 'आ' से आम! शाबाश बच्चों! 👏"
        },
        {
          duration: 4.5,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "आगे के अक्षर सीखने के लिए अभी सब्सक्राइब का बटन दबाएं!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 रोज़ाना नई वीडियो के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_short_numbers_hindi",
      title: "🎈 1 से 5 तक गिनती सीखें | रंग-बिरंगे गुब्बारे #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF9A3C",
      bgStyle: "rainbow_sky",
      targetAge: "2-5 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "1 से 5 तक गिनती गुब्बारों के साथ! 🎈 Counting 1 to 5 in Hindi for Toddlers #Shorts",
        description: "एक, दो, तीन, चार, पाँच! रंग-बिरंगे उड़ते गुब्बारों के साथ गिनती सीखिए। बच्चों के लिए बेहद आसान और मजेदार तरीका!\n\n#hindiginti #countingforchildren #hindikids #preschoolfun #ytshorts",
        tags: ["hindi ginti", "count 1 to 5", "toddler counting", "hindi numbers", "balgeet"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🎈 गुब्बारों की गिनती! 🎈",
          narration: "अरे देखो! आसमान में कितने सुंदर रंग-बिरंगे गुब्बारे उड़ रहे हैं! चलिए इन्हें गिनते हैं!",
          soundEffect: "sparkle_magic",
          character: "balloon_red",
          characterAction: "bounce",
          subtitles: "🎈 आसमान में उड़ते रंग-बिरंगे गुब्बारे! 🎈"
        },
        {
          duration: 5.0,
          heading: "🎈 1... 2...",
          narration: "एक लाल गुब्बारा! दो नीले गुब्बारे! उड़ते जाएँ ऊपर-ऊपर!",
          soundEffect: "pop_sound",
          character: "balloon_pair",
          characterAction: "wobble",
          subtitles: "🎈 1 (एक)... 2 (दो) गुब्बारे!"
        },
        {
          duration: 5.5,
          heading: "🎈 3... 4... 5!",
          narration: "तीन पीले, चार हरे, और पाँचवा चमकता गुलाबी गुब्बारा! कुल पाँच गुब्बारे!",
          soundEffect: "chime_sparkle",
          character: "balloon_five",
          characterAction: "bounce",
          subtitles: "🎈 3 (तीन)... 4 (चार)... 5 (पाँच) गुब्बारे!"
        },
        {
          duration: 5.5,
          heading: "🌟 बहुत बढ़िया!",
          narration: "अरे वाह! आपने एक से पाँच तक की गिनती बहुत अच्छे से सीखी! कमाल कर दिया!",
          soundEffect: "cheer_fanfare",
          character: "golden_trophy",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🌟 1, 2, 3, 4, 5! कमाल कर दिया बच्चों! 🏆"
        },
        {
          duration: 4.5,
          heading: "❤️ सब्सक्राइब करें!",
          narration: "और भी मज़ेदार गिनती सीखने के लिए चैनल सब्सक्राइब करें! धन्यवाद!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 हमारे चैनल को ज़रूर सब्सक्राइब करें! 🎈"
        }
      ]
    }
  ],
  stories: [
    {
      id: "hi_story_rabbit_tortoise",
      title: "🐢 खरगोश और कछुए की दौड़ | पंचतंत्र की नीतिकथा",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#4E9F3D",
      bgStyle: "enchanted_forest",
      targetAge: "3-8 years",
      musicTrack: "gentle_acoustic",
      durationSec: 42,
      seo: {
        title: "खरगोश और कछुआ की कहानी 🐢 Panchatantra Moral Story for Kids in Hindi",
        description: "सुप्रसिद्ध पंचतंत्र की नीतिकथा: खरगोश और कछुए की दौड़! सीख: धीरे-धीरे और लगातार चलने वाला ही हमेशा जीतता है।\n\n#hindikahaniya #panchatantra #moralstories #rabbitandtortoise #bedtimestories",
        tags: ["panchatantra in hindi", "rabbit and tortoise hindi", "kachhua aur khargosh", "hindi moral stories", "dadi ma ki kahani"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "🌲 सुंदर जंगल और घमंडी खरगोश",
          narration: "एक सुंदर हरे-भरे जंगल में चीकू नाम का एक बहुत तेज़ दौड़ने वाला खरगोश रहता था। उसे अपनी तेज़ चाल पर बड़ा घमंड था।",
          soundEffect: "sparkle_magic",
          character: "bunny_curious",
          characterAction: "bounce",
          subtitles: "🌲 हरे-भरे जंगल में रहता था तेज़ दौड़ने वाला खरगोश చీकू।"
        },
        {
          duration: 7.5,
          heading: "🐢 शांत और समझदार कछुआ",
          narration: "उसी जंगल में मंटू नाम का एक सीधा-साधा कछुआ भी रहता था। खरगोश रोज़ कछुए की धीमी चाल का मज़ाक उड़ाता था।",
          soundEffect: "pop_sound",
          character: "slow_tortoise",
          characterAction: "wobble",
          subtitles: "🐢 मंटू कछुआ शांत रहकर धीरे-धीरे चलता था।"
        },
        {
          duration: 8.0,
          heading: "🏁 दौड़ का मुकाबला शुरू!",
          narration: "कछुए ने खरगोश से कहा: आओ एक दौड़ लगाते हैं! देखते हैं पहाड़ी तक पहले कौन पहुँचता है। दौड़ शुरू हुई!",
          soundEffect: "drum_roll",
          character: "slow_tortoise",
          characterAction: "bounce",
          subtitles: "🏁 1... 2... 3! दौड़ का मुकाबला शुरू हुआ!"
        },
        {
          duration: 8.5,
          heading: "😴 पेड़ के नीचे खरगोश की नींद",
          narration: "खरगोश बहुत आगे निकल गया। उसने सोचा: कछुआ तो बहुत पीछे है, थोड़ा सो लेता हूँ। और वह गहरी नींद में सो गया!",
          soundEffect: "chime_sparkle",
          character: "bunny_sleeping",
          characterAction: "idle",
          subtitles: "😴 खरगोश ठंडी छांव में गहरी नींद सो गया!"
        },
        {
          duration: 8.0,
          heading: "🏆 कछुए की शानदार जीत!",
          narration: "परंतु कछुआ बिना रुके चलता रहा और जीत की रेखा पार कर गया! सीख: निरंतर मेहनत और लगन से ही सफलता मिलती है!",
          soundEffect: "cheer_fanfare",
          character: "tortoise_winning",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 कछुआ जीत गया! सीख: कभी घमंड मत करो! 🎉"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "ऐसी ही प्यारी-प्यारी पंचतंत्र कहानियों के लिए हमारे चैनल को सब्सक्राइब करें!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 हर रोज़ नई कहानियों के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_story_thirsty_crow",
      title: "🐦 चतुर प्यासा कौआ और मटका | समझदारी की सीख",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#5C527F",
      bgStyle: "sunny_park",
      targetAge: "3-8 years",
      musicTrack: "cheerful_whistle",
      durationSec: 40,
      seo: {
        title: "प्यासा कौआ की कहानी 🐦 The Thirsty Crow Hindi Moral Story for Kids",
        description: "गर्मी के दिन में एक प्यासे कौए ने अपनी अक्ल का इस्तेमाल करके मटके से पानी कैसे पिया? देखिए यह सुंदर प्रेरक कहानी!\n\n#pyasakaua #thirstycrow #hindistories #moralstories #bachonkikahani",
        tags: ["pyasa kauwa", "thirsty crow in hindi", "hindi moral stories", "panchatantra stories", "kids cartoon hindi"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "☀️ कड़ी धूप और प्यासा कौआ",
          narration: "गर्मी का महीना था। सूरज तेज़ चमक रहा था। कालू कौए को बहुत तेज़ प्यास लगी थी। वह पानी की तलाश में इधर-उधर भटक रहा था।",
          soundEffect: "sparkle_magic",
          character: "thirsty_crow",
          characterAction: "wobble",
          subtitles: "☀️ तेज़ धूप में कालू कौआ पानी ढूंढ रहा था।"
        },
        {
          duration: 7.5,
          heading: "🏺 बगीचे में दिखा एक मटका",
          narration: "उड़ते-उड़ते उसे एक सुंदर बगीचे में एक मटका दिखाई दिया। वह तुरंत मटके के पास पहुँचा।",
          soundEffect: "pop_sound",
          character: "crow_pitcher",
          characterAction: "bounce",
          subtitles: "🏺 मटके में पानी बहुत नीचे था, चोंच नहीं पहुँच पा रही थी!"
        },
        {
          duration: 8.0,
          heading: "💡 कौए की समझदार तरकीब",
          narration: "कालू ने देखा पास में बहुत सारे छोटे-छोटे कंकड़ पड़े हैं। उसने एक-एक कंकड़ अपनी चोंच से उठाकर मटके में डालना शुरू किया।",
          soundEffect: "pop_sound",
          character: "crow_pitcher",
          characterAction: "bounce",
          subtitles: "💡 कौए ने एक-एक कंकड़ मटके में डालना शुरू किया!"
        },
        {
          duration: 8.0,
          heading: "💧 पानी ऊपर आ गया!",
          narration: "कंकड़ डालते ही मटके का पानी धीरे-धीरे ऊपर आ गया! कौए ने पेट भरकर ठंडा पानी पिया और खुशी से उड़ गया! सीख: जहां चाह, वहां राह!",
          soundEffect: "cheer_fanfare",
          character: "thirsty_crow",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "💧 पानी ऊपर आ गया! सीख: जहां चाह, वहां राह! 🎉"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "प्यारे बच्चों, रोज़ नई कहानियाँ सुनने के लिए हमारे चैनल को सब्सक्राइब करें!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 और भी प्यारी कहानियों के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_story_chanda_mama",
      title: "🌙 चंदा मामा और नन्हा चमकता तारा | मीठी लोरी कहानी",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#3F72AF",
      bgStyle: "starry_night",
      targetAge: "2-7 years",
      musicTrack: "lullaby_piano",
      durationSec: 42,
      seo: {
        title: "चंदा मामा और नन्हा तारा 🌙 Sweet Bedtime Story for Kids in Hindi #Lullaby",
        description: "बच्चों को मीठी नींद सुलाने वाली चंदा मामा और नन्हे चमकते तारे की शांत और मनमोहक लोरी कहानी।\n\n#chandamama #bedtimestoryhindi #lori #sojao #hindilullaby",
        tags: ["chanda mama", "hindi bedtime story", "hindi lori", "bachon ki lori", "sweet dreams hindi"]
      },
      scenes: [
        {
          duration: 7.5,
          heading: "🌌 शांत नीली रात",
          narration: "रात हो गई थी। आसमान में ठंडी-ठंडी हवा बह रही थी। सारे नन्हे पंछी अपने घोंसलों में चैन से सो रहे थे।",
          soundEffect: "sparkle_magic",
          character: "crescent_moon",
          characterAction: "wobble",
          subtitles: "🌌 रात की ठंडी हवा और आसमान में चंदा मामा।"
        },
        {
          duration: 7.5,
          heading: "⭐ नन्हे तारे की उदासी",
          narration: "तभी चंदा मामा ने देखा कि एक नन्हा तारा आसमान के कोने में अकेला बैठा उदास था। चंदा मामा मुस्कुराते हुए उसके पास आए।",
          soundEffect: "chime_sparkle",
          character: "baby_star",
          characterAction: "bounce",
          subtitles: "⭐ नन्हा तारा चंदा मामा को देखकर मुस्कुराया।"
        },
        {
          duration: 8.0,
          heading: "✨ चाँदनी की मीठी लोरी",
          narration: "चंदा मामा ने नन्हे तारे को प्यार से गोद में लिया और धीरे-धीरे मीठी लोरी सुनाने लगे। सारा आसमान चमक उठा।",
          soundEffect: "chime_sparkle",
          character: "main_dancing_star",
          characterAction: "bounce",
          subtitles: "✨ चंदा मामा ने सुनाई चाँदनी की प्यारी लोरी।"
        },
        {
          duration: 7.5,
          heading: "😴 मीठी नींद में सो जाओ",
          narration: "नन्हे तारे ने अपनी आँखें बंद कीं और मुस्कुराते हुए मीठे सपनों की दुनिया में खो गया। शुभ रात्रि प्यारे बच्चों!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          confetti: true,
          subtitles: "😴 शुभ रात्रि प्यारे बच्चों! मीठे सपने! 🌙"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "रोज़ रात नई लोरी और कहानियों के लिए हमारे चैनल को सब्सक्राइब करें!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 प्यारी लोरियों के लिए चैनल सब्सक्राइब करें! 🎈"
        }
      ]
    }
  ],
  rhymes: [
    {
      id: "hi_rhyme_machli_jal",
      title: "🐟 मछली जल की रानी है, जीवन उसका पानी है | हिंदी बालगीत",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#00ADB5",
      bgStyle: "rainbow_sky",
      targetAge: "1-6 years",
      musicTrack: "playful_bounce",
      durationSec: 32,
      seo: {
        title: "मछली जल की रानी है 🐟 Machli Jal Ki Rani Hai | Hindi Rhymes for Kids",
        description: "बच्चों की सबसे पसंदीदा कविता: मछली जल की रानी है, जीवन उसका पानी है! साथ में गाओ और नाचो!\n\n#machlijalkiranihai #hindirhymes #balgeet #kidsrhymes #singalong",
        tags: ["machli jal ki rani hai", "hindi rhymes", "popular hindi rhymes", "bal kavita", "kids song hindi"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🐟 मछली जल की रानी है!",
          narration: "मछली जल की रानी है, जीवन उसका पानी है! पानी में छप-छप तैरती है!",
          soundEffect: "chime_sparkle",
          character: "swimming_fish",
          characterAction: "bounce",
          subtitles: "🐟 मछली जल की रानी है, जीवन उसका पानी है! 🌊"
        },
        {
          duration: 6.5,
          heading: "✋ हाथ लगाओगे तो डर जाएगी!",
          narration: "हाथ लगाओगे तो डर जाएगी, बाहर निकालोगे तो मर जाएगी!",
          soundEffect: "pop_sound",
          character: "swimming_fish",
          characterAction: "wobble",
          subtitles: "✋ हाथ लगाओ तो डर जाएगी, बाहर निकालो तो मर जाएगी! 💧"
        },
        {
          duration: 6.5,
          heading: "🌊 पानी में डालो तैर जाएगी!",
          narration: "पानी में डालो तैर जाएगी, दाना खिलाओ तो खा जाएगी!",
          soundEffect: "sparkle_magic",
          character: "swimming_fish",
          characterAction: "bounce",
          subtitles: "🌊 पानी में डालो तैर जाएगी, दाना डालो तो खा जाएगी! 🐟"
        },
        {
          duration: 6.5,
          heading: "🎉 छप-छप करती मछली रानी!",
          narration: "नीले पानी में तैरती रानी, कितनी सुंदर मछली रानी! सब बजाओ ताली!",
          soundEffect: "cheer_fanfare",
          character: "swimming_fish",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 नीले समंदर की रानी, प्यारी मछली रानी! 👏"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "ऐसी ही मज़ेदार कविताओं के लिए अभी सब्सक्राइब करें! धन्यवाद!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 नए बालगीतों के लिए चैनल सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_rhyme_lakdi_ki_kathi",
      title: "🪵 लकड़ी की काठी, काठी पे घोड़ा | मजेदार बाल कविता",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#E28743",
      bgStyle: "farm_sunny",
      targetAge: "2-7 years",
      musicTrack: "bouncy_melody",
      durationSec: 34,
      seo: {
        title: "लकड़ी की काठी काठी पे घोड़ा 🪵 Lakdi Ki Kathi | Classic Hindi Poem for Kids",
        description: "लकड़ी की काठी, काठी पे घोड़ा, घोड़े की दुम पे जो मारा हथौड़ा! दौड़ा-दौड़ा घोड़ा दुम उठा के दौड़ा!\n\n#lakdikikathi #hindipoems #balgeet #masoom #classicpoems",
        tags: ["lakdi ki kathi", "kathi pe ghoda", "hindi balgeet", "hindi rhymes for toddlers", "kids song"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "🪵 लकड़ी की काठी!",
          narration: "लकड़ी की काठी, काठी पे घोड़ा, घोड़े की दुम पे जो मारा हथौड़ा!",
          soundEffect: "drum_roll",
          character: "wooden_horse",
          characterAction: "bounce",
          subtitles: "🪵 लकड़ी की काठी, काठी पे घोड़ा! 🐎"
        },
        {
          duration: 7.0,
          heading: "🐎 दौड़ा दौड़ा घोड़ा!",
          narration: "दौड़ा-दौड़ा दौड़ा घोड़ा दुम उठा के दौड़ा! टप-टप-टप-टप घोड़ा दौड़ा!",
          soundEffect: "pop_sound",
          character: "wooden_horse",
          characterAction: "jump_celebrate",
          subtitles: "🐎 दौड़ा दौड़ा दौड़ा घोड़ा दुम उठा के दौड़ा! 💨"
        },
        {
          duration: 7.0,
          heading: "🏬 घोड़ा पहुँचा चौक में!",
          narration: "घोड़ा पहुँचा चौक में, चौक में था नाई! घोड़े जी की नाई ने हज़ामत जो बनाई!",
          soundEffect: "chime_sparkle",
          character: "wooden_horse",
          characterAction: "wobble",
          subtitles: "🏬 घोड़ा पहुँचा चौक में, चौक में था नाई! ✂️"
        },
        {
          duration: 7.0,
          heading: "🎉 टक-बक टक-बक घोड़ा दौड़ा!",
          narration: "घोड़ा था घमंडी, पहुँचा सब्ज़ी मंडी! दौड़ा-दौड़ा दौड़ा घोड़ा दुम उठा के दौड़ा!",
          soundEffect: "cheer_fanfare",
          character: "wooden_horse",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 टप-टप टप-टप घोड़ा दौड़ा दुम उठा के दौड़ा! 🏆"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "और भी प्यारे बालगीतों के लिए चैनल सब्सक्राइब करें! फिर मिलेंगे!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 रोज़ाना नए गीतों के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    },
    {
      id: "hi_rhyme_chanda_mama_door",
      title: "🌙 चंदा मामा दूर के, पुए पकाएं बूर के | प्यारी लोरी",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#937DC2",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 32,
      seo: {
        title: "चंदा मामा दूर के पुए पकाएं बूर के 🌙 Chanda Mama Door Ke Hindi Rhyme",
        description: "चंदा मामा दूर के, पुए पकाएं बूर के! आप खाएं थाली में, मुन्ने को दें प्याली में!\n\n#chandamamadoorke #hindilullaby #lori #bachonkikavita #bedtime",
        tags: ["chanda mama door ke", "hindi lori song", "lullaby hindi", "chanda mama kavita"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🌙 चंदा मामा दूर के!",
          narration: "चंदा मामा दूर के, पुए पकाएं बूर के! आप खाएं थाली में, मुन्ने को दें प्याली में!",
          soundEffect: "sparkle_magic",
          character: "crescent_moon",
          characterAction: "bounce",
          subtitles: "🌙 चंदा मामा दूर के, पुए पकाएं बूर के! 🍯"
        },
        {
          duration: 6.5,
          heading: "🥣 प्याली गई टूट!",
          narration: "प्याली गई टूट, मुन्ना गया रूठ! लाएंगे नई प्यालियां, बजाएंगे तालियां!",
          soundEffect: "pop_sound",
          character: "crescent_moon",
          characterAction: "wobble",
          subtitles: "🥣 लाएंगे नई प्यालियां, बजाएंगे तालियां! 👏"
        },
        {
          duration: 6.5,
          heading: "🛏️ मुन्ने को मनाएंगे!",
          narration: "मुन्ने को मनाएंगे, मलाई हम खिलाएंगे! चंदा मामा की गोद में मुन्ने को सुलाएंगे!",
          soundEffect: "chime_sparkle",
          character: "main_dancing_star",
          characterAction: "bounce",
          subtitles: "🛏️ मुन्ने को मनाएंगे, मीठी खीर खिलाएंगे! ✨"
        },
        {
          duration: 6.5,
          heading: "😴 सो जाओ नन्हे मुन्ने!",
          narration: "चाँदनी रात में तारे टिमटिमा रहे हैं। सो जाओ नन्हे मुन्ने, शुभ रात्रि!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          confetti: true,
          subtitles: "😴 सो जाओ नन्हे मुन्ने, शुभ रात्रि! 🌙"
        },
        {
          duration: 5.0,
          heading: "🔔 सब्सक्राइब करें!",
          narration: "प्यारी-प्यारी लोरियों के लिए चैनल सब्सक्राइब करें! शुभ रात्रि!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 रोज़ाना नई लोरियों के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    }
  ]
};



// ==========================================
// TAMIL KIDS CONTENT LIBRARY (தமிழ் குழந்தைகள் பாடல்கள் & கதைகள்)
// ==========================================
const KIDS_CONTENT_LIBRARY_TA = {
  shorts: [
    {
      id: "ta_short_animal_quiz_1",
      title: "🦁 விலங்குகள் ஒலி வினாடி வினா | சிங்கம் கர்ஜனை #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-6 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "இந்த சத்தம் யாருடையது? 🦁 Animal Sounds Quiz in Tamil for Kids #Shorts",
        description: "சுட்டி குழந்தைகளே! காட்டில் கர்ஜிக்கும் இந்த விலங்கு எது என்று கண்டுபிடிக்க முடியுமா? Subscribe for daily Tamil kids videos! 🌟\n\n#tamilkids #animalsounds #tamilshorts #villangukal #ytshorts",
        tags: ["tamil kids", "animal sounds tamil", "singam kathai", "tamil cartoon", "tamil kids rhymes"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 விலங்கைக் கண்டுபிடியுங்கள்!",
          narration: "வணக்கம் சுட்டி குழந்தைகளே! கவனமாகக் கேளுங்கள். இந்த கர்ஜனை சத்தம் யாருடையது என்று கண்டுபிடிக்க முடியுமா?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "🦁 இந்த சத்தம் யாருடையது என்று சொல்லுங்கள்?"
        },
        {
          duration: 4.5,
          heading: "🔊 கவனமாகக் கேளுங்கள்...",
          narration: "கர்ர்ர்! கர்ர்ர்! கேட்டதா? காட்டின் ராஜா யார் என்று உங்களுக்குத் தெரியுமா?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "🔊 கர்ர்ர்! யார் கர்ஜிக்கிறார்கள்?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "எண்ணிக்கை தொடங்குகிறது! மூன்று... இரண்டு... ஒன்று! சொல்லுங்கள் பார்க்கலாம்!",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "⏰ 3... 2... 1... உங்கள் பதில் என்ன?"
        },
        {
          duration: 6.0,
          heading: "🎉 காட்டின் ராஜா சிங்கம்! 🦁",
          narration: "அருமை குழந்தைகளே! இது காட்டின் ராஜா சிங்கம்! தைரியமான சிங்கக் குட்டி! அருமை!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 காட்டின் ராஜா சிங்கம்! 🦁 மிகச் சரி!"
        },
        {
          duration: 5.0,
          heading: "🌟 சப்ஸ்கிரைப் செய்யுங்கள்!",
          narration: "நாளை மற்றொரு விலங்கைப் பார்க்க சப்ஸ்கிரைப் செய்யுங்கள்! பை பை!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 தினமும் புதிய வீடியோக்களுக்கு சப்ஸ்கிரைப் செய்யுங்கள்! 🎈"
        }
      ]
    },
    {
      id: "ta_short_tamil_letters",
      title: "🍎 'அ' அணில், 'ஆ' ஆடு | தமிழ் உயிர் எழுத்துக்கள் #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#4D96FF",
      bgStyle: "rainbow_sky",
      targetAge: "2-5 years",
      musicTrack: "cheerful_whistle",
      durationSec: 25,
      seo: {
        title: "தமிழ் உயிர் எழுத்துக்கள் 'அ' 'ஆ' 🍎 Tamil Uyir Ezhuthukkal for Kids #Shorts",
        description: "'அ' அணில், 'ஆ' ஆடு! குழந்தைகளுக்கு தமிழ் எழுத்துக்களை எளிதாகக் கற்றுக்கொடுங்கள். Subscribe for more Tamil Learning!\n\n#tamilezhuthukkal #tamilkids #uyirezhuthu #tamilrhymes #learntamil",
        tags: ["tamil alphabets", "uyir ezhuthukkal", "a anil aa aadu", "tamil kids education"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "✨ தமிழ் எழுத்துக்கள் கற்போம் ✨",
          narration: "வாருங்கள் குழந்தைகளே! இன்று நாம் தமிழ் உயிர் எழுத்துக்களை மகிழ்ச்சியாகக் கற்கலாம்!",
          soundEffect: "sparkle_magic",
          character: "letter_ta_A",
          characterAction: "spin_glow",
          subtitles: "✨ தமிழ் உயிர் எழுத்துக்களைக் கற்கலாம்! ✨"
        },
        {
          duration: 5.5,
          heading: "🐿️ 'அ' அணில்!",
          narration: "'அ' என்றால் மரத்தில் துள்ளி ஓடும் சுட்டி அணில்! கொட்டைகளை விரும்பி உண்ணும்!",
          soundEffect: "pop_sound",
          character: "shiny_apple",
          characterAction: "bounce",
          subtitles: "🐿️ 'அ' என்றால் துள்ளி ஓடும் அணில்!"
        },
        {
          duration: 5.5,
          heading: "🐐 'ஆ' ஆடு!",
          narration: "'ஆ' என்றால் புல் மேயும் வெள்ளை ஆடு! மே... மே... என்று கத்தும்!",
          soundEffect: "chime_sparkle",
          character: "baby_goat",
          characterAction: "wobble",
          subtitles: "🐐 'ஆ' என்றால் புல் மேயும் ஆடு!"
        },
        {
          duration: 5.0,
          heading: "🎉 அருமை சுட்டிகளே!",
          narration: "மிக அருமையாகக் கற்றுக்கொண்டீர்கள்! அனைவரும் கைதட்டுங்கள்!",
          soundEffect: "cheer_fanfare",
          character: "star_mascot",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 'அ' அணில், 'ஆ' ஆடு! அருமை! 👏"
        },
        {
          duration: 4.5,
          heading: "🔔 சப்ஸ்கிரைப் செய்யுங்கள்!",
          narration: "அடுத்த எழுத்துக்களைக் கற்க உடனே சப்ஸ்கிரைப் செய்யுங்கள்!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 தினமும் புதிய வீடியோக்களுக்கு சப்ஸ்கிரைப் செய்யுங்கள்! 🎈"
        }
      ]
    }
  ],
  stories: [
    {
      id: "ta_story_rabbit_tortoise",
      title: "🐢 ஆமை மற்றும் முயல் பந்தயம் | ஈசாப் நீதிக்கதை",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#4E9F3D",
      bgStyle: "enchanted_forest",
      targetAge: "3-8 years",
      musicTrack: "gentle_acoustic",
      durationSec: 40,
      seo: {
        title: "ஆமை மற்றும் முயல் கதை 🐢 The Tortoise and the Hare in Tamil #MoralStory",
        description: "குழந்தைகளுக்கான அழகான ஈசாப் நீதிக்கதை: ஆமை மற்றும் முயல் பந்தயம்! நீதி: நிதானமே வெற்றி தரும்.\n\n#tamilmoralstories #aamaimuyalkathai #aesopfables #tamilkids #bedtimestory",
        tags: ["aamai muyal kathai", "tortoise and hare tamil", "tamil moral story", "kids stories tamil"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "🌲 அடர்ந்த காடும் வேகமான முயலும்",
          narration: "ஒரு அழகான காட்டில் ஒரு வேகமான முயல் வாழ்ந்து வந்தது. அதற்கு தன் வேகத்தைக் கண்டு மிகுந்த கர்வம் இருந்தது.",
          soundEffect: "sparkle_magic",
          character: "bunny_curious",
          characterAction: "bounce",
          subtitles: "🌲 காட்டில் வாழ்ந்த வேகமான முயல்."
        },
        {
          duration: 7.5,
          heading: "🐢 அமைதியான புத்திசாலி ஆமை",
          narration: "அங்கே வாழ்ந்த ஒரு ஆமையின் மெதுவான நடையைக் கண்டு முயல் தினமும் கேலி செய்தது. ஆமை புன்னகையுடன் அமைதியாக இருந்தது.",
          soundEffect: "pop_sound",
          character: "slow_tortoise",
          characterAction: "wobble",
          subtitles: "🐢 அமைதியாக மெதுவாக நடந்த ஆமை."
        },
        {
          duration: 8.0,
          heading: "🏁 ஓட்டப் பந்தயம் தொடங்கியது!",
          narration: "ஒரு நாள் ஆமை முயலிடம் ஓட்டப் பந்தயம் வைக்கலாம் என்று கூறியது. பந்தயம் தொடங்கியது! முயல் வேகமாக ஓடியது.",
          soundEffect: "drum_roll",
          character: "slow_tortoise",
          characterAction: "bounce",
          subtitles: "🏁 1... 2... 3! ஓட்டப் பந்தயம் தொடங்கியது!"
        },
        {
          duration: 8.5,
          heading: "😴 மரத்தடியில் தூங்கிய முயல்",
          narration: "முயல் நினைத்தது: ஆமை ரொம்ப தூரத்தில் இருக்கிறது, சிறிது நேரம் தூங்கலாம் என்று மரத்தடியில் தூங்கிவிட்டது!",
          soundEffect: "chime_sparkle",
          character: "bunny_sleeping",
          characterAction: "idle",
          subtitles: "😴 முயல் மரத்தடியில் நிம்மதியாகத் தூங்கியது!"
        },
        {
          duration: 8.0,
          heading: "🏆 ஆமையின் மகத்தான வெற்றி!",
          narration: "ஆனால் ஆமை இடைவிடாமல் நடந்து பந்தய எல்லையை அடைந்து வெற்றி பெற்றது! நீதி: விடாமுயற்சியே வெற்றி தரும்!",
          soundEffect: "cheer_fanfare",
          character: "tortoise_winning",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 ஆமை வெற்றி பெற்றது! நீதி: விடாமுயற்சியே வெற்றி! 🎉"
        },
        {
          duration: 5.0,
          heading: "🔔 சப்ஸ்கிரைப் செய்யுங்கள்!",
          narration: "மேலும் பல நல்ல நீதிக்கதைகளுக்கு சப்ஸ்கிரைப் செய்யுங்கள்!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 தினமும் புதிய கதைகளுக்கு சப்ஸ்கிரைப் செய்யுங்கள்! 🎈"
        }
      ]
    }
  ],
  rhymes: [
    {
      id: "ta_rhyme_nila_nila",
      title: "🌙 நிலா நிலா ஓடி வா நில்லாமல் ஓடி வா | குழந்தைப் பாடல்",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#937DC2",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 32,
      seo: {
        title: "நிலா நிலா ஓடி வா 🌙 Nila Nila Odi Vaa | Tamil Rhymes for Kids",
        description: "தமிழ் குழந்தைகளின் இனிய தாலாட்டுப் பாடல்: நிலா நிலா ஓடி வா, நில்லாமல் ஓடி வா!\n\n#nilanilaodivaa #tamilrhymes #kidsrhymes #chithirampesuthadi #tamilsongs",
        tags: ["nila nila odi vaa", "tamil rhymes", "tamil thalattu", "kids songs tamil"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🌙 நிலா நிலா ஓடி வா!",
          narration: "நிலா நிலா ஓடி வா, நில்லாமல் ஓடி வா! மலை மீது ஏறி வா, மல்லிகைப் பூ சூடி வா!",
          soundEffect: "sparkle_magic",
          character: "crescent_moon",
          characterAction: "bounce",
          subtitles: "🌙 நிலா நிலா ஓடி வா, நில்லாமல் ஓடி வா! 🌸"
        },
        {
          duration: 6.5,
          heading: "🥛 பால் சோறு உண்ண வா!",
          narration: "வட்ட வட்ட நிலாவே, வண்ண வண்ண நிலாவே! பட்டுப் பாவாடை கட்டி வா, பால் சோறு உண்ண வா!",
          soundEffect: "pop_sound",
          character: "main_dancing_star",
          characterAction: "wobble",
          subtitles: "🥛 பட்டுப் பாவாடை கட்டி வா, பால் சோறு உண்ண வா! 🍯"
        },
        {
          duration: 6.5,
          heading: "✨ நிலாவின் பொன் வெளிச்சம்!",
          narration: "வெள்ளி நிலாவின் ஒளி எங்கும் வீசுகிறது. மழலைகள் அனைவரும் மகிழ்ந்து சிரிக்கிறார்கள்!",
          soundEffect: "chime_sparkle",
          character: "crescent_moon",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "✨ நிலவின் வெளிச்சத்தில் விளையாடும் குழந்தைகள்! ✨"
        },
        {
          duration: 6.5,
          heading: "😴 கண் வளராய் கண்மணியே!",
          narration: "தூங்கும் நேரம் வந்தது, கண் வளராய் கண்மணியே! இனிய கனவுகள் காணுங்கள் சுட்டிகளே!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          confetti: true,
          subtitles: "😴 கண் வளராய் கண்மணியே, இனிய கனவுகள்! 🌙"
        },
        {
          duration: 5.0,
          heading: "🔔 சப்ஸ்கிரைப் செய்யுங்கள்!",
          narration: "இனிய மழலையர் பாடல்களுக்கு நமது சேனலை சப்ஸ்கிரைப் செய்யுங்கள்!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 புதிய தாலாட்டு பாடல்களுக்கு சப்ஸ்கிரைப் செய்யுங்கள்! 🎈"
        }
      ]
    }
  ]
};



// ==========================================
// KANNADA KIDS CONTENT LIBRARY (ಕನ್ನಡ ಮಕ್ಕಳ ಹಾಡುಗಳು & ಕಥೆಗಳು)
// ==========================================
const KIDS_CONTENT_LIBRARY_KN = {
  shorts: [
    {
      id: "kn_short_animal_quiz_1",
      title: "🦁 ಪ್ರಾಣಿಗಳ ಧ್ವನಿ ರಸಪ್ರಶ್ನೆ | ಸಿಂಹದ ಗರ್ಜನೆ #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-6 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "ಈ ಧ್ವನಿ ಯಾರದು? 🦁 Animal Sounds Quiz in Kannada for Kids #Shorts",
        description: "ಮುದ್ದು ಮಕ್ಕಳೇ! ಕಾಡಿನಲ್ಲಿ ಜೋರಾಗಿ ಗರ್ಜಿಸುವ ಈ ಪ್ರಾಣಿ ಯಾರು ಎಂದು ಊಹಿಸಬಲ್ಲಿರಾ? Subscribe for daily Kannada kids videos! 🌟\n\n#kannadakids #animalsounds #kannadashorts #makkalakathe #ytshorts",
        tags: ["kannada kids", "animal sounds kannada", "simhada kathe", "kannada cartoon", "kannada rhymes"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 ಪ್ರಾಣಿಯನ್ನು ಗುರುತಿಸಿ!",
          narration: "ನಮಸ್ಕಾರ ಪುಟಾಣಿ ಮಕ್ಕಳೇ! ಗಮನವಿಟ್ಟು ಕೇಳಿ. ಈ ಜೋರಾದ ಗರ್ಜನೆಯ ಧ್ವನಿ ಯಾರದು ಎಂದು ಹೇಳಬಲ್ಲಿರಾ?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "🦁 ಈ ಧ್ವನಿ ಯಾರದು ಎಂದು ಹೇಳಬಲ್ಲಿರಾ?"
        },
        {
          duration: 4.5,
          heading: "🔊 ಗಮನವಿಟ್ಟು ಕೇಳಿ...",
          narration: "ಗರ್ರ್ರ್! ಗರ್ರ್ರ್! ಕೇಳಿಸಿತೇ? ಕಾಡಿನ ರಾಜ ಯಾರು ಎಂದು ನಿಮಗೆ ಗೊತ್ತೇ?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "🔊 ಗರ್ರ್ರ್! ಕಾಡಿನಲ್ಲಿ ಯಾರು ಗರ್ಜಿಸುತ್ತಿದ್ದಾರೆ?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "ಎಣಿಕೆ ಶುರುವಾಗಿದೆ! ಮೂರು... ಎರಡು... ಒಂದು! ಬೇಗ ಹೇಳಿ ನೋಡೋಣ!",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "⏰ 3... 2... 1... ನಿಮ್ಮ ಉತ್ತರವೇನು?"
        },
        {
          duration: 6.0,
          heading: "🎉 ಕಾಡಿನ ರಾಜ ಸಿಂಹ! 🦁",
          narration: "ಭೇಷ್ ಮಕ್ಕಳೇ! ಇದು ಕಾಡಿನ ರಾಜ ಸಿಂಹ! ಧೈರ್ಯಶಾಲಿ ಸಿಂಹ ರಾಜ! ಸೂಪರ್ ಪುಟಾಣಿಗಳೇ!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 ಕಾಡಿನ ರಾಜ ಸಿಂಹ! 🦁 ಸರಿಯಾಗಿ ಹೇಳಿದಿರಿ!"
        },
        {
          duration: 5.0,
          heading: "🌟 ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ!",
          narration: "ನಾಳೆ ಮತ್ತೊಂದು ಪ್ರಾಣಿಯನ್ನು ನೋಡಲು ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ! ಬಾಯ್ ಬಾಯ್!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 ಪ್ರತಿದಿನ ಹೊಸ ವೀಡಿಯೊಗಳಿಗಾಗಿ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ! 🎈"
        }
      ]
    }
  ],
  stories: [
    {
      id: "kn_story_rabbit_tortoise",
      title: "🐢 ಮೊಲ ಮತ್ತು ಆಮೆಯ ಓಟದ ಸ್ಪರ್ಧೆ | ಪಂಚತಂತ್ರ ನೀತಿಕಥೆ",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#4E9F3D",
      bgStyle: "enchanted_forest",
      targetAge: "3-8 years",
      musicTrack: "gentle_acoustic",
      durationSec: 40,
      seo: {
        title: "ಮೊಲ ಮತ್ತು ಆಮೆ ಕಥೆ 🐢 The Tortoise and the Hare in Kannada #MoralStory",
        description: "ಮಕ್ಕಳಿಗಾಗಿ ಪಂಚತಂತ್ರದ ನೀತಿಕಥೆ: ಮೊಲ ಮತ್ತು ಆಮೆಯ ಓಟದ ಸ್ಪರ್ಧೆ! ನೀತಿ: ನಿಧಾನವೇ ಪ್ರಧಾನ, ಸತತ ಪರಿಶ್ರಮಕ್ಕೆ ಜಯ.\n\n#kannadastories #panchatantra #moralstories #makkalakathegalu #bedtimestories",
        tags: ["mola aame kathe", "tortoise and hare kannada", "kannada moral stories", "kids stories kannada"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "🌲 ಹಸಿರು ಕಾಡು ಮತ್ತು ವೇಗದ ಮೊಲ",
          narration: "ಒಂದು ಸುಂದರವಾದ ಕಾಡಿನಲ್ಲಿ ಚಿಂಟು ಎಂಬ ವೇಗವಾಗಿ ಓಡುವ ಮೊಲವಿತ್ತು. ತಾನೇ ಎಲ್ಲರಿಗಿಂತ ವೇಗಿ ಎಂದು ಅದಕ್ಕೆ ತುಂಬಾ ಅಹಂಕಾರವಿತ್ತು.",
          soundEffect: "sparkle_magic",
          character: "bunny_curious",
          characterAction: "bounce",
          subtitles: "🌲 ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದ ವೇಗದ ಮೊಲ."
        },
        {
          duration: 7.5,
          heading: "🐢 ಶಾಂತ ಸ್ವಭಾವದ ಆಮೆ",
          narration: "ಅಲ್ಲಿಯೇ ಮಂಜು ಎಂಬ ಆಮೆಯೂ ಇತ್ತು. ಮೊಲವು ಪ್ರತಿದಿನ ಆಮೆಯ ನಿಧಾನ ನಡಿಗೆಯನ್ನು ನೋಡಿ ಗೇಲಿ ಮಾಡುತ್ತಿತ್ತು.",
          soundEffect: "pop_sound",
          character: "slow_tortoise",
          characterAction: "wobble",
          subtitles: "🐢 ಆಮೆ ಶಾಂತವಾಗಿ ನಿಧಾನವಾಗಿ ಹೆಜ್ಜೆ ಹಾಕುತ್ತಿತ್ತು."
        },
        {
          duration: 8.0,
          heading: "🏁 ಓಟದ ಸ್ಪರ್ಧೆ ಆರಂಭವಾಯಿತು!",
          narration: "ಒಂದು ದಿನ ಆಮೆ ಮೊಲಕ್ಕೆ ಓಟದ ಸ್ಪರ್ಧೆಗೆ ಆಹ್ವಾನಿಸಿತು. ಬೆಟ್ಟದವರೆಗೆ ಸ್ಪರ್ಧೆ ಆರಂಭವಾಯಿತು! ಮೊಲ ಶರವೇಗದಲ್ಲಿ ಓಡಿತು.",
          soundEffect: "drum_roll",
          character: "slow_tortoise",
          characterAction: "bounce",
          subtitles: "🏁 1... 2... 3! ಓಟದ ಸ್ಪರ್ಧೆ ಆರಂಭವಾಯಿತು!"
        },
        {
          duration: 8.5,
          heading: "😴 ಮರದ ನೆರಳಿನಲ್ಲಿ ಮೊಲದ ನಿದ್ದೆ",
          narration: "ಮೊಲ ಯೋಚಿಸಿತು: ಆಮೆ ತುಂಬಾ ಹಿಂದೆ ಇದೆ, ಸ್ವಲ್ಪ ಹೊತ್ತು ನಿದ್ರೆ ಮಾಡೋಣ ಎಂದು ಮರದಡಿ ಮಲಗಿ ನಿದ್ದೆಹೋಯಿತು!",
          soundEffect: "chime_sparkle",
          character: "bunny_sleeping",
          characterAction: "idle",
          subtitles: "😴 ಮೊಲ ತಂಪಾದ ನೆರಳಿನಲ್ಲಿ ಗಾಢ ನಿದ್ದೆಗೆ ಜಾರಿತು!"
        },
        {
          duration: 8.0,
          heading: "🏆 ಆಮೆಗೆ ಭರ್ಜರಿ ಜಯ!",
          narration: "ಆದರೆ ಆಮೆ ನಿಲ್ಲದೆ ಸತತವಾಗಿ ನಡೆದು ಗೆಲುವಿನ ಗರೆ ತಲುಪಿತು! ನೀತಿ: ಸತತ ಪರಿಶ್ರಮವೇ ಯಶಸ್ಸಿನ ಮೂಲ!",
          soundEffect: "cheer_fanfare",
          character: "tortoise_winning",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 ಆಮೆ ಗೆದ್ದಿತು! ನೀತಿ: ಅಹಂಕಾರ ಬೇಡ, ಸತತ ಪರಿಶ್ರಮಕ್ಕೆ ಜಯ! 🎉"
        },
        {
          duration: 5.0,
          heading: "🔔 ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ!",
          narration: "ಇಂತಹ ಮುದ್ದಾದ ನೀತಿಕಥೆಗಳಿಗಾಗಿ ನಮ್ಮ ಚಾನೆಲ್ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 ಪ್ರತಿದಿನ ಹೊಸ ಕಥೆಗಳಿಗಾಗಿ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ! 🎈"
        }
      ]
    }
  ],
  rhymes: [
    {
      id: "kn_rhyme_chandamama_baa",
      title: "🌙 ಚಂದಮಾಮ ಬಾ ಬಾ ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ | ಜೋಗುಳ ಹಾಡು",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#937DC2",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 32,
      seo: {
        title: "ಚಂದಮಾಮ ಬಾ ಬಾ 🌙 Chandamama Baa Baa | Kannada Lullaby for Kids",
        description: "ಕನ್ನಡ ಮಕ್ಕಳ ಮುದ್ದಾದ ಜೋಗುಳ ಹಾಡು: ಚಂದಮಾಮ ಬಾ ಬಾ, ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ! ಬಂಡಿಯಲ್ಲಿ ಬಾ ಬಾ, ಮಲ್ಲಿಗೆ ಹೂ ತಾರಾ!\n\n#chandamamabaabaa #kannadarhymes #kannadathalattu #kidsrhymes #jogulahaadu",
        tags: ["chandamama baa baa", "kannada rhymes", "kannada lullaby", "kids songs kannada"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "🌙 ಚಂದಮಾಮ ಬಾ ಬಾ!",
          narration: "ಚಂದಮಾಮ ಬಾ ಬಾ, ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ! ಬಂಡಿಯಲ್ಲಿ ಬಾ ಬಾ, ಮಲ್ಲಿಗೆ ಹೂ ತಾರಾ!",
          soundEffect: "sparkle_magic",
          character: "crescent_moon",
          characterAction: "bounce",
          subtitles: "🌙 ಚಂದಮಾಮ ಬಾ ಬಾ, ಬೆಳ್ಳಿ ಬೆಳಕ ತಾರಾ! 🌸"
        },
        {
          duration: 6.5,
          heading: "🍯 ಜೇನುತುಪ್ಪ ತಾರಾ!",
          narration: "ತೇರಿನಲ್ಲಿ ಬಾ ಬಾ, ಜೇನುತುಪ್ಪ ತಾರಾ! ನಮ್ಮ ಪುಟ್ಟ ಕಂದನಿಗೆ ಮುದ್ದು ಬೆಳಕ ತಾರಾ!",
          soundEffect: "pop_sound",
          character: "main_dancing_star",
          characterAction: "wobble",
          subtitles: "🍯 ತೇರಿನಲ್ಲಿ ಬಾ ಬಾ, ಜೇನುತುಪ್ಪ ತಾರಾ! 🍯"
        },
        {
          duration: 6.5,
          heading: "✨ ಬೆಳ್ಳಿಯ ಬೆಳಕು!",
          narration: "ಆಕಾಶದಲ್ಲಿ ಚಂದಮಾಮ ನಗುತ್ತಾ ಬೆಳ್ಳಿ ಬೆಳಕನ್ನು ಚೆಲ್ಲುತ್ತಿದ್ದಾನೆ. ಎಲ್ಲ ಮಕ್ಕಳು ನಗುತ್ತಿದ್ದಾರೆ!",
          soundEffect: "chime_sparkle",
          character: "crescent_moon",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "✨ ಆಕಾಶದಲ್ಲಿ ಬೆಳ್ಳಿ ಬೆಳಕ ಚೆಲ್ಲುವ ಚಂದಮಾಮ! ✨"
        },
        {
          duration: 6.5,
          heading: "😴 ಕಂದಮ್ಮ ನಿದಿರೆ ಮಾಡು!",
          narration: "ಮಲಗುವ ಸಮಯವಾಯಿತು, ಕಣ್ಣು ಮುಚ್ಚಿ ನಿದಿರೆ ಮಾಡು ಕಂದಮ್ಮ! ಶುಭ ರಾತ್ರಿ ಪುಟಾಣಿಗಳೇ!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          confetti: true,
          subtitles: "😴 ಕಂದಮ್ಮ ನಿದಿರೆ ಮಾಡು, ಸಿಹಿ ಕನಸು ಕಾಣು! 🌙"
        },
        {
          duration: 5.0,
          heading: "🔔 ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ!",
          narration: "ಮಕ್ಕಳ ಮುದ್ದಾದ ಹಾಡುಗಳಿಗಾಗಿ ನಮ್ಮ ಚಾನೆಲ್ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 ಹೊಸ ಹಾಡುಗಳಿಗಾಗಿ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ! 🎈"
        }
      ]
    }
  ]
};



// ==========================================
// SPANISH KIDS CONTENT LIBRARY (Cuentos y Canciones Infantiles)
// ==========================================
const KIDS_CONTENT_LIBRARY_ES = {
  shorts: [
    {
      id: "es_short_animal_quiz_1",
      title: "🦁 ¿Quién Hace Este Sonido? ¡El León! #Shorts",
      category: "shorts",
      aspectRatio: "9:16",
      themeColor: "#FF6B6B",
      bgStyle: "jungle",
      targetAge: "2-6 years",
      musicTrack: "playful_bounce",
      durationSec: 25,
      seo: {
        title: "¿Quién Hace Este Sonido? 🦁 Adivina el Animal para Niños #Shorts",
        description: "¡Hola pequeños exploradores! ¿Puedes adivinar qué animal hace este rugido tan fuerte? ¡Suscríbete para más videos infantiles diarios! 🌟\n\n#videosparaniños #sonidosdeanimales #adivinanzas #ytshorts #aprendeconmigo",
        tags: ["videos para niños", "sonidos de animales", "el rey leon", "adivinanzas infantiles", "canciones infantiles"]
      },
      scenes: [
        {
          duration: 4.5,
          heading: "🦁 ¡ADIVINA EL ANIMAL!",
          narration: "¡Hola amiguitos! Escuchen con mucha atención. ¿Quién hace este rugido tan fuerte?",
          soundEffect: "drum_roll",
          character: "question_mark",
          characterAction: "wobble",
          bgOverlay: "stars",
          subtitles: "🦁 ¿Puedes adivinar quién hace este sonido?"
        },
        {
          duration: 4.5,
          heading: "🔊 ESCUCHA DE CERCA...",
          narration: "¡ROAAR! ¡ROAAR! ¿Lo escucharon? ¿Quién tiene una melena dorada y ruge fuerte?",
          soundEffect: "lion_roar",
          character: "shadow_lion",
          characterAction: "pulse",
          subtitles: "🔊 ¡ROAAR! ¿Quién ruge así en la selva?"
        },
        {
          duration: 5.0,
          heading: "⏰ 3... 2... 1...",
          narration: "¡Cuenta regresiva! ¡Tres! ¡Dos! ¡Uno! ¿Cuál es tu respuesta?",
          soundEffect: "countdown_ticks",
          character: "timer_clock",
          characterAction: "tick",
          subtitles: "⏰ 3... 2... 1... ¿Cuál es tu respuesta?"
        },
        {
          duration: 6.0,
          heading: "🎉 ¡ES UN LEÓN! 🦁",
          narration: "¡Muy bien! ¡Es el rey de la selva, el valiente y alegre león! ¡Excelente trabajo pequeños campeones!",
          soundEffect: "cheer_fanfare",
          character: "happy_lion",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🎉 ¡Es el simpático León! 🦁 ¡Buen trabajo!"
        },
        {
          duration: 5.0,
          heading: "🌟 ¡SUSCRÍBETE!",
          narration: "¡Toca el botón rojo de suscribirse para conocer nuevos amigos animales mañana! ¡Adiós!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🌟 ¡Suscríbete para más diversión diaria! 🎈"
        }
      ]
    }
  ],
  stories: [
    {
      id: "es_story_rabbit_tortoise",
      title: "🐢 La Liebre y la Tortuga | Fábula de Esopo",
      category: "stories",
      aspectRatio: "16:9",
      themeColor: "#4E9F3D",
      bgStyle: "enchanted_forest",
      targetAge: "3-8 years",
      musicTrack: "gentle_acoustic",
      durationSec: 40,
      seo: {
        title: "La Liebre y la Tortuga 🐢 Cuentos Infantiles con Moraleja",
        description: "Fábula clásica de Esopo: La Liebre y la Tortuga. Moraleja: Con paciencia, constancia y esfuerzo siempre se alcanzan las metas.\n\n#cuentosinfantiles #laliebreylatortuga #fabulasdeesopo #cuentosparadormir",
        tags: ["la liebre y la tortuga", "cuentos con moraleja", "fabulas infantiles", "cuentos para niños"]
      },
      scenes: [
        {
          duration: 7.0,
          heading: "🌲 El Bosque y la Liebre Veloz",
          narration: "En un bosque verde y frondoso vivía una liebre muy presumida. Se jactaba todo el día de ser el animal más veloz de todos.",
          soundEffect: "sparkle_magic",
          character: "bunny_curious",
          characterAction: "bounce",
          subtitles: "🌲 La liebre presumía de ser la más rápida."
        },
        {
          duration: 7.5,
          heading: "🐢 La Serena Tortuga",
          narration: "Allí también vivía una tranquila tortuga. La liebre siempre se reía de su paso lento, pero la tortuga nunca se enojaba.",
          soundEffect: "pop_sound",
          character: "slow_tortoise",
          characterAction: "wobble",
          subtitles: "🐢 La tortuga caminaba con paso tranquilo."
        },
        {
          duration: 8.0,
          heading: "🏁 ¡Comienza la Carrera!",
          narration: "Un día la tortuga desafió a la liebre a una carrera. ¡A sus marcas, listos, fuera! La liebre salió corriendo como el viento.",
          soundEffect: "drum_roll",
          character: "slow_tortoise",
          characterAction: "bounce",
          subtitles: "🏁 1... 2... 3! ¡La gran carrera comenzó!"
        },
        {
          duration: 8.5,
          heading: "😴 La Liebre se Duerme",
          narration: "Confiada en su gran ventaja, la liebre se acostó a dormir una siesta bajo un árbol. ¡Y cayó en un sueño profundo!",
          soundEffect: "chime_sparkle",
          character: "bunny_sleeping",
          characterAction: "idle",
          subtitles: "😴 La liebre se durmió bajo la fresca sombra."
        },
        {
          duration: 8.0,
          heading: "🏆 ¡Victoria de la Tortuga!",
          narration: "Paso a paso, sin detenerse jamás, la tortuga cruzó la meta primero. ¡Moraleja: La constancia y el esfuerzo vencen al orgullo!",
          soundEffect: "cheer_fanfare",
          character: "tortoise_winning",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 ¡Ganó la tortuga! Moraleja: Nunca te rindas! 🎉"
        },
        {
          duration: 5.0,
          heading: "🔔 ¡Suscríbete!",
          narration: "¡Suscríbete para disfrutar de más fábulas y cuentos mágicos todos los días!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 ¡Suscríbete para nuevos cuentos cada día! 🎈"
        }
      ]
    }
  ],
  rhymes: [
    {
      id: "es_rhyme_estrellita",
      title: "⭐ Estrellita Dónde Estás | Canción Infantil para Dormir",
      category: "rhymes",
      aspectRatio: "16:9",
      themeColor: "#937DC2",
      bgStyle: "starry_night",
      targetAge: "1-6 years",
      musicTrack: "lullaby_piano",
      durationSec: 32,
      seo: {
        title: "Estrellita Dónde Estás ⭐ Canciones de Cuna para Niños",
        description: "Hermosa canción infantil para dormir: Estrellita dónde estás, me pregunto quién serás! Dulces sueños amiguitos.\n\n#estrellitadondeestas #cancionesdecuna #musicarespetuosa #paraniños",
        tags: ["estrellita donde estas", "canciones de cuna", "canciones infantiles", "para dormir bebes"]
      },
      scenes: [
        {
          duration: 6.5,
          heading: "⭐ ¡Estrellita Dónde Estás!",
          narration: "Estrellita dónde estás, me pregunto quién serás. En el cielo o en el mar, un diamante de verdad.",
          soundEffect: "sparkle_magic",
          character: "main_dancing_star",
          characterAction: "bounce",
          subtitles: "⭐ Estrellita dónde estás, me pregunto quién serás! 💎"
        },
        {
          duration: 6.5,
          heading: "🌙 En el Cielo Brillará",
          narration: "Cuando el sol se fue de aquí, y la noche empieza a abrir, tú nos muestras tu brillar, titilando sin parar.",
          soundEffect: "chime_sparkle",
          character: "crescent_moon",
          characterAction: "wobble",
          subtitles: "🌙 Titilando en el cielo azul, llena de brillo y luz! ✨"
        },
        {
          duration: 6.5,
          heading: "✨ Diamante en el Cielo",
          narration: "Guías con tu suave resplandor a los viajeros en su caminar. ¡Qué hermosa y brillante estrella!",
          soundEffect: "sparkle_magic",
          character: "shining_diamond_star",
          characterAction: "bounce",
          subtitles: "✨ ¡Un diamante de verdad brillando en la noche! 🌟"
        },
        {
          duration: 6.5,
          heading: "😴 Dulces Sueños",
          narration: "Cierra tus ojitos, es hora de descansar. ¡Que tengas sueños llenos de magia y estrellas!",
          soundEffect: "cheer_fanfare",
          character: "crescent_moon_sleepy",
          characterAction: "idle",
          confetti: true,
          subtitles: "😴 ¡Dulces sueños pequeños exploradores! 🌙"
        },
        {
          duration: 5.0,
          heading: "🔔 ¡Suscríbete!",
          narration: "¡Suscríbete a nuestro canal para más canciones de cuna y diversión!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 ¡Suscríbete para nuevas canciones infantiles! 🎈"
        }
      ]
    }
  ]
};



// Unified Content Library Supporting All 6 Languages
const KIDS_CONTENT_LIBRARY = {
  telugu: KIDS_CONTENT_LIBRARY_TE,
  hindi: KIDS_CONTENT_LIBRARY_HI,
  english: KIDS_CONTENT_LIBRARY_EN,
  tamil: KIDS_CONTENT_LIBRARY_TA,
  kannada: KIDS_CONTENT_LIBRARY_KN,
  spanish: KIDS_CONTENT_LIBRARY_ES,
  shorts: [
    ...KIDS_CONTENT_LIBRARY_TE.shorts,
    ...KIDS_CONTENT_LIBRARY_HI.shorts,
    ...KIDS_CONTENT_LIBRARY_EN.shorts,
    ...KIDS_CONTENT_LIBRARY_TA.shorts,
    ...KIDS_CONTENT_LIBRARY_KN.shorts,
    ...KIDS_CONTENT_LIBRARY_ES.shorts
  ],
  stories: [
    ...KIDS_CONTENT_LIBRARY_TE.stories,
    ...KIDS_CONTENT_LIBRARY_HI.stories,
    ...KIDS_CONTENT_LIBRARY_EN.stories,
    ...KIDS_CONTENT_LIBRARY_TA.stories,
    ...KIDS_CONTENT_LIBRARY_KN.stories,
    ...KIDS_CONTENT_LIBRARY_ES.stories
  ],
  rhymes: [
    ...KIDS_CONTENT_LIBRARY_TE.rhymes,
    ...KIDS_CONTENT_LIBRARY_HI.rhymes,
    ...KIDS_CONTENT_LIBRARY_EN.rhymes,
    ...KIDS_CONTENT_LIBRARY_TA.rhymes,
    ...KIDS_CONTENT_LIBRARY_KN.rhymes,
    ...KIDS_CONTENT_LIBRARY_ES.rhymes
  ]
};

// AI Prompt Generator for Any Custom Kids Topic (Supports All Languages)
function generateCustomEpisode(topic, category, lang = 'te') {
  const cleanTopic = topic.trim();
  const isShort = category === "shorts";

  if (lang === 'hi' || /[\u0900-\u097F]/.test(cleanTopic)) {
    return {
      id: `custom_hi_${Date.now()}`,
      title: `✨ ${cleanTopic} | बच्चों की मजेदार कहानी`,
      category: category,
      aspectRatio: isShort ? "9:16" : "16:9",
      themeColor: "#FF5E7E",
      bgStyle: isShort ? "rainbow_sky" : "enchanted_forest",
      targetAge: "2-7 years",
      musicTrack: "cheerful_whistle",
      durationSec: isShort ? 25 : 35,
      seo: {
        title: `${cleanTopic} 🌟 बच्चों की कहानी और मजेदार सीख! #HindiKids`,
        description: `प्यारे बच्चों के लिए ${cleanTopic} की सुंदर कहानी! Subscribe for daily Hindi kids videos!

#hindikids #bachonkikahani #kahaniyan`,
        tags: [cleanTopic, "hindi kids", "panchatantra", "hindi animation", "balgeet"]
      },
      scenes: [
        {
          duration: 5.0,
          heading: `🎈 ${cleanTopic} की दुनिया में स्वागत!`,
          narration: `नमस्ते प्यारे बच्चों! आज हम ${cleanTopic} के बारे में एक बहुत ही मजेदार कहानी सुनेंगे!`,
          soundEffect: "sparkle_magic",
          character: "star_mascot",
          characterAction: "bounce",
          subtitles: `🎈 ${cleanTopic} की मजेदार दुनिया में स्वागत है! 🌟`
        },
        {
          duration: 6.0,
          heading: `👀 देखो ${cleanTopic} को!`,
          narration: `वाह! कितना सुंदर और रंग-बिरंगा है ${cleanTopic}! चलिए सब मिलकर दो बार ताली बजाते हैं! ताली ताली!`,
          soundEffect: "clap_sound",
          character: "hero_character",
          characterAction: "spin_glow",
          subtitles: `👏 सब ताली बजाओ! देखो ${cleanTopic} को! 🌟`
        },
        {
          duration: 7.0,
          heading: "✨ जादुई पल!",
          narration: "जब हम प्यार और मुस्कुराहट बांटते हैं, तो हर पल जादू जैसा सुंदर बन जाता है!",
          soundEffect: "chime_fanfare",
          character: "rainbow_magic",
          characterAction: "glow",
          confetti: true,
          subtitles: "✨ प्यार और खुशी से हर दिन जादुई बन जाता है! ✨"
        },
        {
          duration: 5.0,
          heading: "🎉 शाबाश बच्चों!",
          narration: "बहुत खूब नन्हे सितारों! आपने बहुत अच्छा सीखा! कमाल कर दिया!",
          soundEffect: "cheer_fanfare",
          character: "golden_trophy",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 शाबाश नन्हे सितारों! आप बहुत प्यारे हो! ✋"
        },
        {
          duration: 5.0,
          heading: "❤️ सब्सक्राइब करें!",
          narration: "कल की नई कहानी देखने के लिए अभी सब्सक्राइब करें! बाय बाय!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 कल की नई वीडियो के लिए सब्सक्राइब करें! 🎈"
        }
      ]
    };
  }

  if (lang === 'te' || /[\u0C00-\u0C7F]/.test(cleanTopic)) {
    return {
      id: `custom_te_${Date.now()}`,
      title: `✨ ${cleanTopic} | తెలుగు పిల్లల సరదా కథ`,
      category: category,
      aspectRatio: isShort ? "9:16" : "16:9",
      themeColor: "#FF5E7E",
      bgStyle: isShort ? "rainbow_sky" : "enchanted_forest",
      targetAge: "2-7 years",
      musicTrack: "cheerful_whistle",
      durationSec: isShort ? 25 : 35,
      seo: {
        title: `${cleanTopic} 🌟 తెలుగు పిల్లల కథ & సరదా నేర్చుకోవడం! #TeluguKids`,
        description: `చిన్నారుల కోసం ${cleanTopic} గురించిన అద్భుతమైన కథ! రంగుల బొమ్మలతో, సరదా మాటలతో. Subscribe for daily Telugu kids videos!

#telugukids #chandamamakathalu #telugurhymes`,
        tags: [cleanTopic, "telugu kids", "chandamama kathalu", "telugu animation", "kids cartoon", "neeti kathalu"]
      },
      scenes: [
        {
          duration: 5.0,
          heading: `🎈 ${cleanTopic} లోకానికి స్వాగతం!`,
          narration: `హలో చిట్టి నేస్తాలూ! ఈరోజు మనం ${cleanTopic} గురించి ఒక అద్భుతమైన కథ తెలుసుకుందామా? రండి కలిసి వెళ్దాం!`,
          soundEffect: "sparkle_magic",
          character: "star_mascot",
          characterAction: "bounce",
          subtitles: `🎈 ${cleanTopic} లోకానికి స్వాగతం చిట్టి నేస్తాలూ! 🌟`
        },
        {
          duration: 6.0,
          heading: `👀 చూడండి ${cleanTopic}!`,
          narration: `అటు చూడండి! ${cleanTopic} ఎంత అందంగా, రంగురంగులుగా ఉందో! అందరూ రెండు సార్లు చప్పట్లు కొట్టండి! చప్ చప్!`,
          soundEffect: "clap_sound",
          character: "hero_character",
          characterAction: "spin_glow",
          subtitles: `👏 రెండు సార్లు చప్పట్లు కొట్టండి! ${cleanTopic} భలే ఉంది! 🌟`
        },
        {
          duration: 7.0,
          heading: "✨ మాయా లోకం!",
          narration: "మనం ఎప్పుడూ నవ్వుతూ అందరితో మంచిగా ఉంటే ప్రతిరోజూ పండుగే!",
          soundEffect: "chime_fanfare",
          character: "rainbow_magic",
          characterAction: "glow",
          confetti: true,
          subtitles: "✨ నవ్వులు పంచితే ప్రతిరోజూ ఒక మాయా లోకమే! ✨"
        },
        {
          duration: 5.0,
          heading: "🎉 భలే చెప్పారు!",
          narration: "మీరు చాలా చక్కగా నేర్చుకున్నారు! మీకు పెద్ద చప్పట్లు చిన్నారులూ!",
          soundEffect: "cheer_fanfare",
          character: "golden_trophy",
          characterAction: "jump_celebrate",
          confetti: true,
          subtitles: "🏆 సూపర్ చిన్నారులూ! మీరు చాలా గ్రేట్! ✋"
        },
        {
          duration: 5.0,
          heading: "❤️ సబ్‌స్క్రైబ్ చేసుకోండి!",
          narration: "రేపటి కొత్త కథను మిస్ అవ్వకుండా ఉండటానికి ఇప్పుడే సబ్‌స్క్రైబ్ చేసుకోండి! బాయ్ బాయ్!",
          soundEffect: "chime_sparkle",
          character: "subscribe_bell",
          characterAction: "bounce",
          subtitles: "🔔 రేపటి సరికొత్త వీడియో కోసం సబ్‌స్క్రైబ్ చేయండి! 🎈"
        }
      ]
    };
  }

  // English fallback / default
  return {
    id: `custom_en_${Date.now()}`,
    title: `✨ ${cleanTopic} | Magic Adventure for Kids`,
    category: category,
    aspectRatio: isShort ? "9:16" : "16:9",
    themeColor: "#FF5E7E",
    bgStyle: isShort ? "rainbow_sky" : "enchanted_forest",
    targetAge: "2-6 years",
    musicTrack: "cheerful_whistle",
    durationSec: isShort ? 25 : 35,
    seo: {
      title: `${cleanTopic} 🌟 Cute Kids Animation & Fun Learning!`,
      description: `Join us for a fun adventure all about ${cleanTopic}! Made for toddlers and kids with bright colors and joyful learning. Subscribe for daily kids videos!

#kidsvideos #toddlerlearning`,
      tags: [cleanTopic, "kids cartoon", "toddler fun", "preschool animation", "bedtime story"]
    },
    scenes: [
      {
        duration: 5.0,
        heading: `🎈 Welcome to ${cleanTopic}!`,
        narration: `Hello sunshine! Are you ready for a wonderful story about ${cleanTopic}? Let's dive in together!`,
        soundEffect: "sparkle_magic",
        character: "star_mascot",
        characterAction: "bounce",
        subtitles: `Welcome friends! Let's explore ${cleanTopic}! 🌟`
      },
      {
        duration: 6.0,
        heading: `👀 Discovering ${cleanTopic}!`,
        narration: `Look over there! Look at how bright, colorful, and fun ${cleanTopic} is! Can you clap your hands two times? Clap clap!`,
        soundEffect: "clap_sound",
        character: "hero_character",
        characterAction: "spin_glow",
        subtitles: `Clap your hands! Look at ${cleanTopic}! 👏`
      },
      {
        duration: 7.0,
        heading: "✨ Magic Moment!",
        narration: "Something magical is happening right now! When we share kindness and smiles, every adventure becomes extraordinary!",
        soundEffect: "chime_fanfare",
        character: "rainbow_magic",
        characterAction: "glow",
        confetti: true,
        subtitles: "Sharing smiles makes everything magical! ✨"
      },
      {
        duration: 5.0,
        heading: "🎉 Fantastic Job!",
        narration: "You did such an amazing job exploring with us today! High five to you, little champion!",
        soundEffect: "cheer_fanfare",
        character: "golden_trophy",
        characterAction: "jump_celebrate",
        confetti: true,
        subtitles: "High five, superstar! You are awesome! ✋🏆"
      },
      {
        duration: 5.0,
        heading: "❤️ Subscribe for Daily Kids Magic!",
        narration: "Tap the red subscribe button so you never miss tomorrow's brand new adventure! See you next time!",
        soundEffect: "chime_sparkle",
        character: "subscribe_bell",
        characterAction: "bounce",
        subtitles: "Subscribe for tomorrow's new kids video! 🔔🎈"
      }
    ]
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    KIDS_CONTENT_LIBRARY, 
    KIDS_CONTENT_LIBRARY_TE, 
    KIDS_CONTENT_LIBRARY_HI,
    KIDS_CONTENT_LIBRARY_EN, 
    KIDS_CONTENT_LIBRARY_TA,
    KIDS_CONTENT_LIBRARY_KN,
    KIDS_CONTENT_LIBRARY_ES,
    generateCustomEpisode 
  };
}
