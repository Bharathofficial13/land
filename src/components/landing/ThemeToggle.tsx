import { useState } from "react";

const themes = [
  { id: "default", color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500", class: "" },
  { id: "vibrant", color: "bg-red-500", class: "theme-vibrant" },
  { id: "minimal", color: "bg-gray-700", class: "theme-minimal" },
];

export const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState("default");

  const switchTheme = (theme: typeof themes[0]) => {
    // Remove all theme classes
    document.documentElement.classList.remove("theme-vibrant", "theme-minimal");
    // Add new theme class if not default
    if (theme.class) document.documentElement.classList.add(theme.class);
    setCurrentTheme(theme.id);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => switchTheme(theme)}
          className={`w-8 h-8 rounded-full border-2 border-white/30 hover:border-white transition-all
            ${theme.color} ${currentTheme === theme.id ? "ring-2 ring-offset-1 ring-white" : ""}`}
          aria-label={`Select ${theme.id} theme`}
        />
      ))}
    </div>
  );
};
