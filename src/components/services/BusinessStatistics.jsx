import Image from "next/image";

export default function BusinessStatistics() {
  return (
    <div data-services-statistics className="relative z-10 w-full bg-white text-black shadow-[0_0_30px_rgb(0_0_0/0.28)] xl:h-[690px]">
      <div className="flex min-h-[180px] items-center gap-3 border-b border-[var(--services-divider)] px-4 py-7 sm:px-10 xl:h-[235px] xl:gap-[34px] xl:px-[46px] xl:py-0 min-[1280px]:max-[1399px]:gap-5! min-[1280px]:max-[1399px]:px-8!">
        <p className="shrink-0 whitespace-nowrap font-interface text-[46px] leading-none font-bold text-reference-blue text-shadow-[0_5px_4px_rgb(0_0_0/0.35)] sm:text-[80px] xl:-translate-x-px xl:translate-y-[10px] xl:text-[94px] min-[1280px]:max-[1399px]:text-[82px]!">99.9<span className="text-[26px] xl:text-[44px] min-[1280px]:max-[1399px]:text-[40px]!">%</span></p>
        <p className="text-[18px] leading-[1.12] font-light sm:text-[30px] xl:-translate-x-[5px] xl:translate-y-[13px] xl:whitespace-nowrap xl:text-[36px] min-[1280px]:max-[1399px]:text-[30px]!">Monitor And<br />Analyze Data</p>
      </div>
      <div className="flex min-h-[180px] items-center gap-3 border-b border-[var(--services-divider)] px-4 py-7 sm:px-10 xl:h-[233px] xl:gap-[16px] xl:px-[46px] xl:py-0 min-[1280px]:max-[1399px]:px-8!">
        <p className="shrink-0 font-interface text-[70px] leading-none font-bold text-reference-blue text-shadow-[0_5px_4px_rgb(0_0_0/0.35)] sm:text-[108px] xl:text-[128px] min-[1280px]:max-[1399px]:text-[110px]!">4.9</p>
        <div className="min-w-0 self-center text-center xl:translate-y-[10px]">
          <Image src="/icons/services-rating-reference.png" alt="Five rating stars" width={240} height={54} unoptimized className="h-auto w-[180px] max-w-full xl:w-[240px]" />
          <p className="mt-2 text-[18px] leading-[40px] font-light sm:text-[30px] xl:mt-1 xl:translate-x-[42px] xl:text-[36px] min-[1280px]:max-[1399px]:translate-x-4! min-[1280px]:max-[1399px]:text-[30px]!">High Rated</p>
        </div>
      </div>
      <div className="flex min-h-[180px] items-center gap-3 px-4 py-7 sm:px-10 xl:h-[222px] xl:gap-[25px] xl:px-[46px] xl:py-0 min-[1280px]:max-[1399px]:gap-5! min-[1280px]:max-[1399px]:px-8!">
        <p className="shrink-0 whitespace-nowrap text-[46px] leading-none font-bold text-reference-blue text-shadow-[0_5px_4px_rgb(0_0_0/0.35)] sm:text-[80px] xl:translate-x-[2px] xl:translate-y-[3px] xl:text-[96px] min-[1280px]:max-[1399px]:text-[80px]!">1000+</p>
        <p className="text-[18px] leading-[1.12] font-light sm:text-[30px] xl:-translate-x-[5px] xl:-translate-y-[6px] xl:text-[36px] min-[1280px]:max-[1399px]:text-[30px]!">Satisfied<br />Customers</p>
      </div>
    </div>
  );
}
