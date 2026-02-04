import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamPhotosSection from "@/components/TeamPhotosSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TeamPhotosSection />
      <QuoteSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;