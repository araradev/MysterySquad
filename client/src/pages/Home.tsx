import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import DateCounter from "@/components/DateCounter";
import OurStory from "@/components/OurStory";
import PhotoGallery from "@/components/PhotoGallery";
import SpecialMoments from "@/components/SpecialMoments";
import LoveMessage from "@/components/LoveMessage";
import Footer from "@/components/Footer";
import { coupleNames, loveMessage } from "@/data/constants";

const Home = () => {
  useEffect(() => {
    // Update document title
    document.title = `${coupleNames} - Nossa História de Amor`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Video and Counter */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        
        {/* Hero content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow mb-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {coupleNames}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white text-shadow max-w-2xl mx-auto mb-8 animate-fadeInUp" 
            style={{ animationDelay: "0.4s" }}
          >
            {loveMessage}
          </p>
          
          {/* Anniversary counter */}
          <DateCounter />
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
            <a href="#nossa-historia" aria-label="Rolar para baixo" className="flex flex-col items-center">
              <span className="text-sm mb-2">Rolar para baixo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <OurStory />
      <PhotoGallery />
      <SpecialMoments />
      <LoveMessage />
      <Footer />
    </div>
  );
};

export default Home;
