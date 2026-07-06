import { profile } from "@/data/profile";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="flex min-h-[200px] w-full items-end justify-between border-t border-[#383838]/50 py-5 sm:min-h-[300px] lg:min-h-[400px]"
    >
      <a
        aria-label="Send me an email"
        href={`mailto:${profile.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 font-display text-lg font-semibold tracking-[-0.02em] lg:text-2xl"
      >
        Contact me
      </a>
    </footer>
  );
}
