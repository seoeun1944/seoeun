import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const aboutParagraphs = [
  "Here's the deal. I'm Alexandra, and honestly? I think being a producer is kinda like being a really organized friend who also happens to be a ninja at making cool stuff happen. My philosophy? Keep it smooth, keep it fun, and keep everyone feeling heard. I love making space for creativity to flow—when you actually look forward to Monday mornings.",
  "I'm a big believer in talking things out, even if it's just to vent about that one font that's driving us all crazy. I'm also the one who'll order the emergency pizza when we're pulling a late one, and probably bring my dog, Biscuit, to the office for morale.",
  "More than anything, I love seeing a team click, ideas bouncing, and projects coming to life. It's not just about the finished product, it's about the laughs and the connections we make along the way.",
  "I want to make awesome stuff with awesome people, and maybe sneak in a few dog cuddles while we're at it.",
];

// Placeholder slots until real client logos are provided.
const clientLogoSlots = 6;

export default function About() {
  return (
    <div className="flex flex-col items-center bg-black px-6 pt-5 pb-2.5 sm:px-8 lg:px-[30px]">
      <Header navLabel="Back" navHref="/" />

      <main className="flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-start">
        <ContactSidebar />

        <div className="flex w-full flex-col items-start md:flex-1 md:pl-5">
          <section
            aria-label="About me"
            className="flex w-full flex-col items-start gap-9 border-t border-[#383838] pt-8 pb-12 lg:pr-16"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              About Me
            </h2>
            <div className="flex max-w-[720px] flex-col gap-6 font-display text-lg leading-[1.45] tracking-[-0.01em] sm:text-2xl">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            aria-label="Client list"
            className="flex w-full flex-col items-start gap-9 border-t border-[#383838]/50 pt-4 pb-5"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Client List
            </h2>
            <div className="flex w-full flex-wrap items-center gap-5">
              {Array.from({ length: clientLogoSlots }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-20 w-40 items-center justify-center rounded border border-dashed border-[#383838] text-xs text-[#ababab]"
                >
                  Logo {i + 1}
                </div>
              ))}
            </div>
          </section>

          <ContactFooter />
        </div>
      </main>
    </div>
  );
}
