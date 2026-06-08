// Recommended Microsoft Learn Courses
const RECOMMENDED_COURSES = [
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        description: "Get started with cloud concepts, core Azure services, management tools, security, and network monitoring.",
        url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/"
    },
    {
        title: "Fundamentals of Generative AI",
        description: "Understand the core concepts of generative artificial intelligence, large language models, and how to create AI applications responsibly.",
        url: "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
    },
    {
        title: "Get Started with AI Fundamentals",
        description: "Explore standard machine learning, cognitive services, computer vision, and natural language processing concepts.",
        url: "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
    },
    {
        title: "Describe Cloud Concepts (AZ-900)",
        description: "Learn about cloud computing benefits, public/private/hybrid cloud models, and standard cloud service types.",
        url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/"
    },
    {
        title: "GitHub Foundations",
        description: "Learn how to collaborate on code, manage repositories, track issues, and use GitHub Actions workflows.",
        url: "https://learn.microsoft.com/en-us/training/paths/github-foundations/"
    },
    {
        title: "Power Platform Fundamentals (PL-900)",
        description: "Explore the business value and product capabilities of Power Apps, Power Automate, and Power BI.",
        url: "https://learn.microsoft.com/en-us/training/paths/power-plat-fundamentals/"
    }
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
    theme: 'dark' // Default theme
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
    milestonesPreview: document.getElementById('milestones-preview'),

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

    // Handle hash on initial load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
}

function showSection(sectionId) {
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
}

// Theme Management
function setupTheme() {
    if (state.theme === 'light') {
        document.body.classList.add('light-theme');
        elements.themeBtn.querySelector('span').textContent = 'Toggle Dark Mode';
    } else {
        document.body.classList.remove('light-theme');
        elements.themeBtn.querySelector('span').textContent = 'Toggle Light Mode';
    }

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

// URL Builder Logic
function setupUrlBuilder() {
    // Initialize Contributor ID field and register change listener
    if (elements.configContributorId) {
        elements.configContributorId.value = state.contributorId;
        if (elements.contributorIdDisplay) {
            elements.contributorIdDisplay.textContent = state.contributorId;
        }
        elements.configContributorId.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (val) {
                state.contributorId = val;
                if (elements.contributorIdDisplay) {
                    elements.contributorIdDisplay.textContent = val;
                }
                saveStateToLocalStorage();
                renderRecommendedCourses();
            }
        });
    }

    elements.btnGenerateUrl.addEventListener('click', () => {
        const inputVal = elements.inputUrl.value.trim();
        if (!inputVal) {
            showToast('Please enter a URL first!');
            return;
        }

        try {
            // Check if user included protocol, if not add it for parsing
            let formattedUrl = inputVal;
            if (!/^https?:\/\//i.test(inputVal)) {
                formattedUrl = 'https://' + inputVal;
            }

            const urlObj = new URL(formattedUrl);
            
            // Append/Set Contributor ID
            urlObj.searchParams.set('wt.mc_id', state.contributorId);
            const generated = urlObj.toString();

            // Update UI
            elements.outputUrl.value = generated;
            elements.generatorBox.classList.remove('hidden');

            // Add to History
            const historyItem = {
                domain: urlObj.hostname,
                original: inputVal,
                generated: generated,
                timestamp: new Date().toLocaleString()
            };

            // Avoid duplicate domain+original URLs in recent list
            state.linksHistory = state.linksHistory.filter(item => item.original !== inputVal);
            state.linksHistory.unshift(historyItem);
            
            // Limit history to 10 items
            if (state.linksHistory.length > 10) {
                state.linksHistory.pop();
            }

            saveStateToLocalStorage();
            renderStats();
            renderLinksHistory();
            showToast('Link Generated successfully!');
        } catch (e) {
            console.error("URL Parsing Error: ", e);
            showToast('Invalid URL format. Please enter a valid address.');
        }
    });

    elements.btnCopyUrl.addEventListener('click', () => {
        elements.outputUrl.select();
        elements.outputUrl.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(elements.outputUrl.value)
            .then(() => showToast('Copied to Clipboard!'))
            .catch(() => showToast('Failed to copy. Please manually copy the field.'));
    });

    elements.btnClearLinks.addEventListener('click', () => {
        state.linksHistory = [];
        saveStateToLocalStorage();
        renderLinksHistory();
        renderStats();
        showToast('History cleared.');
    });
}

