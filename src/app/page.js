import React from "react";
import { FiTool, FiClock, FiMail, FiAlertCircle, FiHome, FiGithub } from "react-icons/fi";

export default function MaintenancePage({ 
  title = "Under Construction", 
  message = "We're improving your experience",
  showContact = true,
  showProgress = true,
  estimatedCompletion = "Soon"
}) {
  return (
    <main className="font-sans bg-gradient-to-br from-paperWhite via-pureWhite to-lightWarm/50 text-deepCharcoal min-h-screen p-6 lg:p-12 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brandTertiary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accentTertiary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brandPrimary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-brandPrimary/10 rounded-full mb-8">
              <FiTool className="w-5 h-5 text-brandPrimary animate-pulse" />
              <span className="text-brandPrimary font-medium text-sm uppercase tracking-wider">
                Maintenance Mode
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepCharcoal mb-6 leading-tight">
              <span className="block">We're</span>
              <span className="text-brandPrimary relative">
                {title}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-accentTertiary/30 -rotate-1"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-darkCool max-w-2xl mx-auto leading-relaxed">
              {message}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column - Information */}
            <div className="space-y-8">
              {/* Status Card */}
              <div className="bg-pureWhite rounded-2xl border border-lightCool p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brandPrimary/10 flex items-center justify-center">
                    <FiAlertCircle className="w-6 h-6 text-brandPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deepCharcoal">Current Status</h3>
                    <p className="text-darkCool">Updates in progress</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-darkCool">Progress</span>
                    <span className="font-bold text-brandPrimary">75%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-lightCool rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brandPrimary to-brandSecondary rounded-full transition-all duration-1000"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-darkCool">
                    <FiClock className="w-4 h-4" />
                    <span>Estimated completion: {estimatedCompletion}</span>
                  </div>
                </div>
              </div>

              {/* What's Happening */}
              <div className="bg-pureWhite rounded-2xl border border-lightCool p-6 shadow-sm">
                <h3 className="text-xl font-bold text-deepCharcoal mb-4">What We're Improving</h3>
                <ul className="space-y-3">
                  {[
                    "Enhanced user interface and experience",
                    "Performance optimizations",
                    "New feature implementations",
                    "Security updates and patches"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brandTertiary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-brandTertiary"></div>
                      </div>
                      <span className="text-darkCool">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Illustration & Contact */}
            <div className="space-y-8">
              {/* Illustration Container */}
              <div className="bg-gradient-to-br from-brandPrimary/5 via-pureWhite to-brandTertiary/5 rounded-2xl border border-lightCool p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚧</div>
                  <h3 className="text-2xl font-bold text-brandPrimary mb-2">Building Amazing Things</h3>
                  <p className="text-darkCool">
                    Good things take time. We're crafting something special for you.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              {showContact && (
                <div className="bg-gradient-to-br from-brandPrimary to-brandSecondary rounded-2xl p-8 text-pureWhite">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-pureWhite/10 flex items-center justify-center">
                      <FiMail className="w-6 h-6 text-pureWhite" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Need Assistance?</h3>
                      <p className="text-pureWhite/90">We're here to help</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:sandboxscholars.team@gmail.com"
                      className="block p-4 bg-pureWhite/10 rounded-xl hover:bg-pureWhite/20 transition-colors group"
                    >
                      <div className="font-medium mb-1">Email Support</div>
                      <div className="text-sm text-pureWhite/80 group-hover:text-pureWhite">
                        sandboxscholars.team@gmail.com
                      </div>
                    </a>
                    
                    <div className="pt-4 border-t border-pureWhite/20">
                      <p className="text-sm text-pureWhite/90">
                        Sandbox Scholars Team
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-pureWhite rounded-2xl border border-lightCool p-6">
            <h3 className="text-xl font-bold text-deepCharcoal mb-6 text-center">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FiHome, label: "Return Home", action: "/" },
                { icon: FiGithub, label: "View Progress", action: "https://github.com" },
                { icon: FiMail, label: "Contact", action: "mailto:sandboxscholars.team@gmail.com" },
                { icon: FiClock, label: "Check Status", action: "#status" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  className="group p-4 rounded-xl border border-lightCool hover:border-brandTertiary hover:shadow-md transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brandPrimary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-brandPrimary" />
                  </div>
                  <span className="text-sm font-medium text-deepCharcoal group-hover:text-brandPrimary">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 pt-8 border-t border-lightCool">
            <p className="text-darkCool">
              Thank you for your patience and understanding.
            </p>
            <p className="text-sm text-darkCool/70 mt-2">
              © {new Date().getFullYear()} Sandbox Scholars. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}