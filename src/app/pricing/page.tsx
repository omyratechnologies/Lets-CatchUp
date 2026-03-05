"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      desc: "Perfect for exploring our platform.",
      features: ["Access to free courses", "Community support", "Public profile", "Mobile app access"],
      cta: "Start Learning",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      desc: "Best for serious learners.",
      features: ["All Premium courses", "AI Learning Paths", "Verified Certificates", "Priority Support", "Interactive labs"],
      cta: "Get Pro Access",
      popular: true,
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      desc: "For small teams and organizations.",
      features: ["Everything in Pro", "Team analytics", "Manage 5+ members", "Custom workshops", "Admin dashboard"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10">Pricing Plans</Badge>
          <h1 className="text-5xl font-headline font-bold">Choose Your <span className="text-gradient">Path</span></h1>
          <p className="text-xl text-gray-400">Flexible options tailored to your learning goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`glass-card p-10 flex flex-col relative ${plan.popular ? 'border-accent/40 scale-105 z-10' : 'border-white/5'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent-gradient text-white border-none py-1 px-4">Most Popular</Badge>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">{plan.desc}</p>
              </div>
              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className={`w-full rounded-full h-12 text-lg font-bold border-none transition-all ${plan.popular ? 'bg-accent-gradient hover:opacity-90' : 'glass hover:bg-white/10'}`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
