import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nova Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Stellar App Design",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Echo Music Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Prism Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    title: "Flux Motion Graphics",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Zenith Architecture",
    category: "3D Design",
    image: "https://images.unsplash.com/photo-1618556450994-a163d86fd9f1?w=600&h=400&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref} // Ref tetap di div, aman bagi TypeScript
      className={`${item.span} transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to="/work"
        className="group relative block h-full w-full overflow-hidden rounded-2xl bg-card cursor-pointer"
      >
        <div
          ref={ref}
          className={`${item.span} group relative overflow-hidden rounded-2xl bg-card cursor-pointer transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          <div className="relative h-full min-h-[280px] md:min-h-[320px] p-6 flex flex-col justify-end">
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase bg-background/20 backdrop-blur-sm rounded-full text-background/90">
                {item.category}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-background mb-2">
                {item.title}
              </h3>
            </div>

            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-background" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BentoPortfolio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
            Projects that define us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A curated selection of our finest work, showcasing our expertise 
            across branding, digital design, and creative development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[200px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoPortfolio;
