// 'quizData' is available globally from quiz_data_fr.js

// ========== PERSISTENCE ==========
const STORAGE_KEY = 'ccna3_quiz_stats';
const DEFAULT_LANGUAGE_KEY = 'ccna3_quiz_default_language';
const labels = {
    en: {
        checkAnswer: 'Check Answer',
        explanation: 'Explanation:',
        matchItems: '(Match items)',
        noExplanation: 'No explanation provided.',
        selectAnswer: 'Please select an answer.',
        selectCount: count => `(Select ${count})`,
        language: 'FR'
    },
    fr: {
        checkAnswer: 'Vérifier la réponse',
        explanation: 'Explication :',
        matchItems: '(Associer les éléments)',
        noExplanation: 'Aucune explication fournie.',
        selectAnswer: 'Veuillez sélectionner une réponse.',
        selectCount: count => `(Sélection ${count})`,
        language: 'EN'
    }
};

let defaultLanguage = localStorage.getItem(DEFAULT_LANGUAGE_KEY) || 'fr';
const questionLanguageOverrides = {};

function getQuestionLocale(q, lang) {
    return q.i18n?.[lang] || null;
}

function getField(q, field, lang) {
    const localized = getQuestionLocale(q, lang);
    if (localized?.[field] !== undefined) return localized[field];
    return q[field] || '';
}

function getOptionText(q, originalIndex, lang) {
    const localized = getQuestionLocale(q, lang);
    if (localized?.options?.[originalIndex] !== undefined) {
        return localized.options[originalIndex];
    }
    return q.options[originalIndex] || '';
}

function getPairSideText(q, pairIndex, side, lang) {
    const localized = getQuestionLocale(q, lang);
    if (localized?.pairs?.[pairIndex]?.[side] !== undefined) {
        return localized.pairs[pairIndex][side];
    }
    return q.pairs[pairIndex]?.[side] || '';
}

function getRightText(q, rootRight, lang) {
    const pairIndex = q.pairs.findIndex(p => p.right === rootRight);
    if (pairIndex >= 0) return getPairSideText(q, pairIndex, 'right', lang);
    return rootRight;
}

function getDistractorText(q, side, index, rootText, lang) {
    const localized = getQuestionLocale(q, lang);
    const key = side === 'left' ? 'distractors_left' : 'distractors_right';
    const fallbackKey = side === 'right' ? 'distractors' : key;

    if (localized?.[key]?.[index] !== undefined) return localized[key][index];
    if (localized?.[fallbackKey]?.[index] !== undefined) return localized[fallbackKey][index];

    return rootText;
}

function getQuestionLanguage(qIndex) {
    return questionLanguageOverrides[qIndex] || defaultLanguage;
}

function getLabel(lang, key) {
    return labels[lang]?.[key] || labels.en[key];
}

function loadStats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function saveStats(questionStats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questionStats));
}

function getQuestionStats(questionId) {
    const allStats = loadStats();
    return allStats[questionId] || { attempts: 0, correct: 0 };
}

function recordAnswer(questionId, isCorrect) {
    const allStats = loadStats();
    if (!allStats[questionId]) {
        allStats[questionId] = { attempts: 0, correct: 0 };
    }
    allStats[questionId].attempts++;
    if (isCorrect) {
        allStats[questionId].correct++;
    }
    saveStats(allStats);
}

function getSuccessRate(questionId) {
    const stats = getQuestionStats(questionId);
    if (stats.attempts === 0) return -1; // Unanswered
    return stats.correct / stats.attempts;
}

// ========== FILTERING & SORTING ==========
let currentFilter = 'all';
let currentSort = 'default';
let filteredQuiz = [];

