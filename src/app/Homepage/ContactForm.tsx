"use client";

import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";
import { CheckCircle, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Ensure component is only rendered on client to avoid hydration issues
  useEffect(() => {
    setIsClient(true);

    emailjs.init("KtCtR1rM-GBB6vPnY");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        "service_0xtolh6", // Replace with your EmailJS Service ID
        "template_fysm7pv", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
      );

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({ name: "", email: "", message: "" });
  };

  if (!isClient) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-6 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105">
          <Mail className="h-5 w-5" />
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md border-border bg-card text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-card-foreground">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        {status === "success" ? (
          <div className="space-y-4 py-6 text-center">
            <div className="flex justify-center">
              <CheckCircle
                className="animate-scale-in h-16 w-16 animate-pulse text-emerald-500"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Message Sent!</h3>
            <p className="text-lg text-secondary">
              Thank you for reaching out. I’ll get back to you soon!
            </p>
            <DialogFooter className="flex justify-center gap-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                onClick={handleReset}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white transition-transform duration-300 hover:scale-105"
              >
                Send Another Message
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-foreground transition-all duration-300 focus:border-accent focus:ring-accent"
                placeholder="Your name"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-foreground transition-all duration-300 focus:border-accent focus:ring-accent"
                placeholder="Your email"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-foreground transition-all duration-300 focus:border-accent focus:ring-accent"
                placeholder="Your message"
                aria-required="true"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-500" role="alert">
                {errorMessage}
              </p>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white transition-transform duration-300 hover:scale-105"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
