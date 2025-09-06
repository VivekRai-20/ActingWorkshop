import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";

interface PaymentConfirmationProps {
  paymentId: string;
  orderId: string;
  amount: number;
  onSubmit: (customerDetails: CustomerDetails) => Promise<void>;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

const PaymentConfirmation = ({ paymentId, orderId, amount, onSubmit }: PaymentConfirmationProps) => {
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setWarning(null);
    setIsSubmitting(true);

    // Enhanced validation
    if (!customerDetails.name.trim()) {
      setError("Please enter your name");
      setIsSubmitting(false);
      return;
    }

    if (!customerDetails.email.trim()) {
      setError("Please enter your email address");
      setIsSubmitting(false);
      return;
    }
    
    if (!customerDetails.email.includes('@')) {
      setError("Please enter a valid email address with @ symbol");
      setIsSubmitting(false);
      return;
    }

    if (!customerDetails.phone.trim()) {
      setError("Please enter your phone number");
      setIsSubmitting(false);
      return;
    }
    
    if (customerDetails.phone.length < 10) {
      setError("Phone number must be at least 10 digits");
      setIsSubmitting(false);
      return;
    }

    // Remove any non-numeric characters from phone
    const cleanedPhone = customerDetails.phone.replace(/\D/g, '');
    const updatedDetails = {
      ...customerDetails,
      phone: cleanedPhone
    };

    try {
      console.log("Submitting customer details:", updatedDetails);
      const response = await onSubmit(updatedDetails);
      
      // Check for warnings in the response
      if (response && response.warning) {
        setWarning(response.warning);
      }
      
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting customer details:", err);
      setError(err.message || "Failed to submit details. Please try again. If the problem persists, please contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Thank You!</h1>
            <p className="text-gray-600 mt-2">
              Your details have been submitted successfully. An invoice has been sent to your email.
            </p>
            {warning && warning.includes("email") && (
              <p className="text-yellow-600 text-sm mt-2">
                If you don't receive an email, you can download your invoice from the button below.
              </p>
            )}
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment ID:</span>
              <span className="font-medium">{paymentId}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-medium">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">₹{(amount / 100).toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href={`${import.meta.env.VITE_API_BASE_URL || window.location.origin}/invoice/${paymentId}?t=${new Date().getTime()}`}
              download={`invoice-${paymentId}.pdf`}
              className="flex items-center justify-center w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </a>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = "/"}
            >
              Return to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
          <p className="text-gray-600 mt-2">
            Please provide your details to complete the registration and receive your invoice.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            You'll be able to download your invoice after submitting your details.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Payment ID:</span>
            <span className="font-medium">{paymentId}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium">₹{(amount / 100).toFixed(2)}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        {warning && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-sm">
            {warning}
            {warning.includes("email") && (
              <p className="mt-2 text-sm">
                <strong>Note:</strong> You may not receive an email confirmation due to server configuration. 
                Please save your payment ID for reference: <strong>{paymentId}</strong>
              </p>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={customerDetails.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={customerDetails.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={customerDetails.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;