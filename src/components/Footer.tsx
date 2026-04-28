import React from 'react';
import { CONTACT } from '../data/data';

export default function Footer() {
  return (
    <footer className="bg-ink px-5 md:px-20 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div>
          <a href="#" className="font-serif text-[23px] font-semibold text-cream tracking-wide">
            Hema<span className="text-gold">field</span>
          </a>
          <p className="text-sm font-light text-cream/55 leading-relaxed mt-4 mb-6">
            Lagos's most loved premium flower studio. We don't just deliver flowers — we deliver the feelings words can't carry.
          </p>
          <div className="flex gap-2.5">
            {/* Facebook */}
            <a
              href={CONTACT.facebook}
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 text-cream/70 hover:bg-rose hover:border-rose transition-all"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href={CONTACT.instagram}
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 text-cream/70 hover:bg-rose hover:border-rose transition-all"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Popular */}
        <div>
          <h4 className="text-[11px] tracking-[.12em] uppercase text-gold mb-5">Popular</h4>
          <ul className="space-y-2.5 list-none">
            {['Red Roses','Mixed Bouquet','Roses & Chocolates','Premium Box'].map(item => (
              <li key={item}>
                <a href="#popular" className="text-sm font-light text-cream/55 hover:text-cream transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Occasions */}
        <div>
          <h4 className="text-[11px] tracking-[.12em] uppercase text-gold mb-5">Occasions</h4>
          <ul className="space-y-2.5 list-none">
            {['Love & Connection','Apology','Self-Love','Care & Support','All Occasions'].map(item => (
              <li key={item}>
                <a href="#occasions" className="text-sm font-light text-cream/55 hover:text-cream transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery */}
        <div>
          <h4 className="text-[11px] tracking-[.12em] uppercase text-gold mb-5">Delivery Zones</h4>
          <ul className="space-y-2.5 list-none">
            {['Lagos Island','Ikoyi & VI','Lekki & Ajah','Ikeja & Mainland','International Orders'].map(item => (
              <li key={item}>
                <a href="#contact" className="text-sm font-light text-cream/55 hover:text-cream transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cream/35">© 2025 Hemafield Flowers Ltd. All rights reserved · Ikoyi, Lagos, Nigeria.</p>
        <div className="flex gap-2">
          {['Paystack Secured','Same-Day Delivery','100% Fresh Flowers'].map(b => (
            <span key={b} className="text-[10px] tracking-wide border border-cream/12 text-cream/35 px-3 py-1 rounded-sm">{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
