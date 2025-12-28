import SiteShell from "@/components/layout/SiteShell";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <SiteShell>
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            404 · Lost in space
          </p>
          <h1 className="mt-6 text-5xl font-display font-semibold text-foreground">
            This page is still on the drawing board.
          </h1>
          <p className="mt-6 text-foreground/60">
            Head back to the studio homepage to explore Michele&apos;s work, or use the navigation to jump
            to a section you&apos;re curious about.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground transition hover:bg-primary/90"
            >
              Return home
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-foreground transition hover:border-foreground"
            >
              Contact Michele
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default NotFound;
