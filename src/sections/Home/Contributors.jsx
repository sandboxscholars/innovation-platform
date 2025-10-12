import ContributorCard from "../../components/Cards/ContributorCard";
import TeamCard from "../../components/Cards/TeamCard";
import { Search } from "lucide-react";

const contributors = [
  {
    name: "John Doe",
    role: "Executive Lead",
    contributions: "Project Management, Strategy",
    email: "john@email.com",
    image: "",
  },
  {
    name: "Jane Smith",
    role: "Research Head",
    contributions: "Content Research, Reports",
    email: "jane@email.com",
    image: "",
  },
  {
    name: "Michael Lee",
    role: "Web Developer",
    contributions: "Frontend, Backend Development",
    email: "michael@email.com",
    image: "",
  },
];

const teams = [
  { name: "Executive Team" },
  { name: "Research Team" },
  { name: "Visual Designers" },
  { name: "Web Developers" },
];

export default function Contributors() {
  return (
    <section className="py-6 px-6">
      {/* Heading */}
      <div className="max-w-6xl text-[var(--foreground-color)] mx-auto mb-12">
        <h2 className="text-5xl font-neue-ultraBold leading-13 font-bold mb-4 md:mb-6">
          Meet our <br /> <span className="underline">contributors</span>
        </h2>
        <p className="text-lg leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_2fr] gap-10 items-start max-w-6xl mx-auto">
        {/* Left - Team Section */}
        <div className="flex flex-col gap-6 order-1 bg-[var(--primary-color)]/17 px-6 py-6 rounded-3xl max-h-[600px] overflow-y-auto">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search team..."
              className="w-full px-10 py-3 rounded-full bg-white border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Team Pills */}
          <div className="flex flex-col gap-4">
            {teams.map((team, idx) => (
              <TeamCard key={idx} {...team} />
            ))}
          </div>
        </div>

        {/* Middle - Illustration */}
        <div className="flex justify-center items-end order-2 self-end">
          <img
            src="/images/group.svg"
            alt="Team illustration"
            className="w-44 h-56 object-contain"
          />
        </div>
    

        {/* Right - Contributor Cards */}
        <div className="flex flex-col gap-6 order-3 bg-[var(--primary-color)]/17 py-6 px-6 rounded-3xl max-h-[720px] overflow-y-auto">
          {contributors.map((person, idx) => (
            <ContributorCard key={idx} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
