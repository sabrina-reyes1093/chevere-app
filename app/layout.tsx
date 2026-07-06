import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { asset } from "@/lib/site";

import "./globals.css";
import "@/styles/header.css";
import "@/styles/nav.css";
import "@/styles/home.css";
import "@/styles/blog.css";
import "@/styles/page.css";
import "@/styles/post.css";
import "@/styles/newsletter.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "chévere",
  description:
    "A lifestyle edit for culture, style, stories, and the little discoveries that make everyday life feel more inspired.",
  icons: { icon: asset("/assets/icon.png") },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
