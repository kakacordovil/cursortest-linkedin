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
  title: {
    default: "Kaká Cordovil — Professional Website",
    template: "%s · Kaká Cordovil",
  },
  description:
    "Professional website for Kaká Cordovil — enterprise polish with an edgy, curious maker mindset. About, career journey, skills, and portfolio.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Kaká Cordovil — Professional Website",
    description:
      "Enterprise meets edgy: About, career journey, skills, and a portfolio space for future work.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
