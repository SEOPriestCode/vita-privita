"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import { useState } from "react";

export default function ChatWidget() {
  const { region } = useRegion();
  const r = REGIONS[region];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat with us"
        >
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card border border-border-purple rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white font-serif text-lg">Chat with Us</h3>
              <p className="text-white/80 text-xs">We typically reply within minutes</p>
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
          <div className="p-4">
            <p className="text-muted text-sm mb-4 leading-relaxed">
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
