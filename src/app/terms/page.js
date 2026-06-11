"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const { region } = useRegion();
  const r = REGIONS[region];
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "eligibility", label: "Eligibility" },
    { id: "booking-dispatch", label: "Booking & Verification" },
    { id: "pricing-payment", label: "Pricing & Payments" },
    { id: "cancellations", label: "Cancellations" },
    { id: "conduct-safety", label: "Code of Conduct" },
    { id: "governing-law", label: "Governing Law" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-fade">
      {/* HERO HEADER */}
      <section className="h-[45vh] min-h-[350px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_1.png" alt="Terms of Service" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.06)_0%,transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <ScrollReveal direction="down">
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-purple mb-3 block">Agreements</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none text-white">
              Terms of <em>Service</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:sticky lg:top-24 z-20 bg-black lg:bg-transparent -mx-6 px-6 lg:mx-0 lg:px-0 py-4 lg:py-0 border-b border-border-purple lg:border-none overflow-x-auto scrollbar-none flex lg:flex-col gap-2 whitespace-nowrap lg:whitespace-normal">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(sec.id);
                }}
                className={`text-[0.7rem] md:text-[0.75rem] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full transition-all duration-300 no-underline inline-block border ${
                  activeSection === sec.id
                    ? "bg-purple border-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] font-medium"
                    : "border-transparent text-muted hover:text-white hover:border-purple/30"
                }`}
              >
                {sec.label}
              </a>
            ))}
          </aside>

          {/* POLICY CONTENT */}
          <div className="lg:col-span-3 flex flex-col gap-16">
            
            <div id="introduction" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">01 / Introduction</div>
                <h2 className="font-serif text-2xl text-white mb-6">Scope of <em>Agreement</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Welcome to Vita Privita. These Terms of Service ("Terms") govern your use of our website, concierge coordination channels, and the scheduling of outcall massage sessions. 
                  </p>
                  <p>
                    By accessing our platform, requesting services, or placing bookings, you agree to be bound by these Terms. If you do not accept these provisions, you must not proceed with booking inquiries. This document constitutes a binding legal agreement between you and the operating entity of Vita Privita in your selected region: the **United Kingdom** or **Nigeria**.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="eligibility" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">02 / Eligibility</div>
                <h2 className="font-serif text-2xl text-white mb-6">Age & <em>Verification</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Our bodywork treatments are exclusively designed for mature audiences seeking sensual and therapeutic wellness. 
                  </p>
                  <ul className="list-none p-0 flex flex-col gap-3.5 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Age Restriction:</strong> You must be at least <strong>18 years of age</strong> (or the legal age of consent for mature services in your local jurisdiction, whichever is higher) to request a booking or communicate with our concierge. We enforce a strict age policy.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Identity Checks:</strong> For the safety and protection of our professional therapists, we reserve the right to request proof of identity or basic verification details before final dispatch approval is granted. Failure to provide verification may result in booking cancellation.</div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div id="booking-dispatch" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">03 / Booking</div>
                <h2 className="font-serif text-2xl text-white mb-6">Outcall <em>Operations</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Vita Privita is an **outcall-only** service. We bring the highest standards of sensual healing directly to your private space:
                  </p>
                  <p>
                    You are solely responsible for ensuring the target location (whether a private residence, residential apartment, hotel suite, or guest house) is clean, safe, private, and has appropriate amenities (e.g., access to warm running water and fresh towels). The location details provided during verification must match the actual site of service.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="pricing-payment" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">04 / Payments</div>
                <h2 className="font-serif text-2xl text-white mb-6">Rates & <em>Transactions</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    All service pricing is structured transparently and depends on the selected region. Rates are quoted in local currency and are subject to change:
                  </p>
                  <ul className="list-none p-0 flex flex-col gap-3.5 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>United Kingdom:</strong> Bookings are quoted and paid in British Pounds (GBP / {REGIONS.UK.currency}).</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Nigeria:</strong> Bookings are quoted and paid in Nigerian Naira (NGN / {REGIONS.NG.currency}).</div>
                    </li>
                  </ul>
                  <p>
                    Payment methods, deposit mandates (where applicable to guarantee therapist scheduling), and transaction instructions are finalized through our official concierge channel (WhatsApp or phone call). Services will not begin until the agreed payment parameters are satisfied.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="cancellations" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">05 / Cancellations</div>
                <h2 className="font-serif text-2xl text-white mb-6">Cancellation & <em>Rescheduling</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Since our professional therapists dedicate specific blocks of time and incur travel costs to meet your scheduled session, we enforce a strict cancellation framework:
                  </p>
                  <p>
                    Cancellations must be communicated to the concierge team immediately. If a booking is cancelled within the designated window prior to the therapist's scheduled arrival, a cancellation fee (or forfeiture of deposit) will apply to cover therapist transit and scheduling displacement. Full details regarding specific booking windows are provided at the time of reservation.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="conduct-safety" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">06 / Conduct</div>
                <h2 className="font-serif text-2xl text-white mb-6">Client Conduct & <em>Therapist Safety</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    The well-being, respect, and safety of our therapists are paramount. We maintain an absolute zero-tolerance policy towards:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 my-4">
                    <li>Any form of verbal abuse, intimidation, harassment, or physical force.</li>
                    <li>Demands for services outside the defined scope of our legal treatments.</li>
                    <li>Consumption of illicit substances during the session.</li>
                  </ul>
                  <p className="border-l-2 border-purple pl-4 text-purple italic my-4">
                    "If a therapist feels unsafe, disrespected, or encounters a breach of boundaries, they are legally authorized to terminate the session immediately and leave the premises. In such instances, the booking is non-refundable."
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="governing-law" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">07 / Legal</div>
                <h2 className="font-serif text-2xl text-white mb-6">Governing Law & <em>Jurisdiction</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    These Terms, and any disputes arising from services scheduled through our platform, are governed strictly by the jurisdiction of the region where the service is requested and performed:
                  </p>
                  <ul className="list-none p-0 flex flex-col gap-3.5 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>UK Bookings:</strong> Governed by the laws of <strong>England and Wales</strong>, and subject to the exclusive jurisdiction of the English courts.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Nigeria Bookings:</strong> Governed by the laws of the <strong>Federal Republic of Nigeria</strong>, and subject to the exclusive jurisdiction of Nigerian courts.</div>
                    </li>
                  </ul>
                  <p>
                    Any legal inquiries regarding these agreements can be coordinated by contacting our regional concierge at <a href={`mailto:${r.email}`} className="text-purple hover:underline">{r.email}</a>.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
