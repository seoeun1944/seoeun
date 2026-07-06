import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const aboutParagraphs = [
  "5년차에 접어드는 퍼블리셔로 웹/앱 서비스를 개발하며 근무했습니다. SI 업체와 콘텐츠 플랫폼 회사에서 다양한 프로젝트를 진행했으며 React, React Native, Flutter 등 다양한 프레임워크를 경험했습니다.",
  "3년간 달려오면서 야근도 많았고 제가 잘하고 있는 게 맞는지 고민하면서 번아웃이 오기도 했습니다. 하지만 쉬면서 일과 삶의 균형이 중요하다는 생각을 많이 하게 되었고, 수영과 여행을 통해 재충전 시간을 갖고 다시 도전하고자 합니다.",
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
