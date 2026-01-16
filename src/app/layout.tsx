import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PasswordGate from "@/components/PasswordGate";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/lib/theme";
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-serif">
        <ThemeProvider>
          <PasswordGate>
            <Navbar />
            <main>{children}</main>
            <ThemeToggle />
            <Footer />
          </PasswordGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
