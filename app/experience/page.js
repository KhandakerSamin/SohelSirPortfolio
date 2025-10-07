'use client';
import React, { useState } from 'react';
import { Briefcase, GraduationCap, FlaskConical, BookOpen, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

const ExperiencePage = () => {
     const [expandedIndex, setExpandedIndex] = useState(null);

     const experiences = [
          {
               title: "Assistant Professor & Lab In-charge",
               company: "Daffodil International University (DIU)",
               period: "August 2022 - Present",
               type: "Academic",
               icon: GraduationCap,
               responsibilities: [
                    "Leading research initiatives in data science and machine learning",
                    "Managing computer science laboratory operations and equipment",
                    "Developing curriculum for undergraduate and graduate programs",
                    "Supervising student research projects and thesis work",
                    "Collaborating with industry partners on applied research projects",
               ],
               skills: ["Research Leadership", "Curriculum Development", "Lab Management", "Student Mentoring"],
          },
          {
               title: "Senior Lecturer",
               company: "Daffodil International University (DIU)",
               period: "May 2020 - August 2022",
               type: "Academic",
               icon: BookOpen,
               responsibilities: [
                    "Taught advanced courses in data science and machine learning",
                    "Led curriculum development initiatives for software engineering program",
                    "Conducted research in educational technology and data analytics",
                    "Mentored junior faculty members and graduate students",
                    "Organized academic conferences and workshops",
               ],
               skills: ["Advanced Teaching", "Curriculum Design", "Research", "Faculty Leadership"],
          },
          {
               title: "Lecturer",
               company: "Daffodil International University (DIU)",
               period: "September 2017 - April 2020",
               type: "Academic",
               icon: BookOpen,
               responsibilities: [
                    "Delivered lectures on software engineering and programming courses",
                    "Supervised undergraduate final year projects",
                    "Participated in academic research and publication activities",
                    "Contributed to departmental administrative tasks",
                    "Engaged in professional development and training programs",
               ],
               skills: ["Teaching", "Project Supervision", "Academic Research", "Student Assessment"],
          },
          {
               title: "Research Associate",
               company: "Daffodil International University (DIU)",
               period: "January 2017 - August 2017",
               type: "Research",
               icon: FlaskConical,
               responsibilities: [
                    "Conducted research in software engineering and data science",
                    "Assisted in grant proposal writing and research project management",
                    "Collaborated with senior researchers on academic publications",
                    "Participated in data collection and analysis activities",
                    "Presented research findings at academic conferences",
               ],
               skills: ["Research Methodology", "Data Analysis", "Academic Writing", "Project Management"],
          },
          {
               title: "Technical Writer",
               company: "IEC Ltd.",
               period: "2016",
               type: "Industry",
               icon: Briefcase,
               responsibilities: [
                    "Created comprehensive technical documentation for software products",
                    "Developed user manuals and API documentation",
                    "Collaborated with development teams to understand product features",
                    "Maintained and updated existing documentation",
                    "Ensured documentation quality and consistency",
               ],
               skills: ["Technical Writing", "Documentation", "API Documentation", "Content Management"],
          },
          {
               title: "Android Trainer",
               company: "ICT Division Bangladesh",
               period: "2014",
               type: "Training",
               icon: Award,
               responsibilities: [
                    "Conducted Android development training programs",
                    "Designed training curriculum and materials",
                    "Mentored participants in mobile app development",
                    "Evaluated trainee progress and provided feedback",
                    "Organized hands-on workshops and coding sessions",
               ],
               skills: ["Android Development", "Training Delivery", "Curriculum Design", "Mentoring"],
          },
     ];

     const getTypeStyle = (type) => {
          switch (type) {
               case "Academic":
                    return {
                         badge: "bg-primary/10 text-primary border-primary/20",
                         dot: "bg-primary",
                         line: "bg-primary/30"
                    };
               case "Research":
                    return {
                         badge: "bg-accent/10 text-accent border-accent/20",
                         dot: "bg-accent",
                         line: "bg-accent/30"
                    };
               case "Industry":
                    return {
                         badge: "bg-purple-500/10 text-purple-600 border-purple-500/20",
                         dot: "bg-purple-500",
                         line: "bg-purple-500/30"
                    };
               case "Training":
                    return {
                         badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                         dot: "bg-emerald-500",
                         line: "bg-emerald-500/30"
                    };
               default:
                    return {
                         badge: "bg-muted/10 text-muted-foreground border-border",
                         dot: "bg-muted-foreground",
                         line: "bg-border"
                    };
          }
     };

     return (
          <div className="min-h-screen bg-background">
               <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    {/* Header */}
                    <div className="text-center mb-20">
                         <div className="inline-block mb-6">
                              <span className="px-5 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                                   Career Journey
                              </span>
                         </div>
                         <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                              Professional Experience
                         </h1>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                              From research to leadership in academia, a track record of continuous learning,
                              innovation, and contribution.

                         </p>
                    </div>

                    {/* Career Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                         <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                              <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <GraduationCap className="w-7 h-7" />
                                   </div>
                                   <div>
                                        <div className="text-3xl font-bold text-primary">8+</div>
                                        <div className="text-sm text-muted-foreground">Years in Academia</div>
                                   </div>
                              </div>
                         </div>
                         <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                              <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <Briefcase className="w-7 h-7" />
                                   </div>
                                   <div>
                                        <div className="text-3xl font-bold text-accent">6</div>
                                        <div className="text-sm text-muted-foreground">Professional Roles</div>
                                   </div>
                              </div>
                         </div>
                         <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                              <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Award className="w-7 h-7" />
                                   </div>
                                   <div>
                                        <div className="text-3xl font-bold text-primary">4</div>
                                        <div className="text-sm text-muted-foreground">Career Progressions</div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative">
                         {/* Timeline Line */}
                         <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                         <div className="space-y-8">
                              {experiences.map((exp, index) => {
                                   const IconComponent = exp.icon;
                                   const typeStyle = getTypeStyle(exp.type);
                                   const isExpanded = expandedIndex === index;

                                   return (
                                        <div
                                             key={index}
                                             className="relative group"
                                        >
                                             {/* Timeline Dot */}
                                             <div className={`hidden lg:block absolute left-8 top-8 w-4 h-4 rounded-full ${typeStyle.dot} -translate-x-1/2 ring-4 ring-background z-10`}></div>

                                             {/* Content Card */}
                                             <div className="lg:ml-20">
                                                  <div
                                                       className="bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                                                       onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                                  >
                                                       {/* Header */}
                                                       <div className="p-6 lg:p-8">
                                                            <div className="flex items-start gap-4 mb-4">
                                                                 <div className={`w-14 h-14 rounded-xl ${typeStyle.badge.replace('text-', 'bg-').replace('/10', '/20')} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                                      <IconComponent className="w-7 h-7" />
                                                                 </div>

                                                                 <div className="flex-1 min-w-0">
                                                                      <div className="flex flex-wrap items-center gap-3 mb-2">
                                                                           <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                                                           <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${typeStyle.badge}`}>
                                                                                {exp.type}
                                                                           </span>
                                                                      </div>

                                                                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                                                                           <div className="flex items-center gap-2">
                                                                                <MapPin className="w-4 h-4" />
                                                                                <span className="font-medium text-primary">{exp.company}</span>
                                                                           </div>
                                                                           <div className="flex items-center gap-2">
                                                                                <Calendar className="w-4 h-4" />
                                                                                <span className="text-sm">{exp.period}</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>

                                                                 <ChevronRight className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                                                            </div>

                                                            {/* Expanded Content */}
                                                            <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-300 ${isExpanded ? 'mt-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                                 {/* Responsibilities */}
                                                                 <div className="lg:col-span-2">
                                                                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                                                                           <div className="w-1 h-4 bg-primary rounded-full"></div>
                                                                           Key Responsibilities
                                                                      </h4>
                                                                      <ul className="space-y-3">
                                                                           {exp.responsibilities.map((responsibility, idx) => (
                                                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                                                     <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${typeStyle.dot}`} />
                                                                                     <span className="leading-relaxed text-sm">{responsibility}</span>
                                                                                </li>
                                                                           ))}
                                                                      </ul>
                                                                 </div>

                                                                 {/* Skills */}
                                                                 <div>
                                                                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                                                                           <div className="w-1 h-4 bg-primary rounded-full"></div>
                                                                           Key Skills
                                                                      </h4>
                                                                      <div className="flex flex-wrap gap-2">
                                                                           {exp.skills.map((skill, idx) => (
                                                                                <span
                                                                                     key={idx}
                                                                                     className="px-3 py-1.5 bg-muted/50 hover:bg-muted text-muted-foreground text-xs rounded-lg border border-border transition-colors duration-200"
                                                                                >
                                                                                     {skill}
                                                                                </span>
                                                                           ))}
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>

                                                       {/* Bottom Accent */}
                                                       <div className={`h-1 ${typeStyle.dot} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>

                    {/* Career Highlights */}
                    <div className="mt-32">
                         <div className="relative bg-card rounded-3xl p-12 shadow-lg border border-border overflow-hidden">
                              <div className="absolute inset-0 bg-primary/5"></div>
                              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

                              <div className="relative z-10 text-center max-w-3xl mx-auto">
                                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                        <Award className="w-8 h-8" />
                                   </div>
                                   <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                        Career Growth & Impact
                                   </h2>
                                   <p className="text-muted-foreground text-lg leading-relaxed">
                                        My career reflects a strong dedication to teaching, research, and the development of students. Each
                                        role, from working in several technical positions through to leadership in academia, has enabled
                                        me to become more knowledgeable about education, technology, and research, and the connection
                                        between them, so that they work to create meaningful impact.

                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExperiencePage;