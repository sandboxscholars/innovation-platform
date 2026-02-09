import React from "react";
import { FiTarget, FiBookOpen, FiUsers, FiZap } from "react-icons/fi";

export default function KeyPoints() {
  // Section data - Now 4 cards in 2x2 grid
  const sections = [
    {
      id: 1,
      type: "point",
      img_name: "thinking",
      icon: FiTarget,
      title: "Critical Problem Solving",
      description: "Cultivating complex challenges through innovation and free thinking is what we strive for. Multiple angles and scenarios are considered when systematic approaches are taken.",
      author: "Student Innovation Team",
    },
    {
      id: 2,
      type: "point",
      img_name: "knowledge",
      icon: FiBookOpen,
      title: "Knowledge Application",
      description: "Bridging theoretical learning with practical implementation. Our programs emphasize applying classroom knowledge to real-world scenarios.",
      author: "Academic Mentors",
    },
    {
      id: 3,
      type: "point",
      img_name: "idea",
      icon: FiZap,
      title: "Creative Ideation",
      description: "Ideas are allowed to flow openly in our free environment. Encouraging out of the box thinking to develop innovative concepts into viable projects.",
      author: "Creative Directors",
    },
    {
      id: 4,
      type: "point",
      img_name: "engagement", // Assuming you have this image
      img: "/workspaces/innovation-platform/dist/images/engagement.svg",
      icon: FiUsers,
      title: "Collaborative Innovation",
      description: "Teamwork is diversity. Our mission will always be about connecting students from various disciplines to create more well-rounded and impactful projects.",
      author: "Project Coordinators",
    },
  ];

  return ( 
  <section className="bg-paperWhite pb-4">
    <div className="max-w-7xl mx-auto mb-12 md:mb-16 px-4 md:px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-4">
          <FiTarget className="w-4 h-4 text-brandPrimary" />
          <span className="text-brandPrimary font-medium text-sm">Core Principles</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-deepCharcoal mb-4">
          How We <span className="text-brandPrimary">Innovate</span>
        </h2>
        
        <p className="text-lg text-darkCool max-w-2xl mx-auto">
          Our approach combines structured methodology with creative freedom
        </p>
      </div>

      {/* KeyPoint Cards Grid - Adjusted for 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {sections.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 md:gap-6 items-start bg-pureWhite rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm border border-lightCool hover:shadow-md hover:border-brandTertiary transition-all duration-300"
          >
            {/* KeyPoint icon - Adjusted size */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-brandPrimary/10 to-brandSecondary/10 flex items-center justify-center">
                <img
                  src={`/images/${item.img_name}.svg`}
                  alt={item.img_name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  onError={(e) => {
                    // Fallback to icon if image doesn't exist
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    parent.innerHTML = `<${item.icon} class="w-6 h-6 md:w-8 md:h-8 text-brandPrimary" />`;
                  }}
                />
              </div>
            </div>

            {/* KeyPoint text content - Compact layout */}
            <div className="flex-1 min-w-0"> {/* min-w-0 prevents overflow */}
              <h3 className="text-lg md:text-xl font-bold text-brandPrimary mb-2 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-darkCool text-sm md:text-[15px] leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="pt-3 border-t border-lightCool">
                <p className="text-sm md:text-[15px] font-semibold text-brandSecondary">
                  {item.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats or Additional Info - Compact - REMOVED*/}
      

      {/* Optional: CTA Button - REMOVED*/}
      
    </div>
  </section>
  );
}