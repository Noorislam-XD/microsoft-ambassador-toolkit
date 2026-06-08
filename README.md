# Ambassador Launchpad: MLSA Onboarding & Activity Tracker

A local, interactive helper application to manage your onboarding checklist, correctly tag promotional links with your unique Contributor ID, and log your outreach activities.

## 🚀 Features

1. **Overview & Progress Bar**: Tracks your overall completion score for essential onboarding tasks.
2. **Contributor URL Builder**: Automatically formats and appends your Contributor ID (`wt.mc_id=studentamb_515349`) to any Microsoft URL. Safe and robust parameter injection to guarantee your promotional traffic is credited.
3. **Onboarding Checklist**: Actionable steps for linking your Discord account to GitHub, verifying your student status, and completing technical learning paths.
4. **Activity Logger**: A persistent ledger to record your social media shares, hosted workshops, startup referrals, and Learn collections. Supports exporting and importing logs as JSON backups.
5. **Quick Resources**: Quick links to the official Discord community, Student Ambassador Portal, and Microsoft Learn.

---

## 🛠️ How to Use

The app requires **no installation** and runs entirely in your browser using local persistence.

### Option A: Open directly (easiest)
1. Double-click the [index.html](file:///C:/Users/rengm/.gemini/antigravity/scratch/mlsa-dashboard/index.html) file to open it in your browser.
2. Alternatively, run the following command in your terminal to open it:
   ```powershell
   Start-Process "C:\Users\rengm\.gemini\antigravity\scratch\mlsa-dashboard\index.html"
   ```

### Option B: Run a local HTTP server
If you prefer running a local server to test the full web app experience:
1. Open PowerShell and navigate to the project directory:
   ```powershell
   cd "C:\Users\rengm\.gemini\antigravity\scratch\mlsa-dashboard"
   ```
2. Start a Python web server:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.

---

## 📋 Recommended Onboarding Steps (Noor Islam)

Since you have already joined the Discord server, follow these next steps to unlock candidate status:

1. **Verify your Account in Discord**:
   - Go to the `#start-here` channel in the Microsoft Student Developer Community server.
   - Look for the verification bot message and click it.
   - Authorize the bot to link your Discord account with your GitHub account.
   
2. **Setup your Contributor ID**:
   - The dashboard comes pre-configured with your Contributor ID: `studentamb_515349`.
   - Use the **URL Builder** tab inside the dashboard to generate and copy links to Azure or Microsoft Learn courses.
   
3. **Complete Technical Training**:
   - Access the Cloud Skills Challenge link (provided in the Discord announcements) and complete the required training module.

4. **Log your Progress**:
   - Record your learning milestones and any social shares inside the **Activity Log** tab to keep a clean record for your milestone reviews.
