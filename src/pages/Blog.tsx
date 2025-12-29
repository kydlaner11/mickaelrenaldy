import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20 container">
        <BlogList />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
