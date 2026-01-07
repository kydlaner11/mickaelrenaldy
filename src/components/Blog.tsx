import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const featuredBlogs: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Minimalist UI in 2025",
    date: "Dec 20, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    id: 2,
    title: "Why Branding Matters More Than Your Product",
    date: "Dec 15, 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  },
  {
    id: 3,
    title: "Mastering React Performance Optimization",
    date: "Dec 10, 2024",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
];

const Blog = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container px-6 lg:px-8">
        {/* Header Section */}
        <div 
          ref={headerRef as any}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
              Insights & News
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-heading">
              Our latest <span className="italic font-light">thoughts</span>
            </h2>
          </div>
          <Link to="/blog" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary">
            View All Posts
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Blog Grid (3 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Link 
      to={`/blog/${post.id}`}
      ref={ref as any}
      className={`group block transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-sm">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{post.date}</p>
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default Blog;