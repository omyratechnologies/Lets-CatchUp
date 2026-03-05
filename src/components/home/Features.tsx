
"use client";

import React from "react";
import { Network, Settings, Users, Layout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      color: "text-emerald-400",
    },
    {
      title: "Seamless Academic Management",
      description: "Powerful administrative tools designed to streamline grading, scheduling, and student progress tracking with ease.",
      icon: Settings,
      color: "text-primary",
    },
    {
      title: "Interest-Based Communities",
      description: "Join or create specialized groups centered around your specific passions, career goals, and academic interests.",
      icon: Users,
      color: "text-pink-400",
    },
    {
      title: "Inclusive Collaboration Tools",
      description: "Accessible and intuitive features built for diverse teams to collaborate, communicate, and execute projects seamlessly.",
      icon: Layout,
      color: "text-accent",
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
          className="text-center max-w-4xl mx-auto mb-24 space-y-6"
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
          className="grid md:grid-cols-2 gap-12"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              <div className="glass-card p-10 flex flex-col h-full border-white/5 group-hover:bg-white/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                  <feature.icon className={`w-8 h-8 ${feature.color} glow-icon`} />
                </div>

                <div className="space-y-4 flex-1">
                  <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group/btn hover:opacity-80 transition-opacity">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
