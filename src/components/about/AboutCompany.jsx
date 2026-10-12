import DecorativeShapes from "@/components/DecorativeShapes";
import { aboutSemibold } from "./fonts";

export default function AboutCompany() {
  return (
    <section data-about-section="company" aria-labelledby="company-title" className="relative isolate px-6 pt-16 pb-12 xl:h-[380px] xl:px-[35px] xl:pt-[87px] xl:pb-0">
      <DecorativeShapes rotation={-13} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 45, y: 69 }} className="top-[28px] right-[28px] hidden xl:block" />
      <div className="flex h-[47px] w-[354px] max-w-full items-center justify-center rounded-full bg-[image:var(--reference-cta-gradient)] font-reference text-[28px] leading-[44px] font-bold text-white sm:text-[35px]"><span className="translate-x-px -translate-y-[3px]">About Company</span></div>
      <div className="mt-10 grid gap-8 xl:mt-[49px] xl:grid-cols-[minmax(0,535fr)_minmax(0,761fr)] xl:gap-[74px]">
        <h2 id="company-title" className={`${aboutSemibold.className} text-[36px] leading-[1.15] font-semibold text-reference-text sm:text-[48px] min-[1280px]:max-[1399px]:text-[43.5px]! xl:translate-y-[8px] xl:leading-[54px]`}>Discover Our Story Of<br className="hidden xl:block" /> Success</h2>
        <p className="font-reference text-[22px] leading-[1.8] text-reference-body sm:text-[25px] min-[1280px]:max-[1399px]:text-[22px]! xl:translate-y-[2px] xl:leading-[50px]">
          <span className="xl:block">{"From humble beginnings to industry leadership, we\u2019ve"}</span>{" "}
          <span className="xl:block">taken bold steps towards excellence. join us in our ongoing</span>{" "}
          <span className="xl:block">pursuit of innovation. welcome to our journey.</span>
        </p>
      </div>
    </section>
  );
}
