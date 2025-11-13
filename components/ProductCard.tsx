
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${className}`}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);


export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden group border border-transparent hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 truncate">{product.name}</h3>
        <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <StarIcon className="text-yellow-400" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <span>{product.sales.toLocaleString()} Sold</span>
        </div>
        <div className="flex items-baseline justify-end space-x-2 mb-6">
          {product.promoPrice && (
            <span className="text-xl text-gray-500 line-through">${product.price}</span>
          )}
          <span className="text-3xl font-extrabold text-cyan-400">${product.promoPrice ?? product.price}</span>
        </div>
        <a href={product.purchaseUrl} className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg shadow-cyan-500/20">
          Buy Now
        </a>
      </div>
    </div>
  );
};
