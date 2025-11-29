import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactInfoCard from "@/components/ContactInfoCard";
import WorkingHours from "@/components/WorkingHours";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSettings } from "@/hooks/useSettings";
import { CONTACT_INFO_CONFIG } from "@/constants/contact.constants";
import heroImage from "@/assets/contact.jpg";

const Contact = () => {
  const { language, t } = useLanguage();
  const { settings, loading, error } = useSettings();

  const contactInfo = useMemo(() => {
    if (!settings) return [];

    return CONTACT_INFO_CONFIG.map((config) => ({
      ...config,
      title: t(config.titleKey),
      content: config.contentKey === "address"
        ? (language === "ar" ? settings.ar_address : settings.en_address)
        : settings[config.contentKey as keyof typeof settings] as string,
    }));
  }, [settings, language, t]);

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Us"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative container mx-auto px-4 text-center animate-fade-in z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("contactUs")}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t("contactUsDesc")}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {loading ? (
              <div className="col-span-3">
                <LoadingSkeleton />
              </div>
            ) : error ? (
              <p className="text-center col-span-3 text-red-500">
                {t("loadingError")}
              </p>
            ) : (
              contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                  gradient={info.gradient}
                  index={index}
                />
              ))
            )}
          </div>

          {/* Contact Form Section */}
          <ContactSection />

          {/* Google Map Section with Working Hours */}
          <div className="relative mt-12 w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.241588266352!2d35.76717487462954!3d35.54773523729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526afbe24aa5397%3A0x6c7aaa1f8b417bfa!2ssoul%20cafe!5e0!3m2!1sen!2siq!4v1764365209113!5m2!1sen!2siq"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>

            <WorkingHours />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;