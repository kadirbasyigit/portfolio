import { Button } from './ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

type RenderLinkProps = {
  href: string;
  text?: string;
  icon?: JSX.Element;
};

const Footer = () => {
  const links: RenderLinkProps[] = [
    {
      href: 'https://github.com/kadirbasyigit/portfolio',
      text: 'this github repository.',
    },
    {
      href: 'https://github.com/kadirbasyigit',
      icon: (
        <FaGithub className="w-7 h-7 hover:text-[#3333ff] dark:text-white/90 dark:hover:text-[#7ce8be] transition" />
      ),
    },
    {
      href: 'https://www.linkedin.com/in/kadirbasyigitt',
      icon: (
        <FaLinkedinIn className="w-7 h-7 hover:text-[#3333ff] dark:text-white/90 dark:hover:text-[#7ce8be] transition" />
      ),
    },
  ];

  const renderLink = ({ href, text, icon }: RenderLinkProps) => (
    <Button
      className="p-0 m-0 rounded-none font-medium h-auto"
      variant="link"
      asChild
    >
      <a
        className={`relative p-0 m-0 ${
          text ? 'footer-link' : ''
        } dark:text-white/90`}
        href={href}
        target="_blank"
      >
        {text || icon}
      </a>
    </Button>
  );

  return (
    <div className="relative overflow-hidden">
      <section className="bg-white dark:bg-black dark:text-white/90 shadow-2xl py-6 rounded-md font-sora text-sm my-16 space-y-6 w-11/12 lg:max-w-[1000px] mx-auto">
        <p className="text-center">
          You can find the source code for this site at &nbsp;
          {renderLink(links[0])}
        </p>

        <p className="flex items-center justify-center gap-4">
          Reach me out on
          {renderLink(links[1])}
          {renderLink(links[2])}
        </p>
      </section>
      <div className="wave"></div>
    </div>
  );
};

export default Footer;
