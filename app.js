/* ═══════════════════════════════════════════════════════
   ARS — AUTHENTIC RECIPE STATION
   Interactive Application Logic
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ── State ──────────────────────────────────────────
    let currentCategory = 'all';
    let searchQuery = '';
    let activeTimers = {}; // { 'drink-1-step-2': { interval, remaining, total, running } }

    // ── DOM References ─────────────────────────────────
    const drinkGrid = document.getElementById('drink-grid');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const categoryTabs = document.querySelectorAll('.cat-tab');
    const modal = document.getElementById('drink-modal');
    const modalClose = document.getElementById('modal-close');
    const noResults = document.getElementById('no-results');

    // ── Initialize ─────────────────────────────────────
    function init() {
        renderDrinks();
        renderOperationalFramework();
        bindEvents();
    }

    // ── Render All Drinks ──────────────────────────────
    function renderDrinks() {
        const data = window.ARS_DATA;
        if (!data) {
            drinkGrid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;">Loading drink data...</p>';
            return;
        }

        let html = '';
        let visibleCount = 0;

        data.categories.forEach(category => {
            const catId = category.id;

            // Filter by category
            if (currentCategory !== 'all' && currentCategory !== catId) return;

            // Collect all drinks in this category
            let catDrinks = [];
            category.subcategories.forEach(sub => {
                sub.drinks.forEach(drink => {
                    catDrinks.push({ ...drink, subcategory: sub.name });
                });
            });

            // Filter by search
            if (searchQuery) {
                catDrinks = catDrinks.filter(d => matchesSearch(d, searchQuery));
            }

            if (catDrinks.length === 0) return;

            // Category Header
            html += `
                <div class="category-header">
                    <div class="category-header-emoji">${category.emoji}</div>
                    <div class="category-header-text">
                        <h2>${category.name}</h2>
                        <p>${category.tagline}</p>
                    </div>
                </div>
            `;

            // Group by subcategory
            let currentSub = '';
            catDrinks.forEach(drink => {
                if (drink.subcategory !== currentSub) {
                    currentSub = drink.subcategory;
                    html += `
                        <div class="subcategory-header">
                            <h3>${currentSub}</h3>
                        </div>
                    `;
                }

                html += renderDrinkCard(drink, catId);
                visibleCount++;
            });
        });

        drinkGrid.innerHTML = html;

        // Show/hide no results
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        drinkGrid.style.display = visibleCount === 0 ? 'none' : 'grid';

        // Bind card clicks
        drinkGrid.querySelectorAll('.drink-card').forEach(card => {
            card.addEventListener('click', () => {
                const drinkId = parseInt(card.dataset.drinkId);
                openDrinkModal(drinkId);
            });
        });
    }

    function renderDrinkCard(drink, catId) {
        const hasRecipe = drink.ingredients && drink.ingredients.length > 0;
        const badgeText = hasRecipe ? '📖 Full Recipe' : `${getCategoryLabel(catId)}`;
        const badgeClass = hasRecipe ? 'has-recipe' : '';

        return `
            <div class="drink-card" data-drink-id="${drink.id}" style="--card-accent: ${drink.colorAccent};">
                <div class="drink-card-top">
                    <span class="drink-number">#${String(drink.id).padStart(2, '0')}</span>
                    <span class="drink-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="drink-card-body">
                    <h3>${drink.name}</h3>
                    <p class="drink-card-mix">${drink.quickMix}</p>
                </div>
                <div class="drink-card-footer">
                    <div class="drink-color-dot" style="background: ${drink.colorAccent}; box-shadow: 0 0 8px ${drink.colorAccent};"></div>
                    <span class="drink-view-btn">
                        View Details
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
            </div>
        `;
    }

    function getCategoryLabel(catId) {
        const labels = {
            'classics': '🥤 Classic',
            'dual-combos': '🎨 Dual Combo',
            'signature': '👑 Signature',
            'tiranga': '🇮🇳 Tiranga'
        };
        return labels[catId] || '';
    }

    // ── Search Logic ───────────────────────────────────
    function matchesSearch(drink, query) {
        const q = query.toLowerCase();
        return (
            drink.name.toLowerCase().includes(q) ||
            drink.quickMix.toLowerCase().includes(q) ||
            (drink.subtitle && drink.subtitle.toLowerCase().includes(q)) ||
            (drink.ingredients && drink.ingredients.some(i => i.toLowerCase().includes(q)))
        );
    }

    // ── Modal ──────────────────────────────────────────
    function openDrinkModal(drinkId) {
        const drink = findDrinkById(drinkId);
        if (!drink) return;

        const hasDetailedRecipe = drink.ingredients && drink.ingredients.length > 0;

        // Set header
        document.getElementById('modal-badge').textContent = `#${String(drink.id).padStart(2, '0')} — ${drink.name}`;
        document.getElementById('modal-title').textContent = drink.name;
        document.getElementById('modal-subtitle').textContent = drink.subtitle || '';
        document.getElementById('modal-subtitle').style.display = drink.subtitle ? 'block' : 'none';
        document.getElementById('modal-quick-mix').innerHTML = `<strong>Quick Mix:</strong> ${drink.quickMix}`;

        // Set accent color
        document.querySelector('.modal-header').style.setProperty('--modal-accent-color', hexToRgba(drink.colorAccent, 0.15));

        const tabsContainer = document.getElementById('modal-tabs');
        const panels = {
            ingredients: document.getElementById('panel-ingredients'),
            steps: document.getElementById('panel-steps'),
            notes: document.getElementById('panel-notes'),
            hacks: document.getElementById('panel-hacks'),
            kids: document.getElementById('panel-kids'),
            basic: document.getElementById('panel-basic'),
        };

        // Clear all timers for previous drink
        clearAllTimers();

        if (hasDetailedRecipe) {
            tabsContainer.style.display = 'flex';
            panels.basic.style.display = 'none';

            // Render Ingredients
            panels.ingredients.innerHTML = renderIngredients(drink.ingredients);

            // Render Steps with Timers
            panels.steps.innerHTML = renderSteps(drink);

            // Render Notes
            panels.notes.innerHTML = drink.notes ? renderNotes(drink.notes) : '<p class="basic-info-text">No specific notes for this drink.</p>';

            // Render Hacks
            panels.hacks.innerHTML = drink.hacks ? renderHacks(drink.hacks) : '<p class="basic-info-text">No hacks available yet.</p>';

            // Render Kids Version
            panels.kids.innerHTML = drink.kidsVersion ? renderKidsVersion(drink.kidsVersion) : '<p class="basic-info-text">No kids version available yet.</p>';

            // Set first tab active
            setActiveTab('ingredients');

            // Bind timer buttons
            bindTimerButtons(drink);
        } else {
            tabsContainer.style.display = 'none';
            Object.keys(panels).forEach(key => {
                if (key !== 'basic') panels[key].classList.remove('active');
                panels[key].style.display = key === 'basic' ? 'block' : 'none';
            });

            panels.basic.innerHTML = `
                <div class="basic-info-panel">
                    <div class="basic-info-icon">🍹</div>
                    <p class="basic-info-text">Detailed recipe with step-by-step instructions coming soon!</p>
                    <div class="basic-info-mix">
                        <h4>Quick Mix Formula</h4>
                        <p>${drink.quickMix}</p>
                    </div>
                </div>
            `;
            panels.basic.style.display = 'block';
        }

        // Open modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrinkModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        clearAllTimers();
    }

    // ── Render Helpers ─────────────────────────────────
    function renderIngredients(ingredients) {
        let html = '<ul class="ingredient-list">';
        ingredients.forEach(ing => {
            html += `
                <li class="ingredient-item">
                    <span class="ingredient-bullet"></span>
                    <span class="ingredient-text">${ing}</span>
                </li>
            `;
        });
        html += '</ul>';
        return html;
    }

    function renderSteps(drink) {
        if (!drink.steps || drink.steps.length === 0) {
            return '<p class="basic-info-text">No detailed steps available.</p>';
        }

        // Calculate total time
        const totalSeconds = drink.steps.reduce((sum, s) => sum + (s.timerSeconds || 0), 0);
        const totalMin = Math.floor(totalSeconds / 60);
        const totalSec = totalSeconds % 60;

        let html = `
            <div class="total-timer-badge">
                <span class="total-timer-label">⏱️ Estimated Total Time:</span>
                <span class="total-timer-value">${totalMin > 0 ? totalMin + 'm ' : ''}${totalSec}s</span>
            </div>
        `;

        html += '<div class="step-list">';
        drink.steps.forEach((step, idx) => {
            const timerId = `drink-${drink.id}-step-${idx}`;
            const timerSec = step.timerSeconds || 30;
            const timerMin = Math.floor(timerSec / 60);
            const timerRemSec = timerSec % 60;
            const timeStr = `${String(timerMin).padStart(2, '0')}:${String(timerRemSec).padStart(2, '0')}`;

            html += `
                <div class="step-item" id="step-item-${timerId}">
                    <div class="step-top">
                        <span class="step-number">${idx + 1}</span>
                        <span class="step-title">${step.title}</span>
                    </div>
                    <p class="step-detail">${step.detail}</p>
                    <div class="step-timer-bar" data-timer-id="${timerId}" data-total="${timerSec}">
                        <button class="timer-btn timer-btn-start" data-action="start" data-timer="${timerId}" title="Start Timer">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <polygon points="6,4 20,12 6,20"></polygon>
                            </svg>
                        </button>
                        <span class="timer-display" id="timer-display-${timerId}">${timeStr}</span>
                        <div class="timer-progress-track">
                            <div class="timer-progress-fill" id="timer-progress-${timerId}"></div>
                        </div>
                        <button class="timer-btn timer-btn-reset" data-action="reset" data-timer="${timerId}" title="Reset Timer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                <path d="M1 4v6h6M23 20v-6h-6"></path>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                            </svg>
                        </button>
                        <span class="timer-label">${timerSec}s</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    function renderNotes(notes) {
        let html = '<div class="note-list">';
        notes.forEach(note => {
            // Split text to bold the first part before the dash
            const parts = note.text.split(' — ');
            const textHtml = parts.length > 1
                ? `<strong>${parts[0]}</strong> — ${parts.slice(1).join(' — ')}`
                : note.text;

            html += `
                <div class="note-item">
                    <span class="note-icon">${note.icon}</span>
                    <p class="note-text">${textHtml}</p>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    function renderHacks(hacks) {
        let html = '<div class="hack-list">';
        hacks.forEach(hack => {
            html += `
                <div class="hack-item">
                    <div class="hack-top">
                        <span class="hack-icon">${hack.icon}</span>
                        <span class="hack-title">${hack.title}</span>
                    </div>
                    <p class="hack-text">${hack.text}</p>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    function renderKidsVersion(kids) {
        let html = `
            <div class="kids-intro">
                👶 Children love vibrant colored drinks but may find certain flavors too intense. Here are the safe, budget-friendly modifications:
            </div>
            <div class="kids-swap-list">
        `;

        kids.swaps.forEach(swap => {
            html += `
                <div class="kids-swap-item">
                    <span class="kids-swap-icon">${swap.icon}</span>
                    <div>
                        <div class="kids-swap-label">${swap.label}</div>
                        <p class="kids-swap-text">${swap.text}</p>
                    </div>
                </div>
            `;
        });

        html += '</div>';

        if (kids.recipe) {
            html += `
                <div class="kids-final-recipe">
                    <h4>✅ Kids Version Final Recipe</h4>
                    <p>${kids.recipe}</p>
                </div>
            `;
        }

        return html;
    }

    // ── Timer Logic ────────────────────────────────────
    function bindTimerButtons(drink) {
        document.querySelectorAll('.step-timer-bar').forEach(bar => {
            const timerId = bar.dataset.timerId;
            const totalSeconds = parseInt(bar.dataset.total);

            // Initialize timer state
            activeTimers[timerId] = {
                interval: null,
                remaining: totalSeconds,
                total: totalSeconds,
                running: false
            };

            bar.querySelectorAll('.timer-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = btn.dataset.action;
                    const tid = btn.dataset.timer;

                    if (action === 'start') {
                        toggleTimer(tid);
                    } else if (action === 'reset') {
                        resetTimer(tid);
                    }
                });
            });
        });
    }

    function toggleTimer(timerId) {
        const timer = activeTimers[timerId];
        if (!timer) return;

        if (timer.running) {
            // Pause
            clearInterval(timer.interval);
            timer.running = false;
            updateTimerUI(timerId);
        } else {
            // Start
            if (timer.remaining <= 0) {
                timer.remaining = timer.total;
            }
            timer.running = true;
            updateTimerUI(timerId);

            // Add active class to step
            const stepItem = document.getElementById(`step-item-${timerId}`);
            if (stepItem) stepItem.classList.add('step-active');

            timer.interval = setInterval(() => {
                timer.remaining--;
                updateTimerUI(timerId);

                if (timer.remaining <= 0) {
                    clearInterval(timer.interval);
                    timer.running = false;
                    updateTimerUI(timerId);

                    // Mark completed
                    if (stepItem) {
                        stepItem.classList.remove('step-active');
                        stepItem.classList.add('step-completed');
                    }

                    // Play a beep
                    playTimerDone();
                }
            }, 1000);
        }
    }

    function resetTimer(timerId) {
        const timer = activeTimers[timerId];
        if (!timer) return;

        clearInterval(timer.interval);
        timer.remaining = timer.total;
        timer.running = false;
        updateTimerUI(timerId);

        // Remove step classes
        const stepItem = document.getElementById(`step-item-${timerId}`);
        if (stepItem) {
            stepItem.classList.remove('step-active', 'step-completed');
        }
    }

    function updateTimerUI(timerId) {
        const timer = activeTimers[timerId];
        if (!timer) return;

        const display = document.getElementById(`timer-display-${timerId}`);
        const progress = document.getElementById(`timer-progress-${timerId}`);
        const bar = document.querySelector(`[data-timer-id="${timerId}"]`);
        if (!display || !bar) return;

        const min = Math.floor(timer.remaining / 60);
        const sec = timer.remaining % 60;
        display.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

        // Update progress bar
        if (progress) {
            const pct = ((timer.total - timer.remaining) / timer.total) * 100;
            progress.style.width = `${pct}%`;
        }

        // Update display class
        display.classList.remove('timer-running', 'timer-done');
        if (timer.running) {
            display.classList.add('timer-running');
        } else if (timer.remaining <= 0) {
            display.classList.add('timer-done');
        }

        // Update start/pause button
        const startBtn = bar.querySelector('[data-action="start"]');
        if (startBtn) {
            if (timer.running) {
                startBtn.classList.remove('timer-btn-start');
                startBtn.classList.add('timer-btn-pause');
                startBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                `;
                startBtn.title = 'Pause Timer';
            } else {
                startBtn.classList.remove('timer-btn-pause');
                startBtn.classList.add('timer-btn-start');
                startBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <polygon points="6,4 20,12 6,20"></polygon>
                    </svg>
                `;
                startBtn.title = 'Start Timer';
            }
        }
    }

    function clearAllTimers() {
        Object.keys(activeTimers).forEach(id => {
            if (activeTimers[id].interval) {
                clearInterval(activeTimers[id].interval);
            }
        });
        activeTimers = {};
    }

    function playTimerDone() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

            notes.forEach((freq, i) => {
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.15);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.4);
                oscillator.start(audioCtx.currentTime + i * 0.15);
                oscillator.stop(audioCtx.currentTime + i * 0.15 + 0.4);
            });
        } catch (e) {
            // Audio not supported, that's fine
        }
    }

    // ── Tab Switching ──────────────────────────────────
    function setActiveTab(tabName) {
        document.querySelectorAll('.modal-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });
        document.querySelectorAll('.tab-panel').forEach(panel => {
            const panelTab = panel.id.replace('panel-', '');
            if (panelTab === 'basic') return;
            panel.classList.toggle('active', panelTab === tabName);
            panel.style.display = panelTab === tabName ? 'block' : 'none';
        });
    }

    // ── Find Drink ─────────────────────────────────────
    function findDrinkById(id) {
        const data = window.ARS_DATA;
        if (!data) return null;
        for (const cat of data.categories) {
            for (const sub of cat.subcategories) {
                for (const drink of sub.drinks) {
                    if (drink.id === id) return drink;
                }
            }
        }
        return null;
    }

    // ── Operational Framework ──────────────────────────
    function renderOperationalFramework() {
        const data = window.ARS_DATA;
        if (!data || !data.operationalFramework) return;

        const ops = data.operationalFramework;
        document.getElementById('ops-ice-rule').textContent = ops.iceStaircaseRule;
        document.getElementById('ops-garnishes').textContent = ops.garnishesAndAddons;
        document.getElementById('ops-instagram').textContent = ops.instagramDirective;
    }

    // ── Utility ────────────────────────────────────────
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // ── Event Bindings ─────────────────────────────────
    function bindEvents() {
        // Category tabs
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.dataset.category;
                renderDrinks();
            });
        });

        // Search
        let searchDebounce;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchDebounce);
            searchDebounce = setTimeout(() => {
                searchQuery = searchInput.value.trim();
                searchClear.style.display = searchQuery ? 'flex' : 'none';
                renderDrinks();
            }, 200);
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            searchClear.style.display = 'none';
            renderDrinks();
        });

        // Modal close
        modalClose.addEventListener('click', closeDrinkModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeDrinkModal();
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeDrinkModal();
            }
        });

        // Modal tab clicks
        document.getElementById('modal-tabs').addEventListener('click', (e) => {
            const tab = e.target.closest('.modal-tab');
            if (tab) setActiveTab(tab.dataset.tab);
        });
    }

    // ── Boot ───────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
