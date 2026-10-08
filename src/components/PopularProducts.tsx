import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/data';
import PaymentModal from './PaymentModal';

export default function PopularProducts() {
  const [payModal, setPayModal] = useState<{ open: boolean; product: Product | null }>({
    open: false,
    product: null,
  });

  const openPay = (p: Product) => setPayModal({ open: true, product: p });
  const closePay = () => setPayModal({ open: false, product: null });

  return (
    <section id="popular" className="bg-cream-pure py-20 px-5 md:px-20">
      <div className="s-tag"><span>Most Popular ⭐</span></div>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
        <h2 className="s-title">What Lagos keeps <em>choosing</em></h2>
        <a
          href="#occasions"
          className="text-xs tracking-widest uppercase text-muted border-b border-muted pb-0.5 hover:text-rose hover:border-rose transition-colors"
        >
          Full collection →
        </a>
      </div>
      <p className="text-[15px] font-light text-muted leading-[1.95] max-w-xl mb-12">
        Our most ordered arrangements — loved by thousands of Lagos couples, families and friends.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden relative cursor-pointer group transition-transform duration-400 hover:-translate-y-1.5"
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
              <p className="font-serif text-2xl font-light text-white mb-1">{p.name}</p>
              <p className="text-xs text-white/70 tracking-wide mb-1 italic">{p.label}</p>
              <p className="text-sm font-semibold text-gold-light font-serif mb-4">{p.priceFrom}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openPay(p);
                }}
                className="inline-flex items-center justify-center bg-rose text-white border-none rounded-md px-6 py-2.5 text-sm font-medium tracking-wide cursor-pointer font-sans transition-all w-fit hover:bg-rose-light hover:-translate-y-0.5"
              >
                Order Now →
              </button>
            </div>
          </div>
        ))}
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
    </section>
  );
}
