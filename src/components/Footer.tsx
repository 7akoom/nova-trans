import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/nova-logo.png";
import { API_BASE_URL } from "@/config/api.config";

const Footer = () => {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/settings`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success" && data.data.length > 0) {
          setSettings(data.data[0]);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-12">جار التحميل...</div>;
  if (!settings) return null;

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
                <span dir="rtl">{settings.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>{settings.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>
                  {language === "ar" ? settings.ar_address : settings.en_address}
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 hover:bg-gradient-accent rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              
              <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 hover:bg-gradient-accent rounded-lg flex items-center justify-center transition-colors">
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
