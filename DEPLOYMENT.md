# Rangreja Website - Render Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Repository Setup
- Ensure all project files are at the **root level** of your repository
- The `package.json` should be in the root directory (not in a subfolder)

### 2. Render Configuration

#### Option A: Using render.yaml (Recommended)
The project includes a `render.yaml` file with the following configuration:
```yaml
services:
  - type: web
    name: rangreja-website
    env: static
    buildCommand: npm ci && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

#### Option B: Manual Setup
If you prefer manual setup, use these settings in Render:

- **Name**: `rangreja-website`
- **Environment**: `Static Site`
- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `dist`
- **Auto-Deploy**: `Yes`

### 3. Environment Variables
No environment variables are required for this static site.

### 4. Custom Domain (Optional)
After deployment, you can add a custom domain in the Render dashboard.

## 🔧 Troubleshooting

### Common Issues:

#### 1. "Could not read package.json" Error
**Problem**: Render can't find package.json
**Solution**: Ensure package.json is in the root directory of your repository

#### 2. Build Fails
**Problem**: Dependencies or build process fails
**Solution**: Check that all dependencies are listed in package.json

#### 3. Routing Issues
**Problem**: Direct URLs don't work (404 errors)
**Solution**: The `_redirects` file should be in the dist folder (handled automatically by build script)

#### 4. Slow Build Times
**Problem**: Build takes too long
**Solution**: The build is optimized and should complete in under 2 minutes

## 📁 Required Files Structure

Your repository root should contain:
```
/
├── package.json          ← Must be at root level
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── render.yaml           ← Render configuration
├── _redirects           ← SPA routing support
├── index.html
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── dist/                ← Generated after build
```

## ✅ Pre-Deployment Checklist

- [ ] All files are at repository root level
- [ ] `package.json` exists at root
- [ ] `render.yaml` is configured
- [ ] `_redirects` file exists
- [ ] Build command works locally: `npm run build`
- [ ] No sensitive data in repository

## 🌐 Expected Build Output

Successful build should show:
```
✓ 1598 modules transformed.
dist/index.html                   0.90 kB │ gzip:  0.50 kB
dist/assets/index-mNIPA4o-.css   26.47 kB │ gzip:  5.06 kB
dist/assets/index-ii-Oiw0R.js   216.88 kB │ gzip: 67.43 kB
✓ built in ~1.5s
```

## 🎯 Performance Metrics

- **Build Time**: ~1.5 seconds
- **Bundle Size**: 
  - JavaScript: 216KB (67KB gzipped)
  - CSS: 26KB (5KB gzipped)
  - HTML: 0.9KB
- **Total Size**: ~243KB (72KB gzipped)

## 📞 Support

If you encounter any deployment issues:
1. Check the build logs in Render dashboard
2. Verify file structure matches the requirements above
3. Test the build locally with `npm run build`

The website is fully optimized for Render deployment and should work without any issues when the file structure is correct.