import Link from "next/link";
import { profile } from "@/data/profile";

export function Header({
  navLabel,
  navHref,
}: {
  navLabel: string;
  navHref: string;
}) {
  return (
    <header className="flex w-full max-w-[1440px] items-start justify-between whitespace-nowrap pb-16 font-display text-lg font-semibold tracking-[-0.02em] sm:pb-24 lg:pb-40 lg:text-2xl">
      <Link
        href="/"
        aria-label="Navigate to the homepage"
        className="flex flex-col items-start"
      >
        <p>{profile.name}</p>
        <p className="font-normal text-[#ababab]">{profile.title}</p>
      </Link>
      <Link href={navHref} aria-label={`Navigate to the ${navLabel.toLowerCase()} page`}>
        {navLabel}
      </Link>
    </header>
  );
}
