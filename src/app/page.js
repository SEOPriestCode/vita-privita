"use client";

import Link from "next/link";
import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import OutcallStrip from "@/components/OutcallStrip";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import TreatmentCard from "@/components/TreatmentCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const { region, TREATMENTS } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* OUTCALL STRIP */}
      <OutcallStrip />

      {/* ABOUT PREVIEW */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <div>
                <div className="section-label">About Vita Privita</div>
                <h2 className="section-title">Where Luxury<br/>Meets <em>Intimacy</em></h2>
                <p className="section-body">
                  Vita Privita is a premier outcall massage service offering an exclusive range of erotic and sensual treatments. We bring the highest standard of professional bodywork directly to your home or hotel, throughout {r.location}. Our team of highly trained therapists are masters of discretion, professionalism, and pleasure.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  {[
                    ["8+", "Years Experience"],
                    ["500+", "Satisfied Clients"],
                    ["6", "Signature Treatments"],
                    ["100%", "Discreet Service"]
                  ].map(([n, l], idx) => (
                    <motion.div 
                      key={l}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <span className="font-serif text-[3rem] font-light text-purple leading-none block mb-1.5">{n}</span>
                      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">{l}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/about" className="btn-outline">Our Story →</Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="w-full aspect-[3/4] overflow-hidden relative rounded-3xl glass-card-purple p-2 group">
                  <img src="/images/about.png" alt="About Vita Privita" className="w-full h-full object-cover rounded-[1.25rem] opacity-80 group-hover:scale-105 transition-transform duration-1000" onContextMenu={(e) => e.preventDefault()} draggable={false} />
                  <div className="absolute inset-5 border border-white/10 rounded-[1rem] pointer-events-none" />
                </div>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -right-6 w-[130px] h-[130px] text-white flex flex-col items-center justify-center text-center text-[0.55rem] tracking-[0.15em] uppercase leading-[1.6] glass-card-purple rounded-full border-purple/30 z-20"
                >
                  <strong className="text-[2rem] font-medium block leading-none text-purple">8</strong>
                  Years of Excellence
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="py-16 sm:py-24 px-6 sm:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Signature <em>Experiences</em></h2>
            <p className="section-body mb-16">
              Every treatment is tailored to your desires and carried out with absolute professionalism. Select a service below to discover more.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 0.1}>
                <TreatmentCard t={t} r={r} index={idx} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
