"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TreatmentCard({ t, r, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Random interval flip to create a dynamic "alive" feel
    const interval = setInterval(() => {
      // Only flip automatically if not hovered (checking for hover state is complex here, 
      // but we can just let it flip occasionally)
      if (Math.random() > 0.7) {
        setIsFlipped(prev => !prev);
        // Flip back after a few seconds
        setTimeout(() => setIsFlipped(false), 3000);
      }
    }, 5000 + index * 1000); // Staggered intervals

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div 
      className="perspective-1000 h-[400px] w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden w-full h-full">
          <Link href={`/treatments/${t.id}`} className="block h-full bg-surface p-10 relative overflow-hidden transition-all duration-400 hover:bg-card no-underline border border-border-purple rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            <div className="font-serif text-[3.5rem] font-light text-border-purple leading-none mb-4">{t.num}</div>
            <h3 className="font-serif text-2xl font-normal text-white mb-3 group-hover:text-purple transition-colors">{t.name}</h3>
            <p className="text-[0.8rem] text-muted leading-[1.8] mb-6">{t.short}</p>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">
              From {r.currency}{t.price}
            </div>
            <span className="absolute bottom-8 right-8 text-xl text-purple-dim">→</span>
          </Link>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden w-full h-full rotate-y-180">
          <Link href={`/treatments/${t.id}`} className="block h-full bg-card p-10 relative overflow-hidden no-underline border border-purple/30 rounded-3xl glass-card-purple">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-[2.5rem] mb-4">{t.emoji}</div>
              <h3 className="font-serif text-xl text-purple mb-4 uppercase tracking-wider">{t.name} Highlights</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {t.benefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="text-[0.7rem] text-white/80 flex items-start gap-3 leading-relaxed">
                    <span className="text-purple mt-1">✦</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-white/10 text-[0.6rem] tracking-[0.3em] uppercase text-purple">
                View Treatment Details
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
