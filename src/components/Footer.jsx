"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

const socialIcons = [
  { name: "Facebook", src: "/icons/facebook-reference.png", width: 54, height: 54 },
  { name: "Instagram", src: "/icons/instagram-reference.png", width: 54, height: 56 },
  { name: "YouTube", src: "/icons/youtube-reference.png", width: 57, height: 57 },
];

const defaultSocialLinks = {
  Facebook: "https://www.facebook.com/",
  Instagram: "https://www.instagram.com/?hl=en",
  YouTube: "https://www.youtube.com/",
};

export default function Footer({ className = "", socialLinks = defaultSocialLinks }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const about = pathname === "/about-us";

  return (
    <footer data-component="footer" className={`font-interface text-white ${className}`}>
      <div className={`bg-reference-navy px-6 py-14 xl:py-0 ${home ? "xl:h-[412px]" : "xl:h-[var(--reference-footer-height)]"}`}>
        <div className={`mx-auto grid max-w-reference-footer grid-cols-1 gap-10 sm:grid-cols-2 xl:h-full xl:grid-cols-[360px_323px_252px_255px] xl:gap-0 ${about ? "xl:-translate-x-1" : ""}`}>
          <div className={`xl:pl-px ${home ? "xl:pt-[127px]" : "xl:pt-[135px]"}`}>
            <Link href="/" className="text-[48px] leading-[58px] font-bold">BUSINESS</Link>
            <p className={`max-w-[250px] text-[22px] font-light xl:ml-[31px] ${home ? "mt-[9px] leading-[27px]" : "mt-[13px] leading-[28px]"}`}>
              Drive Your Business To<br />Success With Us
            </p>
          </div>
          <div className={home ? "xl:pt-[88px]" : "xl:pt-[94px]"}>
            <h2 className="text-[32px] leading-10 font-medium xl:pl-px">how to find us</h2>
            <address className={`text-[22px] leading-[26px] font-light not-italic ${home ? "mt-5" : "mt-[23px]"}`}>
              10 Downing Street<br />London<br />SW1A 2AA<br />United Kingdom
            </address>
          </div>
          <div className={home ? "xl:pt-[88px]" : "xl:pt-[94px]"}>
            <h2 className="text-[32px] leading-10 font-medium xl:pl-px">company</h2>
            <nav aria-label="Footer navigation" className={`xl:ml-[10px] ${home ? "mt-6" : "mt-7"}`}>
              <ul className={`flex flex-col text-[22px] leading-[26px] font-light ${home ? "gap-[19px]" : "gap-[22px]"}`}>
                {navigationItems.map(({ href, label }) => (
                  <li key={href}><Link href={href} className="focus-visible:outline-2 focus-visible:outline-offset-4">{label}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={home ? "xl:pt-[88px]" : "xl:pt-[94px]"}>
            <h2 className="text-[32px] leading-10 font-medium xl:pl-px">social links</h2>
            <div className="mt-[14px] flex h-[57px] items-start gap-2 xl:-ml-[13px]">
              {socialIcons.map(({ name, src, width, height }) => {
                const icon = <Image src={src} alt="" width={width} height={height} unoptimized />;
                return socialLinks[name] ? (
                  <a key={name} href={socialLinks[name]} target="_blank" rel="noopener noreferrer" aria-label={name} style={{ marginTop: Math.round((57 - height) / 2), marginLeft: name === "YouTube" ? -2 : 0 }} className="focus-visible:outline-2 focus-visible:outline-offset-4">{icon}</a>
                ) : (
                  <span key={name} role="img" aria-label={name} style={{ marginTop: Math.round((57 - height) / 2), marginLeft: name === "YouTube" ? -2 : 0 }}>{icon}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center bg-reference-copyright px-4 text-center text-[20px] leading-[26px] font-light ${home || about ? "min-h-[30px]" : "min-h-[33px]"}`}>
        <span className={`${home || about ? "-translate-y-[5px]" : "-translate-y-[3px]"} ${home ? "xl:-translate-x-[13px]" : about ? "xl:-translate-x-[33px]" : "xl:-translate-x-[29px]"}`}>{"copyright \u00a9 2023 business"}</span>
      </div>
    </footer>
  );
}
