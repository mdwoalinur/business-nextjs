import Image from "next/image";

export default function PageHero({
  title,
  imageSrc,
  imageAlt = "",
  imagePosition = "center",
  variant = "inner",
  height,
  overlay = "rgb(13 11 86 / 0.5)",
  children,
  className = "",
}) {
  return (
    <section
      aria-labelledby="page-title"
      data-component="page-hero"
      data-image-status={imageSrc ? "provided" : "missing"}
      className={`relative isolate min-h-[340px] bg-reference-secondary-navy px-6 text-white lg:min-h-0 ${variant === "home" ? "h-[var(--reference-home-hero-height)]" : "h-[var(--reference-inner-hero-height)]"} ${className}`}
      style={height ? { height } : undefined}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          preload
          className="-z-20 object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : null}
      {imageSrc ? <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: overlay }} /> : null}
      <div className={variant === "home" ? "mx-auto max-w-[1152px] pt-[190px] lg:pt-[203px]" : "mx-auto flex h-full max-w-reference items-center justify-center pt-[78px]"}>
        <h1 id="page-title" className={variant === "home" ? "max-w-[880px] font-hero text-[42px] leading-[1.12] font-bold lg:text-[70px]" : `font-hero text-center text-[52px] leading-[1.15] font-bold text-shadow-reference-hero sm:text-[72px] ${variant === "about-us" ? "lg:text-[97px]" : "lg:text-[96px]"} ${variant === "contact-us" ? "lg:-translate-x-[67px]" : "lg:-translate-x-[15px]"} ${variant === "services" ? "lg:-translate-y-[27px]" : ""}`}>
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
}
