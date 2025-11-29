import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { API_BASE_URL } from "@/config/api.config";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error(t("fillRequired"));
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(t("submit") + " " + t("success") || "تم الإرسال!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      toast.error(data.message || "حدث خطأ، حاول مرة أخرى");
    }
  } catch (error) {
    console.error(error);
    toast.error("حدث خطأ، حاول مرة أخرى");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-custom-lg animate-fade-in">
          <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-xl">
            <CardTitle className="text-2xl text-center">{t("sendMessage")}</CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("name")}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("email")}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("phone")}
                />
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("subject")}
                />
              </div>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("messagePlaceholder")}
                rows={6}
                required
              />
              
              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-hero text-lg h-12">
                {isLoading ? t("sending") : (
                  <>
                    {t("submit")} <Send className="mr-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
