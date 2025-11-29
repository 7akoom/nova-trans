import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  gradient: string;
  index: number;
}

const ContactInfoCard = ({ icon: Icon, title, content, gradient, index }: ContactInfoCardProps) => {
  return (
    <Card
      className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-8">
        <div
          className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;