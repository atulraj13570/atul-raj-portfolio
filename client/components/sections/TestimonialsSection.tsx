const testimonials = [
  {
    quote:
      "Michele pushed our team to reimagine our onboarding. The result: a 26% lift in activation and a product teams rave about.",
    name: "Derrick Miles",
    role: "Head of Product · Nimbus",
  },
  {
    quote:
      "The design system delivered was meticulous. Developers shipped twice as fast with zero regressions in quality.",
    name: "Aaliyah Carter",
    role: "Design Director · Lumen Stories",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
              Voices from partners.
            </h2>
          </div>
          <p className="max-w-md text-foreground/60">
            I become an embedded teammate focused on measurable outcomes and momentum.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-[2.5rem] border border-border/50 bg-card/80 p-10 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm"
            >
              <p className="text-xl text-foreground/90">“{item.quote}”</p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-foreground/50">
                {item.name} · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
