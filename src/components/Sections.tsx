import React, { useState } from 'react';
import { CONTACT } from '../data/data';
import { IMG2, IMG3 } from '../data/images';

// ── Ticker ──────────────────────────────────────────────────
export function Ticker() {
  const items = [
    'Same-day delivery in Lagos','Free personalised message card',
    'Secure Paystack checkout','Trusted by Nigerians worldwide',
    'WhatsApp order in 60 seconds','Roses · Chocolates · Premium Boxes',
    'Lekki · VI · Ikoyi · Island · Mainland',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-gold py-2.5 overflow-hidden">
      <div className="flex animate-ticker w-max">
        {doubled.map((t, i) => (
          <span key={i} className="text-xs font-medium text-forest tracking-[.07em] px-11 whitespace-nowrap">
            ✦&nbsp; {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Diaspora ─────────────────────────────────────────────────
export function Diaspora() {
  const waMsg = 'Hello Hemafield! I am ordering from abroad and want to send flowers to Lagos. Please help me.';

  return (
    <section id="diaspora" className="bg-cream-warm overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[580px]">

        {/* LEFT: full-bleed image */}
        <div className="relative h-72 md:h-auto">
          <img
            src={IMG3}
            alt="Woman receiving flowers"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center px-10 py-16 md:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-rose block" />
            <span className="text-[10px] tracking-[.2em] uppercase text-rose">Let flowers go on your behalf</span>
          </div>

          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-light text-ink leading-[1.1] mb-6">
            Let flowers go<br />
            on your <em className="not-italic text-rose-light font-serif">behalf.</em>
          </h2>

          <p className="text-[14px] font-light text-muted leading-[1.9] mb-3 max-w-lg">
            You're far. In London, Houston, Toronto, or anywhere outside Lagos. You can't be there in person for the moments that matter — but your love can show up.
          </p>
          <p className="text-[14px] font-light text-muted leading-[1.9] mb-8 max-w-lg">
            Order from anywhere in the world. We deliver same-day in Lagos, send you a photo on delivery, and include your personal message word for word.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
            {[
              ['📸', 'Delivery photo sent to you', 'Real-time confirmation, always'],
              ['🔒', 'Secure Paystack payment', 'Trusted by millions'],
              ['⚡', 'Same-day delivery', 'Order by 2PM for today'],
              ['✍️', 'Your words, handwritten', 'Free message card every time'],
            ].map(([ico, title, sub]) => (
              <div key={title} className="flex gap-3 items-start">
                <span className="text-base mt-0.5 leading-none">{ico}</span>
                <div>
                  <p className="text-[13px] font-semibold text-ink leading-snug">{title}</p>
                  <p className="text-[12px] text-muted font-light">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-rose hover:bg-rose-light text-white text-xs font-semibold tracking-[.2em] uppercase py-5 rounded-lg transition-colors"
          >
            Send flowers to Lagos →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Steps ─────────────────────────────────────────────────────
export function Steps() {
  const steps = [
    { num: '1', ico: '🌷', title: 'Choose your bouquet', desc: 'Browse our collection and pick the arrangement that fits your feeling and budget. Need help? WhatsApp us your occasion and budget — we\'ll suggest the perfect match.' },
    { num: '2', ico: '🔒', title: 'Pay securely', desc: 'Complete your order via Paystack — card, bank transfer, or USSD. Fully encrypted and protected. International orders welcome. Or order instantly on WhatsApp.' },
    { num: '3', ico: '🎁', title: 'Wait for the smile', desc: 'Your person receives their bouquet with your handwritten message card. We send you a delivery confirmation photo so you don\'t miss a single second of their reaction.' },
  ];

  return (
    <section className="bg-forest py-20 px-5 md:px-20">
      {/* Header — left aligned */}
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-px bg-rose block" />
        <span className="text-[10px] tracking-[.2em] uppercase text-rose">Simple process</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,5vw,58px)] font-light text-cream leading-tight mb-4">
        Three steps to <em className="not-italic text-rose-light">unforgettable</em>
      </h2>
      <p className="text-[14px] font-light text-cream/50 mb-16 max-w-lg">
        From "I want to send flowers" to "thank you, I'm crying" — in minutes.
      </p>

      {/* Steps row */}
      <div className="relative grid md:grid-cols-3 gap-0">

        {/* Connecting lines — desktop only */}
        <div className="hidden md:block absolute top-[28px] left-[calc(33.33%+28px)] right-[calc(33.33%+28px)] h-px bg-rose/40" />

        {steps.map((s, i) => (
          <div key={s.num} className="relative">
            {/* Icons row */}
            <div className="flex items-center gap-3 mb-6">
              {/* Numbered circle */}
              <div className="w-14 h-14 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">{s.num}</span>
              </div>
              {/* Emoji icon box */}
              <div className="w-14 h-14 rounded-xl bg-forest-mid/60 border border-cream/10 flex items-center justify-center text-2xl flex-shrink-0">
                {s.ico}
              </div>
            </div>

            {/* Text */}
            <h3 className="font-serif text-2xl font-light text-cream mb-3">{s.title}</h3>
            <p className="text-[13px] font-light text-cream/50 leading-relaxed pr-8">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────────────
const REVIEWS = [
  { text: '"I was looking for a fresh flower shop in Lagos and Hemafield is genuinely the go-to place. The quality was outstanding — fresh and vibrant exactly as shown."', name: 'Akinleye Steven', loc: 'Lagos, Nigeria' },
  { text: '"I will always recommend Hemafield as the go-to flower shop in Lagos. The service was exceptional from ordering to delivery. My wife was completely speechless."', name: 'Oyemomi Israel', loc: 'Lagos, Nigeria' },
  { text: '"Ordered from the UK for my mother\'s birthday in Lekki. Bouquet arrived same day, they sent me a photo, and she cried happy tears. That was everything."', name: 'Temi O.', loc: 'London, UK · Sent to Lagos' },
  { text: '"I love their creativity. The Roses & Chocolates box was so beautiful — it looked even better than the picture online."', name: 'Martilda Omuero', loc: 'Lagos, Nigeria' },
  { text: '"The WhatsApp ordering is seamless. Told them my budget and occasion, they suggested the Premium Box. Delivered to VI in under 3 hours."', name: 'Kemi A.', loc: 'Victoria Island, Lagos' },
  { text: '"The Mixed Bouquet for our anniversary was breathtaking. Hemafield understands that flowers aren\'t just decoration — they\'re emotion made visible."', name: 'Biodun N.', loc: 'Lekki Phase 1, Lagos' },
];

export function Reviews() {
  return (
    <section className="bg-cream py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <div className="s-tag justify-center"><span>Real stories</span></div>
        <h2 className="s-title">What Lagos is <em>saying</em></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <div key={i} className="bg-cream-pure rounded-2xl p-6 border border-ink/6">
            <div className="flex gap-0.5 mb-4">
              {[0,1,2,3,4].map(s => <span key={s} className="text-gold text-sm">★</span>)}
            </div>
            <p className="text-sm font-light text-ink/80 leading-relaxed mb-5 italic">{r.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-forest/15 flex items-center justify-center text-xs font-semibold text-forest">
                {r.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{r.name}</p>
                <p className="text-xs text-muted">{r.loc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Our Story ─────────────────────────────────────────────────
export function Story() {
  return (
    <section id="story" className="bg-cream-warm overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[640px]">

        {/* LEFT: tall rounded image with padding */}
        <div className="p-8 md:p-12 flex items-stretch">
          <div className="rounded-2xl overflow-hidden w-full">
            <img
              src={IMG2}
              alt="Hemafield flowers delivery"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-rose block" />
            <span className="text-[10px] tracking-[.2em] uppercase text-rose">Our Story</span>
          </div>

          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-light text-ink leading-[1.1] mb-6">
            Born from a love for{' '}
            <em className="not-italic text-rose-light font-serif">genuine<br />beauty</em>
          </h2>

          <p className="text-[14px] font-light text-muted leading-[1.9] mb-4 max-w-lg">
            In the heart of Hemafield beats the rhythm of a genuine love for blossoms and a commitment to crafting extraordinary experiences. We are Lagos's most trusted floral studio — not just a flower shop, but weavers of emotion and memory.
          </p>
          <p className="text-[14px] font-light text-muted leading-[1.9] mb-10 max-w-lg">
            Each bloom is carefully sourced and arranged with one intention: to convey your sentiments with authenticity, grace and beauty that lasts long after the petals settle.
          </p>

          {/* Stats — 2×2 grid, large rose serif */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-10">
            {[
              ['4,000+', 'Bouquets delivered'],
              ['10+ yrs', 'Floral expertise'],
              ['Same day', 'Lagos delivery'],
              ['100%', 'Fresh, daily sourced'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-serif text-[28px] text-rose-light leading-none mb-1">{num}</p>
                <p className="text-[12px] text-muted font-light">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-rose hover:bg-rose-light text-white text-xs font-semibold tracking-[.2em] uppercase px-8 py-4 rounded-lg transition-colors w-fit"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────
export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', occ: '', msg: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    const waMsg = `Hello Hemafield! My name is ${form.name}.\nEmail: ${form.email}\nOccasion: ${form.occ}\n\n${form.msg}`;
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(waMsg)}`, '_blank');
    setSent(true);
  };

  const contactItems = [
    { ico: '📞', label: 'Phone & WhatsApp', val: CONTACT.phone },
    { ico: '✉️', label: 'Email', val: CONTACT.email },
    { ico: '📍', label: 'Head Office', val: CONTACT.address },
    { ico: '🕐', label: 'Order Cutoff', val: CONTACT.cutoff },
  ];

  return (
    <section id="contact" className="bg-forest py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-rose block" />
            <span className="text-[10px] tracking-[.2em] uppercase text-rose">Get in Touch</span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4.5vw,54px)] font-light leading-[1.1] text-cream mb-6">
            Let's make someone's<br />
            day <em className="not-italic text-rose-light">unforgettable.</em>
          </h2>
          <p className="text-[14px] font-light text-cream/55 leading-[1.9] mb-10 max-w-md">
            Whether you're placing an order, need a custom arrangement, or want to speak to a human — we're always available. WhatsApp us for the fastest response.
          </p>

          <div className="flex flex-col gap-5">
            {contactItems.map(({ ico, label, val }) => (
              <div key={label} className="flex items-center gap-4">
                {/* Icon box */}
                <div className="w-10 h-10 rounded-lg bg-forest-mid/70 border border-cream/10 flex items-center justify-center text-base flex-shrink-0">
                  {ico}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-cream leading-snug">{label}</p>
                  <p className="text-[13px] font-light text-cream/55">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: form */}
        <div>
          {sent ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-5">🌸</div>
              <h3 className="font-serif text-2xl text-cream mb-2">Message received!</h3>
              <p className="text-sm text-cream/50">We'll be in touch within the hour.</p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-light text-cream mb-6">Send us a message</h3>

              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-forest-mid/40 border border-cream/10 text-cream placeholder-cream/30 rounded-lg px-5 py-4 text-sm mb-3 focus:outline-none focus:border-cream/30 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-forest-mid/40 border border-cream/10 text-cream placeholder-cream/30 rounded-lg px-5 py-4 text-sm mb-3 focus:outline-none focus:border-cream/30 transition-colors"
              />
              <select
                value={form.occ}
                onChange={e => setForm({ ...form, occ: e.target.value })}
                className="w-full bg-forest-mid/40 border border-cream/10 text-cream/60 rounded-lg px-5 py-4 text-sm mb-3 focus:outline-none focus:border-cream/30 transition-colors appearance-none"
              >
                <option value="">Select occasion...</option>
                {['Birthday','Valentine / Romance','Anniversary','Proposal','Wedding','Graduation',
                  'Promotion / Achievement','Apology / Forgiveness','Sympathy / Funeral','Self-Love',
                  'Get Well Soon','Appreciation','Just Because','Other'].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us the occasion, delivery address, budget, and any special requests..."
                value={form.msg}
                onChange={e => setForm({ ...form, msg: e.target.value })}
                rows={5}
                className="w-full bg-forest-mid/40 border border-cream/10 text-cream placeholder-cream/30 rounded-lg px-5 py-4 text-sm mb-4 focus:outline-none focus:border-cream/30 transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-rose hover:bg-rose-light text-white border-none py-4 rounded-lg text-xs font-semibold font-sans tracking-[.2em] uppercase cursor-pointer transition-colors"
              >
                Send Message →
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

// ── WA Float button ───────────────────────────────────────────
export function WaFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent('Hello Hemafield! I want to order flowers.')}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[300] w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      aria-label="Order on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}