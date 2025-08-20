"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Database, 
  Code,
  TrendingUp,
  Users,
  Clock,
  Award
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Hızlı Geliştirme",
      description: "Modern teknolojiler ile hızlı ve etkili çözümler geliştiriyoruz.",
      color: "bg-yellow-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Güvenli Altyapı",
      description: "En son güvenlik standartları ile korunan sistemler.",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünüm ve performans.",
      color: "bg-blue-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Erişim",
      description: "Dünya çapında erişilebilir ve ölçeklenebilir çözümler.",
      color: "bg-purple-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Veri Yönetimi",
      description: "Güvenli ve etkili veri yönetimi çözümleri.",
      color: "bg-orange-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Temiz Kod",
      description: "Sürdürülebilir ve okunabilir kod yapısı.",
      color: "bg-red-500"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "İş Büyümesi",
      description: "Dijital çözümlerle işinizi %300'e kadar büyütün"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Müşteri Memnuniyeti",
      description: "%99 müşteri memnuniyeti oranı"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hızlı Teslimat",
      description: "Projelerinizi 2-4 hafta içinde teslim ediyoruz"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Kalite Garantisi",
      description: "Tüm projelerde %100 kalite garantisi"
    }
  ];

  // Scroll animation for section header
  const headerRef = useScrollAnimation({
    stagger: 0.1,
    y: 50,
    duration: 0.6,
    trigger: "top 85%"
  });

  // Scroll animation for feature cards
  const featuresRef = useScrollAnimation({
    stagger: 0.1,
    y: 100,
    duration: 0.8,
    trigger: "top 80%"
  });

  // Scroll animation for benefit cards
  const benefitsRef = useScrollAnimation({
    stagger: 0.1,
    y: 100,
    duration: 0.8,
    trigger: "top 80%"
  });

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <div data-animate>
            <Badge variant="secondary" className="mb-4">Özellikler</Badge>
          </div>
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
          </div>
          <div data-animate>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern teknolojiler ve uzman ekibimiz ile işinizi dijital dünyada 
              bir adım öne taşıyoruz.
            </p>
          </div>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="features">Özelliklerimiz</TabsTrigger>
            <TabsTrigger value="benefits">Avantajlarımız</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featuresRef}>
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-animate>
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={benefitsRef}>
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300" data-animate>
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {benefit.icon}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-lg">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Başarı Hikayelerimiz
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  150+ başarılı proje ile müşterilerimizin dijital dönüşümüne 
                  öncülük ettik. Siz de başarı hikayemizin bir parçası olun.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">Başarı Oranı</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
