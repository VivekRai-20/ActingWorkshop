# Vercel Deployment Setup for ActingWorkshop

## Environment Variables Setup

To set up your payment functionality on Vercel, you need to configure the following environment variables:

### Required Environment Variables

1. **RAZORPAY_KEY_ID**: Your Razorpay Key ID
2. **RAZORPAY_KEY_SECRET**: Your Razorpay Key Secret

### Setting up Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXXXXXXXX
```

### How to get Razorpay Credentials

1. Sign up/login to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to **Settings** → **API Keys**
3. Generate API Keys (use Test Mode for testing)
4. Copy the Key ID and Key Secret

### Test vs Live Mode

- **Test Mode**: Use `rzp_test_` keys for testing
- **Live Mode**: Use `rzp_live_` keys for production

### Deployment Steps

1. Commit all changes to your GitHub repository
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add Vercel serverless functions for payments"
   git push origin main
   ```
3. Redeploy on Vercel (should happen automatically)
4. Add environment variables in Vercel dashboard
5. Test the payment functionality

### Testing Payment

1. Use Razorpay test card: `4111 1111 1111 1111`
2. Use any future expiry date
3. Use any 3-digit CVV
4. Use any valid name

### Troubleshooting

- Check Vercel function logs in the dashboard
- Ensure environment variables are properly set
- Verify Razorpay webhook URLs if needed
- Check browser network tab for API errors

### Important Notes

- Email functionality is disabled in this Vercel setup
- Invoice generation is temporarily unavailable
- Customer data is validated but not permanently stored
- Consider integrating with a database service for production use