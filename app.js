// Recommended Microsoft Learn Courses
const RECOMMENDED_COURSES = [
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        description: "Get started with cloud concepts, core Azure services, management tools, security, and network monitoring.",
        url: "https://learn.microsoft.com/training/paths/azure-fundamentals/"
    },
    {
        title: "Fundamentals of Generative AI",
        description: "Understand the core concepts of generative artificial intelligence, large language models, and how to create AI applications responsibly.",
        url: "https://learn.microsoft.com/training/modules/fundamentals-generative-ai/"
    },
    {
        title: "Get Started with AI Fundamentals",
        description: "Explore standard machine learning, cognitive services, computer vision, and natural language processing concepts.",
        url: "https://learn.microsoft.com/training/modules/get-started-ai-fundamentals/"
    },
    {
        title: "Describe Cloud Concepts (AZ-900)",
        description: "Learn about cloud computing benefits, public/private/hybrid cloud models, and standard cloud service types.",
        url: "https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/"
    },
    {
        title: "GitHub Foundations",
        description: "Learn how to collaborate on code, manage repositories, track issues, and use GitHub Actions workflows.",
        url: "https://learn.microsoft.com/training/paths/github-foundations/"
    },
    {
        title: "Power Platform Fundamentals (PL-900)",
        description: "Explore the business value and product capabilities of Power Apps, Power Automate, and Power BI.",
        url: "https://learn.microsoft.com/training/paths/power-plat-fundamentals/"
    }
];

// Official Eligible Microsoft Targets for Preferred Visitors (23 Targets)
const ELIGIBLE_TARGETS = [
    { type: 'domain', pattern: 'azure.microsoft.com', title: 'Microsoft Azure', category: 'Cloud & AI', url: 'https://azure.microsoft.com' },
    { type: 'domain', pattern: 'blog.fabric.microsoft.com', title: 'Microsoft Fabric Blog', category: 'Fabric & Power Platform', url: 'https://blog.fabric.microsoft.com' },
    { type: 'domain', pattern: 'code.visualstudio.com', title: 'Visual Studio Code', category: 'Developer Tools', url: 'https://code.visualstudio.com' },
    { type: 'domain', pattern: 'community.fabric.microsoft.com', title: 'Fabric Community', category: 'Fabric & Power Platform', url: 'https://community.fabric.microsoft.com' },
    { type: 'domain', pattern: 'community.powerplatform.com', title: 'Power Platform Community', category: 'Fabric & Power Platform', url: 'https://community.powerplatform.com' },
    { type: 'domain', pattern: 'copilot.microsoft.com', title: 'Microsoft Copilot', category: 'Cloud & AI', url: 'https://copilot.microsoft.com' },
    { type: 'domain', pattern: 'developer.microsoft.com', title: 'Microsoft Developer Hub', category: 'Developer Tools', url: 'https://developer.microsoft.com' },
    { type: 'domain', pattern: 'devblogs.microsoft.com', title: 'Microsoft Developer Blogs', category: 'Developer Tools', url: 'https://devblogs.microsoft.com' },
    { type: 'domain', pattern: 'dotnet.microsoft.com', title: '.NET Developer Platform', category: 'Developer Tools', url: 'https://dotnet.microsoft.com' },
    { type: 'domain', pattern: 'events.microsoft.com', title: 'Microsoft Events', category: 'Student & Community', url: 'https://events.microsoft.com' },
    { type: 'domain', pattern: 'imaginecup.microsoft.com', title: 'Microsoft Imagine Cup', category: 'Student & Community', url: 'https://imaginecup.microsoft.com' },
    { type: 'domain', pattern: 'learn.microsoft.com', title: 'Microsoft Learn', category: 'Learning', url: 'https://learn.microsoft.com', note: 'Excludes Learn Plans (/plans/)' },
    { type: 'path', pattern: 'microsoft.com/insidetrack', title: 'Microsoft Inside Track', category: 'Cloud & AI', url: 'https://www.microsoft.com/insidetrack' },
    { type: 'path', pattern: 'microsoft.com/microsoft-365-copilot', title: 'Microsoft 365 Copilot', category: 'Cloud & AI', url: 'https://www.microsoft.com/microsoft-365-copilot' },
    { type: 'path', pattern: 'microsoft.com/microsoft-cloud/blog', title: 'Microsoft Cloud Blog', category: 'Cloud & AI', url: 'https://www.microsoft.com/microsoft-cloud/blog' },
    { type: 'path', pattern: 'microsoft.com/microsoft-copilot/for-individuals', title: 'Copilot for Individuals', category: 'Cloud & AI', url: 'https://www.microsoft.com/microsoft-copilot/for-individuals' },
    { type: 'path', pattern: 'microsoft.com/microsoft-fabric', title: 'Microsoft Fabric Overview', category: 'Fabric & Power Platform', url: 'https://www.microsoft.com/microsoft-fabric' },
    { type: 'path', pattern: 'microsoft.com/power-platform', title: 'Microsoft Power Platform', category: 'Fabric & Power Platform', url: 'https://www.microsoft.com/power-platform' },
    { type: 'path', pattern: 'microsoft.com/startups', title: 'Microsoft for Startups Founders Hub', category: 'Student & Community', url: 'https://www.microsoft.com/startups' },
    { type: 'domain', pattern: 'powerbi.microsoft.com', title: 'Microsoft Power BI', category: 'Fabric & Power Platform', url: 'https://powerbi.microsoft.com' },
    { type: 'domain', pattern: 'reactor.microsoft.com', title: 'Microsoft Reactor', category: 'Student & Community', url: 'https://reactor.microsoft.com' },
    { type: 'domain', pattern: 'studentambassadors.microsoft.com', title: 'Microsoft Student Ambassadors', category: 'Student & Community', url: 'https://studentambassadors.microsoft.com' },
    { type: 'domain', pattern: 'techcommunity.microsoft.com', title: 'Microsoft Tech Community', category: 'Student & Community', url: 'https://techcommunity.microsoft.com' }
];

