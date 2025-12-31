const ContactSection = () => {
  return (
    <section id="contact" className="pb-28 pt-12">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[3rem] border border-border/40 bg-[radial-gradient(circle_at_top_left,rgba(39,192,147,0.2),rgba(2,8,20,0.95)_55%)] px-8 py-16 sm:px-16 sm:py-20">
          <div className="absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
                Let&apos;s collaborate
              </p>
              <h2 className="mt-5 text-4xl font-display font-semibold text-foreground sm:text-5xl">
                Ready to build your next flagship experience?
              </h2>
              <p className="mt-6 max-w-xl text-foreground/70">
                Drop a line describing your ambitions, timeline, and how we can make magic together in the
                next sprint.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:atulraj13570@gmail.com"
                className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-primary-foreground shadow-[0_20px_40px_rgba(39,192,147,0.25)] transition hover:bg-primary/90"
              >
                Start a project
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-foreground transition hover:border-foreground hover:text-foreground"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
