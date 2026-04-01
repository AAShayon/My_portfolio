# Portfolio Deployment Guide

Since you have two separate repositories—one for your **Source Code** (`My_portfolio`) and one for the **Deployed Live Site** (`AAShayon.github.io`)—the workflow for updating your portfolio is a two-step process.

To make this completely painless for you, I've installed a package called `gh-pages` and added a custom `deploy` script to your `package.json`. 

Whenever you make a change (like adding a new skill or project), just follow these instructions:

## Step 1: Push Source Code to `My_portfolio`
First, save your **source code** changes so you never lose them. Run these commands in your project's terminal:

```bash
git add .
git commit -m "Updated skills"
git push
```

## Step 2: Build and Deploy to `AAShayon.github.io`
Next, you need to compile your Next.js application into static HTML/CSS files and push those static files to your live `.github.io` repository.

Because of the shortcut script I created, you only need to run these commands sequentially:

> [!TIP]
> **Build the changes into your `/out` folder:**
> ```bash
> npm run build
> ```
> 
> **Push the compiled files to `AAShayon.github.io`:**
> ```bash
> npm run deploy
> ```

That's entirely it! The `npm run deploy` script will securely copy everything out of the newly generated `out/` folder, directly push it to the `main` branch of your `AAShayon.github.io` repository using your SSH credentials, and update your live website instantly without messing up your source code repository!
