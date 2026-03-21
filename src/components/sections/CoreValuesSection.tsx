"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CoreValuesSection() {
  const values = [
    {
      title: "Empowerment & Inclusivity",
      desc: "We believe that every learner, regardless of their background, should have the tools and community support to build their dream career in tech.",
      icon: Sparkles,
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
    },
    {
      title: "ISO Certified Trust",
      desc: "ISO-certified, secure, and private environment — maintaining the highest levels of data security and institutional integrity.",
      icon: ShieldCheck,
      color: "primary",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="values" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-5xl font-headline font-bold text-white tracking-tight">Our Core Values</h3>
            <div className="w-16 h-1 bg-accent-gradient mx-auto rounded-full opacity-50" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group h-full"
              >
                <div className={cn(
                  "absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full rounded-2xl md:rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-3 md:group-hover:-bottom-5 group-hover:-right-3 md:group-hover:-right-5 -z-10",
                  v.gradient
                )} />

                <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl backdrop-blur-sm">
                      <v.icon className={cn(
                        "w-6 h-6 md:w-10 md:h-10 glow-icon",
                        v.color === "accent" ? "text-accent" : "text-primary"
                      )} />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4 flex-1 text-center md:text-left">
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-lg md:text-3xl font-headline font-bold tracking-tight text-white">
                        {v.title}
                      </h4>
                      <p className="text-[10px] md:text-lg text-gray-400 leading-relaxed font-medium font-body">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
