'use client';

import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { GoArrowUpRight } from 'react-icons/go';

type ProjectItemProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  techStack: string[];
  id: string;
  link: string;
  github: string;
};

const ProjectItem = ({
  image,
  alt,
  title,
  techStack,
  id,
  link,
  github,
}: ProjectItemProps) => {
  return (
    <div>
      <div className="relative">
        <div className="mb-2 sm:mb-5">
          <Image className="rounded-lg h-auto" src={image} alt={alt} />
        </div>
      </div>

      <div className="grid text-center gap-y-6">
        <h2 className="gradient-text text-xl">{title} </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {techStack.map(tech => (
            <span
              key={id}
              className="inline-block bg-gradient-badge text-white px-4 py-2 text-[12px] font-bold rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 mb-6 justify-center`}>
          <Button
            asChild
            variant="link"
            className="shadow-button | rounded-lg flex justify-between gap-2 items-center group transition duration-300 ease-in-out"
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
            className="shadow-button | rounded-lg flex justify-between gap-2 items-center group transition duration-300 ease-in-out"
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
        <div className="w-fit mx-auto bg-gradient-button rounded-full p-[3px]">
          <div className="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
            <div className="text-sm font-black text-white p-2">
              All projects are fully responsive for all devices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
