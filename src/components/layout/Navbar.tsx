
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from './SearchBar';
import { NavbarActions } from './NavbarActions';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about-us' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-10 font-serif text-2xl font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            Harvest
          </Link>
          
          <NavLinks 
            links={navLinks} 
            className="hidden md:flex items-center space-x-1"
            includeAuth={true}
          />
          
          <NavbarActions 
            cartCount={cartCount}
            isSearchOpen={isSearchOpen}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleSearch={toggleSearch}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
        
        <SearchBar isOpen={isSearchOpen} />
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} links={navLinks} />
    </header>
  );
}
