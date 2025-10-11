import { CheckSquare, Zap, Palette, Clock } from "lucide-react";

export default function Workflow() {
  const workflowSteps = [
    {
      icon: CheckSquare,
      title: "Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Zap,
      title: "Trying",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Palette,
      title: "Creating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Clock,
      title: "Polishing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  const DiamondIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" // Decorative element, so hide from screen readers
    >
      <path d="M12 0L24 24L12 48L0 24L12 0Z" />
    </svg>
  );

  return (
    <section className="min-h-screen text-[var(foreground-color)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center text-center mb-18 relative">
          <img className="w-[160px]" src="/images/paper.svg" alt="" />
          <h1 className="text-4xl md:text-5xl font-semibold underline decoration-3 underline-offset-8">
            Our Workflow
          </h1>

          <div>
            <img className="" src="/images/question-sign.svg" alt="" />
              <img src="/images/watch.svg" alt="" />
          </div>


        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Shared Top Border */}
          <div className="absolute top-0 left-0 w-full border-t-[3.2px] border-[var(--foreground-color)]"></div>

          {/* Step Cards */}
          <div className="grid grid-cols-4 gap-8 pt-5 relative">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Diamond Shape - positioned relative to the whole grid */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45"
                  style={{ top: "-1.5rem" }} // overlap control
                ></div>

                {/* Content */}
                <h3 className="text-xl md:text-3xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-[17px] text-[var(--foreground-color)]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
