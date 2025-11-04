import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { ContactForm } from "@/types/shipping";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // TODO: Replace with actual API call
      console.log("Contact form submitted:", formData);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      content: "503 027 996 963+",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "راسلنا",
      content: "info@novatrans.com",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "زورنا",
      content: "الرياض، المملكة العربية السعودية",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              تواصل معنا
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-custom-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader className="bg-gradient-hero text-primary-foreground">
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        الاسم <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        البريد الإلكتروني <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        رقم الهاتف
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        الموضوع
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="موضوع الرسالة"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      الرسالة <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-hero hover:opacity-90 text-lg h-12"
                  >
                    {isLoading ? (
                      "جاري الإرسال..."
                    ) : (
                      <>
                        إرسال الرسالة
                        <Send className="mr-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="max-w-3xl mx-auto mt-8 bg-muted/30 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">ساعات العمل</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>السبت - الخميس: 8:00 صباحًا - 6:00 مساءً</p>
                <p>الجمعة: مغلق</p>
                <p className="text-primary font-medium mt-4">خدمة العملاء متوفرة 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
