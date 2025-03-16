"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const Pricing = () => {
  async function handleGetStarted() {
    // const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    // if (!stripe) {
    //   return;
    // }
    // try {
    //   const response = await fetch("/api/create-payment-intent", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ amount: 5732, plan: "pro" }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log("Get Started");
  }

  return (
    <div id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the plan that's right for you and get started building your
            next great idea.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-800">
            <h3 className="text-lg font-semibold leading-8">Free</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Perfect for side projects and small teams
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-sm font-semibold">/month</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6">
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Up to 1,000 users</span>
              </li>
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Basic analytics</span>
              </li>
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Community support</span>
              </li>
            </ul>
            <div className="mt-6 flex justify-center">
              <button
                className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl p-8 ring-2 ring-blue-600">
            <h3 className="text-lg font-semibold leading-8">Pro</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
              For serious businesses and teams
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm font-semibold">/month</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6">
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Unlimited users</span>
              </li>
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex gap-x-3">
                <span>✓</span>
                <span>Custom integrations</span>
              </li>
            </ul>
            <div className="mt-6 flex justify-center">
              <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
