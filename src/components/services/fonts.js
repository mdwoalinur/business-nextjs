import localFont from "next/font/local";

// Existing licensed candidate, scoped to Services; original family is unconfirmed.
export const servicesSemibold = localFont({
  src: "../../../public/fonts/Poppins-SemiBold.ttf",
  weight: "600",
  display: "swap",
  adjustFontFallback: false,
});
