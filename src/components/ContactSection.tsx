import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      toast.success("تم إرسال رسالتك بنجاح!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-custom-lg animate-fade-in">
          <CardHeader className="bg-gradient-hero text-primary-foreground">
            <CardTitle className="text-2xl text-center">أرسل لنا رسالة</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="الاسم" />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني"/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهاتف"/>
                <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="الموضوع"/>
              </div>

              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="اكتب رسالتك هنا..." rows={6}/>
              
              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-hero text-lg h-12">
                {isLoading ? "جاري الإرسال..." : <>إرسال الرسالة <Send className="mr-2 w-5 h-5" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
