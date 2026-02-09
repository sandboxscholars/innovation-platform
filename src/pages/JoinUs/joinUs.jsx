import React from "react";
import { 
  FiUser, 
  FiMail, 
  FiFileText, 
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiUsers,
  FiAward,
  FiTarget,
  FiArrowRight,
  FiExternalLink
} from "react-icons/fi";

export default function JoinUs() {
  // Requirements list
  const requirements = [
    {
      title: "Academic Standing",
      description: "Currently enrolled as a full-time student in any recognized educational institution",
      icon: FiUser
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 5-10 hours per week for project work and team meetings",
      icon: FiClock
    },
    {
      title: "Passion for Innovation",
      description: "Demonstrated interest in technology, research, or creative problem-solving",
      icon: FiTarget
    },
    {
      title: "Collaborative Spirit",
      description: "Willingness to work in teams and contribute to collective success",
      icon: FiUsers
    },
  ];

  // What to include in application
  const applicationItems = [
    "Current CV/Resume highlighting relevant experience",
    "Academic transcript (unofficial copy is acceptable)",
    "Portfolio of previous projects (if applicable)",
    "Statement of purpose (max 500 words)",
    "Preferred role and project interests",
    "Availability schedule for the upcoming semester",
  ];

  // Available positions
  const availablePositions = [
    {
      title: "Research Associate",
      department: "Research & Development",
      type: "Part-time",
      duration: "6 months",
      requirements: ["Research methodology", "Data analysis", "Academic writing"],
      icon: FiFileText
    },
    {
      title: "Frontend Developer",
      department: "Technology",
      type: "Project-based",
      duration: "3-4 months",
      requirements: ["React.js", "JavaScript", "CSS/HTML"],
      icon: FiFileText
    },
    {
      title: "Content Writer",
      department: "Communications",
      type: "Volunteer",
      duration: "Ongoing",
      requirements: ["Technical writing", "SEO basics", "Content strategy"],
      icon: FiFileText
    },
    {
      title: "Project Coordinator",
      department: "Management",
      type: "Part-time",
      duration: "8 months",
      requirements: ["Project management", "Team coordination", "Communication"],
      icon: FiFileText
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Project-based",
      duration: "3 months",
      requirements: ["Figma", "User research", "Prototyping"],
      icon: FiFileText
    },
    {
      title: "Data Analyst",
      department: "Research",
      type: "Part-time",
      duration: "4 months",
      requirements: ["Python/R", "Statistics", "Data visualization"],
      icon: FiFileText
    },
  ];

  // Email information to include
  const emailInfo = [
    "Subject line: [Position] Application - [Your Name]",
    "Brief introduction about yourself",
    "Why you're interested in joining",
    "Relevant skills and experience",
    "Your availability",
    "Attach all required documents",
  ];

  return (
    <div className="min-h-screen bg-paperWhite">
      {/* Hero Introduction */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brandPrimary/10 via-paperWhite to-brandSecondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-6">
              <FiUsers className="w-4 h-4 text-brandPrimary" />
              <span className="text-brandPrimary font-medium text-sm uppercase tracking-wider">
                Join Our Community
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-deepCharcoal mb-6">
              Build With <span className="text-brandPrimary">Purpose</span>
            </h1>
            
            <p className="text-xl text-darkCool max-w-3xl mx-auto leading-relaxed">
              Join a diverse community of student innovators working on projects that create 
              real impact. We're looking for passionate individuals ready to learn, grow, 
              and contribute to meaningful solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Active Members" },
              { value: "50+", label: "Projects Completed" },
              { value: "15+", label: "Disciplines" },
              { value: "100%", label: "Student-Led" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-pureWhite p-4 rounded-xl border border-lightCool text-center"
              >
                <div className="text-2xl font-bold text-brandPrimary mb-1">{stat.value}</div>
                <div className="text-sm text-darkCool">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Requirements & Application Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Requirements Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 flex items-center justify-center">
                  <FiCheckCircle className="w-5 h-5 text-brandPrimary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  Who We're Looking For
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {requirements.map((req, index) => (
                  <div 
                    key={index}
                    className="bg-pureWhite p-6 rounded-xl border border-lightCool hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-brandPrimary/10 flex items-center justify-center flex-shrink-0">
                        <req.icon className="w-6 h-6 text-brandPrimary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-deepCharcoal mb-2">{req.title}</h3>
                        <p className="text-darkCool">{req.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Include Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accentPrimary/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-accentPrimary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  What to Include in Your Application
                </h2>
              </div>

              <div className="bg-pureWhite rounded-xl border border-lightCool p-6">
                <ul className="space-y-4">
                  {applicationItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brandPrimary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-brandPrimary"></div>
                      </div>
                      <span className="text-darkCool">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 rounded-lg border border-lightCool">
                  <h4 className="font-bold text-deepCharcoal mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-sm text-darkCool">
                    <li>• All documents should be in PDF format</li>
                    <li>• Maximum file size: 10MB per document</li>
                    <li>• Application review takes 7-10 business days</li>
                    <li>• You may apply for multiple positions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Email Information Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brandSecondary/10 flex items-center justify-center">
                  <FiExternalLink className="w-5 h-5 text-brandSecondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  How to Apply via Email
                </h2>
              </div>

              <div className="bg-gradient-to-br from-brandPrimary/5 to-brandSecondary/5 rounded-xl border border-lightCool p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-deepCharcoal mb-4">
                    Send your application to: <span className="text-brandPrimary">join@dailyscholar.org</span>
                  </h3>
                  <p className="text-darkCool mb-4">
                    Please ensure your email includes the following information:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {emailInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="bg-pureWhite p-4 rounded-lg border border-lightCool"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accentPrimary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-accentPrimary">{index + 1}</span>
                        </div>
                        <span className="text-sm text-darkCool">{info}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-pureWhite rounded-lg border border-lightCool">
                  <p className="text-sm text-darkCool text-center">
                    <span className="font-bold text-brandPrimary">Response Time:</span> 
                    We typically respond within 5-7 business days. If you don't hear back, 
                    feel free to send a follow-up email.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Available Positions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-pureWhite rounded-2xl border border-lightCool shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-brandPrimary to-brandSecondary p-6 text-pureWhite">
                  <div className="flex items-center gap-3 mb-2">
                    <FiTarget className="w-6 h-6" />
                    <h2 className="text-xl font-bold">Available Positions</h2>
                  </div>
                  <p className="text-pureWhite/90 text-sm">
                    {availablePositions.length} open roles across different departments
                  </p>
                </div>

                {/* Positions List */}
                <div className="p-6">
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {availablePositions.map((position, index) => (
                      <div 
                        key={index}
                        className="group p-4 rounded-lg border border-lightCool hover:border-brandTertiary hover:shadow-sm transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-deepCharcoal group-hover:text-brandPrimary transition-colors">
                              {position.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs px-2 py-1 bg-brandPrimary/10 text-brandPrimary rounded-full">
                                {position.department}
                              </span>
                              <span className="text-xs px-2 py-1 bg-accentSecondary/10 text-accentSecondary rounded-full">
                                {position.type}
                              </span>
                            </div>
                          </div>
                          <FiArrowRight className="w-4 h-4 text-darkCool group-hover:text-brandPrimary transition-colors" />
                        </div>

                        <div className="flex items-center justify-between text-sm text-darkCool mb-3">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="w-3 h-3" />
                            <span>{position.duration}</span>
                          </div>
                          <div className="text-xs font-medium text-brandPrimary">
                            Apply Now
                          </div>
                        </div>

                        {/* Requirements Tags */}
                        <div className="flex flex-wrap gap-1">
                          {position.requirements.slice(0, 3).map((req, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-2 py-1 bg-lightCool text-darkCool rounded"
                            >
                              {req}
                            </span>
                          ))}
                          {position.requirements.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-lightCool text-darkCool rounded">
                              +{position.requirements.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Application Timeline */}
                  <div className="mt-8 pt-6 border-t border-lightCool">
                    <h4 className="font-bold text-deepCharcoal mb-3">Application Timeline</h4>
                    <div className="space-y-3">
                      {[
                        { step: "Application Review", duration: "7-10 days" },
                        { step: "Interview Stage", duration: "1-2 weeks" },
                        { step: "Final Decision", duration: "3-5 days" },
                        { step: "Onboarding", duration: "1 week" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-darkCool">{item.step}</span>
                          <span className="text-brandPrimary font-medium">{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="mt-6 bg-gradient-to-br from-accentTertiary/10 to-lightWarm/30 rounded-xl border border-lightCool p-6">
                <h4 className="font-bold text-deepCharcoal mb-4">What You'll Gain</h4>
                <ul className="space-y-3">
                  {[
                    "Hands-on project experience",
                    "Professional mentorship",
                    "Networking opportunities",
                    "Portfolio development",
                    "Skill certification",
                    "Leadership training",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-darkCool">
                      <FiAward className="w-4 h-4 text-accentPrimary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-2xl">
            <div className="bg-pureWhite p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-deepCharcoal mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-darkCool mb-6 max-w-2xl mx-auto">
                Join our community of innovators and work on projects that matter. 
                Applications are reviewed on a rolling basis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:join@dailyscholar.org"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-brandPrimary text-pureWhite rounded-xl font-semibold hover:bg-brandSecondary hover:shadow-xl transition-all"
                >
                  <FiMail className="w-5 h-5" />
                  Send Application Email
                </a>
                <button className="inline-flex items-center gap-3 px-8 py-3 bg-paperWhite border-2 border-lightCool text-deepCharcoal rounded-xl font-semibold hover:border-brandTertiary hover:shadow-lg transition-all">
                  Download Application Guide
                  <FiExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}