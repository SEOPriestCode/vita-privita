export const TREATMENTS = [
  {
    id: "yoni",
    name: "Yoni Massage",
    tagline: "Sacred feminine healing",
    num: "01",
    short: "A deeply respectful feminine treatment that honours the sacred, offering waves of healing and pleasure through expert bodywork.",
    long: "Yoni massage is a sacred feminine bodywork practice that approaches the female form with the utmost love, respect, and reverence. This transformative treatment is designed for women seeking to deepen their connection with their body, experience profound relaxation, or heal from past emotional or sexual trauma. Through systematic and mindful touch — encompassing the neck, shoulders, breasts, and entire body — the practice creates a full-body experience that culminates in natural, unforced waves of pleasure. Our masseuses are specially trained to create a safe, nurturing space where you feel completely cherished and honored.",
    benefits: ["Helps women who experience difficulty with orgasm", "Serves as healing therapy for those with past trauma", "Full body experience with focused sacred attention", "Increases body awareness and sensual confidence", "Promotes deep emotional release and relaxation"],
    price: "180",
    duration: "90 min",
    emoji: "✦",
  },
  {
    id: "nuru",
    name: "Nuru Massage",
    tagline: "Body-to-body sensory experience",
    num: "02",
    short: "An intimate Japanese technique using ultra-silky gel, where therapist and client connect through full-body contact for unparalleled pleasure.",
    long: "Originating from Japan, Nuru massage is an extraordinarily intimate technique in which the therapist uses their entire body to massage the client, with both parties coated in a special ultra-smooth, odorless, colorless gel. The Nuru gel creates a silky, frictionless surface that allows for fluid, wave-like body movements that produce sensations unlike any conventional massage. This technique profoundly reduces stress, anxiety, and emotional tension while dramatically boosting confidence, sensuality, and the mind-body connection. Nuru massage is particularly effective for those seeking physical rejuvenation and a deep sense of emotional release.",
    benefits: ["Exceptional stress and anxiety relief", "Boosts confidence and sensuality", "Improves flexibility and muscle coordination", "Deepens mind-body-soul connection", "Full body rejuvenation and energy renewal"],
    price: "200",
    duration: "90 min",
    emoji: "◈",
  },
  {
    id: "tantric",
    name: "Tantric Massage",
    tagline: "Ancient erotic awakening",
    num: "03",
    short: "Slow, deliberate, full-body erotic stimulation drawing from tantric traditions to elevate consciousness and awaken every cell.",
    long: "Tantric massage is an ancient art form that transcends ordinary sensual experience. Drawing from tantric traditions, this treatment involves slow, deliberate caressing, teasing, and stroking of the entire body with warm aromatic oils — from head to toe. The masseur or masseuse employs a gliding touch that makes every nerve ending tremble with exquisite pleasure. Unlike purely physical treatments, tantric massage may incorporate mindful elements such as conscious breathing techniques, eye contact, energetic awareness, and deep relaxation practices. The result is an elevated state of consciousness, heightened libido, and a profound sense of connection with your own body.",
    benefits: ["Increases libido and conscious arousal", "Deeper self-connection and intimacy", "Incorporates breathwork and mindfulness", "Whole-body erotic bliss experience", "Addresses sacred spot with expert technique"],
    price: "220",
    duration: "90–120 min",
    emoji: "❋",
  },
  {
    id: "lingam",
    name: "Lingam Massage",
    tagline: "Sacred masculine pleasure",
    num: "04",
    short: "A thoughtful, reverent treatment of the sacred masculine — performed with care, skill, and genuine desire to deliver pure pleasure.",
    long: "Lingam massage is a sacred masculine practice that treats the male anatomy with profound respect, thoughtfulness, and care. Far beyond a conventional experience, the Lingam treatment incorporates the entire masculine energy — encompassing the full body, the testicles, the perineum, and the prostate (Sacred Spot). Our therapists approach this treatment as a genuine ritual of pleasure-giving, with no agenda other than the client's total fulfilment. The systematic approach to Lingam massage allows the receiver to relax fully, surrender control, and experience levels of pleasure that surpass ordinary experience.",
    benefits: ["Whole-body approach beyond conventional treatment", "Expert perineum and sacred spot techniques", "Complete physical and emotional surrender", "Profound relaxation and pleasure", "Builds masculine confidence and body awareness"],
    price: "180",
    duration: "60–90 min",
    emoji: "⊕",
  },
  {
    id: "couples",
    name: "Couples Treatment",
    tagline: "Shared sensual journey",
    num: "05",
    short: "Experience the magic together. Two therapists guide you both through a synchronized treatment designed to deepen intimacy and connection.",
    long: "Our Couples Treatment is designed for partners who wish to share an extraordinary sensual experience side by side. Two professional therapists work in perfect synchrony, guiding both partners through a deeply relaxing and arousing treatment simultaneously. The shared vulnerability of the experience creates an unparalleled intimacy and deepens emotional bonds. Couples often report a profound renewal of passion and connection following this treatment. Whether you are celebrating a special occasion or simply wish to invest in your relationship, our Couples Treatment offers an unforgettable shared memory.",
    benefits: ["Synchronized dual-therapist experience", "Deepens emotional and physical intimacy", "Perfect for celebrations and special occasions", "Renews passion and strengthens bonds", "Completely private, discreet, and confidential"],
    price: "380",
    duration: "90 min",
    emoji: "⟁",
  },
  {
    id: "fourhand",
    name: "Four-Hand Treatment",
    tagline: "Double the sensation",
    num: "06",
    short: "Two therapists work in choreographed harmony on one body — an overwhelming, transcendent experience of total sensory immersion.",
    long: "The Four-Hand Treatment is the pinnacle of our service offering. Two skilled therapists work on one client simultaneously, their movements perfectly choreographed to create an overwhelming, almost hallucinatory experience of touch. The brain, unable to track four hands moving across the body at once, enters a state of pure sensory surrender — the ultimate in relaxation and erotic transcendence. This treatment is ideal for those who have experienced our standard services and seek to elevate their experience to a level of extraordinary luxury.",
    benefits: ["Two therapists working in perfect synchrony", "Sensory overload that induces deep surrender", "The ultimate luxury erotic massage experience", "Completely disorienting and transcendent sensation", "Available for both outcall home and hotel visits"],
    price: "450",
    duration: "90 min",
    emoji: "✤",
  },
];

