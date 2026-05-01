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

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF5EC] text-[#141210]">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <LifeResume />
        <Lifestyle />
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
