
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Network, Settings, Users, Layout, Zap, Shield, Cpu, Globe } from "lucide-react";

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      title: "Connected Learning Spaces",
      description: "Unified digital environments where students and educators interact effortlessly to build the future of education.",
      icon: Network,
      color: "text-emerald-400",
      capabilities: ["Real-time interaction", "Virtual labs", "Resource sharing"]
    },
    {
      title: "Seamless Academic Management",
      description: "Powerful administrative tools designed to streamline grading, scheduling, and student progress tracking with ease.",
      icon: Settings,
      color: "text-blue-400",
      capabilities: ["Automated grading", "Schedule optimizer", "Progress reporting"]
    },
    {
      title: "Interest-Based Communities",
      description: "Join or create specialized groups centered around your specific passions, career goals, and academic interests.",
      icon: Users,
      color: "text-pink-400",
      capabilities: ["Peer-to-peer learning", "Subject forums", "Mentorship programs"]
    },
    {
      title: "Inclusive Collaboration Tools",
      description: "Accessible and intuitive features built for diverse teams to collaborate, communicate, and execute projects seamlessly.",
      icon: Layout,
      color: "text-purple-400",
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

        <div className="grid md:grid-cols-2 gap-12">
          {detailedFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 space-y-8 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <f.icon className={`w-10 h-10 ${f.color} glow-icon`} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">{f.title}</h3>
                </div>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">{f.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                {f.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
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
          <div className="space-y-4">
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
