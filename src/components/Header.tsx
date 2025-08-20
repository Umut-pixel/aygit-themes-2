"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { scrollToElement } from "@/lib/scrollUtils";

const Header = () => {
  const navItems = [
    { label: "Referanslarımız", href: "#referanslarimiz", active: false },
    { label: "Çözümlerimiz", href: "#cozumlerimiz", active: false },
    { label: "Planlama", href: "/planlama", active: false },
    { label: "Kaynaklarımız", href: "/kaynaklarimiz", active: false },
    { label: "Ücretlendirme", href: "/ucetlendirme", active: false },
    { label: "Size Ulaşalım", href: "#iletisim", active: false },
  ];

  return (
    <header className="w-full bg-background border-b border-border p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <img
            src="/assets/aygit-logo-beyaz.png"
            alt="Aygıt Yazılım Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        
        <nav className="hidden md:flex flex-1 justify-end items-center gap-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.href.startsWith('#') ? (
                <Button
                  variant={item.active ? "default" : "ghost"}
                  className={`px-2 py-2 rounded-lg ${
                    item.active 
                      ? "bg-primary/10 text-primary hover:bg-primary/20" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => scrollToElement(item.href, 1200)}
                >
                  {item.label}
                </Button>
              ) : (
                <Link href={item.href}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`px-2 py-2 rounded-lg ${
                      item.active 
                        ? "bg-primary/10 text-primary hover:bg-primary/20" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="px-2 py-2">
            Giriş
          </Button>
          <Button size="sm" className="px-2 py-2">
            Kayıt Ol!
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden w-full mt-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.href.startsWith('#') ? (
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-start px-4 py-3 rounded-lg ${
                      item.active 
                        ? "bg-primary/10 text-primary hover:bg-primary/20" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => scrollToElement(item.href, 1200)}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link href={item.href}>
                    <Button
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start px-4 py-3 rounded-lg ${
                        item.active 
                          ? "bg-primary/10 text-primary hover:bg-primary/20" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
