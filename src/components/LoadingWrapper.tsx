"use client";

import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingWrapper = ({ children }: LoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 2.5 Saniye loading gösterir
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  
  if (!mounted) {
    return null;
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="animate-in fade-in duration-700">
      {children}
    </div>
  );
};

export default LoadingWrapper;
