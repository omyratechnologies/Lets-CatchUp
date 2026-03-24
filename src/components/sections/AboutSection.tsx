
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type Particle = {
  x: string;
  y: string;
  duration: number;
  delay: number;
};

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 5]);

  useEffect(() => {
    // Generate random positions only on the client to avoid hydration mismatch
    const generatedParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedPos = x / rect.width;
      videoRef.current.currentTime = clickedPos * videoRef.current.duration;
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden w-full">
      {/* Interactive Particles Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{ 
              x: p.x, 
              y: p.y 
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-headline text-accent font-black tracking-widest text-sm">01</span>
                <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                  Our Story
                </Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight tracking-tight text-white">
                Democratizing <br /><span className="text-gradient">Potential</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium font-body">
                Founded with the vision to democratize technical education, <span className="text-white font-bold">Lets Catch Up</span> started as a response to the growing gap between academic theory and industry reality.
              </p>
              <div className="h-[1px] w-20 bg-accent-gradient rounded-full" />
              <p className="text-base text-gray-400 leading-relaxed font-body">
                Today, we are a high-fidelity unified ecosystem empowering thousands of students, educators, and organizations worldwide through secure, mindful technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2, rotate }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full lg:ml-auto lg:max-w-[540px]"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10" />
            
            <div 
              className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500"
              onMouseEnter={() => setIsHoveringVideo(true)}
              onMouseLeave={() => setIsHoveringVideo(false)}
            >
              <div className="relative rounded-[32px] overflow-hidden w-full h-auto bg-black/20 group/video">
                <video
                  ref={videoRef}
                  src="/promotion.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 p-2 md:p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

                {/* Custom Controls Overlay */}
                <AnimatePresence>
                  {(isHoveringVideo || !isPlaying) && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-10 pointer-events-none"
                    >
                      {/* Central Play Button when paused */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <AnimatePresence>
                          {!isPlaying && (
                            <motion.button
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              onClick={togglePlay}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center text-accent shadow-2xl pointer-events-auto hover:scale-110 transition-transform"
                            >
                              <Play size={32} fill="currentColor" className="ml-1" />
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Control Bar */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="glass p-3 md:p-4 rounded-2xl flex items-center gap-4 pointer-events-auto border-white/10 shadow-2xl backdrop-blur-2xl"
                      >
                        <button 
                          onClick={togglePlay}
                          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
                        </button>

                        <div 
                          className="flex-1 h-1.5 bg-white/10 rounded-full cursor-pointer relative overflow-hidden group/progress"
                          onClick={handleProgressClick}
                        >
                          <div 
                            className="absolute inset-y-0 left-0 bg-accent-gradient transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <button 
                          onClick={toggleMute}
                          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                        >
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
