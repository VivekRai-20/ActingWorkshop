module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if environment variables are set
    const hasRazorpayKeyId = !!process.env.RAZORPAY_KEY_ID;
    const hasRazorpayKeySecret = !!process.env.RAZORPAY_KEY_SECRET;
    
    const keyIdPreview = process.env.RAZORPAY_KEY_ID 
      ? process.env.RAZORPAY_KEY_ID.substring(0, 10) + '...' 
      : 'Not set';
    
    res.json({
      status: 'API is working',
      environment: {
        hasRazorpayKeyId,
        hasRazorpayKeySecret,
        keyIdPreview,
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error("Test endpoint error:", err);
    res.status(500).json({ error: err.message });
  }
}