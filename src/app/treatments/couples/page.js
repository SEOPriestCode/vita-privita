"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CouplesPage() {
  const { region, TREATMENTS } = useRegion();
  const r = REGIONS[region];

  // Filter for the four main treatments that can be done as couples
  const couplesTreatments = TREATMENTS.filter(t =>
    ["yoni", "nuru", "tantric", "lingam"].includes(t.id)
  );

  // Map treatment IDs to their couples price keys
  const couplesPriceKeys = {
    yoni: "couplesYoni",
    nuru: "couplesNuru",
    tantric: "couplesTantric",
    lingam: "couplesLingam"
  };

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero_1.png" alt="Couples Treatments" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Couples <em>Treatments</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="section-label">Shared Experience</div>
          <h2 className="section-title">Experience Together</h2>
          <p className="text-[0.9rem] text-muted leading-[1.9] max-w-[600px] mb-16">
            Share the magic of sensual healing with your partner. All our signature treatments are available as couples experiences, with two therapists working in perfect synchrony to deepen your connection and create unforgettable shared memories.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {couplesTreatments.map((t, idx) => (
            <ScrollReveal key={t.id} direction={idx % 2 === 0 ? "right" : "left"}>
              <Link href={`/treatments/${t.id}`} className="block group">
                <div className="glass-card-purple rounded-3xl p-6 md:p-8 h-full transition-all duration-300 hover:border-purple/50">
                  <div className="flex items-start justify-between mb-6">
                    <div className="font-serif text-[3rem] text-purple-dim italic">{t.emoji}</div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted border border-border-purple px-3 py-1 rounded-full">
                      {t.num}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-[1.8rem] font-light text-white mb-2 group-hover:text-purple transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-[0.75rem] tracking-[0.15em] uppercase text-purple mb-4">
                    {t.tagline}
                  </p>
                  
                  <p className="text-[0.85rem] text-muted leading-[1.7] mb-6">
                    {t.short}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border-purple">
                    <div>
                      <div className="text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-1">Couples Price</div>
                      <div className="font-serif text-[1.5rem] font-light text-purple leading-none">
                        {r.currency}{r.prices[couplesPriceKeys[t.id]]}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-1">Duration</div>
                      <div className="text-[0.75rem] text-white">{t.duration}</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-[0.7rem] tracking-[0.15em] uppercase text-purple group-hover:text-white transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-24">
          <div className="bg-card border border-border-purple p-8 md:p-12 rounded-3xl text-center mt-8">
            <h3 className="font-serif text-[2rem] font-light text-white mb-4">
              Ready to Book?
            </h3>
            <p className="text-[0.9rem] text-muted leading-[1.8] max-w-[500px] mx-auto mb-8">
              Contact us via WhatsApp to schedule your couples treatment. Our team will help you choose the perfect experience for you and your partner.
            </p>
            <a 
              href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary inline-block"
            >
              Book Couples Treatment
            </a>
          </div>
        </ScrollReveal>
      </section>

      <CtaBanner />
    </div>
  );
}