function applyFilterAndSort() {
    const allStats = loadStats();
    
    // Filter
    filteredQuiz = quizData.filter(q => {
        const stats = allStats[q.id] || { attempts: 0, correct: 0 };
        const rate = stats.attempts > 0 ? stats.correct / stats.attempts : -1;
        
        switch (currentFilter) {
            case 'struggling':
                return stats.attempts > 0 && rate < 0.5;
            case 'unanswered':
                return stats.attempts === 0;
            case 'learning':
                return stats.attempts > 0 && rate >= 0.5 && rate < 0.75;
            case 'mastered':
                return stats.attempts > 0 && rate >= 0.75;
            default:
                return true;
        }
    });
    
    // Sort
    if (currentSort === 'success-rate') {
        filteredQuiz.sort((a, b) => {
            const rateA = getSuccessRate(a.id);
            const rateB = getSuccessRate(b.id);
            // Unanswered (-1) goes to the end
            if (rateA === -1 && rateB === -1) return 0;
            if (rateA === -1) return 1;
            if (rateB === -1) return -1;
            return rateA - rateB; // Lowest first
        });
    } else {
        // Default: shuffle
        filteredQuiz = shuffle(filteredQuiz);
    }
    
    return filteredQuiz;
}

// ========== SESSION STATS ==========
let sessionStats = {
    correct: 0,
    wrong: 0,
    total: 0,
    answered: 0
};

const container = document.getElementById('quiz-container');
const elCorrect = document.getElementById('score-correct');
const elWrong = document.getElementById('score-wrong');
const elRemaining = document.getElementById('score-remaining');
const elPercentage = document.getElementById('score-percentage');
const elAnsweredPercentage = document.getElementById('score-answered-percentage');
const elProgress = document.getElementById('progress-fill');

// Fisher-Yates shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function init() {
    renderControls();
    applyFilterAndSort();
    sessionStats.total = filteredQuiz.length;
    updateScoreboard();
    renderQuestions();
}

function renderControls() {
    const controlsHtml = `
        <div class="controls">
            <div class="filter-group">
                <label>Filter:</label>
                <select id="filter-select" onchange="changeFilter(this.value)">
                    <option value="all">All (${quizData.length})</option>
                    <option value="struggling">Struggling (&lt;50%)</option>
                    <option value="learning">Learning (50% - 74%)</option>
                    <option value="unanswered">Unanswered</option>
                    <option value="mastered">Mastered (≥75%)</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Sort:</label>
                <select id="sort-select" onchange="changeSort(this.value)">
                    <option value="default">Random</option>
                    <option value="success-rate">Success Rate (Low→High)</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Language:</label>
                <select id="language-select" onchange="changeDefaultLanguage(this.value)">
                    <option value="fr" ${defaultLanguage === 'fr' ? 'selected' : ''}>Français</option>
                    <option value="en" ${defaultLanguage === 'en' ? 'selected' : ''}>English</option>
                </select>
            </div>
            <button class="btn-reset" onclick="resetStats()">Reset All Stats</button>
        </div>
    `;
    container.insertAdjacentHTML('beforebegin', controlsHtml);
    updateFilterCounts();
}

function updateFilterCounts() {
    const allStats = loadStats();
    let countAll = quizData.length;
    let countStruggling = 0;
    let countLearning = 0;
    let countUnanswered = 0;
    let countMastered = 0;
    
    quizData.forEach(q => {
        const stats = allStats[q.id] || { attempts: 0, correct: 0 };
        const rate = stats.attempts > 0 ? stats.correct / stats.attempts : -1;
        
        if (stats.attempts === 0) countUnanswered++;
        else if (rate < 0.5) countStruggling++;
        else if (rate >= 0.75) countMastered++;
        else countLearning++;
    });
    
    const select = document.getElementById('filter-select');
    if (select) {
        select.options[0].text = `All (${countAll})`;
        select.options[1].text = `Struggling <50% (${countStruggling})`;
        select.options[2].text = `Learning 50-74% (${countLearning})`;
        select.options[3].text = `Unanswered (${countUnanswered})`;
        select.options[4].text = `Mastered ≥75% (${countMastered})`;
    }
}

window.changeFilter = function(value) {
    currentFilter = value;
    reloadQuiz();
};

