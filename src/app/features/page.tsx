"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Network, Settings, Users, Layout, Zap, Shield, Cpu } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      title: "Connected Learning Spaces",
      description: "Unified digital environments where students and educators interact effortlessly to build the future of education.",
      icon: Network,
      color: "from-emerald-400 to-teal-300",
      capabilities: ["Real-time interaction", "Virtual labs", "Resource sharing"]
    },
    {
      title: "Seamless Academic Management",
      description: "Powerful administrative tools designed to streamline grading, scheduling, and student progress tracking with ease.",
      icon: Settings,
      color: "from-blue-500 to-indigo-400",
      capabilities: ["Automated grading", "Schedule optimizer", "Progress reporting"]
    },
    {
      title: "Interest-Based Communities",
      description: "Join or create specialized groups centered around your specific passions, career goals, and academic interests.",
      icon: Users,
      color: "from-fuchsia-500 to-purple-500",
      capabilities: ["Peer-to-peer learning", "Subject forums", "Mentorship programs"]
    },
    {
      title: "Inclusive Collaboration Tools",
      description: "Accessible and intuitive features built for diverse teams to collaborate, communicate, and execute projects seamlessly.",
      icon: Layout,
      color: "from-amber-400 to-orange-500",
      capabilities: ["Team workspaces", "Shared calendars", "Live document editing"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">Platform Capabilities</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Engineered for <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Everything you need to build, manage, and scale your learning ecosystem with professional-grade tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-32">
          {detailedFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <FeatureCard
                title={f.title}
                description={f.description}
                icon={f.icon}
                gradientFrom={f.color.split(' ')[0]}
                gradientTo={f.color.split(' ')[1]}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 pt-4">
                {f.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-widest">
                    <Zap className="w-3 h-3 text-accent" />
                    {cap}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-card p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-white/10 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-headline font-bold">Secure & Reliable</h2>
            <p className="text-lg text-gray-400 max-w-xl">
              Our infrastructure is built with enterprise-grade security to ensure your data is always protected and your platform stays online.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 shrink-0">
            <div className="flex items-center gap-3 glass p-4 rounded-xl">
              <Shield className="text-accent" />
              <span className="font-bold">Encrypted</span>
            </div>
            <div className="flex items-center gap-3 glass p-4 rounded-xl">
              <Cpu className="text-primary" />
              <span className="font-bold">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
