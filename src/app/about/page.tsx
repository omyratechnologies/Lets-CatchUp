"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const aboutImg = PlaceHolderImages?.find((img) => img.id === "about-img");

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Empowering the <span className="text-gradient">Next Generation</span> of Builders.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              LetsCatchUp was founded on the principle that high-quality education should be accessible, engaging, and directly linked to career success. We're building the future of learning by combining world-class curriculum with AI-driven personalization.
            </p>
          </div>
          <div className="relative">
            <div className="glass-card p-3 rotate-3 relative z-10 overflow-hidden">
              <div className="relative rounded-[20px] overflow-hidden aspect-video">
                {aboutImg && (
                  <Image
                    src={aboutImg.imageUrl}
                    alt={aboutImg.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImg.imageHint}
                  />
                )}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Vision/Mission */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", text: "To bridge the gap between education and industry through practical, project-based learning." },
            { title: "Our Vision", text: "A world where anyone can master a technical skill regardless of their starting point." },
            { title: "Our Values", text: "Transparency, continuous iteration, and a student-first approach to everything we build." },
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 space-y-4">
              <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
