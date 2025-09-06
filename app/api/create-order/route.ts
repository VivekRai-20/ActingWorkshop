import { NextRequest, NextResponse } from 'next/server';

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
        { error: 'Razorpay configuration missing. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const body = await request.json();
    const { amount, name, email, phone } = body;

    console.log("Create order request received:", { amount, name, email, phone });

    const options = {
      amount: amount || 199900, // Rs. 1999 in paise (discounted price)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name: name || "",
        email: email || "",
        phone: phone || "",
      },
    };

    const order = await razorpay.orders.create(options);
    console.log("Order created successfully:", order.id);

    return NextResponse.json({
      ...order,
      key: keyId,
      orderId: order.id,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}