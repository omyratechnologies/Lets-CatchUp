"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Meera Sinha",
      role: "Education Consultant",
      quote: "The platform's focus on meaningful connection has made a huge difference in our student engagement levels. It's truly transformative.",
      initials: "MS",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Founder",
      quote: "As a startup founder, finding a space that balances professional growth with community is rare. LetsCatchUp nailed it perfectly.",
      initials: "RM",
    },
    {
      name: "Anjali Rao",
      role: "Operations Manager",
      quote: "The collaboration tools are intuitive and powerful. It's truly a unified space that makes teamwork feel natural and fun.",
      initials: "AR",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg">Real feedback from real users across the globe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 border-white/5 flex flex-col justify-between hover:translate-y-[-4px] transition-all">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 italic leading-relaxed">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/5">
                <Avatar className="w-12 h-12 border border-white/10">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
