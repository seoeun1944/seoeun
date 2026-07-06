import { profile } from "@/data/profile";

export function ContactSidebar() {
  return (
    <aside className="flex w-full flex-col items-start md:max-w-[368px] md:flex-1 md:pr-[10px] md:sticky md:top-0">
      <div className="w-full border-t border-[#383838] py-8">
        <p className="max-w-[420px] text-[15px] leading-[1.4] tracking-[-0.01em]">
          {profile.bio}
        </p>
      </div>
      <a
        aria-label="Send me an email"
        href={`mailto:${profile.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center gap-px border-t border-[#383838] py-3 font-display text-[13px] font-semibold tracking-[-0.005em]"
      >
        {profile.email} <span className="font-sans font-semibold">↗</span>
      </a>
      <a
        aria-label="Call me"
        href={profile.phoneHref}
        className="flex w-full items-center gap-px border-t border-[#383838] py-3 text-[12px] tracking-[-0.01em]"
      >
        {profile.phone} <span className="font-semibold">↗</span>
      </a>
    </aside>
  );
}
