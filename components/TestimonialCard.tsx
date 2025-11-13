
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const QuoteIcon = () => (
    <svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352,4C4.456,4,0,8.456,0,13.352c0,2.128,0.768,4.096,2.048,5.632L2.048,22.4l5.12-2.56 c0.96,0.256,1.92,0.384,2.944,0.384c4.896,0,9.352-4.456,9.352-9.352S14.248,4,9.352,4z" />
        <path d="M22.648,4c-4.896,0-9.352,4.456-9.352,9.352c0,2.128,0.768,4.096,2.048,5.632L15.36,22.4l5.12-2.56 c0.96,0.256,1.92,0.384,2.944,0.384c4.896,0,9.352-4.456,9.352-9.352S27.544,4,22.648,4z" />
    </svg>
);


export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col h-full">
        <div className="relative mb-4">
            <QuoteIcon />
        </div>
      <p className="text-gray-300 flex-grow mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500" />
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};
