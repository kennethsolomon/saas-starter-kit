"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavButtons() {
  return (
    <>
      <SignedOut>
        <button
          className="cursor-pointer"
          onClick={() => {
            document
              .querySelector("#pricing")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-medium">Pricing</span>
        </button>
        <SignInButton
          mode="modal"
          appearance={{ elements: { rootBox: "bg-amber-400" } }}
        >
          <span className="cursor-pointer font-medium">Sign In</span>
        </SignInButton>
        <SignUpButton mode="modal">
          <span className="cursor-pointer bg-white p-2 rounded-lg text-slate-900 text-md font-medium">
            Get Started
          </span>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
