import React from 'react';
import { products } from '../constants';
import { ProductCard } from './ProductCard';
import { Countdown } from './Countdown';

export const PromoSection: React.FC = () => {
  const promoProducts = products.filter(p => p.promoPrice);
  const promoEndDate = new Date();
  promoEndDate.setDate(promoEndDate.getDate() + 3); // Promo ends in 3 days

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Limited Time Flash Sale</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't miss out on these exclusive deals! Prices go back up when the timer hits zero.
          </p>
        </div>
        <div className="mb-12">
            <Countdown targetDate={promoEndDate.toISOString()} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promoProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
