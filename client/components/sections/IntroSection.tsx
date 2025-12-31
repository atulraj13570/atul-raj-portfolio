const IntroSection = () => {
  const technicalSkills = [
    "React.js",
    "Node.js", 
    "MongoDB",
    "Express.js",
    "C++",
    "Cybersecurity",
    "Flutter",
    "Arduino",
  ];

  return (
    <section id="intro" className="relative py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
              Atul Raj
            </h2>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              B.Tech ECE'26 student at MIT Muzaffarpur with expertise in MERN Stack development and growing passion for cybersecurity. Core member of GDG MIT and Senior Coordinator at MOXIE Technical Club.
            </p>
            <p className="mt-6 max-w-xl text-foreground/60">
              Passionate about building secure web applications, exploring cybersecurity concepts, and creating innovative solutions using modern technologies. Experience spans full-stack development, mobile apps, and IoT systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {technicalSkills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">2022 - 26</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-foreground/50">
                B.Tech - Electronics & Communication
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                Muzaffarpur Institute of Technology (BEU) - CGPA: 7.11
              </p>
            </div>
            <div className="rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">2019 - 21</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-foreground/50">
                I.Sc. - PCM
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                Nazareth Academy, Gaya - Percentage: 84.7
              </p>
            </div>
            <div className="rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">Current</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-foreground/50">
                Senior Coordinator
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                MOXIE - Technical Club, MIT Muzaffarpur (2023-Present)
              </p>
            </div>
            <div className="rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">Projects</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-foreground/50">
                Full Stack Developer
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                LoginGuard, Flutter Portfolio App, RoboCAR with Arduino & IoT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;