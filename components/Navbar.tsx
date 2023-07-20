'use client';

import Image from 'next/image';
import myLogo from '../public/assets/myLogo.svg';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { animateScroll as scroll, scroller, Events } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      offset: -100,
    });
  };

  return (
    <nav
      className={`bg-blur px-10 lg:px-14 py-4 mt-5 rounded-lg flex justify-between items-center sticky top-2 mb-20 h-[89px] z-50 ${
        scrolled ? 'bg-transparent' : 'bg-[#09090B]'
      } `}
    >
      <Image
        src={myLogo}
        alt="logo"
        width={50}
        height={50}
        className="bg-[#09090B] rounded-lg"
      />

      <div className="hidden md:flex gap-6">
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 ${
            scrolled
              ? 'text-black hover:text-[#005DA3] '
              : 'text-[#D1D1D1] hover:text-white'
          }`}
          variant="link"
        >
          <a href="#about" onClick={() => scrollToSection('about')}>
            About me
          </a>
        </Button>

        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 ${
            scrolled
              ? 'text-black hover:text-[#005DA3] '
              : 'text-[#D1D1D1] hover:text-white'
          }`}
          variant="link"
        >
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
        </Button>
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 ${
            scrolled
              ? 'text-black hover:text-[#005DA3] '
              : 'text-[#D1D1D1] hover:text-white'
          }`}
          variant="link"
        >
          <a href="#skills" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
        </Button>
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