// Application State
const state = {
    contributorId: 'studentamb_515349',
    checklist: {
        'discord-link': false,
        'azure-students': false,
        'tech-training': false,
        'first-activity': false
    },
    linksHistory: [],
    activities: [],
    theme: 'dark',
    directoryCategory: 'all',
    directorySearch: ''
};

// DOM Elements
const elements = {
    // Navigation
    menuItems: document.querySelectorAll('.menu-item'),
    sections: document.querySelectorAll('.dashboard-section'),
    themeBtn: document.getElementById('theme-btn'),

    // Stats
    statChecklist: document.getElementById('stat-checklist-completion'),
    barChecklist: document.getElementById('bar-checklist'),
    statLinks: document.getElementById('stat-links-generated'),
    statActivities: document.getElementById('stat-activities-logged'),
    statPoints: document.getElementById('stat-points'),
    milestonesPreview: document.getElementById('milestones-preview'),

    // Header & Eligibility Indicators
    ambassadorStatusBadge: document.getElementById('ambassador-status-badge'),
    ambassadorStatusText: document.getElementById('ambassador-status-text'),
    overviewEligibilityBanner: document.getElementById('overview-eligibility-banner'),
    eligibilityBannerTitle: document.getElementById('eligibility-banner-title'),
    eligibilityBannerDesc: document.getElementById('eligibility-banner-desc'),
    eligibilityBannerIcon: document.getElementById('eligibility-banner-icon'),

    // URL Builder
    configContributorId: document.getElementById('config-contributor-id'),
    contributorIdDisplay: document.getElementById('contributor-id-display'),
    inputUrl: document.getElementById('input-url'),
    btnGenerateUrl: document.getElementById('btn-generate-url'),
    generatorBox: document.getElementById('generator-result-box'),
    outputUrl: document.getElementById('output-url'),
    btnCopyUrl: document.getElementById('btn-copy-url'),
    linksHistoryBody: document.getElementById('links-history-body'),
    btnClearLinks: document.getElementById('btn-clear-links'),
    urlValidatorBox: document.getElementById('url-validator-box'),
    valTitleText: document.getElementById('val-title-text'),
    valFeedback: document.getElementById('val-feedback'),
    valBadges: document.getElementById('val-badges'),
    valPointsBadge: document.getElementById('val-points-badge'),

    // Eligibility Tab
    eligibilityStatusPill: document.getElementById('eligibility-status-pill'),
    eligibilityCriteriaContainer: document.getElementById('eligibility-criteria-container'),
    eligibilityTotalPoints: document.getElementById('eligibility-total-points'),
    directoryGridContainer: document.getElementById('directory-grid-container'),
    directorySearchInput: document.getElementById('directory-search-input'),
    directoryTabs: document.getElementById('directory-tabs'),
    dirContributorId: document.getElementById('dir-contributor-id'),
    ruleContributorIdCode: document.getElementById('rule-contributor-id-code'),
    testEligibilityUrl: document.getElementById('test-eligibility-url'),
    testEligibilityResult: document.getElementById('test-eligibility-result'),

    // Checklist
    chkItems: document.querySelectorAll('.chk-item'),

    // Activities
    formActivity: document.getElementById('form-activity'),
    activitiesBody: document.getElementById('activities-body'),
    btnExportJson: document.getElementById('btn-export-json'),
    btnImportTrigger: document.getElementById('btn-import-trigger'),
    importFileInput: document.getElementById('import-file-input'),

    // Toast
    toast: document.getElementById('toast')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromLocalStorage();
    setupNavigation();
    setupTheme();
    setupUrlBuilder();
    setupEligibilitySection();
    setupChecklist();
    setupActivityLogger();
    renderAll();
});

// Load State from LocalStorage
function loadStateFromLocalStorage() {
    const savedState = localStorage.getItem('mlsa_dashboard_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            if (parsed.contributorId) state.contributorId = parsed.contributorId;
            if (parsed.checklist) Object.assign(state.checklist, parsed.checklist);
            if (parsed.linksHistory) state.linksHistory = parsed.linksHistory;
            if (parsed.activities) state.activities = parsed.activities;
            if (parsed.theme) state.theme = parsed.theme;
        } catch (e) {
            console.error("Error parsing saved state from localStorage:", e);
        }
    }
}

// Save State to LocalStorage
function saveStateToLocalStorage() {
    localStorage.setItem('mlsa_dashboard_state', JSON.stringify(state));
}

// Navigation Handling
function setupNavigation() {
    elements.menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
}

