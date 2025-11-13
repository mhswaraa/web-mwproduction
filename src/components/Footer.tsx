import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <div className="mb-4">
          <div className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            DigiFutura
          </div>
        </div>
        <p className="mb-4">Crafting the future of digital assets.</p>
        <p>&copy; {new Date().getFullYear()} DigiFutura. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
