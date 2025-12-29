
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const allBlogs = [
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
  }, // Pakai data yang sama atau tambah baru
  {
    id: 4,
    title: "Understanding Color Theory in Digital Products",
    date: "Nov 28, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  },
  // Tambahkan item blog lainnya di sini
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20">
      {allBlogs.map((post, index) => (
        <div key={post.id} className="group cursor-pointer">
          <Link to={`/blog/${post.id}`}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-sm">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="aspect-video w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-border rounded-full"></span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold group-hover:translate-x-2 transition-transform duration-500">
                  {post.title}
                </h2>
                <p className="text-muted-foreground max-w-xl line-clamp-2">
                  Deep dive into the methodologies and creative processes behind our latest exploration in digital craftsmanship.
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;