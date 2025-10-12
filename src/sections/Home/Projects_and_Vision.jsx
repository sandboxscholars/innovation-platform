import { ArrowRight } from "lucide-react";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Projects_and_Vision() {
  const projects = [
    {
      id: 1,
      title: "Exploring creativity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    },
    {
      id: 2,
      title: "Exploring creativity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    },
    {
      id: 3,
      title: "Exploring creativity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    },
  ];
  return (
    <div className="md:py-20 min-h-screen mx-5 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8 mx-auto">
            {/* Main Heading */}
            <div className="space-y-6 text-[var(--foreground-color)]">
              <h1 className="text-[22px] sm:text-2xl md:text-5xl font-neue-ultraBold md:leading-13 mb-4 md:mb-12 text-center sm:text-left">
                Our <span className="underline">Projects</span>
                <br className="hidden md:block"/>
                <span className="md:hidden"> </span>and <span className="underline">Vision</span>
              </h1>

              <p className="md:text-lg max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Specialties Card */}
            <div className="bg-[var(--primary-color)]/17 text-[var(--foreground-color)] max-w-md rounded-lg p-5 md:p-8 relative">
              {/* Specialties heading */}
              <h3 className="absolute top-3 end-3 md:text-lg px-4 sm:px-7 py-2 rounded-sm bg-[var(--primary-color)]/20">
                Specialties
              </h3>

              <div className="grid grid-cols-5 items-center mt-8">
                <p className="font-rig-bold text-8xl m-auto hidden md:block">#</p>
                <ul className="list-disc list-inside marker:text-[15px] space-y-1 text-[17px] col-span-4 sm:mx-auto relative">
                  <li>Lorem ipsum doation</li>
                  <li>ullamco laboris nisi ut aliquip</li>
                  <li>ex ea commodo consequat.</li>
                  <li>ex ea commodo consequat.</li>
                </ul>
                <GoArrowRight className="absolute right-4 -bottom-2 -translate-y-1/2 w-10 h-10 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mx-auto text-[var(--foreground-color)]">
            {projects.map(({ id, title, description }) => (
              <div className="sm:grid sm:grid-cols-16 bg-[var(--primary-color)]/35 max-w-md rounded-lg sm:ps-2 sm:pe-6 p-5 sm:py-8 relative">
                <p className="sm:col-span-4 font-rig-bold text-8xl m-auto text-center sm:tex">{id}</p>
                <div className="items-center sm:col-span-12">
                  <h3 className="text-lg md:text-xl font-medium mb-2">{title}</h3>
                  <p className="md:text-[17px]">
                    {description}
                  </p>
                  <GoArrowRight className="absolute right-4 -bottom-3 sm:-bottom-2 -translate-y-1/2 w-10 h-10 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
