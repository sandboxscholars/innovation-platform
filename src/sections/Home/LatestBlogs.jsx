import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight, GoSearch } from "react-icons/go";

// Section that highlights recent blog posts
// - Uses BlogCard component to display multiple blogs from blogData.js
// - Each card should have a title, short description, "See More" button and unique background color
// - Displayed after the Hero section for engagement
// - Make it Dynamic and Responsive

function LatestBlogs() {
  const blogPosts = [
    {
      category: "How to series",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      category: "How to series",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      category: "Documentary",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      category: "Finance",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <section className="relative md:py-20 px-8 bg-[var(--background-color)] text-[var(--foreground-color)]">
      {/* Decorative Search Icon */}
      <div className="">
        <div className="">
          <div className="w-40 h-40 border-s-4 border-t-4 border-b-4 border-dashed border-[var(--foreground-color)]/70 rounded-l-full absolute top-[7.3%] right-25"></div>
          <GoSearch className="w-30 h-30 text-[var(--foreground-color)]/70 absolute top-[10%] right-28" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center mb-8">
            <div className="flex-1  max-w-[29.3rem]">
              <h2 className="text-5xl font-bold underline pb-3">Our Blogs</h2>

              <p className="text-[17px] my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
                <span className="underline font-medium">
                  {" "}
                  exercitation ullamco lab
                </span>
              </p>

              <p className="text-lg font-semibold">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolo
              </p>
            </div>

            {/* View All Button */}
            <div className="p-6 rounded-2xl flex items-center justify-between mx-auto">
              <div className="max-w-[300px] bg-[var(--primary-color)]/45 px-8 py-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <Button
                    variant="secondary"
                    size="md"
                    className="bg-[var(--background-color)]/60 font-semibold text-lg"
                  >
                    View All
                  </Button>
                  <GoArrowRight className="w-10 h-10 " />
                </div>
                <p className="text-base font-medium opacity-90 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[var(--primary-color)]/45 rounded-2xl relative "
            >
              {/* Category Badge */}
              <div className="w-full bg-[var(--secondary-background)] rounded-full -top-4 absolute py-3">
                <p className="text-sm text-center font-semibold">
                  "{post.category}"
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[17px] font-semibold font-sans my-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-base opacity-90 mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-4 right-6 cursor-pointer">
                  <GoArrowRight className="w-10 h-10 " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
