"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import CtaBanner from "@/components/CtaBanner";

export default function EventsPage() {
  const { region, EVENTS } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
           <img src="/images/hero_2.png" alt="Events" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Exclusive <em>Events</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="section-label">Curated Gatherings</div>
          <h2 className="section-title">Sensual <em>Socials</em></h2>
          <p className="section-body mb-16">
            Beyond our private outcall services, we host a series of exclusive, high-end events and workshops designed for the discerning individual or couple in {r.location}.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EVENTS.map((e, idx) => (
            <motion.div 
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group glass-card-purple p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-purple text-black text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full font-medium z-10">
                  {e.date}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-purple transition-colors">{e.title}</h3>
              <p className="text-[0.85rem] text-muted leading-[1.8] mb-6">{e.description}</p>
              <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}&text=I am interested in the ${e.title} event`} target="_blank" rel="noreferrer" className="inline-block text-[0.65rem] tracking-[0.2em] uppercase text-purple border-b border-purple pb-1 hover:text-white hover:border-white transition-all">
                Enquire Now →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
