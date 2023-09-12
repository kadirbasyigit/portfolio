'use client';

import { Progress } from '@/components/ui/progress';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
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

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const htmlRef = useRef<HTMLSpanElement | null>(null);
  const cssRef = useRef<HTMLSpanElement | null>(null);
  const jsRef = useRef<HTMLSpanElement | null>(null);
  const tailwindRef = useRef<HTMLSpanElement | null>(null);
  const reactRef = useRef<HTMLSpanElement | null>(null);
  const githubRef = useRef<HTMLSpanElement | null>(null);
  const materialUiRef = useRef<HTMLSpanElement | null>(null);
  const sassRef = useRef<HTMLSpanElement | null>(null);
  const nextjsRef = useRef<HTMLSpanElement | null>(null);
  const typescriptRef = useRef<HTMLSpanElement | null>(null);

  const animateNumber = (
    ref: MutableRefObject<HTMLSpanElement | null>,
    value: number
  ) => {
    const start = 0;
    const end = value;
    const duration = 1000;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentValue = start;

    const timer = setInterval(() => {
      currentValue += increment;
      if (ref.current) {
        ref.current.innerText = `${currentValue}%`;
      }

      if (currentValue === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (inView) {
      animateNumber(htmlRef, 95);
      animateNumber(cssRef, 85);
      animateNumber(jsRef, 75);
      animateNumber(tailwindRef, 80);
      animateNumber(reactRef, 70);
      animateNumber(githubRef, 70);
      animateNumber(materialUiRef, 65);
      animateNumber(sassRef, 70);
      animateNumber(nextjsRef, 60);
      animateNumber(typescriptRef, 70);
    }
  }, [inView]);

  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [tailwindProgress, setTailwindProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [githubProgress, setGithubProgress] = useState(0);
  const [materialUiProgress, setMaterialUiProgress] = useState(0);
  const [sassProgress, setSassProgress] = useState(0);
  const [nextjsProgress, setNextjsProgress] = useState(0);
  const [typescriptProgress, setTypescriptProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setHtmlProgress(95);
      setCssProgress(85);
      setJsProgress(75);
      setTailwindProgress(80);
      setReactProgress(70);
      setGithubProgress(70);
      setMaterialUiProgress(65);
      setSassProgress(70);
      setNextjsProgress(60);
      setTypescriptProgress(70);
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
        <div className="space-y-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <RiHtml5Fill className="w-10 h-10 text-red-500" />
            <Progress value={htmlProgress} />
            <span
              className={`font-medium font-sora count-up ${
                htmlProgress === 0 ? 'invisible' : ''
              }`}
              ref={htmlRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <RiCss3Fill className="w-10 h-10 text-blue-400" />
            <Progress value={cssProgress} />
            <span
              className={`font-medium font-sora count-up ${
                cssProgress === 0 ? 'invisible' : ''
              }`}
              ref={cssRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <RiJavascriptFill className="w-10 h-10 text-orange-400" />
            <Progress value={jsProgress} />
            <span
              className={`font-medium font-sora count-up ${
                jsProgress === 0 ? 'invisible' : ''
              }`}
              ref={jsRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="w-10 h-10 text-blue-600" />
            <Progress value={tailwindProgress} />
            <span
              className={`font-medium font-sora count-up ${
                tailwindProgress === 0 ? 'invisible' : ''
              }`}
              ref={tailwindRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <RiReactjsFill className="w-10 h-10 text-blue-500" />
            <Progress value={reactProgress} />
            <span
              className={`font-medium font-sora count-up ${
                reactProgress === 0 ? 'invisible' : ''
              }`}
              ref={reactRef}
            >
              0%
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <RiGithubFill className="w-10 h-10 text-black" />
            <Progress value={githubProgress} />
            <span
              className={`font-medium font-sora count-up ${
                githubProgress === 0 ? 'invisible' : ''
              }`}
              ref={githubRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <SiMui className="w-10 h-10 text-blue-500" />
            <Progress value={materialUiProgress} />
            <span
              className={`font-medium font-sora count-up ${
                materialUiProgress === 0 ? 'invisible' : ''
              }`}
              ref={materialUiRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <SiSass className="w-10 h-10 text-pink-500" />
            <Progress value={sassProgress} />
            <span
              className={`font-medium font-sora count-up ${
                sassProgress === 0 ? 'invisible' : ''
              }`}
              ref={sassRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <TbBrandNextjs className="w-10 h-10 text-black" />
            <Progress value={nextjsProgress} />
            <span
              className={`font-medium font-sora count-up ${
                nextjsProgress === 0 ? 'invisible' : ''
              }`}
              ref={nextjsRef}
            >
              0%
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <BiLogoTypescript className="w-10 h-10 text-blue-800" />
            <Progress value={typescriptProgress} />
            <span
              className={`font-medium font-sora count-up ${
                typescriptProgress === 0 ? 'invisible' : ''
              }`}
              ref={typescriptRef}
            >
              0%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
