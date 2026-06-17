# 🚀 Deploy to Firebase Hosting (auto-deploy via GitHub Actions)

Your site auto-deploys to Firebase every time you push to `main`.
No Node.js needed on your machine — GitHub builds and deploys it for you.

Follow these **one-time** steps. After this, deploying = just `git push`.

---

## Step 1 — Create a Firebase project

1. Go to <https://console.firebase.google.com> and sign in with your Google account.
2. Click **Add project** (or **Create a project**).
3. Project name: try **`karthik-madgula`**.
   - Firebase will show the **Project ID** below the name (e.g. `karthik-madgula` or
     `karthik-madgula-1a2b3` if the name is taken). **Copy this exact Project ID** — you need it twice below.
   - Your live site will be: **`https://<PROJECT_ID>.web.app`**
4. Disable Google Analytics (not needed) → **Create project** → wait → **Continue**.

---

## Step 2 — Enable Hosting

1. In the left sidebar: **Build → Hosting**.
2. Click **Get started**. You can click through the npm/CLI screens — you don't need to run
   them locally (GitHub Actions handles it). Just finish the wizard.

---

## Step 3 — Create a deploy key (service account)

GitHub needs permission to deploy. Generate a service-account key:

1. Open <https://console.cloud.google.com/iam-admin/serviceaccounts> and pick your project
   (top-left project dropdown — match the Project ID from Step 1).
2. Find the account named **`firebase-adminsdk-...`** (created automatically).
   - If none exists: **Create Service Account** → name it `github-deploy` → grant role
     **Firebase Hosting Admin** → Done.
3. Click the account → **Keys** tab → **Add Key → Create new key → JSON → Create**.
4. A `.json` file downloads. **Open it in a text editor and copy the ENTIRE contents.**
   ⚠️ Keep this file private — never commit it (already git-ignored).

---

## Step 4 — Add GitHub secrets

In your repo <https://github.com/karthikmadgula/my-website>:

1. **Settings → Secrets and variables → Actions → New repository secret.**
2. Add **two** secrets:

   | Name | Value |
   |------|-------|
   | `FIREBASE_SERVICE_ACCOUNT` | Paste the **entire JSON** contents from Step 3 |
   | `FIREBASE_PROJECT_ID` | Your **Project ID** from Step 1 (e.g. `karthik-madgula`) |

---

## Step 5 — Set the Project ID in the repo

Edit **`.firebaserc`** in this project and replace the placeholder with your real Project ID:

```json
{
  "projects": {
    "default": "karthik-madgula"
  }
}
```

(Tell Claude your Project ID and it'll do this + push for you.)

---

## Step 6 — Deploy 🎉

Commit and push. The GitHub Action runs automatically:

```bash
git add -A
git commit -m "Configure Firebase deploy"
git push
```

Watch it run: repo → **Actions** tab. When it goes green (~1–2 min), your site is live at:

### 👉 `https://<PROJECT_ID>.web.app`

From now on, **every `git push` to `main` redeploys automatically.**

---

## Want a custom domain later? (e.g. karthikmadgula.dev)

1. Buy a domain (Namecheap, GoDaddy, Google Domains, etc.).
2. Firebase Console → **Hosting → Add custom domain** → enter your domain.
3. Add the DNS records Firebase shows you at your registrar.
4. Firebase auto-provisions a free SSL certificate. Done.
