
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Calendar, ClipboardCheck, MessageCircle, BarChart3, GraduationCap } from "lucide-react";

export default function EducationalInstitutionsPage() {
  const tools = [
    { title: "Student Management", desc: "Complete digital records, attendance tracking, and behavioral profiles for every student.", icon: Users },
    { title: "Attendance Tracking", desc: "Automated daily attendance with instant notification systems for parents and staff.", icon: ClipboardCheck },
    { title: "Digital Gradebooks", desc: "Sophisticated grading systems with automated weightage and performance analytics.", icon: GraduationCap },
    { title: "Parent Communication", desc: "Integrated portal for real-time updates, feedback loops, and progress monitoring.", icon: MessageCircle },
    { title: "Timetable Scheduling", desc: "Intelligent conflict-free scheduling for classes, labs, and elective subjects.", icon: Calendar },
    { title: "Advanced Reporting", desc: "Comprehensive data visualization for institutional growth and academic auditing.", icon: BarChart3 },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 space-y-6 group hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <tool.icon className="w-7 h-7 text-accent" />
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
