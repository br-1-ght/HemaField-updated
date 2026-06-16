import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Ticker, Diaspora, Steps, Reviews, Story, Contact, WaFloat } from './components/Sections';
import PopularProducts from './components/PopularProducts';
import Occasions from './components/Occasions';
import ForWho from './components/ForWho';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';

export default function App() {
  const [cartCount] = React.useState(0);
  const [showAllProducts, setShowAllProducts] = React.useState(false);

  // Listen for hash change to #all-products
  React.useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#all-products') {
        setShowAllProducts(true);
        window.scrollTo(0, 0);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleBack = () => {
    setShowAllProducts(false);
    window.location.hash = '';
    setTimeout(() => {
      document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (showAllProducts) {
    return <AllProducts onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-cream-pure text-ink font-sans overflow-x-hidden">
      <Navbar cartCount={cartCount} onCartOpen={() => {}} />
      <Hero />
      <Ticker />
      <PopularProducts onShowAll={() => { setShowAllProducts(true); window.scrollTo(0, 0); }} />
      <Occasions />
      <ForWho />
      <Diaspora />
      <Steps />
      <Reviews />
      <Story />
      <Contact />
      <Footer />
      <WaFloat />
    </div>
  );
}