function showSection(sectionId) {
    elements.sections = document.querySelectorAll('.dashboard-section');
    elements.menuItems = document.querySelectorAll('.menu-item');

    elements.sections.forEach(sec => {
        if (sec.id === sectionId) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });

    elements.menuItems.forEach(item => {
        if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Management
function setupTheme() {
    if (state.theme === 'light') {
        document.body.classList.add('light-theme');
        if (elements.themeBtn) elements.themeBtn.querySelector('span').textContent = 'Toggle Dark Mode';
    } else {
        document.body.classList.remove('light-theme');
        if (elements.themeBtn) elements.themeBtn.querySelector('span').textContent = 'Toggle Light Mode';
    }

    if (elements.themeBtn) {
        elements.themeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.remove('light-theme');
                state.theme = 'dark';
                elements.themeBtn.querySelector('span').textContent = 'Toggle Light Mode';
            } else {
                document.body.classList.add('light-theme');
                state.theme = 'light';
                elements.themeBtn.querySelector('span').textContent = 'Toggle Dark Mode';
            }
            saveStateToLocalStorage();
        });
    }
}

// URL Eligibility Core Verification Logic
function checkUrlEligibility(inputUrl) {
    if (!inputUrl || typeof inputUrl !== 'string') {
        return {
            eligible: false,
            rule: 'Empty Input',
            reason: 'Please enter a URL to check.',
            badgeClass: 'danger'
        };
    }

    let urlString = inputUrl.trim();
    if (!/^https?:\/\//i.test(urlString)) {
        urlString = 'https://' + urlString;
    }

    let urlObj;
    try {
        urlObj = new URL(urlString);
    } catch (e) {
        return {
            eligible: false,
            rule: 'Invalid Format',
            reason: 'Invalid URL syntax. Please enter a valid web address.',
            badgeClass: 'danger'
        };
    }

    const host = urlObj.hostname.toLowerCase();

    // Rule 5: Direct Microsoft URLs only (No shortened URLs or redirects)
    const shortenerHosts = [
        'aka.ms', 'bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly',
        'is.gd', 'buff.ly', 'cutt.ly', 'rebrand.ly', 'lnkd.in', 'linktr.ee'
    ];
    if (shortenerHosts.some(s => host === s || host.endsWith('.' + s))) {
        return {
            eligible: false,
            rule: 'Rule 5: Direct URLs Only',
            reason: `Shortened URL detected (${host}). Use direct Microsoft URLs. Shortened URLs or redirect links do not count toward Preferred Visitors.`,
            badgeClass: 'danger',
            isShortener: true
        };
    }

    // Strip language-locale segment (/en-us/, /fr-fr/, etc.)
    const cleanPath = urlObj.pathname.toLowerCase().replace(/^\/[a-z]{2}-[a-z]{2}(?=\/|$)/, '');

    // Rule 4: Microsoft Learn Plans restriction
    if (host === 'learn.microsoft.com' || host.endsWith('.learn.microsoft.com')) {
        if (cleanPath.startsWith('/plans') || cleanPath.startsWith('/plan') || urlObj.pathname.toLowerCase().includes('/plans/')) {
            return {
                eligible: false,
                rule: 'Rule 4: Learn Plans Restriction',
                reason: 'Microsoft Learn Plans do not count toward Preferred Visitors, even though this link is on learn.microsoft.com.',
                badgeClass: 'warning',
                isLearnPlan: true
            };
        }
    }

    // Rules 1 & 2: Match against the 23 eligible domains or paths
    const cleanHost = host.replace(/^www\./, '');

    for (const target of ELIGIBLE_TARGETS) {
        if (target.type === 'domain') {
            const targetDomain = target.pattern.toLowerCase();
            if (cleanHost === targetDomain || cleanHost.endsWith('.' + targetDomain)) {
                return {
                    eligible: true,
                    target,
                    rule: 'Rule 1: Domain Match',
                    matchedPattern: target.pattern,
                    reason: `Eligible! Any direct page on ${target.pattern} counts towards Preferred Visitors.`,
                    badgeClass: 'success',
                    pointsValue: 10
                };
            }
        } else if (target.type === 'path') {
            const [targetDomain, ...pathParts] = target.pattern.toLowerCase().split('/');
            const targetPath = '/' + pathParts.join('/');

            if (cleanHost === targetDomain || cleanHost.endsWith('.' + targetDomain)) {
                if (cleanPath === targetPath || cleanPath.startsWith(targetPath + '/') || cleanPath.startsWith(targetPath)) {
                    return {
                        eligible: true,
                        target,
                        rule: 'Rule 2: Path Match',
                        matchedPattern: target.pattern,
                        reason: `Eligible! Direct page under ${target.pattern} counts towards Preferred Visitors.`,
                        badgeClass: 'success',
                        pointsValue: 10
                    };
                }
            }
        }
    }

    // Rule 3: Unlisted Exclusions
    return {
        eligible: false,
        rule: 'Rule 3: Unlisted Exclusion',
        reason: `The domain or path (${cleanHost}) is not on the official Microsoft eligible list, so it does not count.`,
        badgeClass: 'danger'
    };
}

