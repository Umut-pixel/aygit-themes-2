"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AnimatedHeadline from "./AnimatedHeadline";

const Hero = () => {
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide resimleri istenirse, istenen resimler ile yer değiştirilebilir.
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
      title: "Modern Teknoloji",
      subtitle: "En son teknolojilerle çözümler"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
      title: "Yazılım Geliştirme",
      subtitle: "Profesyonel yazılım çözümleri"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      title: "Dijital Dönüşüm",
      subtitle: "Geleceğe hazır teknolojiler"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
      title: "İnovasyon",
      subtitle: "Yaratıcı ve yenilikçi çözümler"
    }
  ];

  useEffect(() => {
    if (!slideshowRef.current) return;

    const slideshow = slideshowRef.current;
    const slides = slideshow.querySelectorAll('.slide');

    
    gsap.set(slides, {
      x: '100%',
      z: 100,
      opacity: 0,
      scale: 0.8
    });

    
    gsap.set(slides[0], {
      x: '0%',
      z: 0,
      opacity: 1,
      scale: 1
    });

    // Slide anim.
    const slideshowTl = gsap.timeline({ repeat: -1 });

    slides.forEach((slide, index) => {
      const nextIndex = (index + 1) % slides.length;
      const nextSlide = slides[nextIndex];

      slideshowTl
        .to(slide, {
          x: '-100%',
          z: -100,
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(nextSlide, {
          x: '0%',
          z: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, '-=1.5')
        .call(() => setCurrentSlide(nextIndex))
        .to({}, { duration: 3 }); // Pause between slides
    });

    
    document.body.classList.add('smooth-scroll-enhanced');

    return () => {
      slideshowTl.kill();
    };
  }, []);

  return (
    <section className="w-full min-h-[614px] px-6 py-20 md:py-40 flex flex-col justify-center items-center gap-8 relative overflow-hidden">
      
      <div 
        ref={slideshowRef}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="slide absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      
      {/* Dark */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      
      <div className="text-center space-y-4 max-w-4xl mx-auto relative z-20">
        <AnimatedHeadline 
          text="Aygıt Yazılım Teknolojileri"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[86.40px] text-white drop-shadow-lg"
        />
        <AnimatedHeadline 
          text="Geleceğinize yön verin"
          className="text-xl md:text-2xl lg:text-3xl font-normal leading-7 md:leading-10 text-white/90 drop-shadow-lg"
          delay={1.5}
        />
        
        
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
