import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascot from "@/assets/mascot.png";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@designer.com" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" }
  ];

  return (
    <section className="relative bg-accent py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Torn top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background torn-top" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-background/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-background/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-none text-background">
            LET'S WORK
            <br />
            <span className="relative inline-block">
              TOGETHER
              {/* Underline decoration */}
              <div className="absolute -bottom-4 left-0 right-0 h-3 bg-background/30 rotate-[-1deg]" />
            </span>
          </h2>

          {/* Mascot with thumbs up */}
          <div className="flex justify-center my-12">
            <div className="relative">
              <img 
                src={mascot} 
                alt="Let's collaborate!" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain animate-bounce drop-shadow-2xl"
              />
              {/* Speech bubble */}
              <div className="absolute -top-8 -right-12 bg-background text-accent px-4 py-2 rounded-full font-handwritten text-sm whitespace-nowrap rotate-[-8deg]">
                Let's go! 🚀
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-background text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-semibold">
            Ready to create something amazing? Let's bring your vision to life with bold design and creative strategy.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="secondary"
                size="lg"
                className="bg-background text-accent hover:bg-background/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={link.href} className="flex items-center gap-3">
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Additional contact info */}
          <div className="pt-12 space-y-2">
            <p className="text-background/80 text-sm uppercase tracking-wider">
              Or reach out directly
            </p>
            <a 
              href="mailto:hello@designer.com" 
              className="text-background text-2xl md:text-3xl font-display hover:underline decoration-4 decoration-background/50 transition-all"
            >
              hello@designer.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-background rounded-full animate-pulse" />
          <div className="w-3 h-3 bg-background rounded-full animate-pulse delay-100" />
          <div className="w-3 h-3 bg-background rounded-full animate-pulse delay-200" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
