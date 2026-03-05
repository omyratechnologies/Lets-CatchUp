
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Meera Sinha",
      role: "Education Consultant",
      quote: "The platform's focus on meaningful connection has made a huge difference in our student engagement levels. It's truly transformative for the modern classroom.",
      initials: "MS",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Founder",
      quote: "As a startup founder, finding a space that balances professional growth with community is rare. LetsCatchUp nailed it perfectly for our engineering team.",
      initials: "RM",
    },
    {
      name: "Anjali Rao",
      role: "Operations Manager",
      quote: "The collaboration tools are intuitive and powerful. It's truly a unified space that makes teamwork feel natural, productive, and fun.",
      initials: "AR",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">Wall of Love</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Trusted by the <br /><span className="text-gradient">Community</span>
          </h1>
          <p className="text-xl text-gray-400">Hear from the educators and founders building the future with us.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xl text-gray-200 italic leading-relaxed font-medium">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-white/5">
                <Avatar className="w-14 h-14 border border-white/10">
                  <AvatarFallback className="bg-accent/20 text-accent font-bold text-lg">{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
