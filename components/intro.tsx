import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <div className="">
      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-20 h-20 overflow-hidden transition-transform duration-300 rounded-full md:w-24 md:h-24 bg-neutral-50 hover:scale-105">
          <Image
            src="/ari.png"
            width={144}
            height={144}
            alt="Arielle Goodman"
            className="object-cover w-full h-full"
            priority={true}
            style={{ filter: "none" }}
            
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">Arielle Goodman</h1>
          <p className="text-sm">Junior Product Manager</p>
          <p className="text-sm prose prose-neutral dark:prose-invert">
            <Link href="mailto:ariellegoodman22@gmail.com">ariellegoodman22@gmail.com</Link>
          </p>
        </div>
      </div>
      
      <div>
        <h3>About</h3>
        <p className="text-sm leading-6 prose prose-neutral dark:prose-invert">
          {``}
          <Link href="https://www.steprepeat.com" target="_blank">
          StepRepeat.com 
          </Link>
          {` and `} 
          <Link href="https://www.bannerworld.com" target="_blank">
          BannerWorld.com
          </Link>
          {`Currently based in Los Angeles, CA, I am an innovative and results-oriented Junior Product Manager with a strong foundation in design, computer science, and the humanities. At New Vision Imaging, Inc., I manage and optimize digital experiences for StepRepeat.com and BannerWorld.com, leading website updates through WordPress and collaborating with stakeholders to improve functionality and user experience. Additionally, I craft strategies that bridge product and marketing efforts, driving engagement and enhancing brand visibility. I am passionate about applying creative problem-solving and data-driven insights to deliver impactful digital solutions and am eager to advance my career in product management as a Digital Innovator.`}
        </p>
      </div>
    </div>
  );
}
