
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PromoSection } from './components/PromoSection';
import { ProductList } from './components/ProductList';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PromoSection />
        <ProductList />
        <WhyUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
