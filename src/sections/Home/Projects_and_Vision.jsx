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
    <div className="my-10 min-h-screen bg-[var(--background-color)] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8 mx-auto">
            {/* Main Heading */}
            <div className="space-y-6 text-[var(--foreground-color)]">
              <h1 className="md:text-5xl font-neue-ultraBold leading-13 md:mb-12">
                Our <span className="underline">Projects</span>
                <br />
                and <span className="underline">Vision</span>
              </h1>

              <p className="text-lg max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Specialties Card */}
            <div className="bg-[var(--primary-color)]/17 text-[var(--foreground-color)] max-w-md rounded-lg p-8 relative">
              {/* Specialties heading */}
              <h3 className="absolute top-3 end-3 text-lg px-7 py-2 rounded-sm bg-[var(--primary-color)]/20">
                Specialties
              </h3>

              <div className="grid grid-cols-5 items-center mt-8">
                <p className="font-rig-bold text-8xl m-auto">#</p>
                <ul className="list-disc list-inside marker:text-[15px] space-y-1 text-[17px] col-span-4 mx-auto relative">
                  <li>Lorem ipsum doation</li>
                  <li>ullamco laboris nisi ut aliquip</li>
                  <li>ex ea commodo consequat.</li>
                  <li>ex ea commodo consequat.</li>
                </ul>
                <GoArrowRight className="absolute right-12 top-7/8 -translate-y-1/2 w-10 h-10 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mx-auto text-[var(--foreground-color)]">
            {projects.map(({ id, title, description }) => (
              <div className="grid grid-cols-16 bg-[var(--primary-color)]/35 max-w-md rounded-lg ps-2 pe-6 py-8">
                <p className="col-span-4 font-rig-bold text-8xl m-auto">{id}</p>
                <div className="items-center col-span-12 relative">
                  <h3 className="text-xl font-medium mb-2">{title}</h3>
                  <p className="text-[17px]">
                    {description}
                  </p>
                  <GoArrowRight className="absolute right-0 top-auto -translate-y-1/2 w-10 h-10 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
