"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import Image from "next/image";

export default function CtaBanner() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <section className="py-24 px-12 text-center bg-deep relative overflow-hidden border-y border-border-purple">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/08.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/60 to-deep/70" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.07)_0%,transparent_65%)] z-10" />
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-4 relative z-20">
        Ready for an <em>Unforgettable</em> Experience?
      </h2>
      <p className="text-[0.85rem] text-muted max-w-[500px] mx-auto mb-10 relative z-20 leading-[1.8]">
        Our therapists are ready to bring the ultimate sensual journey to your location in {r.location}. Discretion and professionalism guaranteed.
      </p>
      <div className="flex justify-center gap-4 flex-wrap relative z-20">
        <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">
          Contact via WhatsApp
        </a>
      </div>
    </section>
  );
}
