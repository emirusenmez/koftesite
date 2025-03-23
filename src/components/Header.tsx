'use client';

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
    { name: 'Izgaralar', href: '#grills' },
    { name: 'Kebaplar', href: '#kebabs' },
    { name: 'Dürümler', href: '#wraps' },
    { name: 'Ekmek Arası', href: '#sandwiches' },
    { name: 'Salata ve Çorbalar', href: '#soups' },
    { name: 'Sipariş Ver', href: '#order' },
  ];

  return (
    <header className="fixed md:left-0 top-0 w-full md:w-64 md:h-full bg-black bg-opacity-90 z-50">
      <div className="flex md:flex-col h-full">
        {/* Logo */}
        <div className="p-4 md:p-6 border-r md:border-r-0 md:border-b border-yellow-500/20">
          <button onClick={() => scrollToSection('menu')} className="block">
            <span className="text-xl md:text-2xl font-bold text-yellow-500 font-serif leading-tight block">
              <span className="md:hidden">Mihrimah Sultan Köftecisi</span>
              <span className="hidden md:block">
                Mihrimah
                <br />
                Sultan
                <br />
                Köftecisi
              </span>
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
          className="md:hidden p-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95">
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