import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight, GoSearch } from "react-icons/go";
import { FiCalendar, FiUser, FiClock, FiTag } from "react-icons/fi";
import { Link } from "react-router-dom";

function LatestBlogs() {
  const blogPosts = [
    {
      category: "Career Exploration",
      title: "Pursuing Non-Traditional Careers",
      description: "A realistic look at the challenges, risks, and growth opportunities tied to unconventional career paths.",
      readTime: "5 min",
      author: "Team Theta",
      date: "Feb 15, 2026",
      color: "brandPrimary"
    },
    {
      category: "Education Economics",
      title: "The Rising Costs of Student Materials",
      description: "A data-driven look at how increasing prices of books, supplies, and digital tools affect access to education and student performance.",
      readTime: "7 min",
      author: "Project Iota",
      date: "Feb 10, 2026",
      color: "brandSecondary"
    },
    {
      category: "Student Stories",
      title: "Innovation Journey: Overcoming Academic Challenges",
      description: "Inspiring stories from students who balanced coursework with impactful projects, sharing strategies for success and growth.",
      readTime: "4 min",
      author: "Student Contributors",
      date: "Feb 5, 2024",
      color: "accentPrimary"
    },
    {
      category: "Academic & Career Guidance",
      title: "Global Pathways After O/A Levels",
      description: "A broad roadmap outlining university and career opportunities across multiple countries, expanding options beyond conventional destinations.",
      readTime: "16 min",
      author: "Team Beta",
      date: "July 28, 2025",
      color: "accentSecondary"
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-8 bg-paperWhite">
      {/* Decorative Search Icon - Enhanced - REMOVED */}
     
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Enhanced */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-6">
                <FiTag className="w-4 h-4 text-brandPrimary" />
                <span className="text-brandPrimary font-medium text-sm">Latest Insights</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-deepCharcoal mb-6">
                Our <span className="text-brandPrimary">Blogs</span>
              </h2>

              <p className="text-lg text-darkCool leading-relaxed mb-4 max-w-3xl">
                Explore thought-provoking articles, research findings, and student perspectives 
                from our innovation community. Discover practical insights and inspirational 
                stories that fuel creative thinking and impactful action.
              </p>

              <p className="text-lg font-semibold text-brandPrimary">
                Join the conversation and contribute your unique perspective to our growing knowledge base.
              </p>
            </div>

            {/* View All Button - Enhanced - REMOVED */}
            
          </div>
        </div>

        {/* Blog Cards Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-pureWhite rounded-2xl border border-lightCool overflow-hidden hover:shadow-xl hover:border-brandTertiary transition-all duration-300"
            >
              {/* Category Badge - Enhanced */}
              <div className={`relative h-2 bg-gradient-to-r from-${post.color} to-${post.color}/70`}></div>
              
              <div className="p-6">
                {/* Category */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-${post.color}/10 text-${post.color} text-xs font-semibold rounded-full`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-deepCharcoal mb-3 leading-tight group-hover:text-brandPrimary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-darkCool text-sm mb-6 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-darkCool mb-6">
                  <div className="flex items-center gap-1">
                    <FiUser className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>

                {/* Read More Button */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-full">
            <div className="bg-paperWhite px-8 py-4 rounded-full">
              <div className="flex items-center gap-4">
                <span className="text-darkCool font-medium">
                  Want to contribute your own article?
                </span>
                <Link to="/submission" className="inline-flex items-center gap-2 px-6 py-2 bg-brandPrimary text-pureWhite rounded-full font-semibold hover:bg-brandSecondary transition-colors">
                  Submit Article
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 p-6 bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 rounded-2xl border border-lightCool">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "20+", label: "Articles Published" },
              { value: "10+", label: "Student Authors" },
              { value: "Students", label: "Primary Focus" },
              { value: "5+", label: "Categories" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl font-bold text-brandPrimary mb-1">{stat.value}</div>
                <div className="text-sm text-darkCool">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;