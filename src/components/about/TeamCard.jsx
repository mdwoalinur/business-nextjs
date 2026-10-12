import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <article data-team-member={member.name} data-image-status="partial-recovery" data-underlay-status="approximate" aria-labelledby={`team-${member.key}`} style={{ aspectRatio: `${member.width} / 510` }} className="relative mx-auto w-full max-w-[344px] overflow-hidden bg-[image:var(--about-photo-underlay)] xl:max-w-none min-[1400px]:h-[510px]">
      {/* Only visible through missing UI-occluded pixels; not an original-photo recovery. */}
      <Image src={`/images/team-${member.key}-reference.png`} alt="" width={member.width} height={510} unoptimized aria-hidden="true" className="absolute inset-0 h-full w-full object-contain blur-[24px]" />
      <Image src={`/images/team-${member.key}-reference.png`} alt="" width={member.width} height={510} unoptimized className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute top-[var(--team-caption-top)] max-w-[58%] font-reference text-[20px] leading-[1.46] text-white sm:text-[25px] sm:leading-[38px] sm:max-[699px]:top-auto sm:max-[699px]:bottom-[4%] min-[1280px]:max-[1399px]:text-[23px]!" style={{ "--team-caption-top": `${member.caption / 510 * 100}%`, left: `${member.left / member.width * 100}%` }}>
        <h3 id={`team-${member.key}`} className="font-normal">{member.name}</h3>
        <p className="text-[var(--about-team-role)]">{member.role}</p>
      </div>
      <span role="img" aria-label={`LinkedIn profile for ${member.name}, unconfigured`} className="absolute flex h-[16.47%] items-center justify-center rounded-full bg-white" style={{ top: `${member.circle / 510 * 100}%`, right: `${member.right / member.width * 100}%`, width: `${90 / member.width * 100}%` }}>
        <Image src="/icons/linkedin-reference.png" alt="" width={31} height={35} unoptimized className="h-auto w-[34.44%]" />
      </span>
    </article>
  );
}
