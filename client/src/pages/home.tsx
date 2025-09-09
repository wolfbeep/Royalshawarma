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
    name: "Chicken Shawarma Plate",
    description: "Tender marinated chicken shawarma served on a plate with rice, fresh vegetables, and our signature sauces.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "2", 
    name: "Large Chicken Shawarma Pita",
    description: "Generous serving of tender chicken shawarma with fresh vegetables, pickles, and garlic sauce in warm pita bread.",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "3",
    name: "Chicken Shawarma with Greek Salad", 
    description: "Savory chicken shawarma paired with fresh Greek salad featuring tomatoes, cucumbers, olives, and feta cheese.",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "4",
    name: "French Fries",
    description: "Golden crispy French fries, perfectly seasoned and served hot as the perfect side to any meal.",
    price: "$5.99", 
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "5",
    name: "Greek Salad",
    description: "Fresh mixed greens with tomatoes, cucumbers, red onions, olives, and feta cheese drizzled with olive oil.",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "6",
    name: "Chicken Souvlaki Half Rice Half Salad",
    description: "Grilled chicken souvlaki served with a combination of seasoned rice and fresh Mediterranean salad.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "7",
    name: "Hummus",
    description: "Creamy traditional hummus made from chickpeas, tahini, and olive oil, served with warm pita bread.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1541832676-9b763b564c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "8",
    name: "Baba Ganoush",
    description: "Smoky roasted eggplant dip blended with tahini, garlic, and lemon juice, served with fresh pita bread.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "9",
    name: "Large Beef Pita",
    description: "Generous portion of seasoned beef shawarma with fresh vegetables and our special sauce in warm pita bread.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "10",
    name: "Large Falafel Pita",
    description: "Crispy homemade falafel with fresh vegetables, lettuce, tomatoes, and creamy tahini sauce in pita bread.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
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
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-royal-red bg-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-4 py-12 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Authentic Middle Eastern
            <span className="block text-yellow-300">Shawarma Experience</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Savor the rich flavors of traditional shawarma, prepared with the finest ingredients and time-honored recipes.
          </motion.p>
          
          {/* Delivery Platform Buttons */}
          <motion.div 
            className="flex justify-center items-center space-x-8 mb-12"
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
                src={menuItems[currentImageIndex].image} 
                alt={menuItems[currentImageIndex].name}
                className="rounded-full w-72 h-72 lg:w-96 lg:h-96 mx-auto object-cover shadow-2xl border-8 border-white/20"
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
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.5 }}
                exit={{ 
                  opacity: 0, 
                  y: -10,
                  transition: { duration: 1.0, ease: "easeInOut" }
                }}
              >
                <span className="bg-white/90 text-red-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {menuItems[currentImageIndex].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Signature Menu</h2>
            <p className="text-xl text-white/90">Handcrafted with passion, served with pride</p>
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

      {/* Call to Action Section */}
      <section id="order" className="px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Order?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Choose your preferred delivery platform and enjoy Royal Shawarma at home
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="delivery-btn flex items-center space-x-4 hover:bg-orange-600 hover:scale-110 text-white px-12 py-6 text-lg rounded-full shadow-xl font-semibold bg-[#ff8100] transition-all duration-300"
              onClick={() => window.open('https://www.skipthedishes.com/royal-shawarma-dixie-road?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_CAN_EN_[RES]_[ENGM]_SC_Mississauga_1002350&utm_campaignid=15365077874&adj_tracker=o6dvmeq&adj_campaign=15365077874&gad_source=1&gad_campaignid=15365077874&gbraid=0AAAAAD3ULIVD6iLxgtaQGv2pqfa_mlSFa&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZk6EGLp4QdJrfzHd1EIWVoFsVsXMuKqSNbJnVNa2RSqo5Rma3ISfIRoCl0MQAvD_BwE', '_blank')}
              data-testid="button-skip-the-dishes"
            >
              <span>Skip The Dishes</span>
            </Button>
            
            <div className="flex items-center space-x-3 text-white">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ChevronLeft className="text-2xl" />
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ChevronRight className="text-2xl" />
              </motion.div>
            </div>
            
            <Button 
              size="lg"
              className="delivery-btn flex items-center space-x-4 bg-black hover:bg-gray-800 hover:scale-110 text-white px-12 py-6 text-lg rounded-full shadow-xl font-semibold transition-all duration-300"
              onClick={() => window.open('https://www.ubereats.com/ca/store/royal-shawarma/Ce4mOG06SuWs8qVPXa2v7w?srsltid=AfmBOooi3-7E31UWAzzKk5t2ge13aoRu6LvrEvEkmzsgOPq00vIOZQyC', '_blank')}
              data-testid="button-uber-eats"
            >
              <SiUber className="text-2xl" />
              <span>Uber Eats</span>
            </Button>
          </motion.div>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-white/80">
              Or call us directly at{" "}
              <a 
                href="tel:+19054698366" 
                className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
                data-testid="link-phone"
              >
                905 469 8366
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="logo-text text-white text-xl">ROYAL SHAWARMA</span>
          </div>
          
          <p className="text-white/80 mb-6">Authentic Middle Eastern cuisine crafted with love and tradition</p>
          
          <div className="flex justify-center space-x-6 mb-6">
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
