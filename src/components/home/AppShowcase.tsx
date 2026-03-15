
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bell, Star, Heart, Zap, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const floatingElements = [
    { icon: MessageSquare, color: "text-accent", delay: 0, x: -120, y: -80, label: "New Message" },
    { icon: Bell, color: "text-primary", delay: 1, x: 140, y: -120, label: "Notification" },
    { icon: Heart, color: "text-rose-400", delay: 2, x: 120, y: 100, label: "Reaction" },
    { icon: Zap, color: "text-amber-400", delay: 1.5, x: -150, y: 120, label: "New Event" },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl"
        >
          <Badge variant="outline" className="border-accent/30 text-accent px-6 py-1.5 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
            Mobile Experience
          </Badge>
          <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
            Take Let’s Catch Up <span className="text-gradient">Anywhere</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium">
            Stay connected with your communities, conversations, and learning spaces directly from your phone. Access everything instantly from the Let’s Catch Up mobile app.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link 
            href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share" 
            target="_blank"
            className="group relative transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-2 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image 
              src="/googleplay.png" 
              alt="Google Play Store" 
              width={160} 
              height={48} 
              className="relative object-contain" 
            />
          </Link>
          <Link 
            href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557" 
            target="_blank"
            className="group relative transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image 
              src="/appstore.jpg" 
              alt="Apple App Store" 
              width={160} 
              height={48} 
              className="relative object-contain rounded-lg" 
            />
          </Link>
        </motion.div>

        {/* Visual Showcase */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[700px] mt-12 flex items-center justify-center">
          
          {/* Floating UI Elements */}
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                y: [el.y, el.y - 15, el.y],
                x: [el.x, el.x + 5, el.x]
              }}
              transition={{ 
                delay: 0.5 + el.delay, 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute hidden md:flex items-center gap-3 glass p-3 rounded-2xl border-white/10 shadow-2xl z-30"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <el.icon className={cn("w-4 h-4", el.color)} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{el.label}</span>
            </motion.div>
          ))}

          {/* Phones Cluster */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative flex items-center justify-center gap-4 md:gap-16 perspective-1000"
          >
            {/* Android Phone */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[150px] h-[300px] md:w-[280px] md:h-[580px] group"
            >
              <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full opacity-50" />
              <div className="relative w-full h-full bg-[#0f172a] rounded-[2rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-[#1e294b] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1e294b] rounded-b-2xl z-20" />
                <div className="relative w-full h-full bg-gradient-to-b from-[#1e294b] to-[#0f172a] p-4 flex flex-col gap-4">
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                  <div className="w-full h-32 rounded-xl bg-accent-gradient opacity-20" />
                  <div className="space-y-2">
                    <div className="w-2/3 h-4 rounded-full bg-white/10" />
                    <div className="w-full h-4 rounded-full bg-white/5" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent">Android Experience</p>
                <p className="text-[8px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest">Optimized for Google Play</p>
              </div>
            </motion.div>

            {/* iPhone */}
            <motion.div
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative w-[150px] h-[300px] md:w-[280px] md:h-[580px] group"
            >
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50" />
              <div className="relative w-full h-full bg-[#0f172a] rounded-[2rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-[#1e294b] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/4 h-5 bg-[#1e294b] rounded-full z-20" />
                <div className="relative w-full h-full bg-gradient-to-b from-[#141d3d] to-[#0b0f2f] p-4 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20" />
                    <div className="flex-1 space-y-1">
                      <div className="w-1/2 h-2 rounded-full bg-white/10" />
                      <div className="w-1/4 h-2 rounded-full bg-white/5" />
                    </div>
                  </div>
                  <div className="w-full h-48 rounded-xl bg-white/5 border border-white/10 flex flex-col p-4 gap-2">
                    <LayoutGrid className="w-6 h-6 text-accent opacity-40" />
                    <div className="w-full h-2 rounded-full bg-white/10" />
                    <div className="w-2/3 h-2 rounded-full bg-white/5" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">iOS Experience</p>
                <p className="text-[8px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest">Designed for iPhone</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ambient Light Gradients behind phones */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-accent/5 to-transparent blur-[100px] -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