window.changeSort = function(value) {
    currentSort = value;
    reloadQuiz();
};

window.changeDefaultLanguage = function(value) {
    defaultLanguage = value;
    localStorage.setItem(DEFAULT_LANGUAGE_KEY, value);

    Object.keys(questionLanguageOverrides).forEach(key => {
        delete questionLanguageOverrides[key];
    });

    reloadQuiz();
};

window.resetStats = function() {
    if (confirm('Are you sure you want to reset all statistics? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        reloadQuiz();
    }
};

function reloadQuiz() {
    container.innerHTML = '';
    applyFilterAndSort();
    sessionStats = {
        correct: 0,
        wrong: 0,
        total: filteredQuiz.length,
        answered: 0
    };
    updateScoreboard();
    updateFilterCounts();
    renderQuestions();
}

function updateScoreboard() {
    elCorrect.textContent = sessionStats.correct;
    elWrong.textContent = sessionStats.wrong;
    elRemaining.textContent = sessionStats.total - sessionStats.answered;

    const percentage = sessionStats.total > 0 ? (sessionStats.answered / sessionStats.total) * 100 : 0;
    elProgress.style.width = `${percentage}%`;
    
    // Score total: correct answers divided by all questions in the current filter.
    const totalPct = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;
    elPercentage.textContent = `${totalPct}%`;
    elPercentage.className = totalPct >= 70 ? 'pct-good' : 'pct-bad';

    // Success rate only on answered questions.
    if (sessionStats.answered > 0) {
        const answeredPct = Math.round((sessionStats.correct / sessionStats.answered) * 100);
        elAnsweredPercentage.textContent = `${answeredPct}%`;
        elAnsweredPercentage.className = answeredPct >= 70 ? 'pct-good' : 'pct-bad';
    } else {
        elAnsweredPercentage.textContent = '0%';
        elAnsweredPercentage.className = 'pct-bad';
    }
}

function renderQuestions() {
    if (filteredQuiz.length === 0) {
        container.innerHTML = '<div class="no-questions">No questions match this filter.</div>';
        return;
    }
    
    filteredQuiz.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `q-${index}`;
        card.dataset.questionId = q.id;

        // Check question type
        if (q.type === 'matching') {
            renderMatchingQuestion(card, q, index);
        } else {
            renderMultipleChoice(card, q, index);
        }

        container.appendChild(card);
    });
}

function getStatsHtml(questionId) {
    const stats = getQuestionStats(questionId);
    if (stats.attempts === 0) {
        return '<span class="q-stats unanswered">New</span>';
    }
    const rate = Math.round((stats.correct / stats.attempts) * 100);
    let className = 'neutral';
    if (rate >= 75) className = 'mastered';
    else if (rate < 50) className = 'struggling';
    return `<span class="q-stats ${className}">${stats.correct}/${stats.attempts}</span>`;
}

// ========== MULTIPLE CHOICE RENDERER ==========
function renderMultipleChoice(card, q, index) {
    const lang = getQuestionLanguage(index);
    const correctCount = q.correct.length;
    const isMulti = correctCount > 1;
    const inputType = isMulti ? 'multi' : 'single';
    const typeText = getLabel(lang, 'selectCount')(correctCount);

    const optionsWithMeta = q.options.map((opt, i) => ({
        text: opt,
        originalIndex: i,
        wasCorrect: q.correct.includes(i)
    }));
    const shuffledOptions = shuffle(optionsWithMeta);

    const newCorrectIndices = [];
    shuffledOptions.forEach((opt, i) => {
        if (opt.wasCorrect) newCorrectIndices.push(i);
    });

    let imagesHtml = '';
    q.images.forEach(src => {
        imagesHtml += `<img src="${src}" class="q-img" loading="lazy">`;
    });

    let optionsHtml = '';
    shuffledOptions.forEach((opt, optIndex) => {
        optionsHtml += `<li class="option" data-idx="${optIndex}" data-original-index="${opt.originalIndex}" onclick="selectOption(this)">${getOptionText(q, opt.originalIndex, lang)}</li>`;
    });

    card.dataset.lang = lang;
    card.dataset.questionIndex = index;
    card.innerHTML = `
        <div class="q-header">
            <span class="q-title">${getField(q, 'title', lang)}</span>
            <div class="q-meta">
                ${getStatsHtml(q.id)}
                <span class="q-hint">${typeText}</span>
                <button class="btn-lang" type="button" onclick="toggleQuestionLanguage(${index})">${getLabel(lang, 'language')}</button>
            </div>
        </div>
        <div class="q-text">${getField(q, 'text', lang)}</div>
        ${imagesHtml}
        
        <ul class="options" id="opt-list-${index}" data-type="${inputType}" data-correct="${JSON.stringify(newCorrectIndices)}">
            ${optionsHtml}
        </ul>
        
        <button class="btn-check" onclick="checkAnswer(${index})">${getLabel(lang, 'checkAnswer')}</button>
        <div class="explanation" id="exp-${index}">
            <strong>${getLabel(lang, 'explanation')}</strong><br>
            ${getField(q, 'explanation', lang) || getLabel(lang, 'noExplanation')}
        </div>
    `;
}

