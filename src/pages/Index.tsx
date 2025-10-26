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
        className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 animate-fade-in">
              <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Available for new projects
              </Badge>
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                Stephen James
              </span>
            </h1>
            <p
              className="text-2xl md:text-3xl text-primary mb-4 font-semibold animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Front-End Engineer
            </p>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              I craft <span className="text-primary font-semibold">fast</span>,{" "}
              <span className="text-primary font-semibold">responsive</span>,
              and{" "}
              <span className="text-primary font-semibold">
                visually engaging
              </span>{" "}
              web experiences using React, JavaScript, and modern front-end
              technologies.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="text-base hover:shadow-[0_0_30px_hsl(217_91%_60%/0.5)]"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Floating stats */}
            <div
              className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years Coding
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
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
      <section id="about" className="py-20 px-4 bg-card/30 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Stephen James, a self-taught Front-End Engineer specializing
                in React, JavaScript, and modern web technologies. My journey
                into web development began with curiosity and evolved into a
                passion for crafting beautiful, performant user interfaces.
              </p>
              <p>
                What started as building simple websites quickly transformed
                into mastering complex state management, responsive design
                systems, and modern front-end architectures. I believe that
                great code is not just functional—it's clean, maintainable, and
                built with the end user in mind.
              </p>
              <p>
                Today, I focus on building scalable React applications,
                implementing pixel-perfect designs, and optimizing web
                performance. I'm constantly learning new technologies and best
                practices to stay at the forefront of front-end development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Write clean, maintainable code",
                "Prioritize user experience",
                "Stay curious and keep learning",
                "Collaborate and communicate effectively",
                "Build accessible applications",
                "Optimize for performance",
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-2 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block p-6 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)] transition-shadow">
                      <div className="text-primary font-bold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] md:-translate-x-1/2"></div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and
              professional competencies
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <Card
                      key={skill.name}
                      className="p-4 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)] transition-shadow"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge
                          className={`${getLevelColor(
                            skill.level
                          )} w-fit text-xs`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Currently Learning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentlyLearning.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
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
