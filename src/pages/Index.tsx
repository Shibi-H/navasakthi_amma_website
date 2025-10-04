import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyMantra from "@/components/DailyMantra";
import UpcomingEvents from "@/components/UpcomingEvents";
import DeityShowcase from "@/components/DeityShowcase";
import ScriptureSection from "@/components/ScriptureSection";
import PrayerRequestSection from "@/components/PrayerRequestSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DailyMantra />
      <UpcomingEvents />
      <DeityShowcase />
      <ScriptureSection />
      <PrayerRequestSection />
      <TestimonialsSection />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
