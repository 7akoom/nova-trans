import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Package, Clock, Shield, Globe, ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import vid1 from "@/assets/v1.mov";
import vid2 from "@/assets/v2.mov";
import vid3 from "@/assets/v3.mp4";
import vid4 from "@/assets/v4.mov";
import s1 from "@/assets/air.jpg";
import s2 from "@/assets/sea.png";
import s3 from "@/assets/land.jpg";
import s4 from "@/assets/s4.jpg";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const { t, language } = useLanguage();
  const services = [
    {
    id: "air", 
    icon: Plane,
    title: t("airShipping"),
    description: t("airShippingDesc"),
    color: "text-blue-600",
    image: s1,
  },
    {
    id: "sea", 
    icon: Ship,
    title: t("seaShipping"),
    description: t("seaShippingDesc"),
    color: "text-cyan-600",
    image: s2,
  },
    {
    id: "land", 
    icon: Truck,
    title: t("landShipping"),
    description: t("landShippingDesc"),
    color: "text-green-600",
    image: s3,
  },
    {
    id: "logistics", 
    icon: Package,
    title: t("logistics"),
    description: t("logisticsDesc"),
    color: "text-orange-600",
    image: s4,
  },
];


  const features = [
    {
      icon: Clock,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
    },
    {
      icon: Shield,
      title: t("secureShipping"),
      description: t("secureShippingDesc"),
    },
    {
      icon: Globe,
      title: t("globalCoverage"),
      description: t("globalCoverageDesc"),
    },
  ];

  const videos = [
    vid1,
    vid2,
    vid3,
    vid4,
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <video
            key={currentVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-700"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              {t("heroTitle")}
              <span className="text-gradient-accent"> {t("heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:opacity-90 text-lg px-8">
                {t("getQuote")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("ourServices")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("ourServicesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-custom-lg transition-all duration-300 animate-fade-in border-border hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 mx-auto mb-4 rounded-lg object-cover shadow-lg"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>                  
                  <Link to={`/services#${service.id}`}>
                    <Button variant="link" className="mt-4 text-primary">
                      {t("learnMore")}
                      <ArrowLeft className={language === "ar" ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4 rotate-180"} />
                    </Button>
                  </Link>
                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("whyUs")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("whyUsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-custom-md">
                  <feature.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            {t("readyToStart")}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t("readyToStartDesc")}
          </p>
        </div>
      </section>
          <ContactSection /> 

      <Footer />
    </div>
  );
};

export default Index;
