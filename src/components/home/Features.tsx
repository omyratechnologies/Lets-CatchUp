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
      staggerChildren: 0.2
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
      title: "Connected Learning Spaces",
      description: "Unified digital environments where students and educators interact effortlessly to build the future of education.",
      icon: Network,
      color: "from-emerald-400 to-teal-300",
    },
    {
      title: "Seamless Academic Management",
      description: "Powerful administrative tools designed to streamline grading, scheduling, and student progress tracking with ease.",
      icon: Settings,
      color: "from-blue-500 to-indigo-400",
    },
    {
      title: "Interest-Based Communities",
      description: "Join or create specialized groups centered around your specific passions, career goals, and academic interests.",
      icon: Users,
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "Inclusive Collaboration Tools",
      description: "Accessible and intuitive features built for diverse teams to collaborate, communicate, and execute projects seamlessly.",
      icon: Layout,
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32 space-y-6"
        >
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Core Capabilities</h2>
          <h3 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
            Features designed to connect, <br className="hidden md:block" /> collaborate, and grow
          </h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your learning ecosystem in one professional dashboard.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24"
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
