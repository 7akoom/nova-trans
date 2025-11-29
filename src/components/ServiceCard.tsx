import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Check, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/config/api.config";

interface ServiceFeature {
  ar_feature: string;
  en_feature: string;
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  language: string;
  IconComponent: LucideIcon;
  index: number;
  shouldReverse: boolean;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  features,
  language,
  IconComponent,
  index,
  shouldReverse,
}: ServiceCardProps) => {
  return (
    <motion.div
      id={id}
      className={`flex flex-col md:flex-row items-center gap-8 ${shouldReverse ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.div
        className="md:w-1/2 p-[2px] rounded-lg flex justify-center"
        style={{ background: "linear-gradient(135deg, #4d7fff, #cc0000)" }}
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={`${API_BASE_URL}/${icon}`}
          alt={title}
          loading="lazy"
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
        <Card className="text-black">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <IconComponent className="bg-blue-900 w-16 h-16 rounded-lg text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </div>
            <p className="mb-4 text-black">{description}</p>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-900" />
                  <span>
                    {language === "ar" ? featureItem.ar_feature : featureItem.en_feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;