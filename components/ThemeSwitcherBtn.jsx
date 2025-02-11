"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTheme("dark");
    }
  }, [mounted]);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <button
        className="dark:text-lime-700 text-lime-500"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
