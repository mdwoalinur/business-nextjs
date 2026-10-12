import Image from "next/image";
import Link from "next/link";

export default function HomeHero({ imageSrc, imagePosition = "center", overlay = "rgb(5 8 41 / 0.5)" }) {
  return (
    <section data-home-section="hero" data-component="page-hero" data-image-status={imageSrc ? "provided" : "missing"} aria-labelledby="page-title" className="relative isolate bg-reference-secondary-navy px-6 pb-16 text-white xl:h-[var(--reference-home-hero-height)] xl:pb-0">
      {imageSrc ? <><Image src={imageSrc} alt="" fill sizes="100vw" preload className="-z-20 object-cover" style={{ objectPosition: imagePosition }} /><div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: overlay }} /></> : null}
      <div className="mx-auto max-w-[1156px] pt-[145px] sm:pt-[175px] xl:pt-[207px]">
        <h1 id="page-title" className="max-w-[950px] font-hero text-[42px] leading-[1.12] font-bold sm:text-[60px] xl:translate-x-px xl:translate-y-px xl:text-[73px] xl:leading-[78px]">
          <span className="xl:block">Unleashing Potential</span>{" "}<span className="xl:block">With Innovative Business</span>{" "}<span className="xl:block">Solutions</span>
        </h1>
        <p className="mt-8 max-w-[780px] font-reference text-[20px] leading-[30px] sm:text-[24px] xl:mt-[29px] xl:text-[24.35px]">transforming visions into reality: your success is our mission</p>
        <Link href="/contact-us" className="mt-8 inline-flex min-h-[67px] w-[242px] max-w-full items-center justify-center rounded-[20px] bg-white px-3 font-reference text-[24px] leading-9 whitespace-nowrap text-reference-navy focus-visible:outline-2 focus-visible:outline-offset-4 xl:mt-[39px]"><span className="translate-y-[2px]">contact us today</span></Link>
      </div>
    </section>
  );
}
