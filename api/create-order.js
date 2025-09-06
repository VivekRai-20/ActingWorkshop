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
      return res.status(405).json({ error: 'Method not allowed', method: req.method });
    }

    // Check environment variables
    console.log('Environment check:', {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
      keyIdStart: process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID.substring(0, 8) : 'missing'
    });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Payment service not configured',
        hasKeyId: !!process.env.RAZORPAY_KEY_ID,
        hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET
      });
    }

    // Try to load Razorpay
    let Razorpay;
    try {
      Razorpay = require('razorpay');
      console.log('Razorpay package loaded successfully');
    } catch (razorpayError) {
      console.error('Failed to load Razorpay package:', razorpayError);
      return res.status(500).json({ 
        error: 'Payment service unavailable',
        details: 'Razorpay package not available'
      });
    }

    // Parse request body
    const { amount, name, email, phone } = req.body || {};
    console.log('Request data:', { amount, name, email, phone });

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create order options
    const orderOptions = {
      amount: amount || 199900, // Rs. 1999 in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name: name || "",
        email: email || "",
        phone: phone || ""
      }
    };

    console.log('Creating order with options:', orderOptions);

    // Create Razorpay order
    const order = await razorpay.orders.create(orderOptions);
    console.log('Order created successfully:', order.id);
    
    // Return success response
    const response = {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      notes: order.notes,
      status: order.status
    };

    console.log('Sending response:', response);
    return res.status(200).json(response);

  } catch (error) {
    console.error('Unhandled error in create-order:', error);
    
    // Ensure we always return JSON
    try {
      return res.status(500).json({ 
        error: 'Internal server error',
        message: error.message,
        type: error.constructor.name,
        details: 'Payment order creation failed'
      });
    } catch (responseError) {
      console.error('Failed to send error response:', responseError);
      return res.status(500).end('Internal Server Error');
    }
  }
};