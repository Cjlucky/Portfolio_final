const Skills = () => {
  const skills = [
    "Graphic Design",
    "Branding",
    "Social Media",
    "UI/UX Design"
  ];

  const tools = [
    { name: "Photoshop", color: "#31A8FF" },
    { name: "Illustrator", color: "#FF9A00" },
    { name: "Canva", color: "#00C4CC" },
    { name: "Figma", color: "#F24E1E" }
  ];

  return (
    <section className="relative bg-accent py-20 px-4 md:px-8 lg:px-16">
      {/* Torn top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-foreground torn-top" />
      
      {/* Tape decoration */}
      <div className="absolute top-8 left-10 w-24 h-8 bg-background/20 rotate-[-8deg] hidden md:block" />
      <div className="absolute top-8 right-10 w-24 h-8 bg-background/20 rotate-[8deg] hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Skills Column */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-6xl leading-none text-background">
              SKILLS
            </h2>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-background">
                  <div className="w-2 h-2 bg-background rotate-45" />
                  <span className="font-semibold text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-6xl leading-none text-background">
              TOOLS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-background/10 hover:bg-background/20 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover-lift group"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.name.substring(0, 2)}
                    </div>
                    <span className="text-background font-semibold text-sm text-center">
                      {tool.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approach Column */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-6xl leading-none text-background">
              APPROACH<br/>TO DESIGN
            </h2>
            <div className="space-y-4 text-background">
              <p className="font-semibold text-lg leading-relaxed">
                MY DESIGN PROCESS IS ROOTED IN <span className="text-background underline decoration-4">UNDERSTANDING</span> THE PROBLEM FIRST.
              </p>
              <p className="leading-relaxed">
                I combine <strong>modern aesthetics</strong> with strategic thinking to create solutions that are not just beautiful, but functional and results-driven.
              </p>
              <p className="leading-relaxed">
                Every project is an opportunity to push creative boundaries while staying focused on the <strong>user experience</strong> and business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background torn-bottom" />
    </section>
  );
};

export default Skills;
