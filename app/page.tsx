import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <div className="w-11/12 lg:max-w-[1000px] mx-auto">
        <Navbar />
        <Hero />
        {/* <Opinions/> */}
        {/* Stats */}
        {/* <Projects/> */}
        {/* <Footer/> */}
      </div>
    </main>
  );
}
