import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const reflux = [
  {
    title: "부동산 조각투자 서비스 (피스원)",
    period: "2023.05 – 2024.01",
    description: "부동산 투자 앱 제작",
    stack: "Flutter · Dart",
    contribution: 80,
    bullets: [
      "페이지 리로딩: 실시간 정보 페이지를 위해 뒤로가기 시에도 페이지가 새로고침되도록 API를 재호출해 리로딩을 구현, 앱 구조상 스택 페이지가 정적 상태로 유지되는 문제를 해결",
      "Provider 상태 관리: Provider와 ChangeNotifier로 매수·매도 수량·금액 계산 상태와 실시간 반영 그래프 로직을 관리하고, 상태 변경에 따라 UI를 자동 업데이트해 코드 복잡도를 줄이고 렌더링 성능을 향상",
      "프로젝트 중반부터 앱개발 팀리드를 겸업하며 Slack, Jira 등 협업 도구로 작업·오류·수정사항 진행 상황을 투명하게 관리하고, 외부 협업사와는 이슈 조율 및 업무 분담을 진행",
      "핀 입력, 생체 인증, SNS 로그인 로직 수정 및 로그인 상태 유지를 위한 캐시 저장으로 사용성 개선",
      "iOS TestFlight 관리·업데이트, Android 빌드 버전 관리(출시 전)",
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    title: "한국투자신탁운용 · ACE ETF",
    period: "2022.10 – 2023.05",
    description: "투자상품 소개 및 정보 공유 홈페이지 제작(반응형)",
    stack: "React · SCSS · Styled-components",
    contribution: 80,
    bullets: [
      "Styled-components로 비슷한 두 사이트의 중복되는 헤더·게시판 스타일을 독립적으로 관리·재사용해 코드 일관성을 유지",
      "SCSS 계층 구조로 색상·폰트·버튼 스타일을 변수와 믹스인으로 관리해 코드 중복을 최소화하고 유지보수성을 개선",
      "aria 속성과 포커스 관리로 웹 접근성 인증 획득",
      "계산기, 투자정보 게시판, 소개 페이지, 상품 상세 화면 및 전체 스크롤 애니메이션 구현",
      "Chart.js 커스터마이징으로 투자 정보 그래프 시각화 구현",
    ],
    links: [
      { label: "한국투자신탁운용", href: "https://kim.koreainvestment.com" },
      { label: "ACE ETF", href: "https://www.aceetf.co.kr" },
    ],
  },
  {
    title: "파스텔몰",
    period: "2021.10 – 2022.02",
    description: "복합쇼핑몰 홈페이지 및 앱 리뉴얼(반응형)",
    stack: "HTML · CSS · JavaScript · React Native",
    contribution: 80,
    bullets: [
      "바코드 인식 네이티브 화면과 웹뷰 상품 상세 페이지 간 전환을 위해 WebView의 onNavigationStateChange로 URL 변경을 감지해 화면 전환을 관리",
      "웹: 주문, 장바구니, 배송조회, 취소·교환·반품 화면 구현",
      "앱: React Native WebView와 바코드 리드 기반 하이브리드 앱 개발",
    ],
    links: [
      { label: "파스텔몰", href: "https://www.pastelmall.com" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.tribons.pastelmall",
      },
    ],
  },
  {
    title: "광동 약국몰",
    period: "2022.12 – 2023.02",
    description: "약국몰 유지보수",
    stack: "JavaScript",
    contribution: 80,
    bullets: [
      "장바구니 수량·옵션 변경을 AJAX로 실시간 업데이트, 금액 계산·쿠폰 적용 로직 구현",
      "PC: 구매목록 재구매 로직 개발",
      "모바일: 재구매·마이페이지 로직 개발",
    ],
    links: [{ label: "광동제약 약국몰", href: "https://kdshop.co.kr" }],
  },
  {
    title: "메뉴투어",
    period: "2021.02 – 2021.11",
    description: "식당 예약 플랫폼 앱 제작",
    stack: "React Native",
    contribution: 80,
    bullets: [
      "Customer 플랫폼: 식당 후기 및 예약 화면 구현",
      "Operator & Staff 플랫폼: 직원 관리 및 재료 주문 화면 구현",
    ],
    links: [{ label: "소개 페이지", href: "https://menutour.biz" }],
  },
  {
    title: "법무법인 율촌",
    period: "2020.12 – 2024.01",
    description: "홈페이지 유지보수(반응형)",
    stack: "HTML · CSS · JavaScript",
    contribution: 80,
    bullets: [
      "세미나 신청 및 뉴스레터 기능 개발",
      "화면 수정 및 메뉴 구조 개편 등 유지보수",
    ],
    links: [
      { label: "율촌", href: "https://www.yulchon.com/ko/main/main.do" },
    ],
  },
  {
    title: "한국건설엔지니어링관리시스템",
    period: "2022.05 – 2024.01",
    description: "건설 행정 시스템 유지보수",
    stack: "HTML · CSS · JavaScript",
    contribution: 80,
    bullets: [
      "건설용역 반려 신청, 업 등록·수정·승인 로직 및 기능 수정",
      "고객사와의 요구사항 조율 및 오류사항 대응",
    ],
    links: [
      { label: "CEMS", href: "https://www.cems.kr/" },
      { label: "CIMS", href: "https://cims.or.kr:447/" },
    ],
  },
  {
    title: "교과서연구재단",
    period: "2020.12 – 2024.01",
    description: "교육 플랫폼 유지보수",
    stack: "HTML · CSS · JavaScript",
    contribution: 80,
    bullets: [
      "화면 레이아웃 수정 및 웹 접근성 개선",
      "교과서 질관리 평가 기능 개발",
    ],
    links: [
      { label: "교과서정보관", href: "https://www.kotry.kr/" },
      {
        label: "교과서민원 바로처리센터",
        href: "https://www.textbook114.com/index.jsp",
      },
      {
        label: "수정보완시스템",
        href: "https://www.textbook.or.kr/main/main.do",
      },
    ],
  },
  {
    title: "녹십자아이메드 · 검진고객센터",
    period: "2020.12 – 2024.01",
    description: "병원 홈페이지 제작(반응형)",
    stack: "HTML · CSS · JavaScript",
    contribution: 80,
    bullets: ["아이메드, 강남센터, 강북센터 홈페이지 화면 구현"],
    links: [
      { label: "녹십자아이메드", href: "https://www.gcimed.com/main" },
      {
        label: "강남센터",
        href: "https://www.gcimed.com/gangnam/main?HOMEPAGELINK=gangnam",
      },
      {
        label: "강북센터",
        href: "https://www.gcimed.com/gangbuk/main?HOMEPAGELINK=gangbuk",
      },
    ],
  },
];

const companies = [
  {
    name: "하이컨시",
    role: "퍼블리셔",
    period: "2025.01 – 2026.06",
    stack: "",
    projects: [
      {
        title: "북스 · 콘텐츠 플랫폼",
        period: "2025.12 – 2026.06",
        description:
          "북스: 도서 판매\n콘텐츠 플랫폼: 모의고사 판매, 응시·성적·입시 예측 서비스",
        stack: "Next.js(App Router) · TypeScript · Tailwind CSS · DaisyUI",
        contribution: 80,
        bullets: [
          "서비스 마이그레이션: 북스는 ASP 기반을 Next.js(App Router)로, 콘텐츠 플랫폼은 Vue 기반을 Next.js로 마이그레이션하며 프로젝트 구조와 공통 UI를 개선",
          "디자인 시스템 구축: Tailwind CSS와 DaisyUI로 Button, Input, Modal 등 공통 UI 컴포넌트를 구축, Vue·Next.js 프로젝트 간 UI 일관성을 위해 DaisyUI를 도입하고 화면 구현 과정에서 디자이너와 함께 컴포넌트 규칙을 점진적으로 정립",
          "모노레포 및 패키지화: 모노레포 환경에서 공통 컴포넌트·유틸리티를 관리하고, 디자인 시스템을 패키지화해 여러 프로젝트에서 재사용 가능한 구조를 구축",
          "서비스 개발: 공통 컴포넌트를 활용해 다양한 이벤트 페이지를 빠르게 제작할 수 있는 구조로 개발",
        ],
        links: [
          { label: "디자인 시스템", href: "https://sdijc.com/ui-components" },
          { label: "북스", href: "https://www.sdijbooks.com/main" },
          { label: "콘텐츠 플랫폼", href: "https://sdijc.com/" },
        ],
      },
      {
        title: "닷컴 · 북스 · 리트 운영",
        period: "2025.01 – 2026.06",
        description:
          "닷컴: 강의, 시간표, 입시설명회 등 입시 정보 제공\n북스: 도서 판매\n리트: LEET(법학적성시험) 강의·모의고사·교재 제공, 로스쿨 입시 전문 플랫폼",
        stack: "",
        contribution: 80,
        bullets: [
          "신규 기능 개발: 급식 제공, 풀서비스(점수로 합격 예측 서비스) 등 신규 기능 페이지 개발 및 UI 개선",
          "운영 이슈 대응: 운영 중 발생한 버그 수정 및 QA 대응으로 서비스 안정성 유지",
          "정책 변경 대응: 서비스 정책 변경에 따른 화면 및 기능 개선",
        ],
        links: [
          { label: "닷컴", href: "https://www.sdij.com/aca/" },
          { label: "북스", href: "https://www.sdijbooks.com/main" },
          { label: "리트", href: "https://www.sdijleet.com/" },
        ],
      },
    ],
  },
  {
    name: "리플럭스 REFLUX",
    role: "프론트엔드 개발자 · 선임",
    period: "2020.12 – 2024.01",
    stack: "",
    projects: reflux,
  },
];

const skillGroups = [
  {
    title: "Languages & Markup",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS", "SCSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Flutter",
      "jQuery",
      "Styled-components",
      "DaisyUI",
      "Chart.js",
    ],
  },
  {
    title: "Tools & Collaboration",
    skills: ["Git", "GitHub", "Figma", "Photoshop", "Jira"],
  },
];

