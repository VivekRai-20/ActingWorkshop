# Render Deployment Guide for ActingWorkshop

## 🚀 Deploy Backend to Render

### Step 1: Prepare Backend Repository
Since Render needs a separate repository for the backend, we'll create a deployment setup.

### Step 2: Create Render Web Service

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**

**Basic Settings:**
```
Name: acting-workshop-api
Environment: Node
Region: Choose closest to your users
Branch: main
Root Directory: server
```

**Build & Deploy Settings:**
```
Build Command: npm install
Start Command: npm start
```

**Advanced Settings → Environment Variables:**
```
NODE_ENV=production
RAZORPAY_KEY_ID=rzp_test_RED40nMABfQ224
RAZORPAY_KEY_SECRET=4VtJjsEIB8GdjmzJrWrMEo5m
EMAIL_USER=mi45csk07fan@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=mi45csk07fan@gmail.com
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Step 3: Update server/package.json

Make sure your `server/package.json` has:
```json
{
  "name": "acting-workshop-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "razorpay": "^2.9.4",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "nodemailer": "^6.9.7",
    "dotenv": "^16.3.1",
    "pdfkit": "^0.14.0"
  }
}
```

## 🎯 Deploy Frontend to Vercel

### Step 1: Update Environment Variables
Add to your Vercel project:
```
VITE_API_BASE_URL=https://your-render-app.onrender.com
```

### Step 2: Redeploy Frontend
Your frontend will automatically redeploy and use the Render backend.

## 🧪 Testing the Setup

### 1. Test Backend Health
```
GET https://your-render-app.onrender.com/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "Acting Workshop API",
  "version": "1.0.0"
}
```

### 2. Test Payment Flow
1. Go to your frontend
2. Click "Register Now"
3. Fill form and try payment
4. Use test card: `4111 1111 1111 1111`

## 🔧 Benefits of Render over Vercel Serverless

1. **Full Express Server**: No serverless limitations
2. **File System Access**: Can generate and serve invoices
3. **Persistent Connections**: Better for databases
4. **Email Functionality**: Full nodemailer support
5. **Easier Debugging**: Standard Node.js environment

## 📋 Deployment Checklist

- [ ] Render web service created
- [ ] Environment variables set in Render
- [ ] Backend health endpoint working
- [ ] Frontend environment variable updated
- [ ] Frontend redeployed
- [ ] Payment flow tested
- [ ] Email functionality tested

## 🚨 Important Notes

1. **Render Free Tier**: Service may sleep after 15 minutes of inactivity
2. **Cold Starts**: First request after sleep may be slow
3. **Paid Plan**: For production, consider Render's paid plan for better performance

## 🐛 Troubleshooting

### Backend Issues:
- Check Render logs in dashboard
- Verify environment variables
- Test health endpoint

### Frontend Issues:
- Check VITE_API_BASE_URL is set correctly
- Verify CORS settings allow your frontend domain
- Check browser network tab for failed requests

### Payment Issues:
- Verify Razorpay credentials
- Check server logs for payment errors
- Test with correct test card numbers

## 🔗 Quick Links

- **Render Dashboard**: https://dashboard.render.com/
- **Razorpay Dashboard**: https://dashboard.razorpay.com/
- **Your Server Health**: https://your-render-app.onrender.com/health