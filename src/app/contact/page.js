"use client";

import { useRegion } from "@/context/RegionContext";
import { REGIONS } from "@/data/constants";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { region } = useRegion();
  const r = REGIONS[region];

  return (
    <div className="page-fade">
      <section className="h-[50vh] min-h-[400px] bg-deep flex items-end px-6 md:px-12 pb-12 relative overflow-hidden border-b border-border-purple">
        <div className="absolute inset-0 z-0">
           <img src="/images/hero_1.png" alt="Contact" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <ScrollReveal direction="down">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-none relative z-10 text-white">
            Get in <em>Touch</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="section-label">Contact Details</div>
              <h2 className="section-title">Reach <em>Out</em></h2>
              <p className="text-[0.85rem] text-muted leading-[1.8] mb-12">
                For bookings, inquiries, or to discuss bespoke arrangements in {r.location}, please contact our concierge team. We ensure absolute confidentiality.
              </p>
            </ScrollReveal>

            <div className="flex flex-col">
              {[
                { l: "WhatsApp", v: r.phone, h: `https://api.whatsapp.com/send/?phone=${r.whatsapp}`, i: "W" },
                { l: "Direct Line", v: r.phone, h: `tel:${r.phone.replace(/\s+/g,'')}`, i: "P" },
                { l: "Email", v: r.email, h: `mailto:${r.email}`, i: "E" }
              ].map((item, idx) => (
                <motion.div 
                  key={item.l}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start py-6 border-b border-border-purple group"
                >
                  <div className="w-10 h-10 border border-border-purple flex items-center justify-center shrink-0 text-purple text-lg rounded-full group-hover:bg-purple group-hover:text-black transition-all duration-300">{item.i}</div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-purple mb-1.5">{item.l}</div>
                    <a href={item.h} target={item.l === "WhatsApp" ? "_blank" : undefined} rel={item.l === "WhatsApp" ? "noreferrer" : undefined} className="text-[0.9rem] text-white no-underline hover:text-purple transition-colors">{item.v}</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 border border-border-purple bg-card rounded-3xl relative overflow-hidden glass-card-purple">
                <h3 className="font-serif text-lg text-purple mb-6">Operating Hours</h3>
                <div className="flex justify-between py-2 text-[0.8rem] text-muted border-b border-border-purple/30">
                  <span className="text-white">Monday - Thursday</span>
                  <span>10:00 - 22:00</span>
                </div>
                <div className="flex justify-between py-2 text-[0.8rem] text-muted border-b border-border-purple/30">
                  <span className="text-white">Friday - Saturday</span>
                  <span>10:00 - 00:00</span>
                </div>
                <div className="flex justify-between py-2 text-[0.8rem] text-muted">
                  <span className="text-white">Sunday</span>
                  <span>12:00 - 20:00</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="section-label">Enquiry Form</div>
              <h2 className="section-title">Send a <em>Message</em></h2>
              
              <form className="flex flex-col gap-6 mt-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">Name / Alias</label>
                    <input type="text" placeholder="How should we address you?" className="bg-card border border-border-purple text-white font-sans text-[0.85rem] px-4 py-3.5 outline-none transition-colors focus:border-purple w-full rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">Contact Number</label>
                    <input type="tel" placeholder="Include country code" className="bg-card border border-border-purple text-white font-sans text-[0.85rem] px-4 py-3.5 outline-none transition-colors focus:border-purple w-full rounded-xl" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">Preferred Date</label>
                    <input type="date" className="bg-card border border-border-purple text-white font-sans text-[0.85rem] px-4 py-3.5 outline-none transition-colors focus:border-purple w-full rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">Service Interest</label>
                    <div className="relative">
                      <select className="bg-card border border-border-purple text-white font-sans text-[0.85rem] px-4 py-3.5 outline-none transition-colors focus:border-purple w-full cursor-pointer appearance-none rounded-xl">
                        <option value="" disabled selected>Select a treatment</option>
                        <option value="yoni" className="bg-card">Yoni Massage</option>
                        <option value="nuru" className="bg-card">Nuru Massage</option>
                        <option value="tantric" className="bg-card">Tantric Massage</option>
                        <option value="lingam" className="bg-card">Lingam Massage</option>
                        <option value="couples" className="bg-card">Couples Treatment</option>
                        <option value="fourhand" className="bg-card">Four-Hand Treatment</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple">▾</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-purple">Message</label>
                  <textarea placeholder="Any specific desires or requirements?" className="bg-card border border-border-purple text-white font-sans text-[0.85rem] px-4 py-3.5 outline-none transition-colors focus:border-purple w-full resize-y min-h-[120px] rounded-xl" />
                </div>

                <p className="text-[0.7rem] text-muted leading-[1.6]">
                  By submitting this form, you agree to our <a href="#" className="text-purple no-underline hover:underline">Privacy Policy</a> and confirm you are over 18 years of age. All information is transmitted securely and handled with strict confidentiality.
                </p>

                <div className="pt-4">
                  <button type="submit" className="btn-primary w-full md:w-auto">Submit Enquiry</button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
