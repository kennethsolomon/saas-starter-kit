import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clientSecret = searchParams.get("client_secret");

  if (!clientSecret) {
    return NextResponse.json(
      { error: "Missing client_secret" },
      { status: 400 }
    );
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      clientSecret.split("_secret")[0]
    );

    return NextResponse.json({ status: paymentIntent.status });
  } catch (error) {
    console.error("Error retrieving payment intent:", error);
    return NextResponse.json(
      { error: "Error retrieving payment status" },
      { status: 500 }
    );
  }
}
