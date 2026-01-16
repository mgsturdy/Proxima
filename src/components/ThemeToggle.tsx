"use client";

import { useTheme } from "@/lib/theme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      style={{
        backgroundColor: theme === "light" ? "#0A0A0A" : "#FAF8F5",
      }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} color="#FAF8F5" />
      ) : (
        <Sun size={20} color="#0A0A0A" />
      )}
    </button>
  );
}
