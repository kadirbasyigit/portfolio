'use client';

import Image from 'next/image';
import myLogo from '../public/myLogo.svg';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { animateScroll as scroll, scroller, Events } from 'react-scroll';
import { IoSunnyOutline } from 'react-icons/io5';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if the user's color scheme is set to 'dark'
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the theme based on the user's preference
    setTheme(darkModeQuery.matches ? 'dark' : 'light');
    if (darkModeQuery.matches) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }

    // Listen for changes in the user's color scheme
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
      if (e.matches) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    };

    darkModeQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      darkModeQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  function handleThemeChange() {
    if (theme === 'light') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop;
      const desiredHeight = 50;

      if (scrollHeight > desiredHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      offset: -120,
    });
  };

  return (
    <nav
      className={`bg-blur px-10 lg:px-14 py-4 mt-5 rounded-lg flex justify-between items-center sticky top-5 mb-20 h-[89px] z-50  ${
        scrolled ? 'bg-transparent' : 'bg-[#09090B]'
      } transition-all ease-in-out duration-500 `}
    >
      <Image
        src={myLogo}
        alt="logo"
        width={50}
        height={50}
        className="bg-[#09090B] rounded-lg"
      />

      <div
        className={`hidden md:flex items-center gap-6 px-4 py-2 transition-all ease-in-out duration-500 ${
          scrolled && 'bg-[#09090B] rounded-md'
        } `}
      >
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white`}
          variant="link"
        >
          <a href="#about" onClick={() => scrollToSection('about')}>
            About me
          </a>
        </Button>

        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white `}
          variant="link"
        >
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
        </Button>
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white `}
          variant="link"
        >
          <a href="#skills" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
        </Button>
        {theme === 'light' ? (
          <BsFillMoonStarsFill
            onClick={() => {
              setTheme('dark');
              handleThemeChange();
            }}
            className="w-5 h-5 cursor-pointer text-white/90 transition-all duration-500 ease-in-out"
          />
        ) : (
          <IoSunnyOutline
            onClick={() => {
              setTheme('light');
              handleThemeChange();
            }}
            className="w-5 h-5 cursor-pointer text-white/90 transition-all duration-500 ease-in-out"
          />
        )}
      </div>

      {/* MENU STARTS */}
      <div className="flex md:hidden relative">
        {isMenuOpen ? (
          <RiCloseFill
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            className={`  ${scrolled ? 'text-black' : 'text-white'} w-7 h-7`}
          />
        ) : (
          <RiMenu5Fill
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            className={`  ${scrolled ? 'text-black' : 'text-white'} w-7 h-7`}
          />
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 100 }}
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } bg-blur absolute flex-col top-16 -right-10 w-36 py-4 rounded-lg bg-[#09090B]`}
            >
              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('about')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#about"
                >
                  About me
                </motion.a>
              </Button>

              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('projects')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#projects"
                >
                  Projects
                </motion.a>
              </Button>
              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('skills')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#skills"
                >
                  Skills
                </motion.a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
