import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Target, 
  BarChart3, 
  CheckCircle, 
  Clock,
  FileText,
  Presentation,
  Shield
} from "lucide-react";

const PlanningPage = () => {
  const planningServices = [
    {
      title: "Proje Analizi",
      description: "İhtiyaçlarınızı detaylı analiz eder, hedeflerinizi belirler ve proje kapsamını çizeriz.",
      icon: Target,
      features: [
        "İhtiyaç analizi",
        "Hedef belirleme",
        "Kapsam tanımlama",
        "Risk değerlendirmesi",
        "Stakeholder analizi"
      ],
      duration: "1-2 hafta"
    },
    {
      title: "Teknik Tasarım",
      description: "Projenizin teknik mimarisini tasarlar, teknoloji stack'ini belirler ve sistem gereksinimlerini çıkarırız.",
      icon: FileText,
      features: [
        "Sistem mimarisi",
        "Teknoloji seçimi",
        "Veritabanı tasarımı",
        "API tasarımı",
        "Güvenlik planı"
      ],
      duration: "2-3 hafta"
    },
    {
      title: "Proje Planlaması",
      description: "Detaylı proje planı hazırlar, zaman çizelgesi oluşturur ve kaynak dağılımını yaparız.",
      icon: Calendar,
      features: [
        "Zaman çizelgesi",
        "Kaynak planlaması",
        "Bütçe planlaması",
        "Milestone belirleme",
        "Risk yönetimi"
      ],
      duration: "1 hafta"
    },
    {
      title: "UI/UX Tasarım",
      description: "Kullanıcı deneyimi odaklı tasarım yapar, wireframe'ler hazırlar ve prototipler oluştururuz.",
      icon: Presentation,
      features: [
        "Wireframe tasarımı",
        "UI/UX tasarımı",
        "Prototip oluşturma",
        "Kullanıcı testleri",
        "Tasarım sistemi"
      ],
      duration: "3-4 hafta"
    }
  ];

  const consultationTypes = [
    {
      title: "Ücretsiz İlk Görüşme",
      description: "Projenizi dinler, genel bir değerlendirme yapar ve öneriler sunarız.",
      duration: "30 dakika",
      price: "Ücretsiz",
      features: [
        "Proje değerlendirmesi",
        "Genel öneriler",
        "Teknoloji tavsiyeleri",
        "Rough maliyet tahmini"
      ],
      popular: false
    },
    {
      title: "Detaylı Analiz",
      description: "Kapsamlı proje analizi yapar, detaylı rapor hazırlar ve yol haritası çıkarırız.",
      duration: "2-3 saat",
      price: "₺1,500",
      features: [
        "Detaylı ihtiyaç analizi",
        "Teknik değerlendirme",
        "Rekabet analizi",
        "Detaylı rapor",
        "Yol haritası",
        "Maliyet analizi"
      ],
      popular: true
    },
    {
      title: "Sürekli Danışmanlık",
      description: "Projenizin tüm aşamalarında yanınızda olur, sürekli destek sağlarız.",
      duration: "Aylık",
      price: "₺5,000/ay",
      features: [
        "Haftalık görüşmeler",
        "Teknik danışmanlık",
        "Proje takibi",
        "Risk yönetimi",
        "Performans analizi",
        "Sürekli optimizasyon"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Zaman Tasarrufu",
      description: "Doğru planlama ile proje süresini %30'a kadar kısaltabilirsiniz.",
      icon: Clock
    },
    {
      title: "Maliyet Kontrolü",
      description: "Detaylı planlama ile bütçe sapmalarını minimize edersiniz.",
      icon: BarChart3
    },
    {
      title: "Risk Azaltma",
      description: "Erken risk tespiti ile proje başarısını artırırsınız.",
      icon: Shield
    },
    {
      title: "Kalite Artışı",
      description: "Planlı geliştirme ile daha kaliteli ürünler elde edersiniz.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero bölümü */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Planlama
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Stratejik
            <span className="text-primary"> Proje Planlama</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Projelerinizi başarıya ulaştıracak kapsamlı planlama ve danışmanlık 
            hizmetleri sunuyoruz.
          </p>
        </div>
      </div>

      
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planlama Hizmetlerimiz</h2>
            <p className="text-muted-foreground">
              Projenizin her aşamasında profesyonel planlama desteği
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                  <Badge variant="outline" className="w-fit">
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Danışmanlık Paketleri</h2>
            <p className="text-muted-foreground">
              İhtiyaçlarınıza uygun danışmanlık seçenekleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  consultation.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border'
                }`}
              >
                {consultation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      En Popüler
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{consultation.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {consultation.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{consultation.price}</span>
                    <span className="text-muted-foreground"> / {consultation.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      consultation.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {consultation.popular ? 'Hemen Başla' : 'Seç'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Fayda */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planlamanın Faydaları</h2>
            <p className="text-muted-foreground">
              Doğru planlama ile elde edeceğiniz avantajlar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA  */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">
                Projenizi Planlayalım
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Uzman ekibimizle projenizi planlayın ve başarıya ulaştırın. 
                Ücretsiz ilk görüşme için hemen iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ücretsiz Görüşme
                </Button>
                <Button variant="outline" size="lg">
                  Planlama Rehberi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
