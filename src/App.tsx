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
    <>
      <Header />
      <main>
        <HeroSection />
        <PromoSection />
        <ProductList />
        <WhyUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
