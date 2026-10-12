import Image from "next/image";

export default function ServiceCard({ title, description, src, imageWidth }) {
  return (
    <article data-service-card={title} className="flex min-w-0 flex-col bg-white text-center text-black xl:h-[717px]">
      <Image src={src} alt={title === "Strategy planning" ? "Two colleagues discussing a business plan" : title === "Industry Analysis" ? "A business team reviewing documents together" : "Customer relationship management on a laptop"} width={imageWidth} height={396} unoptimized className="aspect-[444/396] w-full object-cover xl:aspect-auto xl:h-[396px]" />
      <div className="flex flex-1 flex-col px-5 pt-10 xl:px-0 xl:pt-[50px]">
        <h3 className="text-[26px] leading-[42px] font-normal xl:text-[28px]">{title}</h3>
        <p className="mx-auto mt-[20px] max-w-[350px] px-2 text-[23px] leading-[38px] text-reference-body xl:-translate-x-[3px] xl:translate-y-[7px] xl:text-[25px]">{description[0]}<br />{description[1]}</p>
        <div className="mt-10 border-t border-[var(--services-divider)] xl:mt-auto xl:mr-[22px] xl:h-[67px]">
          <button type="button" disabled className="mx-auto flex min-h-[66px] max-w-full items-center justify-center gap-[15px] text-[22px] leading-[32px] text-reference-navy xl:translate-x-[-11px] xl:text-[24px]">
            <Image src="/icons/services-explore-reference.png" alt="" width={25} height={27} unoptimized />
            Explore Services
          </button>
        </div>
      </div>
    </article>
  );
}
