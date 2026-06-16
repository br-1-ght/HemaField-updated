import React, { useState } from 'react';
import { PRODUCTS, OCCASIONS, Product, Occasion } from '../data/data';
import PaymentModal from './PaymentModal';
import { CONTACT } from '../data/data';

type CollectionItem = Product & { itemType: 'product' | 'occasion' };

function toCollectionItem(p: Product, itemType: 'product' | 'occasion'): CollectionItem {
  return { ...p, itemType };
}

const allItems: CollectionItem[] = [
  ...PRODUCTS.map(p => toCollectionItem(p, 'product')),
  ...OCCASIONS.map(o =>
    toCollectionItem(
      {
        id: o.id,
        name: o.name,
        label: o.label,
        tagline: o.tagline,
        img: o.img,
        priceFrom: o.priceFrom,
        wa: o.wa,
        priceNum: o.priceNum,
        description: o.description,
        features: o.features,
        categories: o.categories,
      },
      'occasion'
    )
  ),
];

// Deduplicate by id (occasions that share imgs with products)
const seen = new Set<string>();
const deduped = allItems.filter(item => {
  if (seen.has(item.id)) return false;
  seen.add(item.id);
  return true;
});

// All unique categories
const ALL_CATEGORIES = ['All', ...Array.from(new Set(deduped.flatMap(p => p.categories)))];

export default function AllProducts({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [payModal, setPayModal] = useState<{ open: boolean; product: CollectionItem | null }>({
    open: false,
    product: null,
  });

  const openPay = (p: CollectionItem) => setPayModal({ open: true, product: p });
  const closePay = () => setPayModal({ open: false, product: null });

  const filtered =
    activeCategory === 'All'
      ? deduped
      : deduped.filter(p => p.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-cream-pure text-ink font-sans">
      {/* Header */}
      <div className="bg-cream-warm border-b border-[#e8dece] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5 md:px-20 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-sm text-muted hover:text-rose transition-colors flex items-center gap-1.5"
          >
            ← Back
          </button>
          <span className="text-[#d4bfa0]">|</span>
          <span className="font-serif text-lg text-ink">Full Collection</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-20 py-16">
        {/* Page title */}
        <div className="s-tag mb-4"><span>All Arrangements 🌸</span></div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <h1 className="s-title">Every bloom, <em>every occasion</em></h1>
        </div>
        <p className="text-[15px] font-light text-muted leading-[1.95] max-w-xl mb-10">
          Browse our complete collection of hand-crafted bouquets and arrangements — from intimate
          gestures to grand statements. Every piece made with care in Lagos.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wide border transition-all font-medium ${
                activeCategory === cat
                  ? 'bg-rose text-white border-rose'
                  : 'bg-transparent text-muted border-[#d4bfa0] hover:border-rose hover:text-rose'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden relative cursor-pointer group transition-transform duration-400 hover:-translate-y-1.5 shadow-sm"
              style={{ aspectRatio: '3/4' }}
              onClick={() => openPay(p)}
            >
              <img
                src={p.img}
                alt={`${p.name} — Hemafield Flowers Lagos`}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.07]"
                style={{ filter: 'brightness(.78) saturate(1.15)' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-5"
                style={{
                  background:
                    'linear-gradient(to top,rgba(12,26,16,.9) 0%,rgba(12,26,16,.1) 55%,transparent 100%)',
                }}
              >
                <p className="text-[9px] tracking-[.18em] uppercase text-gold mb-1">{p.label}</p>
                <p className="font-serif text-xl font-light text-white mb-1 leading-tight">{p.name}</p>
                <p className="text-xs italic text-white/65 mb-1.5 line-clamp-2">{p.tagline}</p>
                <p className="text-sm font-semibold text-gold-light font-serif mb-4">{p.priceFrom}</p>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={e => { e.stopPropagation(); openPay(p); }}
                    className="inline-flex items-center justify-center bg-rose text-white border-none rounded-md px-5 py-2 text-xs font-medium tracking-wide cursor-pointer font-sans transition-all hover:bg-rose-light hover:-translate-y-0.5"
                  >
                    Order Now →
                  </button>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      window.open(
                        `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(p.wa)}`,
                        '_blank'
                      );
                    }}
                    className="inline-flex items-center justify-center bg-transparent text-white border border-white/50 rounded-md px-4 py-2 text-xs font-medium cursor-pointer font-sans transition-all hover:border-white hover:bg-white/10"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            <p className="font-serif text-2xl mb-2">No arrangements found</p>
            <p className="text-sm">Try selecting a different category above.</p>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={payModal.open}
        productName={payModal.product?.name ?? ''}
        productPrice={payModal.product?.priceFrom ?? ''}
        productPriceNum={payModal.product?.priceNum}
        productImage={payModal.product?.img}
        productTagline={payModal.product?.tagline}
        productDescription={payModal.product?.description}
        productFeatures={payModal.product?.features ?? []}
        productCategories={payModal.product?.categories ?? []}
        waMessage={payModal.product?.wa ?? ''}
        onClose={closePay}
        onPaystackSuccess={() => {}}
      />
    </div>
  );
}
