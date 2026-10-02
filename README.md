# Mohamed Elbadry — Senior Backend Developer

Static portfolio built from Mohamed Elbadry's CV. Dark, single-page site covering experience, skills, education, and contact. Includes a downloadable PDF of the original CV.

Live GitHub Pages URL after you connect a GitHub repo:

- User site: `https://YOUR_USERNAME.github.io`
- Project site: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Run locally

```bash
npm install
npm run dev
```

The app listens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
```

That writes a static site to `out/`. Open `out/index.html` or serve the folder with any static host.

## Publish on GitHub Pages (github.io)

This project is already wired for GitHub Pages (static export + Actions workflow).

1. Create a GitHub repository.
   - For `https://YOUR_USERNAME.github.io`, name the repo **`YOUR_USERNAME.github.io`**.
   - Suggested name if you want it under Mohamed Elbadry: `mohamed-elbadry.github.io` — that only works if your GitHub username is `mohamed-elbadry`.
2. In the GitHub repo: **Settings → Pages → Source: GitHub Actions**.
3. Push this code to the `main` branch:

```bash
git remote add github https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u github main
```

4. Wait for the **Deploy GitHub Pages** workflow. The site will be at `https://YOUR_USERNAME.github.io`.

If the repo is **not** named `USERNAME.github.io`, the build automatically prefixes asset paths with `/REPO_NAME` so project Pages still work.

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui.

## Contact

- Email: [m7mdelbadry72@gmail.com](mailto:m7mdelbadry72@gmail.com)
- Phone / WhatsApp: +20 10 1137 9206
- LinkedIn: [mohamed elbadry](https://www.linkedin.com/in/mohamed-elbadry-4a38471b1)
