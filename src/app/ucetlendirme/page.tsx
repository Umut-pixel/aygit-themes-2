import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Başlangıç",
      price: "₺999",
      period: "/ay",
      description: "Küçük işletmeler için ideal başlangıç paketi",
      features: [
        "Temel yazılım geliştirme",
        "5 sayfalık web sitesi",
        "Özel E-Posta alanı",
        "1 Ay ücretsiz bakım",
        "Tüm platformlara uyumlu tasarım",
      ],
      popular: false
    },
    {
      name: "Profesyonel",
      price: "₺2,499",
      period: "/ay",
      description: "Büyüyen işletmeler için kapsamlı çözüm",
      features: [
        "Gelişmiş yazılım geliştirme hizmetleri",
        "15 sayfa web sitesi",
        "Öncelikli E-Posta desteği",
        "3 ay ücretsiz bakım",
        "SEO optimizasyonlu Web siteleri",
        "Google Analytics entegrasyonu",
        "Özel tasarım"
      ],
      popular: true
    },
    {
      name: "Kurumsal",
      price: "₺4,999",
      period: "/ay",
      description: "Büyük şirketler için özel çözümler",
      features: [
        "Özel yazılım geliştirme",
        "Sınırsız sayfa",
        "7/24 telefon desteği",
        "6 ay ücretsiz bakım",
        "Gelişmiş SEO",
        "CRM entegrasyonu",
        "Özel API geliştirme",
        "Güvenlik sertifikası"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Bölümü */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Fiyatlandırma
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            İhtiyaçlarınıza Uygun
            <span className="text-primary"> Fiyatlandırma</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özelleştirilmiş 
            yazılım çözümlerimizi keşfedin. Şeffaf fiyatlandırma ile 
            bütçenize uygun planı seçin.
          </p>
        </div>
      </div>

      {/* Fiyatlandırma */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      En Popüler
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {plan.popular ? 'Hemen Başla' : 'Planı Seç'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Sık Sorulan Sorular */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <p className="text-muted-foreground">
              Fiyatlandırma hakkında merak ettiğiniz soruların cevapları
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Ödeme nasıl yapılır?</h3>
                <p className="text-sm text-muted-foreground">
                  Aylık, 3 aylık veya yıllık ödeme seçeneklerimiz mevcuttur. 
                  Kredi kartı, banka havalesi veya EFT ile ödeme yapabilirsiniz.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Plan değişikliği yapabilir miyim?</h3>
                <p className="text-sm text-muted-foreground">
                  Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. 
                  Değişiklik bir sonraki fatura döneminde geçerli olur.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">İptal edebilir miyim?</h3>
                <p className="text-sm text-muted-foreground">
                  Evet, 30 gün içinde iade garantisi sunuyoruz. 
                  Dilediğiniz zaman aboneliğinizi iptal edebilirsiniz.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Özel fiyatlandırma var mı?</h3>
                <p className="text-sm text-muted-foreground">
                  Büyük projeler için özel fiyatlandırma seçeneklerimiz mevcuttur. 
                  Bizimle iletişime geçerek detayları öğrenebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">
                Hala Karar Veremediniz mi?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Uzman ekibimizle görüşerek ihtiyaçlarınıza en uygun çözümü 
                birlikte belirleyelim. Ücretsiz danışmanlık hizmetimizden yararlanın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ücretsiz Danışmanlık
                </Button>
                <Button variant="outline" size="lg">
                  Demo İste
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
