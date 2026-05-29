"use client";

import Link from "next/link";
import Image from "next/image";
import { REGIONS } from "@/data/constants";
import { useRegion } from "@/context/RegionContext";

export default function Footer() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <footer className="bg-black pt-16 px-6 md:px-12 pb-8 border-t border-border-purple">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 max-w-[1200px] mx-auto">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 font-serif text-lg font-light text-purple tracking-[0.12em] mb-4 no-underline">
            <Image src="/vwhite.png" alt="Vita Privita Logo" width={48} height={48} className="h-12 w-auto" />
            <span>Vita <span className="text-white italic">Privita</span></span>
          </Link>
          <p className="text-[0.8rem] text-muted leading-[1.8] max-w-[260px]">
            The premier outcall massage service bringing the highest standard of sensual and erotic bodywork to your sanctuary in {r.location}.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted text-[0.75rem] no-underline transition-all hover:border-purple hover:text-purple rounded-full">Ig</a>
            <a href="#" className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted text-[0.75rem] no-underline transition-all hover:border-purple hover:text-purple rounded-full">Tw</a>
            <a href="#" className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted text-[0.75rem] no-underline transition-all hover:border-purple hover:text-purple rounded-full">Wa</a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-6">Explore</h4>
          <ul className="list-none flex flex-col gap-3 p-0 m-0">
            <li><Link href="/" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Home</Link></li>
            <li><Link href="/about" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Our Story</Link></li>
            <li><Link href="/therapists" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Therapists</Link></li>
            <li><Link href="/gallery" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Gallery</Link></li>
            <li><Link href="/events" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Events</Link></li>
            <li><Link href="/contact" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-6">Contact</h4>
          <ul className="list-none flex flex-col gap-3 p-0 m-0">
            <li><a href={`tel:${r.phone.replace(/\s+/g,'')}`} className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">{r.phone}</a></li>
            <li><a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">WhatsApp</a></li>
            <li><a href="mailto:booking@vitaprivita.com" className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">booking@vitaprivita.com</a></li>
            <li className="text-[0.8rem] text-muted mt-2">{r.location}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-6">Hours</h4>
          <div className="flex flex-col gap-2">
            <div className="text-[0.75rem] text-muted py-1 flex justify-between gap-4">
              <span className="text-white">Mon - Thu</span>
              <span>10:00 - 22:00</span>
            </div>
            <div className="text-[0.75rem] text-muted py-1 flex justify-between gap-4">
              <span className="text-white">Fri - Sat</span>
              <span>10:00 - 00:00</span>
            </div>
            <div className="text-[0.75rem] text-muted py-1 flex justify-between gap-4">
              <span className="text-white">Sunday</span>
              <span>12:00 - 20:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border-purple pt-8 flex justify-between items-center flex-wrap gap-4 max-w-[1200px] mx-auto">
        <p className="text-[0.7rem] text-muted m-0">© {new Date().getFullYear()} Vita Privita. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[0.7rem] text-muted no-underline transition-colors hover:text-purple">Privacy Policy</Link>
          <Link href="/terms" className="text-[0.7rem] text-muted no-underline transition-colors hover:text-purple">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
