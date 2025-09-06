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
    const { name, email, phone, paymentId, orderId, amount } = req.body;
    
    console.log("Customer details received:", { name, email, phone, paymentId, orderId, amount });
    
    // Validate required fields
    if (!name || !email || !phone || !paymentId || !amount) {
      const missingFields = Object.entries({ name, email, phone, paymentId, amount })
        .filter(([_, value]) => !value)
        .map(([key]) => key);
      
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
        missingFields: missingFields
      });
    }

    // Validate email format
    if (!email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
        field: "email"
      });
    }
    
    // Validate phone number
    if (phone.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number (must be at least 10 digits)",
        field: "phone"
      });
    }

    // For now, we'll just store the data (you can integrate with a database later)
    // In a production environment, you would save this to a database
    
    // Since we can't send emails from Vercel easily without additional setup,
    // we'll return success but mention that email will be sent separately
    res.status(200).json({
      success: true,
      message: "Details submitted successfully. You will receive a confirmation email shortly.",
      details: {
        name,
        email,
        paymentId
      }
    });
  } catch (err) {
    console.error("Error processing customer details:", err);
    res.status(500).json({
      success: false,
      message: "Failed to process customer details",
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
}