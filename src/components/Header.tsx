"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 dark:bg-black/80 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            SVETA
          </span>
        </Link>
        
        {/* Menu mobile burger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="#fonctionnalites" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="#apropos" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="#phase" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Phase MVP
              </Link>
              <button className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition">
                Démarrer
              </button>
            </div>
          </div>
        )}
        
        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#fonctionnalites" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            Fonctionnalités
          </Link>
          <Link href="#apropos" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            À propos
          </Link>
          <Link href="#phase" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            Phase MVP
          </Link>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition">
            Démarrer
          </button>
        </div>
      </nav>
    </header>
  );
}
