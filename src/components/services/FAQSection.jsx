import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";
import FAQAccordion from "./FAQAccordion";
import { servicesSemibold } from "./fonts";

export default function FAQSection() {
  return (
    <section data-services-section="faq" aria-labelledby="faq-heading" className="relative isolate overflow-hidden px-5 py-16 xl:h-[1103px] xl:pt-[245px] xl:pr-[53px] xl:pl-[77px]">
      <DecorativeShapes rotation={-13} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 45, y: 69 }} className="top-[50px] left-[359px] hidden xl:block" />
      <DecorativeShapes rotation={22} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 72, y: -30 }} className="top-[72px] left-[960px] hidden xl:block" />
      <DecorativeShapes variant="circle" diameter={818} className="top-[-225px] left-[1194px] [--reference-circle:#e0e1e8]" />
      <div className="relative z-10 ml-auto flex min-h-[53px] max-w-[760px] items-center justify-center rounded-full bg-[image:var(--reference-cta-gradient)] px-4 text-center text-[23px] leading-[1.15] font-bold text-white sm:text-[35px] xl:text-[45px]"><span className="xl:translate-x-[9px] xl:-translate-y-px">FREQUENTLY ASKED QUESTIONS</span></div>
      <div className="mt-9 grid items-start gap-12 xl:mt-[23px] xl:grid-cols-[715fr_549fr] xl:gap-[46px]">
        <div data-faq-artwork className="relative mx-auto aspect-[715/735] w-full max-w-[715px] xl:mt-[4px]">
          <div aria-hidden="true" className="absolute top-[1.77%] left-[6.7%] h-[92.1%] w-[93.3%] rounded-[50%] bg-[var(--services-faq-ring)]" />
          <div aria-hidden="true" className="absolute top-[10.4%] left-[17.1%] size-[70.6%] rounded-full bg-[image:var(--services-faq-inner)]" />
          <Image src="/images/services-faq-reference.png" alt="Smiling consultant with folded arms" width={667} height={677} unoptimized loading="eager" className="absolute top-[1.77%] left-[6.7%] h-auto w-[93.3%]" />
          <div className="absolute top-0 left-0 flex h-[32.25%] w-[34.13%] items-center justify-center rounded-full bg-reference-blue text-[38px] leading-none font-bold text-white shadow-[0_4px_4px_rgb(0_0_0/0.28)] text-shadow-[0_4px_4px_rgb(0_0_0/0.25)] sm:text-[64px]"><span className="sm:translate-x-1 sm:translate-y-[5px]">FAQ</span></div>
          <Image src="/icons/services-envelope-reference.png" alt="" width={82} height={68} unoptimized className="absolute top-[40.13%] left-[2.1%] h-auto w-[11.47%]" />
          <Image src="/icons/services-chat-reference.png" alt="" width={99} height={83} unoptimized className="absolute top-[15.92%] left-[84.05%] h-auto w-[13.85%]" />
        </div>
        <div className="min-w-0">
          <h2 id="faq-heading" className={`${servicesSemibold.className} mb-10 text-[34px] leading-[1.12] sm:text-[48px] xl:mb-[55px] xl:translate-y-1 xl:leading-[53px] min-[1280px]:max-[1399px]:text-[42px]!`}>How We Can Benefit<br className="hidden xl:block" /> You And Your<br className="hidden xl:block" /> Business</h2>
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
