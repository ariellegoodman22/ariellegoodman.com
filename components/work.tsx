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
    title: "Marketing Coordinator",
    company: "New Vision Imaging, Inc.",
    location: "Los Angeles, CA",
    startDate: "October 2024",
    endDate: "Present",
    description:
    "Support website updates using WordPress to enhance the user experience, ensuring that web pages are visually appealing and feature compelling product descriptions aligned with company standards. Additionally, I coordinate and implement social media strategies for BannerWorld.com and StepRepeat.com, creating engaging content to drive audience engagement and brand visibility.",
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
    "Led usability testing studies and managed the entire lifecycle, from participant recruitment to analysis, identifying critical pain points that significantly improved product engagement and user satisfaction. I conducted in-depth stakeholder interviews with over 20 participants, uncovering essential user pain points and preferences, which were implemented into the website. These efforts culminated in a detailed set of recommendations that boosted website engagement by 35%.",
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
