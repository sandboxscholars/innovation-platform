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
      title: "Learning Mindset",
      description: "Curiosity and passion fuel a desire to learn, so we're looking for students ready to embrace new challenges having a mindset of learning.",
      icon: FiUser
    },
    {
      title: "Time Commitment",
      description: "Flexible time Commitment depending on the role, with most positions requiring around 8–10 hours weekly.",
      icon: FiClock
    },
    {
      title: "Passion for Innovation",
      description: "A strong interest in technology, driven by curiosity in research, with a focus on creative problem-solving. Combining curiosity and technical skills to tackle complex challenges.",
      icon: FiTarget
    },
    {
      title: "Collaborative Spirit",
      description: "We value students who are eager to collaborate and contribute to team success. Collaboration and teamwork are key.",
      icon: FiUsers
    },
  ];

  // What to include in application
  const applicationItems = [
    "CV / Resume: Include your current CV or resume, emphasizing relevant academic, professional, and project experience.",
    "Portfolio (if applicable): Provide a portfolio showcasing previous projects or work relevant to your area of interest.",
    "Portfolio of previous projects (if applicable)",
    "Statement of Purpose: A brief essay (maximum 100 words) outlining your motivations, goals, and reasons for applying.",
    "Preferred Role and Project Interests: Indicate the roles and projects you are most interested in pursuing.",
    "Availability Schedule: Share your availability in an International Time format.",
  ];

  // Available positions
  const availablePositions = [
    {
      title: "Digital Journalist",
      department: "Communications",
      type: "Part-time",
      requirements: ["Strong communication", "Academic writing"],
      icon: FiFileText
    },
    {
      title: "Frontend Developer",
      department: "Technology",
      type: "Project-based",
      requirements: ["React.js", "JavaScript", "CSS/HTML"],
      icon: FiFileText
    },
    {
      title: "Content Writer",
      department: "Communications",
      type: "Volunteer",
      requirements: ["Technical writing", "SEO basics", "Content strategy"],
      icon: FiFileText
    },
    {
      title: "Project Coordinator",
      department: "Management",
      type: "Project-based",
      requirements: ["Project management", "Team coordination", "Strong communication"],
      icon: FiFileText
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Project-based",
      requirements: ["Canva", "User research", "Prototyping"],
      icon: FiFileText
    },
    {
      title: "Data Analyst",
      department: "Research",
      type: "Part-time",
      requirements: ["Python/R", "Statistics", "Data visualization"],
      icon: FiFileText
    },
  ];

  // Email information to include
  const emailInfo = [
    "Subject line: [Position] Application - [Your Name]",
    "Brief introduction about yourself: A short overview of who you are and your academic or professional background.",
    "Statement of Interest: Explain why you are interested in joining and what motivates your application.",
    "Relevant skills and experience: Highlight skills, coursework, or experiences relevant to the position.",
    "Your availability: Specify your availability in an International Time format.",
    "Include all required application documents as outlined in the application requirements.",
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

          {/* Stats REMOVED */}
         
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
                    <li>• This is a <b>voluntary</b> position</li>
                    <li>• You must be able to proficiently speak and communicate in <b>English</b> proficiently.</li>
                    <li>• Application process may take 7-10 business days</li>
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
                    Send your application to: <span className="text-brandPrimary">sandboxscholars.team@gmail.com</span>
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
                    <span className="font-bold text-brandPrimary">Response Time: </span> 
                    We typically respond within 2 days. If you don't hear back, 
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
                          
                        </div>

                        <div className="flex items-center justify-between text-sm text-darkCool mb-3">
                          <div className="flex items-center gap-1">
                            
                            <span>{position.duration}</span>
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
                        { step: "Application Review", duration: "2 days" },
                        { step: "Interview Stage", duration: "1-2 weeks" },
                        { step: "Final Decision", duration: "1 day" },
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
                    "Teamwork Experience",
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
                  href="mailto:sandboxscholars.team@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-brandPrimary text-pureWhite rounded-xl font-semibold hover:bg-brandSecondary hover:shadow-xl transition-all"
                >
                  <FiMail className="w-5 h-5" />
                  Send Application Email
                </a>
                <a 
  href="/guidebooks/application_guidebook_sandbox_scholars.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-8 py-3 bg-paperWhite border-2 border-lightCool text-deepCharcoal rounded-xl font-semibold hover:border-brandTertiary hover:shadow-lg transition-all"
>
  Download Application Guide
  <FiExternalLink className="w-5 h-5" />
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}