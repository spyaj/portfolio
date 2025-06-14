import { Braces, Code, Layers, Palette, Server } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <Code className="h-12 w-12 text-red-500" /> },
    { name: "CSS3", icon: <Palette className="h-12 w-12 text-blue-500" /> },
    { name: "JavaScript", icon: <Braces className="h-12 w-12 text-yellow-500" /> },
    { name: "React", icon: <Layers className="h-12 w-12 text-cyan-500" /> },
    { name: "Node.js", icon: <Server className="h-12 w-12 text-green-500" /> },
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container text-center">
        <h2 className="text-h2 font-bold tracking-tight">My Tech Toolkit</h2>
        <p className="mt-4 text-lg text-secondary">
          The tools and technologies I use to bring ideas to life.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex transform flex-col items-center gap-2 p-4 transition-transform hover:-translate-y-2"
            >
              {skill.icon}
              <span className="font-semibold text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
