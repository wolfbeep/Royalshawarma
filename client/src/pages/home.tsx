import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import MenuCard from "@/components/menu-card";
import DeliveryButtons from "@/components/delivery-buttons";
import { Button } from "@/components/ui/button";
import { Utensils, Clover, Phone, Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { SiUber, SiTiktok } from "react-icons/si";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Chicken Shawarma with Greek Salad",
    description: "A fresh and flavorful fusion our tender, spiced chicken shawarma is paired with a vibrant Greek salad made with crisp lettuce, juicy tomatoes, cucumbers, onions, and creamy feta. Finished with our signature garlic and hot sauces, this dish offers the perfect balance of savory and refreshing in every bite.",
    price: "$18.99",
    image: "/chicken-greek-salad.webp"
  },
  {
    id: "2",
    name: "Chicken Shawarma with Rice",
    description: "This classic shawarma dish is a local favorite, known for keeping customers coming back for more. Tender, perfectly seasoned chicken is served over a bed of fragrant rice, then topped with premium garlic sauce and a kick of hot sauce for the perfect finish.",
    price: "$15.99",
    image: "/chicken-rice.png"
  },
  {
    id: "3",
    name: "Chicken Shawarma with French Fries", 
    description: "A mouthwatering combo that never disappoints our perfectly seasoned chicken shawarma is served with a generous side of crispy, golden French fries. Juicy, tender chicken layered with bold spices meets fries fried to perfection, all topped with our signature garlic and hot sauces. A local favorite that delivers flavor in every bite.",
    price: "$17.99",
    image: "/chicken-french-fries.jpg"
  },
  {
    id: "4",
    name: "Falafel Plate with Greek Salad and Rice",
    description: "A wholesome and satisfying vegetarian favorite our falafel plate features crispy, golden chickpea patties served with fluffy rice and a refreshing Greek salad. Paired with creamy garlic sauce and optional hot sauce, this dish delivers bold flavor and fresh ingredients in every bite.",
    price: "$15.99", 
    image: "/falafel-greek-salad.png"
  },
  {
    id: "5",
    name: "Chicken Shawarma Wrap",
    description: "Our Chicken Shawarma Wrap is a handheld classic packed with flavor. Juicy, seasoned chicken is wrapped in warm pita bread and loaded with crisp lettuce, fresh tomatoes, onions, pickles, and tangy turnips. Finished with our signature garlic and hot sauces, it's the perfect grab-and-go meal that hits every craving.",
    price: "$12.99",
    image: "/chicken-shawarma-wrap.jpg"
  },
  {
    id: "6",
    name: "Hummus",
    description: "Creamy traditional hummus made from chickpeas, tahini, and olive oil, drizzled with olive oil and served with warm pita bread. A perfect appetizer or side dish that brings authentic Middle Eastern flavors to your table.",
    price: "$7.99",
    image: "/hummus.png"
  },
  {
    id: "7",
    name: "Greek Salad",
    description: "Fresh mixed greens with juicy tomatoes, crisp cucumbers, red onions, and creamy feta cheese, drizzled with olive oil and herbs. A refreshing and healthy choice that perfectly complements any main dish.",
    price: "$9.49",
    image: "/greek-salad.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through menu item images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex >= menuItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Safety check to ensure currentImageIndex is valid
  const safeImageIndex = currentImageIndex >= menuItems.length ? 0 : currentImageIndex;

  return (
    <div className="min-h-screen bg-royal-red bg-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:py-12 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:mobile-hero-title lg:text-6xl font-bold text-white mb-4 sm:mb-6 mobile-safe-spacing mobile-text-wrap mobile-readable-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Authentic Middle Eastern
            <span className="block text-yellow-300">Shawarma Experience</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:mobile-hero-subtitle text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-safe-spacing mobile-text-wrap mobile-readable-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Savor the rich flavors of traditional shawarma, prepared with the finest ingredients and time-honored recipes.
          </motion.p>
          
          {/* Delivery Platform Buttons */}
          <motion.div 
            className="flex justify-center items-center space-x-8 sm:mobile-delivery-section mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <DeliveryButtons />
          </motion.div>

          {/* Featured Dish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={menuItems[safeImageIndex].image} 
                alt={menuItems[safeImageIndex].name}
                className="rounded-full w-72 h-72 sm:mobile-featured-image lg:w-96 lg:h-96 mx-auto object-cover shadow-2xl border-8 border-white/20"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: [-5, 0, -5], 
                  scale: 1,
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  ]
                }}
                transition={{ 
                  opacity: { duration: 1.5 },
                  scale: { duration: 1.5 },
                  y: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  },
                  boxShadow: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20, 
                  scale: 0.9,
                  transition: { duration: 1.5, ease: "easeInOut" }
                }}
              />
            </AnimatePresence>
            
            {/* Menu item name overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`name-${currentImageIndex}`}
                className="absolute -bottom-8 left-0 right-0 flex justify-center mobile-menu-overlay"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.5 }}
                exit={{ 
                  opacity: 0, 
                  y: -10,
                  transition: { duration: 1.0, ease: "easeInOut" }
                }}
              >
                <span className="inline-block bg-white/90 text-red-600 px-3 sm:px-4 py-2 rounded-full text-sm font-semibold shadow-lg mobile-text-wrap text-center max-w-[18rem]">
                  {menuItems[safeImageIndex].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 py-12 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 mobile-safe-spacing"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:mobile-menu-title lg:text-5xl font-bold text-white mb-4 mobile-text-wrap mobile-readable-text">Our Signature Menu</h2>
            <p className="text-xl sm:mobile-menu-subtitle text-white/90 mobile-text-wrap mobile-readable-text">Handcrafted with passion, served with pride</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="px-4 py-8 sm:mobile-footer lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center mobile-safe-spacing">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="logo-text text-white text-xl">ROYAL SHAWARMA</span>
          </div>
          
          <p className="text-white/80 mb-6">Authentic Middle Eastern cuisine crafted with love and tradition</p>
          
          <div className="flex justify-center space-x-6 sm:mobile-social-icons mb-6">
            <a 
              href="#" 
              className="text-white hover:text-yellow-300 transition-colors"
              data-testid="link-facebook"
            >
              <Facebook className="text-xl" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-yellow-300 transition-colors"
              data-testid="link-instagram"
            >
              <Instagram className="text-xl" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-yellow-300 transition-colors"
              data-testid="link-twitter"
            >
              <Twitter className="text-xl" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-yellow-300 transition-colors"
              data-testid="link-tiktok"
            >
              <SiTiktok className="text-xl" />
            </a>
          </div>
          
          <p className="text-white/60 text-sm">© 2024 Royal Shawarma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
