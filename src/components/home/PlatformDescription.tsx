"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

export function PlatformDescription() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1">
              About the Platform
            </Badge>
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Empowering communities through <span className="text-gradient">connection</span>
            </h2>
          </div>
          <div className="glass-card p-10 md:p-12 border-white/10">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lets Catch Up simplifies collaboration across schools, startups, and organizations. From engaging students to enabling seamless teamwork, our platform helps users stay connected, grow faster, and build meaningful relationships in a secure space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
