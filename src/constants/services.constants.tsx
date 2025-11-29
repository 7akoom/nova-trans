import { Plane, Ship, Truck, Package } from "lucide-react";

export const ICON_MAP = {
  air: Plane,
  sea: Ship,
  land: Truck,
  logistics: Package,
};

export const SERVICE_CTA_CONFIG = {
  titleKey: { ar: "لم تجد ما تبحث عنه؟", en: "Didn't find what you're looking for?" },
  descKey: { 
    ar: "تواصل معنا وسنوفر لك حلول مخصصة تناسب احتياجاتك",
    en: "Contact us and we will provide you with customized solutions that suit your needs"
  },
};

import { Clock, Shield, Globe } from "lucide-react";

export const HOME_FEATURES_CONFIG = [
  { 
    icon: Clock, 
    titleKey: "fastDelivery", 
    descKey: "fastDeliveryDesc" 
  },
  { 
    icon: Shield, 
    titleKey: "secureShipping", 
    descKey: "secureShippingDesc" 
  },
  { 
    icon: Globe, 
    titleKey: "globalCoverage", 
    descKey: "globalCoverageDesc" 
  },
];