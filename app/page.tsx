"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Award, Briefcase, GraduationCap, Github, Linkedin, ExternalLink, Code, Menu, X } from "lucide-react"
import { SiLeetcode, SiMedium, SiWhatsapp } from "react-icons/si"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    closeMobileMenu()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendationIndex((prev) => (prev + 1) % recommendations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const recommendations = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Technology Officer",
      company: "Innovation Systems Inc.",
      text: "Mansoor is an exceptionally talented developer with a deep understanding of modern AI architecture. His ability to translate complex ideas into elegant solutions is remarkable.",
      initials: "SJ",
      bgColor: "bg-blue-600",
    },
    {
      name: "Prof. Muhammad Hassan",
      role: "Computer Science Professor",
      company: "FAST-NUCES",
      text: "An outstanding student with remarkable dedication to learning. Mansoor's passion for AI and robotics is evident in his coursework and projects.",
      initials: "MH",
      bgColor: "bg-emerald-600",
    },
    {
      name: "Amina Malik",
      role: "Senior Software Engineer",
      company: "Digital Transformation Co.",
      text: "Collaborated with Mansoor on multiple projects. His technical skills, problem-solving abilities, and work ethic are truly impressive.",
      initials: "AM",
      bgColor: "bg-purple-600",
    },
    {
      name: "Hassan Raza",
      role: "Startup Founder & CTO",
      company: "AI Ventures Pakistan",
      text: "Mansoor is a talented developer with a bright future in AI. His contributions to our projects have been invaluable and innovative.",
      initials: "HR",
      bgColor: "bg-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="bg-black/90 backdrop-blur-sm border-b border-zinc-800 flex justify-center space-x-6 px-6 py-3">
          <button
            onClick={() => scrollToSection("about")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-zinc-300 hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-black/90 backdrop-blur-sm border-b border-zinc-800 px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-white">Mansoor Ahmed</span>
            <button
              onClick={toggleMobileMenu}
              className="text-zinc-300 hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-zinc-800 pt-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-zinc-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 min-h-screen flex items-center py-20 px-4 pt-32 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Mansoor Ahmed</h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-4 text-balance">
              BSCS Student at FAST-NUCES, Class of 2029
            </p>
            <p className="text-lg md:text-xl text-blue-400 mb-6 text-balance font-medium">
              Agentic & Robotic AI Enthusiast
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
              Computer Science student passionate about Agentic and Robotic AI systems and their transformative
              potential. Building expertise in AI technologies while pursuing my Bachelor's degree at FAST-NUCES.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:mansoor.ahmed11521@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/923191459855" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-white">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-zinc-300 leading-relaxed mb-6 text-pretty">
                I'm a Computer Science student at FAST National University (NUCES), Class of 2029, with a deep passion
                for Agentic and Robotic AI systems. I'm particularly interested in revolutionizing our daily lives
                through intelligent autonomous systems and solving complex real-world problems with cutting-edge AI
                technologies. Currently building a strong foundation in computer science fundamentals while actively
                exploring the frontiers of artificial intelligence.
              </p>
              <p className="text-zinc-300 leading-relaxed text-pretty">
                Through certifications from IBM and Google, I'm continuously expanding my knowledge in AI and generative
                technologies. My goal is to contribute to meaningful AI innovations that can make a positive impact on
                society and drive technological advancement in autonomous systems.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent w-full justify-start"
                asChild
              >
                <a href="mailto:mansoor.ahmed11521@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  mansoor.ahmed11521@gmail.com
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent w-full justify-start"
                asChild
              >
                <a href="https://github.com/mansoorahmedsurti" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  github.com/mansoorahmedsurti
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent w-full justify-start"
                asChild
              >
                <a href="https://www.linkedin.com/in/mansoorahmedsurti/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  linkedin.com/in/mansoorahmedsurti
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent w-full justify-start"
                asChild
              >
                <a href="https://leetcode.com/u/mansoorahmedsurti/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="mr-2 h-4 w-4" />
                  leetcode.com/u/mansoorahmedsurti
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent w-full justify-start"
                asChild
              >
                <a href="https://medium.com/@mansoorahmedsurti" target="_blank" rel="noopener noreferrer">
                  <SiMedium className="mr-2 h-4 w-4" />
                  medium.com/@mansoorahmedsurti
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-white">Education</h2>

          <div className="grid gap-6">
            <Card className="border-blue-600/30 bg-blue-950/30 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-white">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                  Bachelor of Science in Computer Science (BSCS)
                </CardTitle>
                <CardDescription className="text-lg font-medium text-zinc-300">
                  FAST National University of Computer and Emerging Sciences (NUCES)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="default" className="bg-blue-600 text-white">
                    Class of 2029
                  </Badge>
                  <span className="text-sm text-zinc-400">Currently Enrolled</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <GraduationCap className="h-5 w-5 text-blue-500" />
                    Intermediate (Pre-Engineering)
                  </CardTitle>
                  <CardDescription className="text-zinc-300">Adamjee Government Science College</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                    2023 - 2025
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <GraduationCap className="h-5 w-5 text-blue-500" />
                    Matriculation (Computer Science)
                  </CardTitle>
                  <CardDescription className="text-zinc-300">Karachi Public School</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                    2020 - 2023
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-white">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-800 border-zinc-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Code className="h-5 w-5 text-blue-500" />
                  Unit Converter Python
                </CardTitle>
                <CardDescription className="text-zinc-300">
                  A comprehensive unit conversion tool built with Python and Streamlit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Streamlit
                  </Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/mansoorahmedsurti/Unit-Converter-Python"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a
                      href="https://unit-converter-by-mansoor.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Code className="h-5 w-5 text-blue-500" />
                  Password Strength Meter
                </CardTitle>
                <CardDescription className="text-zinc-300">
                  Interactive password strength analyzer with real-time feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Streamlit
                  </Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/mansoorahmedsurti/Password-Strength-Meter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a
                      href="https://password-strength-meter-by-mansoor.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Code className="h-5 w-5 text-blue-500" />
                  Comforty
                </CardTitle>
                <CardDescription className="text-zinc-300">
                  Modern furniture e-commerce website with sleek design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    React.js
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Tailwind CSS
                  </Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/mansoorahmedsurti/Comforty---A-furniture-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a href="https://comforty-by-mansoor.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Code className="h-5 w-5 text-blue-500" />
                  Centurial Analysis
                </CardTitle>
                <CardDescription className="text-zinc-300">
                  Interactive historical timeline exploring centuries from 5 BCE to 21st century
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    JavaScript
                  </Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/mansoorahmedsurti/CenturialAnalysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a
                      href="https://mansoorahmedsurti.github.io/CenturialAnalysis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Code className="h-5 w-5 text-blue-500" />
                  Robotics RAG Chatbot Platform
                </CardTitle>
                <CardDescription className="text-zinc-300">
                  Retrieval Augmented Generation chatbot for interactive robotics knowledge base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Docusaurus
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    FastAPI
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    Qdrant
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-300 text-xs">
                    OpenAI Agents
                  </Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/mansoorahmedsurti/Physical-AI-and-Robotics-Book"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a
                      href="https://robotics-book-by-mansoor.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-300 hover:bg-blue-800 bg-transparent"
              asChild
            >
              <a href="https://github.com/mansoorahmedsurti" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-12 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-balance text-white">Professional Experience</h2>

          <Card className="max-w-2xl mx-auto bg-zinc-800 border-zinc-700 text-white">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    Customer Service Specialist
                  </CardTitle>
                  <CardDescription className="text-zinc-300">IBEX Pakistan</CardDescription>
                </div>
                <Badge variant="secondary" className="text-xs bg-zinc-700 text-zinc-300">
                  Sep 2024 - Mar 2025
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-300">
                Gained valuable communication and problem-solving experience while supporting Walmart customers,
                maintaining high satisfaction scores and developing professional skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-white">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "OpenAI Agents SDK",
              "Next.js",
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "Streamlit",
              "Problem Solving",
              "AI & Machine Learning",
            ].map((skill) => (
              <Card key={skill} className="text-center bg-zinc-800 border-zinc-700">
                <CardContent className="pt-6 flex items-center justify-center">
                  <Badge variant="secondary" className="text-sm bg-blue-950 text-blue-300">
                    {skill}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-white">Certifications</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Award className="h-5 w-5 text-blue-500" />
                  Introduction to AI
                </CardTitle>
                <CardDescription className="text-zinc-300">Issued by IBM - 2024</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Award className="h-5 w-5 text-blue-500" />
                  Introduction to Generative AI
                </CardTitle>
                <CardDescription className="text-zinc-300">Issued by Google - 2024</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Award className="h-5 w-5 text-blue-500" />
                  Digital Literacy
                </CardTitle>
                <CardDescription className="text-zinc-300">Issued by DigiSkills.pk - 2024</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h2 className="text-3xl font-bold text-center text-balance text-white">Recommendations</h2>
            <Badge className="bg-yellow-600 text-yellow-100 text-xs">Just Kidding</Badge>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-full flex justify-center">
              <Card className="w-full max-w-md bg-zinc-800 border-zinc-700 text-white transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-full ${recommendations[currentRecommendationIndex].bgColor} flex items-center justify-center text-white font-bold text-lg border-2 border-white/20`}
                    >
                      {recommendations[currentRecommendationIndex].initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{recommendations[currentRecommendationIndex].name}</p>
                      <p className="text-sm text-zinc-400">{recommendations[currentRecommendationIndex].role}</p>
                      <p className="text-xs text-blue-400">{recommendations[currentRecommendationIndex].company}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 italic">"{recommendations[currentRecommendationIndex].text}"</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-2 justify-center">
              {recommendations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentRecommendationIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentRecommendationIndex ? "bg-blue-500 w-8" : "bg-zinc-600 w-2"
                  }`}
                  aria-label={`Go to recommendation ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-blue-950/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance text-white">Let's Connect</h2>
          <p className="text-zinc-300 mb-8 text-pretty">
            Interested in discussing AI innovations, computer science projects, or potential collaboration
            opportunities? I'd love to connect!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:mansoor.ahmed11521@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/923191459855" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-white hover:bg-blue-800" asChild>
              <a href="https://www.linkedin.com/in/mansoorahmedsurti/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-white hover:bg-blue-800" asChild>
              <a href="https://github.com/mansoorahmedsurti" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-white hover:bg-blue-800" asChild>
              <a href="https://leetcode.com/u/mansoorahmedsurti/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="mr-2 h-4 w-4" />
                LeetCode
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-white hover:bg-blue-800" asChild>
              <a href="https://medium.com/@mansoorahmedsurti" target="_blank" rel="noopener noreferrer">
                <SiMedium className="mr-2 h-4 w-4" />
                Medium
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-400">© 2025 Mansoor Ahmed • Karachi, Pakistan</p>
        </div>
      </footer>
    </div>
  )
}
