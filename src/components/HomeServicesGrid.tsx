import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServices } from "@/hooks/useServices";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { API_BASE_URL } from "@/config/api.config";

const HomeServicesGrid = () => {
  const { language, t } = useLanguage();
  const { services, loading, error } = useServices();

  if (loading) {
    return (
      <div className="space-y-4">
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{t("loadingError")}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="rounded-xl p-[2px] transition-all duration-300 animate-fade-in"
          style={{ 
            animationDelay: `${index * 100}ms`, 
            background: "linear-gradient(135deg, #4d7fff, #cc0000)" 
          }}
        >
          <Card className="bg-card rounded-xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transform hover:scale-105 transition-all duration-300 border-none">
            <CardContent className="p-0 text-center">
              <img
                src={`${API_BASE_URL}/${service.icon}`}
                alt={language === "ar" ? service.ar_name : service.en_name}
                loading="lazy"
                className="w-full h-48 mx-auto mb-4 rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />

              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {language === "ar" ? service.ar_name : service.en_name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "ar" ? service.ar_title : service.en_title}
              </p>

              <Link
                to={`/services#${service.id}`}
                className="text-accent font-semibold hover:underline mt-2 inline-block"
              >
                {language === "ar" ? "المزيد" : "Read more"}
              </Link>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomeServicesGrid;