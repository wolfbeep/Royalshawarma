import { motion } from "framer-motion";
import Header from "@/components/header";
import { MapPin, Navigation } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Oakville",
    address: "1540 North Service Rd W",
    city: "Oakville, ON L6M 4A1",
    phone: "(905) 469-8366",
    mapUrl: "https://maps.google.com/?q=1540+North+Service+Rd+W,+Oakville,+ON+L6M+4A1"
  },
  {
    id: 2,
    name: "Mississauga",
    address: "3615 Dixie Rd",
    city: "Mississauga, ON L4Y 4H4", 
    phone: "(905) 469-8366",
    mapUrl: "https://maps.google.com/?q=3615+Dixie+Rd,+Mississauga,+ON+L4Y+4H4"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Locations() {
  const openLocation = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Locations
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Find Royal Shawarma near you and enjoy authentic Middle Eastern cuisine
          </motion.p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="px-4 py-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => openLocation(location.mapUrl)}
                data-testid={`location-card-${location.name.toLowerCase().replace(' ', '-')}`}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover-elevate transition-all duration-300 h-72 flex flex-col justify-center items-center text-center">
                  {/* Location Icon */}
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white text-2xl" />
                  </div>
                  
                  {/* Location Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4">
                    {location.name}
                  </h3>
                  
                  {/* Address */}
                  <div className="text-gray-700 mb-4">
                    <p className="font-semibold text-lg">{location.address}</p>
                    <p className="text-gray-600">{location.city}</p>
                  </div>
                  
                  {/* Phone */}
                  <p className="text-red-600 font-medium mb-4">{location.phone}</p>
                  
                  {/* Get Directions Button */}
                  <div className="flex items-center space-x-2 text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    <Navigation className="text-lg" />
                    <span>Get Directions</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Can't Make It To Our Locations?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Order delivery and enjoy Royal Shawarma from the comfort of your home
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button 
              className="delivery-btn flex items-center space-x-4 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-xl font-semibold bg-[#ff8100] transition-colors"
              onClick={() => window.open('https://www.skipthedishes.com/royal-shawarma-dixie-road?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_CAN_EN_[RES]_[ENGM]_SC_Mississauga_1002350&utm_campaignid=15365077874&adj_tracker=o6dvmeq&adj_campaign=15365077874&gad_source=1&gad_campaignid=15365077874&gbraid=0AAAAAD3ULIVD6iLxgtaQGv2pqfa_mlSFa&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZk6EGLp4QdJrfzHd1EIWVoFsVsXMuKqSNbJnVNa2RSqo5Rma3ISfIRoCl0MQAvD_BwE', '_blank')}
              data-testid="button-skip-the-dishes"
            >
              <span>Skip The Dishes</span>
            </button>
            
            <div className="text-white font-medium">OR</div>
            
            <button 
              className="delivery-btn flex items-center space-x-4 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full shadow-xl font-semibold transition-colors"
              onClick={() => window.open('https://www.ubereats.com/ca/store/royal-shawarma/Ce4mOG06SuWs8qVPXa2v7w?srsltid=AfmBOooi3-7E31UWAzzKk5t2ge13aoRu6LvrEvEkmzsgOPq00vIOZQyC', '_blank')}
              data-testid="button-uber-eats"
            >
              <span>Uber Eats</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}