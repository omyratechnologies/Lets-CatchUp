"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  Layers, 
  CreditCard, 
  MessageCircle,
  User
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for ScrollSpy
  useEffect(() => {
    if (!mounted || pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ["home", "about", "pricing", "contact"];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [mounted, pathname]);

  const navItems = [
    { name: "Home", href: pathname === "/" ? "#home" : "/#home", icon: Home },
    { name: "About", href: pathname === "/" ? "#about" : "/#about", icon: Info },
    { name: "Services", href: "/services", icon: Layers },
    { name: "Pricing", href: pathname === "/" ? "#pricing" : "/#pricing", icon: CreditCard },
    { name: "Contact", href: pathname === "/" ? "#contact" : "/#contact", icon: MessageCircle },
  ];

  const getIsActive = (item: any) => {
    if (!mounted || !pathname) return false;
    
    if (item.name === "Services") {
      return pathname.startsWith("/services");
    }

    if (pathname === "/") {
      if (item.name === "Home") return activeSection === "home";
      if (item.name === "About") return activeSection === "about";
      if (item.name === "Pricing") return activeSection === "pricing";
      if (item.name === "Contact") return activeSection === "contact";
    }

    return false;
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: {
            y: 0,
            width: "100%",
            left: "0%",
            backgroundColor: "rgba(11, 15, 47, 0)",
            backdropFilter: "blur(0px)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottomColor: "rgba(255, 255, 255, 0)",
          },
          scrolled: {
            y: 12,
            width: "calc(100% - 3rem)",
            left: "1.5rem",
            backgroundColor: "rgba(20, 29, 75, 0.95)",
            backdropFilter: "blur(24px)",
            paddingTop: "0.6rem",
            paddingBottom: "0.6rem",
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "2.5rem",
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
          },
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 px-6 border-b transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative h-full">
          <Link href="/#home" className="flex items-center gap-2 shrink-0 relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-accent-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <span className="text-white font-black text-sm sm:text-base leading-none tracking-tighter">LC</span>
            </motion.div>
            <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-white block">Let's Catch Up</span>
          </Link>

          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = getIsActive(item);
                return (
                  <div key={item.name} className="relative group py-4">
                    <Link href={item.href}>
                      <motion.span className={cn(
                        "inline-block text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap px-4 py-2 rounded-full relative",
                        isActive ? "text-[#2dd4bf]" : "text-gray-300 hover:text-[#2dd4bf]"
                      )}>
                        {item.name}
                        {isActive && mounted && (
                          <motion.div 
                            layoutId="activeNav" 
                            className="absolute inset-0 bg-white/10 rounded-full -z-10" 
                            transition={{ type: "spring", stiffness: 380, damping: 30 }} 
                          />
                        )}
                      </motion.span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link href="https://app.letscatchup-kcs.com/">
              <Button variant="ghost" className="text-gray-300 hover:text-[#2dd4bf] hover:bg-white/5 text-xs sm:text-sm font-bold rounded-full px-4 sm:px-6 h-10 sm:h-11 transition-all">
                <span className="lg:hidden"><User className="w-4 h-4" /></span>
                <span className="hidden lg:inline">Sign In</span>
              </Button>
            </Link>
            <Link href="/#contact" className="hidden lg:block">
              <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-extrabold rounded-full px-8 shadow-lg border-none h-11 transition-all active:scale-95">Contact Us</Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navbar (YouTube Style) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
        <div className="glass h-20 rounded-[2rem] flex items-center justify-around px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-white/10">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center flex-1 h-full gap-1">
                <div className={cn(
                  "p-2 rounded-2xl transition-all duration-300",
                  isActive ? "bg-accent-gradient text-white shadow-lg" : "text-gray-400"
                )}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                  isActive ? "text-accent" : "text-gray-500"
                )}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}