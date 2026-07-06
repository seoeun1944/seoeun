import { Header } from "@/components/Header";
import { ContactSidebar } from "@/components/ContactSidebar";
import { ContactFooter } from "@/components/ContactFooter";

const experience = [
  {
    title: "Senior Producer",
    company: "Creative Agency XYZ",
    companyHref: "https://www.figma.com/sites",
    period: "June 2022 – Present",
    location: "Remote & New York, NY",
    bullets: [
      "Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.",
      "Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.",
    ],
  },
  {
    title: "Senior Producer",
    company: "Pixel Studios",
    companyHref: "https://www.figma.com/sites",
    period: "December 2021 - June 2022",
    location: "New York, NY",
    bullets: [
      "Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing campaigns, ensuring seamless execution and brand alignment.",
      "Directed all phases of production operations (pre-production, production, post-production), meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.",
      "Strategically developed and managed production schedules, creative strategies, and talent relations, optimizing resources to deliver high-quality content within budget parameters.",
      "Clients include: Nestive, Zentrox, Pollenate, Vireo and more.",
    ],
  },
  {
    title: "Content Producer",
    company: "Creative Hub Studio",
    companyHref: "https://www.figma.com/sites",
    period: "October 2016 - March 2018",
    location: "Los Angeles, CA",
    bullets: [
      "Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.",
      "Proactively identified and integrated industry trends, emerging technologies, and cultural insights to enhance creative output and maintain brand relevance.",
      "Clients include: Lunethra, Forgekind and more.",
    ],
  },
];

const skillGroups = [
  {
    title: "Project Management",
    skills: [
      "Budget Management & Forecasting",
      "Timeline Development & Execution",
      "Vendor & Contract Negotiation",
      "On-Site Production Management",
    ],
  },
  {
    title: "Communication & Collaboration",
    skills: [
      "Cross-Functional Team Leadership",
      "Client Relationship Management",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Strategic & Creative Oversight",
    skills: [
      "Creative Strategy Development",
      "Talent Relations & Management",
      "Creative Direction Oversight",
      "Brand Alignment",
    ],
  },
];

const recommendations = [
  {
    quote:
      "Alexandra brings sunshine to creative teams. Her optimism, problem-solving, and clear communication drive success.",
    author: "Client, Driftwell",
  },
  {
    quote:
      "Alexandra is hungry to tackle new challenges. She’s delightful with clients and can diffuse a tense room with her laugh.",
    author: "Creative Director, Creative Agency XYZ",
  },
];

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
            <div className="flex w-full flex-col gap-12 lg:pr-5">
              {experience.map((job) => (
                <section
                  key={job.company}
                  aria-label={`Work experience at ${job.company}`}
                  className="flex w-full flex-wrap items-start gap-6 border-t border-[#383838]/50 pt-5 lg:gap-[30px]"
                >
                  <div className="flex min-w-[220px] flex-1 flex-col items-start gap-3">
                    <h3 className="w-full font-display text-base font-semibold tracking-[-0.01em]">
                      {job.title}
                    </h3>
                    <div className="flex w-full flex-col gap-0.5 text-[15px] leading-[1.4] tracking-[-0.01em] text-[#ababab]">
                      <a
                        aria-label={`Visit ${job.company} website (opens in new tab)`}
                        href={job.companyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        {job.company} ↗
                      </a>
                      <p className="w-full">{job.period}</p>
                      <p className="w-full">{job.location}</p>
                    </div>
                  </div>
                  <ul className="min-w-[260px] flex-1 list-disc pl-5 text-[15px] leading-[1.4] tracking-[-0.005em]">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="mb-2 last:mb-0">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section
            aria-label="Skills"
            className="flex w-full flex-col items-start gap-10 border-t border-[#383838] pt-8 pb-16 lg:pb-20"
          >
            <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
              Skills
            </h2>
            <div className="flex w-full flex-wrap gap-9 text-[15px] tracking-[-0.01em]">
              <div className="flex min-w-[220px] flex-1 flex-col gap-12">
                {skillGroups.slice(0, 2).map((group) => (
                  <div key={group.title} className="w-full">
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
              <div className="min-w-[260px] flex-1">
                <h4 className="mb-3 text-[#ababab]">{skillGroups[2].title}</h4>
                <ul className="list-disc pl-5 leading-[1.3]">
                  {skillGroups[2].skills.map((skill) => (
                    <li key={skill} className="mb-1 last:mb-0">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
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
                University of California, Los Angeles (UCLA)
              </h3>
              <div className="flex-1">
                <h4 className="mb-1 leading-[1.4]">
                  Bachelor of Fine Arts in Graphic Design
                </h4>
                <h4 className="leading-[1.4] text-[#ababab]">
                  Minor: Studio Photography
                </h4>
              </div>
            </div>
          </section>

          <div className="flex w-full flex-col gap-9 pb-16 sm:flex-row lg:pb-20">
            <section
              aria-label="Recommendations"
              className="flex flex-1 flex-col items-start gap-9 border-t border-[#383838]/50 pt-4"
            >
              <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
                Recommendations:
              </h2>
              <div className="w-full text-[15px] leading-[1.4] tracking-[-0.01em]">
                {recommendations.map((rec, i) => (
                  <p key={rec.author} className={i === 0 ? "mb-4" : ""}>
                    “{rec.quote}”
                    <br />
                    <span className="text-[#ababab]">{rec.author}</span>
                  </p>
                ))}
              </div>
            </section>
            <section
              aria-label="Certifications"
              className="flex flex-1 flex-col items-start gap-9 border-t border-[#383838]/50 pt-4"
            >
              <h2 className="w-full font-display text-[13px] font-semibold tracking-[-0.005em]">
                Certifications:
              </h2>
              <p className="w-full text-[15px] leading-[1.4] tracking-[-0.01em]">
                Safe Sets International - COVID-19 Level Production Safety,
                2020
              </p>
            </section>
          </div>

          <ContactFooter />
        </div>
      </main>
    </div>
  );
}
