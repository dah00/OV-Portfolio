import JobCard, { type JobCardProps } from "../experience/JobCard"
import SectionTitle from "../shared/SectionTitle"

const experiences: JobCardProps[] = [
  {
    timeline: "Jan 2024 - Present",
    role: "Software Engineer",
    company_name: "Tenafli",
    description: [
      "Developed and maintained two React Native apps Tenafli and Tenafli Pro that connect homeowners/renters with home service providers, initially focused on delivering new frontend features and UI enhancements.",
      "Implemented major product capabilities such as profile management, SSO authentication, gift card integration, image uploads, deep linking, push notifications, and job completion tracking — improving user engagement and operational workflows.",
      "Expanded scope to backend development - built and maintained APIs using Python (FastAPI) and deployed services on AWS to ensure secure, scalable data operations.",
      "Led end-to-end development of HenrieAI and AgefullyAI: created React Native apps and Next.js websites, developed a shared TypeScript component library and design system, and integrated native modules to ensure consistent cross-platform UX.",
    ],
    stacks: [
      "React Native",
      "Typescript",
      "Tailwind",
      "AWS (ECS, EC2, S3, DynamoDB, Cognito)",
      "Python",
    ],
    link: "https://apps.apple.com/us/app/tenafli-home-cleaners-more/id6475213449",
  },
  {
    timeline: "Oct 2023 - Dec 2023",
    role: "Software Engineer",
    company_name: "One Community",
    description: [
      "Developed and maintained two React Native apps Tenafli and Tenafli Pro that connect homeowners/renters with home service providers, initially focused on delivering new frontend features and UI enhancements.",
      "Implemented major product capabilities such as profile management, SSO authentication, gift card integration, image uploads, deep linking, push notifications, and job completion tracking — improving user engagement and operational workflows.",
      "Expanded scope to backend development - built and maintained APIs using Python (FastAPI) and deployed services on AWS (ECS, S3, DynamoDB, EC2, Cognito) to ensure secure, scalable data operations.",
      "Led end-to-end development of HenrieAI and AgefullyAI: created React Native apps and Next.js websites, developed a shared TypeScript component library and design system, and integrated native modules to ensure consistent cross-platform UX.",
    ],
    stacks: [
      "React Native",
      "Typescript",
      "Tailwind",
      "AWS (ECS, EC2, S3, DynamoDB, Cognito)",
      "Python",
    ],
    link: "https://apps.apple.com/us/app/tenafli-home-cleaners-more/id6475213449",
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-[var(--header-offset)] flex flex-col items-start gap-8 py-8"
    >
      <SectionTitle title="Experience" />

      <div className="flex w-full flex-col gap-10">
        {experiences.map((job, index) => (
          <JobCard
            key={`${job.company_name}-${job.timeline}-${index}`}
            {...job}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
