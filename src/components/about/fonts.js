import localFont from "next/font/local";

// Existing licensed candidate, scoped to measured About headings only.
export const aboutSemibold = localFont({
  src: "../../../public/fonts/Poppins-SemiBold.ttf",
  weight: "600",
  display: "swap",
  adjustFontFallback: false,
});
