
"use client";

import React from "react";
import { Network, Settings, Users, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Features() {
  const features = [
    {
      title: "Learning Spaces",
      description: "Unified digital environments where students and educators interact effortlessly.",
      icon: Network,
      color: "from-emerald-400 to-teal-300",
    },
    {
      title: "Management",
      description: "Powerful administrative tools designed to streamline grading and scheduling.",
      icon: Settings,
      color: "from-blue-500 to-indigo-400",
    },
    {
      title: "Communities",
      description: "Join or create specialized groups centered around your specific passions.",
      icon: Users,
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "Collaboration",
      description: "Accessible features built for diverse teams to communicate and execute projects.",
      icon: Layout,
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <h3 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
            Features built for growth
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradientFrom={feature.color.split(' ')[0]}
                gradientTo={feature.color.split(' ')[1]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
