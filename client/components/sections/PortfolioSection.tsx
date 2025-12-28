const techStack = [
  {
    name: "React Developer",
    icon: "/icons/react.png",
    color: "from-blue-400 to-cyan-400",
    description: "Building interactive UIs"
  },
  {
    name: "Python Developer", 
    icon: "/icons/python.png",
    color: "from-yellow-400 to-blue-500",
    description: "Backend & ML solutions"
  },
  {
    name: "Backend Developer",
    icon: "/icons/nodejs.png", 
    color: "from-green-400 to-green-600",
    description: "Node.js & API development"
  },
  {
    name: "Interactive Developer",
    icon: "/icons/interactive.png",
    color: "from-gray-300 to-gray-500", 
    description: "Creative web experiences"
  },
  {
    name: "Project Manager",
    icon: "/icons/git.png",
    color: "from-red-400 to-red-600",
    description: "Leading development teams"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            Tech Stack
          </p>
          <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
            My Preferred Tech Stack
          </h2>
        </div>
        <div className="mt-16 mb-16 flex flex-wrap justify-center gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group relative overflow-visible rounded-full bg-card/20 p-8 transition-all duration-500 hover:scale-110 hover:bg-card/40"
            >
              <div className="flex h-32 w-32 flex-col items-center justify-center space-y-3">
                <div className="transition-transform duration-300 group-hover:scale-125">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-br ${tech.color}`} />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <p className="whitespace-nowrap text-xs text-foreground/90 bg-background/95 border border-border/50 px-4 py-2 rounded-lg shadow-lg">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;