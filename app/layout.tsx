import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SWDL Logistics | Seedwel Investment Limited",
    template: "%s | SWDL Logistics",
  },
  description:
    "SWDL is the logistics trade name of Seedwel Investment Limited. Ocean, air, road, rail, warehousing and customs. This website is for sale.",
  authors: [{ name: site.legal }],
  openGraph: {
    title: "SWDL Logistics",
    description: "Integrated freight platform by Seedwel Investment Limited. For sale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
