import Image from 'next/image';
import developerImg from '../public/developer.png';

const Hero = () => {
  return (
    <div
      id="about"
      className="grid md:grid-cols-2 items-center font-sora mx-2 mb-20 gap-10"
    >
      <div>
        <h2 className="gradient-text | text-3xl md:text-5xl font-bold mb-2 md:mb-6 tracking-wide leading-tight">
          I&apos;m a front end developer from Turkey
        </h2>
        <p className="leading-6 text-sm md:text-base text-black/80">
          Hi, my name is Kadir. I really like to bring good-looking and
          interesting websites and web apps to life. I see myself as someone who
          is open to improvement, strong in communication and willing to solve
          problems. I have a very curious nature and this is a strong factor
          that fuels my enthusiasm for research. I am a person who does not get
          tired of dealing with the problems I encounter and I never delegate my
          responsibilities to others. I really like software development. I
          think I understand the importance of not rushing to write code,
          maintaining it, being clean and of good quality.
        </p>
      </div>

      <div className="justify-self-end">
        <Image src={developerImg} alt="developer image" />
      </div>
    </div>
  );
};

export default Hero;
