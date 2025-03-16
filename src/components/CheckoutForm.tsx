"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    setErrorMessage(undefined);

    try {
      const response = await axios.post("/api/create-payment-intent", {
        amount: 1000,
        plan: "pro",
      });

      const data = response.data;

      console.log(data);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-complete`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (e) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4">
      <PaymentElement />
      {errorMessage && (
        <div className="text-red-500 mt-4 text-sm">{errorMessage}</div>
      )}
      <button
        disabled={!stripe || isLoading}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