// Points Calculation System
function calculateAmbassadorPoints() {
    const breakdown = {
        checklist: 0,
        links: 0,
        activities: 0,
        total: 0
    };

    // 1. Checklist points (25 pts per item, total 125 pts)
    breakdown.checklist += 25; // Discord join (always complete)
    Object.keys(state.checklist).forEach(key => {
        if (state.checklist[key]) {
            breakdown.checklist += 25;
        }
    });

    // 2. Contributor Link generation points (10 pts per link)
    breakdown.links = state.linksHistory.length * 10;

    // 3. Activity points based on type + bonus for eligible URL
    state.activities.forEach(act => {
        let base = 20;
        if (act.type === 'Event Hosted') base = 100;
        else if (act.type === 'Startups Referral') base = 50;
        else if (act.type === 'Learn Collection') base = 30;
        else if (act.type === 'Social Share') base = 20;
        else base = 15;

        // Check if URL is eligible
        if (act.url) {
            const check = checkUrlEligibility(act.url);
            if (check.eligible) {
                base += 10; // +10 points bonus for verified eligible target
            }
        }
        breakdown.activities += base;
    });

    breakdown.total = breakdown.checklist + breakdown.links + breakdown.activities;
    return breakdown;
}

// Ambassador Advancement Eligibility Diagnostics
function checkAmbassadorEligibility() {
    const hasActivity = state.activities.length > 0 || state.checklist['first-activity'];

    const criteria = [
        {
            id: 'discord',
            title: 'Join Discord Community',
            met: true,
            desc: 'Must be an active member of the Microsoft Student Developer Community on Discord.'
        },
        {
            id: 'discord-link',
            title: 'Link Discord Account to GitHub',
            met: !!state.checklist['discord-link'],
            desc: 'Link your accounts in the Discord #start-here channel verification bot.'
        },
        {
            id: 'azure-students',
            title: 'Verify Azure for Students Status',
            met: !!state.checklist['azure-students'],
            desc: 'Activate academic Azure for Students credit with your registered MSA email.'
        },
        {
            id: 'tech-training',
            title: 'Complete Cloud Skills Challenge',
            met: !!state.checklist['tech-training'],
            desc: 'Complete the Technical Training Learning Path challenge on Microsoft Learn.'
        },
        {
            id: 'first-activity',
            title: 'Log Activity with Contributor ID',
            met: !!hasActivity,
            desc: `Perform & log an outreach activity using your Contributor ID (${state.contributorId}).`
        }
    ];

    const completedCount = criteria.filter(c => c.met).length;
    const isEligible = completedCount === criteria.length;

    return {
        isEligible,
        completedCount,
        totalCount: criteria.length,
        criteria,
        missing: criteria.filter(c => !c.met)
    };
}

// URL Builder Logic
function setupUrlBuilder() {
    if (elements.configContributorId) {
        elements.configContributorId.value = state.contributorId;
        updateContributorIdDisplays();

        elements.configContributorId.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (val) {
                state.contributorId = val;
                updateContributorIdDisplays();
                saveStateToLocalStorage();
                renderRecommendedCourses();
                renderEligibleDirectory(state.directoryCategory, state.directorySearch);
            }
        });
    }

    // Live validation while typing in input-url
    if (elements.inputUrl) {
        elements.inputUrl.addEventListener('input', () => {
            const val = elements.inputUrl.value.trim();
            if (val) {
                const result = checkUrlEligibility(val);
                renderUrlValidationFeedback(result, val);
            } else if (elements.urlValidatorBox) {
                elements.urlValidatorBox.classList.add('hidden');
            }
        });
    }

    if (elements.btnGenerateUrl) {
        elements.btnGenerateUrl.addEventListener('click', () => {
            const inputVal = elements.inputUrl.value.trim();
            if (!inputVal) {
                showToast('Please enter a URL first!');
                return;
            }

            try {
                let formattedUrl = inputVal;
                if (!/^https?:\/\//i.test(inputVal)) {
                    formattedUrl = 'https://' + inputVal;
                }

                const urlObj = new URL(formattedUrl);

                // Strip locale segment (/en-us/, /fr-fr/) per MSA requirement
                urlObj.pathname = urlObj.pathname.replace(/^\/[a-z]{2}-[a-z]{2}(?=\/|$)/i, '');

                // Append Contributor ID
                urlObj.searchParams.set('wt.mc_id', state.contributorId);
                const generated = urlObj.toString();

                // Validate eligibility
                const eligibility = checkUrlEligibility(formattedUrl);
                renderUrlValidationFeedback(eligibility, formattedUrl);

                // Update UI
                elements.outputUrl.value = generated;
                elements.generatorBox.classList.remove('hidden');

                // Add to History
                const historyItem = {
                    domain: urlObj.hostname,
                    original: inputVal,
                    generated: generated,
                    eligible: eligibility.eligible,
                    timestamp: new Date().toLocaleString()
                };

                state.linksHistory = state.linksHistory.filter(item => item.original !== inputVal);
                state.linksHistory.unshift(historyItem);

                if (state.linksHistory.length > 10) {
                    state.linksHistory.pop();
                }

                saveStateToLocalStorage();
                renderAll();
                showToast(eligibility.eligible ? 'Eligible Contributor Link generated (+10 pts)!' : 'Link generated (Warning: Not on eligible list).');
            } catch (e) {
                console.error("URL Parsing Error: ", e);
                showToast('Invalid URL format. Please enter a valid address.');
            }
        });
    }

    if (elements.btnCopyUrl) {
        elements.btnCopyUrl.addEventListener('click', () => {
            elements.outputUrl.select();
            elements.outputUrl.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(elements.outputUrl.value)
                .then(() => showToast('Copied to Clipboard!'))
                .catch(() => showToast('Failed to copy.'));
        });
    }

    if (elements.btnClearLinks) {
        elements.btnClearLinks.addEventListener('click', () => {
            state.linksHistory = [];
            saveStateToLocalStorage();
            renderLinksHistory();
            renderStats();
            showToast('History cleared.');
        });
    }
}

