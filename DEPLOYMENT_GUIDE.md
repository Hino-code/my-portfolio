# Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel, a free hosting platform perfect for React applications.

## Prerequisites

1. Your portfolio code ready
2. EmailJS account set up (see EMAILJS_SETUP.md)
3. Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel account (free)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/your-portfolio.git
     git branch -M main
     git push -u origin main
     ```

## Step 2: Set up Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (recommended)
3. This will allow automatic deployments from your repository

## Step 3: Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Import Project**:
   - In Vercel dashboard, click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project

2. **Configure Environment Variables**:
   - Before deploying, click "Environment Variables"
   - Add these variables from your `.env` file:
     ```
     VITE_EMAILJS_SERVICE_ID = your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID = your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY = your_public_key_here
     ```

3. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project
   - You'll get a live URL (e.g., `your-portfolio.vercel.app`)

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   vercel login
   vercel
   ```

3. **Set Environment Variables**:
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID
   vercel env add VITE_EMAILJS_TEMPLATE_ID
   vercel env add VITE_EMAILJS_PUBLIC_KEY
   ```

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 5: Enable Automatic Deployments

With GitHub integration:
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments
- No manual deployment needed after setup

## Build Configuration

Your project is already configured for Vercel with:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (auto-detected)
- **Node Version**: 18.x (recommended)

## Environment Variables in Production

Make sure these are set in Vercel dashboard:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Performance Optimizations Already Included

1. **Static Asset Caching**: 1-year cache for immutable assets
2. **SPA Routing**: All routes redirect to index.html
3. **Build Optimization**: Vite's production optimizations
4. **Code Splitting**: Automatic with Vite
5. **Tree Shaking**: Removes unused code

## Testing Your Deployment

1. **Check the Build Locally**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Test Contact Form**:
   - Fill out the contact form
   - Check your email for test messages
   - Verify EmailJS integration works

3. **Test on Different Devices**:
   - Mobile responsiveness
   - Different browsers
   - Loading performance

## Monitoring and Analytics

### Vercel Analytics (Free)
1. Enable in Vercel dashboard
2. Install analytics package:
   ```bash
   npm install @vercel/analytics
   ```

3. Add to your main.tsx:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // Add <Analytics /> component
   ```

### Performance Monitoring
- Vercel automatically provides:
  - Core Web Vitals
  - Performance insights
  - Error tracking

## Troubleshooting

### Common Deployment Issues:

1. **Build Fails**:
   ```bash
   # Test build locally first
   npm run build
   ```

2. **Environment Variables Not Working**:
   - Check they're set in Vercel dashboard
   - Must start with `VITE_` for Vite projects
   - Redeploy after adding env vars

3. **Contact Form Not Working**:
   - Verify EmailJS credentials are correct
   - Check browser console for errors
   - Test EmailJS service independently

4. **404 Errors on Refresh**:
   - Already handled by vercel.json rewrites
   - All routes redirect to index.html

### Build Errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run build
```

## Security Considerations

1. **Environment Variables**: Only `VITE_` prefixed variables are exposed to client
2. **EmailJS**: Public key is safe to expose, private keys are server-side only
3. **HTTPS**: Vercel provides free SSL certificates
4. **Headers**: Security headers configured in vercel.json

## Vercel Features You Get Free

- **SSL Certificate**: Automatic HTTPS
- **CDN**: Global edge network
- **Automatic Deployments**: From Git pushes
- **Preview Deployments**: For pull requests
- **Analytics**: Basic usage metrics
- **Function Logs**: For debugging
- **Custom Domains**: Connect your own domain

## Upgrading (If Needed)

Vercel Pro features:
- Password protection
- Advanced analytics
- More build minutes
- Priority support
- Team collaboration

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] EmailJS configured and tested
- [ ] Vercel project created
- [ ] Environment variables set in Vercel
- [ ] Deployment successful
- [ ] Contact form tested in production
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)

Your portfolio is now live and ready to receive contact form submissions!
