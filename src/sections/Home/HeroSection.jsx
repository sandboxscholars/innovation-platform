import React from "react";
import { FiArrowRight, FiZap, FiUsers, FiTarget } from "react-icons/fi";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-paperWhite overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandTertiary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentTertiary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brandPrimary/5 rounded-full blur-2xl"></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-8">
              <FiZap className="w-4 h-4 text-brandPrimary animate-pulse" />
              <span className="text-brandPrimary font-medium text-sm uppercase tracking-wider">
                Student Innovation Network
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-4xl font-bold text-deepCharcoal mb-6 leading-tight">
              
              <span className="text-brandPrimary text-5xl "><i>"Sandbox Scholars"</i></span>
        
              <span className="block">Where Students</span>
              <span className="relative">
                <span className="text-brandPrimary">Innovate</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-accentTertiary/30 -rotate-1"></span>
              </span>
              <span className="block">Without Limits</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-darkCool mb-10 leading-relaxed max-w-xl">
              A collaborative ecosystem where creativity meets technology, 
              empowering students to build solutions that shape tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brandPrimary text-pureWhite rounded-xl font-semibold hover:bg-brandSecondary hover:shadow-xl transition-all duration-300">
                Join Our Community
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-pureWhite border-2 border-lightCool text-deepCharcoal rounded-xl font-semibold hover:border-brandTertiary hover:shadow-lg transition-all duration-300">
                Explore Projects
                <FiTarget className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-lightCool">
              {[
                { value: "200+", label: "Active Members", icon: FiUsers },
                { value: "50+", label: "Projects", icon: FiTarget },
                { value: "30+", label: "Innovations", icon: FiZap },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brandPrimary mb-1">{stat.value}</div>
                  <div className="text-sm text-darkCool">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
         
        </div>

        
      </section>
    </div>
  );
}