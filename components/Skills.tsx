'use client';

import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';
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
    <section id="skills" className="p-6 shadow-2xl rounded-lg mb-20">
      <h3 className="text-4xl text-center mb-10 font-sora border-b-2 border-teal-300">
        SKILLS
      </h3>

      <div className="grid md:grid-cols-2 gap-x-16" ref={ref}>
        <div className="space-y-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <RiHtml5Fill className="w-10 h-10 text-red-500" />
            <Progress value={htmlProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <RiCss3Fill className="w-10 h-10 text-blue-400" />
            <Progress value={cssProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <RiJavascriptFill className="w-10 h-10 text-orange-400" />
            <Progress value={jsProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="w-10 h-10 text-blue-600" />
            <Progress value={tailwindProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <RiReactjsFill className="w-10 h-10 text-blue-500" />
            <Progress value={reactProgress} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <RiGithubFill className="w-10 h-10 text-black" />
            <Progress value={githubProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <SiMui className="w-10 h-10 text-blue-500" />
            <Progress value={materialUiProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <SiSass className="w-10 h-10 text-pink-500" />
            <Progress value={sassProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <TbBrandNextjs className="w-10 h-10 text-black" />
            <Progress value={nextjsProgress} />
          </div>
          <div className="flex items-center space-x-4">
            <BiLogoTypescript className="w-10 h-10 text-blue-800" />
            <Progress value={typescriptProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
