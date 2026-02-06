# Part 1: Showcase Your Application

## Application Overview

**Application name:** Temu Clone – Shop Like a Billionaire

**Purpose:** A front-end e-commerce clone inspired by Temu that demonstrates a modern shopping experience with product browsing, search, categories, product details, and checkout flow—all deployed to the cloud via AWS App Runner.

**Problem it solves:**  
- Gives users a single place to browse deals and products by category.  
- Shows how a static front-end can be deployed and served reliably using AWS and CI/CD (GitHub → App Runner).  
- Serves as a learning project for cloud deployment (AWS CLI, GitHub, App Runner) and full-stack-style architecture (front-end + Node server).

**Target audience:**  
- Shoppers looking for a simple, deal-focused browsing experience (demo).  
- Instructors and peers reviewing a cloud-deployed web project (college assignment).  
- Developers learning AWS App Runner, GitHub integration, and Cursor-based development.

**Key features (3–5 bullet points):**
- **Product catalog:** Multiple product cards with images, prices, original prices, and badges (e.g., Hot, Sale, 2pcs).
- **Category navigation:** Categories dropdown (Shoes, Bags, T-Shirts, Pants, Hoodies, etc.) with links to filtered/search views.
- **Search:** Search page with query support (e.g., `search.html?q=shoes`) for category-style browsing.
- **Product detail page:** Dedicated product page (`product.html`) for individual item view.
- **Checkout flow:** Checkout page (`checkout.html`) to simulate the final step of a purchase.
- **Responsive layout:** Uses modern CSS, Inter font, and Font Awesome icons for a clean, mobile-friendly UI.
- **Live cloud deployment:** App is served from AWS App Runner with automatic deployments from GitHub.

---

## Live Demo Details

**Live URL:** https://gktp6jkb3c.us-east-1.awsapprunner.com

*(Deployed via AWS App Runner; source code in GitHub repository `react-app-aws-runner`. Branch: `master`. Auto-deploy is enabled so pushes to `master` trigger a new deployment.)*

---

## Technical Report

### Architecture Overview

| Layer | Technology |
|--------|------------|
| **Frontend** | HTML5, CSS3, vanilla JavaScript. No front-end framework; multi-page app with `index.html`, `product.html`, `search.html`, `checkout.html`, shared `styles.css` and `script.js`. Uses Google Fonts (Inter) and Font Awesome for icons. |
| **Backend** | Node.js (v22) with Express.js. Single `server.js` that serves static files and handles client-side routing for HTML pages (e.g., `/` → `index.html`, `/product.html`, `/search.html`, `/checkout.html`). No API endpoints; product data is embedded in `script.js` on the client. |
| **Database** | None. Product data is stored in a JavaScript array in `script.js` (in-memory/demo data). Suitable for a showcase; a real app would use a database (e.g., DynamoDB, RDS) or external API. |
| **AWS services used** | **AWS App Runner** (compute – runs the Node.js app and serves traffic), **GitHub** (source code and trigger for deployments), **App Runner connection** (GitHub integration for automatic deployments), **Amazon CloudWatch Logs** (service and deployment logs for troubleshooting). AWS CLI was used to create the service and manage configuration. |
| **Development & deployment** | Cursor IDE for editing; Git for version control; GitHub repository; AWS CLI for App Runner (create service, delete failed service, recreate). Configuration for App Runner is in `apprunner.yaml` (runtime: nodejs22, build: npm install + npm run build, run: npm start, port 8080). |

### Development Journey

**Most challenging feature:**  
Getting the app to deploy successfully on AWS App Runner. The service failed with “The specified runtime version is not supported” when using `nodejs18` and `nodejs20`. Fixing this required checking AWS App Runner’s supported Node.js runtimes, updating `apprunner.yaml` to use `nodejs22`, and aligning the build section with the official format (e.g., `pre-build` for `npm install`, `build` for `npm run build`). Deleting the failed service and creating a new one with the corrected config was also part of the process.

