import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteSection from "@/components/QuoteSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <QuoteSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;