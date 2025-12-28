const experiences = [
  {
    company: "NIELIT EC Muzaffarpur",
    position: "Internship Trainee",
    duration: "May 2025 - June 2025",
    location: "Muzaffarpur",
    description: "Internship industrial training in IoT and Machine Learning using Python",
    responsibilities: [
      "Gained hands-on experience in IoT device programming and sensor integration",
      "Developed machine learning models using Python for data analysis",
      "Worked on real-world projects involving embedded systems and automation"
    ],
    logo: "🔬",
    color: "bg-blue-500"
  },
  {
    company: "MOXIE Technical Club",
    position: "Senior Coordinator",
    duration: "2023 - Present",
    location: "MIT Muzaffarpur",
    description: "Leading technical initiatives and coordinating club activities",
    responsibilities: [
      "Organized technical workshops and coding competitions for students",
      "Mentored junior members in programming and project development",
      "Coordinated with industry professionals for guest lectures and seminars"
    ],
    logo: "🎯",
    color: "bg-purple-500"
  },
  {
    company: "TechMIIT'25",
    position: "Web Developer",
    duration: "Sep 2025",
    location: "Muzaffarpur",
    description: "Worked as a Web Developer on techmiit.in using MERN stack",
    responsibilities: [
      "Developed responsive web applications using React.js and Node.js",
      "Implemented user authentication and database management with MongoDB",
      "Collaborated with design team to create seamless user experiences"
    ],
    logo: "💻",
    color: "bg-green-500"
  },
  {
    company: "C.L.L.M.B - MITMAAI",
    position: "React Native Developer",
    duration: "Jan 2025 - Nov 2025",
    location: "Muzaffarpur",
    description: "Worked as a Developer in Alumni Reconnect Database App (ReMIT) using React Native",
    responsibilities: [
      "Built cross-platform mobile applications using React Native framework",
      "Integrated backend services and APIs for alumni database management",
      "Optimized app performance and user experience through code optimization"
    ],
    logo: "📱",
    color: "bg-cyan-500"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
            Professional Journey
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50 lg:left-1/2 lg:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${exp.color} lg:left-1/2 lg:-translate-x-2 z-10`}></div>
                
                {/* Content */}
                <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/80 p-8 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center text-white text-xl`}>
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-foreground/80">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-primary">
                          {exp.duration}
                        </p>
                        <p className="text-xs text-foreground/50">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground/70 mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50 mb-3">
                        Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial card (alternating side) */}
                <div className={`flex-1 mt-8 lg:mt-0 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80 italic">
                      "Atul's technical expertise and dedication to learning new technologies made him a valuable team member. His problem-solving approach and collaborative spirit significantly contributed to our project success."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;