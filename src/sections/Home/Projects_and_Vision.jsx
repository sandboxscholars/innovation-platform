import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FiCode, FiUsers, FiBookOpen, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
 
export default function Projects_and_Vision() {
  const projects = [
    {
      id: 1,
      title: "Student Innovation Bootcamps",
      description: "Hands-on workshops where students learn cutting-edge technologies and develop practical solutions to real-world challenges through collaborative projects.",
      icon: FiCode,
    },
    {
      id: 2,
      title: "Research & Publication Support",
      description: "Guiding students through research methodology, data analysis, and academic publishing to produce impactful papers and presentations.",
      icon: FiBookOpen,
    },
    {
      id: 3,
      title: "Community Impact Projects",
      description: "Initiatives that connect student creativity with community needs, fostering social responsibility through technology and innovation.",
      icon: FiUsers,
    },
  ];

  const specialties = [
    "Cross-disciplinary Collaboration",
    "Research Methodology Training", 
    "Project Development Guidance",
    "Community Engagement Focus",
    "Academic & Industry Mentorship"
  ];

  return (
    <div className="min-h-screen bg-paperWhite py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Main Heading & Description */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-2">
                  <FiTarget className="w-4 h-4 text-brandPrimary" />
                  <span className="text-brandPrimary font-medium text-sm">Our Focus</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-deepCharcoal leading-tight">
                  Projects <span className="text-brandPrimary">&</span> Vision
                </h1>
              </div>
              
              <p className="text-lg text-darkCool leading-relaxed max-w-lg">
                We empower students to transform innovative ideas into impactful 
                projects through mentorship, resources, and collaborative opportunities 
                that bridge academic learning with real-world application.
              </p>
            </div>

            {/* Specialties Card */}
            <div className="bg-pureWhite rounded-2xl border border-lightCool p-8 shadow-sm relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brandTertiary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative">
                {/* Specialties heading */}
                <div className="inline-block mb-8">
                  <h3 className="text-xl font-bold text-brandPrimary px-6 py-3 rounded-xl bg-brandPrimary/10">
                    Our Specialties
                  </h3>
                </div>

                <div className="space-y-4">
                  {specialties.map((specialty, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-brandPrimary/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brandPrimary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brandPrimary/20 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brandPrimary"></div>
                      </div>
                      <span className="text-deepCharcoal font-medium group-hover:text-brandPrimary transition-colors">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <button className="mt-8 flex items-center gap-2 text-brandPrimary hover:text-brandSecondary font-medium group">
                  Explore All Specialties
                  <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Projects */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-pureWhite rounded-xl border border-lightCool p-6 hover:shadow-lg hover:border-brandTertiary transition-all duration-300 cursor-pointer"
              >
                <div className="flex gap-6">
                  {/* Project Number */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-brandPrimary/10 flex items-center justify-center group-hover:bg-brandPrimary/20 transition-colors">
                      <span className="text-3xl font-bold text-brandPrimary">
                        {project.id}
                      </span>
                    </div>
                    <div className="mt-4 text-brandPrimary">
                      <project.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-deepCharcoal mb-3 group-hover:text-brandPrimary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-darkCool leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-lightCool">
                      <span className="text-sm text-darkCool">
                        Learn more about this initiative
                      </span>
                      <button className="text-brandPrimary hover:text-brandSecondary transition-colors">
                        <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats Banner */}
            <div className="bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-xl p-8 text-pureWhite">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { value: "30+", label: "Projects" },
                  { value: "200+", label: "Students" },
                  { value: "15+", label: "Research Papers" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-pureWhite/20">
                <p className="text-sm text-center opacity-90">
                  Join our growing community of innovators
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <Link to="/projects" className="group inline-flex items-center gap-3 px-8 py-4 bg-brandPrimary text-pureWhite rounded-xl font-semibold hover:bg-accentSecondary hover:shadow-lg transition-all">
                Navigate to the <b>Projects</b> tab to check all of our projects
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}