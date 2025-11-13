
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          DigiFutura
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Promos</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Products</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
        </nav>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
};
