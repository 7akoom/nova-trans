import { useMemo } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ServiceCTA from "@/components/ServiceCTA";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServices } from "@/hooks/useServices";
import { useHashScroll } from "@/hooks/useHashScroll";
import { ICON_MAP } from "@/constants/services.constants";
import heroImage from "@/assets/hero-logistic.jpeg";

const Services = () => {
  const { t, language } = useLanguage();
  const { services, loading, error } = useServices();
  
  useHashScroll();

  const processedServices = useMemo(() => {
    return services.map((service, index) => ({
      id: service.id,
      title: language === "ar" ? service.ar_name : service.en_name,
      description: language === "ar" ? service.ar_title : service.en_title,
      icon: service.icon,
      features: service.features,
      IconComponent: ICON_MAP[service.id as keyof typeof ICON_MAP] || Check,
      shouldReverse: language === "ar" ? index % 2 === 1 : index % 2 === 0,
    }));
  }, [services, language]);

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <img
          src={heroImage}
          alt="Services Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("ourServices")}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {loading ? (
            <div className="space-y-8">
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{t("loadingError")}</p>
          ) : (
            processedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                language={language}
                IconComponent={service.IconComponent}
                index={index}
                shouldReverse={service.shouldReverse}
              />
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA />

      <Footer />
    </div>
  );
};

export default Services;