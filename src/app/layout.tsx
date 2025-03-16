import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import NavButtons from "@/components/NavButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Starter Kit",
  description: "SaaS Starter Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="max-w-7xl mx-auto">
            <Providers>
              <header className="flex justify-end items-center p-4 gap-4 h-16">
                <NavButtons />
              </header>
              {children}
            </Providers>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
