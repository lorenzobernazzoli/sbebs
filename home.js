import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [transitioning, setTransitioning] = useState(false);

  const handleSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      window.location.href = "/shop";
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Welcome to My Sneaker World
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mb-10"
      >
        Slide to explore the collection
      </motion.p>
      <motion.div
        className="relative w-64 h-16 bg-gray-700 rounded-full flex items-center p-2"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 200 }}
          onDragEnd={(event, info) => {
            if (info.point.x > 180) handleSlide();
          }}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
        </motion.div>
      </motion.div>
      {transitioning && (
        <motion.img
          src="/sneaker.png"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 5, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
