import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nova Brand Identity",
    category: "Branding",
    description: "Reimagining digital identity for the next generation of fintech giants.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Stellar App Design",
    category: "UI/UX",
    description: "A seamless mobile experience for cosmic exploration and stargazing.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Echo Music Platform",
    category: "Web Design",
    description: "Immersive web experience for independent artists and listeners.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
  },
];

const WorkCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref as any}
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20 border-b border-border transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Detail Text - Kiri (4 kolom) */}
      <div className="lg:col-span-4 order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
            {item.category}
          </span>
          <span className="h-[1px] w-8 bg-border"></span>
          <span className="text-xs font-medium text-muted-foreground">{item.year}</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-display font-bold text-heading mb-6 group-hover:text-primary transition-colors duration-500">
          {item.title}
        </h3>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
          {item.description}
        </p>

        <Link 
          to={`/work/${item.id}`}
          className="inline-flex items-center gap-2 font-semibold text-sm tracking-wider uppercase group/link"
        >
          View Case Study
          <div className="overflow-hidden w-5 h-5">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </div>
        </Link>
      </div>

      {/* Image Gallery - Kanan (8 kolom) */}
      <div className="lg:col-span-8 order-1 lg:order-2">
        <Link to={`/work/${item.id}`} className="block relative overflow-hidden rounded-sm aspect-[16/9]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-100"
          />
          {/* Overlay gradient yang halus */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </Link>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="bg-background">
      <div className="container px-6 lg:px-8">
        <div className="flex flex-col">
          {portfolioItems.map((item, index) => (
            <WorkCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;