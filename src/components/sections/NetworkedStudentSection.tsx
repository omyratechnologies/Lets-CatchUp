
"use client";

import React from "react";
import { motion } from "framer-motion";
import { School, Network, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "School-within-a-School",
    description: "Private spaces for clubs, peer-support, and mentorship.",
    icon: School,
    color: "text-emerald-400",
    glow: "border-emerald-400/30",
  },
  {
    title: "Inter-School Networks",
    description: "A regional/global \"digital hall pass\" to connect with students from other institutions.",
    icon: Network,
    color: "text-accent",
    glow: "border-accent/30",
  },
  {
    title: "Gen Z Features",
    description: "Modern, intuitive interfaces that feel native to students, focusing on genuine interest groups rather than public social validation.",
    icon: Sparkles,
    color: "text-blue-400",
    glow: "border-blue-400/30",
  },
];

export function NetworkedStudentSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-t from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
            The <span className="text-gradient">&quot;Networked Student&quot;</span> (Private Social Space)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-emerald-400/20 via-accent/20 to-blue-400/20 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              {/* Chevron-style Icon Container */}
              <div className="flex justify-center md:justify-start">
                <div className={cn(
                  "relative w-24 h-24 flex items-center justify-center bg-[#141d3d] border-[3px] rounded-2xl rotate-[45deg] transition-all duration-500 hover:rotate-0 hover:scale-110 shadow-2xl",
                  step.glow
                )}>
                  <step.icon className={cn("w-10 h-10 -rotate-[45deg] group-hover:rotate-0 transition-transform duration-500", step.color)} strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-3 text-center md:text-left pt-4">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed">
                  {step.description.split('"').map((part, index) => 
                    index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