const education = {
  school: "제주대학교",
  degree: "의류학과 학사",
  detail: "2015.03 – 2020.09 · GPA 4.1/4.5",
};

const certificate = {
  name: "GTQ 1급 (국가공인)",
  issuer: "한국생산성본부",
  date: "2019.12",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black px-6 pt-5 pb-2.5 sm:px-8 lg:px-[30px]">
      <Header navLabel="About" navHref="/about" />

      <main className="flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-start">
        <ContactSidebar />

        <div className="flex w-full flex-col items-start md:flex-1 md:pl-5">
          <section
            aria-label="Work experience"
            className="flex w-full flex-col items-start gap-9 border-t border-[#383838] pt-8 pb-16 lg:pb-20"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Experience
            </h2>
            {companies.map((company) => (
              <div
                key={company.name}
                aria-label={`Work experience at ${company.name}`}
                className="flex w-full flex-col gap-9 border-l border-[#383838] bg-[#111111] py-7 pr-4 pl-6 sm:pr-7"
              >
                <div className="flex w-full flex-col gap-1 text-[15px] leading-[1.4] tracking-[-0.01em]">
                  <h3 className="font-display text-base font-semibold tracking-[-0.01em]">
                    {company.name}
                  </h3>
                  <p className="text-[#ababab]">
                    {company.role} · {company.period}
                  </p>
                  {company.stack && (
                    <p className="text-[#ababab]">{company.stack}</p>
                  )}
                </div>
                <div className="flex w-full flex-col gap-12 lg:pr-5">
                  {company.projects.map((project) => (
                    <section
                      key={project.title}
                      aria-label={`Project: ${project.title}`}
                      className="flex w-full flex-wrap items-start gap-6 border-t border-[#383838]/50 pt-5 lg:gap-[30px]"
                    >
                      <div className="flex min-w-[220px] flex-1 flex-col items-start gap-3">
                        <h4 className="w-full font-display text-base font-semibold tracking-[-0.01em]">
                          {project.title}
                        </h4>
                        <div className="flex w-full flex-col gap-0.5 text-[15px] leading-[1.4] tracking-[-0.01em] text-[#ababab]">
                          {project.period && (
                            <p className="w-full">{project.period}</p>
                          )}
                          {project.description && (
                            <p className="w-full whitespace-pre-line">
                              {project.description}
                            </p>
                          )}
                          {project.stack && (
                            <p className="w-full">{project.stack}</p>
                          )}
                          {project.contribution && (
                            <div
                              className="flex w-full items-center gap-2 pt-1"
                              aria-label={`Personal contribution ${project.contribution}%`}
                            >
                              <div className="h-1 flex-1 overflow-hidden bg-[#232323]">
                                <div
                                  className="h-full bg-[#ababab]"
                                  style={{ width: `${project.contribution}%` }}
                                />
                              </div>
                              <span className="whitespace-nowrap text-[13px]">
                                개인 기여도 {project.contribution}%
                              </span>
                            </div>
                          )}
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              aria-label={`Visit ${link.label} (opens in new tab)`}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full"
                            >
                              {link.label} ↗
                            </a>
                          ))}
                        </div>
                      </div>
                      <ul className="min-w-[260px] flex-1 list-disc pl-5 text-[15px] leading-[1.4] tracking-[-0.005em]">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="mb-2 last:mb-0">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div
                        aria-label={`Screenshots for ${project.title}`}
                        className="flex w-full flex-wrap gap-3"
                      >
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex aspect-video min-w-[160px] flex-1 items-center justify-center rounded border border-dashed border-[#383838] text-xs text-[#ababab]"
                          >
                            Screenshot {i + 1}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            aria-label="Skills"
            className="flex w-full flex-col items-start gap-10 border-t border-[#383838] pt-8 pb-16 lg:pb-20"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Skills
            </h2>
            <div className="flex w-full flex-wrap gap-9 text-[15px] tracking-[-0.01em]">
              {skillGroups.map((group) => (
                <div key={group.title} className="min-w-[220px] flex-1">
                  <h4 className="mb-3 text-[#ababab]">{group.title}</h4>
                  <ul className="list-disc pl-5 leading-[1.3]">
                    {group.skills.map((skill) => (
                      <li key={skill} className="mb-1 last:mb-0">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-label="Educational background"
            className="flex w-full flex-col items-start gap-9 border-t border-[#383838] pt-8 pb-16 lg:pb-20"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Education
            </h2>
            <div className="flex w-full flex-col gap-9 text-[15px] tracking-[-0.01em] sm:flex-row">
              <h3 className="flex-1 font-normal leading-[1.4]">
                {education.school}
              </h3>
              <div className="flex-1">
                <h4 className="mb-1 leading-[1.4]">{education.degree}</h4>
                <h4 className="leading-[1.4] text-[#ababab]">
                  {education.detail}
                </h4>
              </div>
            </div>
          </section>

          <div className="flex w-full flex-col pb-16 lg:pb-20">
            <section
              aria-label="Certifications"
              className="flex w-full flex-col items-start gap-9 border-t border-[#383838]/50 pt-4"
            >
              <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
                Certifications:
              </h2>
              <p className="w-full text-[15px] leading-[1.4] tracking-[-0.01em]">
                {certificate.name} — {certificate.issuer}, {certificate.date}
              </p>
            </section>
          </div>

          <ContactFooter />
        </div>
      </main>
    </div>
  );
}
