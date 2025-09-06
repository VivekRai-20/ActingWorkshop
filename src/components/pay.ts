// src/utils/pay.ts

// Helper function to ensure Razorpay script is loaded
function ensureRazorpayLoaded(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      console.log("Razorpay already loaded");
      resolve(true);
      return;
    }
    
    console.log("Loading Razorpay script...");
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

export async function startRazorpayCheckout({
  amount,
  name,
  email,
  phone,
}: {
  amount: number;
  name: string;
  email: string;
  phone: string;
}): Promise<any> {
  // Clean and validate inputs
  const cleanedPhone = phone ? phone.replace(/\D/g, '') : '';
  const validatedName = name ? name.trim() : '';
  const validatedEmail = email ? email.trim() : '';
  
  console.log("Starting Razorpay checkout with details:", {
    amount,
    name: validatedName,
    email: validatedEmail,
    phone: cleanedPhone
  });
  
  try {
    // Ensure Razorpay script is loaded
    const isRazorpayLoaded = await ensureRazorpayLoaded();
    if (!isRazorpayLoaded) {
      throw new Error("Failed to load Razorpay script. Please check your internet connection and try again.");
    }
    
    // call your backend to create an order
    console.log("Creating order with backend...");
    const apiBaseUrl = window.location.origin;
    const resp = await fetch(`${apiBaseUrl}/api/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        name: validatedName,
        email: validatedEmail,
        phone: cleanedPhone
      }),
    });
    
    const data = await resp.json();
    console.log("Order created response:", data);
    
    if (!resp.ok) {
      throw new Error(`API Error: ${data.error || `HTTP ${resp.status}`}`);
    }
    
    if (!data || !data.orderId) {
      throw new Error("Order creation failed: " + (data?.error || "No order ID returned"));
    }
    
    return new Promise((resolve, reject) => {
      const options: Razorpay.Options = {
        key: data.key, // razorpay key id from backend
        amount: data.amount, // in paise
        currency: data.currency || "INR",
        name: "Praveen Hingonia Workshop",
        description: "3-Day Acting Workshop",
        order_id: data.orderId,
        prefill: { 
          name: validatedName, 
          email: validatedEmail, 
          contact: cleanedPhone 
        },
        theme: { color: "#2563eb" },
        handler: async function (response: Razorpay.Response) {
          try {
            console.log("Payment successful, verifying with backend:", {
              ...response,
              name: validatedName,
              email: validatedEmail,
              phone: cleanedPhone
            });
            
            const verifyResp = await fetch(`${apiBaseUrl}/api/payment-success`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name: validatedName,
                email: validatedEmail,
                phone: cleanedPhone,
              }),
            });

            const verifyData = await verifyResp.json();
            if (verifyData.success) {
              // If there's a redirect URL, navigate to it
              if (verifyData.redirectUrl) {
                console.log("Redirecting to:", verifyData.redirectUrl);
                window.location.href = verifyData.redirectUrl;
                // Return early to prevent further execution
                return;
              }
              resolve(verifyData);
            } else {
              reject(new Error("Verification failed: " + (verifyData.error || "Unknown error")));
            }
          } catch (err) {
            console.error("Error in payment verification:", err);
            reject(err);
          }
        },
        modal: { escape: true },
      };

      try {
        console.log("Initializing Razorpay with options:", {
          key: options.key,
          amount: options.amount,
          currency: options.currency,
          order_id: options.order_id,
          prefill: options.prefill
        });
        
        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (resp: Razorpay.ErrorResponse) {
          console.error("Razorpay payment failed:", resp.error);
          console.log("Payment failure details:", {
            code: resp.error.code,
            description: resp.error.description,
            source: resp.error.source,
            step: resp.error.step,
            reason: resp.error.reason,
            metadata: resp.error.metadata
          });
          reject(resp.error);
        });

        // Add more event listeners for debugging
        rzp.on("payment.error", function(error: any) {
          console.error("Razorpay general error:", error);
          reject(new Error("Payment error: " + (error.message || "Unknown error")));
        });
        
        rzp.open();
      } catch (initError) {
        console.error("Error initializing Razorpay:", initError);
        reject(new Error("Failed to initialize payment: " + (initError.message || "Unknown error")));
      }
    });
  } catch (error) {
    console.error("Error in Razorpay checkout:", error);
    throw new Error(`Payment process failed: ${error.message || 'Unknown error'}`);
  }
}
