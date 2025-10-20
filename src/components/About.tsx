import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section className="relative bg-foreground py-20 px-4 md:px-8 lg:px-16">
      {/* Torn top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background torn-top" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-background space-y-6">
            <div className="relative inline-block group cursor-pointer">
              <h2 className="font-display text-6xl md:text-8xl leading-none mb-2 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                ABOUT ME
              </h2>
              <div className="h-2 w-32 bg-accent absolute -bottom-2 left-0 transition-all duration-300 group-hover:w-48" />
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl text-muted transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer inline-block">
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
            <div className="relative bg-accent rounded-lg w-64 h-64 md:w-96 md:h-96 mx-auto overflow-hidden shadow-brutal rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <img 
                src={profilePhoto} 
                alt="Lucky Chatterjee"
                className="w-full h-full object-cover"
              />
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
