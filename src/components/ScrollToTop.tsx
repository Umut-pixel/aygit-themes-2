"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { scrollToTop } from "@/lib/scrollUtils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // yukarıya kaydırma butonu koydum.
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll event listener'ı
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  
  const handleScrollToTop = () => {
    scrollToTop(1200); // 1.2 saniye sürecek animasyon
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 animate-in slide-in-from-bottom-2"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