// Update all Contributor ID instances in the UI
function updateContributorIdDisplays() {
    if (elements.contributorIdDisplay) {
        elements.contributorIdDisplay.textContent = state.contributorId;
    }
    if (elements.dirContributorId) {
        elements.dirContributorId.textContent = state.contributorId;
    }
    if (elements.ruleContributorIdCode) {
        elements.ruleContributorIdCode.textContent = state.contributorId;
    }
}

// Render URL Validation Feedback Card
function renderUrlValidationFeedback(result, urlStr) {
    if (!elements.urlValidatorBox) return;

    elements.urlValidatorBox.classList.remove('hidden', 'valid', 'invalid', 'warning');

    if (result.eligible) {
        elements.urlValidatorBox.classList.add('valid');
        elements.valTitleText.textContent = `Eligible URL: ${result.rule}`;
        elements.valFeedback.textContent = result.reason;
        elements.valPointsBadge.style.display = 'inline-flex';
        elements.valPointsBadge.textContent = '+10 Pts (Preferred Visitors)';

        elements.valBadges.innerHTML = `
            <span class="v-badge success">✓ Eligible Target</span>
            <span class="v-badge success">✓ Direct Microsoft URL</span>
            <span class="v-badge success">✓ Tagged wt.mc_id=${escapeHTML(state.contributorId)}</span>
        `;
    } else {
        const isWarn = result.isLearnPlan || result.isShortener;
        elements.urlValidatorBox.classList.add(isWarn ? 'warning' : 'invalid');
        elements.valTitleText.textContent = result.rule || 'Ineligible URL';
        elements.valFeedback.textContent = result.reason;
        elements.valPointsBadge.style.display = 'none';

        elements.valBadges.innerHTML = `
            <span class="v-badge ${isWarn ? 'warning' : 'danger'}">✕ Not Counted for Preferred Visitors</span>
            ${result.isShortener ? '<span class="v-badge danger">✕ Shortened Link (Direct URL Required)</span>' : ''}
            ${result.isLearnPlan ? '<span class="v-badge warning">✕ Learn Plans Explicitly Excluded</span>' : ''}
        `;
    }
}

// Setup Eligibility Section: Filters, Search, Standalone Tester
function setupEligibilitySection() {
    // Search input
    if (elements.directorySearchInput) {
        elements.directorySearchInput.addEventListener('input', (e) => {
            state.directorySearch = e.target.value.trim().toLowerCase();
            renderEligibleDirectory(state.directoryCategory, state.directorySearch);
        });
    }

    // Filter tabs
    if (elements.directoryTabs) {
        const tabBtns = elements.directoryTabs.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.directoryCategory = btn.getAttribute('data-category');
                renderEligibleDirectory(state.directoryCategory, state.directorySearch);
            });
        });
    }
}

// Standalone URL Eligibility Tester
window.runStandaloneEligibilityTest = () => {
    const input = document.getElementById('test-eligibility-url');
    const resultBox = document.getElementById('test-eligibility-result');
    if (!input || !resultBox) return;

    const url = input.value.trim();
    if (!url) {
        resultBox.innerHTML = '<span style="color: var(--color-warning);">Please enter a URL to test.</span>';
        return;
    }

    const res = checkUrlEligibility(url);
    if (res.eligible) {
        resultBox.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 0.85rem; color: #10b981;">
                <strong>✅ CURRENTLY ELIGIBLE!</strong>
                <p style="margin: 0.3rem 0; font-size: 0.85rem; color: var(--text-primary);">${res.reason}</p>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button class="btn btn-primary btn-sm" onclick="loadTargetInBuilder('${url}')">Load in URL Builder</button>
                    <button class="btn btn-secondary btn-sm" onclick="copyTaggedTarget('${url}', 'Target')">Copy Tagged Link</button>
                </div>
            </div>
        `;
    } else {
        resultBox.innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 0.85rem; color: #ef4444;">
                <strong>❌ INELIGIBLE (${res.rule})</strong>
                <p style="margin: 0.3rem 0; font-size: 0.85rem; color: var(--text-primary);">${res.reason}</p>
            </div>
        `;
    }
};

// Copy Pre-Tagged Target with Contributor ID
window.copyTaggedTarget = (baseUrl, title) => {
    try {
        const urlObj = new URL(baseUrl);
        urlObj.pathname = urlObj.pathname.replace(/^\/[a-z]{2}-[a-z]{2}(?=\/|$)/i, '');
        urlObj.searchParams.set('wt.mc_id', state.contributorId);
        const taggedUrl = urlObj.toString();

        navigator.clipboard.writeText(taggedUrl).then(() => {
            showToast(`Copied ${title} with your Contributor ID!`);

            // Add to links history for points
            const historyItem = {
                domain: urlObj.hostname,
                original: baseUrl,
                generated: taggedUrl,
                eligible: true,
                timestamp: new Date().toLocaleString()
            };
            state.linksHistory = state.linksHistory.filter(item => item.original !== baseUrl);
            state.linksHistory.unshift(historyItem);
            if (state.linksHistory.length > 10) state.linksHistory.pop();
            saveStateToLocalStorage();
            renderAll();
        }).catch(() => {
            showToast('Failed to copy to clipboard.');
        });
    } catch (e) {
        console.error(e);
        showToast('Error formatting URL.');
    }
};

