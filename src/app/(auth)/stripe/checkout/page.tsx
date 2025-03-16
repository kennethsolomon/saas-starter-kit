// pages/checkout.js
"use client";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is missing in environment variables"
  );
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function Checkout() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/stripe/checkout-sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: [
          { id: "1", name: "Test Product", price: 1000, plan: "pro" },
        ],
        returnUrl: window.location.origin,
      }),
    });
    const { sessionId } = await response.json();
    console.log("Session ID", sessionId);
    if (stripe) {
      console.log("Stripe is loaded");
      await stripe.redirectToCheckout({ sessionId });
    } else {
      console.error("Stripe is not loaded");
    }
  };
  return (
    <div>
      <h1>Stripe Checkout Example</h1>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
