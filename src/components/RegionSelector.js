"use client";

import { useState, useEffect } from "react";
import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RegionSelector() {
  const { changeRegion } = useRegion();
  const [show, setShow] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // Show on every mount (refresh)
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Also show when navigating back to home
    if (pathname === "/") {
      setShow(true);
    }
  }, [pathname]);

  const handleSelect = (r) => {
    changeRegion(r);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-surface border border-purple/30 p-8 md:p-12 max-w-xl w-full shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden rounded-[2.5rem] glass-card-purple"
          >
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[0.6rem] tracking-[0.4em] uppercase text-purple flex items-center justify-center gap-4 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple" />
                Select Destination
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-[clamp(2.2rem,5vw,3rem)] font-light text-center text-white mb-4 leading-tight"
              >
                Welcome to <br/>Vita <em className="text-purple italic">Privita</em>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-[0.85rem] text-muted mb-12 leading-[1.8] max-w-[380px] mx-auto"
              >
                To provide you with the most accurate experience, please confirm the region you wish to explore today.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                {['NG', 'UK'].map((key, i) => (
                  <motion.button 
                    key={key}
                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    onClick={() => handleSelect(key)}
                    className="flex-1 bg-white/[0.03] border border-white/10 p-10 flex flex-col items-center justify-center gap-5 transition-all duration-500 hover:border-purple/50 hover:bg-purple/10 cursor-pointer group rounded-3xl glass-card"
                  >
                    <span className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                      {REGIONS[key].flag}
                    </span>
                    <div className="flex flex-col items-center">
                      <span className="text-[0.8rem] tracking-[0.2em] uppercase text-white font-medium mb-1">{REGIONS[key].label}</span>
                      <span className="text-[0.6rem] tracking-[0.1em] uppercase text-muted group-hover:text-purple transition-colors">Enter Site</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-[0.6rem] text-muted/40 mt-12 uppercase tracking-[0.2em]"
              >
                You can change this at any time in the navigation menu.
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