// Load Target in Builder
window.loadTargetInBuilder = (url) => {
    if (elements.inputUrl) {
        elements.inputUrl.value = url;
    }
    showSection('url-builder');
    if (elements.btnGenerateUrl) {
        elements.btnGenerateUrl.click();
    }
};

// Render 23 Eligible Directory Cards
function renderEligibleDirectory(category = 'all', searchQuery = '') {
    if (!elements.directoryGridContainer) return;

    let filtered = ELIGIBLE_TARGETS;

    if (category && category !== 'all') {
        filtered = filtered.filter(t => t.category === category);
    }

    if (searchQuery) {
        filtered = filtered.filter(t =>
            t.pattern.toLowerCase().includes(searchQuery) ||
            t.title.toLowerCase().includes(searchQuery) ||
            t.category.toLowerCase().includes(searchQuery)
        );
    }

    if (filtered.length === 0) {
        elements.directoryGridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                No matching Microsoft targets found. Try a different search term or category.
            </div>
        `;
        return;
    }

    elements.directoryGridContainer.innerHTML = filtered.map(item => {
        return `
            <div class="target-card">
                <div>
                    <div class="target-card-header">
                        <span class="target-badge ${item.type}">${item.type}</span>
                        <span class="small-text text-muted">${item.category}</span>
                    </div>
                    <h4 class="target-title">${item.title}</h4>
                    <p class="target-url-text">${item.pattern}</p>
                    ${item.note ? `<p class="small-text text-muted" style="color: var(--color-warning) !important;">⚠️ ${item.note}</p>` : ''}
                </div>
                <div class="target-card-footer">
                    <button class="btn btn-primary btn-sm" onclick="copyTaggedTarget('${item.url}', '${item.title}')">
                        Copy Tagged
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="loadTargetInBuilder('${item.url}')">
                        Use in Builder
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Checklist Logic
function setupChecklist() {
    elements.chkItems = document.querySelectorAll('.chk-item');
    elements.chkItems.forEach(checkbox => {
        const itemId = checkbox.getAttribute('data-id');
        checkbox.checked = state.checklist[itemId] || false;

        checkbox.addEventListener('change', () => {
            state.checklist[itemId] = checkbox.checked;
            saveStateToLocalStorage();
            renderAll();

            if (itemId === 'first-activity' && checkbox.checked) {
                showToast('Nice work on completing your first activity!');
            }
        });
    });
}

// Activity Logger Logic
function setupActivityLogger() {
    window.handleActivitySubmit = (event) => {
        event.preventDefault();

        const type = document.getElementById('act-type').value;
        const title = document.getElementById('act-title').value.trim();
        const date = document.getElementById('act-date').value;
        const url = document.getElementById('act-url').value.trim();
        const impact = document.getElementById('act-impact').value.trim();
        const notes = document.getElementById('act-notes').value.trim();

        const newActivity = {
            id: Date.now().toString(),
            type,
            title,
            date,
            url,
            impact: impact || 'N/A',
            notes: notes || 'N/A'
        };

        state.activities.unshift(newActivity);

        if (state.activities.length === 1) {
            state.checklist['first-activity'] = true;
            const chkFirstAct = document.getElementById('chk-first-activity');
            if (chkFirstAct) chkFirstAct.checked = true;
        }

        saveStateToLocalStorage();
        elements.formActivity.reset();

        const actDateElem = document.getElementById('act-date');
        if (actDateElem) actDateElem.valueAsDate = new Date();

        renderAll();
        showToast('Activity logged successfully (+points awarded)!');
    };

    const actDateElem = document.getElementById('act-date');
    if (actDateElem) actDateElem.valueAsDate = new Date();

    if (elements.btnExportJson) {
        elements.btnExportJson.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `mlsa_onboarding_backup_${Date.now()}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast('Backup exported!');
        });
    }

    if (elements.btnImportTrigger) {
        elements.btnImportTrigger.addEventListener('click', () => {
            elements.importFileInput.click();
        });
    }

    if (elements.importFileInput) {
        elements.importFileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (parsed.contributorId) state.contributorId = parsed.contributorId;
                    if (parsed.checklist) Object.assign(state.checklist, parsed.checklist);
                    if (parsed.linksHistory) state.linksHistory = parsed.linksHistory;
                    if (parsed.activities) state.activities = parsed.activities;
                    if (parsed.theme) state.theme = parsed.theme;

                    saveStateToLocalStorage();
                    renderAll();
                    showToast('Data imported successfully!');
                } catch (err) {
                    console.error("JSON parsing error: ", err);
                    showToast('Failed to import. Invalid file format.');
                }
            };
            reader.readAsText(file);
        });
    }
}

// Copy Contributor ID Utility
window.copyContributorID = () => {
    navigator.clipboard.writeText(state.contributorId)
        .then(() => showToast(`Contributor ID (${state.contributorId}) copied!`))
        .catch(() => showToast('Failed to copy.'));
};

// Global Diagnostic Runner
window.evaluateAndShowEligibilityDiagnostic = () => {
    const diag = checkAmbassadorEligibility();
    const points = calculateAmbassadorPoints();
    renderAll();
    if (diag.isEligible) {
        showToast('🎉 You are CURRENTLY ELIGIBLE for Alpha Advancement!');
    } else {
        showToast(`Action Required: ${diag.completedCount}/5 requirements completed.`);
    }
};

// Render Functions
function renderAll() {
    renderStats();
    renderAmbassadorStatus();
    renderEligibilityDiagnostic();
    renderLinksHistory();
    renderChecklistUI();
    renderActivitiesTable();
    renderMilestonesPreview();
    renderRecommendedCourses();
    renderEligibleDirectory(state.directoryCategory, state.directorySearch);
    updateContributorIdDisplays();
}

function renderStats() {
    const interactiveKeys = Object.keys(state.checklist);
    const completedCount = interactiveKeys.filter(k => state.checklist[k]).length + 1;
    const totalCount = interactiveKeys.length + 1;
    const completionPercent = Math.round((completedCount / totalCount) * 100);

    if (elements.statChecklist) elements.statChecklist.textContent = `${completionPercent}%`;
    if (elements.barChecklist) elements.barChecklist.style.width = `${completionPercent}%`;
    if (elements.statLinks) elements.statLinks.textContent = state.linksHistory.length;
    if (elements.statActivities) elements.statActivities.textContent = state.activities.length;

    // Render Ambassador Points
    const pts = calculateAmbassadorPoints();
    if (elements.statPoints) elements.statPoints.textContent = pts.total.toLocaleString();
    if (elements.eligibilityTotalPoints) elements.eligibilityTotalPoints.textContent = `${pts.total.toLocaleString()} pts`;
}

function renderAmbassadorStatus() {
    const diag = checkAmbassadorEligibility();

    // 1. Header Badge
    if (elements.ambassadorStatusBadge && elements.ambassadorStatusText) {
        if (diag.isEligible) {
            elements.ambassadorStatusBadge.className = 'metric-badge status-badge success';
            elements.ambassadorStatusText.textContent = 'Eligible for Alpha';
        } else {
            elements.ambassadorStatusBadge.className = 'metric-badge status-badge warning';
            elements.ambassadorStatusText.textContent = `Action Required (${diag.completedCount}/${diag.totalCount})`;
        }
    }

    // 2. Overview Banner
    if (elements.overviewEligibilityBanner) {
        if (diag.isEligible) {
            elements.overviewEligibilityBanner.className = 'eligibility-status-banner status-eligible';
            if (elements.eligibilityBannerIcon) elements.eligibilityBannerIcon.textContent = '🎉';
            if (elements.eligibilityBannerTitle) elements.eligibilityBannerTitle.textContent = 'Status: Currently ELIGIBLE for Alpha Advancement!';
            if (elements.eligibilityBannerDesc) {
                elements.eligibilityBannerDesc.textContent = 'All 5 onboarding and engagement criteria are satisfied. You are ready to receive Alpha Ambassador verification and unlock full benefits.';
            }
        } else {
            elements.overviewEligibilityBanner.className = 'eligibility-status-banner status-pending';
            if (elements.eligibilityBannerIcon) elements.eligibilityBannerIcon.textContent = '⏳';
            if (elements.eligibilityBannerTitle) {
                elements.eligibilityBannerTitle.textContent = `Status: Action Required (${diag.completedCount} of ${diag.totalCount} Requirements Met)`;
            }
            if (elements.eligibilityBannerDesc) {
                const missingTitles = diag.missing.map(m => m.title).join(', ');
                elements.eligibilityBannerDesc.textContent = `You are currently NOT YET eligible for Alpha advancement. Pending steps: ${missingTitles}.`;
            }
        }
    }
}

function renderEligibilityDiagnostic() {
    const diag = checkAmbassadorEligibility();

    if (elements.eligibilityStatusPill) {
        if (diag.isEligible) {
            elements.eligibilityStatusPill.className = 'badge success-badge';
            elements.eligibilityStatusPill.textContent = 'ELIGIBLE FOR ALPHA';
        } else {
            elements.eligibilityStatusPill.className = 'badge warning-badge';
            elements.eligibilityStatusPill.textContent = `${diag.completedCount}/${diag.totalCount} COMPLETED`;
        }
    }

    if (elements.eligibilityCriteriaContainer) {
        elements.eligibilityCriteriaContainer.innerHTML = diag.criteria.map(c => `
            <div class="eligibility-check-row">
                <div class="eligibility-check-row-left">
                    <div class="check-status-icon ${c.met ? 'met' : 'unmet'}">
                        ${c.met ? '✓' : '✕'}
                    </div>
                    <div>
                        <strong style="color: var(--text-primary); font-size: 0.95rem;">${c.title}</strong>
                        <p class="small-text text-muted" style="margin: 0.15rem 0 0 0;">${c.desc}</p>
                    </div>
                </div>
                <div>
                    <span class="v-badge ${c.met ? 'success' : 'danger'}">
                        ${c.met ? 'Completed' : 'Pending'}
                    </span>
                </div>
            </div>
        `).join('');
    }
}

function renderRecommendedCourses() {
    const container = document.getElementById('recommended-courses-container');
    if (!container) return;

    container.innerHTML = RECOMMENDED_COURSES.map(course => {
        try {
            const urlObj = new URL(course.url);
            urlObj.pathname = urlObj.pathname.replace(/^\/[a-z]{2}-[a-z]{2}(?=\/|$)/i, '');
            urlObj.searchParams.set('wt.mc_id', state.contributorId);
            const finalUrl = urlObj.toString();

            return `
                <div class="card" style="padding: 1.25rem; background-color: rgba(255, 255, 255, 0.015); border: 1px solid var(--bg-card-border); display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">${course.title}</h4>
                        <p class="small-text text-muted" style="margin-bottom: 1.25rem; line-height: 1.4;">${course.description}</p>
                    </div>
                    <a href="${finalUrl}" target="_blank" class="btn btn-primary btn-sm btn-block" style="margin-top: auto;">Start Learning</a>
                </div>
            `;
        } catch (e) {
            console.error("Error formatting course link:", e);
            return '';
        }
    }).join('');
}

function renderLinksHistory() {
    if (!elements.linksHistoryBody) return;

    if (state.linksHistory.length === 0) {
        elements.linksHistoryBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">No links generated yet.</td>
            </tr>
        `;
        return;
    }

    elements.linksHistoryBody.innerHTML = state.linksHistory.map(item => `
        <tr>
            <td title="${item.original}">
                <strong>${item.domain}</strong>
                ${item.eligible !== false ? '<span class="v-badge success" style="margin-left: 0.4rem;">Eligible</span>' : '<span class="v-badge danger" style="margin-left: 0.4rem;">Unlisted</span>'}
            </td>
            <td class="text-muted">${item.timestamp}</td>
            <td>
                <span class="points-pill">+10 pts</span>
            </td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="copyText('${item.generated}')">Copy Link</button>
            </td>
        </tr>
    `).join('');
}

window.copyText = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => showToast('Link Copied!'))
        .catch(() => showToast('Copy failed.'));
};

