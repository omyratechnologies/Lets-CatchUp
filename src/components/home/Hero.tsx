'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-iso-tech');

  return (
    <section id="home" className="relative min-h-screen bg-slate-950 flex items-stretch overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full pt-20 lg:pt-0">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 lg:py-0 space-y-8 bg-gradient-to-b from-slate-950 to-black z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white leading-tight tracking-tight">
              Let's Catch Up — <br />
              Unlock Potential and Build Lasting Connections
            </h1>
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">
              Reclaiming Digital Agency
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed font-body"
          >
            Building a unified, secure ecosystem where education meets community—without the algorithmic noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-[#00f5a0] hover:bg-[#00f5a0]/90 text-black font-bold rounded-full px-10 h-14 transition-all hover:scale-105 border-none"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Isometric Illustration */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-slate-900">
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-80"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent lg:block hidden" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
