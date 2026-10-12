import localFont from "next/font/local";

// Existing licensed candidate; the original website's font is unconfirmed.
export const contactSemibold = localFont({
  src: "../../../public/fonts/Poppins-SemiBold.ttf",
  weight: "600",
  display: "swap",
  adjustFontFallback: false,
});
