import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const goToMenu = () => {
    // If we're already on home page, scroll to menu
    if (window.location.pathname === '/') {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with menu anchor
      window.location.href = '/#menu';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 px-4 py-6 lg:px-8">
      <motion.nav 
        className="flex items-center justify-between max-w-7xl mx-auto text-[13px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3" data-testid="logo-home">
          <span className="logo-text text-white text-2xl lg:text-3xl hover:text-orange-200 transition-colors">ROYAL SHAWARMA</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-home"
          >
            HOME
          </a>
          <button 
            onClick={goToMenu}
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-menu"
          >
            OUR MENU
          </button>
          <a 
            href="/locations" 
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-locations"
          >
            LOCATIONS
          </a>
          <a 
            href="#" 
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-offers"
          >
            OFFERS
          </a>
        </div>

        {/* Order Button */}
        <Button 
          className="hidden md:block bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg"
          data-testid="button-order-now"
        >
          ORDER NOW
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-red-600/95 backdrop-blur-sm border-t border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            <a 
              href="/" 
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-nav-home"
            >
              HOME
            </a>
            <button 
              onClick={goToMenu}
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2 w-full text-left"
              data-testid="mobile-nav-menu"
            >
              OUR MENU
            </button>
            <a 
              href="/locations" 
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-nav-locations"
            >
              LOCATIONS
            </a>
            <a 
              href="#" 
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-nav-offers"
            >
              OFFERS
            </a>
            <Button 
              className="w-full bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-button-order-now"
            >
              ORDER NOW
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
