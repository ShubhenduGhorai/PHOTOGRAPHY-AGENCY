import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "LensCraft Studio | Premium Wedding & Commercial Photography",
    template: "%s | LensCraft Studio",
  },
  description:
    "Award-winning photography studio specializing in weddings, events, commercial, and brand photography. Capturing stories that last forever.",
  keywords: [
    "photography",
    "wedding photographer",
    "commercial photography",
    "event photography",
    "brand photography",
    "New York",
    "Los Angeles",
  ],
  authors: [{ name: "LensCraft Studio" }],
  creator: "LensCraft Studio",
  publisher: "LensCraft Studio",
  metadataBase: new URL("https://lenscraftstudio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lenscraftstudio.com",
    siteName: "LensCraft Studio",
    title: "LensCraft Studio | Premium Wedding & Commercial Photography",
    description:
      "Award-winning photography studio specializing in weddings, events, commercial, and brand photography.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LensCraft Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LensCraft Studio | Premium Wedding & Commercial Photography",
    description:
      "Award-winning photography studio specializing in weddings, events, commercial, and brand photography.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
