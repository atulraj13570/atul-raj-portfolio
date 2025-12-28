import { Code, Smartphone, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB with secure authentication systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating responsive cross-platform mobile applications using Flutter and Dart for seamless user experiences.",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description:
      "Developing IoT solutions and robotic systems using Arduino, Bluetooth modules, and sensor integration for smart automation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-display font-semibold text-foreground sm:text-5xl">
              What I bring to the table.
            </h2>
          </div>
          <p className="max-w-xl text-foreground/60">
            From web applications to mobile solutions and IoT systems, I deliver comprehensive technical solutions with modern technologies and best practices.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 shadow-[0_25px_70px_rgba(2,12,28,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(39,192,147,0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <service.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-6 text-2xl font-display text-foreground">{service.title}</h3>
              <p className="mt-4 text-sm text-foreground/60">{service.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;