// ========== MATCHING QUESTION RENDERER ==========
function renderMatchingQuestion(card, q, index) {
    const lang = getQuestionLanguage(index);
    const shuffledLeft = shuffle(q.pairs.map((p, i) => ({ text: p.left, originalIndex: i, correctRight: p.right })));
    
    // Get unique right values only
    const uniqueRights = [...new Set(q.pairs.map(p => p.right))];
    const shuffledRight = shuffle(uniqueRights.map((text, i) => ({ text: text, originalIndex: i })));
    
    const rightDistractors = q.distractors_right || q.distractors || [];
    if (rightDistractors.length > 0) {
        rightDistractors.forEach((d, distractorIndex) => {
            shuffledRight.push({ text: d, originalIndex: -1, distractorIndex });
        });
        const reshuffledRight = shuffle(shuffledRight);
        shuffledRight.length = 0;
        reshuffledRight.forEach(item => shuffledRight.push(item));
    }
    
    const leftDistractors = q.distractors_left || [];
    if (leftDistractors.length > 0) {
        leftDistractors.forEach((d, distractorIndex) => {
            shuffledLeft.push({ text: d, originalIndex: -2, correctRight: null, distractorIndex });
        });
        const reshuffledLeft = shuffle(shuffledLeft);
        shuffledLeft.length = 0;
        reshuffledLeft.forEach(item => shuffledLeft.push(item));
    }

    // Build correct mapping: leftShuffledIndex -> rightShuffledIndex (by matching text)
    const correctMapping = {};
    shuffledLeft.forEach((leftItem, leftIdx) => {
        if (leftItem.originalIndex < 0) return; // Skip distractors
        const rightIdx = shuffledRight.findIndex(r => r.text === leftItem.correctRight);
        correctMapping[leftIdx] = rightIdx;
    });
    
    const leftDistractorIndices = [];
    shuffledLeft.forEach((item, idx) => {
        if (item.originalIndex === -2) leftDistractorIndices.push(idx);
    });

    let leftHtml = '';
    shuffledLeft.forEach((item, idx) => {
        const isDistractor = item.originalIndex === -2;
        const displayText = isDistractor ? getDistractorText(q, 'left', item.distractorIndex ?? idx, item.text, lang) : getPairSideText(q, item.originalIndex, 'left', lang);
        leftHtml += `<div class="match-item match-left ${isDistractor ? 'is-distractor' : ''}" data-idx="${idx}" data-original-index="${item.originalIndex}" data-distractor-index="${item.distractorIndex ?? ''}" data-english-text="${item.text.replace(/"/g, '&quot;')}" data-distractor="${isDistractor}" onclick="selectMatchLeft(this, ${index})">${displayText}</div>`;
    });

    let rightHtml = '';
    shuffledRight.forEach((item, idx) => {
        const isDistractor = item.originalIndex === -1;
        const displayText = isDistractor ? getDistractorText(q, 'right', item.distractorIndex ?? idx, item.text, lang) : getRightText(q, item.text, lang);
        rightHtml += `<div class="match-item match-right ${isDistractor ? 'is-distractor' : ''}" data-idx="${idx}" data-distractor-index="${item.distractorIndex ?? ''}" data-english-text="${item.text.replace(/"/g, '&quot;')}" data-distractor="${isDistractor}" onclick="selectMatchRight(this, ${index})">${displayText}</div>`;
    });

    card.dataset.lang = lang;
    card.dataset.questionIndex = index;
    card.innerHTML = `
        <div class="q-header">
            <span class="q-title">${getField(q, 'title', lang)}</span>
            <div class="q-meta">
                ${getStatsHtml(q.id)}
                <span class="q-hint">${getLabel(lang, 'matchItems')}</span>
                <button class="btn-lang" type="button" onclick="toggleQuestionLanguage(${index})">${getLabel(lang, 'language')}</button>
            </div>
        </div>
        <div class="q-text">${getField(q, 'text', lang)}</div>
        
        <div class="match-container" id="match-${index}" data-correct='${JSON.stringify(correctMapping)}' data-left-distractors='${JSON.stringify(leftDistractorIndices)}'>
            <div class="match-column match-column-left">
                ${leftHtml}
            </div>
            <div class="match-lines" id="lines-${index}"></div>
            <div class="match-column match-column-right">
                ${rightHtml}
            </div>
        </div>
        
        <div class="match-status" id="status-${index}"></div>
        
        <button class="btn-check" onclick="checkMatchAnswer(${index})">${getLabel(lang, 'checkAnswer')}</button>
        <div class="explanation" id="exp-${index}">
            <strong>${getLabel(lang, 'explanation')}</strong><br>
            ${getField(q, 'explanation', lang) || getLabel(lang, 'noExplanation')}
        </div>
    `;

    card.dataset.userMatches = JSON.stringify({});
    card.dataset.selectedLeft = '';
}