**Biggest learning moment:**  
Understanding the full path from local code to live URL: local app → Git → GitHub → AWS App Runner connection (GitHub handshake) → App Runner service reading `apprunner.yaml` from the repo. Learning that CloudWatch Logs (and the “events” log stream) contain the exact deployment failure messages (e.g., runtime not supported) made it possible to fix issues systematically instead of guessing.

### Known Issues

**Current bugs or limitations:**
- **No persistent data:** Product data and any “cart” or session state are not saved; refreshing or closing the tab resets state. No backend API or database.
- **Checkout is UI-only:** Checkout page does not process payments or persist orders; it is a static/demo flow.
- **Search/category filtering:** Implemented client-side with in-memory product data; no server-side search or database queries.
- **External images:** Product images use external URLs (e.g., Unsplash, Picsum); if those URLs change or are rate-limited, images may break.
- **No authentication:** No login, sign-up, or user accounts; the app is anonymous browsing and demo checkout.

**Features not yet implemented:**
- User accounts (sign up / sign in).
- Real shopping cart persistence (e.g., database or cookie/localStorage with backend).
- Payment integration (e.g., Stripe, PayPal).
- Admin panel to add/edit products.
- Server-side search or filtering with a database.
- Product reviews or ratings stored in a database.

**Scalability constraints:**
- Single App Runner service with minimal instance (0.25 vCPU, 0.5 GB memory); suitable for demo/low traffic only.
- No database or caching layer; scaling would require adding a database (e.g., DynamoDB), and possibly a CDN for static assets.
- Product data in `script.js` does not scale; a real catalog would come from a database or API.

### Improvement Ideas

**Three features you would add with more time:**

1. **Backend API + database (e.g., DynamoDB):**  
   Add a real backend (e.g., Node/Express or Lambda) and DynamoDB to store products, categories, and later user accounts and orders. This would enable real search, filtering, cart persistence, and checkout.

2. **User authentication and saved carts:**  
   Integrate authentication (e.g., Amazon Cognito or OAuth) and tie carts and wishlists to user accounts, with data stored in a database so they persist across devices and sessions.

3. **Payment integration and order history:**  
   Integrate a payment provider (e.g., Stripe) on the checkout page and save orders in a database. Add an “Order history” page so users can see past purchases and status.

---

# Part 2: Review and Feedback

*(Use the sections below when you test at least two classmates’ applications. Fill in the bracketed parts after you test their apps.)*

---

## Classmate 1: [Application Name / Classmate Name]

### Functional Testing

- [ ] Tested all advertised features (list which ones: e.g., login, search, cart, checkout).
- [ ] Notes: [Any feature that didn’t work or behaved unexpectedly.]

### Structured Feedback

**What works well (2–3 points):**
1. [Specific feature that impressed you and why.]
2. [Good design or UX choice and why it helps.]
3. [Technical implementation worth noting, e.g., clear structure, good use of APIs, responsive layout.]

**Improvement suggestions (2–3 points):**
1. [Specific bug with reproduction steps: “When I do X, Y happens; expected Z.”]
2. [UX improvement with reasoning: “Adding X would help because…”]
3. [Feature suggestion with use case: “A feature that does X would help users who…”]

**One priority fix:**  
If you could fix or add one thing, it would be: [describe the one change] because [reason].

---

## Classmate 2: [Application Name / Classmate Name]

### Functional Testing

- [ ] Tested all advertised features (list which ones).
- [ ] Notes: [Any feature that didn’t work or behaved unexpectedly.]

### Structured Feedback

**What works well (2–3 points):**
1. [Specific feature that impressed you.]
2. [Good design or UX choice.]
3. [Technical implementation worth noting.]

**Improvement suggestions (2–3 points):**
1. [Specific bug with reproduction steps.]
2. [UX improvement with reasoning.]
3. [Feature suggestion with use case.]

**One priority fix:**  
If you could fix or add one thing, it would be: [describe the one change] because [reason].

---

*End of document. Copy or adapt the Part 2 sections for each classmate you review.*
