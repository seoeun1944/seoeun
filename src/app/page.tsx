import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const reflux = [
  {
    title: "부동산 조각투자 서비스 (피스원)",
    period: "2023.05 – 2024.01",
    stack: "Flutter · Dart",
    bullets: [
      "페이지 리로딩: 실시간 정보 페이지를 위해 뒤로가기 시에도 페이지가 새로고침되도록 API를 재호출해 리로딩을 구현, 앱 구조상 스택 페이지가 정적 상태로 유지되는 문제를 해결",
      "Provider 상태 관리: Provider와 ChangeNotifier로 매수/매도 수량·금액 계산 상태를 관리하고 상태 변경에 따라 UI를 자동 업데이트해 코드 복잡도를 줄이고 렌더링 성능을 향상",
      "프로젝트 중반부터 앱개발 팀리드를 겸업하며 Slack, Jira 등 협업 도구로 작업·오류·수정사항 진행 상황을 투명하게 관리",
      "핀 입력, 생체 인증, SNS 로그인 로직 수정 및 로그인 유지 캐시 저장으로 사용성 개선",
      "매수·매도 기능 및 실시간 반영 그래프 로직 구현",
      "iOS TestFlight 관리·업데이트, Android 빌드 버전 관리(출시 전)",
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    title: "한국투자신탁운용 · ACE ETF",
    period: "2022.10 – 2023.05",
    stack: "React · SCSS",
    bullets: [
      "Styled-components로 비슷한 두 사이트의 중복되는 헤더·게시판 스타일을 독립적으로 관리·재사용해 코드 일관성을 유지",
      "SCSS 계층 구조로 색상·폰트·버튼 스타일을 변수와 믹스인으로 관리해 코드 중복을 최소화하고 유지보수성을 개선",
      "aria 속성과 포커스 관리로 웹 접근성 인증 획득",
      "계산기, 투자정보 게시판, 소개 페이지, 상품 상세 화면 및 전체 스크롤 애니메이션 구현",
    ],
    links: [
      { label: "한국투자신탁운용", href: "https://kim.koreainvestment.com" },
      { label: "ACE ETF", href: "https://www.aceetf.co.kr" },
    ],
  },
  {
    title: "파스텔몰 리뉴얼",
    period: "2021.10 – 2022.02",
    stack: "HTML · CSS · JavaScript · React Native",
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
    title: "광동 약국몰 유지보수",
    period: "2022.12 – 2023.02",
    stack: "JavaScript",
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
    stack: "React Native",
    bullets: [
      "Customer 플랫폼: 식당 후기 및 예약 화면 구현",
      "Operator & Staff 플랫폼: 직원 관리 및 재료 주문 화면 구현",
    ],
    links: [{ label: "소개 페이지", href: "https://menutour.biz" }],
  },
  {
    title: "법무법인 율촌 홈페이지 유지보수",
    period: "2020.12 – 2024.01",
    stack: "HTML · CSS · JavaScript",
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
    stack: "HTML · CSS · JavaScript",
    bullets: [
      "건설용역 반려 신청, 업 등록·수정·승인 로직 및 기능 수정",
      "고객사와의 소통 및 오류사항 조율 등 PM 업무 겸업",
    ],
    links: [
      { label: "CEMS", href: "https://www.cems.kr/" },
      { label: "CIMS", href: "https://cims.or.kr:447/" },
    ],
  },
  {
    title: "교과서연구재단",
    period: "2020.12 – 2024.01",
    stack: "HTML · CSS · JavaScript",
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
    stack: "HTML · CSS · JavaScript",
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
    role: "북스 / 콘텐츠 플랫폼",
    period: "2024.xx – 현재",
    stack:
      "Next.js(App Router) · React · TypeScript · Tailwind CSS · DaisyUI",
    projects: [
      {
        title: "북스 · 교육 콘텐츠 플랫폼 구축 및 운영",
        period: "",
        stack: "",
        bullets: [
          "서비스 마이그레이션: ASP 기반 북스 서비스를 Next.js(App Router) 환경으로 마이그레이션하고, Vue 기반 콘텐츠 플랫폼을 Next.js로 전환하며 프로젝트 구조와 공통 UI를 개선",
          "디자인 시스템 구축: Tailwind CSS와 DaisyUI로 Button, Input, Modal 등 공통 UI 컴포넌트를 구축, Vue·Next.js 프로젝트 간 UI 일관성을 위해 DaisyUI를 도입하고 디자이너와 함께 컴포넌트 규칙을 점진적으로 정립",
          "모노레포 및 패키지화: 모노레포 환경에서 공통 컴포넌트·유틸리티를 관리하고, 디자인 시스템을 패키지화해 여러 프로젝트에서 재사용 가능한 구조를 구축",
          "서비스 개발: 급식 제공 페이지 개발, 공통 컴포넌트를 활용한 이벤트 페이지 신속 제작 구조 설계, LEET 풀서비스(점수 기반 합격 예측 서비스) 화면 개발",
          "운영 및 유지보수: 북스·닷컴·LEET 서비스 운영, 신규 기능 개발과 UI 개선, 운영 이슈 대응 및 QA 수정, 서비스 정책 변경에 따른 화면·기능 개선",
        ],
        links: [] as { label: string; href: string }[],
      },
      {
        title: "LEET",
        period: "",
        stack: "",
        bullets: [
          "이벤트 페이지 작업",
          "풀서비스(점수로 합격 예측 서비스) 신규 기능 페이지 작업",
        ],
        links: [] as { label: string; href: string }[],
      },
      {
        title: "닷컴 · 북스 · LEET 운영",
        period: "",
        stack: "",
        bullets: ["운영 중 발생한 UI 개선 및 기능 수정", "서비스 정책 변경 대응"],
        links: [] as { label: string; href: string }[],
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
    skills: ["React", "React Native", "Next.js", "Flutter", "jQuery"],
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
            {companies.map((company, companyIndex) => (
              <div
                key={company.name}
                aria-label={`Work experience at ${company.name}`}
                className={
                  companyIndex === 0
                    ? "flex w-full flex-col gap-9"
                    : "flex w-full flex-col gap-9 border-t border-[#383838] pt-9"
                }
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
                          {project.stack && (
                            <p className="w-full">{project.stack}</p>
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
