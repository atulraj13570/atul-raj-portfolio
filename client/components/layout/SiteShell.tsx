import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useState, cloneElement, isValidElement } from "react";
import ContactDrawer from "./ContactDrawer";
import ThemeToggle from "../ui/theme-toggle";

const navItems = [
  { label: "Home", href: "home" },
  { label: "My Intro", href: "intro" },
  { label: "Services", href: "services" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Blogs", href: "blog" },
];

type SiteShellProps = {
  children: ReactNode;
};

const SiteShell = ({ children }: SiteShellProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget.getAttribute("data-target");
    if (!target) {
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,196,154,0.12),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(255,96,54,0.14),transparent_55%)]" />
      <div className="relative flex min-h-screen flex-col">
        <header className="fixed top-0 left-0 right-0 z-30 w-full bg-background/90 backdrop-blur-md border-b border-border/20">
          <div className="mx-auto max-w-6xl px-6 py-4 lg:px-0">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <button
              onClick={openDrawer}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/40 text-3xl font-display font-semibold tracking-tight text-foreground hover:bg-background/60 transition-colors"
              aria-label="Open contact drawer"
            >
              AR.
            </button>
            <nav className="hidden items-center justify-center gap-8 text-xs font-semibold uppercase tracking-[0.45em] text-foreground/60 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  data-target={item.href}
                  onClick={handleAnchorClick}
                  className="relative px-4 py-2 rounded-full transition-all duration-300 hover:text-foreground group overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                data-target="contact"
                onClick={handleAnchorClick}
                className="hidden items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-accent-foreground transition hover:bg-accent/80 md:inline-flex"
              >
                Hire Me
              </a>
            </div>
            <nav className="md:hidden md:col-span-full">
              <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-foreground/60">
                {navItems.map((item) => (
                  <a
                    key={`${item.href}-mobile`}
                    href={`#${item.href}`}
                    data-target={item.href}
                    onClick={handleAnchorClick}
                    className="relative px-3 py-2 rounded-full transition-all duration-300 hover:text-foreground group overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{item.label}</span>
                  </a>
                ))}
                <a
                  href="#contact"
                  data-target="contact"
                  onClick={handleAnchorClick}
                  className="ml-auto inline-flex rounded-full bg-accent px-5 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-accent-foreground transition hover:bg-accent/80"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </div>
          </div>
        </header>
        <main className="flex-1 pt-20">
          {isValidElement(children) && children.type.name === 'Index' 
            ? cloneElement(children, { onOpenDrawer: openDrawer })
            : children}
        </main>
        <footer className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16 text-sm text-foreground/60 lg:px-0">
          <div className="flex flex-col gap-4 border-t border-border/40 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ATUL RAJ. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:atulraj13570@gmail.com"
                className="transition-colors hover:text-foreground"
              >
                atulraj13570@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/atulraj0109"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/atulraj13570"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default SiteShell;
