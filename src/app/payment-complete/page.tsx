"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentComplete() {
  const [status, setStatus] = useState<string>("loading");
  const searchParams = useSearchParams();

  useEffect(() => {
    const clientSecret = searchParams.get("payment_intent_client_secret");
    if (!clientSecret) {
      setStatus("error");
      return;
    }

    // You can use the client secret to retrieve the PaymentIntent status
    fetch(`/api/payment-status?client_secret=${clientSecret}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch(() => {
        setStatus("error");
      });
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {status === "loading" && <p>Checking payment status...</p>}
        {status === "succeeded" && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful!
            </h1>
            <p className="mb-4">Thank you for your payment.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Payment Error
            </h1>
            <p className="mb-4">There was an error processing your payment.</p>
          </>
        )}
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
