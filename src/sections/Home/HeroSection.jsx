import React from "react";

export default function HeroSection() {
  return (
    <div className="mb-40 md:mb-10 max-w-screen-xl mx-auto flex justify-center">
      {/* বাম দিক */}
      <div className="flex-1">
        <div className="flex items-start justify-center md:justify-between md:mx-4">
          <img className="size-30 md:size-50 md:ms-15" src="/images/lights.png" alt="Lights" />

          {/* টেক্সট end থেকে align হবে */}
          <div className="text-[var(--foreground-color)] md:text-4xl text-end mt-15">
            <p className="font-semibold">Experiment.</p>
            <p className="font-helvetica">Lead.</p>
            <p className="font-agrandir">Create.</p>
            <u className="font-seasons-bold">Together.</u>
          </div>
        </div>
      </div>

      {/* ডান দিক */}
      <div className="flex-1 flex md:max-w-[45%]">
        <img
          src="/images/ribbon.png"
          alt="Ribbon design with diamond shape"
          className="max-w-fit max-h-screen"
        />
        <div className="mt-5 mx-5">
          <img className="" src="/images/banner-boys.svg" alt="Hero" />
          <p className="text-[var(--foreground-color)] md:text-[17px] md:mt-4">
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
