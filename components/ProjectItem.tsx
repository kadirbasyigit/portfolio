import Image from 'next/image';
import { Button } from './ui/button';
import { GoArrowUpRight } from 'react-icons/go';

const ProjectItem = ({
  image,
  alt,
  imageMobile,
  title,
  techStack,
  id,
  link,
  github,
}: any) => {
  return (
    <div className="mb-20">
      <div className="relative group">
        <div className="mb-10 cursor-pointer hover:blur-md ">
          <Image className="rounded-lg" src={image} alt={alt} />
        </div>
        <Image
          className="pointer-events-none hidden group-hover:block absolute left-1/2 top-0 -translate-x-1/2 w-60 h-auto object-cover rounded-lg"
          src={imageMobile}
          alt="netflix clone mobile"
        />
      </div>

      <div className="grid text-center gap-y-6">
        <h2 className="gradient-text text-xl">{title} </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {techStack.map((tech: any) => (
            <span
              key={id}
              className="inline-block bg-gradient-badge text-white px-4 py-2 text-[12px] font-bold rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            asChild
            variant="link"
            className="rounded-lg flex justify-between gap-2 items-center group shadow-button transition duration-300 ease-in-out"
          >
            <a
              className="bg-gradient-button text-white "
              href={link}
              target="_blank"
            >
              View Live
              <GoArrowUpRight className="group-hover:-mt-1 w-5 h-5 transition-all" />
            </a>
          </Button>
          <Button
            asChild
            variant="link"
            className="rounded-lg flex justify-between gap-2 items-center group shadow-button transition duration-300 ease-in-out"
          >
            <a
              className="bg-gradient-button text-white"
              href={github}
              target="_blank"
            >
              Github
              <GoArrowUpRight className="group-hover:-mt-1 w-5 h-5 transition-all" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
