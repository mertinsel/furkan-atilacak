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

export const metadata = {
  title: "Mert İnsel | Robotik & Web Geliştirici",
  description: "Mert İnsel'in kişisel portfolyo sitesi. Robotik kodlama, web geliştirme ve yapay zeka projeleri.",
  keywords: ["Mert İnsel", "Robotik", "Kodlama", "Web Geliştirme", "Yapay Zeka", "Portfolyo"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
