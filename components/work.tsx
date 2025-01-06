import Link from "next/link";
import { Icons } from "./icons";

interface Job {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string | JSX.Element;
  skills: string[];
  href?: string;
}

const jobs = [
  {
    title: "Junior Product Manager",
    company: "New Vision Imaging, Inc.",
    location: "Los Angeles, CA",
    startDate: "March 2024",
    endDate: "Present",
    description:
    "Lead website updates using WordPress to optimize user experience, ensuring web pages are visually compelling, feature high-quality product descriptions, and align with company standards. Develop and execute social media strategies to strengthen brand visibility and audience engagement for BannerWorld.com and StepRepeat.com. Collaborate cross-functionally with stakeholders to align digital experiences with broader product and marketing goals.",
    href: "https://www.steprepeat.com",
    skills: ["WordPress", "HTML/CSS", "Canva"],
  },
  {
    title: "Guest Relations Coordinator",
    company: "The Beverly Hills Hotel",
    location: "Beverly Hills, CA",
    startDate: "October 2023",
    endDate: "October 2024",
    description:
    "Operated Nexus and Opera software to coordinate and fulfill guest requests, manage room allocations, and facilitate recognition deliveries, consistently demonstrating attention to detail and timely completion. I also exhibited strong written and verbal communication skills by interacting with over 300 customers daily via phone and email. Additionally, I analyzed guest feedback using Nexus and Opera software, enabling data-informed decisions and actionable recommendations to improve guest satisfaction.",
    href: "",
    skills: [
      ""
    ],
  },
  {
    title: "UX Research Coordinator",
    company: "Robert E. Kennedy Library",
    location: "San Luis Obispo, CA",
    startDate: "September 2022",
    endDate: "June 2023",
    description:
    "Led usability testing studies and managed the entire lifecycle, from participant recruitment to analysis, identifying critical pain points that significantly improved product engagement and user satisfaction. Through the results of our usability testing, our team was able to achieve a 33% increase in task success rates and a 24% reduction in task completion times, resulting in a more intuitive digital experience.",
    href: "https://lib.calpoly.edu",
    skills: ["WordPress", "Figma", "SurveyMonkey", "Adobe CC", "Google Analytics"],
  },
] satisfies Job[];

export function Work() {
  return (
    <div>
      <h3 className="mb-6">Work</h3>

      <div className="flex flex-col space-y-8">
        {jobs.map((job, jobIdx) => (
          <div
            key={jobIdx}
            className="grid content-start grid-cols-1 gap-2 sm:grid-cols-4"
          >
            <p className="text-sm prose prose-neutral dark:prose-invert">
              {job.startDate} – {job.endDate}
            </p>
            <div className="space-y-1 text-sm prose sm:col-span-3 prose-neutral dark:prose-invert">
              {job.href ? (
                <>
                  <Link href={job.href} target="_blank">
                    {job.title} – {job.company}
                    <Icons.arrow className="inline-flex items-center w-3.5 h-3.5 ml-1 prose prose-neutral dark:prose-invert" />
                  </Link>
                </>
              ) : (
                <a className="no-underline">
                  {job.title} – {job.company}
                </a>
              )}
              <p className="text-xs leading-6 prose prose-neutral dark:prose-invert">
                {job.location}
              </p>
              <p>{job.description}</p>
              {job.skills.length > 0 && (
                <div className="flex flex-wrap">
                  {job.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-2 py-1 mt-2 mr-2 text-xs font-medium leading-4 rounded-full bg-neutral-100 dark:bg-neutral-900"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
