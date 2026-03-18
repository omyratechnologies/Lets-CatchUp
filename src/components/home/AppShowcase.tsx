
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export function AppShowcase() {
  return (
    <section 
      className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 md:space-y-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              className="text-[10px] md:text-xs font-black uppercase text-accent tracking-[0.3em] drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
            >
              Mobile Experience
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Take Let’s Catch Up <span className="text-gradient">Anywhere</span>
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto">
            Stay connected to your communities, conversations, and learning spaces — wherever you go.
          </p>
        </motion.div>

        {/* Download Buttons Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Smartphone className="w-3 h-3 text-accent" />
                Available on Android & iOS
             </span>
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="/googleplay.png" 
                    alt="Google Play Store" 
                    width={140} 
                    height={42} 
                    style={{ height: 'auto' }}
                    className="relative object-contain" 
                  />
                </Link>
                <Link 
                  href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="/appstore.jpg" 
                    alt="Apple App Store" 
                    width={140} 
                    height={42} 
                    style={{ height: 'auto' }}
                    className="relative object-contain rounded-lg shadow-xl" 
                  />
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
