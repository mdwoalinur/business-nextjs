export default function NewsletterArc({ top }) {
  return <div aria-hidden="true" className="pointer-events-none absolute left-[var(--home-arc-left)] -z-10 hidden h-[var(--home-arc-height)] w-[var(--home-arc-width)] rounded-[50%] bg-home-newsletter-arc xl:block" style={{ top }} />;
}
