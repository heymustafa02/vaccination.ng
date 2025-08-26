import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CovidResultsSection from "@/components/CovidResultsSection";
import WhyVaccinateSection from "@/components/WhyVaccinateSection";
import RegistrationSection from "@/components/RegistrationSection";
import SymptomsSection from "@/components/SymptomsSection";

import TestimonialFooter from "@/components/TestimonialFooter";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CovidResultsSection />
      <WhyVaccinateSection />
      <RegistrationSection />
      <SymptomsSection />
      <TestimonialFooter />
      
    </div>
  );
};

export default Index;
