
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-headline font-bold">Page Not Found</h1>
        <p className="text-gray-400">The page you are looking for does not exist or has been moved.</p>
        <Link href="/">
          <Button className="bg-accent-gradient rounded-full px-8 h-12 font-bold shadow-lg border-none">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
