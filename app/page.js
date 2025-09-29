import Link from "next/link"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        

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
                  <span className="text-gradient">Md. Shohel Arman</span>
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>

              {/* Role */}
              <h2 className="text-lg md:text-2xl text-primary font-medium leading-relaxed">
                Assistant Professor • Data Science Researcher • Educator
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about teaching, research, and advancing data science for real-world impact. Over eight
                years of experience in academia, specializing in machine learning, data analysis, and educational
                innovation.
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
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-3xl border-2 border-border/50 overflow-hidden group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Inner Border Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>

                  {/* Image */}
                  <div className="relative w-full h-full p-4">
                    <Image
                      src="/profile.jpeg"
                      alt="Md. Shohel Arman"
                      width={384}
                      height={384}
                      className="rounded-2xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-2xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-xl hidden md:block group-hover:translate-y-1 transition-transform duration-300">
                  <div className="text-3xl font-bold text-accent">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>

                <div className="absolute -top-6 -right-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-xl hidden md:block group-hover:translate-y-1 transition-transform duration-300">
                  <div className="text-3xl font-bold text-accent">PhD</div>
                  <div className="text-sm text-muted-foreground">Researcher</div>
                </div>
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


    {/* Academic Excellence */}

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of dedication to education, research, and professional development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground text-sm md:text-base">Years in Teaching & Research</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-sm md:text-base">LinkedIn Endorsements</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground text-sm md:text-base">Academic Positions at DIU</div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground text-sm md:text-base">Professional Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated educator and researcher with a passion for advancing data science
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-hover bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Assistant Professor & Lab In-charge</h3>
                <p className="text-lg text-primary font-medium">Daffodil International University (DIU)</p>
                <p className="text-muted-foreground mt-2">August 2022 - Present</p>
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
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">Academic and professional journey</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-foreground">Assistant Professor & Lab In-charge</h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">Current</span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">Daffodil International University (DIU)</p>
              <p className="text-muted-foreground font-medium mb-4">August 2022 - Present • 2+ years</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Leading research initiatives in data science and machine learning. Managing computer science laboratory
                operations and equipment.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">Students Taught</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Research Projects</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">Courses Developed</div>
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
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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



     

      
    </div>
  )
}

export default HomePage
