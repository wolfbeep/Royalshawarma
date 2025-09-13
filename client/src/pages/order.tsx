import { motion } from "framer-motion";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { SiUber } from "react-icons/si";

export default function Order() {
  return (
    <div className="min-h-screen bg-royal-red bg-pattern">
      <Header />
      
      {/* Order Section */}
      <section className="px-4 py-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Order Now
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Choose your location and preferred delivery platform to enjoy Royal Shawarma at home
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Oakville Section */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Oakville</h2>
              <p className="text-white/90 mb-6">1540 North Service Rd W</p>
              
              <div className="flex flex-col space-y-4">
                <Button 
                  size="lg"
                  className="delivery-btn flex items-center justify-center space-x-4 hover:bg-orange-600 hover:scale-105 text-white px-8 py-4 text-base rounded-full shadow-xl font-semibold bg-[#ff8100] transition-all duration-300 w-full"
                  onClick={() => window.open('https://www.skipthedishes.com/royal-shawarma-oakville', '_blank')}
                  data-testid="button-skip-oakville"
                >
                  <span>Skip The Dishes</span>
                </Button>
                
                <Button 
                  size="lg"
                  className="delivery-btn flex items-center justify-center space-x-4 bg-black hover:bg-gray-800 hover:scale-105 text-white px-8 py-4 text-base rounded-full shadow-xl font-semibold transition-all duration-300 w-full"
                  onClick={() => window.open('https://www.ubereats.com/ca/store/royal-shawarma-oakville', '_blank')}
                  data-testid="button-uber-oakville"
                >
                  <SiUber className="text-xl" />
                  <span>Uber Eats</span>
                </Button>
              </div>
              
              <p className="text-white/80 mt-6">
                Call us: <a href="tel:+19054698366" className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors">905 469 8366</a> ext. 1
              </p>
            </motion.div>

            {/* Mississauga Section */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Mississauga</h2>
              <p className="text-white/90 mb-6">3615 Dixie Rd</p>
              
              <div className="flex flex-col space-y-4">
                <Button 
                  size="lg"
                  className="delivery-btn flex items-center justify-center space-x-4 hover:bg-orange-600 hover:scale-105 text-white px-8 py-4 text-base rounded-full shadow-xl font-semibold bg-[#ff8100] transition-all duration-300 w-full"
                  onClick={() => window.open('https://www.skipthedishes.com/royal-shawarma-dixie-road?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_CAN_EN_[RES]_[ENGM]_SC_Mississauga_1002350&utm_campaignid=15365077874&adj_tracker=o6dvmeq&adj_campaign=15365077874&gad_source=1&gad_campaignid=15365077874&gbraid=0AAAAAD3ULIVD6iLxgtaQGv2pqfa_mlSFa&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZk6EGLp4QdJrfzHd1EIWVoFsVsXMuKqSNbJnVNa2RSqo5Rma3ISfIRoCl0MQAvD_BwE', '_blank')}
                  data-testid="button-skip-mississauga"
                >
                  <span>Skip The Dishes</span>
                </Button>
                
                <Button 
                  size="lg"
                  className="delivery-btn flex items-center justify-center space-x-4 bg-black hover:bg-gray-800 hover:scale-105 text-white px-8 py-4 text-base rounded-full shadow-xl font-semibold transition-all duration-300 w-full"
                  onClick={() => window.open('https://www.ubereats.com/ca/store/royal-shawarma/Ce4mOG06SuWs8qVPXa2v7w?srsltid=AfmBOooi3-7E31UWAzzKk5t2ge13aoRu6LvrEvEkmzsgOPq00vIOZQyC', '_blank')}
                  data-testid="button-uber-mississauga"
                >
                  <SiUber className="text-xl" />
                  <span>Uber Eats</span>
                </Button>
              </div>
              
              <p className="text-white/80 mt-6">
                Call us: <a href="tel:+19054698366" className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors">905 469 8366</a> ext. 2
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="logo-text text-white text-xl">ROYAL SHAWARMA</span>
          </div>
          
          <p className="text-white/80 mb-6">Authentic Middle Eastern cuisine crafted with love and tradition</p>
          
          <p className="text-white/60 text-sm">© 2024 Royal Shawarma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}