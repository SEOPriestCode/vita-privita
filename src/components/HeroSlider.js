"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";

const slides = [
  {
    image: "/images/hero_3.png.jpg",
    title: "The Art of Sensual Pleasure",
    subtitle: "Professional · Discreet · Confidential",
  },
  {
    image: "/images/hero_4.png.jpg",
    title: "Divine Touch & Healing",
    subtitle: "Tailored to your deepest desires",
  },
  {
    image: "/images/hero_5.png.jpg",
    title: "Sacred Bodywork",
    subtitle: "Awaken your senses completely",
  },
  {
    image: "/images/hero_2.png",
    title: "Ultimate Relaxation",
    subtitle: "Experience pure bliss",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { region } = useRegion();
  const r = REGIONS[region];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
      
      <div className="relative z-20 text-center max-w-[900px] px-8">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="block text-[0.65rem] tracking-[0.35em] uppercase text-purple mb-6"
        >
          Exclusive Outcall Massage — {r.location}
        </motion.span>
        
        <motion.h1 
          key={`title-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-serif text-[clamp(2.5rem,8vw,6rem)] font-light leading-[1.05] text-white mb-6 tracking-[-0.01em]"
        >
          {slides[current].title.split(" ").map((word, i) => (
            word === "Sensual" || word === "Healing" ? <em key={i} className="italic text-purple not-italic block md:inline">{word} </em> : word + " "
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[0.85rem] tracking-[0.12em] text-muted mb-12 uppercase"
        >
          {slides[current].subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="inline-flex gap-4 flex-wrap justify-center"
        >
          <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">
            Book Your Session
          </a>
          <Link href="/about" className="btn-outline">
            Discover More
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-[0.6rem] tracking-[0.3em] uppercase z-20">
        <div className="w-px h-[60px] bg-gradient-to-b from-purple to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
