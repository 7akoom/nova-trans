import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HomeServicesGrid from "@/components/HomeServicesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("ourServices")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("ourServicesDesc")}
            </p>
          </div>
          <HomeServicesGrid />
        </div>
      </section>

      <FeaturesSection />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;