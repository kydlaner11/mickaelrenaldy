import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Layout, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting distinctive visual identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Creating immersive digital experiences that blend aesthetics with intuitive functionality.",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Bringing brands to life through captivating animations and dynamic visual storytelling.",
  },
  {
    icon: Users,
    title: "Creative Strategy",
    description: "Developing comprehensive creative strategies that align with your business objectives.",
  },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - About */}
          <div
            ref={headerRef}
            className={`transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-heading mb-8">
              Where creativity meets precision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded in 2018, our studio has grown from a small team of passionate designers 
              to a full-service creative agency. We believe in the power of thoughtful design 
              to transform businesses and create meaningful connections.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project we undertake is an opportunity to push boundaries, challenge 
              conventions, and deliver work that exceeds expectations.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-700 delay-200 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { value: "150+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "12", label: "Awards" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-heading mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Services */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={service.title}
                  ref={ref}
                  className={`group p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
