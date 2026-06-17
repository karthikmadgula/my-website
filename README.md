# Karthik Madgula — Portfolio

A modern, animated personal portfolio built with **React + Vite + Tailwind CSS** and **Framer Motion**.

![Stack](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

---

## ⚙️ Prerequisites — Install Node.js first

This machine does **not** currently have Node.js installed. You need it to run the site.

1. Download the **LTS** installer from <https://nodejs.org> (the "LTS" green button).
2. Run the installer with all defaults (this also installs `npm`).
3. **Close and reopen** your terminal / VS Code so the new `PATH` is picked up.
4. Verify it works:

   ```bash
   node --version
   npm --version
   ```

   Both should print a version number.

---

## 🚀 Run the site locally

From the project folder (`d:\my website`):

```bash
npm install      # one-time: downloads dependencies
npm run dev      # starts the dev server
```

Then open the URL it prints (usually <http://localhost:5173>).

## 📦 Other commands

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

---

## 🖼️ Add your profile photo

The hero shows a stylish **"KM"** monogram by default. To use your real photo:

1. Save your photo as **`profile.jpg`** inside the **`public/`** folder
   (full path: `d:\my website\public\profile.jpg`).
2. Refresh the page — it appears automatically inside the rotating ring.

No code changes needed.

---

## ✏️ Edit your content

Everything (summary, skills, experience, projects, education, contact) lives in **one file**:

```
src/data/portfolio.js
```

Edit the text there and the whole site updates. No need to touch component code.

---

## 📁 Project structure

```
my website/
├─ public/                  # static assets (drop profile.jpg here)
├─ src/
│  ├─ components/
│  │  ├─ layout/            # Navbar, Footer
│  │  ├─ sections/          # Hero, About, Skills, Experience, Projects, Education, Contact
│  │  └─ ui/                # AnimatedSection, SectionTitle, TechBadge, GlowCard
│  ├─ data/
│  │  └─ portfolio.js       # ← all your content lives here
│  ├─ hooks/                # (reserved for custom hooks)
│  ├─ App.jsx               # page composition
│  ├─ main.jsx              # React entry point
│  └─ index.css             # Tailwind + global styles
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

---

## 🐳 Run with Docker

A multi-stage build compiles the site with Node and serves the static output with Nginx (SPA routing + gzip + security headers + healthcheck).

**Using Docker directly:**

```bash
docker build -t karthik-portfolio .
docker run -d -p 8080:80 --name karthik-portfolio karthik-portfolio
```

**Using Docker Compose:**

```bash
docker compose up -d --build
```

Then open <http://localhost:8080>.

Stop / remove:

```bash
docker compose down          # if using compose
docker rm -f karthik-portfolio   # if using plain docker
```

> The image is fully self-contained — no Node install needed on the host, just Docker. To bake in your profile photo, drop `public/profile.jpg` **before** building.

---

## 🌐 Deploy (free options)

- **Vercel** — import the repo at <https://vercel.com>, framework auto-detected as Vite. Zero config.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — run `npm run build` and serve the `dist/` folder.

---

Built with care. © Karthik Madgula
