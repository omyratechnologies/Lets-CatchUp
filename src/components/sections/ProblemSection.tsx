
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const problems = [
  {
    title: "Institutional Silos",
    description: "Education is stuck in disconnected apps. Managing a school involves 5+ different platforms.",
    highlights: ["5+ different platforms"],
    color: "bg-emerald-400",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]",
  },
  {
    title: "The Attention Economy",
    description: "Public social platforms are built to addict. They prioritize \"engagement\" (rage, scrolling, vanity) over human well-being.",
    highlights: ["\"engagement\""],
    color: "bg-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
  },
  {
    title: "Mental Health Impact",
    description: "Gen Z and Gen Alpha are suffering from \"algorithmic fatigue\"—a constant state of social comparison, anxiety, and fragmented focus.",
    highlights: ["\"algorithmic fatigue\""],
    color: "bg-blue-500",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-white max-w-2xl">
            The Problem: The <br />
            <span className="text-gradient">"Fragmented & Distracted"</span> World
          </h2>
        </motion.div>

        <div className="space-y-8">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className={cn(
                "relative bg-gradient-to-br from-[#1e294b] to-[#0f172a] border border-white/10 rounded-2xl md:rounded-[32px] p-8 md:p-12 flex flex-col gap-4 overflow-hidden transition-all duration-500 hover:border-white/20",
                prob.glow
              )}>
                {/* Glowing Left Accent Bar */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-2 md:w-2.5", prob.color)} />
                
                <h3 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight">
                  {prob.title}
                </h3>
                
                <p className="text-sm md:text-2xl text-gray-400 leading-relaxed font-medium font-body">
                  {prob.description.split(new RegExp(`(${prob.highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')).map((part, index) => 
                    prob.highlights.includes(part) ? (
                      <span key={index} className="text-white font-bold">{part}</span>
                    ) : (
                      part
                    )
                  )}
                </p>
                
                {/* Subtle Internal Gloss */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
