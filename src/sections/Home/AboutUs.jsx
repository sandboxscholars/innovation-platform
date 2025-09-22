import React from "react";

function AboutUs() {
  return (
    <section className="min-h-screen md:py-10 text-[var(--foreground-color)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 items-center">
          {/* About Us Section */}
          <div className="grid grid-cols-10 items-center">
            {/* Text */}
            <div className="space-y-6 col-span-7">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-4 underline">
                About us!
              </h2>

              <div className="space-y-4 text-[var(--foreground-color)]/80 text-lg leading-relaxed">
                <p>
                  Our initiative empowers students worldwide to innovate,
                  collaborate, and lead change. We are a student-driven
                  initiative dedicated to creativity and research.
                </p>

                <p>
                  Our team creates{" "}
                  <span className="font-semibold">engaging articles</span>,
                  develops{" "}
                  <span className="font-semibold">open-source software</span>,
                  conducts interviews, and covers{" "}
                  <span className="font-semibold">thought-provoking topics</span>.
                </p>

                <p>
                  Our focus is on building meaningful projects and providing
                  valuable experiences for our members as we grow.
                </p>
              </div>
            </div>

            {/* Half Circle (Right Side) */}
            <div className="w-[120px] h-52 bg-[var(--primary-color)]/60 rounded-l-full col-span-3 ms-auto"></div>
          </div>

          {/* Why Join Us Section */}
          <div className="grid grid-cols-10 items-center">
            {/* Half Circle (Left Side) */}
            <div className="w-[120px] h-52 bg-[var(--primary-color)]/60 rounded-r-full col-span-1 me-auto"></div>

            <div className="grid grid-cols-6 col-span-9 items-center gap-6">
              {/* Dotted Sign */}
              <div
                className="grid grid-cols-6 grid-rows-8 gap-x-7 gap-y-8 m-auto col-span-2"
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
                <h2 className="text-4xl lg:text-5xl font-semibold underline mb-4 text-end">
                  Why Join us?
                </h2>

                <p className="text-lg text-[var(--foreground-color)]/80 leading-relaxed mb-8 text-end">
                  We are moving forward with a bigger vision and greater
                  opportunities ahead. You can contribute to this organization
                  to gain hands-on experience as well as leadership qualities.
                </p>

                <div className="flex justify-evenly items-center">
                  <img
                    className="w-24 h-24 object-contain"
                    src="/images/gift-card.png"
                    alt="Gift Card"
                  />
                  <img
                    className="w-80 object-contain"
                    src="/images/zigzag-line.png"
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
