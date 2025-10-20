import { ArrowDown } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-32 bg-muted opacity-20 rotate-12 rounded animate-pulse-bg" style={{ animationDelay: '4s' }} />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-accent rounded-full opacity-50 blur-3xl animate-pulse-bg" />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="space-y-4 text-left">
          <h2 className="text-xl md:text-2xl font-light tracking-wider">LUCKY CHATTERJEE</h2>
          <p className="text-lg md:text-xl text-gray-400">GRAPHIC DESIGNING</p>
          <div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-accent leading-none tracking-tight">
              PORTFOLIO
            </h1>
            <div className="h-1 w-32 bg-accent mt-2"></div>
          </div>
          <div className="pt-2">
            <span className="inline-block bg-accent/80 text-white text-sm md:text-base px-6 py-2 rounded-full font-semibold shadow-lg">
              Designs that Tell a Story
            </span>
          </div>
        </div>

        {/* Right Side - 3D Illustration */}
        <div className="relative flex items-center justify-center h-full">
          <img 
            src={heroCharacter} 
            alt="3D Character Illustration" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 animate-float"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-2 text-white">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-md flex items-center justify-center shadow-lg">
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce" />
        </div>
        <p className="text-xs tracking-widest uppercase">SCROLL DOWN</p>
      </div>
    </section>
  );
};

export default Hero;
