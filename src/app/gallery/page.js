"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import CtaBanner from "@/components/CtaBanner";

export default function GalleryPage() {
  const { region, GALLERY_IMAGES } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
           <img src="/images/hero_1.png" alt="Gallery" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Visual <em>Gallery</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="section-label">The Experience</div>
          <h2 className="section-title">Atmosphere & <em>Detail</em></h2>
          <p className="section-body mb-16">
            A glimpse into the world of Vita Privita. We maintain the highest standards of presentation, cleanliness, and sensory detail in every session we provide in {r.location}.
          </p>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-6 break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-3xl glass-card-purple p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)]">
                <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
                <img src={img.url} alt={img.title} className="w-full h-auto rounded-[1.25rem] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-serif text-lg text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</span>
                </div>
                <div className="absolute inset-5 border border-white/10 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
