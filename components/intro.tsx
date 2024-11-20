import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <div className="">
      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-20 h-20 overflow-hidden transition-transform duration-300 rounded-full md:w-24 md:h-24 bg-neutral-50 hover:scale-105">
          <Image
            src="/avatar.png"
            width={144}
            height={144}
            alt="Arielle Goodman"
            className="object-cover w-full h-full"
            priority={true}
            style={{
              filter: "grayscale(100%)", // Apply black-and-white filter
            }}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">Arielle Goodman</h1>
          <p className="text-sm">Marketing Coordinator</p>
          <p className="text-sm prose prose-neutral dark:prose-invert">
            <Link href="mailto:ariellegoodman22@gmail.com">ariellegoodman22@gmail.com</Link>
          </p>
        </div>
      </div>
      
      <div>
        <h3>About</h3>
        <p className="text-sm leading-6 prose prose-neutral dark:prose-invert">
          {`Currently based in Los Angeles, CA, I am an innovative and results-oriented Marketing Coordinator with a diverse background in design, computer science, and the humanities. 
          As a creative and nonlinear thinker, I excel at crafting exceptional user experiences through unique problem-solving strategies. At New Vision Imaging, Inc., I enhance `}
          <Link href="https://www.steprepeat.com" target="_blank">
          StepRepeat.com 
          </Link>
          {` and `} 
          <Link href="https://www.bannerworld.com" target="_blank">
          BannerWorld.com
          </Link>
          {` by managing website updates via WordPress and executing effective social media strategies.  
          I am excited to advance my career by seeking new opportunities to apply my skills and further develop as a Digital Innovator.`}
        </p>
      </div>
    </div>
  );
}
