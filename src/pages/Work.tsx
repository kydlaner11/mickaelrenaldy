import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Works from "@/components/Works";

const Work = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Padding top ditambahkan agar konten tidak tertutup fixed header */}
      <div className="pt-24 pb-20">
        <div className="container px-6 lg:px-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-heading">
            Our Selected <span className="text-primary">Works</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Kumpulan proyek terbaik yang telah kami kerjakan dengan dedikasi dan kreativitas tinggi.
          </p>
        </div>
        
        {/* Menggunakan kembali komponen portfolio yang sudah ada */}
        <Works />
      </div>
      <Footer />
    </main>
  );
};

export default Work;