// Checklist Logic
function setupChecklist() {
    elements.chkItems.forEach(checkbox => {
        // Load initial state
        const itemId = checkbox.getAttribute('data-id');
        checkbox.checked = state.checklist[itemId] || false;

        // Add event listener
        checkbox.addEventListener('change', () => {
            state.checklist[itemId] = checkbox.checked;
            saveStateToLocalStorage();
            renderStats();
            renderMilestonesPreview();
            
            // Auto complete first activity checklist item if logged
            if (itemId === 'first-activity' && checkbox.checked) {
                showToast('Nice work on completing your first activity!');
            }
        });
    });
}

// Activity Logger Logic
function setupActivityLogger() {
    // Handle form submit
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

        // If this is their first activity, auto-check the checklist item
        if (state.activities.length === 1) {
            state.checklist['first-activity'] = true;
            const chkFirstAct = document.getElementById('chk-first-activity');
            if (chkFirstAct) chkFirstAct.checked = true;
        }

        saveStateToLocalStorage();
        elements.formActivity.reset();
        
        // Auto set date picker back to today
        document.getElementById('act-date').valueAsDate = new Date();

        renderAll();
        showToast('Activity logged successfully!');
    };

    // Set today's date in form by default
    document.getElementById('act-date').valueAsDate = new Date();

    // Export JSON
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

    // Import JSON trigger
    elements.btnImportTrigger.addEventListener('click', () => {
        elements.importFileInput.click();
    });

    // File import logic
    elements.importFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
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

// Copy Contributor ID Utility
window.copyContributorID = () => {
    navigator.clipboard.writeText(state.contributorId)
        .then(() => showToast('Contributor ID copied!'))
        .catch(() => showToast('Failed to copy.'));
};

// Render Functions
function renderAll() {
    renderStats();
    renderLinksHistory();
    renderChecklistUI();
    renderActivitiesTable();
    renderMilestonesPreview();
    renderRecommendedCourses();
}

function renderRecommendedCourses() {
    const container = document.getElementById('recommended-courses-container');
    if (!container) return;

    container.innerHTML = RECOMMENDED_COURSES.map(course => {
        try {
            // Build URL with active Contributor ID
            const urlObj = new URL(course.url);
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

function renderStats() {
    // Calculate Checklist Completion
    // Total checklist tasks: 5 (4 interactive + 1 static complete)
    const interactiveKeys = Object.keys(state.checklist);
    const completedCount = interactiveKeys.filter(k => state.checklist[k]).length + 1; // +1 for the disabled joined Discord
    const totalCount = interactiveKeys.length + 1;
    const completionPercent = Math.round((completedCount / totalCount) * 100);

    // Update Overview Stats
    elements.statChecklist.textContent = `${completionPercent}%`;
    elements.barChecklist.style.width = `${completionPercent}%`;
    elements.statLinks.textContent = state.linksHistory.length;
    elements.statActivities.textContent = state.activities.length;
}

function renderLinksHistory() {
    if (state.linksHistory.length === 0) {
        elements.linksHistoryBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-center text-muted">No links generated yet.</td>
            </tr>
        `;
        return;
    }

    elements.linksHistoryBody.innerHTML = state.linksHistory.map(item => `
        <tr>
            <td title="${item.original}">${item.domain}</td>
            <td class="text-muted">${item.timestamp}</td>
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
    if (state.activities.length === 0) {
        elements.activitiesBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">No activities logged yet. Start by sharing a link!</td>
            </tr>
        `;
        return;
    }

    elements.activitiesBody.innerHTML = state.activities.map(act => {
        let badgeClass = 'badge-social';
        if (act.type === 'Event Hosted') badgeClass = 'badge-event';
        else if (act.type === 'Startups Referral') badgeClass = 'badge-referral';
        else if (act.type === 'Learn Collection') badgeClass = 'badge-learn';
        else if (act.type === 'Other') badgeClass = 'badge-social';

        return `
            <tr>
                <td><span class="${badgeClass}">${act.type}</span></td>
                <td>
                    <strong>${escapeHTML(act.title)}</strong>
                    ${act.url ? `<br><a href="${act.url}" target="_blank" class="small-text code-font text-muted" style="word-break: break-all;">${act.url.substring(0, 50)}...</a>` : ''}
                </td>
                <td class="text-muted">${act.date}</td>
                <td>${escapeHTML(act.impact)}</td>
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
    elements.toast.textContent = message;
    elements.toast.classList.remove('hidden');
    
    // Reset animations/classes
    elements.toast.style.animation = 'none';
    elements.toast.offsetHeight; // trigger reflow
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
