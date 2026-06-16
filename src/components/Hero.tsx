import React, { useState, useEffect, useRef } from 'react';
import { SLIDER_IMGS, CONTACT } from '../data/data';

export default function Hero() {
  const [slideIdx, setSlideIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideIdx(i => (i + 1) % SLIDER_IMGS.length);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goSlide = (i: number) => { setSlideIdx(i); startTimer(); };

  return (
    <section className="min-h-[94vh] bg-forest grid md:grid-cols-2 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 75% 50%,rgba(196,96,106,.14) 0%,transparent 65%)' }} />

      {/* LEFT — text */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-20 relative z-[2]">
        <div className="flex items-center gap-3.5 mb-8">
          <span className="w-9 h-px bg-gold block" />
          <span className="text-[10px] tracking-[.22em] uppercase text-gold">Lagos's Premier Flower Studio</span>
        </div>

        <h1 className="font-serif text-[clamp(48px,6.5vw,80px)] font-light leading-[1.08] text-cream mb-6">
          Say it with<br />something that <em className="not-italic text-rose-light">stays.</em>
        </h1>

        <p className="text-[15px] font-light text-cream/60 leading-[1.95] max-w-[400px] mb-11">
          Same-day fresh flower delivery across Lagos. For every birthday, anniversary, proposal, heartbreak and everything in between.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-14">
          <a href="#popular" className="btn-rose">Shop Now</a>
          <a
            href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent('Hello! I want to order a custom bouquet.')}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-outline"
          >
            Custom Bouquet →
          </a>
        </div>

        <div className="flex gap-11 pt-10 border-t border-cream/10">
          {[['4,000+','Bouquets Delivered'],['Same Day','Lagos Delivery'],['5 ★','Customer Rating']].map(([n,l]) => (
            <div key={l}>
              <div className="font-serif text-[28px] text-gold">{n}</div>
              <div className="text-[10px] tracking-[.08em] uppercase text-cream/38 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — slider */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${slideIdx * 100}%)` }}
        >
          {SLIDER_IMGS.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img
                src={src}
                alt={`Hemafield Flowers Lagos — slide ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(.82) saturate(1.1)' }}
              />
            </div>
          ))}
        </div>

        {/* Left-side gradient blend */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right,#1a3a22 0%,transparent 28%)' }} />

        {/* Arrows */}
        <button
          onClick={() => goSlide((slideIdx - 1 + SLIDER_IMGS.length) % SLIDER_IMGS.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 text-white border-none cursor-pointer flex items-center justify-center hover:bg-black/50 transition-colors"
        >←</button>
        <button
          onClick={() => goSlide((slideIdx + 1) % SLIDER_IMGS.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 text-white border-none cursor-pointer flex items-center justify-center hover:bg-black/50 transition-colors"
        >→</button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDER_IMGS.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === slideIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/45'
              }`}
            />
          ))}
        </div>

        {/* Badges */}
        <div className="absolute top-[14%] right-[7%] z-10 bg-cream/95 backdrop-blur-sm rounded-[10px] px-4 py-3 text-xs font-medium text-ink shadow-lg flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#2d9c5e] animate-pulse block" />
          Delivering in Lagos today
        </div>
        <div className="absolute bottom-[17%] right-[9%] z-10 bg-cream/95 backdrop-blur-sm rounded-[10px] px-4 py-3 shadow-lg">
          <div className="text-[9px] text-muted tracking-wide uppercase">Bouquets from</div>
          <div className="font-serif text-[22px] font-light text-ink">₦65,000</div>
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-5 pt-5"
          style={{ background: 'linear-gradient(to top,rgba(26,58,34,.92) 0%,transparent 100%)' }}>
          <div className="font-serif text-[clamp(18px,2.5vw,26px)] font-light italic text-cream leading-tight">
            Celebrate Life, <em className="text-gold-light not-italic">Beautifully.</em>
          </div>
        </div>
      </div>
    </section>
  );
}
