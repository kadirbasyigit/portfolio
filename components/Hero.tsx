'use client';

import Image from 'next/image';
import developerImg from '../public/assets/developer.webp';
import { motion } from 'framer-motion';
import Highlighter from 'react-highlight-words';

const Hero = () => {
  return (
    <div
      id="about"
      className="grid md:grid-cols-2 items-center font-sora mx-2 mb-20 gap-10"
    >
      <div className="overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative gradient-text | text-3xl md:text-5xl font-bold mb-2 md:mb-6 tracking-wide leading-tight"
        >
          I&apos;m a front end react developer from Türkiye
        </motion.h2>

        <Highlighter
          highlightClassName="animated-gradient-text"
          className="leading-6 text-sm md:text-base text-black/80"
          searchWords={[
            'improvement',
            'communication ',
            'solve problems',
            'I think I understand the importance of not rushing to write code, maintaining it, being clean and of good quality.',
          ]}
          autoEscape={true}
          textToHighlight="Hi, my name is Kadir. I really like to bring good-looking and interesting websites and web apps to life. I see myself as someone who is open to improvement, strong in communication and willing to solve problems. I have a very curious nature and this is a strong factor that fuels my enthusiasm for research. I am a person who does not get tired of dealing with the problems I encounter and I never delegate my responsibilities to others. I really like software development. I think I understand the importance of not rushing to write code, maintaining it, being clean and of good quality."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="justify-self-end"
      >
        <Image src={developerImg} alt="developer image" />
      </motion.div>
    </div>
  );
};

export default Hero;
