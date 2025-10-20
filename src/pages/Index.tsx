import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Index;
