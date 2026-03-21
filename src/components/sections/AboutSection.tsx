"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
                The journey of <br /><span className="text-gradient">Lets Catch Up</span>
              </h2>
            </div>
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium font-body max-w-xl">
              Founded with the vision to democratize technical education, Lets Catch Up started as a small project to bridge the gap between classroom learning and industry requirements. Today, we are a unified ecosystem empowering thousands of students and educators worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5 -z-10" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative rounded-[20px] overflow-hidden w-full h-auto">
                <Image
                  src="/about-us.jpeg"
                  alt="Collaborative team at Let's Catch Up"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
