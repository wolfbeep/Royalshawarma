import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="menu-card bg-white rounded-2xl overflow-hidden shadow-xl border-0">
        <div className="relative overflow-hidden">
          <img 
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            data-testid={`img-menu-item-${item.id}`}
          />
        </div>
        
        <CardContent className="p-6">
          <h3 
            className="text-xl font-bold text-gray-800 mb-2"
            data-testid={`text-menu-name-${item.id}`}
          >
            {item.name}
          </h3>
          
          <p 
            className="text-gray-600 mb-4 text-sm leading-relaxed"
            data-testid={`text-menu-description-${item.id}`}
          >
            {item.description}
          </p>
          
          <div className="text-center">
            <span 
              className="text-2xl font-bold text-red-600"
              data-testid={`text-menu-price-${item.id}`}
            >
              {item.price}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
