import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const aboutParagraphs = [
  "5년 차 퍼블리셔로 웹과 앱 서비스를 구축하고 운영하며 다양한 프로젝트를 경험했습니다. SI 기업에서는 금융, 커머스, 공공, 병원 등 여러 도메인의 프로젝트를 수행했고, 이후 교육 콘텐츠 플랫폼 기업에서는 퍼블리셔로 근무하며 Next.js 기반 서비스 마이그레이션, 디자인 시스템 구축, 운영 및 유지보수 업무를 담당했습니다.",
  "React, Next.js, React Native, Flutter 등 다양한 프레임워크를 경험하며 개발 업무를 수행했지만, 사용자와 가장 가까운 화면을 만들고 완성도를 높여가는 퍼블리싱 분야에서 가장 큰 흥미와 강점을 느꼈습니다. 디자인 전공과 웹디자인·퍼블리싱 교육을 통해 쌓은 경험을 바탕으로 UI의 일관성과 사용성을 고민하고, 디자이너와 협업하며 공통 컴포넌트와 디자인 시스템을 함께 만들어가는 과정에서 퍼블리셔로서의 역량을 더욱 키울 수 있었습니다.",
  "또한 업무와 개인의 삶이 서로 긍정적인 영향을 준다는 것을 경험했습니다. 꾸준한 운동과 여행을 통해 균형 있는 생활을 유지하며 집중력과 업무 효율을 높였고, 이러한 경험은 더 나은 결과물을 만드는 원동력이 되었습니다. 앞으로도 재사용성과 유지보수성을 고려한 UI를 고민하며, 사용자와 동료 모두에게 도움이 되는 퍼블리셔로 꾸준히 성장해 나가고 싶습니다.",
];

const portfolioHighlights = [
  "Figma 디자인 기반 UI 구현",
  "MCP를 활용한 Figma-개발 환경 연동",
  "AI 개발 도구를 활용한 프로토타이핑 및 코드 개선",
  "Next.js(App Router) 기반 개발",
  "Tailwind CSS를 활용한 반응형 UI 구성",
  "TypeScript 적용",
  "Vercel을 통한 배포 및 운영",
];

const portfolioToolLogos = [
  { name: "Figma", src: "https://api.iconify.design/logos/figma.svg" },
  {
    name: "Claude",
    src: "https://api.iconify.design/logos/claude-icon.svg",
  },
  {
    name: "Next.js",
    src: "https://api.iconify.design/logos/nextjs-icon.svg",
    size: "h-9 w-9",
  },
  {
    name: "Tailwind CSS",
    src: "https://api.iconify.design/logos/tailwindcss-icon.svg",
  },
  {
    name: "TypeScript",
    src: "https://api.iconify.design/logos/typescript-icon.svg",
  },
  {
    name: "Vercel",
    src: "https://api.iconify.design/logos/vercel-icon.svg",
    invert: true,
  },
];

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
            <div className="flex max-w-[720px] flex-col gap-6 font-display text-base leading-[1.45] tracking-[-0.01em] sm:text-xl">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            aria-label="Behind the portfolio"
            className="flex w-full flex-col items-start gap-9 border-t border-[#383838]/50 pt-4 pb-5"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Behind the Portfolio
            </h2>
            <ul className="w-full list-disc pl-5 text-[15px] leading-[1.4] tracking-[-0.005em] text-[#ababab]">
              {portfolioHighlights.map((highlight) => (
                <li key={highlight} className="mb-2 last:mb-0">
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="flex w-full flex-wrap items-center gap-5">
              {portfolioToolLogos.map((tool) => (
                <div
                  key={tool.name}
                  className="flex h-20 w-40 flex-col items-center justify-center gap-2"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className={`${tool.size ?? "h-6 w-6"} ${
                      tool.invert ? "invert" : ""
                    }`}
                  />
                  <span className="text-xs text-[#ababab]">{tool.name}</span>
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
