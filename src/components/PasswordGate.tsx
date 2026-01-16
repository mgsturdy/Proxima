"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CORRECT_PASSWORD = "proximusprime";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem("proxima-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem("proxima-auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-proxima-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-proxima-offwhite/20 border-t-proxima-offwhite rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-proxima-black flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <Image 
              src="/assets/Main_Logo+Icon_OffWhite.svg"
              alt="Proxima"
              width={200}
              height={40}
              className="opacity-80"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`w-full bg-transparent border-b-2 ${
                  error ? "border-proxima-red" : "border-proxima-offwhite/20"
                } text-proxima-offwhite text-center text-lg py-4 focus:outline-none focus:border-proxima-offwhite/60 transition-colors placeholder:text-proxima-offwhite/30`}
                autoFocus
              />
              {error && (
                <p className="text-proxima-red text-sm text-center mt-4 font-mono">
                  Incorrect password
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-proxima-offwhite text-proxima-black py-4 font-sans font-medium text-sm tracking-wide hover:bg-proxima-offwhite/90 transition-colors"
            >
              Enter
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-proxima-offwhite/20 font-mono text-xs mt-16">
            Confidential Preview
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
