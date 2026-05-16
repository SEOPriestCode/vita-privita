"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      {/* HEADER */}
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
           <img src="/images/hero_2.png" alt="About" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Our <em>Story</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <ScrollReveal>
            <div>
              <div className="section-label">Philosophy</div>
              <h2 className="section-title">The Art of <em>Connection</em></h2>
              <div className="text-[0.9rem] text-muted leading-[1.9] flex flex-col gap-6">
                <p>
                  Vita Privita was founded on a simple yet profound belief: that physical pleasure and emotional relaxation are not luxuries, but essential components of human well-being.
                </p>
                <p>
                  Based in {r.location}, we recognized a need for a truly premium, discreet outcall service that transcends the transactional nature of the industry. Our vision was to create an experience that feels deeply personal, emotionally resonant, and physically transcendent.
                </p>
                <p>
                  We carefully select and train our therapists not just for their technical skill, but for their emotional intelligence, their intuitive touch, and their genuine desire to provide pleasure and healing. Every Vita Privita session is a bespoke journey, crafted entirely around your boundaries, desires, and needs.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="relative">
               <div className="w-full aspect-[3/4] overflow-hidden relative rounded-3xl glass-card-purple p-2">
                  <img src="/images/about.png" alt="Our Story" className="w-full h-full object-cover rounded-[1.25rem] opacity-80" />
                  <div className="absolute inset-5 border border-white/10 rounded-[1rem] pointer-events-none" />
                </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CORE VALUES */}
        <div className="mt-32">
          <ScrollReveal>
            <div className="section-label text-center justify-center">Core Values</div>
            <h2 className="section-title text-center">What We <em>Stand For</em></h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border-purple border border-border-purple mt-12 rounded-3xl overflow-hidden">
            {[
              { i: "01", n: "Discretion", d: "Absolute privacy is the foundation of our service. Your identity and details are fiercely protected." },
              { i: "02", n: "Reverence", d: "We approach the body with profound respect, treating every touch as a sacred act of connection." },
              { i: "03", n: "Professionalism", d: "From booking to completion, expect flawless, punctual, and highly professional service." },
              { i: "04", n: "Authenticity", d: "We foster genuine emotional and physical connections, avoiding rehearsed or mechanical intimacy." }
            ].map((v, idx) => (
              <motion.div 
                key={v.i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface p-10 transition-colors duration-300 hover:bg-card group"
              >
                <div className="text-2xl text-purple mb-4 font-serif italic group-hover:scale-110 transition-transform origin-left">{v.i}</div>
                <h3 className="font-serif text-[1.3rem] text-white mb-2 group-hover:text-purple transition-colors">{v.n}</h3>
                <p className="text-[0.8rem] text-muted leading-[1.8]">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
