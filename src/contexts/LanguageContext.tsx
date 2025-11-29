import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navbar
    home: "الرئيسية",
    services: "الخدمات",
    // tracking: "تتبع الشحنة",
    about: "من نحن",
    contact: "اتصل بنا",
    expolre: "اكتشف المزيد",
    getQuote: "اطلب عرض سعر",
    
    // Hero
    heroTitle: "حلول الشحن والخدمات اللوجستية",
    heroTitleHighlight: "المتكاملة",
    heroSubtitle: "نوفر لك خدمات شحن عالمية احترافية عبر الجو والبحر والبر",
    trackShipment: "تتبع شحنتك",
    
    // Services
    airShipping: "الشحن الجوي",
    airShippingDesc: "شحن سريع وآمن عبر أفضل شركات الطيران العالمية",
    seaShipping: "الشحن البحري",
    seaShippingDesc: "حلول اقتصادية للشحنات الكبيرة والحاويات",
    landShipping: "الشحن البري",
    landShippingDesc: "أسطول حديث لتوصيل محلي وإقليمي سريع وموثوق",
    logistics: "الخدمات اللوجستية",
    logisticsDesc: "إدارة متكاملة لسلسلة التوريد والتخزين بأحدث الطرق ",
    ourServices: "خدماتنا",
    ourServicesDesc: "نقدم مجموعة شاملة من حلول الشحن والخدمات اللوجستية لتلبية احتياجاتك",
    servicesTitle: "خدماتنا المتكاملة",
    subtitle: "نوفر لك مجموعة شاملة من حلول الشحن والخدمات اللوجستية لتلبية جميع احتياجاتك",
    
    // Features
    whyUs: "لماذا نحن؟",
    whyUsDesc: "نتميز بالجودة والاحترافية في تقديم خدماتنا",
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc: "التزام بمواعيد التسليم المحددة",
    secureShipping: "شحن آمن",
    secureShippingDesc: "تأمين شامل على جميع الشحنات",
    globalCoverage: "تغطية عالمية",
    globalCoverageDesc: "نصل إلى أكثر من 200 دولة حول العالم",
    
    // CTA
    readyToStart: "هل أنت مستعد للبدء؟",
    readyToStartDesc: "تواصل معنا الآن واحصل على عرض سعر مخصص لاحتياجاتك",
    contactUs: "تواصل معنا",
    
    // Common
    learnMore: "اعرف المزيد",
    submit: "إرسال",
    companyName: "شحن سريع",

    // Team
    ourTeam: "فريق عمل محترف",
    ourTeamDesc: "لدينا فريق متخصص بخبرة عالمية في الشحن اللوجستي وإدارة العمليات.",
    ceo: "المدير التنفيذي",
    operationsManager: "مدير العمليات",
    logisticsSupervisor: "مشرف اللوجستيات",

    // Contact Page
    contactUsDesc: "نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن",
    sendMessage: "أرسل لنا رسالة",
    callUs: "اتصل بنا",
    emailUs: "راسلنا",
    visitUs: "زورنا",
    fillRequired: "الرجاء ملء جميع الحقول المطلوبة",
    sending: "جاري الإرسال...",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا...",
    workingHoursTitle: "ساعات العمل",
    workingHours: "السبت - الخميس: 8:00 صباحًا - 6:00 مساءً|الجمعة: مغلق|خدمة العملاء متوفرة 24/7",
    loading: "جار التحميل...",

    aboutTitle: "من نحن",
    loadingError: "حدث خطأ في التحميل",

    servicesNotFound: "لم تجد ما تبحث عنه؟",
    servicesNotFoundDesc: "تواصل معنا وسنوفر لك حلول مخصصة تناسب احتياجاتك",
    ourClients: "عملاؤنا",
    clientsDesc: "موثوق بنا من قبل كبرى الشركات حول العالم",

  },
  en: {
    // Navbar
    home: "Home",
    services: "Services",
    tracking: "Tracking",
    about: "About Us",
    contact: "Contact",
    expolre: "Explore more",
    getQuote: "Get quote",
    
    // Hero
    heroTitle: "Comprehensive Shipping and",
    heroTitleHighlight: "Logistics Solutions",
    heroSubtitle: "We provide professional global shipping services by air, sea, and land",
    trackShipment: "Track Your Shipment",
    
    // Services
    airShipping: "Air Shipping",
    airShippingDesc: "Fast and secure shipping via the best airlines worldwide",
    seaShipping: "Sea Shipping",
    seaShippingDesc: "Economical solutions for large shipments and containers",
    landShipping: "Land Shipping",
    landShippingDesc: "Fast and reliable local and regional delivery",
    logistics: "Logistics Services",
    logisticsDesc: "Comprehensive supply chain and storage management",
    ourServices: "Our Services",
    ourServicesDesc: "We offer a comprehensive range of shipping and logistics solutions to meet your needs",
    servicesTitle: "Our integrated services",
    subtitle: "We provide you with a comprehensive range of shipping and logistics solutions to meet all your needs",
    
    // Features
    whyUs: "Why Choose Us?",
    whyUsDesc: "We excel in quality and professionalism in delivering our services",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Commitment to specified delivery times",
    secureShipping: "Secure Shipping",
    secureShippingDesc: "Comprehensive insurance on all shipments",
    globalCoverage: "Global Coverage",
    globalCoverageDesc: "We reach over 200 countries worldwide",
    
    // CTA
    readyToStart: "Ready to Get Started?",
    readyToStartDesc: "Contact us now and get a customized quote for your needs",
    contactUs: "Contact Us",
    
    // Common
    learnMore: "Learn More",
    submit: "Submit",
    companyName: "Fast Shipping",

    // Team
    ourTeam: "Professional Team",
    ourTeamDesc: "We have a specialized team with global experience in logistics shipping and operations management.",
    ceo: "Chief Executive Officer",
    operationsManager: "Operations Manager",
    logisticsSupervisor: "Logistics Supervisor",

    // Contact Page
    contactUsDesc: "We are here to help you. Contact us and we will respond as soon as possible",
    sendMessage: "Send Us a Message",
    callUs: "Call Us",
    emailUs: "Email Us",
    visitUs: "Visit Us",
    fillRequired: "Please fill all required fields",
    sending: "Sending...",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    workingHoursTitle: "Working Hours",
    workingHours: "Sat - Thu: 8:00 AM - 6:00 PM|Fri: Closed|Customer service available 24/7",
    loading: "Loading...",

    aboutTitle: "About Us",
    loadingError: "Loading error",
    servicesNotFound: "Didn't find what you're looking for?",
    servicesNotFoundDesc: "Contact us and we will provide you with customized solutions that suit your needs",

    ourClients: "Our Clients",
    clientsDesc: "Trusted by top companies around the world",

  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "font-arabic" : "font-english"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
