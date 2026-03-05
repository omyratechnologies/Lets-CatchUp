
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is LetsCatchUp LMS?",
      a: "LetsCatchUp is a unified learning and collaboration platform designed to support educational institutions and startups with modern management tools and community spaces."
    },
    {
      q: "How does the pricing work for schools?",
      a: "Our pricing is tiered based on the size of your institution. We offer plans ranging from Small School (min ₹1,500/mo) to International School (min ₹10,000/mo) with features tailored for each scale."
    },
    {
      q: "Is it suitable for corporate training?",
      a: "Yes! Our 'Startups & Organizations' tier includes specialized features for team collaboration, project tracking, and internal knowledge bases perfect for corporate environments."
    },
    {
      q: "Can I manage student attendance digitally?",
      a: "Absolutely. Our platform includes an automated attendance system with parent notification capabilities and comprehensive reporting."
    },
    {
      q: "How secure is my institutional data?",
      a: "We prioritize security with enterprise-grade encryption and 99.9% uptime reliability. Your data is stored in secure, cloud-native environments."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">FAQ</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold">Common <span className="text-gradient">Questions</span></h1>
          <p className="text-xl text-gray-400">Everything you need to know about the LetsCatchUp platform.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-card p-10 border-white/10"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-xl font-bold hover:text-accent py-6 transition-all text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-400 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
