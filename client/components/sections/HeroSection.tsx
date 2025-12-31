import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

type HeroSectionProps = {
  onOpenDrawer?: () => void;
};

const HeroSection = ({ onOpenDrawer }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("ENGINEERING");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = ["MERN STACK DEVELOPER", "CYBERSECURITY ENTHUSIAST"];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner_at_left_top,rgba(43,194,154,0.18),transparent_60%),radial-gradient(circle_farthest-corner_at_right_bottom,rgba(255,96,54,0.22),transparent_65%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-16 px-6 lg:flex-row lg:items-center lg:px-0">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-primary/90">
            <span className="inline-block min-w-[200px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <h1 className="mt-6 text-5xl font-display font-semibold uppercase leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            ATUL RAJ
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            B.Tech ECE student and MERN Stack Developer passionate about building secure web applications and exploring cybersecurity. Based in Gaya, Bihar, India.
          </p>
          <p className="mt-4 max-w-lg text-foreground/60">
            Ready to collaborate on innovative projects? Let&apos;s build something amazing together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#portfolio"
              data-target="portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-primary-foreground shadow-[0_20px_40px_rgba(39,192,147,0.25)] transition hover:bg-primary/90"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              data-target="contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-foreground transition hover:border-foreground hover:text-foreground"
            >
              Let&apos;s Talk
            </a>
          </div>
          <div className="mt-12 grid w-full max-w-lg gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 text-center shadow-[0_25px_60px_rgba(2,12,28,0.45)] backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">3+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-foreground/50">
                Years coding
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 text-center shadow-[0_25px_60px_rgba(2,12,28,0.45)] backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">15+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-foreground/50">
                Projects built
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 text-center shadow-[0_25px_60px_rgba(2,12,28,0.45)] backdrop-blur-sm">
              <p className="text-3xl font-display font-semibold text-primary">5+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-foreground/50">
                Technologies
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[380px]">
          <div className="absolute -left-12 top-10 h-20 w-20 rounded-full border border-primary/40" />
          <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full border border-accent/40" />
          <div className="absolute inset-0 rounded-[48%] bg-[radial-gradient(circle_at_top,rgba(43,194,154,0.5),transparent_60%)] blur-0" />
          <div className="absolute -inset-8 rounded-[48%] border border-foreground/10" />
          <button
            onClick={onOpenDrawer}
            className="relative z-10 w-full rounded-[3rem] transition-transform duration-300 hover:scale-105 cursor-pointer group"
            aria-label="Open contact drawer"
          >
            <img
              src="/ATUL.png"
              alt="Portrait of ATUL RAJ"
              className="w-full rounded-[3rem] object-contain group-hover:shadow-2xl transition-shadow duration-300"
            />
          </button>
          <div className="absolute -left-8 bottom-12 h-16 w-32 rounded-full bg-primary/30 blur-xl" />
          <div className="absolute -right-6 top-12 h-24 w-24 rounded-full bg-accent/30 blur-2xl" />
          <div className="absolute -right-2 -top-6 h-32 w-32 rotate-12 rounded-[44%] border border-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;