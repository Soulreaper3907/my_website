// CineMood — AI Natural Language Intent & Mood Recommendation Engine

const MOOD_PRESETS = [
  { id: "spooky", label: "Spooky & Scary", emoji: "👻", themeColor: "#8b5cf6", glowColor: "rgba(139, 92, 246, 0.45)", animClass: "bg-anim-spooky", gradient: "radial-gradient(circle at 50% -20%, #1e1b4b 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "adrenaline", label: "Adrenaline & Action", emoji: "💥", themeColor: "#ef4444", glowColor: "rgba(239, 68, 68, 0.45)", animClass: "bg-anim-action", gradient: "radial-gradient(circle at 50% -20%, #450a0a 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "cozy", label: "Cozy & Warm", emoji: "🍵", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", animClass: "bg-anim-cozy", gradient: "radial-gradient(circle at 50% -20%, #451a03 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "mind-bending", label: "Mind-Bending Sci-Fi", emoji: "🌀", themeColor: "#06b6d4", glowColor: "rgba(6, 182, 212, 0.45)", animClass: "bg-anim-scifi", gradient: "radial-gradient(circle at 50% -20%, #083344 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "laughs", label: "Laugh-Out-Loud", emoji: "😂", themeColor: "#10b981", glowColor: "rgba(16, 185, 129, 0.45)", animClass: "bg-anim-laughs", gradient: "radial-gradient(circle at 50% -20%, #064e3b 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "tearjerker", label: "Tearjerker & Emotional", emoji: "😭", themeColor: "#ec4899", glowColor: "rgba(236, 72, 153, 0.45)", animClass: "bg-anim-emotional", gradient: "radial-gradient(circle at 50% -20%, #500724 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "romance", label: "Hopeless Romantic", emoji: "💖", themeColor: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.45)", animClass: "bg-anim-romance", gradient: "radial-gradient(circle at 50% -20%, #4c0519 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "indie", label: "Indie & Art House", emoji: "🎨", themeColor: "#a855f7", glowColor: "rgba(168, 85, 247, 0.45)", animClass: "bg-anim-indie", gradient: "radial-gradient(circle at 50% -20%, #3b0764 0%, #0a0a0f 70%, #050508 100%)" },
  { id: "popcorn", label: "Popcorn Blockbuster", emoji: "🍿", themeColor: "#3b82f6", glowColor: "rgba(59, 130, 246, 0.45)", animClass: "bg-anim-popcorn", gradient: "radial-gradient(circle at 50% -20%, #172554 0%, #0a0a0f 70%, #050508 100%)" }
];

const GENRE_OPTIONS = [
  "All Genres", "Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
  "Family", "Fantasy", "Horror", "Mystery", "Psychological", "Romance", "Sci-Fi", "Thriller"
];

class MoodEngine {
  constructor(database) {
    this.database = database || [];
    this.activeMood = 'all';
    this.activeGenre = 'All Genres';
    this.freeOnly = false;
    this.sortBy = 'matchScore';
    this.minRating = 0;
    this.selectedEra = 'all';
    this.selectedRuntime = 'all';
    this.selectedAgeRating = 'all';
    this.customPrompt = '';
  }

  analyzeCustomPrompt(promptText) {
    if (!promptText || promptText.trim() === '') return null;
    const text = promptText.toLowerCase().trim();

    // 1. Title Direct Match Check
    let directTitleMatch = null;
    for (const movie of this.database) {
      const lowerTitle = movie.title.toLowerCase();
      if (text.includes(lowerTitle) || lowerTitle.includes(text)) {
        if (!directTitleMatch || movie.title.length > directTitleMatch.title.length) {
          directTitleMatch = movie;
        }
      }
    }

    // Comprehensive Keyword & Synonym Dictionary
    const moodKeywords = {
      tearjerker: [
        "sad", "depressed", "depressing", "cry", "crying", "emotional", "tear", "tears", "tearjerker",
        "heartbreak", "heartbroken", "tragedy", "death", "moving", "touching", "grief", "grieving",
        "pain", "painful", "hopeless", "melancholy", "broken", "illness", "cancer", "pancreas", "bright places",
        "silent voice", "grave of the fireflies", "goodbye", "farewell", "depress", "sorrow", "alone", "lonely", "miserable"
      ],
      cozy: [
        "cozy", "comfort", "comforting", "feel good", "warm", "chill", "wholesome", "relax", "relaxing",
        "family", "animation", "light", "lighthearted", "unwind", "calm", "peaceful", "gentle", "sweet",
        "heartwarming", "happy", "cheerful", "uplifting", "tired", "rest", "sunday", "healing"
      ],
      spooky: [
        "horror", "scary", "ghost", "spooky", "haunted", "demon", "slasher", "creepy", "witch", "gore",
        "blood", "monster", "zombie", "supernatural", "nightmare", "fear", "frightening", "dark", "terrifying"
      ],
      adrenaline: [
        "action", "fast", "fight", "fighting", "car", "chase", "explosion", "war", "superhero", "gun",
        "intense", "survival", "spy", "combat", "race", "thrill", "high octane", "badass", "hyper"
      ],
      "mind-bending": [
        "sci-fi", "scifi", "mind", "space", "time", "twist", "matrix", "alien", "future", "dystopian",
        "mystery", "quantum", "timeline", "psychological", "deep", "simulation", "universe", "multiverse", "dream", "mind-bending"
      ],
      laughs: [
        "funny", "comedy", "laugh", "laughing", "hilarious", "parody", "satire", "fun", "stupid", "silly",
        "humor", "humorous", "joke", "jokes", "lol", "cheerful"
      ],
      romance: [
        "love", "romantic", "romance", "date", "relationship", "couple", "kiss", "passion", "wedding",
        "crush", "crushed", "soulmate", "boyfriend", "girlfriend", "lovers", "dating"
      ],
      indie: [
        "indie", "art", "a24", "deep", "thoughtful", "philosophical", "drama", "oscar", "cinema",
        "auteur", "poetic", "abstract", "art house", "meaningful"
      ],
      popcorn: [
        "blockbuster", "marvel", "fun", "popcorn", "hype", "thriller", "huge", "epic", "spectacle", "franchise"
      ]
    };

    const moodScores = {};
    const matchedTerms = [];

    for (const [mood, keywords] of Object.entries(moodKeywords)) {
      moodScores[mood] = 0;
      keywords.forEach(kw => {
        if (text.includes(kw)) {
          moodScores[mood] += 10;
          if (!matchedTerms.includes(kw)) matchedTerms.push(kw);
        }
      });
    }

    let bestMood = null;
    let maxScore = 0;
    for (const [mood, score] of Object.entries(moodScores)) {
      if (score > maxScore) {
        maxScore = score;
        bestMood = mood;
      }
    }

    let detectedGenre = null;
    const genreKeywords = {
      "Anime / Animation": ["anime", "animation", "animated", "cartoon", "ghibli"],
      "Action": ["action", "fight", "war", "chase"],
      "Comedy": ["comedy", "funny", "hilarious"],
      "Drama": ["drama", "dramatic", "emotional"],
      "Horror": ["horror", "scary", "spooky"],
      "Romance": ["romance", "romantic", "love"],
      "Sci-Fi": ["sci-fi", "scifi", "space", "future"],
      "Thriller": ["thriller", "suspense", "mystery"]
    };

    for (const [g, kws] of Object.entries(genreKeywords)) {
      if (kws.some(kw => text.includes(kw))) {
        detectedGenre = g;
        break;
      }
    }

    return {
      bestMood,
      maxScore,
      matchedTerms,
      directTitleMatch: directTitleMatch ? directTitleMatch.title : null,
      detectedGenre
    };
  }

  getFilteredMovies() {
    let result = [...this.database];
    let analysis = null;
    let effectiveMood = this.activeMood;
    let intentExplanation = "";

    // Analyze Natural Language Custom Prompt
    if (this.customPrompt && this.customPrompt.trim() !== '') {
      analysis = this.analyzeCustomPrompt(this.customPrompt);
      if (analysis && analysis.bestMood) {
        effectiveMood = analysis.bestMood;
      }
    }

    const query = (this.customPrompt || '').toLowerCase().trim();
    const queryTokens = query.split(/\s+/).filter(w => w.length > 2);

    // Compute Relevance Score for EVERY Movie
    result = result.map((movie) => {
      let score = 50;
      const movieTitleLower = movie.title.toLowerCase();
      const moviePlotLower = (movie.plot || '').toLowerCase();
      const movieAiTakeLower = (movie.aiTake || '').toLowerCase();
      const movieGenres = movie.genres || [];
      const movieMoods = movie.moods || [];

      // Direct Title Match Boost
      if (query !== '') {
        if (query.includes(movieTitleLower) || movieTitleLower.includes(query)) {
          score += 500;
        } else {
          queryTokens.forEach(t => {
            if (movieTitleLower.includes(t)) score += 35;
          });
        }

        queryTokens.forEach(t => {
          if (moviePlotLower.includes(t)) score += 8;
          if (movieAiTakeLower.includes(t)) score += 6;
        });
      }

      // Mood Alignment
      if (effectiveMood !== 'all') {
        if (movieMoods.includes(effectiveMood)) {
          score += 60;
        } else {
          if (effectiveMood === 'tearjerker' && (movieGenres.includes('Drama') || movieGenres.includes('Romance'))) score += 30;
          if (effectiveMood === 'cozy' && (movieGenres.includes('Animation') || movieGenres.includes('Family') || movieGenres.includes('Comedy'))) score += 30;
          if (effectiveMood === 'spooky' && (movieGenres.includes('Horror') || movieGenres.includes('Thriller'))) score += 30;
          if (effectiveMood === 'adrenaline' && (movieGenres.includes('Action') || movieGenres.includes('Adventure'))) score += 30;
          if (effectiveMood === 'mind-bending' && (movieGenres.includes('Sci-Fi') || movieGenres.includes('Mystery'))) score += 30;
          if (effectiveMood === 'laughs' && movieGenres.includes('Comedy')) score += 30;
          if (effectiveMood === 'romance' && movieGenres.includes('Romance')) score += 30;
        }
      }

      // Genre Matching
      if (this.activeGenre !== 'All Genres') {
        if (movieGenres.includes(this.activeGenre)) {
          score += 40;
        } else {
          score -= 100;
        }
      }

      score += parseFloat(movie.rating || 7.0) * 2;

      let displayScore = Math.min(100, Math.max(75, Math.round(75 + (score / 15))));
      if (query !== '' && (query.includes(movieTitleLower) || movieTitleLower.includes(query))) {
        displayScore = 100;
      }

      return {
        ...movie,
        relevanceScore: score,
        computedMatchScore: displayScore
      };
    });

    // 1. Filter by Active Genre
    if (this.activeGenre !== 'All Genres') {
      result = result.filter(m => m.genres && m.genres.includes(this.activeGenre));
    }

    // 2. Filter by Free Streaming
    if (this.freeOnly) {
      result = result.filter(m => m.streaming && m.streaming.free && m.streaming.free.length > 0);
    }

    // 3. Filter by IMDb Rating Minimum Threshold
    if (this.minRating > 0) {
      result = result.filter(m => parseFloat(m.rating || 0) >= this.minRating);
    }

    // 4. Filter by Era / Decades
    if (this.selectedEra !== 'all') {
      if (this.selectedEra === '2020s') result = result.filter(m => m.year >= 2020);
      else if (this.selectedEra === '2010s') result = result.filter(m => m.year >= 2010 && m.year < 2020);
      else if (this.selectedEra === '2000s') result = result.filter(m => m.year >= 2000 && m.year < 2010);
      else if (this.selectedEra === '1990s') result = result.filter(m => m.year < 2000);
    }

    // 5. Filter by Runtime Length
    if (this.selectedRuntime !== 'all') {
      result = result.filter(m => {
        let runtimeMins = 110;
        if (m.runtime) {
          const match = m.runtime.match(/(\d+)\s*h(?:our)?s?\s*(\d+)?/i);
          if (match) {
            const h = parseInt(match[1]) || 0;
            const mins = parseInt(match[2]) || 0;
            runtimeMins = (h * 60) + mins;
          } else {
            const numMatch = m.runtime.match(/(\d+)/);
            if (numMatch) runtimeMins = parseInt(numMatch[1]);
          }
        }
        if (this.selectedRuntime === 'quick') return runtimeMins <= 100;
        if (this.selectedRuntime === 'standard') return runtimeMins > 100 && runtimeMins <= 130;
        if (this.selectedRuntime === 'epic') return runtimeMins > 130;
        return true;
      });
    }

    // 6. Filter by Age Rating
    if (this.selectedAgeRating !== 'all') {
      result = result.filter(m => {
        const ar = (m.ageRating || 'PG-13').toUpperCase();
        if (this.selectedAgeRating === 'family') return ar.includes('G') || ar.includes('PG') && !ar.includes('PG-13');
        if (this.selectedAgeRating === 'teen') return ar.includes('PG-13') || ar.includes('14');
        if (this.selectedAgeRating === 'mature') return ar.includes('R') || ar.includes('MA') || ar.includes('18');
        return true;
      });
    }

    // Sorting Logic
    if (query !== '' && (!analysis || !analysis.directTitleMatch)) {
      result.sort((a, b) => b.relevanceScore - a.relevanceScore);
      const topScore = result[0] ? result[0].relevanceScore : 0;
      if (topScore > 80) {
        result = result.filter(m => m.relevanceScore >= Math.max(50, topScore * 0.45));
      }
    } else {
      if (this.sortBy === 'ratingDesc') {
        result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      } else if (this.sortBy === 'ratingAsc') {
        result.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
      } else if (this.sortBy === 'yearDesc') {
        result.sort((a, b) => b.year - a.year);
      } else if (this.sortBy === 'yearAsc') {
        result.sort((a, b) => a.year - b.year);
      } else if (this.sortBy === 'titleAsc') {
        result.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.sortBy === 'titleDesc') {
        result.sort((a, b) => b.title.localeCompare(a.title));
      } else {
        // Default: Relevance Match Score
        result.sort((a, b) => b.relevanceScore - a.relevanceScore);
      }
    }

    // Build AI Intent Explanation Banner Text
    if (analysis && analysis.matchedTerms && analysis.matchedTerms.length > 0) {
      const termsList = analysis.matchedTerms.slice(0, 4).map(t => `'${t}'`).join(', ');
      const presetObj = MOOD_PRESETS.find(p => p.id === effectiveMood);
      const moodLabel = presetObj ? `${presetObj.emoji} ${presetObj.label}` : 'Cinema Match';

      if (analysis.directTitleMatch) {
        intentExplanation = `🎯 Matched Title: "${analysis.directTitleMatch}" & similar ${moodLabel} films`;
      } else {
        intentExplanation = `🤖 AI Detected Mood: ${moodLabel} (Key signals: ${termsList})`;
      }
    }

    return {
      movies: result,
      detectedMood: effectiveMood,
      intentExplanation,
      matchedTitle: analysis ? analysis.directTitleMatch : null
    };
  }
}
