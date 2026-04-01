# How to Deploy a Next.js App to GitHub Pages Using Two Repositories (The Beginner-Friendly Guide)

If you're building a personal portfolio or website using **Next.js**, you've probably encountered a common pain point: **How do I deploy a Next.js App Router project to my `username.github.io` GitHub Pages repository without messing up my source code?** 

GitHub Pages expects standard static files (like an `index.html` at the root). Because Next.js creates complex server-side compiled structural files, if you push your raw Next.js source code straight to your `.github.io` repo, it won’t work out-of-the-box. 

Today, I want to share the exact workflow I use to separate my Next.js **source code** from my **live compiled website** using two separate repositories. It takes just 5 minutes to set up, and it completely automated my deployment process! Let's dive in. 👇

---

## 🛠️ The Setup
You will need two separate repositories on your GitHub account:
1. **Source Code Repo** (e.g., `My_portfolio`): This holds all your raw Next.js code (`page.tsx`, `layout.tsx`, etc.). 
2. **Deployment Repo** (e.g., `AAShayon.github.io`): This will ONLY hold the compiled, static HTML/CSS that users actually see on the internet.

## Step 1: Tell Next.js to Export Static Files
By default, Next.js spins up a Node.js server. Since GitHub Pages requires a purely static website, we need to instruct Next.js to compile our app down into standard static HTML/CSS files.

Open your `next.config.ts` (or `next.config.mjs`) file at the root of your project and add `output: "export"` inside the config object:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This tells Next.js to create static files!
};

export default nextConfig;
```

When you run `npm run build` now, Next.js won't create a hidden `.next` folder. Instead, it will generate a directory called `/out` holding your fully compiled static website!

## Step 2: Install `gh-pages`
We need an easy way to push *only* that `/out` folder to our Deployment Repository without pushing the rest of the source code. The easiest way to do this is using the `gh-pages` NPM package.

Run this command in your project terminal:
```bash
npm install -D gh-pages
```

## Step 3: Configure Your Deploy Script
We are going to tell `gh-pages` exactly where to send our compiled website. Open your `package.json` file, find the `"scripts"` section, and add a custom `"deploy"` command. 

*Note: Replace `AAShayon` with your actual GitHub username!*

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "deploy": "gh-pages -d out -b main -r git@github.com:AAShayon/AAShayon.github.io.git"
}
```

**Let's break down that command:**
* `-d out`: Tells the script to only push the contents of the compiled `/out` folder.
* `-b main`: Tells it to push to the `main` branch of the target repository. 
* `-r git@github...`: The exact SSH URL of your live `.github.io` deployment repository.

## Step 4: The Magical Workflow ✨
You are all set! Now, whenever you want to update a skill, add a project, or write a new blog post in your portfolio, your workflow looks like this:

**1. Back up your Source Code:**
Just like normal, commit and push your code to your Source Code Repo (`My_portfolio`).
```bash
git add .
git commit -m "Added a new skill and updated UI"
git push
```

**2. Push to your Live Website:**
Compile the new code and trigger the deployment script we just created.
```bash
npm run build
npm run deploy
```

That's it! 🚀 The `npm run deploy` command will automatically grab your `out/` folder, beam it straight to your `AAShayon.github.io` repository, and update your live website globally. Your source code remains safe, secure, and totally separated from the compiled mess! 

Have you tried organizing your Next.js projects like this before? Let me know your thoughts in the comments below! 👇

#Nextjs #ReactJS #WebDevelopment #GitHubPages #Deployment #FrontendDevelopment #SoftwareEngineering #CodingTips
