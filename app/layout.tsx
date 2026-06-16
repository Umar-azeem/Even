import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marcellus } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evan Battaglia | Mortgage Loan Originator",
  description:
    "Mortgage Loan Originator in Bloomingdale. Helping homeowners and investors with home purchases, refinancing, and investment properties.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/img/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/img/logos.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/img/logos.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/img/logos.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#04205D" }],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${marcellus.variable} bg-white`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}
