# Run in VS Code, publish online

This is a real static website. VS Code is where you edit and preview it; GitHub Pages hosts the public version so anyone can visit it without running VS Code.

## Run with one launch action

1. Install Node.js LTS from https://nodejs.org/ and VS Code from https://code.visualstudio.com/.
2. Extract the download and open the `liyue-portfolio` folder in VS Code. Open the folder itself, not just index.html.
3. If VS Code asks about Workspace Trust, review the files and trust the folder if you are comfortable running this project.
4. Open **Run and Debug** in the left sidebar, select **Open portfolio in Edge** (or Chrome if installed), and press **F5**.
5. Your browser opens http://localhost:4321. Save changes and refresh to see them.

No npm install is necessary. You can also run `npm.cmd run dev` in the Windows terminal. Use only one local server at a time; stop an existing server with Ctrl+C before starting another.

## Put it online free

1. Create a public GitHub repository and upload the project files, including `.github/workflows/deploy.yml`. The repository root should contain index.html and package.json.
2. Use the `main` branch, as expected by the included workflow.
3. Open repository **Settings → Pages → Source → GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
5. After the workflow succeeds, your live URL appears under **Settings → Pages**. For a repository named `portfolio`, it normally looks like `https://YOUR-USERNAME.github.io/portfolio/`.

The site is not published merely by downloading or running it. These steps publish it through your account. See README.md for detailed Git and GitHub Desktop instructions.

## Make it yours

- `src/data.js`: name, email, projects, skills, experience, and certificates.
- `src/styles.css`: colors, typography, spacing, and mobile layout.
- `index.html`: page sections, hero wording, and description.

Replace sample content before sharing your public link. There are no paid packages, API keys, or required backend services.
