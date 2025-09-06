# Vercel Deployment Setup for Acting Workshop

## Overview

This document provides step-by-step instructions for deploying the Acting Workshop Next.js application to Vercel.

## Pre-deployment Fixes Applied

### 1. ESLint Configuration Fix

- **Issue**: `Cannot find package 'globals' imported from eslint.config.js`
- **Solution**: Replaced Vite-style ESLint config with Next.js standard `.eslintrc.js`
- **Files Changed**:
  - Removed: `eslint.config.js`
  - Added: `.eslintrc.js` with Next.js compatibility

### 2. Suspense Boundary Fix

- **Issue**: `useSearchParams() should be wrapped in a suspense boundary`
- **Solution**: Wrapped the payment success page component in `<Suspense>`
- **Files Changed**:
  - `app/payment-success/page.tsx` - Added Suspense wrapper and dynamic rendering

### 3. Static Generation Configuration

- **Added**: `export const dynamic = 'force-dynamic'` to payment-success page
- **Reason**: Prevents static generation issues with dynamic search parameters

## Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository: `VivekRai-20/ActingWorkshop`

### 2. Configure Environment Variables

**Step-by-step:**
1. Go to your project dashboard on Vercel
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add the following variables:

```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

**Important Notes:**
- Use test credentials for development: `rzp_test_xxxxxxxxxx`
- Use live credentials for production: `rzp_live_xxxxxxxxxx`
- Set these variables for all environments (Development, Preview, Production)
- Do NOT include these in your code or vercel.json file
- Redeploy after adding environment variables

### 3. Build Configuration

Vercel will automatically detect Next.js and use the following settings:

- Build Command: `npm run build`
- Output Directory: `.next`
- Node.js Version: 18.x

### 4. Domain Configuration

1. After successful deployment, Vercel will provide a URL like: `https://your-app.vercel.app`
2. Optionally, configure a custom domain in the Vercel dashboard

## Payment Integration Testing

### Test Credentials

Use these Razorpay test credentials for testing:

- **Card Number**: 4111 1111 1111 1111
- **Expiry**: Any future date
- **CVV**: Any 3 digits
- **Name**: Any valid name

### Testing Flow

1. Navigate to the deployed application
2. Click "Join Workshop Now"
3. Fill in customer details
4. Use test payment credentials
5. Verify payment success page and invoice download

## File Structure

```
ActingWorkshop/
├── app/
│   ├── api/
│   │   ├── create-order/route.ts      # Payment order creation
│   │   ├── payment-success/route.ts   # Payment verification
│   │   └── invoice/[paymentId]/route.ts # Invoice generation
│   ├── payment-success/
│   │   └── page.tsx                   # Payment success page (with Suspense)
│   ├── globals.css                    # Global styles with dark mode
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Home page
├── components/                        # React components
├── lib/                              # Utility functions
├── public/assets/                    # Static assets
├── .eslintrc.js                      # ESLint configuration
├── vercel.json                       # Vercel deployment config
└── next.config.mjs                   # Next.js configuration
```

## Troubleshooting

### Common Issues

1. **Environment Variable Reference Errors**
   - Error: `Environment Variable "RAZORPAY_KEY_ID" references Secret "razorpay_key_id", which does not exist`
   - Solution: Remove env variables from vercel.json and set them in Vercel dashboard instead
   - Never use @ prefix in vercel.json unless you have actual Vercel secrets configured

2. **Environment Variables Not Working**

   - Ensure variables are set in Vercel dashboard
   - Redeploy after adding environment variables
   - Check that variable names match exactly (case-sensitive)

3. **Payment Gateway Errors**

   - Verify Razorpay credentials
   - Check API route logs in Vercel dashboard
   - Ensure test/live keys match the environment

3. **Static Generation Errors**
   - Ensure `dynamic = 'force-dynamic'` is set for pages using search params
   - Check for proper Suspense boundaries around client-side hooks

### Monitoring

- Check deployment logs in Vercel dashboard
- Monitor function logs for API routes
- Use Vercel Analytics for performance monitoring

## Post-Deployment Checklist

- [ ] Verify home page loads correctly
- [ ] Test payment flow with test credentials
- [ ] Check invoice generation and download
- [ ] Verify dark mode functionality
- [ ] Test responsive design on mobile
- [ ] Check all navigation links
- [ ] Verify environment variables are working

## Support

For deployment issues:

1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Ensure the latest code is pushed to GitHub
4. Contact support if Razorpay integration issues persist

---

**Last Updated**: January 2025
**Next.js Version**: 15.1.0
**Vercel**: Latest
