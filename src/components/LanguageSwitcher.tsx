import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Language, languageNames, languageFlags } from "@/lib/translations";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ["en", "ur", "ar"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50" ref={dropdownRef}>
      {/* Dropdown Menu */}
      <div
        className={`absolute bottom-full left-0 mb-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                language === lang
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-sm font-semibold">{languageFlags[lang]}</span>
              <span className="font-medium">{languageNames[lang]}</span>
              {language === lang && (
                <span className="ml-auto w-2 h-2 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-white/95 backdrop-blur-xl text-primary px-4 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Change Language"
      >
        {/* Pulse ring animation */}
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-25" />
        
        <span className="relative text-sm font-semibold">{languageFlags[language]}</span>
        <Globe className="relative w-5 h-5" />
        <span className="relative font-semibold hidden sm:inline">
          {languageNames[language]}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
