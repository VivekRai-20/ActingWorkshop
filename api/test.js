module.exports = async function handler(req, res) {
  try {
    // Set CORS headers first
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.setHeader('Content-Type', 'application/json');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check environment variables
    const hasRazorpayKeyId = !!process.env.RAZORPAY_KEY_ID;
    const hasRazorpayKeySecret = !!process.env.RAZORPAY_KEY_SECRET;
    
    const keyIdPreview = process.env.RAZORPAY_KEY_ID 
      ? process.env.RAZORPAY_KEY_ID.substring(0, 12) + '...' 
      : 'Not set';
    
    // Test if Razorpay package is available
    let razorpayAvailable = false;
    let razorpayError = null;
    try {
      const Razorpay = require('razorpay');
      // Try to create an instance
      if (hasRazorpayKeyId && hasRazorpayKeySecret) {
        const testInstance = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        razorpayAvailable = true;
      } else {
        razorpayAvailable = 'Package available but credentials missing';
      }
    } catch (e) {
      razorpayError = e.message;
    }
    
    const result = {
      status: 'API is working! 🎉',
      timestamp: new Date().toISOString(),
      environment: {
        nodeVersion: process.version,
        hasRazorpayKeyId,
        hasRazorpayKeySecret,
        keyIdPreview,
        razorpayAvailable,
        razorpayError
      },
      recommendation: hasRazorpayKeyId && hasRazorpayKeySecret 
        ? '✅ Ready for payments!' 
        : '⚠️ Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables in Vercel dashboard'
    };

    console.log('Test endpoint response:', result);
    return res.status(200).json(result);
    
  } catch (err) {
    console.error('Test endpoint error:', err);
    
    try {
      return res.status(500).json({ 
        error: 'Test endpoint failed',
        message: err.message,
        stack: err.stack
      });
    } catch (responseError) {
      console.error('Failed to send error response:', responseError);
      return res.status(500).end('Internal Server Error');
    }
  }
};