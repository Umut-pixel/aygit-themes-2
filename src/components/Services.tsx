"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Globe, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştiriyoruz. React, Next.js ve TypeScript teknolojileri ile.",
      badge: "Frontend",
      color: "bg-blue-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Sistemleri",
      description: "Güçlü ve ölçeklenebilir backend sistemleri. Node.js, Python ve veritabanı yönetimi.",
      badge: "Backend",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobil Uygulama",
      description: "iOS ve Android için native mobil uygulamalar. React Native ile cross-platform çözümler.",
      badge: "Mobile",
      color: "bg-purple-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-Ticaret Çözümleri",
      description: "Tam özellikli e-ticaret platformları. Ödeme sistemleri ve stok yönetimi.",
      badge: "E-Commerce",
      color: "bg-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Güvenlik Danışmanlığı",
      description: "Siber güvenlik çözümleri ve güvenlik denetimleri. Veri koruma ve şifreleme.",
      badge: "Security",
      color: "bg-red-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "DevOps & Cloud",
      description: "AWS, Azure ve Google Cloud çözümleri. CI/CD pipeline'ları ve container teknolojileri.",
      badge: "DevOps",
      color: "bg-indigo-500"
    }
  ];

  // Scroll animation for section header
  const headerRef = useScrollAnimation({
    stagger: 0.1,
    y: 50,
    duration: 0.6,
    trigger: "top 85%"
  });

  // Scroll animation for service cards
  const cardsRef = useScrollAnimation({
    stagger: 0.1,
    y: 100,
    duration: 0.8,
    trigger: "top 80%"
  });

  return (
    <section id="cozumlerimiz" className="w-full py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <div data-animate>
            <Badge variant="secondary" className="mb-4">Hizmetlerimiz</Badge>
          </div>
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teknoloji Çözümlerimiz
            </h2>
          </div>
          <div data-animate>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern teknolojiler ile işinizi büyütün. Her sektör için özel çözümler sunuyoruz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-animate>
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="outline">{service.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
