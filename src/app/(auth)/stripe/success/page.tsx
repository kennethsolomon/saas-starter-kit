// pages/success.js
import Stripe from "stripe";
import OrderSummary from "@/components/stripe/OrderSummary";

async function getStripeSession(sessionId: string) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecret) {
    throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: "2025-02-24.acacia",
  });

  return await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items.data.price.product"],
  });
}

export default async function Success({
  searchParams,
}: Readonly<{
  searchParams: { session_id: string };
}>) {
  if (!searchParams.session_id) {
    throw new Error("No session ID provided");
  }

  const stripeSession = await getStripeSession(searchParams.session_id);

  return (
    <div>
      <h1>Payment Completed</h1>
      <OrderSummary stripeSession={stripeSession} />
    </div>
  );
}
