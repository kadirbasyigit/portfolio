import netflix from './public/netflix.webp';
import netflixMobile from './public/netflix-mobile.webp';
import youtube from './public/youtube.webp';
import youtubeMobile from './public/youtube-mobile.webp';
import chatGPT from './public/chatGPT.webp';
import chatGPTMobile from './public/chatGPT-mobile.webp';
import weather from './public/weather.webp';
import weatherMobile from './public/weather-mobile.webp';
import bank from './public/bank.webp';
import bankMobile from './public/bank-mobile.webp';

export const projects = [
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
