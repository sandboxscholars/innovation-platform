import React from "react";
import { 
  FiCalendar, 
  FiUser, 
  FiTag, 
  FiClock,
  FiExternalLink,
  FiGithub,
  FiFileText,
  FiArrowLeft,
  FiShare2,
  FiBookmark,
  FiDownload,
  FiChevronRight
} from "react-icons/fi";

function ContentTemplate({
  // Required props
  title,
  content,
  
  // Optional props with defaults
  type = "Project", // Project, Article, Research, Tutorial, etc.
  category = "Technology",
  status = "Completed",
  date = "2024-01-15",
  author = "Team Member",
  readTime = "5 min read",
  tags = [],
  
  // Links and resources
  githubLink = null,
  liveDemoLink = null,
  documentationLink = null,
  downloadLink = null,
  
  // Media
  coverImage = null,
  additionalImages = [],
  
  // Team/Contributors
  contributors = [],
  
  // Sections for detailed content
  sections = [],
  
  // Callbacks
  onBack = () => window.history.back(),
}) {
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-successGreen text-pureWhite';
      case 'active': return 'bg-brandPrimary text-pureWhite';
      case 'ongoing': return 'bg-accentPrimary text-pureWhite';
      case 'planning': return 'bg-darkWarm text-pureWhite';
      default: return 'bg-lightCool text-deepCharcoal';
    }
  };

  // Get type icon
  const getTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'project': return '🚀';
      case 'article': return '📝';
      case 'research': return '🔬';
      case 'tutorial': return '🎓';
      case 'documentation': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-paperWhite">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-pureWhite/80 backdrop-blur-sm border-b border-lightCool">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-darkCool hover:text-brandPrimary transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-darkCool hover:text-brandPrimary transition-colors">
                <FiBookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-darkCool hover:text-brandPrimary transition-colors">
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-darkCool mb-8">
          <span className="hover:text-brandPrimary cursor-pointer">Home</span>
          <FiChevronRight className="w-4 h-4" />
          <span className="hover:text-brandPrimary cursor-pointer">{type}s</span>
          <FiChevronRight className="w-4 h-4" />
          <span className="font-medium text-deepCharcoal truncate">{title}</span>
        </div>

        {/* Cover Image */}
        {coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        {/* Header Info */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{getTypeIcon(type)}</span>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(status)}`}>
                {status}
              </span>
              <span className="px-3 py-1 bg-lightCool text-darkCool text-xs font-medium rounded-full">
                {type}
              </span>
              <span className="px-3 py-1 bg-brandPrimary/10 text-brandPrimary text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-deepCharcoal mb-6 leading-tight">
            {title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-darkCool mb-6">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span className="text-sm">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4" />
              <span className="text-sm">By {author}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span className="text-sm">{readTime}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-lightCool text-darkCool text-sm rounded-full hover:bg-brandTertiary/30 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-deepCharcoal text-pureWhite rounded-lg hover:bg-charcoal transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span className="text-sm font-medium">View Code</span>
              </a>
            )}
            {liveDemoLink && (
              <a 
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary text-pureWhite rounded-lg hover:bg-brandSecondary transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
            {documentationLink && (
              <a 
                href={documentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brandSecondary text-pureWhite rounded-lg hover:bg-brandTertiary transition-colors"
              >
                <FiFileText className="w-4 h-4" />
                <span className="text-sm font-medium">Documentation</span>
              </a>
            )}
            {downloadLink && (
              <a 
                href={downloadLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accentPrimary text-pureWhite rounded-lg hover:bg-accentSecondary transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span className="text-sm font-medium">Download</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {typeof content === 'string' ? (
            <div className="text-darkCool leading-relaxed space-y-6">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">{paragraph}</p>
              ))}
            </div>
          ) : (
            content
          )}

          {/* Sections */}
          {sections.length > 0 && (
            <div className="mt-12 space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-brandPrimary pl-6 py-1">
                  <h3 className="text-2xl font-bold text-deepCharcoal mb-4">
                    {section.title}
                  </h3>
                  <div className="text-darkCool leading-relaxed space-y-4">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Images Gallery */}
        {additionalImages.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-deepCharcoal mb-6">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.url} 
                    alt={image.alt || `Image ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contributors */}
        {contributors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-deepCharcoal mb-6">Contributors</h3>
            <div className="flex flex-wrap gap-4">
              {contributors.map((contributor, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-pureWhite border border-lightCool rounded-xl p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brandPrimary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-brandPrimary">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-deepCharcoal">{contributor.name}</h4>
                    <p className="text-sm text-darkCool">{contributor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Tags */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-deepCharcoal mb-6">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {['Student Innovation', 'Web Development', 'Research', 'Education', 'Technology', 'Open Source'].map((topic, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-lightCool text-darkCool rounded-lg hover:bg-brandTertiary/30 transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-lightCool my-12"></div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-3 px-6 py-3 bg-pureWhite border border-lightCool rounded-xl hover:border-brandTertiary hover:shadow-md transition-all"
          >
            <FiArrowLeft className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm text-darkCool">Previous</div>
              <div className="font-medium text-deepCharcoal">Back to {type}s</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 px-6 py-3 bg-pureWhite border border-lightCool rounded-xl hover:border-brandTertiary hover:shadow-md transition-all">
            <div className="text-right">
              <div className="text-sm text-darkCool">Next</div>
              <div className="font-medium text-deepCharcoal">Browse More {type}s</div>
            </div>
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer Note */}
      <footer className="bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-darkCool">
            <p className="mb-2">Have questions about this {type.toLowerCase()}?</p>
            <p className="text-sm">
              Contact us at{' '}
              <a href="mailto:sandboxscholars.team@gmail.com" className="text-brandPrimary hover:underline">
                contact@dailyscholar.org
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Usage Examples:

// 1. Simple Project Page
/*
<ContentTemplate
  title="EduBot - AI Learning Assistant"
  type="Project"
  category="Education Technology"
  status="Active"
  date="2024-02-15"
  author="Sunveer Hossain"
  tags={["AI", "Education", "Chatbot", "Python"]}
  githubLink="https://github.com/example/edubot"
  liveDemoLink="https://edubot.demo.com"
  content="EduBot is an intelligent Discord chatbot that helps students organize study sessions, track assignments, and access learning resources through natural conversations. The project combines machine learning with educational psychology to create an adaptive learning assistant."
  sections={[
    {
      title: "Problem Statement",
      content: "Students often struggle with organizing their study materials and maintaining consistent study habits..."
    },
    {
      title: "Solution",
      content: "EduBot provides a conversational interface that makes study planning intuitive and engaging..."
    }
  ]}
/>
*/

// 2. Article Page
/*
<ContentTemplate
  title="How to Conduct Impactful Student Research"
  type="Article"
  category="Research Methodology"
  author="Iffat Ahmed Afia"
  readTime="8 min read"
  tags={["Research", "Methodology", "Students", "Academic"]}
  content="This guide walks through the systematic process of conducting meaningful research as a student, from选题 to publication..."
/>

// 3. Research Paper
/*
<ContentTemplate
  title="Sustainable Campus Initiatives: A Case Study"
  type="Research"
  category="Sustainability"
  status="Published"
  date="2023-11-20"
  author="Research Team"
  readTime="15 min read"
  tags={["Sustainability", "Case Study", "Campus", "Environment"]}
  downloadLink="/papers/sustainability-study.pdf"
  content="This research paper examines the impact of student-led sustainability initiatives on campus environmental metrics..."
  contributors={[
    { name: "Sunveer Hossain", role: "Lead Researcher" },
    { name: "Iffat Ahmed Afia", role: "Data Analyst" }
  ]}
/>
*/

export default ContentTemplate;