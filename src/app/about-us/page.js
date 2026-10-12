import PageHero from "@/components/PageHero";
import Image from "next/image";
import AboutCompany from "@/components/about/AboutCompany";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/about/TeamSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = { title: "About Us" };

export default function AboutUs() {
  return (
    <div data-about-page className="overflow-x-clip" style={{ "--about-experience": "#0f29b2", "--about-plus": "#fbb90f", "--about-team-role": "#d9d9d9", "--about-photo-underlay": "linear-gradient(180deg,#c1c0cb,#9191ad)" }}>
      <PageHero variant="about-us" title="Who We Are?" imageSrc="/images/aboutpagephoto1.png" imagePosition="50% 100%" />
      <AboutCompany />
      <AboutFeatures />
      <ConsultationCTA variant="about-us" label="GOT SOMETHING IN MIND?" sectionHeight={225} topPadding={56} icon={<Image src="/icons/consultation-bubble-reference.png" alt="" width={59} height={54} unoptimized className="hidden shrink-0 sm:block" />} />
      <OurValues />
      <TeamSection />
    </div>
  );
}
