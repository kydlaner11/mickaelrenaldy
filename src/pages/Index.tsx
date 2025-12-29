import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoPortfolio from "@/components/BentoPortfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero biasanya di paling atas, tidak perlu ID jika logo Studio. mengarah ke "/" */}
      <Hero />
      
      {/* Tambahkan ID yang sesuai dengan navLinks di Header */}

      <section id="about">
        <About />
      </section>

      <section id="work">
        <BentoPortfolio />
      </section>

      <Blog />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
