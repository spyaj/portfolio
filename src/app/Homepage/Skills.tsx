import { Award, Braces, Code, Layers, Link2, Palette, Server } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <Code className="h-12 w-12 text-red-500" /> },
    { name: "CSS3", icon: <Palette className="h-12 w-12 text-blue-500" /> },
    { name: "JavaScript", icon: <Braces className="h-12 w-12 text-yellow-500" /> },
    { name: "React", icon: <Layers className="h-12 w-12 text-cyan-500" /> },
    { name: "Node.js", icon: <Server className="h-12 w-12 text-green-500" /> },
  ];

  const certificates = [
    {
      name: "Google IT Support Professional Certificate",
      link: "https://www.credly.com/badges/94e7635b-0dc2-4e77-97a0-736d7e3689ee/public_url",
      icon: <Award className="h-12 w-12 text-purple-500" />,
    },
    {
      name: "Foundations of User Experience (UX) Design (Level 1 of 7)",
      link: "https://www.coursera.org/account/accomplishments/verify/E6T3S8CYPY4V",
      icon: <Award className="h-12 w-12 text-indigo-500" />,
    },
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

        {/* Certificates Section */}
        <div className="mt-16">
          <h2 className="text-h2 font-bold tracking-tight text-accent dark:text-accent-foreground">
            My Achievements
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Recognized certifications that enhance my expertise.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-opacity-90 dark:hover:bg-opacity-90 group flex transform flex-col items-center gap-2 rounded-lg bg-card p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">{cert.icon}</div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-accent dark:group-hover:text-accent-foreground">
                    {cert.name}
                  </span>
                  <Link2 className="ml-2 h-4 w-4 text-secondary transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
