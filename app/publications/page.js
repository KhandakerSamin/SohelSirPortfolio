"use client";
import { useState } from "react";
import { ExternalLink, BookOpen, Filter, Calendar, FileText, Award } from "lucide-react";

const PublicationsPage = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const allPublications = [
    {
      title: "Rooftops detection with YOLOv8 from aerial imagery and a brief review on rooftop photovoltaic potential assessment",
      authors: "Ahmed, M. S., Arman, M. S., Tasnim, N., Imran, M. H., Sammak, M. H., & Bhuiyan, T.",
      year: "2025",
      type: "Journal",
      journal: "IAES International Journal of Artificial Intelligence",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ",
      description: "This research presents an advanced approach to detecting rooftops from aerial imagery using YOLOv8, providing a comprehensive review of rooftop photovoltaic potential assessment methodologies."
    },
    {
      title: "Enhancing Roadway Cleanliness Through Advanced Object Detection Techniques",
      authors: "Arman, M. S., et al.",
      year: "2024",
      type: "Journal",
      journal: "International Journal",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:ULOm3_A8WrAC",
      description: "A comprehensive study on road garbage detection and classification using YOLOv8, focusing on improving roadway cleanliness through automated detection systems."
    },
    {
      title: "PhishGuard: Leveraging NLP and Machine Learning for Email Phishing Detection",
      authors: "Arman, M. S., et al.",
      year: "2024",
      type: "Conference",
      conference: "International Conference",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:hqOjcs7Dif8C",
      description: "Advanced email security system using natural language processing techniques and machine learning algorithms to detect and prevent phishing attacks."
    },
    {
      title: "Parking Slot Detection and Vacancy Check Based on Deep Learning Method",
      authors: "Arman, M. S., et al.",
      year: "2024",
      type: "Journal",
      journal: "International Journal",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:8k81kl-MbHgC",
      description: "Smart parking management system using computer vision and deep learning to detect parking slots and check vacancy in real-time."
    },
    {
      title: "Customer Sentiments Towards Delivery Services in Bangladesh",
      authors: "Arman, M. S., et al.",
      year: "2024",
      type: "Conference",
      conference: "International Conference",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=D7YhgbwAAAAJ&sortby=pubdate&citation_for_view=D7YhgbwAAAAJ:IjCSPb-OGe4C",
      description: "Machine learning-based sentiment analysis of customer opinions towards delivery services in Bangladesh, providing insights for service improvement."
    }
  ];

  // Filter publications
  const filteredPublications = allPublications.filter(pub => {
    const yearMatch = selectedYear === "all" || pub.year === selectedYear;
    const typeMatch = selectedType === "all" || pub.type === selectedType;
    return yearMatch && typeMatch;
  });

  const years = ["all", ...new Set(allPublications.map(pub => pub.year))];
  const types = ["all", "Journal", "Conference"];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Research & Publications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Publications & Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic contributions spanning Computer Vision, Machine Learning, Natural Language Processing, and Data Science applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{allPublications.length}</div>
            <div className="text-sm text-muted-foreground">Total Publications</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-1">
              {allPublications.filter(p => p.type === "Journal").length}
            </div>
            <div className="text-sm text-muted-foreground">Journal Articles</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {allPublications.filter(p => p.type === "Conference").length}
            </div>
            <div className="text-sm text-muted-foreground">Conference Papers</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">2024-2025</div>
            <div className="text-sm text-muted-foreground">Publication Years</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Filter Publications</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === "all" ? "All Years" : year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-16">
          {filteredPublications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Publication Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border-2 border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pub.type === 'Journal'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'bg-accent/10 text-accent border border-accent/20'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>

                  {pub.journal && (
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Published in:</span> {pub.journal}
                    </p>
                  )}

                  {pub.conference && (
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Presented at:</span> {pub.conference}
                    </p>
                  )}

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pub.description}
                  </p>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Scholar CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border border-primary/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore More on Google Scholar
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Visit my Google Scholar profile for a complete list of publications, citations, and research impact metrics.
              </p>
              <a
                href="https://scholar.google.com/citations?hl=en&user=D7YhgbwAAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                View Google Scholar Profile
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default PublicationsPage;
