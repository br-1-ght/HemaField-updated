import React, { useState, useEffect } from 'react';
import { CONTACT } from '../data/data';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#popular', label: 'Most Popular' },
    { href: '#occasions', label: 'Occasions' },
    { href: '#for-who', label: 'Shop by Feeling' },
    { href: '#diaspora', label: 'Send from Abroad' },
    { href: '#story', label: 'Our Story' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Announce bar */}
      <div className="bg-forest text-cream text-center py-2.5 px-5 text-[12px] tracking-[.07em]">
        🌸 Same-day delivery · Lagos Island, Lekki, VI &amp; Ikoyi &nbsp;·&nbsp; Free message card with every order &nbsp;·&nbsp;{' '}
        <a href="#diaspora" className="text-rose-light border-b border-rose-light pb-px">Sending from abroad? We deliver for you →</a>
      </div>

      {/* Nav */}
      <nav className={`sticky top-0 z-[200] backdrop-blur-md border-b border-black/5 px-12 flex items-center justify-between h-[70px] transition-all duration-300 ${
        scrolled ? 'bg-forest/97 shadow-md' : 'bg-cream/96'
      }`}>
        <a href="#" className={`font-serif text-[23px] font-semibold tracking-wide ${scrolled ? 'text-cream' : 'text-forest'}`}>
          Hema<span className="text-gold">field</span>
        </a>

        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`text-[12px] font-light tracking-[.08em] uppercase relative transition-colors hover:text-rose ${
                scrolled ? 'text-cream/65 hover:text-cream' : 'text-ink'
              }`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3.5">
          <a
            href={`https://wa.me/${CONTACT.waNumber}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex text-[#25d366] text-sm font-medium items-center gap-1.5"
          >
            💬 WhatsApp Us
          </a>
          <button
            onClick={onCartOpen}
            className={`bg-transparent border-none cursor-pointer text-xl relative p-1 transition-colors ${scrolled ? 'text-cream' : 'text-ink'}`}
            aria-label="Cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <a href="#popular" className="bg-rose text-white border-none px-5 py-2.5 text-[11px] font-medium tracking-widest uppercase rounded-sm cursor-pointer font-sans transition-colors hover:bg-forest hidden sm:block">
            Send Flowers
          </a>
          <button
            className={`flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1`}
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} className={`w-[22px] h-[1.5px] block transition-all ${scrolled ? 'bg-cream' : 'bg-ink'}`} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-forest z-[500] flex flex-col items-center justify-center gap-7">
          <button
            className="absolute top-6 right-6 bg-transparent border-none text-cream text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >✕</button>
          {navLinks.map(l => (
            <a
              key={l.href} href={l.href}
              className="font-serif text-[34px] font-light text-cream tracking-wide hover:text-rose-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={`https://wa.me/${CONTACT.waNumber}`} target="_blank" rel="noopener noreferrer"
            className="text-[#25d366] text-lg">💬 WhatsApp Us</a>
        </div>
      )}
    </>
  );
}
