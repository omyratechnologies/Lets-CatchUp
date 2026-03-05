"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Target, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Onboarding() {
  const steps = [
    {
      title: "Sign up for free",
      description: "Get started instantly with our easy registration process. No credit card required to explore.",
      icon: UserPlus,
      color: "from-teal-400 to-cyan-300",
      glow: "shadow-teal-500/20",
      delay: 0.1,
    },
    {
      title: "Set your learning goals",
      description: "Tell us what you want to achieve. Our AI tailors your dashboard to your specific career path.",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      glow: "shadow-indigo-500/20",
      delay: 0.2,
    },
    {
      title: "Collaborate and connect",
      description: "Join communities, work on projects with peers, and start your journey towards technical mastery.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/20",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-black">
            The Roadmap
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Your path to <span className="text-gradient">success</span></h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            A simplified three-step journey designed to take you from curious explorer to technical master.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Progress Path (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-1/2 overflow-hidden px-20">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 opacity-20"
            />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6, type: "spring" }}
                className="group relative"
              >
                {/* Connection Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white hidden lg:block z-20">
                  <div className={`absolute inset-0 rounded-full animate-ping bg-gradient-to-r ${step.color}`} />
                </div>

                {/* Card Container - Using a "Rounded Tab" style instead of typical card */}
                <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] h-full flex flex-col items-center text-center space-y-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl ${step.glow}`}>
                  
                  {/* Step Number Circle */}
                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-black shadow-lg rotate-3 group-hover:rotate-6 transition-transform`}>
                    0{idx + 1}
                  </div>

                  {/* Icon with Floating Animation */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className="p-6 rounded-full bg-white/5 border border-white/10 relative"
                  >
                    <step.icon className="w-10 h-10 text-white opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-auto">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all text-white">
                      <span>Learn how</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>

                  {/* Top Glossy Lip */}
                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent" />
            <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground font-black animate-pulse">
              Scroll to explore features
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
