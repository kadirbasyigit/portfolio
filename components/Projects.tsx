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
      techStack: ['Nextjs', 'Tailwind', 'TMDB API', 'MUI'],
    },
    {
      id: 'youtube',
      image: youtube,
      alt: 'youtube clone image',
      imageMobile: youtubeMobile,
      title: 'YOUTUBE CLONE',
      techStack: ['Vitejs', 'React Router', 'RAPID API', 'MUI'],
    },
    {
      id: 'chatGPT',
      image: chatGPT,
      alt: 'chatGPT landing page image',
      imageMobile: chatGPTMobile,
      title: 'CHATGPT LANDING PAGE',
      techStack: ['Vitejs', 'Scss', 'Animated with Aos'],
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
      ],
    },
    {
      id: 'bank',
      image: bank,
      alt: 'bank image',
      imageMobile: bankMobile,
      title: 'BANK LANDING PAGE',
      techStack: ['Vitejs', 'Tailwind'],
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
          id={project.id}
          image={project.image}
          alt={project.alt}
          imageMobile={project.imageMobile}
          title={project.title}
          techStack={project.techStack}
        />
      ))}
    </section>
  );
};

export default Projects;
