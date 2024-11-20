import Link from "next/link";
import { Icons } from "./icons";

interface Link {
  website: string;
  title: string;
  href: string;
}

const links = [
  {
    website: "GitHub",
    title: "@ariellegoodman22",
    href: "https://github.com/ariellegoodman22",
  },
  {
    website: "Email",
    title: "ariellegoodman22@gmail.com",
    href: "mailto:ariellegoodman22@gmail.com",
  },
] satisfies Link[];

export function Links() {
  return (
    <div>
      <h3 className="mb-6">Links</h3>

      <div className="flex flex-col space-y-4">
        {links.map((link, linkIdx) => (
          <div
            key={linkIdx}
            className="grid content-start grid-cols-1 gap-2 sm:grid-cols-4"
          >
            <p className="text-sm prose prose-neutral dark:prose-invert">
              {link.website}
            </p>
            <div className="space-y-1 text-sm prose sm:col-span-3 prose-neutral dark:prose-invert">
              <Link href={link.href} target="_blank">
                {link.title}
                <Icons.arrow className="inline-flex items-center w-3.5 h-3.5 ml-1 prose prose-neutral dark:prose-invert" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
