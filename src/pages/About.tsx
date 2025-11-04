import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "رؤيتنا",
      description: "أن نكون الخيار الأول للشحن والخدمات اللوجستية في المنطقة",
    },
    {
      icon: Award,
      title: "قيمنا",
      description: "الاحترافية، الأمانة، السرعة، والجودة في كل ما نقدمه",
    },
    {
      icon: TrendingUp,
      title: "هدفنا",
      description: "تقديم حلول لوجستية مبتكرة تتجاوز توقعات عملائنا",
    },
  ];

  const stats = [
    { number: "15+", label: "سنة خبرة" },
    { number: "50K+", label: "شحنة ناجحة" },
    { number: "200+", label: "دولة نصل إليها" },
    { number: "98%", label: "رضا العملاء" },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            من نحن
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            شريكك الموثوق في حلول الشحن والخدمات اللوجستية المتكاملة
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 shadow-custom-md animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">قصتنا</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    تأسست شركة شحن سريع عام 2009 برؤية واضحة: تقديم خدمات شحن ولوجستيات عالمية
                    المستوى للشركات والأفراد في المنطقة. على مدى أكثر من 15 عامًا، نمت الشركة
                    لتصبح واحدة من أبرز مزودي خدمات الشحن في المنطقة.
                  </p>
                  <p className="text-lg leading-relaxed">
                    نحن نفخر بشبكتنا العالمية التي تمتد عبر أكثر من 200 دولة، وفريقنا المتخصص
                    الذي يعمل على مدار الساعة لضمان وصول شحناتك بأمان وفي الوقت المحدد. نستخدم
                    أحدث التقنيات في التتبع والإدارة اللوجستية لضمان الشفافية والكفاءة في كل
                    مرحلة من مراحل الشحن.
                  </p>
                  <p className="text-lg leading-relaxed">
                    سواء كنت تبحث عن شحن جوي سريع، أو شحن بحري اقتصادي، أو شحن بري محلي، أو حلول
                    لوجستية متكاملة، فإن شحن سريع هي شريكك الموثوق لتلبية جميع احتياجاتك.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center shadow-custom-md hover:shadow-custom-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-hero border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                انضم إلى آلاف العملاء الراضين
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                ابدأ الشحن معنا اليوم واستمتع بتجربة لوجستية استثنائية
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
