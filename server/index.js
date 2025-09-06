import express from "express";
import Razorpay from "razorpay";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { createInvoice } from "./invoice.js";

// Ensure invoices directory exists
const invoicesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'invoices');
if (!fs.existsSync(invoicesDir)) {
  console.log('Creating invoices directory at:', invoicesDir);
  fs.mkdirSync(invoicesDir, { recursive: true });
}

dotenv.config();

// Get current directory (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'invoices' directory
app.use('/invoices', express.static(path.join(__dirname, 'invoices')));

// Serve static files from the root directory (for test files)
app.use(express.static(path.join(__dirname, '..')));

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1️⃣ Create Razorpay Order
app.post("/create-order", async (req, res) => {
  const { amount, name, email, phone } = req.body;
  
  // Log the received data
  console.log("Create order request received:", { amount, name, email, phone });
  
  const options = {
    amount: amount || 29900, // Use amount from request or default to Rs. 299 (in paise)
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      name: name || "",
      email: email || "",
      phone: phone || ""
    }
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Order created successfully:", order.id);
    
    // Send key_id along with the order for frontend
    res.json({
      ...order,
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id // Add orderId field for compatibility
    });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).send(err);
  }
});

// 2️⃣ Handle Payment Success + Send Mail
app.post("/payment-success", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, email, name, phone } = req.body;

  try {
    // Log all received data for debugging
    console.log("Payment success request received:", req.body);
    
    // Verify Razorpay signature
    // Razorpay expects the signature to be generated from order_id|payment_id
    // Let's log the values we're using to generate the signature
    console.log("Generating signature with:", {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      key_secret: process.env.RAZORPAY_KEY_SECRET ? "[PRESENT]" : "[MISSING]"
    });
    
    // According to Razorpay docs, the signature should be generated from order_id + payment_id
    // The correct format is: orderId + '|' + paymentId
    const payload = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(payload)
      .digest("hex");
      
    // For debugging purposes, log the first few characters of each signature
    console.log("Signature comparison:", {
      received_signature_start: razorpay_signature ? razorpay_signature.substring(0, 10) + '...' : 'missing',
      generated_signature_start: generated_signature.substring(0, 10) + '...',
      match: generated_signature === razorpay_signature
    });
    
    console.log("Signature verification:", {
      received: razorpay_signature,
      generated: generated_signature,
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
    
    // Fetch order details from Razorpay to get customer details from notes
    try {
      const orderDetails = await razorpay.orders.fetch(razorpay_order_id);
      console.log("Order details fetched:", orderDetails);
      
      // If customer details are missing in the request but present in order notes, use those
      const customerName = name || (orderDetails.notes && orderDetails.notes.name) || "";
      const customerEmail = email || (orderDetails.notes && orderDetails.notes.email) || "";
      const customerPhone = phone || (orderDetails.notes && orderDetails.notes.phone) || "";
      
      console.log("Using customer details:", { customerName, customerEmail, customerPhone });
      
      // Redirect to payment success page with query parameters
      const redirectUrl = `/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=${orderDetails.amount || 29900}`;
      console.log("Redirecting to:", redirectUrl);
      
      res.json({
        success: true,
        status: "ok",
        redirectUrl: redirectUrl
      });
    } catch (orderErr) {
      console.error("Error fetching order details:", orderErr);
      // Continue with the data we have
      res.json({
        success: true,
        status: "ok",
        redirectUrl: `/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=29900`
      });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    res.status(500).json({ success: false, error: "Failed to process payment" });
  }
});

// 3️⃣ Mail Function with Invoice
async function sendMail(customerEmail, paymentId, customerName = "Student", phone = "", amount = 29900) {
  // Validate inputs
  if (!customerEmail || !paymentId) {
    throw new Error("Missing required parameters for sending email");
  }

  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email configuration is missing");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Generate invoice PDF
    const invoicePath = await createInvoice({
      paymentId,
      customerName,
      customerEmail,
      customerPhone: phone,
      amount,
      date: new Date().toISOString().split('T')[0],
      workshopName: "Character Decode Camp - 3-Day Acting Workshop"
    });

    // Format amount for display
    const formattedAmount = (amount / 100).toFixed(2);

    const mailOptions = {
      from: `"Character Decode Camp" <${process.env.EMAIL_USER}>`,
      to: [customerEmail, process.env.ADMIN_EMAIL], // ✅ Customer + Admin
      subject: "✅ Workshop Registration Successful",
      text: `Hello ${customerName},

Your payment of ₹${formattedAmount} for the 3-Day Acting Workshop was successful! 🎉

Payment ID: ${paymentId}

We're excited to have you join us for the Character Decode Camp. You'll receive further details about the workshop schedule and access information shortly.

Thank you!

- Praveen Hingonia
Character Decode Camp`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Workshop Registration Successful! 🎉</h2>
        <p>Hello ${customerName},</p>
        <p>Your payment of <strong>₹${formattedAmount}</strong> for the 3-Day Acting Workshop was successful!</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p>We're excited to have you join us for the Character Decode Camp. You'll receive further details about the workshop schedule and access information shortly.</p>
        <p>Thank you!</p>
        <p style="margin-top: 30px;">
          - Praveen Hingonia<br>
          Character Decode Camp
        </p>
      </div>`,
      attachments: [
        {
          filename: `invoice-${paymentId}.pdf`,
          path: invoicePath
        }
      ]
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw to be handled by the caller
  }
}

// 5️⃣ Submit Customer Details Endpoint
app.post("/submit-customer-details", async (req, res) => {
  try {
    // Log the raw request body for debugging
    console.log("Raw customer details request body:", JSON.stringify(req.body));
    
    const { name, email, phone, paymentId, orderId, amount } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone || !paymentId || !amount) {
      const missingFields = Object.entries({ name, email, phone, paymentId, amount })
        .filter(([_, value]) => !value)
        .map(([key]) => key);
      
      console.error("Missing required fields:", missingFields);
      console.log("Received values:", { name, email, phone, paymentId, orderId, amount });
      
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
    
    // Validate phone number (basic check)
    if (phone.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number (must be at least 10 digits)",
        field: "phone"
      });
    }

    console.log("Customer details received:", { name, email, phone, paymentId, orderId, amount });
    
    // Generate invoice regardless of email success
    let invoicePath;
    let invoiceUrl;
    
    try {
      // Generate invoice PDF
      invoicePath = await createInvoice({
        paymentId,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        amount,
        date: new Date().toISOString().split('T')[0],
        workshopName: "Character Decode Camp - 3-Day Acting Workshop"
      });
      
      // Create a URL for the invoice
      const invoiceFilename = path.basename(invoicePath);
      invoiceUrl = `/invoices/${invoiceFilename}`;
      
      console.log("Invoice generated successfully:", invoicePath);
    } catch (invoiceErr) {
      console.error("Error generating invoice:", invoiceErr);
    }
    
    try {
        // Send email with invoice
        await sendMail(email, paymentId, name, phone, amount);
        console.log("Email sent successfully to", email);
      } catch (emailErr) {
        // Log email error but don't fail the request
        console.error("Error sending email:", emailErr);
        console.error("Email error details:", {
          message: emailErr.message,
          stack: emailErr.stack,
          code: emailErr.code
        });
        
        // Determine specific email error message
        let warningMessage = "Invoice email could not be sent. Please contact support.";
        
        if (emailErr.code === 'EAUTH') {
          warningMessage = "Email authentication failed. Your details were saved, but the invoice email could not be sent due to server configuration.";
        } else if (emailErr.code === 'ESOCKET' || emailErr.code === 'ECONNECTION') {
          warningMessage = "Network error while sending email. Your details were saved, but the invoice email could not be sent.";
        } else if (emailErr.message && emailErr.message.includes('password')) {
          warningMessage = "Email configuration error. Your details were saved, but the invoice email could not be sent due to server configuration.";
        }
        
        // Continue processing - we'll still return success to the client
        // But include a warning in the response
        return res.status(200).json({
          success: true,
          message: "Details submitted successfully",
          warning: warningMessage,
          invoiceUrl: invoiceUrl || null
        });
      }
    
    // Store customer details in a database or file (future enhancement)
    // For now, we'll just log them and return success
    
    res.status(200).json({
      success: true,
      message: "Details submitted successfully",
      details: {
        name,
        email,
        paymentId
      },
      invoiceUrl: invoiceUrl || null
    });
  } catch (err) {
    console.error("Error processing customer details:", err);
    res.status(500).json({
      success: false,
      message: "Failed to process customer details",
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
});

// 6️⃣ Get Invoice by Payment ID
app.get("/invoice/:paymentId", async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required"
      });
    }
    
    console.log("Attempting to retrieve invoice for payment ID:", paymentId);
    const invoicePath = path.join(__dirname, 'invoices', `invoice-${paymentId}.pdf`);
    console.log("Invoice path:", invoicePath);
    
    // Check if invoice exists
    if (!fs.existsSync(invoicePath)) {
      console.log("Invoice not found at path:", invoicePath);
      
      // Try to generate the invoice if it doesn't exist
      try {
        console.log("Attempting to generate invoice for payment ID:", paymentId);
        const generatedInvoicePath = await createInvoice({
          paymentId,
          customerName: "Customer", // Default value
          customerEmail: "customer@example.com", // Default value
          customerPhone: "N/A", // Default value
          amount: 0, // Will be updated with actual amount if available
          date: new Date().toISOString().split('T')[0],
          workshopName: "Character Decode Camp - 3-Day Acting Workshop"
        });
        
        console.log("Invoice generated successfully at:", generatedInvoicePath);
        return res.sendFile(generatedInvoicePath);
      } catch (genErr) {
        console.error("Error generating invoice:", genErr);
        return res.status(404).json({
          success: false,
          message: "Invoice not found and could not be generated"
        });
      }
    }
    
    console.log("Sending invoice file from:", invoicePath);
    
    // Read the file as a buffer
    fs.readFile(invoicePath, (err, data) => {
      if (err) {
        console.error("Error reading invoice file:", err);
        return res.status(500).send("Error reading invoice file");
      }
      
      // Set headers for file download
      res.setHeader('Content-Disposition', `attachment; filename=invoice-${paymentId}.pdf`);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', data.length);
      
      // Send the file data
      res.send(data);
      console.log("Invoice file sent successfully");
    });
  } catch (err) {
    console.error("Error retrieving invoice:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve invoice",
      error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
    });
  }
});

// Run server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