window.toggleQuestionLanguage = function(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (!card) return;

    const q = filteredQuiz[qIndex];
    const nextLang = (card.dataset.lang || defaultLanguage) === 'en' ? 'fr' : 'en';
    questionLanguageOverrides[qIndex] = nextLang;
    card.dataset.lang = nextLang;

    card.querySelector('.q-title').innerHTML = getField(q, 'title', nextLang);
    card.querySelector('.q-text').innerHTML = getField(q, 'text', nextLang);
    card.querySelector('.q-hint').textContent = q.type === 'matching'
        ? getLabel(nextLang, 'matchItems')
        : getLabel(nextLang, 'selectCount')(q.correct.length);
    card.querySelector('.btn-lang').textContent = getLabel(nextLang, 'language');

    const checkButton = card.querySelector('.btn-check');
    if (checkButton) checkButton.textContent = getLabel(nextLang, 'checkAnswer');

    const exp = document.getElementById(`exp-${qIndex}`);
    if (exp) {
        exp.innerHTML = `<strong>${getLabel(nextLang, 'explanation')}</strong><br>${getField(q, 'explanation', nextLang) || getLabel(nextLang, 'noExplanation')}`;
    }

    if (q.type === 'matching') {
        card.querySelectorAll('.match-left').forEach(el => {
            const originalIndex = parseInt(el.dataset.originalIndex, 10);
            if (originalIndex >= 0) {
                el.innerHTML = getPairSideText(q, originalIndex, 'left', nextLang);
            } else {
                const distractorIndex = parseInt(el.dataset.distractorIndex || el.dataset.idx, 10);
                el.innerHTML = getDistractorText(q, 'left', distractorIndex, el.dataset.englishText, nextLang);
            }
        });

        card.querySelectorAll('.match-right').forEach(el => {
            if (el.dataset.distractor === 'true') {
                const distractorIndex = parseInt(el.dataset.distractorIndex || el.dataset.idx, 10);
                el.innerHTML = getDistractorText(q, 'right', distractorIndex, el.dataset.englishText, nextLang);
            } else {
                el.innerHTML = getRightText(q, el.dataset.englishText, nextLang);
            }
        });

        drawLines(qIndex);
    } else {
        card.querySelectorAll('.option').forEach(el => {
            const originalIndex = parseInt(el.dataset.originalIndex, 10);
            el.innerHTML = getOptionText(q, originalIndex, nextLang);
        });
    }
};

