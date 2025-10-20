import portfolioCards from "@/assets/portfolio-cards.jpg";
import portfolioMobile from "@/assets/portfolio-mobile.jpg";
import portfolioPoster from "@/assets/portfolio-poster.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity",
      category: "Logo Design",
      image: portfolioCards,
      description: "Complete branding package with business cards and stationary"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: portfolioMobile,
      description: "Modern mobile interface with bold typography"
    },
    {
      title: "Event Poster",
      category: "Print Design",
      image: portfolioPoster,
      description: "Bold poster design for creative events"
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
            <span className="text-foreground">LOGO</span>
            <span className="text-accent"> DESIGN</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Selected works showcasing bold branding and creative design solutions
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
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none">
            <span className="text-accent">BRANDING</span>
            <span className="text-foreground"> DESIGN</span>
          </h2>
        </div>

        {/* Large Featured Image */}
        <div className="relative rounded-lg overflow-hidden shadow-brutal hover-lift">
          <div className="aspect-[16/9]">
            <img 
              src={portfolioCards} 
              alt="Featured branding work"
              className="w-full h-full object-cover"
            />
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
