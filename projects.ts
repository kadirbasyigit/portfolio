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
import quiz from './public/quiz.webp';
import quizMobile from './public/quiz-mobile.webp';
import pharmacyOnDuty from './public/pharmacy-on-duty.webp';
import pharmacyOnDutyMobile from './public/pharmacy-on-duty-mobile.webp';

export const projects = [
  {
    id: 'pharmacy',
    image: pharmacyOnDuty,
    alt: 'pharmacy on duty app',
    imageMobile: pharmacyOnDutyMobile,
    title: 'PHARMACY ON DUTY APP',
    techStack: [
      'Vite',
      'Tailwind',
      'TanStack Query',
      'TypeScript',
      'Mantine',
      'Nosy API',
    ],
    link: 'https://pharmacyonduty.netlify.app/',
    github: 'https://github.com/kadirbasyigit/pharmacy-on-duty',
  },
  {
    id: 'quiz',
    image: quiz,
    alt: 'quiz app',
    imageMobile: quizMobile,
    title: 'QUIZ APP WITH CONTENTFUL',
    techStack: [
      'Nextjs',
      'Tailwind',
      'Next UI',
      'Contenful API',
      'Typescript',
      'Framer Motion',
    ],
    link: 'https://quiz-app-with-next.vercel.app/',
    github: 'https://github.com/kadirbasyigit/quiz-app-with-next',
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
    github: 'https://github.com/kadirbasyigit/nextjs-weather-app',
  },
  {
    id: 'bank',
    image: bank,
    alt: 'bank image',
    imageMobile: bankMobile,
    title: 'BANK LANDING PAGE',
    techStack: ['Vitejs', 'Tailwind'],
    link: 'https://bank-landing-website.netlify.app/',
    github: 'https://github.com/kadirbasyigit/bank-website',
  },
  {
    id: 'netflix',
    image: netflix,
    alt: 'netflix clone image',
    imageMobile: netflixMobile,
    title: 'NETFLIX CLONE',
    techStack: ['Nextjs', 'Tailwind', 'TMDB API', 'MUI', 'Typescript'],
    link: 'https://nextflix-j8qn-k1d12r04s-projects.vercel.app/',
    github: 'https://github.com/kadirbasyigit/nextflix-app',
  },
  {
    id: 'youtube',
    image: youtube,
    alt: 'youtube clone image',
    imageMobile: youtubeMobile,
    title: 'YOUTUBE CLONE',
    techStack: ['Vitejs', 'React Router', 'RAPID API', 'MUI', 'Typescript'],
    link: 'https://youtube-app-with-rapidapi.netlify.app/',
    github: 'https://github.com/kadirbasyigit/youtube-app',
  },
  {
    id: 'chatGPT',
    image: chatGPT,
    alt: 'chatGPT landing page image',
    imageMobile: chatGPTMobile,
    title: 'CHATGPT LANDING PAGE',
    techStack: ['Vitejs', 'Scss', 'Animated with Aos'],
    link: 'https://gpt3ai-landing.netlify.app/',
    github: 'https://github.com/kadirbasyigit/chatgpt-website',
  },
];
