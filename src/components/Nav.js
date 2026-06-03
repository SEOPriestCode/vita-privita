"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { REGIONS } from "@/data/constants";
import { useRegion } from "@/context/RegionContext";
import { useTheme } from "@/context/ThemeContext";

export default function Nav() {
  const { region, changeRegion, TREATMENTS } = useRegion();
  const { theme, toggleTheme } = useTheme();
  const r = REGIONS[region];
  const opp = region === "NG" ? "UK" : "NG";
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrop = () => {
    clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 150);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-400 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-border-purple" : "bg-transparent"}`}>
        <Link href="/" className="group flex items-center gap-3.5 no-underline cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-purple-light/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-500 group-hover:scale-105 group-hover:border-purple group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <Image src={theme === "dark" ? "/vwhite.png" : "/vblack.png"} alt="Vita Privita Logo" width={28} height={28} className="h-6 w-auto object-contain transition-transform duration-700 group-hover:rotate-[360deg]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-purple group-hover:text-purple-light transition-colors duration-300">DC</span>
            <span className="font-serif text-lg tracking-[0.06em] text-white">
              Vita <span className="font-sans font-light text-[0.85em] tracking-[0.05em] text-purple-light italic group-hover:text-white transition-colors duration-300">Privita</span>
            </span>
          </div>
        </Link>
        <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0">
          <li>
            <Link href="/" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/" ? "text-purple" : "text-muted hover:text-purple"}`}>
              Home
              {pathname === "/" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li>
            <Link href="/about" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/about" ? "text-purple" : "text-muted hover:text-purple"}`}>
              About
              {pathname === "/about" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
            <span className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname.startsWith("/treatments") ? "text-purple" : "text-muted"}`}>
              Treatments ▾
            </span>
            <div className={`absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 bg-card border border-border-purple min-w-[200px] z-[200] transition-all duration-200 rounded-xl overflow-hidden ${dropOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1.5"}`}>
              {TREATMENTS.map(t => (
                <Link key={t.id} href={`/treatments/${t.id}`} onClick={() => setDropOpen(false)} className="block px-5 py-3 text-[0.65rem] tracking-[0.2em] uppercase text-muted no-underline cursor-pointer border-b border-border-purple last:border-b-0 hover:text-purple hover:bg-purple-dim/20 transition-all">
                  {t.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/therapists" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/therapists" ? "text-purple" : "text-muted hover:text-purple"}`}>
              Therapists
              {pathname === "/therapists" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li>
            <Link href="/gallery" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/gallery" ? "text-purple" : "text-muted hover:text-purple"}`}>
              Gallery
              {pathname === "/gallery" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li>
            <Link href="/events" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/events" ? "text-purple" : "text-muted hover:text-purple"}`}>
              Events
              {pathname === "/events" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`font-sans text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline cursor-pointer transition-colors duration-300 relative pb-0.5 ${pathname === "/contact" ? "text-purple" : "text-muted hover:text-purple"}`}>
              Contact
              {pathname === "/contact" && <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-purple" />}
            </Link>
          </li>
          <li>
            <button className="flex items-center gap-2 text-[0.65rem] tracking-[0.12em] uppercase bg-card border border-border-purple text-purple px-4 py-2 cursor-pointer transition-all hover:border-purple rounded-full" onClick={() => changeRegion(opp)}>
              {r.flag} {r.label} ⇄
            </button>
          </li>
          <li>
            <button 
              className="w-8 h-8 border border-border-purple flex items-center justify-center text-purple bg-card hover:bg-purple-dim/10 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          </li>
          <li>
            <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="text-[0.65rem] tracking-[0.2em] px-6 py-2.5 border border-purple text-purple no-underline transition-all hover:bg-purple hover:text-black uppercase rounded-full">
              Book Now
            </a>
          </li>
        </ul>
        <button className="md:hidden bg-transparent border-none text-purple cursor-pointer text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-black z-[99] flex flex-col px-6 py-8 gap-4 overflow-y-auto">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">About</Link>
          {TREATMENTS.map(t => (
            <Link key={t.id} href={`/treatments/${t.id}`} onClick={() => setMobileOpen(false)} className="pl-4 text-[0.95rem] font-serif text-white/80 no-underline py-2 border-b border-border-purple">
              — {t.name}
            </Link>
          ))}
          <Link href="/therapists" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">Therapists</Link>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">Gallery</Link>
          <Link href="/events" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">Events</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-xl font-serif text-white no-underline py-3 border-b border-border-purple">Contact</Link>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 flex items-center justify-center gap-2 text-[0.8rem] tracking-[0.12em] uppercase bg-card border border-border-purple text-purple py-3.5 cursor-pointer rounded-full" onClick={() => { changeRegion(opp); setMobileOpen(false); }}>
              {r.flag} {r.label} ⇄
            </button>
            <button className="w-12 h-12 border border-border-purple flex items-center justify-center text-purple bg-card rounded-full cursor-pointer" onClick={() => { toggleTheme(); setMobileOpen(false); }} aria-label="Toggle theme">
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          </div>
          <a href={`https://api.whatsapp.com/send/?phone=${r.whatsapp}`} target="_blank" rel="noreferrer" className="text-center font-sans text-[0.8rem] tracking-[0.2em] py-3.5 bg-purple text-white no-underline uppercase rounded-full mt-2 font-medium">
            Book Now
          </a>
        </div>
      )}
    </>
  );
}