function renderChecklistUI() {
    Object.keys(state.checklist).forEach(key => {
        const checkbox = document.getElementById(`chk-${key}`);
        const container = document.getElementById(`item-${key}`);
        if (checkbox) checkbox.checked = state.checklist[key];

        if (container) {
            if (state.checklist[key]) {
                container.classList.add('done');
            } else {
                container.classList.remove('done');
            }
        }
    });
}

function renderMilestonesPreview() {
    if (!elements.milestonesPreview) return;

    const milestones = [
        { id: 'discord', text: 'Join Discord Server', done: true },
        { id: 'discord-link', text: 'Link Discord Account to GitHub', done: state.checklist['discord-link'] },
        { id: 'azure-students', text: 'Verify Azure for Students', done: state.checklist['azure-students'] },
        { id: 'tech-training', text: 'Complete Technical Training Path', done: state.checklist['tech-training'] },
        { id: 'first-activity', text: 'Log Your First Registration Activity', done: state.checklist['first-activity'] }
    ];

    elements.milestonesPreview.innerHTML = milestones.map(m => `
        <div class="milestone-item ${m.done ? 'done' : ''}">
            <div class="milestone-checkbox"></div>
            <p>${m.text}</p>
        </div>
    `).join('');
}

function renderActivitiesTable() {
    if (!elements.activitiesBody) return;

    if (state.activities.length === 0) {
        elements.activitiesBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted">No activities logged yet. Start by sharing a link!</td>
            </tr>
        `;
        return;
    }

    elements.activitiesBody.innerHTML = state.activities.map(act => {
        let badgeClass = 'badge-social';
        let pts = 20;
        if (act.type === 'Event Hosted') { badgeClass = 'badge-event'; pts = 100; }
        else if (act.type === 'Startups Referral') { badgeClass = 'badge-referral'; pts = 50; }
        else if (act.type === 'Learn Collection') { badgeClass = 'badge-learn'; pts = 30; }
        else if (act.type === 'Other') { badgeClass = 'badge-social'; pts = 15; }

        let isEligibleUrl = false;
        if (act.url) {
            const chk = checkUrlEligibility(act.url);
            if (chk.eligible) {
                isEligibleUrl = true;
                pts += 10;
            }
        }

        return `
            <tr>
                <td><span class="${badgeClass}">${act.type}</span></td>
                <td>
                    <strong>${escapeHTML(act.title)}</strong>
                    ${act.url ? `<br><a href="${act.url}" target="_blank" class="small-text code-font text-muted" style="word-break: break-all;">${act.url.substring(0, 45)}...</a>` : ''}
                    ${isEligibleUrl ? '<span class="v-badge success" style="margin-left: 0.3rem;">Eligible URL</span>' : ''}
                </td>
                <td class="text-muted">${act.date}</td>
                <td>${escapeHTML(act.impact)}</td>
                <td><span class="points-pill">+${pts} pts</span></td>
                <td>
                    <button class="btn btn-danger-text btn-sm" onclick="deleteActivity('${act.id}')">Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}

window.deleteActivity = (id) => {
    if (confirm('Are you sure you want to delete this activity entry?')) {
        state.activities = state.activities.filter(act => act.id !== id);
        saveStateToLocalStorage();
        renderAll();
        showToast('Activity deleted.');
    }
};

// Toast Notification Controller
let toastTimeout;
function showToast(message) {
    if (!elements.toast) return;

    elements.toast.textContent = message;
    elements.toast.classList.remove('hidden');

    elements.toast.style.animation = 'none';
    elements.toast.offsetHeight;
    elements.toast.style.animation = 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1), fadeOut 0.3s ease-out 2.2s forwards';

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        elements.toast.classList.add('hidden');
    }, 2500);
}

// Utility: HTML Escaping
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}