import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
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
    res.status(500).json({ error: err.message });
  }
}