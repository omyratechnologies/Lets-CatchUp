
"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function CareersPage() {
  const careersHero = PlaceHolderImages.find(img => img.id === "careers-hero");

  const jobs = [
    {
      title: "Senior Fullstack Engineer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      color: "from-teal-400 to-cyan-300"
    },
    {
      title: "Product Design Lead",
      department: "Product",
      location: "Mumbai / Hybrid",
      type: "Full-time",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <Badge className="glass text-primary border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
              Join the Mission
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Build the <span className="text-gradient">Future</span> with Us
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              We are looking for passionate, creative, and driven individuals to help us redefine the global learning ecosystem. Explore our open roles and find your fit.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative rounded-[20px] overflow-hidden aspect-video">
                {careersHero && (
                  <Image
                    src={careersHero.imageUrl}
                    alt={careersHero.description}
                    fill
                    className="object-cover"
                    data-ai-hint={careersHero.imageHint}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Why Join Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Growth & Learning", desc: "Unlimited access to all our courses and professional certifications.", icon: Sparkles },
              { title: "Flexible Work", desc: "Work from anywhere in the world or join us in our creative hubs.", icon: Clock },
              { title: "Great Community", desc: "Join a team of enthusiasts who are passionate about education.", icon: Briefcase }
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-10 border-white/5 space-y-4 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-accent glow-icon" />
                </div>
                <h4 className="text-2xl font-bold">{benefit.title}</h4>
                <p className="text-gray-400 font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions - Horizontal Layered Panel Effect */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Open Positions</h2>
          </div>
          
          <div className="grid gap-12">
            {jobs.map((job, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Sharp Layered Effect */}
                <div className={cn(
                  "absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5",
                  job.color
                )} />

                <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between group-hover:border-white/20 transition-all duration-500">
                  <div className="space-y-4 text-center md:text-left">
                    <Badge variant="outline" className="border-white/10 text-accent font-black uppercase tracking-widest text-[10px]">{job.department}</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                      <div className="flex items-center gap-2 text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-rose-400" />
                        {job.type}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button className="bg-accent-gradient text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
