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
  // {
  //   icon: Users,
  //   title: "Creative Strategy",
  //   description: "Developing comprehensive creative strategies that align with your business objectives.",
  // },
];

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: skillHeaderRef, isVisible: skillHeaderVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container px-6 lg:px-8">
        {/* Top Section: Photo & Content */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          {/* Photo Column (5 columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative w-full max-w-[450px] mx-auto lg:ml-0">
              
              {/* Frame Belakang (Warna Cream/Soft) */}
              <div className="absolute inset-0 bg-[#F9F6F0] rounded-[40px] rotate-3 translate-x-4 translate-y-4 -z-10 shadow-sm border border-black/5"></div>
              
              {/* Container Foto Utama */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-white shadow-xl border border-black/5">
                <img 
                  src="assets/renaldy.jpeg" // Ganti dengan path foto Renaldy
                  alt="Mickael Renaldy"
                  className="w-full h-full object-cover"
                />

                {/* Floating Badge (Seperti "Diantar 06:00") */}
                <div className="absolute top-10 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-black/5 flex flex-col items-center min-w-[120px]">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Available for</span>
                  <span className="text-lg font-display font-bold text-heading">Freelance</span>
                </div>
              </div>

              {/* Hiasan Tambahan (Optional: Dot Pattern atau Lingkaran) */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>

          {/* About Content Column (7 columns) */}
          <div
            ref={headerRef as any}
            className={`lg:col-span-7 order-1 lg:order-2 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-heading mb-8">
              Where creativity meets precision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded in 2018, our studio has grown from a small team of passionate designers 
              to a full-service creative agency. We believe in the power of thoughtful design 
              to transform businesses and create meaningful connections.
            </p>

            {/* Stats */}
            <div
              ref={statsRef as any}
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
        </div>

        {/* Middle Section: Services & Skills Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-2">
          {/* Left: Services Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-heading mb-8">Our Services</h3>
            {services.map((service, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={service.title}
                  ref={ref as any}
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

          {/* Right: My Skills Grid */}
          <div
            ref={skillHeaderRef as any}
            className={`transition-all duration-700 ${
              skillHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-display font-bold text-heading mb-4">My Skills</h3>
            <p className="text-muted-foreground mb-12">
              Here are some of the skills I've mastered and am still learning.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;