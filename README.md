# Harish B. — AI Engineer Portfolio

Premium-minimal responsive portfolio built with React + Vite. It is prepared for GitHub and Vercel deployment.

## Included
- Resume-aligned career timeline and education
- Responsive navigation and project case studies
- GitHub, LinkedIn, and email links
- Photo slot at `public/profile.jpg`
- No unverified performance percentages
- Benchmark status clearly marked as not yet measured

## 1. Add your photo
Place your professional portrait at `public/profile.jpg` (JPG recommended, square or portrait crop). The site currently displays an HB placeholder until the file exists.

## 2. Run locally
Install Node.js 20+ and then:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## 3. Build and test production output

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## 4. Push to GitHub

Create a new empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build Harish B AI Engineer portfolio"
git branch -M main
git remote add origin https://github.com/Craziprogrammerharish/harish-ai-portfolio.git
git push -u origin main
```

If you create a repository with a different name, replace the remote URL with that repository's URL.

## 5. Deploy on Vercel
1. Sign in to Vercel using GitHub.
2. Select **Add New → Project** and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Select **Deploy**.
7. After the deployment succeeds, Vercel will provide the public `*.vercel.app` URL. Add that real URL to your LinkedIn profile and resume.

No custom domain is required.

## Benchmark policy
Do not publish latency, accuracy, relevance, cost, or effort-saving percentages until they are measured. For a defensible benchmark, define:
- a fixed test set and version it,
- a baseline and a candidate implementation,
- metrics and pass/fail criteria before running,
- environment/model/parameters,
- sample size and repeated runs,
- raw output and calculation script.

Suggested first benchmark for the Text-to-SQL project:
- Prepare 20–50 representative questions against a small known schema.
- Store expected SQL results or expected result rows.
- Report execution success rate, exact-result match rate, and median/p95 latency.
- Separate deterministic query tests from LLM-judged answer quality.
- State clearly that the result applies to the demo test set, not prior employer production systems.

## Factual notes
- Professional AI roles shown: Pace Automation (Sep 2023–Jul 2024) and GenAI Resonance LLP (Aug 2024–Jan 2026).
- Mayura IT Solutions is shown as IT Trainee (May 2022–Sep 2022).
- Great Lakes program title follows the supplied resume.
- Internship and apprenticeship details are summarized separately.
- Confirm each project’s source/demo availability before adding project links or calling it publicly deployed.
