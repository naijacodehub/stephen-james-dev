import { useState } from "react";
import {
  ArrowRight,
  Code,
  Zap,
  Palette,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const skillCategories = [
    {
      title: "Front-End Technologies",
      skills: [
        { name: "React", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Redux", level: "Advanced" },
        { name: "React Query", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "VS Code", level: "Expert" },
        { name: "Webpack & Vite", level: "Advanced" },
        { name: "npm & yarn", level: "Expert" },
        { name: "Figma", level: "Intermediate" },
        { name: "Chrome DevTools", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Jest & Testing Library", level: "Advanced" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: "Expert" },
        { name: "Communication", level: "Expert" },
        { name: "Team Collaboration", level: "Expert" },
        { name: "Time Management", level: "Advanced" },
        { name: "Attention to Detail", level: "Expert" },
        { name: "Adaptability", level: "Expert" },
        { name: "Self-Motivation", level: "Expert" },
        { name: "Mentoring", level: "Advanced" },
      ],
    },
  ];

  const currentlyLearning = [
    "Three.js for 3D web experiences",
    "Advanced animation with Framer Motion",
    "Web Performance Optimization",
    "Micro-frontend architecture",
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const milestones = [
    {
      year: "2025",
      title: "Senior Front-End Engineer",
      description:
        "Leading front-end development for enterprise applications, mentoring junior developers.",
    },
    {
      year: "2023",
      title: "Front-End Engineer",
      description:
        "Built responsive web applications using React and modern JavaScript frameworks.",
    },
    {
      year: "2022",
      title: "Self-Taught Developer",
      description:
        "Completed multiple online courses and built personal projects to master front-end development.",
    },
    {
      year: "2021",
      title: "Started Coding Journey",
      description:
        "Discovered passion for web development and committed to learning front-end technologies.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppCTA />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 min-h-screen flex items-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 animate-fade-in">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    {/* Replace this div with your image: <img src="your-image.jpg" alt="Stephen James" className="w-full h-full object-cover" /> */}
                    <span className="text-6xl font-bold">SJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <Badge className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in">
                Available for new projects
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stephen James
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary mb-6 font-semibold animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Front-End Engineer
              </p>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                I craft fast, responsive, and visually engaging web experiences using React and modern front-end technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg">
                  <a href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)] transition-all duration-300 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code following best practices and
                modern standards.
              </p>
            </Card>
            <Card
              className="text-center p-8 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                Building lightning-fast applications optimized for speed and
                user experience.
              </p>
            </Card>
            <Card
              className="text-center p-8 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive interfaces that users love to
                interact with.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a self-taught Front-End Engineer specializing in React, JavaScript, and modern web technologies. My journey into web development began with curiosity and evolved into a passion for crafting beautiful, performant user interfaces.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">My Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe that great code is not just functional—it's clean, maintainable, and built with the end user in mind. I focus on building scalable React applications and optimizing web performance.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Code, label: "Clean Code", desc: "Maintainable & scalable" },
              { icon: Zap, label: "Performance", desc: "Optimized & fast" },
              { icon: Palette, label: "User Experience", desc: "Beautiful & intuitive" },
              { icon: CheckCircle2, label: "Accessible", desc: "For everyone" },
            ].map((item) => (
              <Card key={item.label} className="p-6 text-center hover:border-primary/50 transition-colors">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in React,
              JavaScript, and modern web development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/30 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="space-y-8">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  {category.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-lg bg-background/50 hover:bg-background transition-all hover:shadow-md hover:scale-105 duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          skill.level === 'Expert' 
                            ? 'bg-primary' 
                            : skill.level === 'Advanced' 
                            ? 'bg-accent' 
                            : 'bg-secondary'
                        }`}></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Currently Learning</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentlyLearning.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 scroll-mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's build something great together. I'm always open to
              discussing new projects and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <Card className="flex items-start gap-4 p-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:stephen.james@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        mailtostephen01@gmail.com
                      </a>
                    </div>
                  </Card>

                  <Card className="flex items-start gap-4 p-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Remote / Available Worldwide
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <h4 className="text-lg font-bold mb-2">Availability</h4>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance projects and full-time
                  opportunities. Response time is typically within 24 hours.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
              </Card>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
