import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";
import BusinessStatistics from "./BusinessStatistics";
import { servicesSemibold } from "./fonts";

export default function WayWeWork() {
  return (
    <section data-services-section="work" aria-labelledby="work-heading" className="relative isolate px-5 py-16 xl:h-[876px] xl:pt-[93px] xl:pr-[58px] xl:pl-[41px]">
      <DecorativeShapes variant="circle" diameter={864} className="top-[28px] left-[-455px] [--reference-circle:#e0e1e8]" />
      <div className="relative grid items-start gap-12 xl:grid-cols-[minmax(0,594fr)_minmax(0,700fr)] xl:gap-[47px]">
        <BusinessStatistics />
        <div className="min-w-0 xl:pt-[11px]">
          <div className="inline-flex min-h-[52px] max-w-full items-center rounded-full bg-[image:var(--reference-cta-gradient)] px-5 text-center text-[24px] leading-[1.25] font-bold text-white sm:text-[35px] xl:ml-2 xl:w-[366px] xl:justify-center xl:px-0">The Way We Work</div>
          <h2 id="work-heading" className={`${servicesSemibold.className} mt-[34px] text-[34px] leading-[1.12] text-reference-text sm:text-[48px] xl:ml-[11px] xl:translate-y-[3px] xl:leading-[54px] min-[1280px]:max-[1399px]:text-[42px]!`}>Achieving Your Business<br className="hidden xl:block" /> Goals Efficiently</h2>
          <p className="mt-[34px] text-[22px] leading-[1.8] text-reference-body sm:text-[25px] xl:mt-[32px] xl:ml-[7px] xl:-translate-y-px xl:leading-[50px] min-[1280px]:max-[1399px]:text-[22px]!">
            {"From humble beginnings to industry leadership, we\u2019ve taken bold steps towards excellence. Join us in our ongoing pursuit of innovation."}<br />
            {"Welcome to our journey. From humble beginnings to industry leadership, we\u2019ve taken bold steps towards excellence."}
          </p>
          <div data-achievement className="mt-12 flex min-h-[94px] items-center gap-5 rounded-tl-[18px] rounded-tr-[18px] rounded-br-[60px] rounded-bl-[18px] bg-[image:var(--services-award-gradient)] px-5 py-3 text-white sm:px-[35px] xl:mt-[59px] xl:h-[94px] xl:gap-[22px] xl:py-0">
            <Image src="/icons/services-award-reference.png" alt="First-place medal" width={66} height={76} unoptimized className="h-auto w-[50px] shrink-0 sm:w-[66px]" />
            <p className="text-[24px] leading-[1.2] text-shadow-[0_4px_4px_rgb(0_0_0/0.25)] sm:text-[36px] xl:whitespace-nowrap xl:text-[40px] min-[1280px]:max-[1399px]:text-[34px]!">Winner Agency Of Decade</p>
          </div>
        </div>
      </div>
    </section>
  );
}
