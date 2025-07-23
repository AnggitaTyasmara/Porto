"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, Folder, Layout, Link, Edit, Play, ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { portfolioData } from "@/data/portfolio-data"
import * as LucideIcons from 'lucide-react';
import { Download } from "lucide-react";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Home,
  Folder,
  Layout,
  Link,
  Edit,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Play,
  ArrowRight,
}


export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row pt-16 sm:pt-20 lg:pt-24 min-h-screen bg-[url('/background.jpg')]
    text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
        <div
          className={`${
            isScrolled
              ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-gray-900/60 backdrop-blur-md border-gray-800/50"
          } border rounded-full px-4 py-2 transition-all duration-300`}
        >
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {(portfolioData.navigation ?? []).map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full w-7 h-7 sm:w-8 sm:h-8 transition-all duration-200"
                  onClick={() => scrollToSection(item.id)}
                  title={item.label}
                >
                  <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </Button>
              )
            })}
          </div>
        </div>
      </nav>

      <div className="w-full lg:sticky lg:top-0 flex justify-center p-4 sm:p-6 pt-0 gap-x-0 lg:w-[45%] lg:h-screen flex-row items-start mx-px pr-2 sm:pr-5 pl-4 sm:pl-8 md:pl-16 lg:pl-[219px] lg:pt-0">
      {/* Left Side - Sticky Profile Card */}
      <Card className="w-full max-w-[280px] sm:max-w-[320px] bg-white text-black rounded-xl overflow-hidden relative shadow-2xl mt-8 sm:mt-12 lg:mt-16">
        <CardContent className="p-0">
          {/* Profile Image Section */}
          <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">

              <Image
                src={portfolioData.personal.profileImage || "/placeholder.svg"}
                alt={portfolioData.personal.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Decorative dotted lines */}
            <div className="absolute top-2 left-2">
              <svg width="30" height="30" viewBox="0 0 30 30" className="text-gray-400">
                <defs>
                  <pattern id="dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="2.5" cy="2.5" r="0.6" fill="currentColor" />
                  </pattern>
                </defs>
                <path d="M6 6 L24 6 L24 24" stroke="url(#dots)" strokeWidth="1" fill="none" strokeDasharray="1.5,1.5" />
              </svg>
            </div>
          </div>

          {/* Name and Info Section */}
          <div className="p-4">
            <h1 className="text-center text-lg font-bold mb-2">{portfolioData.personal.name}</h1>
            {/* Description */}
            <p className="text-center text-gray-600 text-xs leading-relaxed mb-3">
              A Software Engineer who has developed countless innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-2">
              {(portfolioData.social ?? []).map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-black w-6 h-6"
                    onClick={() => window.open(social.url, "_blank")}
                    title={social.name}
                  >
                    <IconComponent className="h-3 w-3" />
                  </Button>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-full p-4 sm:p-6 lg:p-12 space-y-16 sm:space-y-20 lg:space-y-24 tracking-[0] leading-[1.6rem] mx-0 lg:px-[124px] lg:py-[59px] lg:w-[70%]">
        {/* Hero Section */}
        <section id="hero" className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              {portfolioData.personal.title.split(" ")[0]}
              <br />
              <span className="text-gray-500">{portfolioData.personal.title.split(" ")[1]}</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-sm sm:max-w-md leading-relaxed">
              {portfolioData.personal.description}
            </p>
            <a
    href="/AnggitaTyasmara_CV.pdf"
    download
    className="flex justify items-center gap-1 mt-2 text-white text-base sm:text-lg hover:underline"
  >
    <Download className="w-4 h-4" />
    Download CV
  </a>
          </div>
          {/* Tombol download CV */}
  

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
            {(portfolioData.stats ?? []).map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {(portfolioData.skills ?? []).map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative overflow-hidden hover:bg-gray-800 transition-colors"
              >
                <CardContent className="p-0">
                  <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide whitespace-pre-line">
                    {skill.title}
                  </h3>
                  {skill.hasPattern && (
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" viewBox="0 0 200 120">
                        <path
                          d="M20 20 L180 20 M20 40 L180 40 M20 60 L180 60 M20 80 L180 80"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-gray-600 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section id="projects">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12">
            RECENT
            <br />
            <span className="text-gray-500">PROJECTS</span>
          </h2>
          <div className="space-y-6">
            {(portfolioData.projects ?? [])
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group cursor-pointer p-4 rounded-lg hover:bg-gray-900 transition-colors"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <div className="w-24 h-16 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={96}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-500">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12">
            {portfolioData.stats[0].number.replace("+", "")} YEARS OF
            <br />
            <span className="text-gray-500">EXPERIENCE</span>
          </h2>
          <div className="space-y-8">
            {(portfolioData.experience ?? []).map((job, index) => (
              <div key={index} className="group cursor-pointer p-4 rounded-lg hover:bg-gray-900 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {job.company}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors mt-1" />
                </div>
                <p className="text-gray-400 font-medium mb-1">{job.role}</p>
                <p className="text-gray-500 text-sm mb-3">
                  {job.period} • {job.location}
                </p>
                <p className="text-gray-400 leading-relaxed mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12">
    TECH
    <br />
    <span className="text-gray-500">STACK</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
    {(portfolioData.tools ?? []).map((tool, index) => {
      const Icon = LucideIcons[tool.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number }>;

      return (
        <Card
          key={index}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:bg-gray-800 transition-colors cursor-pointer"
          title={tool.category}
        >
          <CardContent className="p-0 flex items-center gap-3">
            <div className="text-2xl text-gray-400">
              {Icon && <Icon size={24} />}
            </div>
            <span className="text-gray-300 font-medium">{tool.name}</span>
          </CardContent>
        </Card>
      );
    })}
  </div>
</section>

        {/* Blog Section - Hidden for now */}
        {false && (
          <section id="thoughts">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12">
              LATEST
              <br />
              <span className="text-gray-500">THOUGHTS</span>
            </h2>
            <div className="space-y-8">
              {(portfolioData.thoughts ?? []).map((thought, index) => (
                <div
                  key={index}
                  className="group cursor-pointer p-4 rounded-lg hover:bg-gray-900 transition-colors"
                  onClick={() => window.open(thought.url, "_blank")}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors max-w-md">
                      {thought.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-3">{thought.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{thought.date}</span>
                    <span>•</span>
                    <span>{thought.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {thought.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12">
            LET&apos;S WORK
            <br />
            <span className="text-gray-500">TOGETHER</span>
          </h2>
          <div className="mb-8">
            <p className="text-gray-400 mb-4">{portfolioData.contact.availability}</p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <span>📧 {portfolioData.contact.email}</span>
              <span>📱 {portfolioData.contact.phone}</span>
              <span>📍 {portfolioData.contact.location}</span>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-gray-900 border-gray-800 text-white placeholder-gray-500 rounded-lg focus:border-gray-600 text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-900 border-gray-800 text-white placeholder-gray-500 rounded-lg focus:border-gray-600 text-sm sm:text-base"
                />
              </div>
            </div>
            <div>
              <Input
                placeholder="Subject"
                className="bg-gray-900 border-gray-800 text-white placeholder-gray-500 rounded-lg focus:border-gray-600 text-sm sm:text-base"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-gray-900 border-gray-800 text-white placeholder-gray-500 rounded-lg resize-none focus:border-gray-600 text-sm sm:text-base"
              />
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-lg py-3 text-lg font-medium">
              Send Message
            </Button>
          </form>
        </section>
      </div>
    </div>
  )
}
