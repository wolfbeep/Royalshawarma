import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, Clover, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 px-4 py-6 lg:px-8">
      <motion.nav 
        className="flex items-center justify-between max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Utensils className="text-white text-2xl mr-2" />
            <span className="logo-text text-white text-2xl lg:text-3xl">SHAWARMA</span>
          </div>
          <div className="flex items-center">
            <span className="logo-text text-white text-2xl lg:text-3xl">ROYAL</span>
            <Clover className="text-white text-xl ml-2" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-home"
          >
            HOME
          </a>
          <button 
            onClick={scrollToMenu}
            className="nav-item text-white font-medium hover:text-orange-200 transition-colors"
            data-testid="nav-menu"
          >
            OUR MENU
          </button>
          <a 
            href="#" 
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
              href="#" 
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-nav-home"
            >
              HOME
            </a>
            <button 
              onClick={scrollToMenu}
              className="block text-white font-medium hover:text-orange-200 transition-colors py-2 w-full text-left"
              data-testid="mobile-nav-menu"
            >
              OUR MENU
            </button>
            <a 
              href="#" 
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
