"use client";

import { useRegion } from "@/context/RegionContext";
import { useTheme } from "@/context/ThemeContext";
import { REGIONS } from "@/data/constants";
import { useState } from "react";
import Image from "next/image";

export default function ChatWidget() {
  const { region } = useRegion();
  const { theme } = useTheme();
  const r = REGIONS[region];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat with us"
        >
          <Image
            src={theme === "dark" ? "/vwhite.png" : "/vblack.png"}
            alt="Vita Privita"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card border border-border-purple rounded-2xl shadow-2xl w-[calc(100vw-2rem)] sm:w-80 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src={theme === "dark" ? "/vwhite.png" : "/vblack.png"}
                alt="Vita Privita"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h3 className="text-white font-serif text-base sm:text-lg">Vita Privita</h3>
                <p className="text-white/80 text-[0.7rem] sm:text-xs">Let&apos;s Talk</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4">
            <p className="text-muted text-xs sm:text-sm mb-4 leading-relaxed">
              Have questions about our services? Chat with us directly on WhatsApp for instant responses.
            </p>
            <a
              href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}&text=Hello, I'm interested in your services`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full text-center block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
