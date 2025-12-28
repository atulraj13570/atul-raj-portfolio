const certifications = [
  {
    title: "Infosys Springboard",
    subtitle: "Fundamentals of Information Security",
    issuer: "Infosys",
    year: "2024",
    category: "Cybersecurity"
  },
  {
    title: "Smart Internz",
    subtitle: "Salesforce Developer Virtual Internship (Electorate)",
    issuer: "Smart Internz",
    year: "2024",
    category: "Cloud Development"
  },
  {
    title: "Forage",
    subtitle: "JPMorgan Chase & Co. Cybersecurity Job Simulation",
    issuer: "Forage",
    year: "2024",
    category: "Cybersecurity"
  },
  {
    title: "Cisco Networking Academy",
    subtitle: "CLA - Programming Essentials in C",
    issuer: "Cisco",
    year: "2024",
    category: "Programming"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card/20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            Certifications
          </p>
          <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
            Professional Certifications
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/60">
            Continuous learning through industry-recognized certifications in cybersecurity, cloud development, and programming.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/80 p-8 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {cert.year}
                </span>
              </div>
              
              <div className="mb-6">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] mb-4 ${
                  cert.category === 'Cybersecurity' ? 'bg-red-500/10 text-red-500 border border-red-500/30' :
                  cert.category === 'Cloud Development' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/30' :
                  'bg-green-500/10 text-green-500 border border-green-500/30'
                }`}>
                  {cert.category}
                </span>
                
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {cert.subtitle}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    Issued by
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground/80">
                    {cert.issuer}
                  </p>
                </div>
                
                <div className="h-10 w-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <svg className="h-5 w-5 text-foreground/50 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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

export default CertificationsSection;