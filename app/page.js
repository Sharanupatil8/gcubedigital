import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import AnimatedText from "./_components/MovingText";
import Navbar from "./_components/Navbar";
import Portfolio from "./_components/Portfolio";
import PortfolioScrollable from "./_components/PortfolioScrollable";
import Preloader from "./_components/Preloader";
import Services from "./_components/Services";
import ServicesNew from "./_components/ServicesNew";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="relative w-full pt-6 px-5 lg:px-0 md:pt-6 hero-bg h-screen ">
        <Hero />
      </header>
      <main>
        <AnimatedText />
        <About />
        {/* <Services /> */}
        {/* <PortfolioScrollable /> */}
        <ServicesNew />
        <Testimonial />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
