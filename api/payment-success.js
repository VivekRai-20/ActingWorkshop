module.exports = async function handler(req, res) {
  try {
    // Set CORS headers first
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.setHeader('Content-Type', 'application/json');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Only allow POST method
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check environment variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Payment service not configured'
      });
    }

    // Load required modules
    const Razorpay = require('razorpay');
    const crypto = require('crypto');

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, email, name, phone } = req.body || {};

    console.log('Payment success request:', {
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      has_signature: !!razorpay_signature,
      email, name, phone
    });

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required payment parameters'
      });
    }

    // Verify signature
    const payload = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(payload)
      .digest("hex");

    console.log('Signature verification:', {
      match: generated_signature === razorpay_signature
    });

    if (generated_signature !== razorpay_signature) {
      console.error('Payment signature verification failed');
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed'
      });
    }

    console.log('Payment verification successful');

    // Get order details
    try {
      const orderDetails = await razorpay.orders.fetch(razorpay_order_id);
      console.log('Order details fetched:', orderDetails.id);

      const baseUrl = req.headers.origin || req.headers.host || 'https://your-app.vercel.app';
      const redirectUrl = `${baseUrl.startsWith('http') ? baseUrl : 'https://' + baseUrl}/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=${orderDetails.amount || 199900}`;

      console.log('Redirecting to:', redirectUrl);

      return res.status(200).json({
        success: true,
        status: "ok",
        redirectUrl: redirectUrl
      });
    } catch (orderErr) {
      console.error('Error fetching order details:', orderErr);
      const baseUrl = req.headers.origin || req.headers.host || 'https://your-app.vercel.app';
      return res.status(200).json({
        success: true,
        status: "ok",
        redirectUrl: `${baseUrl.startsWith('http') ? baseUrl : 'https://' + baseUrl}/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=199900`
      });
    }

  } catch (error) {
    console.error('Payment verification error:', error);
    
    try {
      return res.status(500).json({ 
        success: false, 
        error: 'Payment verification failed',
        message: error.message
      });
    } catch (responseError) {
      console.error('Failed to send error response:', responseError);
      return res.status(500).end('Internal Server Error');
    }
  }
};