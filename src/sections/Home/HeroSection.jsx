import React from "react";

export default function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto md:px-4 pt-6 md:py-12 flex flex-col md:flex-row items-center md:items-start justify-between md:gap-6">
      
      {/* Left Side - Headings with lights */}
      <div className="flex-1 w-full flex flex-col items-center md:items-start">
        <div className="sm:flex sm:flex-col md:flex-row md:items-start md:justify-between w-full gap-4 md:gap-7 lg:gap-10">
          
          {/* Lights */}
          <img
            src="/images/lights.svg"
            alt="Lights"
            className="w-32 md:w-56 -mt-4 md:-mt-13 hidden md:block"
          />

          {/* Headings */}
          <div className="flex gap-x-2">
            <div className="md:hidden w-[30px] border-y-2 border-r-2 border-dashed">

            </div>
            <div className="text-[var(--foreground-color)] md:text-right md:space-y-1 text-2xl sm:text-3xl lg:text-4xl py-[10px] md:py-0">
            <p className="font-semibold">Experiment.</p>
            <p className="font-helvetica">Lead.</p>
            <p className="font-agrandir">Create.</p>
            <u className="font-seasons-bold">Together.</u>
          </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image + Description */}
      <div className="flex-1 w-full hidden md:flex flex-col items-center md:items-start">
        <div className="relative w-full flex flex-col md:flex-row md:items-start">
          
          {/* Ribbon*/}
          <img
            src="/images/ribbon.svg"
            alt="Ribbon design"
            className="md:w-[60px] lg:w-[70px] md:mr-6 md:-mt-25"
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
