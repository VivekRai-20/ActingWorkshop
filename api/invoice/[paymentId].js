module.exports = async function handler(req, res) {
  const { paymentId } = req.query;

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

  if (!paymentId) {
    return res.status(400).json({
      success: false,
      message: "Payment ID is required"
    });
  }

  try {
    // For now, return a message that invoice generation is not available in serverless
    // In production, you would integrate with a file storage service or generate the PDF on-demand
    res.status(501).json({
      success: false,
      message: "Invoice generation is temporarily unavailable. Please contact support with your payment ID: " + paymentId
    });
  } catch (err) {
    console.error("Error retrieving invoice:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve invoice",
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
}