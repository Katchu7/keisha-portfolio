# Jade Harbor — software engineer portfolio

A complete, responsive portfolio inspired by Liyue’s mountain silhouettes, traditional pavilion roofs, lanterns, and lotus ponds. It combines the first reference’s section-based portfolio with the second reference’s palette. All illustration is original inline SVG/CSS; no Genshin game artwork or reference images are bundled.

## Tools to use

- **VS Code**: free editor for your code.
- **Node.js 22 or newer LTS**: runs the included local server and build tool. Install from https://nodejs.org/.
- **A modern browser**: preview the website and use its developer tools.
- **Git + GitHub**: version history and a repository for publishing. GitHub Desktop is an optional visual alternative to Git commands.
- **GitHub Pages**: the recommended free alternative to Vercel for this static portfolio. Use a public repository for the free GitHub Pages route. See https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages for current availability and limits.
- **Figma (optional)**: plan future layout changes; not required to run this project.

This implementation uses HTML, CSS, and JavaScript rather than a framework. It needs no third-party JavaScript packages, no API keys, and no npm install. It is suitable for this single-page portfolio and easy to publish on a static host.

## 1. Open and run the project

1. Extract the ZIP and open the `liyue-portfolio` folder in VS Code. Make sure the folder you open contains `package.json`.
2. Install Node.js if needed, then restart VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```sh
npm run dev
```

5. Open http://localhost:4321 in your browser. Do not open index.html directly: JavaScript modules need the local server.
6. Edit a file, save it, and refresh the browser. Stop the server with Ctrl+C.

On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd run dev`, or choose Command Prompt as the VS Code terminal. No execution-policy changes are necessary.

## 2. Personalize the content

Edit `src/data.js` first:

- Replace `profile.name`, `email`, `github`, and `bio`.
- Replace the example technology list and skills with skills you can discuss confidently.
- Replace all three sample projects with real projects. Include the problem, your contribution, engineering decisions, and actual results. Set `liveUrl` and `sourceUrl` to your HTTPS links; blank links are intentionally not rendered.
- Replace the education/experience and certificate placeholders. Add HTTPS certificate URLs to enable credential links. You may use empty arrays to omit their cards, then remove any unwanted section from index.html.
- Replace `https://github.com` with your actual profile URL.

Edit `index.html` for the hero sentence, availability label, page description, and section headings. The “open to opportunities” label is sample content: change it to match your situation. The document title updates from data.js; also update the HTML title for search engines and visitors with JavaScript disabled.

The interface previews are illustrative mockups, not screenshots of finished apps. Replace them with your own screenshots when you have real work to show. To use a screenshot, put it in `public/` and replace the corresponding `.project-art` markup in `renderProjects` in `src/main.js` with an image and meaningful alternative text.

No personal photo is required. To offer a résumé, save your real PDF as `public/resume.pdf` and add `<a class="text-link" href="public/resume.pdf" download>Download résumé</a>` in the hero actions in index.html.

## 3. Adjust the design

The top of `src/styles.css` contains the design tokens:

| Color | Value | Purpose |
|---|---|---|
| Dark green | #0A3323 | Background |
| Moss green | #839958 | Landscape and accents |
| Beige | #F7F4D5 | Main text and buttons |
| Rosy brown | #D3968C | Emphasis and lotus |
| Midnight green | #105666 | Water and project artwork |

Muted text uses a lighter green for readability. Gold adds a lantern-inspired detail. Cormorant Garamond and DM Sans load from Google Fonts; Georgia and Arial provide offline fallbacks. For fully offline fonts, remove the CSS @import or self-host licensed font files.

The layout includes keyboard focus states, a skip link, a mobile menu, reduced-motion support, project filters, and an email-copy fallback. The email button opens the visitor’s email app; there is no backend or contact-form delivery service.

## 4. Check before publishing

1. Confirm your name, email, real projects, dates, and credentials are correct.
2. Test the mobile menu and all links at narrow and wide screen sizes.
3. Use Tab and Enter to navigate; check that focus stays visible.
4. Try the project filters and copy-email button.
5. Run a production build:

```sh
npm run build
npm run preview
```

Open http://localhost:4321 again. Stop the dev server first if it is still using that port. The build creates `dist/`; do not edit that generated folder.

## 5. Publish free with GitHub Pages

1. Create a free account at https://github.com if needed.
2. Create a **public** repository named `portfolio` (or `YOUR-USERNAME.github.io` for a root personal site).
3. Using GitHub Desktop, add this project as a local repository and publish it to your public repository. Include the `.github/workflows/deploy.yml` file. Alternatively, from this project folder run:

```sh
git init
git add .
git commit -m "Create Jade Harbor portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Replace YOUR-USERNAME and the repository name before running. If you already have a remote or repository, use that existing setup instead of adding another origin.

4. On GitHub, open the repository’s **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open **Actions → Deploy portfolio to GitHub Pages**. If the first push ran before Pages was enabled, choose **Run workflow** on `main`.
7. When the workflow succeeds, open the deployment URL shown in the run or Settings → Pages. A project repository normally uses `https://YOUR-USERNAME.github.io/portfolio/`.
8. Commit and push future changes to `main`; deployment runs automatically.

All local asset paths are relative, so both root and repository-subfolder deployments work. GitHub Pages serves static websites; if you later add private API keys, server-side authentication, or a database backend, host that backend separately. Never put secrets into data.js or browser code.

## Folder structure

```text
liyue-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages publishing
├── public/
│   └── favicon.svg          # Original site icon
├── src/
│   ├── data.js              # Your profile, projects, skills, and credentials
│   ├── main.js              # Rendering, filtering, menu, and clipboard
│   └── styles.css           # Responsive design and palette
├── tools/
│   ├── build.mjs            # Creates dist/
│   └── serve.mjs            # Local development/preview server
├── .gitignore
├── index.html              # Sections and original scenery
├── package.json            # Commands; no dependencies
└── README.md               # This step-by-step guide
```

This is an independently created fan-inspired visual direction, with no affiliation to HoYoverse. Your personal content and any assets you add remain your responsibility.
