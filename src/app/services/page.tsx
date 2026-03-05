
"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowRight, Globe, Cpu, Zap, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">Our Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold">Tailored for your <span className="text-gradient">Success</span></h1>
          <p className="text-xl text-gray-400">Professional platforms designed for the unique needs of every learner and leader.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schools Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-12 space-y-8 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-4 flex-1">
              <h2 className="text-4xl font-headline font-bold">Educational Institutions</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Empower your faculty and students with modern LMS tools. From primary schools to universities, our platform simplifies curriculum management and enhances student engagement.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-accent" /> Virtual Classrooms
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Cpu className="w-4 h-4 text-accent" /> Student Analytics
                </div>
              </div>
            </div>
            <Link href="/services/educational-institutions">
              <Button className="w-full bg-accent-gradient hover:opacity-90 rounded-full h-14 text-lg font-bold group">
                Explore LMS Tools <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Orgs Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-12 space-y-8 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-4 flex-1">
              <h2 className="text-4xl font-headline font-bold">Startups & Organizations</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Scale your team's knowledge with project management and collaboration features designed for fast-paced environments. Build a culture of continuous learning.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Users className="w-4 h-4 text-primary" /> Team Collaboration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-primary" /> Project Tracking
                </div>
              </div>
            </div>
            <Link href="/services/startups-organizations">
              <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-14 text-lg font-bold group">
                Explore Collaboration Tools <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
