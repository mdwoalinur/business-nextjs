import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

function ExperienceBadge() {
  return (
    <div data-about-badge aria-label="10+ Years In Global Market" className="absolute top-[28%] left-0 z-20 flex aspect-[214/202] w-[35.667%] flex-col items-center justify-center rounded-full bg-[var(--about-experience)] font-reference font-bold text-white shadow-[0_5px_5px_rgb(0_0_0_/_0.35)] min-[1400px]:top-[176px]">
      <span aria-hidden="true" className="absolute top-[7%] left-[21.5%] font-reference text-[56px] leading-[56px] font-bold sm:text-[96px] sm:leading-[112px]">10</span>
      <span aria-hidden="true" className="absolute top-[8%] right-[6.5%] flex size-6 items-center justify-center rounded-full bg-[var(--about-plus)] font-interface text-[34px] leading-6 text-white sm:size-[52px] sm:text-[67px] sm:leading-[52px]">+</span>
      <span aria-hidden="true" className="absolute top-[55%] right-0 left-0 text-center text-[11px] leading-[13px] sm:text-[23px] sm:leading-[26px]">Years In<br />Global Market</span>
    </div>
  );
}

export default function OurValues() {
  return (
    <section data-about-section="values" aria-labelledby="values-title" className="relative isolate px-6 pt-12 pb-14 xl:h-[725px] xl:px-0 xl:pt-[32px] xl:pb-0">
      <DecorativeShapes rotation={-13} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 45, y: 69 }} className="top-[-76px] right-[107px] hidden xl:block" />
      <DecorativeShapes variant="circle" diameter={640} className="top-[128px] left-[1140px] hidden xl:block" />
      <div className="mx-auto grid max-w-[1370px] gap-12 xl:grid-cols-[minmax(0,665fr)_minmax(0,705fr)] xl:gap-0">
        <div data-about-collage className="relative mx-auto aspect-[600/636] w-full max-w-[600px] xl:ml-[5px] xl:w-[calc(100%-5px)] min-[1400px]:h-[636px] min-[1400px]:w-[600px]">
          <Image src="/images/values-background-reference.png" alt="Business colleagues in conversation" width={394} height={512} loading="eager" unoptimized className="absolute top-0 left-[13.833%] w-[65.667%] rounded-[20px] shadow-[0_5px_5px_rgb(0_0_0_/_0.3)]" />
          <Image src="/images/values-foreground-reference.png" alt="Woman holding a pen in an office" width={307} height={380} loading="eager" unoptimized className="absolute top-[40.252%] right-0 z-10 w-[51.167%] rounded-[20px]" />
          <ExperienceBadge />
        </div>
        <div className="min-w-0">
          <div className="flex h-[49px] w-[313px] max-w-full items-center justify-center rounded-full bg-[image:var(--reference-cta-gradient)] font-reference text-[32px] leading-[44px] font-bold text-white sm:text-[35px]">Our Values</div>
          <h2 id="values-title" className="mt-8 font-reference text-[38px] leading-[1.13] font-bold text-reference-text sm:text-[54.4px] xl:mt-[34px] xl:translate-y-[7px] xl:leading-[61px]">Empowering Success<br className="hidden xl:block" /> Through Insightful<br className="hidden xl:block" /> Solutions</h2>
          <p className="mt-6 font-reference text-[22px] leading-[1.8] text-reference-body sm:text-[25px] min-[1280px]:max-[1399px]:text-[23.5px]! xl:mt-[26px] xl:ml-[7px] xl:translate-y-px xl:leading-[50px]">
            <span className="xl:block">At our consulting firm, we are dedicated to delivering</span>{" "}
            <span className="xl:block">insightful and innovative solutions tailored to each</span>{" "}
            <span className="xl:block">{"client\u2019s unique needs. Our unwavering commitment"}</span>{" "}
            <span className="xl:block">{"is to drive our clients\u2019 success, treating their"}</span>{" "}
            <span className="xl:block">objectives as our own.</span>
          </p>
          <div className="mt-6 flex gap-8 xl:mt-[25px]">
            {["left", "right"].map(direction => <button key={direction} type="button" disabled aria-label={direction === "left" ? "Previous value" : "Next value"} title="Additional values are not provided" className="flex size-[60px] shrink-0 items-center justify-center rounded-full border-[4px] border-black bg-reference-background"><Image src={`/icons/values-${direction}-reference.png`} alt="" width={30} height={30} unoptimized className="translate-y-1" /></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
