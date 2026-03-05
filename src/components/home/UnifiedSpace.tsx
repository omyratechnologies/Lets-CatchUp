"use client";

import React from "react";
import { Users, Zap } from "lucide-react";

export function UnifiedSpace() {
  const sections = [
    {
      title: "Seamless collaboration",
      description: "Break down silos with tools designed for real-time teamwork and project management.",
      icon: Zap,
      color: "text-accent",
    },
    {
      title: "Community engagement",
      description: "Build vibrant communities where members can interact, share knowledge, and grow together.",
      icon: Users,
      color: "text-primary",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">A unified space for every community</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage your organization or learning environment in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="glass-card p-10 border-white/5 group hover:border-accent/20 transition-all">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <section.icon className={`w-7 h-7 ${section.color} glow-icon`} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{section.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
