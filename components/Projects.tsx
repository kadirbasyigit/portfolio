import netflix from '../public/assets/netflix.webp';
import netflixMobile from '../public/assets/netflix-mobile.webp';
import youtube from '../public/assets/youtube.webp';
import youtubeMobile from '../public/assets/youtube-mobile.webp';
import chatGPT from '../public/assets/chatGPT.webp';
import chatGPTMobile from '../public/assets/chatGPT-mobile.webp';
import weather from '../public/assets/weather.webp';
import weatherMobile from '../public/assets/weather-mobile.webp';
import bank from '../public/assets/bank.webp';
import bankMobile from '../public/assets/bank-mobile.webp';

import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      id: 'netflix',
      image: netflix,
      alt: 'netflix clone image',
      imageMobile: netflixMobile,
      title: 'NETFLIX CLONE',
    },
    {
      id: 'youtube',
      image: youtube,
      alt: 'youtube clone image',
      imageMobile: youtubeMobile,
      title: 'YOUTUBE CLONE',
    },
    {
      id: 'chatGPT',
      image: chatGPT,
      alt: 'chatGPT landing page image',
      imageMobile: chatGPTMobile,
      title: 'CHATGPT LANDING PAGE',
    },
    {
      id: 'weather',
      image: weather,
      alt: 'weather image',
      imageMobile: weatherMobile,
      title: 'DYNAMIC BACKGROUND WEATHER APP',
    },
    {
      id: 'bank',
      image: bank,
      alt: 'bank image',
      imageMobile: bankMobile,
      title: 'BANK LANDING PAGE',
    },
  ];

  return (
    <section
      id="projects"
      className="py-4 md:px-24 md:py-10 rounded-lg bg-white mb-20 font-sora shadow-xl"
    >
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          image={project.image}
          alt={project.alt}
          imageMobile={project.imageMobile}
          title={project.title}
        />
      ))}
    </section>
  );
};

export default Projects;
