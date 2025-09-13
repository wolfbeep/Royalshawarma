import { motion } from "framer-motion";
import skipLogo from "@assets/skip_1757787826712.png";
import uberEatsLogo from "@assets/uber_eats_green_1757787827950.png";

export default function DeliveryButtons() {
  const openSkipTheDishes = () => {
    window.open('https://www.skipthedishes.com/royal-shawarma-dixie-road?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_CAN_EN_[RES]_[ENGM]_SC_Mississauga_1002350&utm_campaignid=15365077874&adj_tracker=o6dvmeq&adj_campaign=15365077874&gad_source=1&gad_campaignid=15365077874&gbraid=0AAAAAD3ULIVD6iLxgtaQGv2pqfa_mlSFa&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZk6EGLp4QdJrfzHd1EIWVoFsVsXMuKqSNbJnVNa2RSqo5Rma3ISfIRoCl0MQAvD_BwE', '_blank');
  };

  const openUberEats = () => {
    window.open('https://www.ubereats.com/ca/store/royal-shawarma-3615-dixie-rd/yqiKhlh7XP-uP7qBoXHLHw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjMxNjklMjBTYWRkbGV3b3J0aCUyMENyZXMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI0ZWM3Y2IxNC1jZmQwLWI0NzUtZjZlZS02ODAzZjIwN2ZjYjklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQzLjQyMTcwNCUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS43NzAxMTUlN0Q%3D&sc=SEARCH_SUGGESTION', '_blank');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-white font-semibold text-lg">ORDER WITH</div>
      
      <div className="flex items-center space-x-8">
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src={skipLogo}
            alt="Skip The Dishes"
            onClick={openSkipTheDishes}
            className="w-20 h-20 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            data-testid="button-skip-logo"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src={uberEatsLogo}
            alt="Uber Eats"
            onClick={openUberEats}
            className="w-20 h-20 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            data-testid="button-uber-logo"
          />
        </motion.div>
      </div>
    </div>
  );
}