// ========== MATCHING INTERACTION ==========
let selectedLeft = {};

window.selectMatchLeft = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;

    const container = document.getElementById(`match-${qIndex}`);
    const leftItems = container.querySelectorAll('.match-left');
    
    leftItems.forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
    selectedLeft[qIndex] = el.dataset.idx;
};

window.selectMatchRight = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;
    
    if (selectedLeft[qIndex] === undefined || selectedLeft[qIndex] === '') return;

    const leftIdx = selectedLeft[qIndex];
    const rightIdx = el.dataset.idx;

    let userMatches = JSON.parse(card.dataset.userMatches);
    
    // Don't remove existing matches to this right item - allow many-to-one
    // Just update or add the match for this left item
    userMatches[leftIdx] = rightIdx;
    card.dataset.userMatches = JSON.stringify(userMatches);

    const container = document.getElementById(`match-${qIndex}`);
    container.querySelectorAll('.match-left').forEach(item => item.classList.remove('selected'));
    selectedLeft[qIndex] = '';

    drawLines(qIndex);
    updateMatchStatus(qIndex);
};

function drawLines(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const userMatches = JSON.parse(card.dataset.userMatches);

    linesContainer.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none';

    const containerRect = linesContainer.getBoundingClientRect();

    for (let leftIdx in userMatches) {
        const rightIdx = userMatches[leftIdx];
        const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
        const rightEl = container.querySelector(`.match-right[data-idx="${rightIdx}"]`);

        if (leftEl && rightEl) {
            const leftRect = leftEl.getBoundingClientRect();
            const rightRect = rightEl.getBoundingClientRect();

            const x1 = 0;
            const y1 = leftRect.top - containerRect.top + leftRect.height / 2;
            const x2 = containerRect.width;
            const y2 = rightRect.top - containerRect.top + rightRect.height / 2;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#3498db');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('data-left', leftIdx);
            line.setAttribute('data-right', rightIdx);

            svg.appendChild(line);
        }
    }

    linesContainer.appendChild(svg);
}

function updateMatchStatus(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const statusEl = document.getElementById(`status-${qIndex}`);
    const userMatches = JSON.parse(card.dataset.userMatches);
    const correctMapping = JSON.parse(container.dataset.correct);

    const totalPairs = Object.keys(correctMapping).length;
    const matchedPairs = Object.keys(userMatches).length;

    statusEl.textContent = `Matched: ${matchedPairs} / ${totalPairs}`;
}

