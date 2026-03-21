
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, DoorOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Secure & Private",
    description: "Your workspace, your data—protected by design.",
    icon: Shield,
    color: "text-accent",
  },
  {
    title: "Remote-First",
    description: "Geography is no barrier to great collaboration.",
    icon: Globe,
    color: "text-emerald-400",
  },
  {
    title: "Free for Community",
    description: "No cost barriers for budding innovators.",
    icon: DoorOpen,
    color: "text-blue-400",
  },
];

export function CollaborationSuiteSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
            The Collaboration Suite
          </h2>
          <p className="text-lg md:text-xl font-headline font-bold text-accent uppercase tracking-widest">
            For Startups & Organizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-accent/10 blur-[40px] -z-10" />
            <div className="glass-card p-8 md:p-12 border-white/10 bg-gradient-to-br from-[#1e294b] to-[#0f172a] rounded-[32px] space-y-8 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">What&apos;s Included</h3>
              <ul className="space-y-6">
                {[
                  { label: "Unified Workspace", text: "Project spaces, team chat, and document sharing in a secure, private environment." },
                  { label: "Remote-First", text: "Designed to keep teams connected, no matter the geography." },
                  { label: "Open Access", text: "Built on a \"Free for Community\" model to remove cost barriers for budding innovators." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed">
                      <span className="text-white font-bold">{item.label}:</span> {item.text.split('"').map((part, index) => 
                        index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="space-y-12">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-all shadow-xl shrink-0">
                  <feat.icon className={cn("w-6 h-6 md:w-8 md:h-8", feat.color)} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
