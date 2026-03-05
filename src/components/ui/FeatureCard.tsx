import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  gradientFrom = "from-teal-400",
  gradientTo = "to-cyan-300"
}: FeatureCardProps) {
  return (
    <div className={cn("relative group pt-14", className)}>
      {/* Tilted card behind */}
      <div className={cn(
        "absolute bottom-0 right-0 w-[90%] h-[120px] bg-gradient-to-r rounded-[32px] rotate-[8deg] -translate-x-2 translate-y-6 z-0 opacity-80 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:translate-y-8",
        gradientFrom,
        gradientTo
      )}></div>

      {/* Main Card */}
      <div className="relative w-full h-full bg-gradient-to-b from-[#344571] to-[#2a3b66] rounded-[32px] px-6 pt-16 pb-8 shadow-2xl z-10 border border-white/10 flex flex-col items-center text-center">
        {/* Circle Icon */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-[#334473] flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
          <Icon
            size={40}
            strokeWidth={1.6}
            className="text-teal-300"
          />
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-bold tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#cfd6ec] text-sm leading-relaxed mt-4 flex-1">
          {description}
        </p>

        {/* CTA */}
        <button className="text-teal-300 text-xs mt-6 tracking-widest font-bold hover:brightness-110 transition-all uppercase">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
