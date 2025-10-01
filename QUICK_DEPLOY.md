# Quick Deploy to Vercel 🚀

## 3 Simple Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy!
```bash
npm run deploy
```

That's it! Your API will be live on Vercel.

## First Time Setup

If this is your first deployment:

1. The CLI will ask: **"Set up and deploy?"** → Type `y`
2. **"Which scope?"** → Select your account
3. **"Link to existing project?"** → Type `n` (first time)
4. **"What's your project's name?"** → Press Enter (uses "product-listing")
5. **"In which directory is your code located?"** → Press Enter (uses "./")

The configuration from `vercel.json` will be applied automatically!

## Deployment URL

After deployment, you'll get a URL like:
```
https://product-listing-xyz.vercel.app
```

## Test Your Deployment

```bash
# Replace YOUR_URL with your actual Vercel URL
curl https://YOUR_URL.vercel.app/health
curl https://YOUR_URL.vercel.app/api/products
```

## Deploy Preview (Test Before Production)

To test changes before production:
```bash
npm run deploy:preview
```

## GitHub Integration (Auto-Deploy on Push)

For automatic deployments on every push:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Deploy"

Done! Now every push to your repository automatically deploys.

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your domain
4. Follow the DNS setup instructions

## Need Help?

- 📖 **Full Guide**: See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
- 📋 **What Changed**: See [CHANGES_SUMMARY.md](CHANGES_SUMMARY.md)
- 🌐 **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

---

**Ready?** Just run: `npm run deploy` 🎉
