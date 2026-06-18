"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TreatmentPage({ params }) {
  // `params` in Next.js 15 app router might be a Promise for dynamic routes
  const resolvedParams = use(params);
  const treatmentId = resolvedParams.id;
  const router = useRouter();
  const { region, TREATMENTS } = useRegion();
  const r = REGIONS[region];

  const [t, setT] = useState(null);

  // Map treatment IDs to appropriate images (randomly assigned from numbered jpg files)
  const treatmentImages = {
    yoni: "/images/02.jpg",
    nuru: "/images/03.jpg",
    tantric: "/images/04.jpg",
    lingam: "/images/05.jpg",
    couples: "/images/hero_2.png",
    fourhand: "/images/06.jpg"
  };

  useEffect(() => {
    const found = TREATMENTS.find(tr => tr.id === treatmentId);
    if (found) {
      setT(found);
    } else {
      router.push("/");
    }
  }, [treatmentId, router, TREATMENTS]);

  if (!t) return null;

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
          <Image src={treatmentImages[t.id] || "/images/hero_1.png"} alt={t.name} fill className="object-cover opacity-20" onContextMenu={(e) => e.preventDefault()} draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            {t.name.split(" ")[0]} <em>{t.name.split(" ").slice(1).join(" ")}</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <ScrollReveal>
            <div>
              <div className="section-label">Treatment Details</div>
              <h2 className="section-title">{t.tagline}</h2>
              <p className="text-[0.9rem] text-muted leading-[1.9] max-w-[600px] mb-8">
                {t.long}
              </p>

              <h3 className="font-serif text-[1.4rem] text-white mt-10 mb-6 border-b border-border-purple pb-4">Experience Benefits</h3>
              <ul className="list-none m-0 p-0">
                {t.benefits.map((b, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 py-3 border-b border-border-purple text-[0.85rem] text-muted leading-[1.6]"
                  >
                    <span className="text-purple text-[0.5rem] mt-1 shrink-0">✦</span>
                    {b}
                  </motion.li>
                ))}
              </ul>

              <div className="bg-card border border-border-purple p-8 mt-10 flex items-center justify-between rounded-2xl">
                <div>
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-2">Starting From</div>
                  <div className="font-serif text-[2.5rem] font-light text-purple leading-none">
                    {r.currency}{t.price}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-2">Duration</div>
                  <div className="text-[0.8rem] text-white">{t.duration}</div>
                </div>
              </div>
              
              <div className="mt-8">
                 <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary w-full text-center">
                   Book This Treatment
                 </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full aspect-[3/4] flex items-center justify-center font-serif text-[4rem] text-purple-dim italic relative overflow-hidden glass-card-purple rounded-3xl p-3">
                <Image src={treatmentImages[t.id] || "/images/hero_2.png"} alt={t.name} fill className="object-cover opacity-30 rounded-2xl" onContextMenu={(e) => e.preventDefault()} draggable={false} />
                <div className="absolute inset-6 border border-white/10 pointer-events-none rounded-xl" />
                <span className="relative z-10">{t.emoji}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
