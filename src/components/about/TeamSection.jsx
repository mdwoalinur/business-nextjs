import TeamCard from "./TeamCard";

const team = [
  { key: "john", name: "John Mcnab", role: "Director", width: 342, caption: 404, circle: 385, left: 30, right: 22 },
  { key: "bon", name: "Bon Jovi", role: "Founder", width: 340, caption: 399, circle: 380, left: 30, right: 19 },
  { key: "luke", name: "Luke Falcone", role: "VP", width: 340, caption: 399, circle: 380, left: 32, right: 15 },
  { key: "jenifer", name: "Jenifer Gomez", role: "Manager", width: 344, caption: 392, circle: 375, left: 36, right: 16 },
];

export default function TeamSection() {
  return (
    <section data-about-section="team" aria-labelledby="team-title" className="relative isolate px-6 pt-12 pb-16 xl:h-[778px] xl:pr-1 xl:pl-[10px] xl:pt-[47px] xl:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[150px] -z-10 hidden h-[830px] overflow-hidden xl:block"><div className="absolute top-[313px] left-[-30px] h-[240px] w-[calc(100%+60px)] bg-reference-navy opacity-[0.58] blur-[130px]" /></div>
      <h2 id="team-title" className="text-center font-reference text-[36px] leading-[1.2] font-bold text-reference-text sm:text-[54.6px] xl:translate-x-[31px] xl:translate-y-[3px] xl:leading-[66px]">We Are Here To Help You</h2>
      <div className="mx-auto mt-12 grid max-w-[1000px] gap-8 sm:grid-cols-2 xl:mt-[76px] xl:max-w-[1426px] xl:grid-cols-[minmax(0,342fr)_minmax(0,340fr)_minmax(0,340fr)_minmax(0,344fr)] xl:gap-5">
        {team.map(member => <TeamCard key={member.key} member={member} />)}
      </div>
    </section>
  );
}