window.checkMatchAnswer = function(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const questionId = parseInt(card.dataset.questionId);
    const container = document.getElementById(`match-${qIndex}`);
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${qIndex}`);

    const userMatches = JSON.parse(card.dataset.userMatches);
    const correctMapping = JSON.parse(container.dataset.correct);
    const leftDistractorIndices = JSON.parse(container.dataset.leftDistractors || '[]');

    const totalPairs = Object.keys(correctMapping).length;
    const matchedPairs = Object.keys(userMatches).length;

    if (matchedPairs < totalPairs) {
        alert((card.dataset.lang || defaultLanguage) === 'fr' ? `Veuillez associer les ${totalPairs} elements.` : `Please match all ${totalPairs} items.`);
        return;
    }

    card.classList.add('answered');

    let allCorrect = true;
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const svg = linesContainer.querySelector('svg');

    for (let leftIdx in correctMapping) {
        const expectedRight = correctMapping[leftIdx];
        const userRight = userMatches[leftIdx];
        const isCorrect = (userRight == expectedRight);

        if (svg) {
            const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
            if (line) {
                line.setAttribute('stroke', isCorrect ? '#28a745' : '#dc3545');
                line.setAttribute('stroke-width', '3');
            }
        }

        const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
        const rightEl = container.querySelector(`.match-right[data-idx="${userRight}"]`);

        if (isCorrect) {
            leftEl?.classList.add('match-correct');
            rightEl?.classList.add('match-correct');
        } else {
            allCorrect = false;
            leftEl?.classList.add('match-wrong');
            rightEl?.classList.add('match-wrong');
        }
    }

    for (let leftIdx in userMatches) {
        if (leftDistractorIndices.includes(parseInt(leftIdx))) {
            allCorrect = false;
            const rightIdx = userMatches[leftIdx];
            
            if (svg) {
                const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
                if (line) {
                    line.setAttribute('stroke', '#dc3545');
                    line.setAttribute('stroke-width', '3');
                }
            }
            
            const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
            const rightEl = container.querySelector(`.match-right[data-idx="${rightIdx}"]`);
            leftEl?.classList.add('match-wrong');
            rightEl?.classList.add('match-wrong');
        }
    }

    // Record to localStorage
    recordAnswer(questionId, allCorrect);
    
    // Update the stats display on this card
    const statsEl = card.querySelector('.q-stats');
    if (statsEl) {
        statsEl.outerHTML = getStatsHtml(questionId);
    }

    if (allCorrect) {
        sessionStats.correct++;
    } else {
        sessionStats.wrong++;
    }
    sessionStats.answered++;
    updateScoreboard();
    updateFilterCounts();

    exp.style.display = 'block';
    btn.style.display = 'none';
};

// ========== MULTIPLE CHOICE INTERACTION ==========
window.selectOption = function (el) {
    const list = el.parentElement;
    const card = el.closest('.card');

    if (card.classList.contains('answered')) return;

    const type = list.dataset.type;

    if (type === 'single') {
        const siblings = list.querySelectorAll('.option');
        siblings.forEach(opt => opt.classList.remove('selected'));
        el.classList.add('selected');
    } else {
        el.classList.toggle('selected');
    }
};

window.checkAnswer = function (index) {
    const card = document.getElementById(`q-${index}`);
    const questionId = parseInt(card.dataset.questionId);
    const list = document.getElementById(`opt-list-${index}`);
    const options = list.querySelectorAll('.option');
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${index}`);

    const correctIndices = JSON.parse(list.dataset.correct);

    const selectedIndices = [];
    options.forEach((opt, i) => {
        if (opt.classList.contains('selected')) {
            selectedIndices.push(i);
        }
    });

    if (selectedIndices.length === 0) {
        alert(getLabel(card.dataset.lang || defaultLanguage, 'selectAnswer'));
        return;
    }

    card.classList.add('answered');

    const correctSorted = [...correctIndices].sort().toString();
    const selectedSorted = [...selectedIndices].sort().toString();
    const isCorrect = (correctSorted === selectedSorted);

    // Record to localStorage
    recordAnswer(questionId, isCorrect);
    
    // Update the stats display on this card
    const statsEl = card.querySelector('.q-stats');
    if (statsEl) {
        statsEl.outerHTML = getStatsHtml(questionId);
    }

    if (isCorrect) {
        sessionStats.correct++;
    } else {
        sessionStats.wrong++;
    }
    sessionStats.answered++;
    updateScoreboard();
    updateFilterCounts();

    options.forEach((opt, i) => {
        if (correctIndices.includes(i)) {
            opt.classList.add('correct');
        } else if (opt.classList.contains('selected')) {
            opt.classList.add('wrong');
        }
    });

    exp.style.display = 'block';
    btn.style.display = 'none';
};

// Redraw lines on window resize
window.addEventListener('resize', () => {
    filteredQuiz.forEach((q, index) => {
        if (q.type === 'matching') {
            drawLines(index);
        }
    });
});

init();
