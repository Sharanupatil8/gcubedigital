import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import MovingText1 from "./_components/MovingText1";
import AnimatedText from "./_components/MovingText";
import Navbar from "./_components/Navbar";
import Portfolio from "./_components/Portfolio";
import PortfolioScrollable from "./_components/PortfolioScrollable";

import Services from "./_components/Services";
import ServicesNew from "./_components/ServicesNew";
import Testimonial from "./_components/Testimonial";
import PreloaderWrapper from "./_components/PreloaderWrapper";
import Preloader from "./_components/Preloader";
import WhatsAppButton from "./_components/Whatsapp";

export default function Home() {
  return (
    <>
      <Preloader />
      <header className="relative w-full pt-6 px-5  lg:px-0 md:pt-6 hero-bg  h-screen ">
        <Navbar />
        <Hero />
      </header>
      <main>
        <AnimatedText />
        <About />

        {/* <PortfolioScrollable /> */}
        <Services />

        <Portfolio />
        <MovingText1 />
        <Testimonial />

        <Contact />
        <WhatsAppButton />
      </main>
    </>
  );
}
