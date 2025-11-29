import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICE_CTA_CONFIG } from "@/constants/services.constants";

const ServiceCTA = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-hero border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              {SERVICE_CTA_CONFIG.titleKey[language]}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {SERVICE_CTA_CONFIG.descKey[language]}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t("contactUs")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceCTA;