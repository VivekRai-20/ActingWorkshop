const Razorpay = require("razorpay");

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if environment variables are set
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('Missing Razorpay environment variables:', {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET
    });
    return res.status(500).json({ 
      error: 'Payment service configuration error. Please contact support.',
      details: 'Environment variables not configured'
    });
  }

  try {
    // Initialize Razorpay inside the function to avoid initialization issues
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount, name, email, phone } = req.body;
    
    console.log("Create order request received:", { amount, name, email, phone });
    
    const options = {
      amount: amount || 199900, // Rs. 1999 in paise (discounted price)
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        name: name || "",
        email: email || "",
        phone: phone || ""
      }
    };

    const order = await razorpay.orders.create(options);
    console.log("Order created successfully:", order.id);
    
    res.json({
      ...order,
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id
    });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ 
      error: err.message || 'Unknown error',
      details: 'Failed to create payment order. Please try again.',
      type: err.constructor.name
    });
  }
}