
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const charterItems = [
  {
    number: "1",
    title: "User Agency",
    description: "We give control back. You decide how you interact, not an algorithm.",
    color: "border-accent/40",
    glow: "shadow-[0_0_20px_rgba(45,212,191,0.15)]",
    headerBg: "bg-accent/5"
  },
  {
    number: "2",
    title: "Privacy by Design",
    description: "Data is for the user, not for sale. Privacy is not a feature, it's our foundation.",
    color: "border-cyan-400/40",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    headerBg: "bg-cyan-400/5"
  },
  {
    number: "3",
    title: "Purposeful Tech",
    description: "Every feature must answer: \"Does this help the user learn, grow, or connect?\"",
    color: "border-primary/40",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    headerBg: "bg-primary/5"
  },
  {
    number: "4",
    title: "Inclusivity",
    description: "A space designed for all ages, bridging the generational divide through shared interest.",
    color: "border-purple-400/40",
    glow: "shadow-[0_0_20px_rgba(192,132,252,0.15)]",
    headerBg: "bg-purple-400/5"
  }
];

export function CharterSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex">
            <Badge className="font-headline glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
              Our Values
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
            Our Charter for <br /><span className="text-gradient">Human-Centric Tech</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {charterItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className={cn(
                "relative h-full bg-gradient-to-br from-[#1e294b] to-[#0f172a] border rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-500 group-hover:border-white/30 shadow-2xl",
                item.color,
                item.glow
              )}>
                {/* Number Header */}
                <div className={cn(
                  "py-3 md:py-4 border-b border-white/10 flex items-center justify-center font-headline text-lg md:text-2xl font-bold text-white/80 transition-colors group-hover:text-white",
                  item.headerBg
                )}>
                  {item.number}
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-10 space-y-4">
                  <h3 className="text-xl md:text-3xl font-headline font-bold text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium font-body">
                    {item.description.split('"').map((part, index) => 
                      index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                    )}
                  </p>
                </div>

                {/* Subtle Decorative Icon */}
                <div className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                  <div className="text-6xl md:text-8xl font-headline font-bold">{item.number}</div>
                </div>

                {/* Internal Gloss */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
