import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HOME_FEATURES_CONFIG } from "@/constants/services.constants";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = useMemo(() => 
    HOME_FEATURES_CONFIG.map(f => ({
      icon: f.icon,
      title: t(f.titleKey),
      description: t(f.descKey)
    })), 
    [t]
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("whyUs")}
          </h2>
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
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;