'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Menü', href: '#menu' },
    { name: 'Izgaralar', href: '#grills' },
    { name: 'Kebaplar', href: '#kebabs' },
    { name: 'Çorbalar', href: '#soups' },
    { name: 'Ekmek Arası', href: '#sandwiches' },
    { name: 'Paket Servis', href: '#delivery' },
  ];

  return (
    <header className="fixed top-0 left-0 h-full bg-black bg-opacity-90 z-50 w-64">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-yellow-500/20">
          <button onClick={() => scrollToSection('menu')} className="block">
            <span className="text-2xl font-bold text-yellow-500 font-serif leading-tight block">
              Mihrimah
              <br />
              Sultan
              <br />
              Köftecisi
            </span>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-col p-6 space-y-6 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.substring(1))}
              className="text-white hover:text-yellow-500 transition-colors text-lg font-medium text-left"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute top-6 right-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black bg-opacity-95">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block text-white hover:text-yellow-500 transition-colors text-lg w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 