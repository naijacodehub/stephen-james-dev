import { useState } from "react";
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Stephen | Tech
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.to);
                }}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => {
                // Create a download link for CV
                const link = document.createElement("a");
                link.href = "./stephen-dev.pdf"; // You'll need to add your CV file to the public folder
                link.download = "stephen-dev.pdf";
                link.click();
              }}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
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
    </nav>
  );
};

export default Navigation;
