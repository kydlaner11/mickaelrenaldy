import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoPortfolio from "@/components/BentoPortfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BentoPortfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
