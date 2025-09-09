import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiUber } from "react-icons/si";

export default function DeliveryButtons() {
  const openSkipTheDishes = () => {
    window.open('https://www.skipthedishes.com', '_blank');
  };

  const openUberEats = () => {
    window.open('https://www.ubereats.com', '_blank');
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
          className="delivery-btn w-20 h-20 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-xl p-0"
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
