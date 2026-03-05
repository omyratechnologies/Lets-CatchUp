"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages?.find((img) => img.id === "hero-bg");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <Badge variant="secondary" className="bg-white/5 border-white/10 text-accent px-5 py-2 rounded-full backdrop-blur-md">
            🚀 Your Future Starts Here
          </Badge>
          
          <h1 className="text-6xl lg:text-8xl font-headline font-bold leading-tight tracking-tight">
            Master Skills That <br />
            <span className="text-gradient">Define Tomorrow.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            LetsCatchUp Learn provides world-class courses designed by industry experts. Join thousands of students accelerating their careers.
          </p>

          <div className="flex flex-wrap gap-5">
            <Button size="lg" className="bg-accent-gradient hover:opacity-90 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 shadow-xl">
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg glass border-white/20 hover:bg-white/10 transition-all">
              <Play className="mr-2 w-5 h-5 fill-current" /> Watch Intro
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0b0f2f] overflow-hidden shadow-lg">
                  <Image
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    alt="User"
                    width={48}
                    height={48}
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-accent">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground font-semibold mt-1">Trusted by 10k+ Learners</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-5 rotate-2 relative z-10 soft-shadow">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {heroImage ? (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              ) : (
                <div className="w-full h-full bg-card animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f2f]/80 via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -top-10 -right-6 glass-card p-6 rounded-2xl z-20 animate-bounce delay-700">
            <div className="bg-accent rounded-xl p-3 mb-2 shadow-lg">
              <Star className="text-background w-6 h-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider">Top Rated Course</p>
          </div>
          <div className="absolute -bottom-10 -left-6 glass-card p-8 rounded-2xl z-20">
            <p className="text-4xl font-bold font-headline text-gradient">85%</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}