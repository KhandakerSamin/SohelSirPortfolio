"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ExternalLink, BookOpen, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [academicStats, setAcademicStats] = useState({
    years: 0,
    publications: 0,
    positions: 0,
    toefl: 0
  });

  // Animate numbers on mount
  useEffect(() => {
    const targets = { years: 8, publications: 5, positions: 7, toefl: 100 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setAcademicStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  }, []);

  const featuredPublications = [
    {
      title: "Rooftops detection with YOLOv8 from aerial imagery and a brief review on rooftop photovoltaic potential assessment",
      year: "2025",
      type: "Journal",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ",
      description: "Published in IAES International Journal of Artificial Intelligence - Ahmed, M. S., Arman, M. S., Tasnim, N., Imran, M. H., Sammak, M. H., & Bhuiyan, T."
    },
    {
      title: "Enhancing Roadway Cleanliness Through Advanced Object Detection Techniques",
      year: "2024",
      type: "Journal",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:ULOm3_A8WrAC",
      description: "A Study on Road Garbage Detection and Classification Using YOLOv8"
    },
    {
      title: "PhishGuard: Leveraging NLP and Machine Learning for Email Phishing Detection",
      year: "2024",
      type: "Conference",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:hqOjcs7Dif8C",
      description: "Advanced email security using natural language processing techniques"
    },
    {
      title: "Parking Slot Detection and Vacancy Check Based on Deep Learning Method",
      year: "2024",
      type: "Journal",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:8k81kl-MbHgC",
      description: "Smart parking management using computer vision"
    }
  ];

  const testimonials = [
    {
      name: "Professor Dr. Touhid Bhuiyan",
      role: "Professor",
      institution: "Washington University of Science and Technology, USA",
      content: "I have known him for several years… he is wonderful … I strongly recommend…",
      rating: 5,
      email: "touhid.bhuiyan@wust.edu"
    },
    {
      name: "Kaushik Sarker",
      role: "Associate Professor",
      institution: "Daffodil International University",
      content: "I have known him for several years… he is wonderful … I strongly recommend…",
      rating: 5,
      email: "kaushik.swe@daffodilvarsity.edu.bd"
    },
    {
      name: "Ahmed Rahman",
      role: "Former Student, Now Data Scientist",
      institution: "Google",
      content: "Professor Arman's guidance was instrumental in my career. His practical approach to teaching complex concepts made all the difference.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">


        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50">
                <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-medium">Available for Collaboration</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-[68px] font-bold text-foreground leading-tight whitespace-nowrap">
                  <span className="text-gradient">Md Shohel Arman</span>
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>

              {/* Role */}
              <h2 className="text-lg md:text-2xl text-primary font-medium leading-relaxed">
                Assistant Professor • Research Assistant (WUST, USA) 
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
               Academic researcher specializing in Computer Vision, Machine Learning, and Data Science, with over eight years of experience in higher education, research leadership, and international collaboration.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <Link
                  href="/experience"
                  className="group btn-primary inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Get in Touch
                  <svg
                    className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>


            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Outer Glow Ring */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div> */}

                {/* Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-3xl  overflow-hidden group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Inner Border Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>

                  {/* Image */}
                  <div className="relative w-full h-full p-4">
                    <Image
                      src="/profile.jpg"
                      alt="Md Shohel Arman"
                      width={384}
                      height={384}
                      className="rounded-2xl object-cover w-full h-full group-hover:scale-103 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-2xl"></div>
                </div>

                {/* Floating Stats Cards */}
                {/* <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-xl hidden md:block group-hover:translate-y-1 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div> */}

               
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Academic Excellence - WITH ANIMATED NUMBERS */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of dedication to education, research, and professional development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{academicStats.years}+</div>
                <div className="text-muted-foreground text-sm md:text-base">Years in Teaching & Research</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{academicStats.publications}+</div>
                <div className="text-muted-foreground text-sm md:text-base">Recent Publications</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{academicStats.positions}</div>
                <div className="text-muted-foreground text-sm md:text-base">Career Positions</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{academicStats.toefl}</div>
                <div className="text-muted-foreground text-sm md:text-base">TOEFL iBT Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated educator and researcher with a passion for advancing data science
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-hover bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Assistant Professor & Lab In-charge, Data Science Lab</h3>
                <p className="text-lg text-primary font-medium">Daffodil International University (DIU)</p>
                <p className="text-muted-foreground mt-2">September 2022 - Present</p>
                <p className="text-md text-muted-foreground mt-1">Research Assistant, Washington University of Science & Technology (WUST), USA - 2024 - Present</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-3">Academic Excellence</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading research initiatives in data science and machine learning while mentoring the next
                    generation of software engineers.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-3">Research Impact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Published researcher with focus on educational data mining, machine learning applications, and
                    business analytics.
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg hover:scale-105 transition-all duration-300"
              >
                Learn More About Me
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Core competencies with LinkedIn endorsements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-background rounded-lg border border-border card-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Machine Learning</h3>
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Endorsed</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[95%]" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">15+ projects</p>
            </div>
            <div className="bg-background rounded-lg border border-border card-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Data Analysis</h3>
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Endorsed</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[90%]" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">20+ projects</p>
            </div>
            <div className="bg-background rounded-lg border border-border card-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Research</h3>
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Endorsed</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[88%]" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">8+ years</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/skills"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg hover:scale-105 transition-all duration-300"
            >
              View All Skills
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional & Industrial Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic, professional, and industrial journey
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

            {/* Professional Experience Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Assistant Professor & Lab In-charge
                </h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  Current
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">
                Daffodil International University (DIU)
              </p>
              <p className="text-muted-foreground font-medium mb-4">
                August 2022 - Present • 2+ years
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Leading research initiatives in data science and machine learning.
                Managing computer science laboratory operations, mentoring students,
                and contributing to academic course development.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">Students Taught</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Research Projects</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">Courses Developed</div>
                </div>
              </div>
            </div>

            {/* Industrial Experience Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Senior Full-Stack Developer
                </h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  Active
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">
                TechVision Solutions • Part-Time
              </p>
              <p className="text-muted-foreground font-medium mb-4">
                January 2024 - Present
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Architecting and developing scalable web applications using React, Node.js, and MongoDB.
                Leading code reviews, integrating third-party APIs, optimizing performance,
                and mentoring junior developers.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm font-semibold text-primary mb-1">Key Skills</div>
                  <div className="text-xs text-muted-foreground">
                    React.js • Node.js • MongoDB • AWS
                  </div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm font-semibold text-primary mb-1">Dev Tools</div>
                  <div className="text-xs text-muted-foreground">
                    Docker • Git • CI/CD
                  </div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm font-semibold text-primary mb-1">Technologies</div>
                  <div className="text-xs text-muted-foreground">
                    TypeScript • Express.js • PostgreSQL • Redis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/experience"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg hover:scale-105 transition-all duration-300"
            >
              View Full Experience
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>



      {/* Volunteering Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community Service</h2>
            <p className="text-lg text-muted-foreground">Giving back through leadership and volunteer work</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background border border-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Chief Volunteer</h3>
                  <p className="text-primary font-medium">CloudCamp Bangladesh</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-2">2015 - Present</p>
              <p className="text-primary font-medium text-sm">500+ professionals trained</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Student Volunteer</h3>
                  <p className="text-primary font-medium">BASIS Student's Forum</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-2">2013 - 2015</p>
              <p className="text-primary font-medium text-sm">200+ students engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section - UPGRADED WITH GOOGLE SCHOLAR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Publications & Research</h2>
            <p className="text-lg text-muted-foreground">Latest publications and academic contributions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredPublications.map((pub, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 card-hover hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pub.type === 'Journal'
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                    }`}>
                    {pub.type} • {pub.year}
                  </span>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {pub.description}
                </p>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Read Full Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about my work and expertise</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <details className="bg-background border border-border rounded-xl p-6 group">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                <span>What are your main research interests?</span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                My primary research focuses on data science applications in education, machine learning algorithms,
                image processing, and business analytics. I'm particularly interested in how AI can improve educational
                outcomes.
              </div>
            </details>
            <details className="bg-background border border-border rounded-xl p-6 group">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                <span>Do you offer consulting services?</span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                Yes, I provide consulting services in data science, machine learning implementation, educational
                technology, and research methodology. I work with both academic institutions and industry partners.
              </div>
            </details>
            <details className="bg-background border border-border rounded-xl p-6 group">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                <span>Are you available for collaborative research?</span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                I'm always open to collaborative research opportunities, especially in areas related to educational
                technology, data science applications, and machine learning. Feel free to reach out to discuss potential
                partnerships.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, academic collaborations, or sharing insights about
              data science and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 font-medium text-lg rounded-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="mailto:shohel.arman@diu.edu.bd"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium text-lg rounded-lg hover:bg-muted hover:scale-105 transition-all duration-300"
              >
                Email Directly
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage