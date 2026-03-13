'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Users, GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 md:space-y-10 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white leading-[1.1] tracking-tight">
                Unlock potential <br className="hidden sm:block" />
                and <span className="text-gradient">build <br className="hidden lg:block" />connections</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Building a unified, secure ecosystem where education meets community — without the algorithmic noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5"
            >
              <Link href="https://app.letscatchup-kcs.com/">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent-gradient hover:opacity-90 text-white font-black rounded-full px-10 h-14 md:h-16 text-base md:text-lg transition-all hover:scale-105 border-none shadow-2xl"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/5 border-white/10 text-white font-bold rounded-full px-10 h-14 md:h-16 text-base md:text-lg transition-all hover:bg-white/10 hover:text-accent hover:border-accent/40"
                >
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Floating LMS Objects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Abstract LMS Object */}
            <div className="relative z-20 group">
              <div className="absolute -inset-8 bg-accent-gradient opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity" />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-56 h-56 md:w-72 md:h-72 glass rounded-[48px] md:rounded-[64px] border-white/10 flex flex-col items-center justify-center gap-4 md:gap-6 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="bg-accent-gradient w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl">
                  <GraduationCap className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-accent">Unified Learning</p>
                  <p className="text-xl md:text-2xl font-bold text-white tracking-tight">The Ecosystem</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Objects */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 md:top-20 -left-4 md:-left-10 w-24 h-24 md:w-32 md:h-32 glass rounded-[24px] md:rounded-[32px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center mb-1 md:mb-2">
                <Users className="text-accent w-4 h-4 md:w-6 md:h-6" />
              </div>
              <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white text-center px-2 leading-tight">Collaboration</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 md:bottom-20 -right-4 md:-right-10 w-24 h-24 md:w-32 md:h-32 glass rounded-[24px] md:rounded-[40px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent-gradient flex items-center justify-center mb-1 md:mb-2 shadow-lg">
                <Settings className="text-white w-5 h-5 md:w-7 md:h-7" />
              </div>
              <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white text-center px-2 leading-tight">Management</span>
            </motion.div>

            {/* Background Glow Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border border-white/5" 
              />
              <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full border border-white/5 opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
