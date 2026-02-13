
import React, { useState } from "react";
import { FiArrowRight, FiZap, FiUsers, FiTarget, FiTrendingUp, FiBook, FiTool, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);
  
  const motivationCards = [
    { 
      word: "Experiment.", 
      color: "brandPrimary",
      icon: FiZap,
      bgColor: "bg-brandPrimary/10",
      textColor: "text-brandPrimary",
      borderColor: "border-brandPrimary"
    },
    { 
      word: "Lead.", 
      color: "brandSecondary",
      icon: FiTarget,
      bgColor: "bg-brandSecondary/10",
      textColor: "text-brandSecondary",
      borderColor: "border-brandSecondary"
    },
    { 
      word: "Create.", 
      color: "accentPrimary",
      icon: FiUsers,
      bgColor: "bg-accentPrimary/10",
      textColor: "text-accentPrimary",
      borderColor: "border-accentPrimary"
    },
    { 
      word: "Together.", 
      color: "accentSecondary",
      icon: FiTrendingUp,
      bgColor: "bg-accentSecondary/10",
      textColor: "text-accentSecondary",
      borderColor: "border-accentSecondary"
    },
  ];

  return (
    <div className="min-h-screen bg-paperWhite overflow-hidden">
      {/* Simple background elements - remove if causing issues */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-8">
              <FiZap className="w-4 h-4 text-blue-700" />
              <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
                Student Innovation Network
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
     <div className="mb-4">
  <h1 className="text-4xl md:text-5xl font-playfair italic font-bold text-blue-900">
    Sandbox
  </h1>
  <h2 className="text-3xl md:text-4xl font-agrandir font-bold text-cyan-700 -mt-2 ml-2">
    Scholars
  </h2>
  <div className="h-0.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 mt-2 rounded-full"></div>
</div>
              <span className="block mt-4">Where Students</span>
              <span className="relative">
                <span className="text-blue-700">Innovate</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-200 -rotate-1"></span>
              </span>
              <span className="block">Without Limits</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              A collaborative ecosystem where creativity meets technology, 
              empowering students to build solutions that shape tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/join-us" className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                  Join Our Community
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                Explore Projects
                <FiTarget className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              {[
                { value: "20+", label: "Active Members", icon: FiUsers },
                { value: "10+", label: "Projects", icon: FiTarget },
                { value: "10+", label: "Innovations", icon: FiZap },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Motivation Cards */}
          <div className="relative max-w-4xl mx-auto">
  <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-100/50 border border-blue-100/50">
    
    {/* Minimal Header */}
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-4">
          <FiTarget className="w-4 h-4 text-brandPrimary" />
          <span className="text-brandPrimary font-medium text-sm">Our Motivation</span>
        </div>
    </div>

    {/* Four Cards with Alternating Rotations */}
    <div className="relative">
      <div className="grid grid-cols-2 gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-2">
        
        {/* CREATE Card (-1° rotation) */}
        <div
          onClick={() => setActiveCard(0)}
          className="relative transition-all duration-500 ease-out cursor-pointer transform -rotate-1 hover:-rotate-3"
          style={{
            transform: activeCard === 0 ? 'scale(1.05) rotate(-1deg)' : 'rotate(-1deg)'
          }}
        >
          <div className={`relative p-5 rounded-2xl border transition-all duration-300
            ${activeCard === 0
              ? 'border-blue-400 bg-white shadow-xl shadow-blue-400/20'
              : 'border-gray-200/80 bg-white/90 backdrop-blur-sm hover:border-blue-300/50 hover:shadow-lg'
            }`}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border
              ${activeCard === 0
                ? 'bg-gradient-to-b from-blue-100 to-white border-white'
                : 'bg-white border-gray-200/50 hover:border-blue-300'
              }`}
            >
              <FiZap className={`w-6 h-6 transition-all duration-300
                ${activeCard === 0 ? 'text-blue-700' : 'text-gray-700 hover:text-blue-600'}
              `} />
            </div>

            <div className="pt-8 text-center">
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300
                ${activeCard === 0 ? 'text-blue-700' : 'text-gray-900'}
              `}>
                Experiment
              </h3>
              
              <p className={`text-sm transition-all duration-500
                ${activeCard === 0
                  ? 'max-h-20 opacity-100 text-gray-600 mt-2'
                  : 'max-h-0 opacity-0'
                }`}
              >
                Break the rules, build your own
              </p>
            </div>
          </div>
        </div>

        {/* LEARN Card (+1° rotation) */}
        <div
          onClick={() => setActiveCard(1)}
          className="relative transition-all duration-500 ease-out cursor-pointer transform rotate-1 hover:rotate-3"
          style={{
            transform: activeCard === 1 ? 'scale(1.05) rotate(1deg)' : 'rotate(1deg)'
          }}
        >
          <div className={`relative p-5 rounded-2xl border transition-all duration-300
            ${activeCard === 1
              ? 'border-emerald-400 bg-white shadow-xl shadow-emerald-400/20'
              : 'border-gray-200/80 bg-white/90 backdrop-blur-sm hover:border-emerald-300/50 hover:shadow-lg'
            }`}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border
              ${activeCard === 1
                ? 'bg-gradient-to-b from-emerald-100 to-white border-white'
                : 'bg-white border-gray-200/50 hover:border-emerald-300'
              }`}
            >
              <FiBook className={`w-6 h-6 transition-all duration-300
                ${activeCard === 1 ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-600'}
              `} />
            </div>

            <div className="pt-8 text-center">
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300
                ${activeCard === 1 ? 'text-emerald-700' : 'text-gray-900'}
              `}>
                Lead
              </h3>
              
              <p className={`text-sm transition-all duration-500
                ${activeCard === 1
                  ? 'max-h-20 opacity-100 text-gray-600 mt-2'
                  : 'max-h-0 opacity-0'
                }`}
              >
                Step up, stand out
              </p>
            </div>
          </div>
        </div>

        {/* BUILD Card (-1° rotation) */}
        <div
          onClick={() => setActiveCard(2)}
          className="relative transition-all duration-500 ease-out cursor-pointer transform -rotate-1 hover:-rotate-3"
          style={{
            transform: activeCard === 2 ? 'scale(1.05) rotate(-1deg)' : 'rotate(-1deg)'
          }}
        >
          <div className={`relative p-5 rounded-2xl border transition-all duration-300
            ${activeCard === 2
              ? 'border-amber-400 bg-white shadow-xl shadow-amber-400/20'
              : 'border-gray-200/80 bg-white/90 backdrop-blur-sm hover:border-amber-300/50 hover:shadow-lg'
            }`}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border
              ${activeCard === 2
                ? 'bg-gradient-to-b from-amber-100 to-white border-white'
                : 'bg-white border-gray-200/50 hover:border-amber-300'
              }`}
            >
              <FiTool className={`w-6 h-6 transition-all duration-300
                ${activeCard === 2 ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}
              `} />
            </div>

            <div className="pt-8 text-center">
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300
                ${activeCard === 2 ? 'text-amber-700' : 'text-gray-900'}
              `}>
                Create
              </h3>
              
              <p className={`text-sm transition-all duration-500
                ${activeCard === 2
                  ? 'max-h-20 opacity-100 text-gray-600 mt-2'
                  : 'max-h-0 opacity-0'
                }`}
              >
                Ideas into reality
              </p>
            </div>
          </div>
        </div>

        {/* SHARE Card (+1° rotation) */}
        <div
          onClick={() => setActiveCard(3)}
          className="relative transition-all duration-500 ease-out cursor-pointer transform rotate-1 hover:rotate-3"
          style={{
            transform: activeCard === 3 ? 'scale(1.05) rotate(1deg)' : 'rotate(1deg)'
          }}
        >
          <div className={`relative p-5 rounded-2xl border transition-all duration-300
            ${activeCard === 3
              ? 'border-violet-400 bg-white shadow-xl shadow-violet-400/20'
              : 'border-gray-200/80 bg-white/90 backdrop-blur-sm hover:border-violet-300/50 hover:shadow-lg'
            }`}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border
              ${activeCard === 3
                ? 'bg-gradient-to-b from-violet-100 to-white border-white'
                : 'bg-white border-gray-200/50 hover:border-violet-300'
              }`}
            >
              <FiShare className={`w-6 h-6 transition-all duration-300
                ${activeCard === 3 ? 'text-violet-700' : 'text-gray-700 hover:text-violet-600'}
              `} />
            </div>

            <div className="pt-8 text-center">
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300
                ${activeCard === 3 ? 'text-violet-700' : 'text-gray-900'}
              `}>
                Together!!
              </h3>
              
              <p className={`text-sm transition-all duration-500
                ${activeCard === 3
                  ? 'max-h-20 opacity-100 text-gray-600 mt-2'
                  : 'max-h-0 opacity-0'
                }`}
              >
               We rise higher
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setActiveCard(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
              ${index % 2 === 0 ? 'hover:-rotate-12' : 'hover:rotate-12'}
              ${activeCard === index
                ? index === 0 ? 'bg-blue-500 scale-125' :
                  index === 1 ? 'bg-emerald-500 scale-125' :
                  index === 2 ? 'bg-amber-500 scale-125' :
                  'bg-violet-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>

    {/* Community Highlight */}
    <div className={`mt-12 transition-all duration-700 overflow-hidden transform
      ${activeCard !== null
        ? 'max-h-35 opacity-100 -rotate-1'
        : 'max-h-0 opacity-0 rotate-1'
      }`}
    >
     
    </div>

    {/* CTA REMOVED */}
   
  </div>

  {/* Floating Elements */}
  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30 blur-xl animate-float rotate-12"></div>
  <div className="absolute -bottom-6 -right-6 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-xl animate-float -rotate-12" style={{ animationDelay: '1s' }}></div>
</div>
        </div>
      </section>
    </div>
  );
}