export const THERAPISTS = [
  { name: "Elena", role: "Elite Masseuse", bio: "With deep roots in European spa traditions, Elena offers a sophisticated and transformative sensual experience in London.", skills: ["Tantric", "Nuru", "Yoni"], initial: "E" },
  { name: "James", role: "Senior Therapist", bio: "James is a master of the masculine form, providing powerful yet sensitive bodywork for his discerning male and female clients.", skills: ["Lingam", "Four-Hand", "Deep Tissue"], initial: "J" },
  { name: "Sofia", role: "Luxury Therapist", bio: "Sofia's approach is one of total sensory immersion. Her treatments are carefully choreographed journeys into pure pleasure.", skills: ["Nuru", "Couples", "Tantric"], initial: "S" },
  { name: "Marcus", role: "Lead Masseuse", bio: "Specialising in synchronized four-hand work, Marcus brings a disciplined yet deeply erotic presence to every session.", skills: ["Four-Hand", "Lingam", "Couples"], initial: "M" },
];

export const EVENTS = [
  {
    id: "london-penthouse-soiree",
    title: "London Penthouse Soirée",
    date: "Quarterly",
    description: "An evening of sensory indulgence and high-end networking in a luxury Mayfair penthouse. Strictly invitation only.",
    image: "/images/hero_1.png"
  },
  {
    id: "sensual-masterclass",
    title: "Sensual Masterclass",
    date: "Bi-Weekly",
    description: "Private 1-on-1 coaching in the art of sensual touch and erotic connection, held at our discrete London studio.",
    image: "/images/about.png"
  }
];

export const GALLERY_IMAGES = [
  { url: "/images/hero_2.png", title: "London Sanctuary" },
  { url: "/images/about.png", title: "Elite Service" },
  { url: "/images/hero_1.png", title: "Aura of Pleasure" },
  { url: "/images/therapists.png", title: "London Team" },
  { url: "/images/hero_2.png", title: "Private Suite" },
  { url: "/images/about.png", title: "Atmosphere" },
];
