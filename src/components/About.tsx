"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Award, Clock, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "150+", label: "Mutlu Müşteri" },
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Tamamlanan Proje" },
    { icon: <Clock className="h-6 w-6" />, value: "5+", label: "Yıl Deneyim" },
    { icon: <Target className="h-6 w-6" />, value: "99%", label: "Başarı Oranı" }
  ];

  const skills = [
    { name: "Frontend Geliştirme", progress: 95 },
    { name: "Backend Sistemleri", progress: 90 },
    { name: "Mobil Uygulama", progress: 85 },
    { name: "DevOps & Cloud", progress: 80 },
    { name: "Veritabanı Yönetimi", progress: 88 }
  ];

  // Scroll animation for content
  const contentRef = useScrollAnimation({
    stagger: 0.1,
    y: 50,
    duration: 0.6,
    trigger: "top 85%"
  });

  // Scroll animation for stats cards
  const statsRef = useScrollAnimation({
    stagger: 0.1,
    y: 100,
    duration: 0.8,
    trigger: "top 80%"
  });

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8" ref={contentRef}>
            <div data-animate>
              <Badge variant="secondary" className="mb-4">Hakkımızda</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Teknoloji ile Geleceği Şekillendiriyoruz
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aygıt Yazılım Teknolojileri olarak, 2019 yılından bu yana dijital dönüşüm süreçlerinde 
                işletmelere rehberlik ediyoruz. Modern teknolojiler ve yenilikçi çözümlerle müşterilerimizin 
                dijital başarısını destekliyoruz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deneyimli ekibimiz ile web geliştirme, mobil uygulama, e-ticaret çözümleri ve 
                siber güvenlik alanlarında uzmanlaşmış hizmetler sunuyoruz.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4" data-animate>
              <h3 className="text-2xl font-semibold text-foreground">Uzmanlık Alanlarımız</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6" ref={statsRef}>
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300" data-animate>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-medium">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
