"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function TherapistsPage() {
  const { region, THERAPISTS } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
          <img src="/images/therapists.png" alt="Our Therapists" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Our <em>Therapists</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="section-label">The Team</div>
          <h2 className="section-title">Masters of <em>Touch</em></h2>
          <p className="section-body mb-16">
            Our therapists are hand-selected for their exceptional skill, emotional intelligence, and stunning presence. They are dedicated professionals who find genuine joy in providing pleasure and deep relaxation to our elite clientele in {r.location}.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5px] bg-border-purple border border-border-purple rounded-3xl overflow-hidden">
          {THERAPISTS.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-surface overflow-hidden transition-all duration-300 hover:bg-card group rounded-none"
            >
              <div className="w-full aspect-[3/4] flex items-center justify-center font-serif text-[5rem] text-purple-dim italic relative overflow-hidden glass-card-purple m-2 rounded-xl">
                <img src="/images/therapists.png" alt={t.name} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(168,85,247,0.1)_0%,transparent_60%)]" />
                <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">{t.initial}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[1.4rem] text-white mb-1 group-hover:text-purple transition-colors">{t.name}</h3>
                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-3">{t.role}</div>
                <p className="text-[0.8rem] text-muted leading-[1.7] mb-4">{t.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.skills.map(s => (
                    <span key={s} className="text-[0.6rem] tracking-[0.15em] uppercase text-purple border border-border-purple px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
