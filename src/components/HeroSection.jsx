import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-lightPeach relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 py-12 md:py-16">

          {/* Text */}
          <div className="w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight mb-3 lg:mb-4 break-words">
                <span className="font-bold">Welcome to </span>
                <span className="text-brandSecondary">The Daily Scholar</span>
              </h1>

              <h3 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 break-words">
                STUDENT INNOVATION NETWORK
              </h3>

              <p className="text-sm sm:text-base lg:text-xl mb-5 break-words hyphens-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Button that wraps instead of overflowing */}
              <button
                className="inline-flex items-center justify-center bg-brandSecondary hover:bg-brandPrimary text-white
                           px-4 py-2 rounded-sm text-sm sm:text-base max-w-full whitespace-normal break-words"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="rounded-md overflow-hidden aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]">
              <img
                src="/images/hero_image.png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
