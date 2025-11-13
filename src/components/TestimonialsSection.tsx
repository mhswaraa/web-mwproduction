import React from 'react';
import { testimonials } from '../constants';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're proud to have earned the trust of creators and developers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
