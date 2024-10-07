import { Button } from './ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-white dark:bg-black dark:text-white/90 shadow-2xl py-6 rounded-md font-sora text-sm my-16 space-y-6 w-11/12 lg:max-w-[1000px] mx-auto">
        <p className="text-center">
          You can find the source code for this site at &nbsp;
          <Button
            className="p-0 m-0 rounded-none font-medium h-auto"
            variant="link"
            asChild
          >
            <a
              className="relative p-0 m-0 footer-link dark:text-white/90"
              href="https://github.com/k1d12r04/portfolio"
              target="_blank"
            >
              this github repository.
            </a>
          </Button>
        </p>

        <p className="flex items-center justify-center gap-4">
          Reach me out on
          <Button
            className="p-0 m-0 rounded-none font-medium h-auto"
            variant="link"
            asChild
          >
            <a
              className="relative p-0 m-0"
              href="https://github.com/k1d12r04"
              target="_blank"
            >
              <FaGithub className="w-7 h-7  hover:text-[#3333ff] dark:text-white/90 dark:hover:text-[#3333ff] transition  hover:border-blue-600 " />
            </a>
          </Button>
          <Button
            className="p-0 m-0 rounded-none font-medium h-auto"
            variant="link"
            asChild
          >
            <a
              className="relative p-0 m-0"
              href="https://www.linkedin.com/in/k1d12r"
              target="_blank"
            >
              <FaLinkedinIn className="w-7 h-7  hover:text-[#3333ff] dark:text-white/90 dark:hover:text-[#3333ff] transition  hover:border-blue-600 " />
            </a>
          </Button>
        </p>
      </section>
      <div className="wave"></div>
    </div>
  );
};

export default Footer;
