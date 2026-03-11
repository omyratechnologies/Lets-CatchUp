import { Hero } from "@/components/home/Hero";
import { PlatformDescription } from "@/components/home/PlatformDescription";
import { UnifiedSpace } from "@/components/home/UnifiedSpace";
import { Onboarding } from "@/components/home/Onboarding";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <div className="min-h-screen space-y-0">
      <Hero />
      <PlatformDescription />
      <Features />
      <UnifiedSpace />
      <Onboarding />
    </div>
  );
}
