import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const shoes = [
  { id: 1, name: "Air Max 90", image: "/airmax90.png", price: "$120" },
  { id: 2, name: "Jordan 1", image: "/jordan1.png", price: "$150" },
  { id: 3, name: "Yeezy 350", image: "/yeezy350.png", price: "$200" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Sneaker Store
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {shoes.map((shoe) => (
          <motion.div
            key={shoe.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-gray-800 p-4 rounded-2xl">
              <CardContent className="flex flex-col items-center">
                <img src={shoe.image} alt={shoe.name} className="w-40 h-40 object-cover" />
                <h2 className="mt-4 text-xl font-semibold">{shoe.name}</h2>
                <p className="text-gray-400">{shoe.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
