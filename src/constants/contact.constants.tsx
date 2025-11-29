import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO_CONFIG = [
  {
    icon: Phone,
    titleKey: "callUs",
    contentKey: "phone",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    titleKey: "emailUs",
    contentKey: "email",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    titleKey: "visitUs",
    contentKey: "address",
    gradient: "from-blue-500 to-blue-600",
  },
];