const projects = [
  {
    name: "LoginGuard",
    description: "A secure login system built with React JS, Node.js, and MongoDB. It provides users an easy access experience with Postman validation.",
    technologies: ["React JS", "Node.js", "Postman", "MongoDB"],
    category: "Full Stack Web Application",
    year: "2024"
  },
  {
    name: "Flutter Responsive Portfolio App",
    description: "A responsive Flutter portfolio app built using Dart. Designed for smooth user experience across different devices.",
    technologies: ["Flutter", "Dart"],
    category: "Mobile Application",
    year: "2024"
  },
  {
    name: "RoboCAR (TechMIIT'23)",
    description: "Developed a robotic car using Arduino UNO, HC-05 Bluetooth module, and L293D motor driver for smartphone-based control.",
    technologies: ["Arduino", "HC-05", "Bluetooth", "L293D"],
    category: "IoT & Robotics",
    year: "2023"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/60">
            A showcase of my technical projects spanning web development, mobile applications, and IoT solutions.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/80 p-8 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(2,12,28,0.6)]"
            >
              <div className="absolute top-6 right-6">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {project.year}
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  {project.category}
                </span>
                <h3 className="mt-2 text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </div>
              
              <p className="mb-6 text-sm text-foreground/70 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 group-hover:text-primary transition-colors">
                  View Details
                </span>
                <div className="h-8 w-8 rounded-full border border-border/50 bg-background/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <svg className="h-4 w-4 text-foreground/50 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;