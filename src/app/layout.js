import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import ScrollNavigation from "@/components/ScrollNavigation";
import localFont from "next/font/local";

// Genuine licensed files; candidate families, not confirmed original website assets.
const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Poppins-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--font-poppins-candidate",
  display: "swap",
  adjustFontFallback: false,
});

const roboto = localFont({
  src: [
    { path: "../../public/fonts/Roboto-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Roboto-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Roboto-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Roboto-Bold.ttf", weight: "700" },
  ],
  variable: "--font-roboto-candidate",
  display: "swap",
  adjustFontFallback: false,
});

const heroFont = localFont({
  src: "../../public/fonts/DMSans.ttf",
  weight: "100 900",
  variable: "--font-hero-candidate",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    default: "BUSINESS",
    template: "%s | BUSINESS",
  },
  // No original favicon is available; avoid requesting an invented asset.
  icons: { icon: "data:," },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} ${heroFont.variable} flex min-h-screen flex-col bg-reference-background font-reference text-reference-text`}>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <ConsultationCTA />
        <Footer />
        <ScrollNavigation />
      </body>
    </html>
  );
}
