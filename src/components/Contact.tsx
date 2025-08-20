import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-posta",
      value: "info@aygityazilim.com",
      description: "7/24 e-posta desteği"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      value: "+90 (212) 555 0123",
      description: "Pazartesi - Cuma 09:00-18:00"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adres",
      value: "İzmir, Türkiye",
      description: "Merkez ofis"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      description: "Pazartesi - Cuma"
    }
  ];

  return (
    <section id="iletisim" className="w-full py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">İletişim</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projeleriniz hakkında konuşmak için bizimle iletişime geçin. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Bölümü */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Mesaj Gönderin</CardTitle>
              <CardDescription>
                Projeniz hakkında detayları paylaşın, size en kısa sürede dönüş yapalım.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    Ad
                  </label>
                  <Input id="firstName" placeholder="Adınız" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Soyad
                  </label>
                  <Input id="lastName" placeholder="Soyadınız" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-posta
                </label>
                <Input id="email" type="email" placeholder="ornek@email.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <Input id="phone" placeholder="+90 (5XX) XXX XX XX" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Şirket (Opsiyonel)
                </label>
                <Input id="company" placeholder="Şirket adınız" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesaj
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Mesaj Gönder
              </Button>
            </CardContent>
          </Card>

          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                İletişim Bilgilerimiz
              </h3>
              <p className="text-muted-foreground mb-8">
                Aşağıdaki kanallardan bizimle iletişime geçebilirsiniz. 
                En kısa sürede size dönüş yapacağız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ek bilgiler */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-2">
                  Acil Durumlar
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Sistem arızaları veya acil durumlar için 7/24 teknik destek hizmetimiz mevcuttur.
                </p>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Acil Destek: +90 (212) 555 0124
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
