import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-6 lg:px-8">
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-8">
            Have a project in mind?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            We'd love to hear about your vision. Let's create something 
            extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Schedule a Call
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-border">
            {[
              { icon: Mail, label: "Email", value: "mickaelg566@gmail.com" },
              { icon: Phone, label: "Phone", value: "089524309404" },
              { icon: MapPin, label: "Location", value: "Surabaya, Indonesia" },
            ].map((item) => (
              <div key={item.label} className="text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                <div className="font-medium text-heading group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
