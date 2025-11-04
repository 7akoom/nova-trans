import { Plane, Ship, Truck, Package, Check } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import s1 from "@/assets/air.jpg";
import s2 from "@/assets/sea.png";
import s3 from "@/assets/land.jpg";
import s4 from "@/assets/s4.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Services = () => {
  const { t, language } = useLanguage();

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#",""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [hash]);

  const title = t("ourServices");
  const subtitle = t("subtitle");

  const services = [
    { id: "air", icon: Plane, title: t("airShipping"), description: t("airShippingDesc"), features: [t("fastDeliveryDesc"), "تتبع مباشر للشحنات", "تأمين شامل على البضائع", "تخليص جمركي سريع", "شبكة عالمية من الوجهات"], image: s1 },
    { id: "sea", icon: Ship, title: t("seaShipping"), description: t("seaShippingDesc"), features: ["أسعار تنافسية للشحنات الكبيرة", "شحن FCL و LCL", "إدارة الحاويات", "تخزين مؤقت في الموانئ", "تأمين على البضائع"], image: s2 },
    { id: "land", icon: Truck, title: t("landShipping"), description: t("landShippingDesc"), features: ["توصيل من الباب للباب", "شحن محلي وإقليمي", "أسطول حديث من الشاحنات", "مرونة في المواعيد", "خدمة عملاء 24/7"], image: s3 },
    { id: "logistics", icon: Package, title: t("logistics"), description: t("logisticsDesc"), features: ["إدارة المخزون", "التخزين والتوزيع", "تخطيط سلسلة التوريد", "خدمات التعبئة والتغليف", "حلول مخصصة للشركات"], image: s4 },
  ];

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">{title}</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {subtitle || "نوفر لك مجموعة شاملة من حلول الشحن والخدمات اللوجستية لتلبية جميع احتياجاتك"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, index) => {
            const shouldReverse = language === "ar" ? index % 2 === 1 : index % 2 === 0;

            return (
              <motion.div
                key={index}
                id={service.id} 
                className={`flex flex-col md:flex-row items-center gap-8 ${shouldReverse ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className="md:w-1/2 p-[3px] rounded-lg flex justify-center"
                  style={{
                    background: "linear-gradient(135deg, #ff4d4f, #ff7f50)"
                  }}
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-[800px] h-[330px] rounded-lg shadow-lg object-cover"
                  />
                </motion.div>


                {/* Card */}
                <motion.div
                  className="md:w-1/2"
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-blue-600 text-white">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                      <p className="mb-4 text-white/90">{service.description}</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-white" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                لم تجد ما تبحث عنه؟
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                تواصل معنا وسنوفر لك حلول مخصصة تناسب احتياجاتك
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

      <Footer />
    </div>
  );
};

export default Services;
