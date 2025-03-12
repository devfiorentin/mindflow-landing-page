import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindFlow - Seu Desenvolvimento Pessoal",
  description:
    "MindFlow é um site de desenvolvimento pessoal que ajuda você a se tornar uma pessoa melhor.",
  keywords: [
    "desenvolvimento pessoal",
    "autoconhecimento",
    "crescimento pessoal",
    "mente",
    "cultura",
    "arte",
    "ciência",
    "tecnologia",
    "inovação",
    "futuro",
  ],

  creator: "MindFlow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
