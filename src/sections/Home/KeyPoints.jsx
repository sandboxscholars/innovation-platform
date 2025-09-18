// NOTE for Developers:
// - This component renders two types of sections based on the "sections" array.
//   1. Daily Scholar section (type === "daily")
//   2. Regular KeyPoint section (type === "point")
// - Comments have been added in the appropriate places throughout the file.
// - If you need to update or add comments in the future, please follow the existing pattern
//   and place them in the same logical spots (above layout wrappers, data arrays, and key elements).

import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function KeyPoints() {
  // Section data (Daily + KeyPoints)
  const sections = [
    {
      id: "daily", // Special Daily Scholar section
      type: "daily",
      title: "The Daily Scholars",
      subtitle: "STUDENT INNOVATION NETWORK...",
      content1:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      content2:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      content3: "reprehenderit in voluptate velit esse cillum dolore",
      quoteTitle: "A place for innovation",
      quoteSubtitle: "A place to grow indefinitely",
    },
    {
      id: 1,
      type: "point", // Regular KeyPoint
      img_name: "thinking",
      title: "Lorem ipsum dolor sit amet",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Duis aute iru",
    },
    {
      id: 2,
      type: "point",
      img_name: "knowledge",
      title: "Lorem ipsum dolor sit amet",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Duis aute iru",
    },
    {
      id: 3,
      type: "point",
      img_name: "idea",
      title: "Lorem ipsum dolor sit amet",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Duis aute iru",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mb-6">
      {/* Parent grid layout: single column on mobile, two columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {sections.map((item) =>
          item.type === "daily" ? (
            // Daily Scholar Layout
            <div
              key={item.id}
              className="bg-[var(--secondary-background)] border-y-3 border-e-3 border-[var(--border-color)] px-5 rounded-tr-sm rounded-br-sm -mt-30 max-w-[85%] mx-auto"
            >
              {/* Title */}
              <p className="font-playfair-boldItalic text-5xl py-2">
                {item.title}
              </p>

              {/* Subtitle */}
              <p className="font-poppins font-medium text-lg">
                {item.subtitle}
              </p>

              {/* Main content paragraphs */}
              <p className="font-poppins font-medium text-lg my-5">
                {item.content1}
              </p>
              <p className="font-poppins font-medium text-lg mt-5">
                {item.content2}
              </p>
              <p className="font-poppins font-medium text-lg mb-2">
                {item.content3}
              </p>

              {/* Quote block */}
              <ImQuotesLeft className="size-12" />
              <div className="flex mb-5">
                <div>
                  <p className="text-[var(--primary-color)] font-neue-ultraBold md:text-4xl md:leading-8">
                    {item.quoteTitle}
                  </p>
                  <div className="flex mt-1">
                    <p className="font-zawi-bold md:text-lg text-[var(--foreground-color)]/78">
                      {item.quoteSubtitle}
                    </p>
                    <sup>
                      <ImQuotesRight className="size-6 ms-1" />
                    </sup>
                  </div>
                </div>
                {/* Decorative hash symbol */}
                <p className="font-rig-bold md:text-8xl me-3">#</p>
              </div>
            </div>
          ) : (
            // Regular KeyPoint Layout
            <div
              key={item.id}
              className="flex justify-center space-x-8 items-center bg-[var(--primary-color)]/15 rounded-4xl px-6 py-8 max-w-[85%] mx-auto mt-auto"
            >
              {/* KeyPoint icon */}
              <img
                src={`/images/${item.img_name}.png`}
                alt={item.img_name}
                className="w-24 h-24 object-contain"
              />

              {/* KeyPoint text content */}
              <div className="text-[var(--foreground-color)]">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-[17px] mt-1">{item.description}</p>
                <p className="text-[17px] font-semibold mt-3">{item.author}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
