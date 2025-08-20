"use client";

import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
      <div className="text-center">
        {/* Logo - istenirse değiştirilebilir. */}
        <div className="mb-8 animate-pulse">
          <div className="w-32 h-32 md:w-36 md:h-36 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold text-white">
              <span className="block text-center leading-tight">
                A<br/>
                <span className="text-2xl md:text-3xl">Y</span>
              </span>
            </div>
          </div>
        </div>

        {/* Şirket İsmi */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            <span className="inline-block">Aygıt</span>
            <span className="text-primary inline-block ml-2">Yazılım</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4 animate-pulse">
            Geleceğinize Yön Veriyoruz
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/70 rounded-full shadow-lg animate-pulse" />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-3">
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg animate-bounce"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading yazısı */}
        <div className="mt-6">
          <p className="text-sm text-muted-foreground animate-pulse">
            Yükleniyor...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
