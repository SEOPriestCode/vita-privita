"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const { region } = useRegion();
  const r = REGIONS[region];
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "information-collection", label: "Information We Collect" },
    { id: "processing-purposes", label: "How We Use Data" },
    { id: "discretion-security", label: "Discretion & Security" },
    { id: "region-compliance", label: "UK & Nigeria Compliance" },
    { id: "data-retention", label: "Data Retention" },
    { id: "contact-us", label: "Contact Us" }
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
          <img src="/images/hero_2.png" alt="Privacy Policy" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.06)_0%,transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <ScrollReveal direction="down">
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-purple mb-3 block">Legal & Privacy</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none text-white">
              Privacy <em>Policy</em>
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
                <h2 className="font-serif text-2xl text-white mb-6">Our Commitment to <em>Discretion</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    At Vita Privita, we deliver premier outcall massage services with a deep commitment to professionalism, trust, and absolute privacy. This Privacy Policy outlines how we collect, store, process, and safeguard personal data across all operating regions, specifically catering to the distinct legal requirements of the <strong>United Kingdom (UK)</strong> and <strong>Nigeria (NG)</strong>.
                  </p>
                  <p>
                    By engaging with our platform, placing enquiries, or scheduling bookings, you consent to the practices described in this document. We enforce rigorous standards to ensure that your sensitive details remain entirely confidential.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="information-collection" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">02 / Collection</div>
                <h2 className="font-serif text-2xl text-white mb-6">Information We <em>Collect</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    To coordinate professional outcall bodywork and guarantee the safety of both our clients and therapists, we require a minimal set of personal information:
                  </p>
                  <ul className="list-none p-0 flex flex-col gap-3.5 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Identity details:</strong> Name, alias, or preferred form of address.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Contact details:</strong> Phone number (for secure WhatsApp coordination or direct booking confirmation) and email address.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Location details:</strong> Exact address of your private residence, hotel room, or suite where outcall service is requested.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Service preferences:</strong> Specific massage treatments requested, scheduling dates, times, and any health-related notes or special requests.</div>
                    </li>
                  </ul>
                  <p>
                    We do not use tracking algorithms or profile builder systems to analyze your sensor preferences or track your behavior across other platforms.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="processing-purposes" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">03 / Purpose</div>
                <h2 className="font-serif text-2xl text-white mb-6">How We Use <em>Your Data</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Your personal information is processed strictly under the following lawful bases:
                  </p>
                  <ul className="list-none p-0 flex flex-col gap-3.5 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Performance of Service:</strong> Setting up appointments, managing scheduling coordinates, and facilitating therapist dispatch.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Legitimate Safety Interests:</strong> Running a secure verification process prior to dispatching therapists to residential or hotel spaces to protect both client and therapist security.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-0.5">✦</span>
                      <div><strong>Consent:</strong> Communicating with you directly through encrypted messaging platforms (such as WhatsApp) based on your initial request.</div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div id="discretion-security" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">04 / Discretion</div>
                <h2 className="font-serif text-2xl text-white mb-6">Discretion & <em>Data Security</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    Discretion is the core of our business model. We implement industry-leading protocols to ensure details are kept strictly confidential:
                  </p>
                  <p>
                    All communication is handled over secure channels. Direct booking information is encrypted, and we enforce a policy of absolute separation between operational details (such as address and contact numbers) and marketing/promotional communication. We <strong>never</strong> sell, share, rent, or lease client databases to third parties.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="region-compliance" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">05 / Compliance</div>
                <h2 className="font-serif text-2xl text-white mb-6">United Kingdom & <em>Nigeria Compliance</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-6">
                  <div className="border border-border-purple/30 bg-surface/50 p-6 rounded-2xl">
                    <h3 className="font-serif text-lg text-purple mb-3">United Kingdom (UK GDPR)</h3>
                    <p className="mb-3">
                      For clients located in the UK, we process personal data in compliance with the **UK General Data Protection Regulation (UK GDPR)** and the **Data Protection Act 2018**. Your rights include:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-2">
                      <li>The right to request a copy of your personal data held by us.</li>
                      <li>The right to request immediate correction or erasure of your personal records ("Right to be Forgotten").</li>
                      <li>The right to restrict or object to the processing of your details.</li>
                    </ul>
                    <p className="mt-3 text-[0.75rem] text-muted">
                      Supervisory Authority: The Information Commissioner's Office (ICO).
                    </p>
                  </div>

                  <div className="border border-border-purple/30 bg-surface/50 p-6 rounded-2xl">
                    <h3 className="font-serif text-lg text-purple mb-3">Nigeria (NDPR & NDPA)</h3>
                    <p className="mb-3">
                      For clients located in Nigeria, data handling complies with the **Nigeria Data Protection Regulation 2019 (NDPR)** and the **Nigeria Data Protection Act 2023 (NDPA)**. Your rights include:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-2">
                      <li>The right to be informed about the specific use of your information.</li>
                      <li>The right to withdraw your consent to data processing at any time.</li>
                      <li>The right to request deletion or erasure of your records without undue delay.</li>
                    </ul>
                    <p className="mt-3 text-[0.75rem] text-muted">
                      Supervisory Authority: The Nigeria Data Protection Commission (NDPC).
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div id="data-retention" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">06 / Retention</div>
                <h2 className="font-serif text-2xl text-white mb-6">Data <em>Retention Policies</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    We store data only as long as necessary to complete your booking lifecycle and to maintain therapist security records. Address details and exact locations are purged from our active operational scheduling files shortly after a treatment session is successfully completed.
                  </p>
                  <p>
                    Minimal logging of bookings is retained temporarily for tax, legal audit, and verification history, after which they are securely deleted or irreversibly anonymized.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div id="contact-us" className="scroll-mt-28">
              <ScrollReveal>
                <div className="section-label">07 / Contact</div>
                <h2 className="font-serif text-2xl text-white mb-6">Direct Legal <em>Inquiries</em></h2>
                <div className="text-sm text-muted leading-[1.8] flex flex-col gap-4">
                  <p>
                    If you have questions about this privacy framework or wish to execute your legal rights (such as data deletion or access requests), please contact our privacy compliance team for {r.label}:
                  </p>
                  <div className="mt-6 border border-purple/20 bg-card/40 p-6 rounded-2xl glass-card-purple max-w-[500px]">
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-3">Region: {r.label}</div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <span className="text-white block text-xs">Email:</span>
                        <a href={`mailto:${r.email}`} className="text-purple hover:underline text-sm font-light">{r.email}</a>
                      </div>
                      <div>
                        <span className="text-white block text-xs">Concierge Phone:</span>
                        <a href={`tel:${r.phone.replace(/\s+/g,'')}`} className="text-purple hover:underline text-sm font-light">{r.phone}</a>
                      </div>
                      <div>
                        <span className="text-white block text-xs">Governing Location:</span>
                        <span className="text-sm font-light text-white">{r.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
