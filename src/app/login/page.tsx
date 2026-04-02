"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const redirect = searchParams.get("redirect") || "/";
        window.location.href = redirect;
        return;
      } else {
        setError(true);
        setPassword("");
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-proxima-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-16">
          <Image
            src="/assets/Main_Logo+Icon_OffWhite.svg"
            alt="Proxima"
            width={200}
            height={40}
            className="opacity-80"
          />
        </div>

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
              disabled={submitting}
            />
            {error && (
              <p className="text-proxima-red text-sm text-center mt-4 font-mono">
                Incorrect password
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-proxima-offwhite text-proxima-black py-4 font-sans font-medium text-sm tracking-wide hover:bg-proxima-offwhite/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
