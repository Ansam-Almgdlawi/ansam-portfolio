import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Menu, X, Moon, Sun, Github, Mail, Phone, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">Ansam</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {["home", "about", "skills", "experience", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item ? "text-accent" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["home", "about", "skills", "experience", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Ansam Almgdlawi
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              Backend Developer
            </p>
            <p className="text-lg text-foreground/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              Highly motivated and results-oriented Backend Developer with a strong foundation in Laravel and PHP. Specialized in database management, API development, and robust system design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://github.com/Ansam-Almgdlawi", "_blank")}
              >
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a highly motivated and results-oriented Backend Developer with a strong foundation in Laravel and PHP, complemented by expertise in database management, API development, and robust system design. I have proven ability to quickly learn and adapt to new technologies, with hands-on experience in CI/CD pipelines, Docker, Jira for project management, and comprehensive testing methodologies.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am seeking to leverage strong problem-solving skills and a passion for building scalable, efficient, and secure backend solutions within a dynamic technical team. Currently a fifth-year student at Damascus University, Faculty of Informatics Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { category: "Languages", items: ["PHP", "JavaScript (Basic)"] },
              { category: "Frameworks", items: ["Laravel", "Laravel Blade"] },
              { category: "Databases", items: ["MySQL", "Schema Design", "Query Optimization"] },
              { category: "Version Control", items: ["Git", "GitLab", "Bitbucket"] },
              { category: "DevOps & Tools", items: ["Docker", "CI/CD", "Jira"] },
              { category: "API Development", items: ["RESTful APIs", "API Integration"] },
              { category: "Testing", items: ["Unit Testing", "Integration Testing"] },
              { category: "Project Management", items: ["Agile Methodologies"] },
              { category: "Other", items: ["MVC Architecture", "Firebase", "Pusher (Realtime Chat)"] },
            ].map((skill, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-4 text-accent">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-foreground/80 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Kinana Al-Sham Association Management System",
                role: "Backend Developer",
                period: "May 2025 – October 2025",
                tech: "PHP, Laravel 11, MySQL, React, Flutter, MVC, Jira",
                repo: "https://github.com/Ansam-Almgdlawi/kinanaalsham",
                highlights: [
                  "User management (Admins, Volunteers, Beneficiaries, Donors)",
                  "Financial donations management with secure workflows",
                  "In-kind donations warehouses management (inventory, distribution, reporting)",
                  "Beneficiaries and volunteers management with request workflows and approvals",
                  "Emergency notifications management and real-time alerts",
                  "Integrated Stripe for online donations",
                  "Applied SOLID principles and Clean Code practices",
                  "Utilized Jira for Agile project management, backlog tracking, and sprint planning",
                ],
              },
              {
                title: "Learning Management System (LMS)",
                role: "Backend Developer",
                period: "May 2024 – August 2024",
                tech: "PHP, Laravel, MySQL, MVC, Bitbucket, Firebase, Pusher",
                repo: "https://bitbucket.org/ansamalgdlawi/lmsrepo/src/stage/",
                highlights: [
                  "Built backend for web dashboard & mobile app enabling course management, video streaming, and real-time communication",
                  "Designed RESTful APIs for course operations and optimized MySQL queries to boost performance",
                  "Integrated Firebase (authentication) & Pusher (real-time chat) to enhance engagement",
                  "Applied MVC architecture, Git best practices, and Agile workflows via Jira",
                  "Wrote unit tests for critical APIs, ensuring reliability",
                ],
              },
              {
                title: "Pharmacy Management System",
                role: "Backend Developer",
                period: "November 2023 – January 2024",
                tech: "PHP, Laravel, MySQL, MVC, Bitbucket, Firebase",
                repo: "https://github.com/Ansam-Almgdlawi/Pharmacy-project",
                highlights: [
                  "Built backend for a dual-interface system (medicine warehouse dashboard & pharmacy mobile app)",
                  "Implemented CRUD operations for inventory & orders with optimized database schemas",
                  "Deployed Laravel apps with Docker and ensured seamless integration between APIs",
                ],
              },
            ].map((exp, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
                    <p className="text-foreground/70 font-medium">{exp.role}</p>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  <span className="font-semibold">Tech Stack:</span> {exp.tech}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-foreground/80 flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {exp.repo && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(exp.repo, "_blank")}
                    className="gap-2"
                  >
                    View Repository <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-accent mb-2">
                Bachelor of Science in Informatics Engineering
              </h3>
              <p className="text-lg text-foreground/80 mb-4">
                Damascus University, Faculty of Informatics Engineering, Damascus, Syria
              </p>
              <p className="text-foreground/70 font-medium">
                Currently a Fifth-Year Student | Expected Graduation: 2025/2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Volunteer Work & Activities</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                "Programming Competition Participant: Actively participated in programming competitions, enhancing problem-solving and algorithmic thinking skills",
                "Programming Competition Volunteer: Contributed to organizing and supporting programming competitions",
                "RBCs Team Volunteer: Participated in robotics team volunteering activities",
              ].map((activity, idx) => (
                <div key={idx} className="bg-background border border-border rounded-lg p-6">
                  <p className="text-foreground/80 flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{activity}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="tel:+96393555092"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center gap-4 group"
              >
                <Phone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-foreground/60">Phone</p>
                  <p className="text-lg font-semibold text-foreground">+963 935 552 092</p>
                </div>
              </a>
              <a
                href="mailto:ansamalmgdlawi@gmail.com"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center gap-4 group"
              >
                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="text-lg font-semibold text-foreground">ansamalmgdlawi@gmail.com</p>
                </div>
              </a>
              <a
                href="https://github.com/Ansam-Almgdlawi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center gap-4 group"
              >
                <Github className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-foreground/60">GitHub</p>
                  <p className="text-lg font-semibold text-foreground">Ansam-Almgdlawi</p>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center gap-4 group"
              >
                <ExternalLink className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-foreground/60">LinkedIn</p>
                  <p className="text-lg font-semibold text-foreground">Connect</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center text-foreground/60 text-sm">
          <p>© 2025 Ansam Almgdlawi. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}
