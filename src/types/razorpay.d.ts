declare namespace Razorpay {
  interface Prefill {
    name?: string;
    email?: string;
    contact?: string;
  }

  interface Theme {
    color?: string;
  }

  interface Options {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description?: string;
    image?: string;
    order_id?: string;
    handler: (response: Response) => void;
    prefill?: Prefill;
    notes?: Record<string, string>;
    theme?: Theme;
    modal?: {
      escape?: boolean;
    };
  }

  interface Response {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  interface ErrorResponse {
    error: {
      code: string;
      description: string;
      source: string;
      step: string;
      reason: string;
      metadata: {
        order_id: string;
        payment_id: string;
      };
    };
  }
}

interface Window {
  Razorpay: new (options: Razorpay.Options) => {
    open: () => void;
    on: (event: "payment.failed", cb: (resp: Razorpay.ErrorResponse) => void) => void;
  };
}
