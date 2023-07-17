'use client';

import Image from 'next/image';
import myLogo from '../public/myLogo.svg';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`navbar px-10 lg:px-14 py-4 mt-5 rounded-lg flex justify-between items-center sticky top-2 ${
        scrolled ? 'bg-transparent' : 'bg-[#09090B] '
      } `}
    >
      <Image
        src={myLogo}
        alt="logo"
        width={50}
        height={50}
        className="bg-[#09090B] rounded-lg"
      />

      <div className="flex gap-6">
        <Button
          className={`p-0 ${scrolled ? 'text-black' : 'text-white'}`}
          variant="link"
        >
          About me
        </Button>
        <Button
          className={`p-0 ${scrolled ? 'text-black' : 'text-white'}`}
          variant="link"
        >
          Opinions
        </Button>
        <Button
          className={`p-0 ${scrolled ? 'text-black' : 'text-white'}`}
          variant="link"
        >
          Projects
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
