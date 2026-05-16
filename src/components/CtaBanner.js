"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";

export default function CtaBanner() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <section className="py-24 px-12 text-center bg-deep relative overflow-hidden border-y border-border-purple">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.07)_0%,transparent_65%)]" />
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-4 relative z-10">
        Ready for an <em>Unforgettable</em> Experience?
      </h2>
      <p className="text-[0.85rem] text-muted max-w-[500px] mx-auto mb-10 relative z-10 leading-[1.8]">
        Our therapists are ready to bring the ultimate sensual journey to your location in {r.location}. Discretion and professionalism guaranteed.
      </p>
      <div className="flex justify-center gap-4 flex-wrap relative z-10">
        <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">
          Contact via WhatsApp
        </a>
      </div>
    </section>
  );
}
