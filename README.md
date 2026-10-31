# Ambassador Launchpad: MLSA Onboarding & Activity Tracker

🌐 **Live Site:** [https://noorislam-xd.github.io/microsoft-ambassador-toolkit](https://noorislam-xd.github.io/microsoft-ambassador-toolkit)

A comprehensive helper dashboard to manage your Microsoft Learn Student Ambassador onboarding checklist, verify Preferred Visitor URL eligibility, calculate ambassador points, and log your outreach activities with your unique Contributor ID (`studentamb_515349`).

---

## 🚀 Features

1. **Overview & Live Eligibility Status**: Real-time diagnostic evaluation of your current Alpha Ambassador advancement eligibility (5/5 requirements check) and dynamic progress bars.
2. **Ambassador Points Engine**: Automatically tracks points across onboarding tasks (25 pts each), generated eligible links (10 pts each), and logged activities (up to 100+ pts each + bonus points for eligible Microsoft targets).
3. **URL Eligibility Rules & Validator**:
   - Validates direct domains (e.g. `techcommunity.microsoft.com`, `azure.microsoft.com`).
   - Validates direct paths (e.g. `microsoft.com/startups`, `microsoft.com/insidetrack`).
   - Flags exclusions for unlisted domains or paths.
   - Enforces the **Learn Plans restriction** (Learn Plans do not count toward Preferred Visitors).
   - Enforces the **Direct URL rule** (rejects shortened links like `aka.ms` or `bit.ly`).
4. **23 Eligible Targets Directory**: Instant one-click generation and copying of all 23 official Microsoft targets pre-tagged with your Contributor ID.
5. **Contributor URL Builder**: Formats direct Microsoft URLs, strips language-locale segments (such as `/en-us/`) per MSA handbook requirements, and injects `wt.mc_id=studentamb_515349`.
6. **Onboarding Checklist & Milestones**: Interactive setup checklist for Discord account linkage, Azure for Students verification, Technical Training (Cloud Skills Challenge), and first activity.
7. **Activity Logger**: Persistent ledger to record social media shares, workshops, Founders Hub referrals, and Learn collections with JSON import/export backups.

---

## 📋 How Preferred Visitors Eligibility Works

- **Domain Scope**: If a domain is listed, any direct page on that domain counts.
- **Path Scope**: If a path is listed, that path and any pages under it count.
- **Unlisted Exclusions**: If the domain or path is not listed, it does not count.
- **Learn Plans Exclusion**: Microsoft Learn Plans do not count toward Preferred Visitors, even when using an eligible domain or path.
- **Direct URLs Only**: Direct Microsoft URLs must be used. Shortened URLs (e.g., `aka.ms`, `bit.ly`) or links that redirect do not count.

---

## 🛠️ How to Run Locally

The app runs entirely in your browser using local persistence:

### Option A: Open directly
Open [`index.html`](file:///e:/microsoft%20amb/index.html) in your favorite web browser.

### Option B: Local HTTP Server
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000`.
