import { ArrowDown } from "lucide-react";
import mascot from "@/assets/mascot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-32 bg-muted opacity-20 rotate-12 rounded" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent opacity-10 rounded-full" />
      
      {/* Toolbar sidebar decoration */}
      <div className="absolute left-0 top-1/4 hidden md:flex flex-col gap-2 p-4 bg-secondary rounded-r-lg border-r-4 border-accent">
        <div className="w-8 h-8 bg-muted rounded" />
        <div className="w-8 h-8 bg-muted rounded" />
        <div className="w-8 h-8 bg-muted rounded" />
        <div className="w-8 h-8 bg-accent rounded" />
        <div className="w-8 h-8 bg-muted rounded" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Subheading */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-accent"></div>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">
            Graphic Designer
          </p>
          <div className="h-px w-12 bg-accent"></div>
        </div>

        {/* Main Title */}
        <div className="relative">
          <h1 className="font-display text-[12vw] md:text-[10rem] lg:text-[12rem] leading-none tracking-tighter mb-6">
            <span className="inline-block">PORTF</span>
            <span className="inline-block relative">
              <span className="text-foreground">OLIO</span>
              <span className="absolute -top-4 -right-4 md:-top-8 md:-right-8 text-accent text-[8vw] md:text-[6rem] lg:text-[8rem] font-display rotate-[-8deg] z-20">
                2025
              </span>
            </span>
          </h1>
          
          {/* Red accent overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent opacity-80 rounded-full blur-3xl -z-10" />
        </div>

        {/* Mascot */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 md:right-10 w-24 h-24 md:w-32 md:h-32 animate-bounce">
          <img src={mascot} alt="Designer mascot" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-muted-foreground text-sm uppercase tracking-wider">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-foreground torn-bottom" />
    </section>
  );
};

export default Hero;
