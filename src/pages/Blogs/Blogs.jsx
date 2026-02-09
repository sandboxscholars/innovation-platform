import React, { useState } from 'react';
import { FiCalendar, FiUser, FiTag, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

function Blogs() {
  // State for search
  const [searchQuery, setSearchQuery] = useState('');
  
  // Categories based on your organization's focus
  const categories = [
    { id: 1, name: 'Research Insights', color: 'brandPrimary', count: 8 },
    { id: 2, name: 'Project Updates', color: 'brandSecondary', count: 12 },
    { id: 3, name: 'Student Stories', color: 'accentPrimary', count: 15 },
    { id: 4, name: 'Innovation Tips', color: 'accentSecondary', count: 7 },
    { id: 5, name: 'Event Recaps', color: 'eggplant', count: 5 },
  ];

  // Featured/Coming Soon Section
  const featuredSeries = {
    title: "Research Methodology Series",
    description: "Learn how to conduct impactful research as a student",
    launchDate: "2024-03-15",
    type: "New Series",
    color: "accentTertiary"
  };

  // Sample blog articles
  const articles = [
    {
      id: 1,
      title: "How Student Research Can Impact Local Communities",
      excerpt: "Exploring case studies where student-led research projects created tangible change in local communities...",
      author: "Sarah Johnson",
      date: "2024-02-10",
      readTime: "5 min read",
      category: "Research Insights",
      featured: true,
      tags: ["research", "community", "impact"]
    },
    {
      id: 2,
      title: "Project Alpha: Building Sustainable Solutions",
      excerpt: "Behind the scenes of our flagship sustainability project and the challenges we overcame...",
      author: "Michael Chen",
      date: "2024-02-05",
      readTime: "7 min read",
      category: "Project Updates",
      featured: true,
      tags: ["sustainability", "engineering", "teamwork"]
    },
    {
      id: 3,
      title: "From Idea to Implementation: A Student's Journey",
      excerpt: "A personal account of taking a classroom concept and turning it into a real-world project...",
      author: "Alex Rodriguez",
      date: "2024-01-28",
      readTime: "4 min read",
      category: "Student Stories",
      featured: false,
      tags: ["journey", "innovation", "learning"]
    },
    {
      id: 4,
      title: "Collaborative Tools for Remote Student Projects",
      excerpt: "Essential digital tools and methodologies that helped our team collaborate effectively across campuses...",
      author: "Priya Patel",
      date: "2024-01-20",
      readTime: "6 min read",
      category: "Innovation Tips",
      featured: false,
      tags: ["tools", "collaboration", "remote"]
    },
    {
      id: 5,
      title: "2024 Winter Hackathon: Key Takeaways",
      excerpt: "Reflections on our biggest hackathon yet and the innovative solutions that emerged...",
      author: "David Kim",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Event Recaps",
      featured: false,
      tags: ["hackathon", "event", "innovation"]
    },
    {
      id: 6,
      title: "Balancing Academics and Passion Projects",
      excerpt: "Practical tips for managing coursework while pursuing meaningful extracurricular projects...",
      author: "Emma Wilson",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Student Stories",
      featured: false,
      tags: ["balance", "productivity", "student-life"]
    },
  ];

  // Filter articles based on search
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-paperWhite text-deepCharcoal">
      {/* Hero Header */}
      <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-brandPrimary/5 via-paperWhite to-brandSecondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-accentTertiary/20 rounded-full border border-accentTertiary/30">
              <span className="text-accentPrimary font-semibold">Knowledge Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-brandPrimary tracking-tight">
              Ideas & <span className="text-accentPrimary">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-darkCool max-w-3xl mx-auto leading-relaxed">
              Stories, research, and updates from our student-led innovation community
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-pureWhite border-2 border-lightCool rounded-xl focus:outline-none focus:border-brandSecondary text-deepCharcoal placeholder-darkWarm/50"
                />
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-darkWarm" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-brandPrimary text-pureWhite rounded-lg font-medium hover:bg-brandSecondary transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Series Alert - COMING SOON Section */}
      <section className="py-8 px-6 md:px-12 bg-gradient-to-r from-accentTertiary/20 to-lightWarm/30 border-y border-lightCool">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-pureWhite rounded-2xl border border-lightCool shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accentTertiary/20">
                <FiAlertCircle className="w-6 h-6 text-accentTertiary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 bg-accentTertiary text-charcoal text-sm font-semibold rounded-full">
                    {featuredSeries.type}
                  </span>
                  <span className="text-sm text-darkCool flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    Launching {featuredSeries.launchDate}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-deepCharcoal">{featuredSeries.title}</h3>
                <p className="text-darkCool mt-1">{featuredSeries.description}</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-brandPrimary text-pureWhite rounded-lg font-semibold hover:bg-brandSecondary transition-colors flex items-center gap-2 whitespace-nowrap">
              Notify Me <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories & Filters */}
          <aside className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-pureWhite p-6 rounded-2xl border border-lightCool shadow-sm mb-6">
              <h3 className="text-xl font-bold text-deepCharcoal mb-4 flex items-center gap-2">
                <FiTag className="w-5 h-5 text-brandPrimary" />
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-lightWarm/30 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-${category.color}`}></div>
                        <span className="text-deepCharcoal group-hover:text-brandPrimary font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-lightCool text-darkCool text-sm rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-pureWhite p-6 rounded-2xl border border-lightCool shadow-sm">
              <h3 className="text-xl font-bold text-deepCharcoal mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['research', 'innovation', 'projects', 'students', 'collaboration', 'technology', 'sustainability', 'education'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-2 bg-lightCool text-darkCool rounded-lg hover:bg-brandTertiary/20 hover:text-brandPrimary transition-colors text-sm font-medium"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Articles Grid */}
          <main className="lg:col-span-3">
            {/* Featured Articles */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brandPrimary mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.filter(a => a.featured).map((article) => (
                  <article 
                    key={article.id}
                    className="bg-pureWhite rounded-2xl border border-lightCool overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-brandPrimary/10 text-brandPrimary text-sm font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-darkCool text-sm flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-deepCharcoal mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-darkCool mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brandTertiary/30 flex items-center justify-center">
                            <FiUser className="w-4 h-4 text-brandSecondary" />
                          </div>
                          <span className="text-darkCool font-medium">{article.author}</span>
                        </div>
                        <span className="text-darkWarm text-sm">{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-brandPrimary">All Articles</h2>
                <div className="text-darkCool">
                  Showing {filteredArticles.length} of {articles.length} articles
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-pureWhite rounded-xl border border-lightCool p-6 hover:border-brandTertiary transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-lightCool text-darkCool text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-darkWarm text-sm">{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-deepCharcoal mb-3 line-clamp-2 hover:text-brandPrimary cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-darkCool mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accentTertiary/20 flex items-center justify-center">
                          <FiUser className="w-3.5 h-3.5 text-accentSecondary" />
                        </div>
                        <span className="text-darkCool text-sm">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-darkWarm text-sm">{article.readTime}</span>
                        <button className="text-brandPrimary hover:text-brandSecondary">
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              </div>
          {/* 
            ## Newsletter - signup ##
            <div className="mt-16 p-8 bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 rounded-2xl border border-lightCool">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-brandPrimary mb-4">Never Miss an Update</h3>
                <p className="text-darkCool mb-6">
                  Subscribe to get notified about new articles, research papers, and upcoming series.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-pureWhite border border-lightCool rounded-lg focus:outline-none focus:border-brandSecondary text-deepCharcoal"
                  />
                  <button className="px-6 py-3 bg-accentPrimary text-pureWhite rounded-lg font-semibold hover:bg-accentSecondary transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
           */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Blogs;