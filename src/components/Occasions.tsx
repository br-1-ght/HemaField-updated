import React from 'react';
import { OCCASIONS, Occasion } from '../data/data';
import { CONTACT } from '../data/data';

export default function Occasions() {
  const handleOrder = (o: Occasion) => {
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(o.wa)}`, '_blank');
  };

  return (
    <section id="occasions" className="bg-cream-warm py-20 px-5 md:px-20">
      <div className="s-tag"><span>Shop by Occasion 🎁</span></div>
      <h2 className="s-title">Every <em>feeling</em> deserves a flower</h2>
      <p className="text-[15px] font-light text-muted leading-[1.95] max-w-xl mb-12">
        Whether you're declaring love, offering comfort, celebrating someone, or simply saying "I see you" — find the bouquet that speaks your language.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OCCASIONS.map(o => (
          <div
            key={o.id}
            className="rounded-2xl overflow-hidden relative group cursor-pointer"
            style={{ aspectRatio: '3/4' }}
            onClick={() => handleOrder(o)}
          >
            <img
              src={o.img}
              alt={`${o.name} flowers Lagos`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: 'brightness(.72) saturate(1.1)' }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-6"
              style={{ background: 'linear-gradient(to top,rgba(12,26,16,.88) 0%,rgba(12,26,16,.05) 60%,transparent 100%)' }}
            >
              <p className="text-[9px] tracking-[.18em] uppercase text-gold mb-1">{o.label}</p>
              <p className="font-serif text-[28px] font-light text-white mb-1 leading-tight">{o.name}</p>
              <p className="text-xs italic text-white/65 mb-1.5">{o.tagline}</p>
              <p className="text-sm font-semibold text-gold-light font-serif mb-4">{o.priceFrom}</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleOrder(o); }}
                className="inline-flex items-center justify-center bg-rose text-white border-none rounded-md px-5 py-2.5 text-sm font-medium cursor-pointer font-sans transition-all w-fit hover:bg-rose-light hover:-translate-y-0.5"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}