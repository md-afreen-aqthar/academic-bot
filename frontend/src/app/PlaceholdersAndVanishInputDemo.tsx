"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input"; // Assuming this component is in the ui folder

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What do you want to know?",
    "What do you want to do?",
    "what is the time table for collage",
    
  ];

  const [showText, setShowText] = useState(false);

  const handleChange = () => {
  };

  const onSubmit = () => {
    setShowText(true);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-800 text-white">
      <h2 className="mb-10 text-3xl text-center">
        Ask KL Events Bot Anything
      </h2>

      <p className="text-white px-10 mb-10">
        {showText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Hey there, future KLian! 👋<br />
            Welcome to the wild world of KL University! We've got classes,
            clubs, and enough excitement to make your head spin. 😉<br />
            Need help finding a specific club or event? Shoot me a message!
          </motion.p>
        )}
      </p>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
