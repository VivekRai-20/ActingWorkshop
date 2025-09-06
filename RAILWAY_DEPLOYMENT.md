# Railway Deployment Guide for ActingWorkshop

## 🚀 Deploy Backend to Railway

### Step 1: Prepare Railway Deployment

Railway is excellent for full-stack applications with automatic deployments, built-in databases, and great developer experience.

### Step 2: Create Railway Project

1. **Go to [Railway Dashboard](https://railway.app/)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Choose "Deploy from GitHub repo"**
5. **Select your ActingWorkshop repository**
6. **Railway will auto-detect it's a Node.js app**

### Step 3: Configure Railway Service

**Service Configuration:**
```
Service Name: acting-workshop-api
Start Command: npm start
Root Directory: server
```

**Environment Variables:**
In your Railway project dashboard, go to Variables tab and add:
```
NODE_ENV=production
PORT=${{RAILWAY_PUBLIC_PORT}}
RAZORPAY_KEY_ID=rzp_test_RED40nMABfQ224
RAZORPAY_KEY_SECRET=4VtJjsEIB8GdjmzJrWrMEo5m
EMAIL_USER=mi45csk07fan@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=mi45csk07fan@gmail.com
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

**Note**: Railway automatically provides `${{RAILWAY_PUBLIC_PORT}}` variable.

### Step 4: Configure Railway Settings

In your Railway service settings:

1. **Root Directory**: Set to `server`
2. **Start Command**: `npm start`
3. **Build Command**: `npm install` (auto-detected)
4. **Health Check**: `/health` (optional)

### Step 5: Update server/package.json

Ensure your `server/package.json` has:
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

Add to your Vercel project environment variables:
```
VITE_API_BASE_URL=https://your-railway-app.railway.app
```

You'll get the Railway URL after deployment (format: `https://servicename-production-xxxx.up.railway.app`)

### Step 2: Redeploy Frontend

Your frontend will automatically redeploy and use the Railway backend.

## 🧪 Testing the Setup

### 1. Test Backend Health

```
GET https://your-railway-app.railway.app/health
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

## 🔧 Benefits of Railway

1. **Automatic Deployments**: Git-based deployments
2. **Built-in Monitoring**: Logs, metrics, and health checks
3. **Environment Management**: Easy variable management
4. **Database Support**: Built-in PostgreSQL, MySQL, Redis
5. **No Cold Starts**: Always-on services
6. **Great DX**: Excellent developer experience
7. **Affordable**: Better pricing than most competitors

## 📋 Deployment Checklist

- [ ] Railway project created
- [ ] Environment variables set in Railway
- [ ] Backend deployed and health endpoint working
- [ ] Frontend environment variable updated (VITE_API_BASE_URL)
- [ ] Frontend redeployed to Vercel
- [ ] Payment flow tested end-to-end
- [ ] Email functionality tested

## 🚨 Important Notes

1. **Railway Free Tier**: 
   - $5 credit per month
   - No sleeping (unlike Render/Heroku)
   - Good for development and low-traffic production

2. **Custom Domains**: 
   - Available on all plans
   - Easy SSL certificate management

3. **Scaling**: 
   - Automatic scaling available
   - Can handle production traffic

## 🐛 Troubleshooting

### Backend Issues:
- Check Railway service logs in dashboard
- Verify environment variables are set correctly
- Test health endpoint: `/health`
- Check if service is running in Railway dashboard

### Frontend Issues:
- Verify `VITE_API_BASE_URL` is set correctly in Vercel
- Check Railway service URL is accessible
- Verify CORS settings allow your frontend domain
- Check browser network tab for failed requests

### Payment Issues:
- Verify Razorpay credentials in Railway environment variables
- Check Railway service logs for payment errors
- Test with correct test card numbers: `4111 1111 1111 1111`
- Ensure Railway service is not sleeping

### Common Railway Issues:
- **Build fails**: Check if `server/package.json` exists
- **Service not starting**: Verify start command and PORT variable
- **Environment variables**: Make sure all required vars are set

## 🔗 Quick Links

- **Railway Dashboard**: https://railway.app/dashboard
- **Railway Docs**: https://docs.railway.app/
- **Razorpay Dashboard**: https://dashboard.razorpay.com/
- **Your Service Health**: https://your-railway-app.railway.app/health

## 🚀 Additional Railway Features

### Database Integration (Optional)
If you want to add a database later:
```bash
# In Railway dashboard, click "New" → "Database" → "PostgreSQL"
# Railway will provide DATABASE_URL automatically
```

### Monitoring & Logs
- Real-time logs in Railway dashboard
- Metrics and usage statistics
- Error tracking and alerts

### CI/CD
- Automatic deployments on git push
- Preview deployments for PRs
- Rollback capabilities

Railway is an excellent choice for your acting workshop application! 🎭✨