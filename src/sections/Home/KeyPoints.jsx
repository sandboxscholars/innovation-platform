// NOTE for Developers:
// - This component renders two types of sections based on the "sections" array.
//   1. sandbox Scholar section (type === "sandbox")
//   2. Regular KeyPoint section (type === "point")
// - Comments have been added in the appropriate places throughout the file.
// - If you need to update or add comments in the future, please follow the existing pattern
//   and place them in the same logical spots (above layout wrappers, data arrays, and key elements).

import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function KeyPoints() {
  // Section data (sandbox + KeyPoints)
  const sections = [
    {
      id: "sandbox", // Special sandbox Scholar section
      type: "sandbox",
      title: "Sandbox Scholars",
      subtitle: "Student Innovation Network...",
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
    <div className="max-w-screen-xl mx-auto md:mb-6">
      {/* Parent grid layout: single column on mobile, two columns on desktop */}
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-10 lg:gap-20 md:mx-4 lg:mx-auto items-start">
        {sections.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "sandbox" ? (
              // sandbox Scholar Layout
              <div className="bg-[var(--secondary-background)] border-[2px] md:border-y-3 md:border-s-0 md:border-e-3 border-[var(--border-color)] px-3 md:px-5 md:rounded-tr-sm md:rounded-br-sm md:-mt-[20%] md:max-w-[95%] mx-[29px] md:mx-auto">
                {/* Title */}
                <p className="font-playfair-boldItalic text-3xl sm:text-4xl lg:text-5xl pb-1 py-2">
                  {item.title}
                </p>

                {/* Subtitle */}
                <p className="font-poppins font-medium text-base leading-5 md:text-lg uppercase">
                  {item.subtitle}
                </p>

                {/* Main content paragraphs */}
                <p className="font-poppins font-medium md:text-lg my-5">
                  {item.content1}
                </p>
                <p className="font-poppins font-medium md:text-lg mt-5">
                  {item.content2}
                </p>
                <p className="font-poppins font-medium text-lg mb-2">
                  {item.content3}
                </p>

                {/* Quote block */}
                <ImQuotesLeft className="size-6 md:size-12" />
                <div className="sm:flex md:justify-evenly gap-x-[10%] md:gap-x-0 mb-5">
                  <div className="space-y-2 md:space-y-0">
                    <p className="text-[var(--primary-color)] font-neue-ultraBold text-2xl sm:text-3xl lg:text-4xl leading-[19px] md:leading-8">
                      {item.quoteTitle}
                    </p>
                    <div className="flex mt-1">
                      <p className="font-zawi-bold uppercase sm:text-lg text-[var(--foreground-color)]/78">
                        {item.quoteSubtitle}
                      </p>
                      <sup className="hidden lg:block">
                        <ImQuotesRight className="md:size-6 ms-1" />
                      </sup>
                    </div>
                  </div>
                  {/* Decorative hash symbol */}
                  <p className="font-rig-bold sm:text-7xl lg:text-8xl me-3 hidden sm:block">
                    #
                  </p>
                </div>
              </div>
            ) : (
              // Regular KeyPoint Layout
              <div className="sm:flex sm:justify-center sm:space-x-6 sm:items-center md:block lg:flex lg:justify-center lg:space-x-6 lg:items-center bg-[var(--primary-color)]/15 rounded-4xl p-6 sm:mx-20 md:mx-auto md:py-8 max-w-[95%] mx-auto mt-auto">
                {/* KeyPoint icon */}
                <img
                  src={`/images/${item.img_name}.svg`}
                  alt={item.img_name}
                  className="w-24 object-contain mx-auto mb-2 lg:mb-0 lg:mr-4"
                />

                {/* KeyPoint text content */}
                <div className="text-[var(--foreground-color)]">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="md:text-[17px] mt-1">{item.description}</p>
                  <p className="md:text-[17px] font-medium mt-3">
                    {item.author}
                  </p>
                </div>
              </div>
            )}
            {item.type === "sandbox" && (
              <p className="md:hidden text-[var(--foreground-color)] md:text-[17px] text-justify px-4 sm:px-22 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, mollitia, error quibusdam harum fuga nobis nam sit
                quis fugit unde quos, dolores illo perspiciatis ad expedita!
                Nulla, sunt. Tenetur porro aspernatur modi cumque amet quis eos
                sunt, animi ratione nulla.
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
