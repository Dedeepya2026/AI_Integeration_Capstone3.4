# Deploy to AWS App Runner – One-Time Setup

Your app is in GitHub: **https://github.com/Dedeepya2026/react-app-aws-runner**

App Runner requires a **one-time enablement** in the AWS Console. After that, you can create the service (and get your live URL) from the console or CLI.

---

## One-time: Enable App Runner and connect GitHub

### 1. Enable App Runner (about 1 minute)

1. Sign in to **AWS Console** as **root** or admin: https://console.aws.amazon.com/
2. Open **App Runner**: https://console.aws.amazon.com/apprunner/
3. Click **Create service** (you can cancel after the first screen).  
   This subscribes your account to App Runner.

### 2. Create GitHub connection (one-time)

1. In App Runner, open **Connections** (left menu or **Configure**).
2. Click **Create connection**.
3. **Connection name:** `github-app-runner`
4. **Provider:** GitHub
5. Click **Create connection**, then **Authorize** in the GitHub popup.
6. When status is **Available**, copy the **Connection ARN** (e.g. `arn:aws:apprunner:us-east-1:040740748442:connection/github-app-runner/...`).

---

## Create the service (auto-deploy + free-tier style)

### Option A: AWS Console (recommended)

1. In App Runner, click **Create service**.
2. **Source:** Source code repository → select your **GitHub connection**.
3. **Repository:** `Dedeepya2026/react-app-aws-runner`
4. **Branch:** `master`
5. **Deployment trigger:** **Automatic**
6. **Configuration source:** **Repository** (uses `apprunner.yaml` in the repo).
7. **Service name:** `react-app-aws-runner`
8. **CPU:** **0.25 vCPU**
9. **Memory:** **0.5 GB**
10. Click **Create & deploy**.

### Option B: AWS CLI

1. Edit `create-apprunner-service.json`: replace `YOUR_CONNECTION_ARN` with the Connection ARN from step 2 above.
2. Run:
   ```powershell
   cd "C:\Users\madir\.gemini\antigravity\scratch\temu-clone"
   aws apprunner create-service --cli-input-json file://create-apprunner-service.json --region us-east-1
   ```

---

## Get your live URL

- **Console:** Open your service → **Default domain** (e.g. `xxxxx.us-east-1.awsapprunner.com`).  
  Full URL: **https://&lt;default-domain&gt;**
- **CLI:**
  ```powershell
  aws apprunner list-services --region us-east-1 --query "ServiceSummaryList[?ServiceName=='react-app-aws-runner'].ServiceUrl" --output text
  ```
  Then open: **https://&lt;ServiceUrl&gt;**

---

## Summary

| Item | Value |
|------|--------|
| GitHub repo | https://github.com/Dedeepya2026/react-app-aws-runner |
| Build | `npm run build` (in apprunner.yaml) |
| Start | `npm start` |
| Auto-deploy | Enabled (each push to `master` deploys) |
| Instance | 0.25 vCPU, 0.5 GB (lowest cost) |
