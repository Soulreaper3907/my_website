// CineMood — Main Application Controller (Advanced Sorting & Filter Options Edition)

let CUSTOMER_SUPPORT_EMAIL = "manneshivasai2434@gmail.com";

document.addEventListener('DOMContentLoaded', () => {
  const moodEngine = new MoodEngine(MOVIES_DATABASE);
  let currentUser = JSON.parse(localStorage.getItem('cinemood_active_user') || 'null');
  let watchlist = currentUser ? JSON.parse(localStorage.getItem(`cinemood_watchlist_${currentUser.username.toLowerCase()}`) || '[]') : [];
  let viewingWatchlist = false;

  // Pagination / Lazy Batch Rendering State for 60fps Scroll Performance
  let currentFilteredMovies = [];
  let renderedCount = 0;
  const BATCH_SIZE = 36;

  const btnContentTypeMovies = document.getElementById('btnContentTypeMovies');
  const btnContentTypeSeries = document.getElementById('btnContentTypeSeries');
  let currentContentType = 'movies';

  const moodChipsContainer = document.getElementById('moodChipsContainer');
  const genreChipsContainer = document.getElementById('genreChipsContainer');
  const vibeInput = document.getElementById('vibeInput');
  const vibeClearBtn = document.getElementById('vibeClearBtn');
  const moviesGrid = document.getElementById('moviesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const currentMoodTitle = document.getElementById('currentMoodTitle');
  const aiIntentBanner = document.getElementById('aiIntentBanner');
  const toggleFree = document.getElementById('toggleFree');
  const sortSelect = document.getElementById('sortSelect');
  const minRatingSelect = document.getElementById('minRatingSelect');
  const eraSelect = document.getElementById('eraSelect');
  const runtimeSelect = document.getElementById('runtimeSelect');
  const ageRatingSelect = document.getElementById('ageRatingSelect');
  const btnRoulette = document.getElementById('btnRoulette');
  const btnWatchlist = document.getElementById('btnWatchlist');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const btnBackToTop = document.getElementById('btnBackToTop');
  const watchlistCount = document.getElementById('watchlistCount');
  const movieModal = document.getElementById('movieModal');
  const modalContent = document.getElementById('modalContent');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const emptyState = document.getElementById('emptyState');
  const glowOrb1 = document.getElementById('glowOrb1');
  const logoBtn = document.getElementById('logoBtn');
  const root = document.documentElement;

  // Contact & Support Modal
  const btnContactNav = document.getElementById('btnContactNav');
  const contactModal = document.getElementById('contactModal');
  const btnCloseContactModal = document.getElementById('btnCloseContactModal');

  // Auth Modal
  const authModal = document.getElementById('authModal');
  const btnCloseAuthModal = document.getElementById('btnCloseAuthModal');
  const authForm = document.getElementById('authForm');
  const authUsernameInput = document.getElementById('authUsernameInput');
  const authModalSubtitle = document.getElementById('authModalSubtitle');
  const btnUserAuth = document.getElementById('btnUserAuth');
  const userAuthBtnText = document.getElementById('userAuthBtnText');

  // Back to Top Floating Button
  if (btnBackToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btnBackToTop.classList.add('show');
      } else {
        btnBackToTop.classList.remove('show');
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 800) {
        loadMoreMovies();
      }
    });

    btnBackToTop.addEventListener('click', () => {
      sfx.playChipClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Sound Toggle Switch
  function updateSoundBtnUI() {
    if (!btnSoundToggle) return;
    if (sfx.enabled) {
      btnSoundToggle.innerHTML = `<span>🔊 Sound ON</span>`;
      btnSoundToggle.title = `Sound Effects Active (Click to Mute)`;
      btnSoundToggle.classList.add('active');
    } else {
      btnSoundToggle.innerHTML = `<span>🔇 Mute</span>`;
      btnSoundToggle.title = `Sound Effects Muted (Click to Enable)`;
      btnSoundToggle.classList.remove('active');
    }
  }

  if (btnSoundToggle) {
    updateSoundBtnUI();
    btnSoundToggle.addEventListener('click', () => {
      sfx.toggleSound();
      updateSoundBtnUI();
    });
  }

  if (logoBtn) {
    logoBtn.addEventListener('click', () => {
      sfx.playChipClick();
      selectMood('all');
    });
  }

  function updateAuthUI() {
    if (currentUser) {
      if (userAuthBtnText) userAuthBtnText.innerHTML = `👤 ${currentUser.username}`;
      if (btnUserAuth) btnUserAuth.title = `Signed in as ${currentUser.username} (Click to Sign Out)`;
    } else {
      if (userAuthBtnText) userAuthBtnText.innerHTML = `👤 Sign In`;
      if (btnUserAuth) btnUserAuth.title = `Sign In to Save Watchlist`;
    }
  }

  function openAuthModal(subtitle = null) {
    sfx.playCardOpen();
    if (authModalSubtitle && subtitle) {
      authModalSubtitle.textContent = subtitle;
    } else if (authModalSubtitle) {
      authModalSubtitle.textContent = "Sign in to save movies to your personal watchlist and sync your cinema preferences!";
    }
    if (authModal) {
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAuthModal() {
    sfx.playClose();
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (btnUserAuth) {
    btnUserAuth.addEventListener('click', () => {
      if (currentUser) {
        sfx.playChipClick();
        if (confirm(`Do you want to sign out of account "${currentUser.username}"?`)) {
          currentUser = null;
          localStorage.removeItem('cinemood_active_user');
          watchlist = [];
          viewingWatchlist = false;
          btnWatchlist.classList.remove('active');
          updateAuthUI();
          renderMovies();
          showToast('Signed out successfully');
        }
      } else {
        openAuthModal();
      }
    });
  }

  if (btnCloseAuthModal) btnCloseAuthModal.addEventListener('click', closeAuthModal);
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = authUsernameInput.value.trim();
      if (!val) return;

      currentUser = { username: val };
      localStorage.setItem('cinemood_active_user', JSON.stringify(currentUser));
      watchlist = JSON.parse(localStorage.getItem(`cinemood_watchlist_${currentUser.username.toLowerCase()}`) || '[]');

      sfx.playFavorite();
      updateAuthUI();
      closeAuthModal();
      renderMovies();
      showToast(`Welcome back, ${currentUser.username}! Watchlist unlocked. ❤️`);
    });
  }

  if (btnContactNav) {
    btnContactNav.addEventListener('click', () => {
      sfx.playCardOpen();
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnCloseContactModal) {
    btnCloseContactModal.addEventListener('click', () => {
      sfx.playClose();
      contactModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        sfx.playClose();
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Render Mood Chips
  function renderMoodChips() {
    moodChipsContainer.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.className = `chip-all ${moodEngine.activeMood === 'all' && !moodEngine.customPrompt ? 'active' : ''}`;
    allChip.innerHTML = `<span class="chip-emoji">🍿</span> All Moods`;
    allChip.addEventListener('click', () => {
      sfx.playChipClick();
      selectMood('all');
    });
    moodChipsContainer.appendChild(allChip);

    MOOD_PRESETS.forEach(preset => {
      const chip = document.createElement('button');
      chip.className = `mood-chip ${moodEngine.activeMood === preset.id ? 'active' : ''}`;
      chip.innerHTML = `<span class="chip-emoji">${preset.emoji}</span> ${preset.label}`;
      chip.addEventListener('click', () => {
        sfx.playChipClick();
        selectMood(preset.id);
      });
      moodChipsContainer.appendChild(chip);
    });
  }

  // Render Genre Chips
  function renderGenreChips() {
    if (!genreChipsContainer) return;
    genreChipsContainer.innerHTML = '';

    GENRE_OPTIONS.forEach(genre => {
      const chip = document.createElement('button');
      chip.className = `genre-chip ${moodEngine.activeGenre === genre ? 'active' : ''}`;
      chip.textContent = genre;
      chip.addEventListener('click', () => {
        sfx.playChipClick();
        moodEngine.activeGenre = genre;
        renderGenreChips();
        renderMovies();
      });
      genreChipsContainer.appendChild(chip);
    });
  }

  // Update Theme Accents
  function updateThemeAccent(moodId) {
    const preset = MOOD_PRESETS.find(p => p.id === moodId);
    
    MOOD_PRESETS.forEach(p => {
      if (p.animClass) document.body.classList.remove(p.animClass);
    });

    if (preset) {
      root.style.setProperty('--theme-color', preset.themeColor);
      root.style.setProperty('--theme-glow', preset.glowColor);
      root.style.setProperty('--theme-bg-gradient', preset.gradient);
      if (glowOrb1) glowOrb1.style.background = preset.themeColor;
      if (preset.animClass) document.body.classList.add(preset.animClass);
    } else {
      root.style.setProperty('--theme-color', '#ff3366');
      root.style.setProperty('--theme-glow', 'rgba(255, 51, 102, 0.4)');
      root.style.setProperty('--theme-bg-gradient', 'radial-gradient(circle at 50% -20%, #2b0818 0%, #0a0a0f 70%, #050508 100%)');
      if (glowOrb1) glowOrb1.style.background = '#ff3366';
    }
  }

  function selectMood(moodId) {
    viewingWatchlist = false;
    btnWatchlist.classList.remove('active');
    moodEngine.activeMood = moodId;
    vibeInput.value = '';
    moodEngine.customPrompt = '';
    vibeClearBtn.style.display = 'none';

    renderMoodChips();
    updateThemeAccent(moodId);
    renderMovies();
  }

  // Real-time Natural Language Vibe Search
  if (vibeInput) {
    vibeInput.addEventListener('input', (e) => {
      sfx.playTypingTick();
      const text = e.target.value;
      moodEngine.customPrompt = text;
      
      if (text.trim() !== '') {
        vibeClearBtn.style.display = 'block';
      } else {
        vibeClearBtn.style.display = 'none';
      }

      renderMovies();
    });
  }

  if (vibeClearBtn) {
    vibeClearBtn.addEventListener('click', () => {
      sfx.playClose();
      vibeInput.value = '';
      moodEngine.customPrompt = '';
      vibeClearBtn.style.display = 'none';
      renderMovies();
    });
  }

  // Content Type Switcher Event Listeners
  if (btnContentTypeMovies) {
    btnContentTypeMovies.addEventListener('click', () => {
      sfx.playChipClick();
      currentContentType = 'movies';
      moodEngine.database = MOVIES_DATABASE;
      btnContentTypeMovies.classList.add('active');
      if (btnContentTypeSeries) btnContentTypeSeries.classList.remove('active');
      if (vibeInput) vibeInput.placeholder = "Type your mood... e.g. 'i am tired want something relaxing' or 'sad depressed tearjerker'";
      renderMovies();
    });
  }

  if (btnContentTypeSeries) {
    btnContentTypeSeries.addEventListener('click', () => {
      sfx.playChipClick();
      currentContentType = 'series';
      moodEngine.database = SERIES_DATABASE;
      btnContentTypeSeries.classList.add('active');
      if (btnContentTypeMovies) btnContentTypeMovies.classList.remove('active');
      if (vibeInput) vibeInput.placeholder = "Type your mood... e.g. 'korean drama tearjerker' or 'thrilling mystery series'";
      renderMovies();
    });
  }

  // Render Movies / Series Grid
  function renderMovies() {
    let detectedMood = moodEngine.activeMood;
    let intentText = "";

    if (viewingWatchlist) {
      const allDatabaseItems = [...MOVIES_DATABASE, ...SERIES_DATABASE];
      currentFilteredMovies = allDatabaseItems.filter(m => watchlist.includes(m.id)).map(m => ({ ...m, computedMatchScore: 99 }));
      currentMoodTitle.innerHTML = `❤️ Saved Watchlist`;
      if (aiIntentBanner) aiIntentBanner.style.display = 'none';
    } else {
      const result = moodEngine.getFilteredMovies();
      currentFilteredMovies = result.movies;
      detectedMood = result.detectedMood;
      intentText = result.intentExplanation;

      updateThemeAccent(detectedMood);

      const activePreset = MOOD_PRESETS.find(p => p.id === detectedMood);
      let genreSuffix = moodEngine.activeGenre !== 'All Genres' ? ` • ${moodEngine.activeGenre}` : '';
      let isSeries = currentContentType === 'series';

      if (vibeInput.value.trim() !== '') {
        currentMoodTitle.innerHTML = `🪄 AI Custom Vibe Matches${genreSuffix}`;
      } else if (activePreset) {
        currentMoodTitle.innerHTML = `${activePreset.emoji} ${activePreset.label}${genreSuffix}`;
      } else {
        currentMoodTitle.innerHTML = isSeries ? `📺 Recommended TV Series${genreSuffix}` : `🍿 Recommended Films${genreSuffix}`;
      }

      if (aiIntentBanner) {
        if (intentText && vibeInput.value.trim() !== '') {
          aiIntentBanner.innerHTML = `<span class="ai-sparkle">✨</span> ${intentText}`;
          aiIntentBanner.style.display = 'inline-flex';
        } else {
          aiIntentBanner.style.display = 'none';
        }
      }
    }

    const itemLabel = currentContentType === 'series' ? 'series' : 'film';
    resultsCount.textContent = `${currentFilteredMovies.length} ${itemLabel}${currentFilteredMovies.length === 1 ? '' : 's'}`;

    if (currentFilteredMovies.length === 0) {
      moviesGrid.style.display = 'none';
      emptyState.style.display = 'block';
    } else {
      moviesGrid.style.display = 'grid';
      emptyState.style.display = 'none';
      moviesGrid.innerHTML = '';
      renderedCount = 0;

      loadMoreMovies();
    }

    updateWatchlistBadge();
  }

  function loadMoreMovies() {
    if (renderedCount >= currentFilteredMovies.length) return;

    const nextBatch = currentFilteredMovies.slice(renderedCount, renderedCount + BATCH_SIZE);
    const fragment = document.createDocumentFragment();

    nextBatch.forEach(movie => {
      const card = createMovieCard(movie);
      fragment.appendChild(card);
    });

    moviesGrid.appendChild(fragment);
    renderedCount += nextBatch.length;
  }

  // Create 2:3 Sleek Matte Black Vertical Poster Card
  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-id', movie.id);

    const isSaved = watchlist.includes(movie.id);

    let streamingBadge = '';
    if (movie.streaming && movie.streaming.free && movie.streaming.free.length > 0) {
      streamingBadge = `<span class="badge-stream-free">🎁 ${movie.streaming.free[0].name}</span>`;
    } else if (movie.streaming && movie.streaming.premium && movie.streaming.premium.length > 0) {
      streamingBadge = `<span class="badge-stream-premium">📺 ${movie.streaming.premium[0].name}</span>`;
    }

    let extraBadge = '';
    if (movie.seasons) {
      extraBadge = `<span class="badge-seasons">📺 ${movie.seasons}</span>`;
    } else if (movie.language === 'KO') {
      extraBadge = `<span class="badge-lang">🇰🇷 K-Drama</span>`;
    }

    card.innerHTML = `
      <div class="poster-container">
        <div class="poster-bg-gradient"></div>
        <div class="poster-top-row">
          <div class="match-badge">${movie.computedMatchScore || 95}% Match</div>
          <button class="card-favorite-btn ${isSaved ? 'active' : ''}" title="${isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'}">
            ${isSaved ? '❤️' : '🤍'}
          </button>
        </div>

        <!-- ONLY TITLE IN POSTER AREA -->
        <h3 class="poster-movie-name">${movie.title}</h3>

        <div class="poster-bottom-tag">${movie.seasons ? 'TV SERIES' : 'CINEMOOD'}</div>
      </div>
      <div class="card-info">
        <div class="card-meta-top">
          <span class="movie-rating">⭐ ${movie.rating} IMDb</span>
          <span>📅 ${movie.year}</span>
          ${extraBadge}
        </div>
        <div class="card-genres">
          ${movie.genres.slice(0, 2).map(g => `<span class="genre-pill">${g}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div>${streamingBadge}</div>
          <span style="font-size:0.75rem; font-weight:700; color:var(--theme-color);">Details & Trailer →</span>
        </div>
      </div>
    `;

    // Warm "Tud" Sound Effect on Cursor Hover
    card.addEventListener('mouseenter', () => {
      sfx.playCardHover();
    });

    // Favorites click
    const favBtn = card.querySelector('.card-favorite-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWatchlist(movie.id);
    });

    // Card click opens detail modal
    card.addEventListener('click', () => {
      sfx.playCardOpen();
      openMovieModal(movie);
    });

    return card;
  }

  function toggleWatchlist(movieId) {
    if (!currentUser) {
      openAuthModal("Sign in to save films to your personal Watchlist!");
      return;
    }

    const index = watchlist.indexOf(movieId);
    if (index > -1) {
      watchlist.splice(index, 1);
      sfx.playClose();
      showToast('Removed from Watchlist');
    } else {
      watchlist.push(movieId);
      sfx.playFavorite();
      showToast('Added to Watchlist ❤️');
    }

    localStorage.setItem(`cinemood_watchlist_${currentUser.username.toLowerCase()}`, JSON.stringify(watchlist));
    renderMovies();
  }

  function updateWatchlistBadge() {
    if (watchlistCount) watchlistCount.textContent = watchlist.length;
  }

  if (btnWatchlist) {
    btnWatchlist.addEventListener('click', () => {
      sfx.playChipClick();
      if (!currentUser) {
        openAuthModal("Sign in to access your saved Watchlist!");
        return;
      }
      viewingWatchlist = !viewingWatchlist;
      btnWatchlist.classList.toggle('active', viewingWatchlist);
      renderMovies();
    });
  }

  // Options & Filters Listeners
  if (toggleFree) {
    toggleFree.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.freeOnly = e.target.checked;
      renderMovies();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.sortBy = e.target.value;
      renderMovies();
    });
  }

  if (minRatingSelect) {
    minRatingSelect.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.minRating = parseFloat(e.target.value) || 0;
      renderMovies();
    });
  }

  if (eraSelect) {
    eraSelect.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.selectedEra = e.target.value;
      renderMovies();
    });
  }

  if (runtimeSelect) {
    runtimeSelect.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.selectedRuntime = e.target.value;
      renderMovies();
    });
  }

  if (ageRatingSelect) {
    ageRatingSelect.addEventListener('change', (e) => {
      sfx.playChipClick();
      moodEngine.selectedAgeRating = e.target.value;
      renderMovies();
    });
  }

  // Roulette Spin Button
  let activeRouletteInterval = null;
  if (btnRoulette) {
    btnRoulette.addEventListener('click', () => {
      sfx.playRoulette();

      // Stop any running roulette interval and close previous modal
      if (activeRouletteInterval) {
        clearInterval(activeRouletteInterval);
        activeRouletteInterval = null;
      }
      closeMovieModal();

      const filtered = currentFilteredMovies.length > 0 ? currentFilteredMovies : moodEngine.getFilteredMovies().movies;
      if (filtered.length === 0) return;

      btnRoulette.disabled = true;
      btnRoulette.style.transform = 'scale(0.95)';

      // Pick the winning item AT THE START of the spin sequence
      const selectedMovie = filtered[Math.floor(Math.random() * filtered.length)];

      let count = 0;
      const maxSpins = 12;

      activeRouletteInterval = setInterval(() => {
        sfx.playRoulette();

        let highlightItem;
        if (count >= maxSpins - 1) {
          highlightItem = selectedMovie;
        } else {
          highlightItem = filtered[Math.floor(Math.random() * filtered.length)];
        }

        const randCard = document.querySelector(`[data-id="${highlightItem.id}"]`);
        if (randCard) {
          randCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          randCard.style.outline = '3px solid var(--theme-color)';
          setTimeout(() => {
            if (randCard) randCard.style.outline = 'none';
          }, 110);
        }

        count++;

        if (count >= maxSpins) {
          clearInterval(activeRouletteInterval);
          activeRouletteInterval = null;
          btnRoulette.disabled = false;
          btnRoulette.style.transform = 'none';

          sfx.playCardOpen();
          openMovieModal(selectedMovie);
        }
      }, 110);
    });
  }

  // Clean Expanded Movie Detail Modal
  function openMovieModal(movie) {
    // Reset modal state & stop previous trailer audio/video
    if (movieModal) movieModal.classList.remove('active');
    const oldIframe = modalContent ? modalContent.querySelector('iframe') : null;
    if (oldIframe) oldIframe.src = '';

    const isSaved = watchlist.includes(movie.id);

    // Extract exact Video ID safely
    let videoId = null;
    if (movie.trailer) {
      if (movie.trailer.includes('/embed/')) {
        const parts = movie.trailer.split('/embed/')[1];
        if (parts) videoId = parts.split('?')[0].split('&')[0];
      } else if (movie.trailer.includes('v=')) {
        const parts = movie.trailer.split('v=')[1];
        if (parts) videoId = parts.split('&')[0].split('?')[0];
      } else if (movie.trailer.startsWith('http')) {
        videoId = movie.trailer.split('/').pop().split('?')[0];
      } else {
        videoId = movie.trailer;
      }
    }

    const trailerUrl = getMovieTrailerUrl(movie.title, movie.year, videoId);

    let freeStreamList = '';
    if (movie.streaming && movie.streaming.free) {
      freeStreamList = movie.streaming.free.map(s => `<a href="${s.link}" target="_blank" class="stream-link free">🎁 Stream on ${s.name}</a>`).join('');
    }

    let premiumStreamList = '';
    if (movie.streaming && movie.streaming.premium) {
      premiumStreamList = movie.streaming.premium.map(s => `<a href="${s.link}" target="_blank" class="stream-link premium">📺 Stream on ${s.name}</a>`).join('');
    }

    let seasonsMeta = movie.seasons ? `<span>📺 ${movie.seasons}</span>` : '';
    let langLabel = movie.language === 'KO' ? '🇰🇷 Korean (K-Drama)' : movie.language === 'JA' ? '🇯🇵 Japanese' : movie.language === 'DE' ? '🇩🇪 German' : movie.language === 'ES' ? '🇪🇸 Spanish' : '🇬🇧 English';

    modalContent.innerHTML = `
      <div class="modal-grid">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <h2 class="modal-title">${movie.title}</h2>
              <div class="modal-sub-meta">
                <span>📅 ${movie.year}</span>
                ${seasonsMeta}
                <span>⏱️ ${movie.runtime || '2h'}</span>
                <span>⭐ ${movie.rating} IMDb</span>
                <span>🍅 ${movie.rottenTomatoes || '85%'}</span>
                <span>🔞 ${movie.ageRating || 'PG-13'}</span>
                <span>🌐 ${langLabel}</span>
              </div>
            </div>
            <button class="modal-fav-btn ${isSaved ? 'active' : ''}" id="modalFavBtn">
              ${isSaved ? '❤️ Saved' : '🤍 Save to Watchlist'}
            </button>
          </div>

          <div class="modal-ai-take">
            <div style="font-weight:700; margin-bottom:0.3rem; color:var(--theme-color);">✨ Why This Matches Your Vibe:</div>
            <p>${movie.aiTake || 'An exceptional title tailored to your mood.'}</p>
          </div>

          <p class="modal-plot">${movie.plot}</p>

          <div class="modal-credits">
            <div><strong>Director / Creator:</strong> ${movie.director || 'Acclaimed Visionary'}</div>
            <div><strong>Cast:</strong> ${(movie.cast || ['Leading Stars']).join(', ')}</div>
          </div>

          <!-- Video Trailer Section -->
          <div class="modal-trailer-wrapper">
            <h4 style="color:#fff; margin-bottom:0.6rem;">🎬 Official HD Trailer</h4>
            <div class="video-container">
              <iframe src="${trailerUrl}" title="${movie.title} Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <!-- Streaming Platforms Section -->
          <div class="modal-streaming-section">
            <h4 style="color:#fff; margin-bottom:0.6rem;">📡 Where to Watch</h4>
            <div class="stream-links-grid">
              ${freeStreamList}
              ${premiumStreamList}
            </div>
          </div>

        </div>
      </div>
    `;

    const modalFavBtn = document.getElementById('modalFavBtn');
    if (modalFavBtn) {
      modalFavBtn.addEventListener('click', () => {
        toggleWatchlist(movie.id);
        const newIsSaved = watchlist.includes(movie.id);
        modalFavBtn.innerHTML = newIsSaved ? '❤️ Saved' : '🤍 Save to Watchlist';
        modalFavBtn.classList.toggle('active', newIsSaved);
      });
    }

    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMovieModal() {
    sfx.playClose();
    movieModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    const iframe = modalContent.querySelector('iframe');
    if (iframe) iframe.src = '';
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeMovieModal);
  if (movieModal) {
    movieModal.addEventListener('click', (e) => {
      if (e.target === movieModal) closeMovieModal();
    });
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Initial Startup Execution
  updateAuthUI();
  renderMoodChips();
  renderGenreChips();
  renderMovies();
});
