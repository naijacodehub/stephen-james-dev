import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#projects", label: "Projects" },
    { to: "#skills", label: "Skills" },
    { to: "#contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Stephen | Tech
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.to}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.to);
                }}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./stephen-dev.pdf";
                  link.download = "stephen-dev.pdf";
                  link.click();
                }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.to}
                      href={link.to}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.to);
                      }}
                      className="text-lg font-medium transition-colors hover:text-primary text-muted-foreground py-2 border-b border-border hover:border-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    variant="default"
                    className="w-full gap-2 mt-4"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/cv.pdf";
                      link.download = "Stephen-James-CV.pdf";
                      link.click();
                      setIsOpen(false);
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
