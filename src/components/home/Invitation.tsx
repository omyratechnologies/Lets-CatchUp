"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Invitation() {
  const invitations = [
    {
      title: "The 34-Day Immersion",
      desc: "Experience the full operational impact of our ecosystem with a 34-day, risk-free journey. This is a zero-commitment window designed for you to witness the seamless transition from traditional management to high-utility connectivity.",
      icon: Target,
      color: "from-teal-400 to-cyan-300",
      label: "Operational Impact"
    },
    {
      title: "The Collaborative Future",
      desc: "We are actively seeking visionary institutions and community builders to help us scale this infrastructure. We don't just want users; we want strategic partners ready to architect the next standard of academic and social synergy.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      label: "Strategic Partnership"
    },
    {
      title: "Beyond the Digital Noise",
      desc: "It is time to move past the superficial and prioritize intentional connection. Let’s strip away the distractions and focus on what truly adds value to your community.",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      label: "Human Centric"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-[#0b0f2f]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-accent/30 text-accent px-6 py-1.5 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                The Invitation
              </Badge>
              <h2 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tight text-white">
                Join the <br />
                <span className="text-gradient">Movement</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                We are building the architecture of the next decade. Be part of a transition that prioritizes utility, safety, and human growth over engagement metrics.
              </p>
              
              <div className="pt-6">
                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-all group">
                  Start Your Journey <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Unique Layered Panels */}
          <div className="space-y-24">
            {invitations.map((inv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Asymmetric Sharp Layer Behind */}
                <div className={cn(
                  "absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-gradient-to-br opacity-40 transition-all duration-700 group-hover:opacity-70 group-hover:-bottom-8 group-hover:-right-8",
                  inv.color
                )} />

                <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-10 md:p-14 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-white/20">
                  {/* Decorative Icon Glow */}
                  <div className="absolute top-8 right-8 text-white/5 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                    <inv.icon size={120} strokeWidth={1} />
                  </div>

                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl",
                        "group-hover:border-accent/40 transition-colors"
                      )}>
                        <inv.icon className={cn("w-7 h-7 text-accent")} />
                      </div>
                      <Badge variant="outline" className="border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        {inv.label}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                        {inv.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                        {inv.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-4 text-sm font-black uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                      Explore this path <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Internal Gloss Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
