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
          <Link href="/" className="group flex items-center gap-3.5 mb-6 no-underline cursor-pointer">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-purple-light/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-500 group-hover:scale-105 group-hover:border-purple group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              <Image src="/vwhite.png" alt="Vita Privita Logo" width={32} height={32} className="h-7 w-auto object-contain transition-transform duration-700 group-hover:rotate-[360deg]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-purple group-hover:text-purple-light transition-colors duration-300">DC</span>
              <span className="font-serif text-lg tracking-[0.06em] text-white">
                Vita <span className="font-sans font-light text-[0.85em] tracking-[0.05em] text-purple-light italic group-hover:text-white transition-colors duration-300">Privita</span>
              </span>
            </div>
          </Link>
          <p className="text-[0.8rem] text-muted leading-[1.8] max-w-[260px]">
            The premier outcall massage service bringing the highest standard of sensual and erotic bodywork to your sanctuary in {r.location}.
          </p>
          <div className="flex gap-3 mt-6">
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted no-underline transition-all duration-300 hover:border-[#E1306C] hover:text-[#E1306C] rounded-full hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Twitter X"
              className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted no-underline transition-all duration-300 hover:border-[#1DA1F2] hover:text-[#1DA1F2] rounded-full hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="w-9 h-9 border border-border-purple flex items-center justify-center text-muted no-underline transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] rounded-full hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.004 2C6.48 2 2.001 6.477 2.001 12c0 1.892.527 3.661 1.446 5.178L2 22l5.003-1.313a9.96 9.96 0 005.001 1.314c5.524 0 10.003-4.477 10.003-10S17.528 2 12.004 2zm5.727 13.918c-.244.693-1.22 1.252-1.69 1.292-.47.04-1.07.062-1.724-.148a7.994 7.994 0 01-3.341-2.1c-1.341-1.341-2.222-2.916-2.602-3.483-.38-.567-.62-1.072-.62-1.621 0-.55.289-.817.393-.925.104-.108.228-.162.34-.162a.602.602 0 01.378.118c.094.068.514 1.267.564 1.369.05.101.084.219.017.353-.067.135-.101.219-.202.337-.101.118-.212.264-.303.365-.101.112-.208.234-.09.438a6.388 6.388 0 001.332 1.656 5.753 5.753 0 001.956 1.206c.202.101.32.084.438-.05.118-.135.514-.596.648-.797.135-.202.269-.168.455-.101.185.068 1.178.556 1.38.657.202.101.337.152.387.236.05.084.05.488-.194 1.181z" clipRule="evenodd" />
              </svg>
            </a>
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
            <li><a href={`mailto:${r.email}`} className="text-[0.8rem] text-muted no-underline transition-colors hover:text-purple">{r.email}</a></li>
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
