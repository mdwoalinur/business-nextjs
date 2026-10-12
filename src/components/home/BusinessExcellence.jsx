import Image from "next/image";
import Link from "next/link";

export default function BusinessExcellence() {
  return (
    <section data-home-section="excellence" aria-labelledby="excellence-title" className="grid bg-reference-secondary-navy text-home-light-ink xl:min-h-[391px] xl:grid-cols-[minmax(0,710fr)_minmax(0,730fr)]">
      <div className="relative aspect-[710/391] min-w-0 xl:aspect-auto xl:min-h-[391px]">
        <Image src="/images/handshake-reference.png" alt="Two businesspeople shaking hands" fill sizes="(min-width: 1280px) 49.3vw, 100vw" unoptimized className="object-cover" />
      </div>
      <div className="px-6 py-9 xl:px-5 xl:pt-[23px] xl:pb-0">
        <h2 id="excellence-title" className="font-hero text-[38px] leading-[1.1] font-bold sm:text-[50px] xl:text-[55.5px] xl:leading-[60px] xl:font-extrabold">Driving Business<br className="hidden xl:block" /> Excellence</h2>
        <p className="mt-5 max-w-[680px] font-hero text-[20px] leading-[1.2] xl:mt-5 xl:text-[24px] xl:leading-[24px] min-[1280px]:max-[1399px]:text-[22px]">
          <span className="xl:block">expert consultation for your business growth: we provide</span>{" "}<span className="xl:block">personalized strategies to navigate your business towards</span>{" "}<span className="xl:block">success. our mission is to unlock your potential and</span>{" "}<span className="xl:block">transform your vision into reality.</span>
        </p>
        <Link href="/contact-us" className="mt-8 inline-flex min-h-[60px] w-[242px] max-w-full items-center justify-center rounded-[20px] bg-white px-3 font-reference text-[25px] leading-9 whitespace-nowrap text-reference-navy focus-visible:outline-2 focus-visible:outline-offset-4 xl:mt-[30px]">get in touch</Link>
      </div>
    </section>
  );
}
