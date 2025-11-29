import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useLanguage } from "@/contexts/LanguageContext";
import { useClients } from "@/hooks/useClients";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { API_BASE_URL } from "@/config/api.config";

const ClientsSection = () => {
  const { language, t } = useLanguage();
  const { clients, loading, error } = useClients();

  if (loading) {
    return (
      <section className="py-5 bg-muted/10">
        <div className="container mx-auto px-4">
          <LoadingSkeleton />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5 bg-muted/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{t("loadingError")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {language === "ar" ? "عملاؤنا" : "Our Clients"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "ar" 
              ? "موثوق بنا من قبل كبرى الشركات حول العالم" 
              : "Trusted by top companies around the world"}
          </p>
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
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div 
                className="rounded-xl p-[2px] flex items-center justify-center transition-all duration-300 hover:shadow-lg" 
                style={{ background: "linear-gradient(135deg, #4d7fff, #0741a2)" }}
              >
                <div className="bg-card rounded-xl p-4 flex items-center justify-center shadow-md">
                  <img 
                    src={`${API_BASE_URL}/${client.logo}`} 
                    alt={client.name} 
                    loading="lazy"
                    className="h-16 object-contain" 
                  />
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
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div 
                className="rounded-xl p-[2px] flex items-center justify-center transition-all duration-300 hover:shadow-lg" 
                style={{ background: "linear-gradient(135deg, #4d7fff, #0741a2)" }}
              >
                <div className="bg-card rounded-xl p-4 flex items-center justify-center shadow-md">
                  <img 
                    src={`${API_BASE_URL}/${client.logo}`} 
                    alt={client.name} 
                    loading="lazy"
                    className="h-16 object-contain" 
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;