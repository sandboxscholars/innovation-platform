import React from "react";

export default function HeroSection() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center">
      {/* বাম দিক */}
      <div className="flex-1">
        <div className="flex items-start justify-between lg:mx-4">
          <img className="size-50 lg:ms-15" src="/images/lights.png" alt="Lights" />

          {/* টেক্সট end থেকে align হবে */}
          <div className="text-[var(--foreground-color)] lg:text-4xl text-end lg:mt-15">
            <p className="font-dm font-semibold">Experiment.</p>
            <p className="font-helvetica">Lead.</p>
            <p className="font-agrandir">Create.</p>
            <u className="font-seasons-bold">Together.</u>
          </div>
        </div>
      </div>

      {/* ডান দিক */}
      <div className="flex-1 flex lg:max-w-[45%]">
        <img
          src="/images/ribbon.png"
          alt="Ribbon design with diamond shape"
          className="max-w-fit max-h-screen"
        />
        <div className="lg:mt-5 lg:mx-5">
          <img className="" src="/images/hero_image.png" alt="Hero" />
          <p className="font-dm text-[var(--foreground-color)] lg:text-[17px] lg:mt-4">
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
