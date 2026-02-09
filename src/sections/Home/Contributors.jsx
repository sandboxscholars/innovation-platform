import ContributorCard from "../../components/Cards/ContributorCard";
import TeamCard from "../../components/Cards/TeamCard";
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const contributors = [
  {
    name: "Mohammad Nafis Fuad",
    role: "Founder",
    contributions: "Project Management, Strategy",
    email: "nafisfuad2024@gmail.com",
    image: "",
  },
  {
    name: "Ishita Reddy Yakkanti",
    role: "Executive Member",
    contributions: "Project Management",
    email: "krishnareddyym@gmail.com",
    image: "",
  },
  {
    name: "Ali Hasan Mashrafi",
    role: "Web Developer",
    contributions: "Frontend, Backend Development",
    email: "mashrafi.mail@gmail.com",
    image: "",
  },
];

const teams = [
  { name: "Executive Team", members: 2, color: "brandPrimary" },
  { name: "Research Team", members: 4, color: "brandSecondary" },
  { name: "Visual Designers", members: 3, color: "accentPrimary" },
  { name: "Web Developers", members: 6, color: "accentSecondary" },
];

export default function Contributors() {
  return (
    <section className="py-20 px-6 bg-paperWhite">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-brandPrimary animate-pulse"></div>
            <span className="text-brandPrimary font-medium text-sm">Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-deepCharcoal mb-6 tracking-tight">
            Meet Our <span className="text-brandPrimary">Innovators</span>
          </h2>
          
          <p className="text-lg text-darkCool max-w-2xl mx-auto leading-relaxed">
            A diverse community of passionate students driving innovation through 
            collaboration, research, and creative problem-solving.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Contributors", value: "10+" },
            { label: "Teams", value: "4+" },
            { label: "Projects", value: "12+" },
            { label: "Publications", value: "25+" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-pureWhite p-6 rounded-xl border border-lightCool shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-brandPrimary mb-2">{stat.value}</div>
              <div className="text-sm text-darkCool font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teams Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-pureWhite rounded-2xl border border-lightCool shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-deepCharcoal">Teams</h3>
                  <span className="text-sm text-darkCool bg-lightCool px-3 py-1 rounded-full">
                    {teams.length} teams
                  </span>
                </div>
                
                {/* Search */}
                
                
                {/* Team List */}
                <div className="space-y-3">
                  {teams.map((team, idx) => (
                    <div 
                      key={idx}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between p-4 rounded-xl border border-lightCool hover:border-brandTertiary hover:bg-brandPrimary/5 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-${team.color}`}></div>
                          <span className="font-medium text-deepCharcoal group-hover:text-brandPrimary">
                            {team.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-darkCool">{team.members} members</span>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-lightCool">
                  <Link 
  to="/team" 
  className="w-full py-3 text-brandPrimary font-medium hover:bg-brandPrimary/5 rounded-xl transition-colors flex items-center justify-center"
>
  View All Contributors →
</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contributors Section */}
          <div className="lg:col-span-2">
            <div className="bg-pureWhite rounded-2xl border border-lightCool shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-deepCharcoal mb-2">Featured Contributors</h3>
                  <p className="text-darkCool">Key members driving our current initiatives</p>
                </div>
                <button className="px-6 py-3 bg-brandPrimary text-pureWhite rounded-xl font-medium hover:bg-brandSecondary transition-colors whitespace-nowrap">
                  People who made this possible
                </button>
              </div>
              
              {/* Contributors Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {contributors.map((person, idx) => (
                  <div 
                    key={idx}
                    className="group bg-paperWhite border border-lightCool rounded-xl p-6 hover:border-brandTertiary hover:shadow-md transition-all"
                  >
                    {/* Contributor Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brandTertiary to-brandSecondary flex items-center justify-center">
                            <span className="text-pureWhite font-bold text-sm">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="px-3 py-1 bg-lightCool text-darkCool text-xs font-medium rounded-full">
                              {person.role}
                            </div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-deepCharcoal mb-1">{person.name}</h4>
                      </div>
                      <div className="text-darkWarm/30 group-hover:text-brandTertiary transition-colors">
                        ↗
                      </div>
                    </div>
                    
                    {/* Contributions */}
                    <div className="mb-6">
                      <div className="text-sm text-darkCool font-medium mb-2">Contributions</div>
                      <div className="text-deepCharcoal">{person.contributions}</div>
                    </div>
                    
                    {/* Contact & Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-lightCool">
                      <a 
  href={`mailto:${person.email}`}
  className="text-sm text-brandPrimary hover:text-brandSecondary font-medium"
>
  {person.email}
</a>

                      {/** VIEW PROFILE FEATURE REMOVED */}

                      
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State for More Contributors */}
              <div className="mt-8 p-8 bg-gradient-to-r from-brandPrimary/5 to-brandSecondary/5 rounded-xl border border-lightCool text-center">
                <div className="text-5xl mb-4 text-brandTertiary/50">...</div>
                <h4 className="text-lg font-bold text-deepCharcoal mb-2">More Innovators Joining</h4>
                <p className="text-darkCool mb-4">We're growing our community daily with passionate students</p>
                <button className="text-brandPrimary font-medium hover:text-brandSecondary">
                  Navigate to the <b>About us</b> tab to explore all our contributors
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer - REMOVED */}
       
      </div>
    </section>
  );
}