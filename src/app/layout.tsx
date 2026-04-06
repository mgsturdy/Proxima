import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Proxima — Environmental Toxin Diagnostics",
  description: "Better blood. Better life.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Proxima Health",
    description: "Better blood. Better life.",
    url: "https://proxima.health",
    siteName: "Proxima Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima Health",
    description: "Better blood. Better life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
