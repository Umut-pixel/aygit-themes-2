import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag
} from "lucide-react";

const ResourcesPage = () => {
  const blogPosts = [
    {
      title: "2024'te Web Geliştirme Trendleri",
      excerpt: "Bu yılın en popüler web geliştirme teknolojileri ve yaklaşımları hakkında detaylı bir rehber.",
      category: "Web Geliştirme",
      author: "Ahmet Yılmaz",
      date: "15 Mart 2024",
      readTime: "8 dk",
      image: "/api/placeholder/400/250",
      tags: ["React", "Next.js", "Trends"]
    },
    {
      title: "Mobil Uygulama Performans Optimizasyonu",
      excerpt: "Mobil uygulamalarınızın performansını artırmak için uygulayabileceğiniz pratik teknikler.",
      category: "Mobil Geliştirme",
      author: "Ayşe Kaya",
      date: "12 Mart 2024",
      readTime: "12 dk",
      image: "/api/placeholder/400/250",
      tags: ["Performance", "Mobile", "Optimization"]
    },
    {
      title: "E-Ticaret SEO Stratejileri",
      excerpt: "E-ticaret sitenizin arama motorlarında üst sıralarda yer alması için etkili SEO teknikleri.",
      category: "SEO",
      author: "Mehmet Demir",
      date: "10 Mart 2024",
      readTime: "10 dk",
      image: "/api/placeholder/400/250",
      tags: ["SEO", "E-commerce", "Marketing"]
    },
    {
      title: "API Güvenliği: En İyi Uygulamalar",
      excerpt: "API'lerinizi güvenli hale getirmek için uygulamanız gereken güvenlik önlemleri.",
      category: "Güvenlik",
      author: "Fatma Özkan",
      date: "8 Mart 2024",
      readTime: "15 dk",
      image: "/api/placeholder/400/250",
      tags: ["Security", "API", "Best Practices"]
    },
    {
      title: "React Hooks ile State Yönetimi",
      excerpt: "React Hooks kullanarak modern ve etkili state yönetimi nasıl yapılır?",
      category: "Frontend",
      author: "Can Arslan",
      date: "5 Mart 2024",
      readTime: "6 dk",
      image: "/api/placeholder/400/250",
      tags: ["React", "Hooks", "State Management"]
    },
    {
      title: "Docker ile Containerization",
      excerpt: "Uygulamalarınızı Docker ile containerize etmek ve deployment süreçlerini kolaylaştırmak.",
      category: "DevOps",
      author: "Zeynep Çelik",
      date: "3 Mart 2024",
      readTime: "14 dk",
      image: "/api/placeholder/400/250",
      tags: ["Docker", "DevOps", "Containerization"]
    }
  ];

  const guides = [
    {
      title: "Başlangıç Rehberi: Web Geliştirme",
      description: "Web geliştirmeye yeni başlayanlar için kapsamlı rehber",
      type: "PDF",
      size: "2.5 MB",
      downloads: "1,234",
      icon: BookOpen
    },
    {
      title: "Mobil Uygulama Geliştirme Kılavuzu",
      description: "iOS ve Android uygulama geliştirme süreçleri",
      type: "PDF",
      size: "3.1 MB",
      downloads: "987",
      icon: FileText
    },
    {
      title: "SEO Optimizasyon Rehberi",
      description: "Web sitenizi arama motorları için optimize edin",
      type: "PDF",
      size: "1.8 MB",
      downloads: "2,156",
      icon: Download
    }
  ];

  const videos = [
    {
      title: "Next.js ile Modern Web Uygulaması",
      duration: "45:30",
      views: "2,450",
      thumbnail: "/api/placeholder/400/250",
      category: "Tutorial"
    },
    {
      title: "React Performance Optimization",
      duration: "32:15",
      views: "1,890",
      thumbnail: "/api/placeholder/400/250",
      category: "Tutorial"
    },
    {
      title: "API Design Best Practices",
      duration: "28:45",
      views: "1,234",
      thumbnail: "/api/placeholder/400/250",
      category: "Best Practices"
    }
  ];

  const categories = [
    "Tümü",
    "Web Geliştirme",
    "Mobil Geliştirme",
    "SEO",
    "Güvenlik",
    "Frontend",
    "DevOps"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Kaynaklarımız
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Bilgi ve
            <span className="text-primary"> Kaynak Merkezi</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Yazılım geliştirme dünyasındaki en güncel bilgiler, rehberler ve 
            eğitim içerikleri burada.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Kaynaklarda ara..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrele
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/10"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blog Yazıları</h2>
            <p className="text-muted-foreground">
              En güncel yazılım geliştirme içerikleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Blog Görseli
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {post.date}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} className="h-3 w-3 text-muted-foreground" />
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/10">
                    Devamını Oku
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ücretsiz Rehberler</h2>
            <p className="text-muted-foreground">
              İndirip kullanabileceğiniz kapsamlı rehberler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {guide.type}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{guide.size}</span>
                    <span>{guide.downloads} indirme</span>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    İndir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      

      {/* CTA Section */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">
                Güncel Kalın
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                En son yazılım geliştirme trendleri ve güncellemeler için 
                bültenimize abone olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Bültene Abone Ol
                </Button>
                <Button variant="outline" size="lg">
                  Tüm İçerikleri Gör
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
