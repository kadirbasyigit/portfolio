'use client';

import netflix from '../public/netflix.webp';
import netflixMobile from '../public/netflix-mobile.webp';
import youtube from '../public/youtube.webp';
import youtubeMobile from '../public/youtube-mobile.webp';
import chatGPT from '../public/chatGPT.webp';
import chatGPTMobile from '../public/chatGPT-mobile.webp';
import weather from '../public/weather.webp';
import weatherMobile from '../public/weather-mobile.webp';
import bank from '../public/bank.webp';
import bankMobile from '../public/bank-mobile.webp';

import ProjectItem from './ProjectItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import nextButton from '../public/next-button.png';
import prevButton from '../public/prev-button.png';
import { Button } from './ui/button';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 'netflix',
      image: netflix,
      alt: 'netflix clone image',
      imageMobile: netflixMobile,
      title: 'NETFLIX CLONE',
      techStack: ['Nextjs', 'Tailwind', 'TMDB API', 'MUI', 'Typescript'],
      link: 'https://nextflix-k1d12r04.vercel.app/',
      github: 'https://github.com/k1d12r04/nextflix-app',
    },
    {
      id: 'youtube',
      image: youtube,
      alt: 'youtube clone image',
      imageMobile: youtubeMobile,
      title: 'YOUTUBE CLONE',
      techStack: ['Vitejs', 'React Router', 'RAPID API', 'MUI', 'Typescript'],
      link: 'https://youtube-app-with-rapidapi.netlify.app/',
      github: 'https://github.com/k1d12r04/youtube-app',
    },
    {
      id: 'chatGPT',
      image: chatGPT,
      alt: 'chatGPT landing page image',
      imageMobile: chatGPTMobile,
      title: 'CHATGPT LANDING PAGE',
      techStack: ['Vitejs', 'Scss', 'Animated with Aos'],
      link: 'https://gpt3ai-landing.netlify.app/',
      github: 'https://github.com/k1d12r04/chatgpt-website',
    },
    {
      id: 'weather',
      image: weather,
      alt: 'weather image',
      imageMobile: weatherMobile,
      title: 'DYNAMIC BACKGROUND WEATHER APP',
      techStack: [
        'Nextjs',
        'Tailwind',
        'Shadcn UI',
        'Open Weather Map API',
        'Framer Motion',
        'Unsplash Image API',
        'Typescript',
      ],
      link: 'https://nextjs-weather-app-k1d12r04.vercel.app/',
      github: 'https://github.com/k1d12r04/nextjs-weather-app',
    },
    {
      id: 'bank',
      image: bank,
      alt: 'bank image',
      imageMobile: bankMobile,
      title: 'BANK LANDING PAGE',
      techStack: ['Vitejs', 'Tailwind'],
      link: 'https://bank-landing-website.netlify.app/',
      github: 'https://github.com/k1d12r04/bank-website',
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-4 md:px-24 md:py-10 rounded-lg bg-white dark:bg-black dark:text-white/90 mb-20 font-sora shadow-xl"
    >
      <h3 className="text-3xl text-center mb-10 font-sora border-b-2 border-teal-300">
        PROJECTS
      </h3>
      <Swiper
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
        }}
        grabCursor={true}
        navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <ProjectItem
              id={project.id}
              image={project.image}
              alt={project.alt}
              imageMobile={project.imageMobile}
              title={project.title}
              techStack={project.techStack}
              link={project.link}
              github={project.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className="arrow-left | hidden lg:block absolute top-1/2 left-1 bg-transparent hover:bg-transparent hover:-left-1 transition-all duration-200">
        <Image src={prevButton} alt="prev button" />
      </Button>
      <Button className="arrow-right | hidden lg:block absolute top-1/2 right-1 bg-transparent hover:bg-transparent hover:-right-1 transition-all duration-200">
        <Image src={nextButton} alt="next button" />
      </Button>
      <div className="swiper-pagination | absolute bottom-0 space-x-2 dark:bg-white/60 py-2 rounded-md"></div>
    </section>
  );
};

export default Projects;
