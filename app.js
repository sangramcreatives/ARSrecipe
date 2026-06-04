/* ═══════════════════════════════════════════════════════
   ARS — AUTHENTIC RECIPE STATION
   Interactive Application Logic
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ── State ──────────────────────────────────────────
    let currentStation = 'drinks';
    let currentCategory = 'all';
    let searchQuery = '';
    let activeTimers = {}; // { 'drink-1-step-2': { interval, remaining, total, running } }
    let revealObserver = null;

    // ── DOM References ─────────────────────────────────
    const drinkGrid = document.getElementById('drink-grid');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const modal = document.getElementById('drink-modal');
    const modalClose = document.getElementById('modal-close');
    const noResults = document.getElementById('no-results');

    // ── Initialize ─────────────────────────────────────
    function init() {
        initRevealObserver();
        initStationSelector();
        initStationSubtitles();
        updateStats();
        renderCategoryTabs();
        renderDrinks();
        renderOperationalFramework();
        bindEvents();
        observeElements();
    }

    function updateStats() {
        const drinksData = window.ARS_DATA;
        const foodData = window.ARS_FOOD_DATA;
        
        let drinksCount = 48;
        let foodCount = 54;
        let categoriesCount = 10;
        
        if (drinksData) {
            drinksCount = drinksData.categories.reduce((sum, cat) => sum + cat.subcategories.reduce((subSum, sub) => subSum + sub.drinks.length, 0), 0);
        }
        if (foodData) {
            foodCount = foodData.recipes.length;
        }
        categoriesCount = (drinksData ? drinksData.categories.length : 4) + (foodData ? foodData.categories.length : 6);
        
        const countDrinksEl = document.getElementById('stat-count-drinks');
        const countFoodEl = document.getElementById('stat-count-food');
        const countCategoriesEl = document.getElementById('stat-count-categories');
        
        if (countDrinksEl) countDrinksEl.textContent = String(drinksCount);
        if (countFoodEl) countFoodEl.textContent = String(foodCount);
        if (countCategoriesEl) countCategoriesEl.textContent = String(categoriesCount);
        
        const logoEmoji = document.querySelector('.logo-emoji');
        if (logoEmoji) {
            logoEmoji.textContent = currentStation === 'drinks' ? '🥤' : '🍔';
        }
    }

    function initStationSelector() {
        const btnDrinks = document.getElementById('station-btn-drinks');
        const btnFood = document.getElementById('station-btn-food');

        if (btnDrinks && btnFood) {
            btnDrinks.addEventListener('click', () => {
                if (currentStation === 'drinks') return;
                currentStation = 'drinks';
                btnDrinks.classList.add('active');
                btnFood.classList.remove('active');
                currentCategory = 'all';
                searchQuery = '';
                searchInput.value = '';
                searchClear.style.display = 'none';
                
                updateStats();
                searchInput.placeholder = 'Search drinks, ingredients, or categories...';
                
                renderCategoryTabs();
                renderOperationalFramework();
                renderDrinks();
            });

            btnFood.addEventListener('click', () => {
                if (currentStation === 'food') return;
                currentStation = 'food';
                btnFood.classList.add('active');
                btnDrinks.classList.remove('active');
                currentCategory = 'all';
                searchQuery = '';
                searchInput.value = '';
                searchClear.style.display = 'none';
                
                updateStats();
                searchInput.placeholder = 'Search foods, ingredients, or categories...';
                
                renderCategoryTabs();
                renderOperationalFramework();
                renderDrinks();
            });
        }
    }

    function initStationSubtitles() {
        const foodSub = document.querySelector('#station-btn-food .station-subtitle');
        const drinkSub = document.querySelector('#station-btn-drinks .station-subtitle');
        
        if (drinkSub && window.ARS_DATA) {
            const data = window.ARS_DATA;
            const drinksCount = data.categories.reduce((sum, cat) => sum + cat.subcategories.reduce((subSum, sub) => subSum + sub.drinks.length, 0), 0);
            drinkSub.textContent = `${drinksCount} Premium Mocktails`;
        }
        if (foodSub && window.ARS_FOOD_DATA) {
            const data = window.ARS_FOOD_DATA;
            const foodsCount = data.recipes.length;
            foodSub.textContent = `${foodsCount} Street Food Classics`;
        }
    }

    function initTheme() {
        const toggleInput = document.getElementById('darkmode-toggle');
        const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
        
        if (toggleInput) {
            toggleInput.checked = isCurrentlyDark;
            
            toggleInput.addEventListener('change', () => {
                const isDark = toggleInput.checked;
                if (isDark) {
                    document.documentElement.classList.add('dark-mode');
                } else {
                    document.documentElement.classList.remove('dark-mode');
                }
                try {
                    localStorage.setItem('ars-theme', isDark ? 'dark' : 'light');
                } catch (e) {
                    console.warn('localStorage access blocked:', e);
                }
            });
        }
    }

    function renderCategoryTabs() {
        const categoryTabsContainer = document.getElementById('category-tabs');
        if (!categoryTabsContainer) return;

        let html = '';
        if (currentStation === 'drinks') {
            const data = window.ARS_DATA;
            if (!data) return;

            html += `
                <button class="cat-tab ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
                    <span class="cat-tab-emoji">🍹</span>
                    <span class="cat-tab-text">All Drinks</span>
                    <span class="cat-tab-count">${data.categories.reduce((sum, cat) => sum + cat.subcategories.reduce((subSum, sub) => subSum + sub.drinks.length, 0), 0)}</span>
                </button>
            `;
            data.categories.forEach(cat => {
                let count = 0;
                cat.subcategories.forEach(sub => { count += sub.drinks.length; });
                html += `
                    <button class="cat-tab ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                        <span class="cat-tab-emoji">${cat.emoji}</span>
                        <span class="cat-tab-text">${cat.name}</span>
                        <span class="cat-tab-count">${count}</span>
                    </button>
                `;
            });
        } else {
            const data = window.ARS_FOOD_DATA;
            if (!data) return;

            html += `
                <button class="cat-tab ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
                    <span class="cat-tab-emoji">🍔</span>
                    <span class="cat-tab-text">All Foods</span>
                    <span class="cat-tab-count">${data.recipes.length}</span>
                </button>
            `;
            data.categories.forEach(cat => {
                const count = data.recipes.filter(r => r.categoryId === cat.id).length;
                html += `
                    <button class="cat-tab ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                        <span class="cat-tab-emoji">${cat.emoji}</span>
                        <span class="cat-tab-text">${cat.name}</span>
                        <span class="cat-tab-count">${count}</span>
                    </button>
                `;
            });
        }

        categoryTabsContainer.innerHTML = html;

        // Bind clicks
        categoryTabsContainer.querySelectorAll('.cat-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabsContainer.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.dataset.category;
                renderDrinks();
            });
        });
    }

    // ── Render All Items ───────────────────────────────
    function renderDrinks() {
        if (currentStation === 'drinks') {
            renderDrinkStation();
        } else {
            renderFoodStation();
        }
    }

    function renderDrinkStation() {
        const data = window.ARS_DATA;
        if (!data) {
            drinkGrid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;">Loading drink data...</p>';
            return;
        }

        let html = '';
        let visibleCount = 0;

        data.categories.forEach(category => {
            const catId = category.id;

            if (currentCategory !== 'all' && currentCategory !== catId) return;

            let catDrinks = [];
            category.subcategories.forEach(sub => {
                sub.drinks.forEach(drink => {
                    catDrinks.push({ ...drink, subcategory: sub.name });
                });
            });

            if (searchQuery) {
                catDrinks = catDrinks.filter(d => matchesSearch(d, searchQuery));
            }

            if (catDrinks.length === 0) return;

            html += `
                <div class="category-header reveal">
                    <div class="category-header-emoji">${category.emoji}</div>
                    <div class="category-header-text">
                        <h2>${category.name}</h2>
                        <p>${category.tagline}</p>
                    </div>
                </div>
            `;

            let currentSub = '';
            catDrinks.forEach(drink => {
                if (drink.subcategory !== currentSub) {
                    currentSub = drink.subcategory;
                    html += `
                        <div class="subcategory-header reveal">
                            <h3>${currentSub}</h3>
                        </div>
                    `;
                }

                html += renderDrinkCard(drink, catId);
                visibleCount++;
            });
        });

        drinkGrid.innerHTML = html;
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        drinkGrid.style.display = visibleCount === 0 ? 'none' : 'grid';

        bindCardClicks();
        observeElements();
    }

    function renderFoodStation() {
        const data = window.ARS_FOOD_DATA;
        if (!data) {
            drinkGrid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;">Loading food data...</p>';
            return;
        }

        let html = '';
        let visibleCount = 0;

        data.categories.forEach(category => {
            const catId = category.id;

            if (currentCategory !== 'all' && currentCategory !== catId) return;

            let catRecipes = data.recipes.filter(r => r.categoryId === catId);

            if (searchQuery) {
                catRecipes = catRecipes.filter(r => matchesFoodSearch(r, searchQuery));
            }

            if (catRecipes.length === 0) return;

            html += `
                <div class="category-header reveal">
                    <div class="category-header-emoji">${category.emoji}</div>
                    <div class="category-header-text">
                        <h2>${category.name}</h2>
                        <p>${category.tagline}</p>
                    </div>
                </div>
            `;

            catRecipes.forEach(recipe => {
                html += renderFoodCard(recipe);
                visibleCount++;
            });
        });

        drinkGrid.innerHTML = html;
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        drinkGrid.style.display = visibleCount === 0 ? 'none' : 'grid';

        bindCardClicks();
        observeElements();
    }

    function renderDrinkCard(drink, catId) {
        const hasRecipe = drink.ingredients && drink.ingredients.length > 0;
        const badgeText = hasRecipe ? '📖 Full Recipe' : `${getCategoryLabel(catId)}`;
        const badgeClass = hasRecipe ? 'has-recipe' : '';

        return `
            <div class="drink-card reveal" data-drink-id="${drink.id}" style="--card-accent: ${drink.colorAccent};">
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

    function renderFoodCard(recipe) {
        const hasRecipe = recipe.steps && recipe.steps.length > 0;
        const badgeText = hasRecipe ? '📖 Full Recipe' : '📋 Quick Formula';
        const badgeClass = hasRecipe ? 'has-recipe' : '';
        const priceText = recipe.prices.join(' / ');

        return `
            <div class="drink-card reveal" data-drink-id="${recipe.id}" style="--card-accent: ${recipe.colorAccent};">
                <div class="drink-card-top">
                    <span class="drink-number">#${String(recipe.id).substring(1)}</span>
                    <span class="drink-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="drink-card-body">
                    <h3>${recipe.name}</h3>
                    <p class="drink-card-mix" style="color:var(--accent-green);font-weight:700;margin-bottom:8px;">${priceText}</p>
                    <p class="drink-card-mix">${recipe.quickMix}</p>
                </div>
                <div class="drink-card-footer">
                    <div class="drink-color-dot" style="background: ${recipe.colorAccent}; box-shadow: 0 0 8px ${recipe.colorAccent};"></div>
                    <span class="drink-view-btn">
                        View Recipe
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
            </div>
        `;
    }

    function bindCardClicks() {
        drinkGrid.querySelectorAll('.drink-card').forEach(card => {
            card.addEventListener('click', () => {
                const itemId = parseInt(card.dataset.drinkId);
                openDrinkModal(itemId);
            });
        });
    }

    function matchesFoodSearch(recipe, query) {
        const q = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(q) ||
            recipe.quickMix.toLowerCase().includes(q) ||
            (recipe.description && recipe.description.toLowerCase().includes(q)) ||
            (recipe.ingredients && recipe.ingredients.some(i => i.toLowerCase().includes(q)))
        );
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
        const isFood = (drinkId > 100);
        const item = isFood ? findFoodById(drinkId) : findDrinkById(drinkId);
        if (!item) return;

        const hasDetailedRecipe = item.ingredients && item.ingredients.length > 0;

        // Set header
        const formattedId = isFood ? `#${String(item.id).substring(1)}` : `#${String(item.id).padStart(2, '0')}`;
        document.getElementById('modal-badge').textContent = `${formattedId} — ${item.name}`;
        document.getElementById('modal-title').textContent = item.name;
        
        if (isFood) {
            document.getElementById('modal-subtitle').innerHTML = `<span style="color:var(--accent-green);font-weight:700;">Price: ${item.prices.join(' / ')}</span>`;
            document.getElementById('modal-subtitle').style.display = 'block';
            document.getElementById('modal-quick-mix').innerHTML = `<strong>Concept:</strong> ${item.quickMix}`;
        } else {
            document.getElementById('modal-subtitle').textContent = item.subtitle || '';
            document.getElementById('modal-subtitle').style.display = item.subtitle ? 'block' : 'none';
            document.getElementById('modal-quick-mix').innerHTML = `<strong>Quick Mix:</strong> ${item.quickMix}`;
        }

        // Set accent color
        document.querySelector('.modal-header').style.setProperty('--modal-accent-color', hexToRgba(item.colorAccent, 0.15));

        const tabsContainer = document.getElementById('modal-tabs');
        const panels = {
            ingredients: document.getElementById('panel-ingredients'),
            steps: document.getElementById('panel-steps'),
            notes: document.getElementById('panel-notes'),
            hacks: document.getElementById('panel-hacks'),
            kids: document.getElementById('panel-kids'),
            basic: document.getElementById('panel-basic'),
        };

        // Clear all timers for previous item
        clearAllTimers();

        // Render Tabs dynamically
        renderModalTabs(isFood);

        if (hasDetailedRecipe) {
            tabsContainer.style.display = 'flex';
            panels.basic.style.display = 'none';

            if (isFood) {
                renderFoodPanels(item, panels);
            } else {
                renderDrinkPanels(item, panels);
            }

            // Set first tab active
            setActiveTab('ingredients');

            // Bind timer buttons
            bindTimerButtons(item);
        } else {
            tabsContainer.style.display = 'none';
            Object.keys(panels).forEach(key => {
                if (key !== 'basic') panels[key].classList.remove('active');
                panels[key].style.display = key === 'basic' ? 'block' : 'none';
            });

            panels.basic.innerHTML = `
                <div class="basic-info-panel">
                    <div class="basic-info-icon">${isFood ? '🍳' : '🍹'}</div>
                    <p class="basic-info-text">Detailed recipe coming soon!</p>
                    <div class="basic-info-mix">
                        <h4>Formula / Description</h4>
                        <p>${item.quickMix}</p>
                    </div>
                </div>
            `;
            panels.basic.style.display = 'block';
        }

        // Open modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function renderModalTabs(isFood) {
        const tabsContainer = document.getElementById('modal-tabs');
        if (isFood) {
            tabsContainer.innerHTML = `
                <button class="modal-tab active" data-tab="ingredients">🧪 Ingredients & Portion</button>
                <button class="modal-tab" data-tab="steps">📋 Steaming/Fry Steps</button>
                <button class="modal-tab" data-tab="notes">💰 Cost & Margins</button>
                <button class="modal-tab" data-tab="hacks">💡 Hacks & Secrets</button>
                <button class="modal-tab" data-tab="kids">🛡️ Storage & Waste</button>
            `;
        } else {
            tabsContainer.innerHTML = `
                <button class="modal-tab active" data-tab="ingredients">🧪 Ingredients</button>
                <button class="modal-tab" data-tab="steps">📋 Steps</button>
                <button class="modal-tab" data-tab="notes">⚠️ Notes</button>
                <button class="modal-tab" data-tab="hacks">💡 Hacks</button>
                <button class="modal-tab" data-tab="kids">👶 Kids</button>
            `;
        }
    }

    function renderDrinkPanels(drink, panels) {
        panels.ingredients.innerHTML = renderIngredients(drink.ingredients);
        panels.steps.innerHTML = renderSteps(drink);
        panels.notes.innerHTML = drink.notes ? renderNotes(drink.notes) : '<p class="basic-info-text">No specific notes for this drink.</p>';
        panels.hacks.innerHTML = drink.hacks ? renderHacks(drink.hacks) : '<p class="basic-info-text">No hacks available yet.</p>';
        panels.kids.innerHTML = drink.kidsVersion ? renderKidsVersion(drink.kidsVersion) : '<p class="basic-info-text">No kids version available yet.</p>';
    }

    function renderFoodPanels(food, panels) {
        let ingHtml = '';
        if (food.description) {
            ingHtml += `<p class="basic-info-text" style="font-size:14px;margin-bottom:var(--space-md);line-height:1.6;color:var(--text-secondary);">${food.description.replace(/\n/g, '<br>')}</p>`;
        }
        if (food.portionControl) {
            ingHtml += `
                <div class="info-callout">
                    <div class="info-callout-title">📏 Portion Control Matrix</div>
                    <div class="info-callout-text">${food.portionControl.replace(/\n/g, '<br>')}</div>
                </div>
            `;
        }
        ingHtml += '<h4 style="margin-top:var(--space-md);margin-bottom:var(--space-sm);font-weight:700;">Ingredient Base & Batter ratios:</h4>';
        ingHtml += renderIngredients(food.ingredients);
        panels.ingredients.innerHTML = ingHtml;

        panels.steps.innerHTML = renderSteps(food);
        panels.notes.innerHTML = renderCostTable(food.costBreakdown);
        panels.hacks.innerHTML = renderFoodHacks(food.hacks);

        let storageHtml = '';
        if (food.storageAndWaste) {
            storageHtml += `
                <div class="note-list">
                    <div class="note-item">
                        <span class="note-icon">🛡️</span>
                        <p class="note-text" style="line-height:1.7;">${food.storageAndWaste.replace(/\n\n/g, '</p></div><div class="note-item"><span class="note-icon">🛡️</span><p class="note-text" style="line-height:1.7;">').replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `;
        } else {
            storageHtml = '<p class="basic-info-text">No storage protocols documented.</p>';
        }
        panels.kids.innerHTML = storageHtml;
    }

    function renderFoodHacks(hacks) {
        if (!hacks || hacks.length === 0) {
            return '<p class="basic-info-text">No operational hacks documented.</p>';
        }

        let html = '<div class="hack-list">';
        hacks.forEach(hack => {
            html += `
                <div class="hack-item">
                    <div class="hack-top">
                        <span class="hack-icon">💡</span>
                        <span class="hack-title">${hack.title}</span>
                    </div>
                    <p class="hack-text">${hack.text}</p>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    function renderCostTable(costLines) {
        if (!costLines || costLines.length === 0) {
            return '<p class="basic-info-text">No commercial cost breakdown available.</p>';
        }

        let tableHtml = '<div class="cost-table-container"><table class="cost-table">';
        let hasHeader = false;

        costLines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed === '') return;

            let cols = [];
            if (trimmed.includes('|')) {
                cols = trimmed.split('|').map(c => c.trim()).filter((c, idx, arr) => {
                    return c !== '' || (idx !== 0 && idx !== arr.length - 1);
                });
                if (cols.length > 0 && cols[0].match(/^:?-+:?$/)) {
                    return;
                }
            } else if (trimmed.includes('\t')) {
                cols = trimmed.split('\t').map(c => c.trim());
            } else {
                cols = trimmed.split(/\s{2,}/).map(c => c.trim());
            }

            if (cols.length === 0) return;

            let rowClass = '';
            const lowerFirstCol = cols[0].toLowerCase();
            if (lowerFirstCol.includes('total') || lowerFirstCol.includes('production cost')) {
                rowClass = 'total-row';
            } else if (lowerFirstCol.includes('gross profit') || lowerFirstCol.includes('margin')) {
                rowClass = 'margin-row';
            } else if (lowerFirstCol.includes('food cost percentage') || lowerFirstCol.includes('food cost')) {
                rowClass = 'foodcost-row';
            }

            if (!hasHeader) {
                tableHtml += '<thead><tr>';
                cols.forEach(col => {
                    tableHtml += `<th>${col}</th>`;
                });
                tableHtml += '</tr></thead><tbody>';
                hasHeader = true;
            } else {
                tableHtml += `<tr class="${rowClass}">`;
                cols.forEach(col => {
                    tableHtml += `<td>${col}</td>`;
                });
                tableHtml += '</tr>';
            }
        });

        tableHtml += '</tbody></table></div>';
        return tableHtml;
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

    // ── Find Recipe ────────────────────────────────────
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

    function findFoodById(id) {
        const data = window.ARS_FOOD_DATA;
        if (!data) return null;
        return data.recipes.find(r => r.id === id);
    }

    // ── Operational Framework ──────────────────────────
    function renderOperationalFramework() {
        if (currentStation === 'drinks') {
            const data = window.ARS_DATA;
            if (!data || !data.operationalFramework) return;
            const ops = data.operationalFramework;
            
            document.querySelector('.ops-title').innerHTML = `<span class="ops-title-icon">💡</span> Operational Framework for the Station`;
            
            const cards = document.querySelectorAll('.ops-card');
            if (cards.length >= 3) {
                cards[0].querySelector('.ops-card-icon').textContent = '🧊';
                cards[0].querySelector('h3').textContent = 'The Ice Staircase Rule';
                cards[0].querySelector('p').textContent = ops.iceStaircaseRule;
                
                cards[1].querySelector('.ops-card-icon').textContent = '🍫';
                cards[1].querySelector('h3').textContent = 'Garnishes & Add-ons';
                cards[1].querySelector('p').textContent = ops.garnishesAndAddons;
                
                cards[2].querySelector('.ops-card-icon').textContent = '📸';
                cards[2].querySelector('h3').textContent = 'The Instagram Directive';
                cards[2].querySelector('p').textContent = ops.instagramDirective;
            }
        } else {
            document.querySelector('.ops-title').innerHTML = `<span class="ops-title-icon">🍳</span> Commercial Operational Framework`;
            
            const cards = document.querySelectorAll('.ops-card');
            if (cards.length >= 3) {
                cards[0].querySelector('.ops-card-icon').textContent = '🌶️';
                cards[0].querySelector('h3').textContent = 'The Master Gravy Rule';
                cards[0].querySelector('p').textContent = "By engineering one base 'Master Chilli Gravy', your line cook only needs to ladle the base into a hot wok, drop in the flash-fried protein, and toss. This locks in 60%+ margins and reduces ticket times to under 3 minutes.";
                
                cards[1].querySelector('.ops-card-icon').textContent = '🔥';
                cards[1].querySelector('h3').textContent = 'The 2.5L Fryer Warning';
                cards[1].querySelector('p').textContent = "Never dump cold raw ingredients or a full portion into the compact 2.5L fryer all at once. The oil temperature will collapse, making the batter soggy and slide off. Always drop pieces individually and fry in split, rapid back-to-back batches.";
                
                cards[2].querySelector('.ops-card-icon').textContent = '🛡️';
                cards[2].querySelector('h3').textContent = 'Zero-Waste Prep Protocol';
                cards[2].querySelector('p').textContent = "Never mix raw proteins, vegetables, salt, and flours in bulk for storage. Keep pre-cut raw ingredients dry in the chiller and only combine a single portion with the flour/batter when the order ticket prints. Upcycle unsold cooked items.";
            }
        }
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
        // Category tabs are bound dynamically inside renderCategoryTabs()

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

    // ── Scroll Reveal Observer ────────────────────────
    function initRevealObserver() {
        if ('IntersectionObserver' in window) {
            revealObserver = new IntersectionObserver((entries, observer) => {
                let delay = 0;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        // Set stagger delay if multiple elements intersect at once
                        target.style.transitionDelay = `${delay}ms`;
                        target.classList.add('revealed');
                        
                        // Clean up reveal classes and styles on transition completion
                        const onTransitionEnd = (e) => {
                            if (e.propertyName === 'transform' || e.propertyName === 'opacity') {
                                cleanup();
                            }
                        };
                        const cleanup = () => {
                            target.classList.remove('reveal', 'revealed');
                            target.style.transitionDelay = '';
                            target.removeEventListener('transitionend', onTransitionEnd);
                            clearTimeout(timeoutId);
                        };
                        const timeoutId = setTimeout(cleanup, 800); // 700ms transition + 100ms safety
                        target.addEventListener('transitionend', onTransitionEnd);
                        
                        // Stop observing this element
                        observer.unobserve(target);
                        delay += 40; // Increment delay for stagger effect
                    }
                });
            }, {
                root: null, // use viewport
                rootMargin: '0px 0px -40px 0px', // start transition slightly before entering viewport
                threshold: 0.1 // 10% visible
            });
        }
    }

    function observeElements() {
        if (!revealObserver) return;
        
        // Target all unrevealed elements
        const elements = document.querySelectorAll('.reveal:not(.revealed)');
        elements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ── Boot ───────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
