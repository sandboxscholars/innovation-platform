import React, { useState } from "react";
import { FiArrowRight, FiZap, FiUsers, FiTarget, FiTrendingUp } from "react-icons/fi";

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
              <span className="text-blue-700 text-4xl md:text-5xl italic">"Sandbox Scholars"</span>
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
              <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                Join Our Community
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                Explore Projects
                <FiTarget className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              {[
                { value: "200+", label: "Active Members", icon: FiUsers },
                { value: "50+", label: "Projects", icon: FiTarget },
                { value: "30+", label: "Innovations", icon: FiZap },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Motivation Cards */}
          <div className="relative">
            {/* Container */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              {/* Section Label */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
                  <span className="text-yellow-800 text-sm font-medium uppercase tracking-wider">
                    Our Motivation
                  </span>
                </div>
              </div>

              {/* Grid of Motivation Cards */}
              <div className="grid grid-cols-2 gap-4">
                {motivationCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center justify-center group ${
                      activeCard === index
                        ? `${card.borderColor} ${card.bgColor} shadow-sm`
                        : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                      activeCard === index 
                        ? card.bgColor
                        : 'bg-gray-100 group-hover:bg-blue-50'
                    }`}>
                      <card.icon className={`w-5 h-5 transition-all duration-300 ${
                        activeCard === index 
                          ? card.textColor
                          : 'text-gray-600 group-hover:text-blue-600'
                      }`} />
                    </div>

                    {/* Word */}
                    <span className={`text-lg font-bold transition-all duration-300 ${
                      activeCard === index 
                        ? card.textColor
                        : 'text-gray-900 group-hover:text-blue-700'
                    }`}>
                      {card.word}
                    </span>

                    {/* Active Indicator */}
                    {activeCard === index && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className={`w-6 h-1 ${card.bgColor} rounded-full`}></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Visual Connection Line */}
              <div className="relative mt-8 mb-6">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 transform -translate-y-1/2 z-0"></div>
                <div className="relative flex justify-between z-10">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeCard === index
                          ? motivationCards[index].bgColor
                          : 'bg-gray-300'
                      }`}
                      onClick={() => setActiveCard(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Sandbox Scholars Visual Element */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="inline-block p-3 rounded-full bg-blue-100 mb-3">
                    <FiUsers className="w-6 h-6 text-blue-700" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Sandbox Scholars
                  </h4>
                  <p className="text-sm text-gray-600">
                    A community of innovators pushing boundaries
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-yellow-200 opacity-50"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-blue-200 opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
}