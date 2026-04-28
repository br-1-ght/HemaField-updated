import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Ticker, Diaspora, Steps, Reviews, Story, Contact, WaFloat } from './components/Sections';
import PopularProducts from './components/PopularProducts';
import Occasions from './components/Occasions';
import ForWho from './components/ForWho';
import Footer from './components/Footer';

export default function App() {
  const [cartCount] = React.useState(0);

  return (
    <div className="min-h-screen bg-cream-pure text-ink font-sans overflow-x-hidden">
      <Navbar cartCount={cartCount} onCartOpen={() => {}} />
      <Hero />
      <Ticker />
      <PopularProducts />
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
