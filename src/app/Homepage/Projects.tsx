import { Briefcase, Dribbble, Music, Wind } from "lucide-react";

const projects = [
  {
    icon: <Wind className="h-8 w-8 text-cyan-400" />,
    title: "Unit Conversion App",
    description:
      "A sleek and user-friendly tool for converting various units of measurement seamlessly.",
    link: "#",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-indigo-400" />,
    title: "Aurora Technology Corp",
    description:
      "Developed a professional and responsive website for a technology acquisition corporation.",
    link: "#",
  },
  {
    icon: <Dribbble className="h-8 w-8 text-pink-400" />,
    title: "Password Generator",
    description:
      "A fun and secure password generator to create strong, unique passwords with various options.",
    link: "#",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-emerald-400" />,
    title: "Gabe-Waste-Pickup",
    description: "An ongoing project aimed at streamlining waste management and pickup services.",
    link: "#",
  },
  {
    icon: <Music className="h-8 w-8 text-rose-400" />,
    title: "Subha Weddings",
    description: "Designed and built a beautiful, elegant website for a wedding planning service.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container text-center">
        <h2 className="text-h2 font-bold tracking-tight">Creative Endeavors</h2>
        <p className="mt-4 text-lg text-secondary">A selection of my recent projects.</p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="group block transform rounded-2xl border border-transparent bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-700">{project.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
              </div>
              <p className="text-secondary">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
