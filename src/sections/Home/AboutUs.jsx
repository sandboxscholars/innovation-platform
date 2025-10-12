import React from "react";

function AboutUs() {
  return (
    <section className="pt-6 md:my-10 text-[var(--foreground-color)] border-t-2 border-dashed sm:border-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-6 sm:gap-y-16 items-center">
          {/* About Us Section */}
          <div className="sm:grid sm:grid-cols-10 items-center">
            {/* Text */}
            <div className="sm:space-y-6 col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4 underline">
                About us!
              </h2>

              <div className="sm:space-y-4 text-[var(--foreground-color)]/80 sm:text-lg sm:leading-relaxed">
                <p>
                  Our initiative empowers students worldwide to innovate,
                  collaborate, and lead change. We are a student-driven
                  initiative dedicated to creativity and research.
                </p>

                <p>
                  Our team creates{" "}
                  <span className="font-medium sm:font-semibold">
                    engaging articles
                  </span>
                  , develops{" "}
                  <span className="font-medium sm:font-semibold">
                    open-source software
                  </span>
                  , conducts interviews, and covers{" "}
                  <span className="font-medium sm:font-semibold">
                    thought-provoking topics
                  </span>
                  .
                </p>

                <p className="hidden sm:block">
                  Our focus is on building meaningful projects and providing
                  valuable experiences for our members as we grow.
                </p>
              </div>
            </div>

            {/* Half Circle (Right Side) */}
            <div className="w-[120px] h-52 bg-[var(--primary-color)]/60 rounded-l-full col-span-3 ms-auto hidden md:block"></div>
          </div>

          {/* Why Join Us Section */}
          <div className="sm:grid sm:grid-cols-10 items-center">
            {/* Half Circle (Left Side) */}
            <div className="w-[120px] h-52 bg-[var(--primary-color)]/60 rounded-r-full col-span-1 me-auto hidden md:block"></div>

            <div className="md:grid md:grid-cols-6 md:col-span-9 items-center gap-6">
              {/* Dotted Sign */}
              <div
                className="hidden md:grid md:grid-cols-6 md:grid-rows-8 md:gap-x-7 md:gap-y-8 m-auto md:col-span-2"
                aria-hidden="true"
              >
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-[var(--border-color)]/40"
                  ></div>
                ))}
              </div>

              {/* Content */}
              <div className="col-span-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold underline mb-2 sm:mb-4">
                  Why Join us?
                </h2>

                <p className="sm:text-lg text-[var(--foreground-color)]/80 md:leading-relaxed mb-8">
                  We are moving forward with a bigger vision and greater
                  opportunities ahead. You can contribute to this organization
                  to gain hands-on experience as well as leadership qualities.
                </p>

                <div className="hidden md:flex md:justify-evenly md:items-center">
                  <img
                    className="object-contain"
                    src="/images/gift-card.svg"
                    alt="Gift Card"
                  />
                  <img
                    className="w-80 object-contain"
                    src="/images/zigzag-line.svg"
                    alt="Zigzag Line"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
