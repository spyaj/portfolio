import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Hobbies", href: "#hobbies" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Unit Converter",
      desc: "Clean conversion tool for multiple length units with instant feedback.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://spyaj.github.io/conversion/",
    },
    {
      title: "Random Password Generator",
      desc: "Simple and practical random password generator with configurable options.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://spyaj.github.io/password-generator/",
    },
    {
      title: "GitHub Cheat Sheet",
      desc: "Quick-reference site for essential Git and GitHub commands and workflow help.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://spyaj.github.io/gitSheet/",
    },
    {
      title: "GABE Waste Pickup",
      desc: "Web product concept for smoother waste pickup scheduling and user flow.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://gabe-waste-pickup.vercel.app/",
    },
    {
      title: "Financial Literacy",
      desc: "Educational platform focused on simple, practical financial learning.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://financial-literacy-zeta.vercel.app/",
    },
    {
      title: "InDrive Support (Customer Help)",
      desc: "Support-oriented interface built for clear customer assistance experience.",
      tools: ["Next.js", "TypeScript", "UI/UX"],
      link: "https://indrive-support.vercel.app/",
    },
    {
      title: "CampMate",
      desc: "Camping-focused application concept with modern layout and user-friendly flow.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://campmate.vercel.app/",
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React / Next.js",
    "Tailwind CSS",
    "Node.js",
    "HTML5 / CSS3",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Fundamentals",
  ];

  const certificates = [
    {
      title: "Google IT Support Certificate",
      issuer: "Google / Credly",
      year: "2024",
      link: "https://www.credly.com/badges/94e7635b-0dc2-4e77-97a0-736d7e3689ee/public_url",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/E6T3S8CYPY4V",
    },
  ];

  const hobbies = ["Chess", "Tech & Development", "Cooking", "Music"];
  const orderedProjects = [...projects].reverse();

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pramod Joshi",
    url: "https://pramodjoshi.com.np",
    image: "https://pramodjoshi.com.np/profile.webp",
    sameAs: ["https://github.com/spyaj"],
    knowsAbout: skills,
  };

  return (
    <main className="min-h-screen relative overflow-hidden pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      {/* Background Elements */}
      <div className="page-bg" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      <div className="shape shape-one" aria-hidden="true" />
      <div className="shape shape-two" aria-hidden="true" />

      <a href="#content" className="skip-link">Skip to content</a>

      <header className="fixed top-0 inset-x-0 z-30 px-4 pt-4">
        <div className="max-w-5xl mx-auto border border-[var(--line)] bg-[var(--surface)]/92 backdrop-blur-md shadow-[0_8px_30px_rgba(54,40,25,0.08)] rounded-2xl">
          <div className="h-14 px-4 md:px-6 flex items-center justify-between">
            <a href="#top" className="font-mono text-sm md:text-base font-semibold tracking-wide">
              Pramod Joshi
            </a>

            <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <details className="md:hidden relative">
              <summary className="list-none cursor-pointer px-3 py-2 border border-[var(--line)] text-sm font-medium select-none rounded-xl">
                Menu
              </summary>
              <nav
                aria-label="Mobile primary"
                className="absolute right-0 mt-2 w-52 bg-[var(--surface)] border border-[var(--line)] shadow-lg p-2 flex flex-col rounded-xl"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-sm text-foreground/85 hover:bg-[var(--line)] transition-colors rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <div id="content" className="max-w-5xl mx-auto px-6 pt-36 md:pt-40 lg:pt-44 relative z-10 flex flex-col gap-28">
        {/* HERO SECTION */}
        <section id="top" className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 reveal">
          <div className="flex-1 space-y-7 order-2 md:order-1 text-center md:text-left">
            <p className="tracking-[0.2em] uppercase text-xs font-semibold text-foreground/60">Portfolio 2026</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] font-mono">
              Hi, I&apos;m <br className="hidden md:block" />
              Pramod Joshi.
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-xl font-light leading-relaxed opacity-80 border-l-0 md:border-l-2 border-[var(--accent-2)] md:pl-4 mx-auto md:mx-0">
              Computer engineering student and web developer building clean,
              useful, and human-friendly digital products.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
              <a
                href="/Pramod_Joshi_Resume_Updated.pdf"
                download
                className="px-7 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity rounded-xl"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-[var(--line)] text-foreground hover:bg-[var(--line)] transition-colors rounded-xl"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full md:w-auto">
            <div className="relative w-full aspect-square max-w-[360px] mx-auto md:w-80 md:h-[420px] overflow-hidden border border-[var(--line)] shadow-[0_14px_50px_rgba(35,25,16,0.15)] rounded-3xl">
              <Image
                src="/profile.webp"
                alt="Pramod Joshi"
                fill
                priority
                className="object-cover object-[50%_22%] scale-[1.05] hover:scale-[1.1] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="reveal" style={{ animationDelay: "120ms" }}>
          <div className="bg-[var(--surface)] backdrop-blur-md p-10 md:p-14 border border-[var(--line)] rounded-3xl">
            <h2 className="text-3xl font-bold mb-6 font-mono">About Me</h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
              I enjoy turning ideas into practical, minimal web experiences.
              My focus is frontend development with strong attention to visual clarity,
              accessibility, and performance. I like simple interfaces that feel polished and alive.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="reveal" style={{ animationDelay: "240ms" }}>
          <h2 className="text-3xl font-bold mb-10 font-mono">Technical Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-transparent border border-[var(--line)] px-6 py-3 font-medium text-foreground/80 hover:bg-[var(--line)] transition-colors cursor-default rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="reveal" style={{ animationDelay: "360ms" }}>
          <h2 className="text-3xl font-bold mb-10 font-mono">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {orderedProjects.map((proj, idx) => (
              <a
                href={proj.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[var(--surface)] border border-[var(--line)] p-8 hover:-translate-y-1 transition-transform duration-300 rounded-3xl"
              >
                <h3 className="text-2xl font-bold font-mono mb-3 group-hover:text-[var(--accent-2)] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tools.map((tool, i) => (
                    <span key={i} className="text-xs uppercase tracking-wide border border-[var(--line)] px-3 py-1 font-medium rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certificates" className="reveal" style={{ animationDelay: "480ms" }}>
          <h2 className="text-3xl font-bold mb-10 font-mono">Certifications</h2>
          <div className="border-l py-2 border-[var(--line)] pl-8 space-y-10">
            {certificates.map((cert, idx) => (
              <div key={idx} className="relative">
                <div className="absolute w-3 h-3 bg-[var(--accent)] -left-[38px] top-2" />
                <h3 className="text-xl font-bold mb-1">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                    {cert.title}
                  </a>
                </h3>
                <p className="text-foreground/70">
                  {cert.issuer} &bull; {cert.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOBBIES SECTION */}
        <section id="hobbies" className="reveal" style={{ animationDelay: "600ms" }}>
          <h2 className="text-3xl font-bold mb-8 font-mono">Hobbies</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby) => (
              <div key={hobby} className="bg-[var(--surface)] border border-[var(--line)] px-5 py-6 text-center text-foreground/80 font-medium rounded-2xl">
                {hobby}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="reveal" style={{ animationDelay: "720ms" }}>
          <div className="bg-[var(--foreground)] text-[var(--background)] p-10 md:p-14 grid md:grid-cols-3 gap-8 items-start rounded-3xl">
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold font-mono">Contact</h2>
              <p className="text-[var(--background)]/80 text-lg max-w-2xl">
                Open to internships, freelance projects, and collaborations. If you have a project idea, let&apos;s connect.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href="mailto:jaashish151@gmail.com"
                className="px-6 py-3 bg-[var(--accent-2)] hover:bg-[#a63709] text-white font-semibold text-center transition-colors rounded-xl"
              >
                Send an Email
              </a>
              <a
                href="https://github.com/spyaj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--background)]/30 hover:bg-[var(--background)] hover:text-[var(--foreground)] font-semibold text-center transition-colors rounded-xl"
              >
                View GitHub
              </a>
              <a
                href="/Pramod_Joshi_Resume_Updated.pdf"
                download
                className="px-6 py-3 border border-[var(--background)]/30 hover:bg-[var(--background)] hover:text-[var(--foreground)] font-semibold text-center transition-colors rounded-xl"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-foreground/50 text-sm mt-6 reveal" style={{ animationDelay: "820ms" }}>
          <p>© {new Date().getFullYear()} Pramod Joshi. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}
