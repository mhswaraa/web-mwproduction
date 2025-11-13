import React from 'react';
import { products } from '../constants';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = () => {
  const regularProducts = products.filter(p => !p.promoPrice);

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Digital Collection</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Browse our entire library of premium digital assets, crafted with passion and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
