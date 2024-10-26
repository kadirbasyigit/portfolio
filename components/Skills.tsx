'use client';

import { Progress } from '@/components/ui/progress';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiGithubFill,
} from 'react-icons/ri';
import { SiTailwindcss, SiMui, SiSass } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';

const skillsData = [
  { icon: <RiHtml5Fill className="w-10 h-10 text-red-500" />, progress: 90 },
  { icon: <RiCss3Fill className="w-10 h-10 text-blue-400" />, progress: 85 },
  {
    icon: <RiJavascriptFill className="w-10 h-10 text-orange-400" />,
    progress: 80,
  },
  { icon: <SiTailwindcss className="w-10 h-10 text-blue-600" />, progress: 85 },
  { icon: <RiReactjsFill className="w-10 h-10 text-blue-500" />, progress: 80 },
  {
    icon: <RiGithubFill className="w-10 h-10 text-black dark:text-white" />,
    progress: 75,
  },
  { icon: <SiMui className="w-10 h-10 text-blue-500" />, progress: 75 },
  { icon: <SiSass className="w-10 h-10 text-pink-500" />, progress: 75 },
  {
    icon: <TbBrandNextjs className="w-10 h-10 text-black dark:text-white" />,
    progress: 85,
  },
  {
    icon: <BiLogoTypescript className="w-10 h-10 text-blue-800" />,
    progress: 80,
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const skillRefs = useRef<(HTMLSpanElement | null)[]>(
    Array(skillsData.length).fill(null)
  );

  const [progressValues, setProgressValues] = useState(
    Array(skillsData.length).fill(0)
  );

  const animateNumber = (index: number, value: number) => {
    const start = 0;
    const duration = 1000;
    const range = value - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentValue = start;

    const timer = setInterval(() => {
      currentValue += 1;
      if (skillRefs.current[index]) {
        skillRefs.current[index]!.innerText = `${currentValue}%`;
      }

      if (currentValue === value) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (inView) {
      skillsData.forEach((skill, index) => {
        animateNumber(index, skill.progress);
        setProgressValues(prev => {
          const newProgress = [...prev];
          newProgress[index] = skill.progress;
          return newProgress;
        });
      });
    }
  }, [inView]);

  return (
    <section
      id="skills"
      className="skills-bg p-6 shadow-2xl rounded-lg mb-20 bg-white dark:bg-black border-8 border-teal-100 dark:border-teal-700 dark:text-white/90"
    >
      <h3 className="text-3xl text-center mb-10 font-sora border-b-2 border-teal-300">
        SKILLS
      </h3>

      <div className="grid md:grid-cols-2 gap-x-16" ref={ref}>
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            {skill.icon}
            <Progress value={progressValues[index]} />
            <span
              className={`font-medium font-sora count-up ${
                progressValues[index] === 0 ? 'invisible' : ''
              }`}
              ref={el => (skillRefs.current[index] = el)}
            >
              0%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
