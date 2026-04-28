import React from 'react';
import { CONTACT, PAYSTACK_KEY } from '../data/data';

interface PaymentModalProps {
  isOpen: boolean;
  productName: string;
  productPrice: string;
  productPriceNum?: number;
  productImage?: string;
  productTagline?: string;
  productDescription?: string;
  productFeatures?: string[];
  productCategories?: string[];
  waMessage: string;
  onClose: () => void;
  onPaystackSuccess?: () => void;
}

declare const PaystackPop: any;

export default function PaymentModal({
  isOpen,
  productName,
  productPrice,
  productPriceNum,
  productImage,
  productTagline,
  productDescription,
  productFeatures = [],
  productCategories = [],
  waMessage,
  onClose,
  onPaystackSuccess,
}: PaymentModalProps) {
  if (!isOpen) return null;

  const handlePaystack = () => {
    if (!productPriceNum || PAYSTACK_KEY === 'YOUR_PAYSTACK_PUBLIC_KEY') {
      const msg = waMessage + ' I would like to pay via card/bank transfer.';
      window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
      onClose();
      return;
    }
    const handler = PaystackPop.setup({
      key: PAYSTACK_KEY,
      email: 'customer@hemafieldflowers.com.ng',
      amount: productPriceNum * 100,
      currency: 'NGN',
      callback: () => { onPaystackSuccess?.(); onClose(); },
      onClose: () => {},
    });
    handler.openIframe();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/55 z-[800] flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-3xl max-h-[90vh] shadow-2xl">

        {/* LEFT: Image pane */}
        <div className="relative flex-shrink-0 w-full md:w-[42%] h-56 md:h-auto bg-stone-900 overflow-hidden">
          {productImage ? (
            <img src={productImage} alt={productName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#3d5a3e] to-[#2c4a2e]" />
          )}
        </div>

        {/* RIGHT: Content pane */}
        <div className="flex flex-col flex-1 overflow-y-auto p-8 relative">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="11" y2="11" />
              <line x1="11" y1="1" x2="1" y2="11" />
            </svg>
          </button>

          {/* Categories */}
          {productCategories.length > 0 && (
            <p className="text-[10px] tracking-[.18em] uppercase font-medium text-rose-400 mb-3">
              {productCategories.join(' · ')}
            </p>
          )}

          {/* Product name */}
          <h2 className="font-serif text-4xl font-light text-stone-900 leading-tight mb-2">
            {productName}
          </h2>

          {/* Tagline */}
          {productTagline && (
            <p className="font-serif italic text-sm text-stone-400 mb-6 leading-relaxed">
              "{productTagline}"
            </p>
          )}

          {/* Section heading */}
          <h3 className="font-serif text-3xl font-light text-stone-900 mb-4">
            Order via WhatsApp
          </h3>

          {/* Description */}
          {productDescription && (
            <p className="text-[13.5px] leading-[1.8] text-stone-500 font-light mb-5">
              {productDescription}
            </p>
          )}

          {/* Feature checklist */}
          {productFeatures.length > 0 && (
            <ul className="flex flex-col gap-2.5 mb-8">
              {productFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[13.5px] text-stone-700 font-light">
                  <span className="text-rose-400 font-normal">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Primary CTA */}
          <button
            onClick={handlePaystack}
            className="w-full py-4 rounded-lg bg-[#b07080] hover:bg-[#9d6070] text-white text-xs font-semibold tracking-[.2em] uppercase transition-colors mb-3"
          >
            Add to Order
          </button>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsApp}
            className="w-full py-3 rounded-lg text-stone-400 hover:text-white hover:bg-[#25d366] text-[12.5px] font-light flex items-center justify-center gap-2 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-stone-400">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp instead
          </button>

        </div>
      </div>
    </div>
  );
}