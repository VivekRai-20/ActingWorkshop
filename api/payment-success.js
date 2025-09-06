const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

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

  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, email, name, phone } = req.body;

    console.log("Payment success request received:", {
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      signature: razorpay_signature ? 'received' : 'missing',
      email,
      name,
      phone
    });
    
    // Verify Razorpay signature
    const payload = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(payload)
      .digest("hex");
      
    console.log("Signature verification:", {
      match: generated_signature === razorpay_signature
    });
    
    if (generated_signature !== razorpay_signature) {
      console.error("Payment signature verification failed");
      return res.status(400).json({
        success: false,
        error: "Payment verification failed"
      });
    }
    
    console.log("Payment verification successful for:", { name, email, phone, payment_id: razorpay_payment_id });
    
    try {
      const orderDetails = await razorpay.orders.fetch(razorpay_order_id);
      console.log("Order details fetched:", orderDetails.id, orderDetails.amount);
      
      const customerName = name || (orderDetails.notes && orderDetails.notes.name) || "";
      const customerEmail = email || (orderDetails.notes && orderDetails.notes.email) || "";
      const customerPhone = phone || (orderDetails.notes && orderDetails.notes.phone) || "";
      
      // Create redirect URL for the deployed frontend
      const baseUrl = req.headers.origin || 'https://your-vercel-app.vercel.app';
      const redirectUrl = `${baseUrl}/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=${orderDetails.amount || 199900}`;
      
      console.log("Redirecting to:", redirectUrl);
      
      res.json({
        success: true,
        status: "ok",
        redirectUrl: redirectUrl
      });
    } catch (orderErr) {
      console.error("Error fetching order details:", orderErr);
      const baseUrl = req.headers.origin || 'https://your-vercel-app.vercel.app';
      res.json({
        success: true,
        status: "ok",
        redirectUrl: `${baseUrl}/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=199900`
      });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    res.status(500).json({ success: false, error: "Failed to process payment" });
  }
}