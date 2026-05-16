"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";

export default function OutcallStrip() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="bg-card border-y border-border-purple py-4 px-8 flex items-center justify-center gap-6 flex-wrap">
      <div className="flex items-center gap-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-muted">
        <span className="text-purple">✦</span> 100% DISCREET
      </div>
      <div className="flex items-center gap-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-muted">
        <span className="text-purple">✦</span> OUTCALL ONLY
      </div>
      <div className="flex items-center gap-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-muted">
        <span className="text-purple">✦</span> {r.location.toUpperCase()}
      </div>
      <div className="flex items-center gap-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-muted">
        <span className="text-purple">✦</span> LUXURY SERVICE
      </div>
    </div>
  );
}
