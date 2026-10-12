"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DecorativeShapes from "@/components/DecorativeShapes";

export default function ConsultationCTA({
  label = "Book Free Consultation",
  href,
  variant = "auto",
  icon,
  sectionHeight,
  topPadding,
  className = "",
}) {
  const pathname = usePathname();
  const selected = variant === "auto" ? pathname.slice(1) : variant;
  if (variant === "auto" && pathname === "/") return null;
  const contact = selected === "contact-us";
  const about = selected === "about-us";
  const destination = label === "Book Free Consultation" ? "/contact-us" : href;
  const controlClass = "relative z-10 flex min-h-[var(--reference-cta-height)] w-[var(--reference-cta-width)] max-w-full items-center justify-center rounded-reference-pill bg-[image:var(--reference-cta-gradient)] px-5 text-center text-[22px] leading-[1.25] font-light text-white underline decoration-1 underline-offset-4 shadow-reference-cta sm:text-[32px] lg:translate-x-[15px] focus-visible:outline-2 focus-visible:outline-offset-4";

  return (
    <div data-component="consultation-cta" style={{ ...(about ? { "--reference-cta-gradient": "var(--reference-cta-about-gradient)" } : {}), ...(sectionHeight ? { height: sectionHeight } : {}), ...(topPadding ? { paddingTop: topPadding } : {}) }} className={`relative isolate overflow-hidden px-[26px] pt-10 ${about ? "h-[202px]" : contact ? "h-[232px] lg:pr-2 lg:pl-[46px]" : "h-[236px]"} ${className}`}>
      {contact ? <DecorativeShapes variant="circle" diameter="var(--contact-cta-diameter, 900px)" className="top-[-389px] right-[-441px] lg:top-[-353px] lg:right-[-315px] lg:[--contact-cta-diameter:774px]" /> : null}
      <div className="relative flex justify-center">
        <div aria-hidden="true" className="absolute top-[39px] right-0 left-0 h-px bg-reference-rule" />
        {destination ? <Link href={destination} className={controlClass}><span className={`${icon ? "flex items-center gap-[14px]" : "lg:translate-x-[7px]"} ${about ? "lg:translate-y-1" : "lg:translate-y-[3px]"}`}>{icon}{label}</span></Link> : <button type="button" disabled className={controlClass}><span className={`${icon ? "flex items-center gap-[14px]" : "lg:translate-x-[7px]"} ${about ? "lg:translate-y-1" : "lg:translate-y-[3px]"}`}>{icon}{label}</span></button>}
      </div>
    </div>
  );
}
