"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Calendar, ClipboardCheck, MessageCircle, BarChart3, GraduationCap } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

export default function EducationalInstitutionsPage() {
  const tools = [
    { title: "Student Management", desc: "Complete digital records, attendance tracking, and behavioral profiles for every student.", icon: Users, color: "from-emerald-400 to-teal-300" },
    { title: "Attendance Tracking", desc: "Automated daily attendance with instant notification systems for parents and staff.", icon: ClipboardCheck, color: "from-blue-400 to-cyan-400" },
    { title: "Digital Gradebooks", desc: "Sophisticated grading systems with automated weightage and performance analytics.", icon: GraduationCap, color: "from-purple-400 to-pink-400" },
    { title: "Parent Communication", desc: "Integrated portal for real-time updates, feedback loops, and progress monitoring.", icon: MessageCircle, color: "from-orange-400 to-yellow-400" },
    { title: "Timetable Scheduling", desc: "Intelligent conflict-free scheduling for classes, labs, and elective subjects.", icon: Calendar, color: "from-indigo-400 to-blue-400" },
    { title: "Advanced Reporting", desc: "Comprehensive data visualization for institutional growth and academic auditing.", icon: BarChart3, color: "from-rose-400 to-red-400" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">For Schools & Colleges</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            The Modern <br /><span className="text-gradient">LMS Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Empower your faculty and engage your students with tools built specifically for the needs of modern educational institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                title={tool.title}
                description={tool.desc}
                icon={tool.icon}
                gradientFrom={tool.color.split(' ')[0]}
                gradientTo={tool.color.split(' ')[1]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
