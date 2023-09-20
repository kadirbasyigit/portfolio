'use client';

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

import { projects } from '../projects';

const Projects = () => {
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
          clickable: true,
        }}
        cssMode
        spaceBetween={20}
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
      <Button className="arrow-left | left-0 top-8 w-20 h-20 lg:block absolute lg:top-1/2 lg:left-1 bg-transparent hover:bg-transparent lg:hover:-left-1 transition-all duration-200">
        <Image src={prevButton} alt="prev button" />
      </Button>
      <Button className="arrow-right | right-0 top-8 w-20 h-20 lg:block absolute lg:top-1/2 lg:right-1 bg-transparent hover:bg-transparent lg:hover:-right-1 transition-all duration-200">
        <Image src={nextButton} alt="next button" />
      </Button>
      <div className="swiper-pagination | absolute bottom-0 space-x-2 dark:bg-white/60 py-2 rounded-md"></div>
    </section>
  );
};

export default Projects;
