# AWS App Runner – Free-Tier Style Setup

Your app is already on GitHub: **https://github.com/Dedeepya2026/AI_Integeration_Capstone3.4**

App Runner does not have a traditional 12-month free tier, but you can use the **smallest instance size** to keep cost low.

---

## Step 1: Enable App Runner (one-time)

Your account must “subscribe” to App Runner before the CLI works:

1. Sign in to the **AWS Console** as the **root user** (or an admin):  
   https://console.aws.amazon.com/
2. Open **App Runner**:  
   https://console.aws.amazon.com/apprunner/
3. Choose **Create service** (or any App Runner action).  
   This triggers the one-time opt-in.  
   You can cancel the wizard after that; the goal is just to enable the service.

---

## Step 2: Create GitHub connection (one-time)

1. In **App Runner** in the console, go to **Connections** (or **Settings → Connections**).
2. Click **Create connection**.
3. **Connection name:** e.g. `github-capstone`
4. **Provider:** GitHub  
5. Click **Create connection**.
6. Complete the GitHub authorization in the popup (authorize AWS to access your repos).
7. After it shows **Available**, copy the **Connection ARN** (e.g. `arn:aws:apprunner:us-east-1:040740748442:connection/github-capstone/...`).

---

## Step 3: Create the service with free-tier-style settings

Use the **smallest instance**: **0.25 vCPU**, **0.5 GB** memory.

### Option A: AWS Console

1. In App Runner, click **Create service**.
2. **Repository type:** Source code repository.
3. **Connect to GitHub:** Choose the connection you created.
4. **Repository:** `Dedeepya2026/AI_Integeration_Capstone3.4`
5. **Branch:** `master`
6. **Deployment trigger:** Automatic (so each push deploys).
7. **Configuration source:** Repository (use the `apprunner.yaml` in the repo).
8. **Service name:** e.g. `ai-capstone-34`
9. **CPU:** **0.25 vCPU**
10. **Memory:** **0.5 GB**
11. Create the service and wait for the first deployment.

### Option B: AWS CLI (after Step 1 and 2)

1. Replace `YOUR_CONNECTION_ARN` in `create-apprunner-service.json` with your Connection ARN from Step 2.
2. Run:
   ```powershell
   aws apprunner create-service --cli-input-json file://create-apprunner-service.json --region us-east-1
   ```

---

## Step 4: Get the live URL

- In the console: open your App Runner **service** → **Default domain** (e.g. `xxxxx.us-east-1.awsapprunner.com`).
- Or with CLI after creation:
  ```powershell
  aws apprunner list-services --region us-east-1 --query "ServiceSummaryList[0].ServiceUrl" --output text
  ```

Your app will be at: **https://&lt;ServiceUrl&gt;**

---

## Instance size used (low cost)

| Setting   | Value   |
|----------|---------|
| CPU      | 0.25 vCPU |
| Memory   | 0.5 GB  |

This is the smallest size and keeps cost low. You are charged for build minutes and for provisioned/active compute (see [App Runner pricing](https://aws.amazon.com/apprunner/pricing/)).
