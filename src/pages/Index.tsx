import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Package, Clock, Shield, Globe, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import vid1 from "@/assets/v1.mov";
import vid2 from "@/assets/v2.mov";
import vid3 from "@/assets/v3.mp4";
import vid4 from "@/assets/v4.mov";

import s1 from "@/assets/air.jpg";
import s2 from "@/assets/sea.png";
import s3 from "@/assets/land.jpg";
import s4 from "@/assets/s4.jpg";

import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team2.jpg";
import team4 from "@/assets/team1.png";
import team5 from "@/assets/team1.png";

import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import logo6 from "@/assets/logo6.png";
import logo7 from "@/assets/logo7.png";
import logo8 from "@/assets/logo8.png";

import ContactSection from "@/components/ContactSection";

const Index = () => {
  const { t, language } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);

  const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const services = [
    { id: "air", icon: Plane, title: t("airShipping"), description: t("airShippingDesc"), image: s1 },
    { id: "sea", icon: Ship, title: t("seaShipping"), description: t("seaShippingDesc"), image: s2 },
    { id: "land", icon: Truck, title: t("landShipping"), description: t("landShippingDesc"), image: s3 },
    { id: "logistics", icon: Package, title: t("logistics"), description: t("logisticsDesc"), image: s4 },
  ];

  const features = [
    { icon: Clock, title: t("fastDelivery"), description: t("fastDeliveryDesc") },
    { icon: Shield, title: t("secureShipping"), description: t("secureShippingDesc") },
    { icon: Globe, title: t("globalCoverage"), description: t("globalCoverageDesc") },
  ];

  const videos = [vid1, vid2, vid3, vid4];

  const team = [
    { name: "Ahmed Ali", position: t("ceo"), image: team1 },
    { name: "Sarah Hassan", position: t("operationsManager"), image: team2 },
    { name: "Mohammed Omar", position: t("logisticsSupervisor"), image: team3 },
    { name: "Yousef Khaled", position: t("operationsManager"), image: team4 },
    { name: "Hkmt Ali", position: t("operationsManager"), image: team5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 pb-20 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <video key={currentVideo} autoPlay loop muted playsInline className="w-full h-full object-cover transition-opacity duration-700">
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
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">{t("heroSubtitle")}</p>
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:opacity-90 text-lg px-8">
                {t("expolre")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("ourServices")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ourServicesDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl p-[2px] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, background: "linear-gradient(135deg, #4d7fff, #cc0000)" }}
              >
                <Card className="bg-card rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transform hover:scale-105 transition-all duration-300 border-none">
                  <CardContent className="p-0 text-center">
                    <img src={service.image} alt={service.title} className="w-full h-32 mx-auto mb-4 rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("whyUs")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("whyUsDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
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

      {/* TEAM */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("ourTeam")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ourTeamDesc")}</p>
          </div>

          <Swiper
            key={language} // ← مهم جداً لإعادة إنشاء الـ Swiper عند تغير اللغة
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
            loop
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {team.map((m, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl p-[2px] hover:shadow-custom-lg transition-all duration-300" style={{ background: "linear-gradient(135deg, #4d7fff, #cc0000)" }}>
                  <div className="bg-card rounded-xl p-6 text-center shadow-custom-md">
                    <img src={m.image} alt={m.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md" />
                    <h3 className="text-xl font-bold mb-1 text-foreground">{m.name}</h3>
                    <p className="text-accent font-semibold">{m.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-5 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Clients</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Trusted by top companies around the world</p>
          </div>

          {/* Row 1 */}
          <Swiper
            key={`row1-${language}`}
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
            speed={3000}
            dir={language === "ar" ? "rtl" : "ltr"}
            className="mb-6"
            breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 4 } }}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl p-[2px] flex items-center justify-center transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #4d7fff, #0741a2)" }}>
                  <div className="bg-card rounded-xl p-4 flex items-center justify-center shadow-md">
                    <img src={logo} alt={`Client ${index}`} className="h-16 object-contain" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2 */}
          <Swiper
            key={`row2-${language}`}
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            speed={3000}
            dir={language === "ar" ? "rtl" : "ltr"}
            breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 4 } }}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl p-[2px] flex items-center justify-center transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #4d7fff, #0741a2)" }}>
                  <div className="bg-card rounded-xl p-4 flex items-center justify-center shadow-md">
                    <img src={logo} alt={`Client ${index}`} className="h-16 object-contain" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
