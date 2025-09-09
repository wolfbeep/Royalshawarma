import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiUber } from "react-icons/si";

export default function DeliveryButtons() {
  const openSkipTheDishes = () => {
    window.open('https://www.skipthedishes.com/royal-shawarma-dixie-road?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_CAN_EN_[RES]_[ENGM]_SC_Mississauga_1002350&utm_campaignid=15365077874&adj_tracker=o6dvmeq&adj_campaign=15365077874&gad_source=1&gad_campaignid=15365077874&gbraid=0AAAAAD3ULIVD6iLxgtaQGv2pqfa_mlSFa&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZk6EGLp4QdJrfzHd1EIWVoFsVsXMuKqSNbJnVNa2RSqo5Rma3ISfIRoCl0MQAvD_BwE', '_blank');
  };

  const openUberEats = () => {
    window.open('https://www.ubereats.com/ca/store/royal-shawarma/Ce4mOG06SuWs8qVPXa2v7w?srsltid=AfmBOooi3-7E31UWAzzKk5t2ge13aoRu6LvrEvEkmzsgOPq00vIOZQyC', '_blank');
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Button
          onClick={openSkipTheDishes}
          className="delivery-btn w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-xl p-0"
          data-testid="button-skip-circle"
        >
          <span className="text-white text-2xl">🏍️</span>
        </Button>
      </motion.div>

      <div className="text-white font-semibold">Order with</div>

      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Button
          onClick={openUberEats}
          className="delivery-btn w-20 h-20 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center shadow-xl p-0"
          data-testid="button-uber-circle"
        >
          <SiUber className="text-white text-2xl" />
        </Button>
      </motion.div>
    </>
  );
}
