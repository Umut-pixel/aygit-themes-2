"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aygıt ile çalışmak gerçekten harika bir deneyimdi. Projemizi zamanında ve bütçe dahilinde tamamladılar.",
      author: {
        name: "Ahmet Yılmaz",
        company: "TechCorp",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Uzman ekibiniz ve profesyonel yaklaşımınız sayesinde projemiz çok başarılı oldu.",
      author: {
        name: "Ayşe Demir",
        company: "InnovateLab",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Aygıt'ın yenilikçi çözümleri ve teknik uzmanlığı sayesinde işimizi büyüttük.",
      author: {
        name: "Mehmet Kaya",
        company: "StartupXYZ",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Mükemmel bir iş ortağı. Projelerimizi her zaman zamanında teslim ediyorlar.",
      author: {
        name: "Fatma Özkan",
        company: "DigitalFlow",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Teknik uzmanlıkları ve müşteri odaklı yaklaşımları ile fark yaratıyorlar.",
      author: {
        name: "Can Arslan",
        company: "TechVision",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Aygıt sayesinde dijital dönüşümümüzü başarıyla tamamladık.",
      author: {
        name: "Zeynep Korkmaz",
        company: "FutureTech",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Kaliteli hizmet ve uygun fiyat. Kesinlikle tavsiye ederim.",
      author: {
        name: "Burak Şahin",
        company: "SmartSolutions",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Profesyonel ekip ve mükemmel sonuçlar. Çok memnunuz.",
      author: {
        name: "Elif Yıldız",
        company: "InnovateHub",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Aygıt'ın çözümleri ile işimizi %300 büyüttük.",
      author: {
        name: "Deniz Özkan",
        company: "GrowthTech",
        avatar: "https://placehold.co/40x40"
      }
    },
    {
      text: "Teknik bilgi ve yaratıcılık mükemmel bir kombinasyon.",
      author: {
        name: "Kemal Demir",
        company: "CreativeLab",
        avatar: "https://placehold.co/40x40"
      }
    }
  ];

  
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  
  const headerRef = useScrollAnimation({
    stagger: 0.1,
    y: 50,
    duration: 0.6,
    trigger: "top 85%"
  });

  return (
    <section id="referanslarimiz" className="w-full py-20 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16" ref={headerRef}>
          <div data-animate>
            <Badge variant="secondary" className="mb-4">Referanslarımız</Badge>
          </div>
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
          </div>
          <div data-animate>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Başarılı projelerimiz ve mutlu müşterilerimiz ile gurur duyuyoruz.
            </p>
          </div>
        </div>

        {/* Üst Kısım - Sola Animasyon Yapar */}
        <div className="mb-8">
          <div className="flex animate-marquee-left">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-4 w-80">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-3 pt-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.author.avatar} />
                        <AvatarFallback className="text-xs">
                          {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.author.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Kısımı - Sağa animasyon yapar  */}
        <div>
          <div className="flex animate-marquee-right">
            {duplicatedTestimonials.reverse().map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-4 w-80">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-3 pt-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.author.avatar} />
                        <AvatarFallback className="text-xs">
                          {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.author.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
