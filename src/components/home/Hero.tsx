'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, BookOpen, Trophy, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white leading-[1.05] tracking-tight">
                Unlock potential <br />
                and <span className="text-gradient">build <br />connections</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
            >
              Lets Catch Up is your all-in-one platform for collaboration and learning — built for schools and startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-5"
            >
              <Link href="https://app.letscatchup-kcs.com/">
                <Button
                  size="lg"
                  className="bg-accent-gradient hover:opacity-90 text-white font-black rounded-full px-10 h-16 text-lg transition-all hover:scale-105 border-none shadow-2xl"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-white/10 text-white font-bold rounded-full px-10 h-16 text-lg transition-all hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Learning Hub Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* 2.4k Live Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-12 z-30"
            >
              <div className="glass px-4 py-2 rounded-full border-white/20 flex items-center gap-2 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-white uppercase tracking-widest">2.4k Live</span>
              </div>
            </motion.div>

            {/* Main Learning Card */}
            <div className="relative group z-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-rose-400 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative glass-card border-white/10 bg-[#1e294b]/80 p-8 md:p-10 w-full max-w-[420px] shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="bg-accent-gradient w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl">
                      <GraduationCap className="text-white w-6 h-6" />
                    </div>
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1e294b] bg-white/10 flex items-center justify-center overflow-hidden">
                           <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-[#1e294b] bg-accent flex items-center justify-center text-[10px] font-black text-black">
                        +12
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Active Lesson
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Advanced React Architecture</h3>
                    <p className="text-slate-400 text-sm font-medium">
                      Master the complexities of modern web ecosystems.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Course Progress</span>
                      <span className="text-sm font-black text-white">75%</span>
                    </div>
                    <Progress value={75} className="h-2.5 bg-white/5">
                      <div className="h-full bg-accent transition-all" />
                    </Progress>
                  </div>

                  <Button className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white rounded-2xl h-14 font-bold flex items-center justify-center gap-2">
                    <PlayCircle className="w-5 h-5 text-accent" />
                    Resume Learning
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Objects */}
            {/* Mastery Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-10 w-28 h-28 glass rounded-[32px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <Trophy className="text-accent w-6 h-6" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white">Mastery Badge</span>
            </motion.div>

            {/* Resource Hub */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-[40px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-14 h-14 rounded-full bg-accent-gradient flex items-center justify-center mb-2 shadow-lg">
                <BookOpen className="text-white w-7 h-7" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white">Resource Hub</span>
            </motion.div>

            {/* Background Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] rounded-full border border-white/5 animate-pulse" />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}