import { Github, Linkedin, Mail } from "lucide-react";

import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container py-16 text-center">
        <h2 className="text-h2 font-bold tracking-tight">Let's Connect!</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-secondary">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          an amazing team.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="mailto:jaashish151@gmail.com"
            className="rounded-full bg-card p-3 text-secondary shadow-md transition-all duration-300 hover:scale-125 hover:text-rose-500"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jaashish151/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-card p-3 text-secondary shadow-md transition-all duration-300 hover:scale-125 hover:text-blue-600"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/spyaj"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-card p-3 text-secondary shadow-md transition-all duration-300 hover:scale-125 hover:text-secondary-foreground"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
        <div className="mt-16 text-sm text-secondary">
          <p>© {new Date().getFullYear()} Pramod Joshi. All Rights Reserved.</p>
          <p className="mt-1">Designed with 🎨 and coded with ❤️ in Bharatpur, Nepal.</p>
        </div>
      </div>
   
    </footer>
  );
}
