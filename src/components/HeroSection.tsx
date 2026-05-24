import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const VIDEOS = [
  {
    webm: "/videos/v1.webm",
    mp4: "/videos/v1.mp4",
  },
  {
    webm: "/videos/v2.webm",
    mp4: "/videos/v2.mp4",
  },
  {
    webm: "/videos/v3.webm",
    mp4: "/videos/v3.mp4",
  },
  {
    webm: "/videos/v4.webm",
    mp4: "/videos/v4.mp4",
  },
];

const VIDEO_INTERVAL = 6000;

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, VIDEO_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentVideoSrc = VIDEOS[currentVideo];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <video
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-opacity duration-700"
        >
          <source src={currentVideoSrc.webm} type="video/webm" />
          <source src={currentVideoSrc.mp4} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            {t("heroTitle")}
            <span className="text-gradient-accent">
              {" "}
              {t("heroTitleHighlight")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            {t("heroSubtitle")}
          </p>

          <Link to="/services">
            <Button size="lg" className="bg-accent hover:opacity-90 text-lg px-8">
              {t("expolre")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;