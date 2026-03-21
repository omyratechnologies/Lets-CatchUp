
"use client";

import React from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
}
