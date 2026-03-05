
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, MessageSquare, Share2, Target, Users2, Zap } from "lucide-react";

export default function StartupsOrganizationsPage() {
  const tools = [
    { title: "Team Communication", desc: "Real-time channels and threads for seamless organizational alignment.", icon: MessageSquare },
    { title: "Project Collaboration", desc: "Kanban boards, task tracking, and milestone management for agile teams.", icon: Zap },
    { title: "Shared Workspaces", desc: "Secure environments for cross-functional teams to build and scale projects.", icon: Users2 },
    { title: "Knowledge Sharing", desc: "Internal wikis and documentation hubs to build a culture of learning.", icon: Share2 },
    { title: "Skill Assessments", desc: "Quantifiable metrics to track team growth and technical proficiency.", icon: Target },
    { title: "Org Administration", desc: "Enterprise-grade controls for user access and departmental management.", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <Badge className="glass text-primary border-white/10 px-4 py-1">For Corporate & Startups</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Scale Your <br /><span className="text-gradient">Team's Potential</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Move faster with a unified workspace that combines project management, team learning, and professional collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 space-y-6 group hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <tool.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{tool.title}</h3>
              <p className="text-gray-400 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
