import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const Razorpay = require('razorpay');

export async function POST(request: NextRequest) {
  try {
    // Check for required environment variables
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!keyId || !keySecret) {
      console.error('Missing Razorpay environment variables:', {
        RAZORPAY_KEY_ID: keyId ? 'Present' : 'Missing',
        RAZORPAY_KEY_SECRET: keySecret ? 'Present' : 'Missing'
      });
      return NextResponse.json(
        { success: false, error: 'Razorpay configuration missing. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const body = await request.json();
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      email,
      name,
      phone,
    } = body;

    console.log("Payment success request received:", {
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      has_signature: !!razorpay_signature,
      email,
      name,
      phone,
    });

    // Verify Razorpay signature
    const payload = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", keySecret)
      .update(payload)
      .digest("hex");

    console.log("Signature verification:", {
      match: generated_signature === razorpay_signature,
    });

    if (generated_signature !== razorpay_signature) {
      console.error("Payment signature verification failed");
      return NextResponse.json(
        {
          success: false,
          error: "Payment verification failed",
        },
        { status: 400 }
      );
    }

    console.log("Payment verification successful for:", {
      name,
      email,
      phone,
      payment_id: razorpay_payment_id,
    });

    try {
      const orderDetails = await razorpay.orders.fetch(razorpay_order_id);
      console.log("Order details fetched:", orderDetails.id);

      const redirectUrl = `/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=${
        orderDetails.amount || 199900
      }`;

      return NextResponse.json({
        success: true,
        status: "ok",
        redirectUrl: redirectUrl,
      });
    } catch (orderErr) {
      console.error("Error fetching order details:", orderErr);
      return NextResponse.json({
        success: true,
        status: "ok",
        redirectUrl: `/payment-success?razorpay_payment_id=${razorpay_payment_id}&razorpay_order_id=${razorpay_order_id}&amount=199900`,
      });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process payment" },
      { status: 500 }
    );
  }
}