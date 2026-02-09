import React from "react";
import { 
  FiFileText, 
  FiEdit, 
  FiBookOpen, 
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiUsers,
  FiUser,
  FiAward,
  FiTarget,
  FiArrowRight,
  FiExternalLink,
  FiMail,
  FiBook,
  FiTrendingUp,
  FiSearch,
  FiZap
} from "react-icons/fi";

function SubmitArticles() {
  // Article categories we encourage
  const encouragedCategories = [
    {
      title: "Research Papers",
      description: "Academic research with proper methodology and findings",
      icon: FiBookOpen,
      examples: ["Case studies", "Experimental results", "Literature reviews"],
      color: "brandPrimary"
    },
    {
      title: "Project Showcases",
      description: "Detailed documentation of student-led projects",
      icon: FiTarget,
      examples: ["Technical write-ups", "Process documentation", "Impact reports"],
      color: "brandSecondary"
    },
    {
      title: "Tutorials & Guides",
      description: "Step-by-step instructional content for students",
      icon: FiEdit,
      examples: ["How-to guides", "Learning resources", "Best practices"],
      color: "accentPrimary"
    },
    {
      title: "Student Perspectives",
      description: "Personal experiences and insights from student life",
      icon: FiUsers,
      examples: ["Journey stories", "Learning experiences", "Career insights"],
      color: "accentSecondary"
    },
  ];

  // Submission requirements
  const submissionRequirements = [
    {
      title: "Original Content",
      description: "Articles must be original work not published elsewhere",
      icon: FiEdit,
      mandatory: true
    },
    {
      title: "Proper Formatting",
      description: "Use our template with clear headings and structure",
      icon: FiFileText,
      mandatory: true
    },
    {
      title: "Academic Integrity",
      description: "Proper citations and references following APA/MLA style",
      icon: FiBookOpen,
      mandatory: true
    },
    {
      title: "Length Guidelines",
      description: "800-2000 words for most articles, 3000+ for research",
      icon: FiClock,
      mandatory: false
    },
    {
      title: "Supporting Materials",
      description: "Include images, diagrams, or data where applicable",
      icon: FiTarget,
      mandatory: false
    },
    {
      title: "Author Bio",
      description: "Brief personal introduction (50-100 words)",
      icon: FiUser,
      mandatory: true
    },
  ];

  // Email information to include
  const emailInfo = [
    "Subject line: Article Submission - [Article Title]",
    "Author name(s) and affiliation",
    "Article title and abstract (max 250 words)",
    "Target category (Research, Tutorial, etc.)",
    "Word count and estimated reading time",
    "Attach article as .docx or .pdf",
    "Include any supporting files/images",
  ];

  // Review process timeline
  const reviewProcess = [
    { step: "Initial Review", duration: "3-5 days", description: "Format and basic requirements check" },
    { step: "Content Review", duration: "7-10 days", description: "Editorial team evaluates content quality" },
    { step: "Peer Feedback", duration: "5-7 days", description: "Optional feedback from student reviewers" },
    { step: "Final Decision", duration: "2-3 days", description: "Acceptance/rejection notification" },
    { step: "Publication", duration: "3-5 days", description: "Editing and publishing if accepted" },
  ];

  // Popular topics (for sidebar)
  const popularTopics = [
    "Machine Learning Applications",
    "Sustainable Technology",
    "Student Entrepreneurship",
    "Research Methodology",
    "Web Development Trends",
    "Data Visualization",
    "Open Source Contributions",
    "Academic Writing Tips",
  ];

  return (
    <div className="min-h-screen bg-paperWhite">
      {/* Hero Introduction */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brandTertiary/10 via-paperWhite to-accentTertiary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-6">
              <FiEdit className="w-4 h-4 text-brandPrimary" />
              <span className="text-brandPrimary font-medium text-sm uppercase tracking-wider">
                Share Your Knowledge
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-deepCharcoal mb-6">
              Submit Your <span className="text-brandPrimary">Projects & Articles</span>
            </h1>
            
            <p className="text-xl text-darkCool max-w-3xl mx-auto leading-relaxed">
              Contribute to our growing knowledge base by sharing your research, 
              projects, and insights with the student innovation community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Articles Published" },
              { value: "50+", label: "Student Authors" },
              { value: "10k+", label: "Monthly Readers" },
              { value: "85%", label: "Acceptance Rate" },
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
          {/* Left Column - Requirements & Submission Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Categories We Encourage */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accentPrimary/10 flex items-center justify-center">
                  <FiTrendingUp className="w-5 h-5 text-accentPrimary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  Categories We Encourage
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {encouragedCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="bg-pureWhite p-6 rounded-xl border border-lightCool hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <category.icon className={`w-6 h-6 text-${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-deepCharcoal mb-1">{category.title}</h3>
                        <p className="text-sm text-darkCool">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm font-medium text-deepCharcoal mb-2">Examples include:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1 bg-lightCool text-darkCool rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Submission Requirements */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brandSecondary/10 flex items-center justify-center">
                  <FiCheckCircle className="w-5 h-5 text-brandSecondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  Submission Requirements
                </h2>
              </div>

              <div className="bg-pureWhite rounded-xl border border-lightCool p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {submissionRequirements.map((req, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-lightCool hover:border-brandTertiary transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        req.mandatory ? 'bg-brandPrimary/10' : 'bg-lightCool'
                      }`}>
                        <req.icon className={`w-5 h-5 ${
                          req.mandatory ? 'text-brandPrimary' : 'text-darkCool'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-deepCharcoal">{req.title}</h3>
                          {req.mandatory && (
                            <span className="text-xs px-2 py-0.5 bg-accentPrimary/10 text-accentPrimary rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-darkCool">{req.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 rounded-lg border border-lightCool">
                  <h4 className="font-bold text-deepCharcoal mb-3">Formatting Guidelines</h4>
                  <ul className="space-y-2 text-sm text-darkCool">
                    <li>• Use our <a href="/templates/submissionTemplate.docx" className="text-brandPrimary hover:underline"> template</a></li>
                    <li>• Font: Times New Roman or Arial, 12pt</li>
                    <li>• Line spacing: 1.5</li>
                    <li>• Margins: 1 inch on all sides</li>
                    <li>• Include abstract (max 250 words)</li>
                    <li>• Add 3-5 relevant keywords</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Submit via Email */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-brandPrimary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deepCharcoal">
                  How to Submit via Email
                </h2>
              </div>

              <div className="bg-gradient-to-br from-brandPrimary/5 to-brandSecondary/5 rounded-xl border border-lightCool p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-deepCharcoal mb-4">
                    Send your projects and articles to: <span className="text-brandPrimary">sandboxscholars.team@gmail.com</span>
                  </h3>
                  <p className="text-darkCool mb-6">
                    Please ensure your email includes all of the following:
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {emailInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-pureWhite rounded-lg border border-lightCool"
                    >
                      <div className="w-8 h-8 rounded-full bg-accentTertiary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accentTertiary">{index + 1}</span>
                      </div>
                      <span className="text-darkCool">{info}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-pureWhite rounded-lg border border-lightCool">
                  <h4 className="font-bold text-deepCharcoal mb-2">Response Timeline</h4>
                  <p className="text-sm text-darkCool">
                    You'll receive an acknowledgment within <span className="font-bold text-brandPrimary">24 hours</span>. 
                    The full review process typically takes <span className="font-bold text-brandPrimary">2-3 weeks</span>. 
                    We'll notify you of our decision via email.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Review Process */}
              <div className="bg-pureWhite rounded-2xl border border-lightCool shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-brandPrimary to-brandSecondary p-6 text-pureWhite">
                  <div className="flex items-center gap-3 mb-2">
                    <FiClock className="w-6 h-6" />
                    <h2 className="text-xl font-bold">Review Process</h2>
                  </div>
                  <p className="text-pureWhite/90 text-sm">
                    What happens after you submit
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {reviewProcess.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Connection line */}
                        {index < reviewProcess.length - 1 && (
                          <div className="absolute top-8 left-5 w-0.5 h-10 bg-lightCool"></div>
                        )}
                        
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-brandPrimary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-brandPrimary">{index + 1}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-deepCharcoal">{step.step}</h3>
                              <span className="text-xs px-2 py-0.5 bg-brandPrimary/10 text-brandPrimary rounded-full">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-sm text-darkCool">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Popular Topics */}
              <div className="bg-pureWhite rounded-xl border border-lightCool p-6">
                <h3 className="font-bold text-deepCharcoal mb-4 flex items-center gap-2">
                  <FiSearch className="w-5 h-5 text-brandPrimary" />
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-2 bg-lightCool text-darkCool rounded-lg hover:bg-brandTertiary/20 hover:text-brandPrimary transition-colors cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Benefits */}
              <div className="bg-gradient-to-br from-accentTertiary/10 to-lightWarm/30 rounded-xl border border-lightCool p-6">
                <h3 className="font-bold text-deepCharcoal mb-4 flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-accentPrimary" />
                  Author Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Publication certificate",
                    "Professional editing support",
                    "Author profile on our site",
                    "Networking opportunities",
                    "Portfolio enhancement",
                    "Potential for guest speaking",
                    "Early access to events",
                    "Recognition in newsletter",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-darkCool">
                      <FiZap className="w-4 h-4 text-accentPrimary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Tips */}
              <div className="bg-pureWhite rounded-xl border border-lightCool p-6">
                <h3 className="font-bold text-deepCharcoal mb-4">Quick Tips</h3>
                <div className="space-y-3 text-sm text-darkCool">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brandPrimary mt-1.5"></div>
                    <span>Write for a student audience - keep it accessible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brandPrimary mt-1.5"></div>
                    <span>Include real examples and case studies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brandPrimary mt-1.5"></div>
                    <span>Use visuals to enhance understanding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brandPrimary mt-1.5"></div>
                    <span>Proofread before submission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-2xl">
            <div className="bg-pureWhite p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-deepCharcoal mb-4">
                Ready to Share Your Knowledge?
              </h3>
              <p className="text-darkCool mb-6 max-w-2xl mx-auto">
                Join our community of student authors and contribute to the collective 
                knowledge base of student innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:articles@dailyscholar.org"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-brandPrimary text-pureWhite rounded-xl font-semibold hover:bg-brandSecondary hover:shadow-xl transition-all"
                >
                  <FiMail className="w-5 h-5" />
                  Submit via Email
                </a>
                <a 
                  href="/templates/article-template.docx"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-paperWhite border-2 border-lightCool text-deepCharcoal rounded-xl font-semibold hover:border-brandTertiary hover:shadow-lg transition-all"
                >
                  <FiFileText className="w-5 h-5" />
                  Download Submission Template
                </a>
              </div>
              <p className="text-sm text-darkCool mt-6">
                Questions? Email <span className="text-brandPrimary font-medium">nafisfuad2024@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitArticles;