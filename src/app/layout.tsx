import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import LoadingWrapper from "@/components/LoadingWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aygıt Yazılım Teknolojileri - Geleceğinize Yön Verin",
  description: "Aygıt Yazılım Teknolojileri ile geleceğinize yön verin. Profesyonel yazılım çözümleri ve teknoloji hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingWrapper>
            {children}
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
