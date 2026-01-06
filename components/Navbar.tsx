import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { TiDBLogo } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: 'https://www.pingcap.com/tidb/' },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-brand-border py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <a href="/" className="cursor-pointer">
            <TiDBLogo />
          </a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-white hover:text-brand-red transition-colors">
            Sign In
          </a>
          <a
            href="#"
            className="group flex items-center bg-white text-black px-5 py-2.5 rounded text-sm font-bold hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            Start for Free
            <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-card border-b border-brand-border p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-lg font-medium">
              {link.name}
            </a>
          ))}
          <div className="h-px bg-brand-border my-2" />
          <a href="#" className="text-white text-lg font-medium">
            Sign In
          </a>
          <a href="#" className="bg-brand-red text-white py-3 rounded text-center font-bold">
            Start for Free
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;