import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSettings } from "@/hooks/useSettings";
import { VALUES_CONFIG, STATS_CONFIG } from "@/constants/about.constants";
import heroImage from "@/assets/about-us.jpg";

const About = () => {
  const { language, t } = useLanguage();
  const { settings, loading, error } = useSettings();

  const aboutText = useMemo(() => {
    if (!settings) return "";
    return language === "ar" ? settings.ar_about_us : settings.en_about_us;
  }, [settings, language]);

  const values = useMemo(() => 
    VALUES_CONFIG.map(v => ({
      ...v,
      title: v.titleKey[language],
      description: v.descKey[language]
    })), 
    [language]
  );

  const stats = useMemo(() => 
    STATS_CONFIG.map(s => ({
      number: s.number,
      label: s.labelKey[language]
    })), 
    [language]
  );

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <img
          src={heroImage}
          alt="About us"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>

        <div className="relative container mx-auto px-4 text-center animate-fade-in z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('aboutTitle')}
          </h1>
          
          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <p className="text-red-400 text-lg">{t('loadingError')}</p>
          ) : (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {aboutText}
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;