import portfolioCards from "@/assets/portfolio-cards.jpg";
import portfolioMobile from "@/assets/portfolio-mobile.jpg";
import mobileScreenshot from "@/assets/mobile-screenshot.png";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.png";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Creative Poster",
      category: "POSTER Design",
      image: poster1,
      description: "Bold typography and cultural design elements"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: mobileScreenshot,
      description: "Modern mobile interface with bold typography"
    },
    {
      title: "Magazine Cover",
      category: "POSTER Design",
      image: poster2,
      description: "Creative poster design with illustrated elements"
    }
  ];

  return (
    <section className="relative bg-background py-20 px-4 md:px-8 lg:px-16">
      {/* Torn top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-accent torn-top" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
            <span className="text-foreground">POSTERS</span>
            <span className="text-accent"> & UI/UX</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Selected works showcasing bold poster designs and creative UI/UX solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-secondary rounded-lg hover-lift cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Tape accent */}
              <div className="absolute top-4 right-4 w-16 h-6 bg-accent/80 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Branding Design Section Header */}
        <div className="text-center mb-12 mt-24">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-8">
            <span className="text-accent">CJ</span>
            <span className="text-foreground"> LUCKY</span>
          </h2>
        </div>

        {/* Large Featured Image with Contact Info */}
        <div className="relative rounded-lg overflow-hidden shadow-brutal hover-lift">
          <div className="aspect-[16/9]">
            <img 
              src={portfolioCards} 
              alt="Featured branding work"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contact overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-bold"
                asChild
              >
                <a href="mailto:luckychatterjee4220006@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-bold"
                asChild
              >
                <a href="https://www.linkedin.com/in/luckychatterjee06" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-bold"
                asChild
              >
                <a href="https://instagram.com/luckychatterjee_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
          
          {/* Corner tear decoration */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-accent border-l-[80px] border-l-transparent" />
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-accent torn-bottom" />
    </section>
  );
};

export default Portfolio;
