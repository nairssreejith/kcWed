import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import LifeResume from "../components/LifeResume";
import Lifestyle from "../components/Lifestyle";
import Hobbies from "../components/Hobbies";
import WhyKC from "../components/WhyKC";
import FlagsSection from "../components/FlagsSection";
import RollCredits from "../components/RollCredits";
import Footer from "../components/Footer";
import Garland from "../components/Garland";
import PetalRain from "../components/PetalRain";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF5EC] text-[#141210]">
      {/* Continuous rose petal fall — purely decorative, ignores pointer events */}
      <PetalRain />

      <Header />
      <main>
        {/* Garland strung along the top of the hero — sets a wedding tone */}
        <Garland variant="top" className="kc-garland--hero" />

        <Hero />
        <Marquee />
        <About />
        <LifeResume />

        {/* Curved garland separator between Lifestyle and Hobbies sections */}
        <Lifestyle />
        <Garland variant="curve" />
        <Hobbies />

        <WhyKC />
        <FlagsSection />
        <RollCredits />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
