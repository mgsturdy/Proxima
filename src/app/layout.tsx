import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PasswordGate from "@/components/PasswordGate";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proxima — Environmental Toxin Diagnostics",
  description: "Advanced diagnostics and therapeutic blood filtration for environmental toxin exposure. A science-first approach to modern health optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">
        <PasswordGate>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PasswordGate>
      </body>
    </html>
  );
}
