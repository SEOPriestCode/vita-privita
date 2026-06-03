"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import TreatmentCard from "@/components/TreatmentCard";

export default function TreatmentsPage() {
  const { region, TREATMENTS } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_1.png" alt="Our Treatments" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Our <em>Treatments</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="section-label">Signature Experiences</div>
          <h2 className="section-title">Sensory <em>Awakening</em></h2>
          <p className="section-body mb-16">
            Every treatment we offer is designed to elevate your senses, promote deep healing, and offer an unforgettable sensory journey in {r.location}. Explore our signature offerings below.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((t, idx) => (
            <ScrollReveal key={t.id} delay={idx * 0.1}>
              <TreatmentCard t={t} r={r} index={idx} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
