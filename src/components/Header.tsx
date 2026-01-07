import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-material";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Tambahkan ini

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation(); // Untuk mengecek posisi page sekarang
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },   // Tambahkan "/" di depan hash
    { href: "/#work", label: "Work" },     // Tambahkan "/" di depan hash
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" }, // Tambahkan "/" di depan hash
  ];

  // Fungsi handle scroll untuk navigasi internal
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Jika link adalah blog, biarkan navigasi standar react-router-dom
    if (href === "/blog") return;

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      
      // Jika sedang di halaman Home (/)
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } 
      // Jika di halaman lain (seperti /blog), biarkan Link mengarahkan ke "/" 
      // Browser secara otomatis akan mencoba scroll ke ID tersebut saat sampai di Home
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-bold text-heading">
            Renaldy<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            className="md:hidden p-2 text-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button> */}
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="default" className="w-fit">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;