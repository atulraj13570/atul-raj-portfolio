import { X, Linkedin, Github } from "lucide-react";

type ContactDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const skills = [
  { name: "React JS", percentage: 85 },
  { name: "C++", percentage: 90 },
  { name: "MongoDB/Firebase", percentage: 60 },
  { name: "Node JS", percentage: 70 },
  { name: "Responsive Design", percentage: 80 },
  { name: "MATLAB", percentage: 70 },
  { name: "Arduino", percentage: 50 },
  { name: "Cybersecurity", percentage: 93 },
];

const knowledge = [
  "C, C++",
  "Flutter, Dart",
  "Networking, Cyber Security",
  "Git, Github",
];

const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-96 bg-background/95 backdrop-blur-md border-r border-border/60 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6 text-foreground relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(43,194,154,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,96,54,0.08),transparent_50%)]" />
          <div className="relative z-10">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-foreground/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <img
                  src="/ATUL.png"
                  alt="Atul Raj"
                  className="w-full h-full rounded-full object-cover bg-background"
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Atul Raj</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Flutter Developer & The Student of<br />
              Electronics and Communication Engineering
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground/70">+918757282626</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <div>
              <p className="text-sm text-foreground/60">Email</p>
              <a href="mailto:atulraj13570@gmail.com" className="text-sm text-primary hover:text-primary/80">
                atulraj13570@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-foreground/60">LinkedIn</p>
              <a 
                href="https://linkedin.com/in/atulraj0109" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-primary hover:text-primary/80"
              >
                @atulraj0109
              </a>
            </div>

            <div>
              <p className="text-sm text-foreground/60">Github</p>
              <a 
                href="https://github.com/atulraj13570" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-primary hover:text-primary/80"
              >
                @atulraj13570
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-sm text-foreground/60">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-border/40 rounded-full h-1">
                    <div 
                      className="bg-primary h-1 rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Knowledge</h3>
            <div className="space-y-2">
              {knowledge.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-auto pt-6">
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com/in/atulraj0109" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/atulraj13570" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;