import React from "react";

export default function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-between md:gap-6">
      
      {/* Left Side - Headings with lights */}
      <div className="flex-1 w-full flex flex-col items-center md:items-start">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-6 md:gap-10">
          
          {/* Lights */}
          <img
            src="/images/lights.svg"
            alt="Lights"
            className="w-32 md:w-56 -mt-4 md:-mt-13"
          />

          {/* Headings */}
          <div className="text-[var(--foreground-color)] text-center md:text-right md:space-y-1">
            <p className="font-semibold text-2xl md:text-4xl">Experiment.</p>
            <p className="font-helvetica text-2xl md:text-4xl">Lead.</p>
            <p className="font-agrandir text-2xl md:text-4xl">Create.</p>
            <u className="font-seasons-bold text-2xl md:text-4xl">Together.</u>
          </div>
        </div>
      </div>

      {/* Right Side - Image + Description */}
      <div className="flex-1 w-full flex flex-col items-center md:items-start">
        <div className="relative w-full flex flex-col sm:flex-row sm:items-start">
          
          {/* Ribbon*/}
          <img
            src="/images/ribbon.svg"
            alt="Ribbon design"
            className="md:w-18 md:mr-6 md:-mt-25"
          />

          {/* Image + Description */}
          <div className="flex-1">
            <img
              src="/images/banner-boys.svg"
              alt="Hero"
              className="md:w-[90%] h-auto mx-auto"
            />
            <p className="text-[var(--foreground-color)] text-base md:text-[17px] mt-4 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia, error quibusdam harum fuga nobis nam sit quis fugit unde quos, dolores illo perspiciatis ad expedita! Nulla, sunt. Tenetur porro aspernatur modi cumque amet quis eos sunt, animi ratione nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
