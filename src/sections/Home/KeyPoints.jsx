import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function KeyPoints() {
  const sections = [
    {
      id: "daily",
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
      type: "point",
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
    <div className="max-w-screen-xl mx-auto">
      {/* একসাথে Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mx-[5%] items-start">
        {sections.map((item) =>
          item.type === "daily" ? (
            // Daily Scholar Layout
            <div
              key={item.id}
              className="bg-[var(--secondary-background)] border-y-3 border-e-3 border-[var(--border-color)] px-5 rounded-tr-sm rounded-br-sm -mt-30 max-w-[85%]"
            >
              <p className="font-playfair-boldItalic text-5xl py-2">
                {item.title}
              </p>
              <p className="font-poppins font-medium text-lg">
                {item.subtitle}
              </p>
              <p className="font-poppins font-medium text-lg my-5">
                {item.content1}
              </p>
              <p className="font-poppins font-medium text-lg mt-5">
                {item.content2}
              </p>
              <p className="font-poppins font-medium text-lg mb-2">
                {item.content3}
              </p>
              <ImQuotesLeft className="size-12" />
              <div className="flex mb-5">
                <div>
                  <p className="text-[var(--primary-color)] font-neue-ultraBold lg:text-4xl lg:leading-8">
                    {item.quoteTitle}
                  </p>
                  <div className="flex mt-1">
                    <p className="font-zawi-bold lg:text-lg text-[var(--foreground-color)]/78">
                      {item.quoteSubtitle}
                    </p>
                    <sup>
                      <ImQuotesRight className="size-6 ms-1" />
                    </sup>
                  </div>
                </div>
                <p className="font-rig-bold lg:text-8xl me-3">#</p>
              </div>
            </div>
          ) : (
            // KeyPoint Layout
            <div
              key={item.id}
              className="flex justify-center space-x-8 items-center bg-[var(--primary-color)]/20 rounded-4xl px-6 py-8 max-w-[90%] mt-auto"
            >
              <img
                src={`/images/${item.img_name}.png`}
                alt={item.img_name}
                className="w-24 h-24 object-contain"
              />
              <div className="font-dm text-[var(--foreground-color)]">
                <p className="font-semibold text-base">{item.title}</p>
                <p className="text-md mt-1">{item.description}</p>
                <p className="text-md mt-3">{item.author}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
