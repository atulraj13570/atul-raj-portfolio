const posts = [
  {
    title: "Designing clarity in complex dashboards",
    description: "Principles and patterns from a year scaling analytics products.",
    date: "Jan 2025",
  },
  {
    title: "Building a system your engineers will love",
    description: "How to deliver assets that slot directly into production pipelines.",
    date: "Nov 2024",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">Blogs</p>
            <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
              Notes from the studio.
            </h2>
          </div>
          <p className="max-w-md text-foreground/60">
            Weekly breakdowns on product strategy, emerging tooling, and building resilient design teams.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[2.5rem] border border-border/50 bg-card/80 p-10 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                {post.date}
              </span>
              <h3 className="mt-4 text-2xl font-display text-foreground">{post.title}</h3>
              <p className="mt-4 text-sm text-foreground/60">{post.description}</p>
              <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                Read article
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
