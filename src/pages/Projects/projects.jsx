import React, { useState } from 'react';
import { 
  FiCode, 
  FiBookOpen, 
  FiUsers, 
  FiCalendar,
  FiFilter,
  FiExternalLink,
  FiGithub,
  FiFileText,
  FiChevronRight
} from 'react-icons/fi';
import { FaPython, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: FiCode, color: 'brandPrimary' },
    { id: 'research', name: 'Research Bootcamps', icon: FiBookOpen, color: 'brandSecondary' },
    { id: 'web', name: 'Web Innovation', icon: FaReact, color: 'accentPrimary' },
    { id: 'bots', name: 'Discord Tools', icon: FaPython, color: 'accentSecondary' },
    { id: 'student', name: 'Student Solutions', icon: FiUsers, color: 'eggplant' },
  ];

  // Technology tags
  const technologies = [
    { name: 'Python', icon: FaPython, color: 'brandPrimary' },
    { name: 'JavaScript', icon: FaJs, color: 'accentTertiary' },
    { name: 'React', icon: FaReact, color: 'brandTertiary' },
    { name: 'Node.js', icon: FaNodeJs, color: 'accentPrimary' },
    { name: 'Research', icon: FiBookOpen, color: 'brandSecondary' },
    { name: 'UI/UX', icon: FiUsers, color: 'accentSecondary' },
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'EduBot - AI Learning Assistant',
      description: 'An intelligent Discord chatbot that helps students organize study sessions, track assignments, and access learning resources through natural conversations.',
      category: 'bots',
      status: 'active',
      duration: '4 months',
      teamSize: 6,
      technologies: ['Python', 'Discord API', 'OpenAI'],
      features: [
        'Assignment tracking & reminders',
        'Study group coordination',
        'Learning resource recommendations',
        'Progress analytics'
      ],
      github: 'https://github.com',
      liveDemo: 'https://demo.com',
      researchPaper: null,
      impact: 'Helped 200+ students improve study habits',
      thumbnail: '/images/edubot.svg'
    },
    {
      id: 2,
      title: 'Sustainable Campus Initiative Platform',
      description: 'A comprehensive web platform connecting students, faculty, and administration to collaborate on sustainability projects across campus.',
      category: 'web',
      status: 'completed',
      duration: '6 months',
      teamSize: 8,
      technologies: ['React', 'Node.js', 'MongoDB'],
      features: [
        'Project proposal system',
        'Resource sharing portal',
        'Impact tracking dashboard',
        'Community engagement tools'
      ],
      github: 'https://github.com',
      liveDemo: 'https://demo.com',
      researchPaper: '/papers/sustainability.pdf',
      impact: 'Supported 15+ campus sustainability projects',
      thumbnail: '/images/sustainability.svg'
    },
    {
      id: 3,
      title: 'Research Bootcamp 2025: Fundamentals of Academic Research',
      description: 'A 6-week intensive program training students in research methodologies, data analysis, and academic writing for impactful student research.',
      category: 'research',
      status: 'Completed',
      duration: '6 weeks',
      teamSize: 12,
      technologies: ['Research', 'Data Analysis', 'Academic Writing'],
      features: [
        'Weekly workshops & mentoring',
        'Research methodology training',
        'Final research paper submission'
      ],
      github: null,
      liveDemo: null,
      researchPaper: '/guidebooks/COURSE_PLAN-FUNDAMENTALS_OF_RESEARCH.pdf',
      impact: 'Trained 10+ students in research methodologies',
      thumbnail: '/images/research.svg'
    },
    {
      id: 4,
      title: 'Student Mental Wellness App',
      description: 'A mobile-first web application providing mental health resources, peer support, and wellness tracking specifically designed for student life.',
      category: 'student',
      status: 'active',
      duration: '3 months',
      teamSize: 5,
      technologies: ['React Native', 'Express', 'PostgreSQL'],
      features: [
        'Anonymous peer support chat',
        'Wellness tracking dashboard',
        'Campus resource directory',
        'Mindfulness exercises library'
      ],
      github: 'https://github.com',
      liveDemo: 'https://demo.com',
      researchPaper: '/papers/mental-health-study.pdf',
      impact: 'Served 300+ students with wellness resources',
      thumbnail: '/images/wellness.svg'
    },
    {
      id: 5,
      title: 'Campus Task Manager Pro',
      description: 'Advanced Discord integration for student group task management with automated reminders, progress tracking, and analytics.',
      category: 'bots',
      status: 'completed',
      duration: '2 months',
      teamSize: 4,
      technologies: ['Python', 'Discord API', 'SQLite'],
      features: [
        'Automated task assignment',
        'Progress visualization',
        'Deadline reminders',
        'Team performance analytics'
      ],
      github: 'https://github.com',
      liveDemo: null,
      researchPaper: null,
      impact: 'Adopted by 10+ student organizations',
      thumbnail: '/images/taskmanager.svg'
    },
    {
      id: 6,
      title: 'Interactive Learning Platform',
      description: 'An innovative web platform combining interactive coding exercises, peer learning, and real-time collaboration tools for computer science students.',
      category: 'web',
      status: 'planning',
      duration: '8 months',
      teamSize: 10,
      technologies: ['React', 'Socket.io', 'Docker'],
      features: [
        'Interactive code editor',
        'Real-time collaboration',
        'Peer code review system',
        'Learning path customization'
      ],
      github: null,
      liveDemo: null,
      researchPaper: null,
      impact: 'Expected to benefit 1000+ CS students',
      thumbnail: '/images/learning.svg'
    },
  ];

  // Filter projects based on active filter and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-accentSecondary';
      case 'completed': return 'text-successGreen';
      case 'ongoing': return 'text-brandSecondary';
      case 'planning': return 'text-darkWarm';
      default: return 'text-darkCool';
    }
  };

  return (
    <div className="min-h-screen bg-paperWhite text-deepCharcoal">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-brandPrimary/5 via-paperWhite to-brandSecondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full">
              <FiCode className="w-4 h-4 text-brandPrimary" />
              <span className="text-brandPrimary font-medium text-sm">Innovation Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-brandPrimary tracking-tight">
              Projects That <span className="text-accentPrimary">Make Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-darkCool max-w-3xl mx-auto leading-relaxed">
              From research bootcamps to innovative software solutions – exploring our 
              student-led initiatives that drive real change.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 px-6 md:px-12 border-y border-lightCool bg-pureWhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Projects", value: "8", icon: FiCode },
              { label: "Research Initiatives", value: "5+", icon: FiBookOpen },
              { label: "Team Members", value: "20+", icon: FiUsers },
              { label: "Impact Reach", value: "100+", icon: FiCalendar },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-brandPrimary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-brandPrimary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-deepCharcoal">{stat.value}</div>
                  <div className="text-sm text-darkCool">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Filter & Search Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-deepCharcoal mb-2">Explore Projects</h2>
              <p className="text-darkCool">Filter by category or search for specific projects</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects, technologies, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-pureWhite border border-lightCool rounded-xl focus:outline-none focus:ring-2 focus:ring-brandTertiary focus:border-transparent text-deepCharcoal placeholder-darkWarm/50"
              />
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-darkWarm w-5 h-5" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                  activeFilter === category.id
                    ? 'bg-brandPrimary text-pureWhite border-brandPrimary'
                    : 'bg-pureWhite text-deepCharcoal border-lightCool hover:border-brandTertiary'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Technology Tags  REMOVED*/}
          
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-pureWhite rounded-2xl border border-lightCool overflow-hidden hover:shadow-xl hover:border-brandTertiary transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        getStatusColor(project.status)
                      } bg-opacity-20`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      <span className="text-sm text-darkCool flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {project.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-deepCharcoal mb-2 group-hover:text-brandPrimary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-darkWarm/30 group-hover:text-brandTertiary transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-darkCool mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-lightCool text-darkCool text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-deepCharcoal mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-darkCool">
                        <div className="w-1 h-1 rounded-full bg-brandTertiary mt-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-sm text-brandPrimary font-medium">
                        +{project.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Impact & Team */}
                <div className="flex items-center justify-between text-sm">
                  <div className="text-darkCool">
                    <span className="font-medium">{project.teamSize}</span> team members
                  </div>
                  <div className="text-accentPrimary font-medium">
                    {project.impact}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-paperWhite border-t border-lightCool">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-darkCool hover:text-brandPrimary transition-colors"
                        title="View on GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="text-darkCool hover:text-accentPrimary transition-colors"
                        title="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.researchPaper && (
                      <a
                        href={project.researchPaper}
                        className="text-darkCool hover:text-brandSecondary transition-colors"
                        title="Research Paper"
                      >
                        <FiFileText className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <button className="flex items-center gap-2 text-brandPrimary hover:text-brandSecondary font-medium">
                    View Details <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 text-pureWhite">
            <div className="absolute inset-0 bg-gradient-to-r from-pureWhite/10 to-transparent opacity-20 pointer-events-none"></div>
            
            <div className="relative">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Start Your Own Project</h3>
                <p className="mb-8 text-pureWhite/90">
                  Have an innovative idea? Join our community and get support, resources, 
                  and mentorship to turn your concepts into impactful projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/submission" className="group px-8 py-3 bg-pureWhite text-brandPrimary rounded-xl font-semibold hover:bg-paperWhite transition-colors">
                    Propose a Project
                  </Link>
                  <Link to="/join-us" className="group px-8 py-3 bg-transparent border-2 border-pureWhite text-pureWhite rounded-xl font-semibold hover:bg-pureWhite/10 transition-colors">
                    Join Existing Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Publications Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-deepCharcoal mb-2">Research Publications</h2>
              <p className="text-darkCool">Academic papers and research outcomes from our projects</p>
            </div>
           
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.researchPaper)
              .slice(0, 3)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-pureWhite p-6 rounded-xl border border-lightCool hover:border-brandTertiary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brandSecondary/20 flex items-center justify-center">
                      <FiBookOpen className="w-5 h-5 text-brandSecondary" />
                    </div>
                    <div>
                      <div className="text-sm text-darkCool">Research Paper</div>
                      <h4 className="font-bold text-deepCharcoal">{project.title}</h4>
                    </div>
                  </div>
                  <p className="text-darkCool text-sm mb-4">
                    Research outcomes and findings from the {project.title.toLowerCase()}
                  </p>
                  <a
                    href={project.researchPaper}
                    className="text-brandPrimary hover:text-brandSecondary font-medium text-sm inline-flex items-center gap-2"
                  >
                    Download PDF <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;