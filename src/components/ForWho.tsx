import React from 'react';
import { FOR_CARDS, ForCard } from '../data/data';
import { CONTACT } from '../data/data';

export default function ForWho() {
  const handleOrder = (c: ForCard) => {
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(c.wa)}`, '_blank');
  };

  return (
    <section id="for-who" className="bg-forest py-20 px-5 md:px-20">

      {/* Header */}
      <div className="flex items-center gap-3 mb-3.5">
        <span className="w-6 h-px bg-rose block" />
        <span className="text-[10px] tracking-[.2em] uppercase text-rose">Every reason. Every flower.</span>
      </div>
      <h2 className="font-serif text-[clamp(34px,4.5vw,54px)] font-light leading-tight text-cream mb-4">
        Flowers are for <em className="not-italic text-rose-light">every feeling</em>
      </h2>
      <p className="text-[15px] font-light text-cream/55 leading-[1.95] max-w-xl mb-12">
        No occasion is too big. No feeling is too small. Browse the moment you're in and we'll match you with the perfect bloom.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FOR_CARDS.map((c, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '340px' }}
            onClick={() => handleOrder(c)}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${c.bg}')` }}
            />

            {/* Dark overlay — matches the forest/72 tint in the screenshot */}
            <div className="absolute inset-0 bg-forest/70" />

            {/* Card content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between" style={{ minHeight: '340px' }}>

              {/* Top: label + items */}
              <div>
                <p className="text-xs text-cream/45 tracking-widest mb-5 font-light">For?</p>
                <div className="flex flex-col gap-1 mb-6">
                  {c.items.map(item => (
                    <p key={item} className="font-serif text-[22px] font-light text-cream leading-snug">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bottom: price + button */}
              <div>
                <p className="text-sm font-semibold text-gold-light font-serif mb-3">{c.priceFrom}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleOrder(c); }}
                  className="inline-flex items-center justify-center bg-rose hover:bg-rose-light text-white border-none rounded-md px-5 py-2.5 text-sm font-medium cursor-pointer font-sans transition-all hover:-translate-y-0.5"
                >
                  Order Now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}