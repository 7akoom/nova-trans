import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmployees } from "@/hooks/useEmployees";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { API_BASE_URL } from "@/config/api.config";

const TeamSection = () => {
  const { language, t } = useLanguage();
  const { employees, loading, error } = useEmployees();

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("ourTeam")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("ourTeamDesc")}
          </p>
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <p className="text-center text-red-500">{t("loadingError")}</p>
        ) : (
          <Swiper
            key={language}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{ 
              640: { slidesPerView: 2 }, 
              1024: { slidesPerView: 4 } 
            }}
            loop
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {employees.map((member) => (
              <SwiperSlide key={member.id}>
                <div 
                  className="rounded-xl p-[2px] hover:shadow-custom-lg transition-all duration-300" 
                  style={{ background: "linear-gradient(135deg, #4d7fff, #cc0000)" }}
                >
                  <div className="bg-card rounded-xl p-6 text-center shadow-custom-md">
                    <img
                      src={`${API_BASE_URL}/${member.image}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-32 h-32 mx-auto rounded-full object-contain mb-4 shadow-md"
                    />
                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold">
                      {language === "ar" ? member.ar_position : member.en_position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default TeamSection;