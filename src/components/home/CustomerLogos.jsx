import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

const logos = [
  { name: "Forbes", src: "/logos/forbes-reference.png", width: 210, height: 62, position: "xl:left-[181px] xl:top-[166px]" },
  { name: "microsoft", src: "/logos/microsoft-reference.png", width: 247, height: 57, position: "xl:left-[466px] xl:top-[170px]" },
  { name: "dell", src: "/logos/dell-reference.png", width: 147, height: 70, position: "xl:left-[788px] xl:top-[160px]" },
  { name: "equinor", src: "/logos/equinor-reference.png", width: 251, height: 72, position: "xl:left-[1008px] xl:top-[170px]" },
];

export default function CustomerLogos() {
  return (
    <section data-home-section="customers" aria-labelledby="customer-title" className="relative isolate overflow-hidden py-14 xl:h-[299px] xl:py-0">
      <div className="relative mx-auto h-full max-w-[1440px]">
        <DecorativeShapes rotation={-10} pair={{ first: { width: 112, height: 107 }, second: { width: 112, height: 107 }, x: 64, y: 44 }} className="top-[34px] left-[-50px] hidden -scale-x-100 xl:block" />
        <DecorativeShapes rotation={-13} pair={{ first: { width: 112, height: 107 }, second: { width: 112, height: 107 }, x: 52, y: 65 }} className="top-[54px] right-[-13px] hidden xl:block" />
        <h2 id="customer-title" className="text-center font-reference text-[34px] leading-[1.25] font-bold text-reference-blue sm:text-[48px] xl:pt-[58px]">our customers</h2>
        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-2 items-center justify-items-center gap-x-5 gap-y-8 px-6 xl:mt-0 xl:block xl:px-0">
          {logos.map(({ name, src, width, height, position }) => <Image key={name} src={src} alt={name} width={width} height={height} unoptimized className={`h-auto max-w-full object-contain xl:absolute ${position}`} />)}
        </div>
      </div>
    </section>
  );
}
