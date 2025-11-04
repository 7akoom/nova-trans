import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/nova-logo.png";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground mt-20" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity pt-2 pb-2">
                  <img
                    src={logo}
                    alt="nova-logistics-logo"
                    className="w-20 h-20 object-contain"
                  />
                </Link>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {language === "ar" 
                ? "شريكك الموثوق في حلول الشحن والخدمات اللوجستية المتكاملة"
                : "Your trusted partner for comprehensive shipping and logistics solutions"
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">
              {language === "ar" ? "خدماتنا" : "Our Services"}
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">{t("airShipping")}</li>
              <li className="text-sm text-primary-foreground/80">{t("seaShipping")}</li>
              <li className="text-sm text-primary-foreground/80">{t("landShipping")}</li>
              <li className="text-sm text-primary-foreground/80">{t("logistics")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              {language === "ar" ? "اتصل بنا" : "Contact Us"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+963 996027503</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@novatrans.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>
                  {language === "ar" 
                    ? "اللاذقية، سوريا"
                    : "Lattakia, Syria"
                  }
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-gradient-accent rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-gradient-accent rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            {language === "ar" 
              ? "© 2025 Nova trans. جميع الحقوق محفوظة."
              : "© 2025 Nova trans. All rights reserved."
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
