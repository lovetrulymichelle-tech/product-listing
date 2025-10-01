# Vercel Deployment Guide

This application is fully configured for deployment to Vercel. Follow these steps to deploy.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account
2. **Vercel CLI**: Install globally with:
   ```bash
   npm install -g vercel
   ```

## Deployment Methods

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy to Production**:
   ```bash
   npm run deploy
   ```
   Or manually:
   ```bash
   vercel --prod
   ```

3. **Deploy Preview (Test Deployment)**:
   ```bash
   npm run deploy:preview
   ```
   Or manually:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub Integration

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will automatically detect the configuration from `vercel.json`
4. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Log in to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your repository
4. Vercel will use the `vercel.json` configuration automatically
5. Click "Deploy"

## Configuration

The application is pre-configured with:

- ✅ **vercel.json**: Configured to use the Express app via serverless function
- ✅ **API Entry Point**: `api/index.js` serves as the Vercel serverless entry point
- ✅ **Environment**: Production environment variables set
- ✅ **Build Configuration**: Uses `@vercel/node` builder for Node.js apps
- ✅ **Routing**: All routes are properly configured

## Custom Domain Setup (Optional)

### Add Domain in Vercel Dashboard

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain (e.g., `hustlebaddie.net`)
5. Follow Vercel's DNS configuration instructions

### Configure DNS Records

Add these DNS records at your domain registrar:

#### Option A: Using A Record
```
Type: A
Name: @
Value: 76.76.21.21
```

#### Option B: Using CNAME Record (Recommended)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

#### For www subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Verify Deployment

Once deployed, your API will be available at your Vercel URL (e.g., `your-project.vercel.app`).

Test the following endpoints:

```bash
# Health check
curl https://your-project.vercel.app/health

# API root
curl https://your-project.vercel.app/

# Products API
curl https://your-project.vercel.app/api/products

# Specific product
curl https://your-project.vercel.app/api/products/1

# Filter products
curl "https://your-project.vercel.app/api/products?category=Electronics"
```

## Environment Variables

To add environment variables:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add variables as needed:
   - `NODE_ENV` (already set to "production")
   - `PORT` (Vercel sets this automatically)
   - Add any custom variables your app needs

## Troubleshooting

### Deployment Fails

- Check the deployment logs in Vercel Dashboard
- Ensure all dependencies are listed in `package.json`
- Verify `node` version in `package.json` engines field

### API Not Responding

- Check that `api/index.js` exists and exports the Express app
- Verify `vercel.json` configuration is correct
- Review function logs in Vercel Dashboard

### 404 Errors

- Ensure routes in `vercel.json` are correctly configured
- Check that all paths are relative and correct

## Advanced Configuration

### Serverless Function Size

Vercel has a 50MB limit for serverless functions. This app is well under that limit.

### Cold Starts

Vercel serverless functions may have cold starts. For high-traffic applications, consider:
- Using Edge Functions (if applicable)
- Implementing proper caching strategies
- Upgrading to Pro plan for better performance

### Monitoring

Enable monitoring in Vercel Dashboard:
1. Go to **Analytics** to view traffic and performance
2. Set up **Monitoring** for error tracking
3. Configure **Log Drains** for log aggregation

## Continuous Deployment

### Automatic Deployments

When using GitHub integration:
- **Production deployments**: Triggered on push to `main` branch
- **Preview deployments**: Triggered on push to any branch or PR

### Manual Deployments

Use CLI commands:
```bash
# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview
```

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Summary

Your application is ready to deploy! Simply run:

```bash
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.
