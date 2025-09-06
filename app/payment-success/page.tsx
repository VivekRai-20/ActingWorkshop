'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Download, CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  const [paymentDetails, setPaymentDetails] = useState<{
    paymentId: string;
    orderId: string;
    amount: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Extract payment details from URL query parameters
    const paymentId = searchParams.get("razorpay_payment_id");
    const orderId = searchParams.get("razorpay_order_id");
    const amount = searchParams.get("amount");

    if (paymentId && orderId && amount) {
      setPaymentDetails({
        paymentId,
        orderId,
        amount: parseInt(amount, 10),
      });
    } else {
      setError("Payment information is missing. Please contact support.");
    }
  }, [searchParams]);

  useEffect(() => {
    // Automatically set invoice URL when payment details are available
    if (paymentDetails?.paymentId) {
      setInvoiceUrl(`/api/invoice/${paymentDetails.paymentId}`);
    }
  }, [paymentDetails]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => window.location.href = "/"}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (!paymentDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 space-y-6">
          {/* Success Header */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
            <p className="text-gray-600 mt-2">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>
          </div>
          
          {/* Payment Details */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-medium">{paymentDetails.paymentId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{paymentDetails.orderId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">₹{(paymentDetails.amount / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <a 
              href={`/api/invoice/${paymentDetails.paymentId}?t=${new Date().getTime()}`}
              download={`invoice-${paymentDetails.paymentId}.pdf`}
              className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </a>
            
            <button 
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              onClick={() => window.location.href = "/"}
            >
              Return to Home
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            If you have any questions, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}