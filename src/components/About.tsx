import mascot from "@/assets/mascot.png";

const About = () => {
  return (
    <section className="relative bg-foreground py-20 px-4 md:px-8 lg:px-16">
      {/* Torn top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background torn-top" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-background space-y-6">
            <div className="relative inline-block">
              <h2 className="font-display text-6xl md:text-8xl leading-none mb-2">
                ABOUT ME
              </h2>
              <div className="h-2 w-32 bg-accent absolute -bottom-2 left-0" />
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl text-muted">
              CREATIVE DESIGNER
            </h3>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Specializing in <strong>Branding, Print, and Digital Solutions</strong> that make an impact.
              </p>
              <p>
                I bring brands to life with strategic thinking, modern aesthetics, and attention to every detail. 
                From bold logos to cohesive brand identities, I create designs that resonate and perform.
              </p>
              <p>
                My approach blends creativity with strategy, ensuring every project not only looks amazing but also achieves real business goals.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6">
              <p className="font-handwritten text-2xl md:text-3xl text-accent rotate-[-2deg] inline-block">
                I'm a designer ✨
              </p>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative bg-accent rounded-full w-64 h-64 md:w-96 md:h-96 mx-auto flex items-center justify-center overflow-hidden">
              {/* Placeholder for designer photo - replace with actual photo */}
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="font-display text-6xl text-muted-foreground">PHOTO</span>
              </div>
            </div>
            
            {/* Cartoon mascot accent */}
            <div className="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24">
              <img src={mascot} alt="Mascot" className="w-full h-full object-contain rotate-12 drop-shadow-2xl" />
            </div>

            {/* Crown doodle */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-accent">
                <path d="M10 30 L20 10 L30 25 L40 5 L50 25 L60 10 L70 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Stars decoration */}
            <div className="absolute -bottom-4 -left-4 text-accent">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-accent torn-bottom" />
    </section>
  );
};

export default About;
