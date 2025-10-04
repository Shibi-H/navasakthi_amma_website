import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyMantra from "@/components/DailyMantra";
import DeityShowcase from "@/components/DeityShowcase";
import ScriptureSection from "@/components/ScriptureSection";
import PrayerRequestSection from "@/components/PrayerRequestSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DailyMantra />
      <DeityShowcase />
      <ScriptureSection />
      <PrayerRequestSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
