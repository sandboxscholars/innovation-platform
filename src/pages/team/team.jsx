import React, { useState } from "react";
import { 
  FiUser, 
  FiMail, 
  FiStar, 
  FiCalendar,
  FiExternalLink,
  FiFilter,
  FiSearch,
  FiAward,
  FiUsers,
  FiClock
} from "react-icons/fi";

function Team() {
  // Member data - categorized by type
  const allMembers = [
    // Star Members (type 2)
    {
      id: 1,
      name: "Mohammad Nafis Fuad",
      email: "nafisfuad2024@gmail.com",
      contact: "01967517101",
      roles: ["Founder", "Web Developer", "Visual Designer"],
      type: 2, // Star member
      tenure: "2 years",
      joinDate: "2022",
      status: "Active",
      link: "https://www.linkedin.com/in/nafis2024/"
    },
    {
      id: 1,
      name: "Sunveer Hossain",
      email: "sunveerhossain66@gmail.com",
      contact: "01406583087",
      roles: ["Content Writer", "Research Strategist", "Social Media Manager"],
      type: 2, // Star member
      tenure: "2 years",
      joinDate: "2022",
      status: "Active",
      link: "#"
    },
    {
      id: 2,
      name: "Ishita Reddy Yakkanti",
      email: "krishnareddyym@gmail.com",
      contact: "704-791-6326",
      roles: ["Data Analyst", "STEM Advocate", "Web Developer"],
      type: 2,
      tenure: "1.5 years",
      joinDate: "2023",
      status: "Active",
      link: "mailto:krishnareddyym@gmail.com"
    },
    {
      id: 3,
      name: "Mashrafi",
      email: "mashrafi.mail@gmail.com",
      contact: "+8801569174735",
      roles: ["Web Developer"],
      type: 2,
      tenure: "2.5 years",
      joinDate: "2021",
      status: "Active",
      link: "https://wa.me/+8801569174735"
    },
    {
      id: 4,
      name: "Muhammed Althaf",
      email: "macrontime048@gmail.com",
      contact: "+91 9544493837",
      roles: ["Data Analyst", "Web Developer"],
      type: 2,
      tenure: "1 year",
      joinDate: "2023",
      status: "Active",
      link: "https://wa.me/+919544493837"
    },
    
    // Active Members (type 1)
    {
      id: 5,
      name: "Iffat Ahmed Afia",
      email: "ahmediffat11@gmail.com",
      contact: "+13658837273",
      roles: ["Front-end Developer", "Back-end Developer"],
      type: 1,
      tenure: "1 year",
      joinDate: "2023",
      status: "Active",
      link: "#"
    },
    {
      id: 6,
      name: "Tawsif Ahmed",
      email: "tawsifahmed666@gmail.com",
      contact: "01730261042",
      roles: ["Content Writer", "Research Strategist", "Data Analyst"],
      type: 1,
      tenure: "8 months",
      joinDate: "2023",
      status: "Active",
      link: "#"
    },
    {
      id: 7,
      name: "Adrita Idris Disha",
      email: "adritaidris@gmail.com",
      contact: "01877074170",
      roles: ["Content Writer"],
      type: 1,
      tenure: "6 months",
      joinDate: "2024",
      status: "Active",
      link: "#"
    },
    {
      id: 8,
      name: "Anik Agarwal",
      email: "career.agarwal@gmail.com",
      contact: "01789792248",
      roles: ["Data Analyst"],
      type: 1,
      tenure: "1 year",
      joinDate: "2023",
      status: "Active",
      link: "#"
    },
    {
      id: 9,
      name: "Noboneeta Chowdhury",
      email: "noboneetachowdhury@gmail.com",
      contact: "Facebook Profile",
      roles: ["Research Strategist", "Data Analyst"],
      type: 1,
      tenure: "9 months",
      joinDate: "2023",
      status: "Active",
      link: "https://www.facebook.com/share/1AGeVaDHzk/"
    },
    {
      id: 10,
      name: "Eftekher Anower Nahin",
      email: "nahineftekher@gmail.com",
      contact: "+880 1608091959",
      roles: ["Visual Designer"],
      type: 1,
      tenure: "7 months",
      joinDate: "2023",
      status: "Active",
      link: "https://wa.me/+8801608091959"
    },
    {
      id: 11,
      name: "Asibul Islam Mahin",
      email: "trtt64249@gmail.com",
      contact: "01896286943",
      roles: ["Content Writer"],
      type: 1,
      tenure: "5 months",
      joinDate: "2024",
      status: "Active",
      link: "https://wa.me/+8801896286943"
    },
    {
      id: 12,
      name: "Bijenta Sanyal",
      email: "ronjitsanyal85@gmail.com",
      contact: "Facebook Profile",
      roles: ["Content Writer"],
      type: 1,
      tenure: "10 months",
      joinDate: "2023",
      status: "Active",
      link: "https://www.facebook.com/laijoti"
    },
    {
      id: 13,
      name: "Mubasshira Tasnim",
      email: "sukannatasnim@gmail.com",
      contact: "Facebook Profile",
      roles: ["Content Writer", "Data Analyst"],
      type: 1,
      tenure: "11 months",
      joinDate: "2023",
      status: "Active",
      link: "https://www.facebook.com/mubashhira.mahira"
    },
    {
      id: 14,
      name: "Aayush behera",
      email: "aayushbehera7890@gmail.com",
      contact: "+91 8867461458",
      roles: ["Content Writer"],
      type: 1,
      tenure: "4 months",
      joinDate: "2024",
      status: "Active",
      link: "https://wa.me/+918867461458"
    },
    
    // Ex Members (type 0)
    {
      id: 15,
      name: "Tamima Binte Mozib",
      email: "maishatamima@gmail.com",
      contact: "Facebook Profile",
      roles: ["Content Writer", "Digital Journalist", "Social Media Manager"],
      type: 0,
      tenure: "1.5 years",
      joinDate: "2022",
      status: "Alumni",
      link: "https://www.facebook.com/share/16Dtkc8oSU/"
    },
    {
      id: 16,
      name: "Tousif bin parves",
      email: "tousifbnn@gmail.com",
      contact: "01620962987",
      roles: ["Research Strategist", "Data Analyst"],
      type: 0,
      tenure: "1 year",
      joinDate: "2022",
      status: "Alumni",
      link: "#"
    },
    {
      id: 17,
      name: "Arkan Kabir Mridha",
      email: "sadnanyo@gmail.com",
      contact: "Facebook Profile",
      roles: ["Content Writer", "Digital Journalist", "Data Analyst"],
      type: 0,
      tenure: "2 years",
      joinDate: "2021",
      status: "Alumni",
      link: "https://www.facebook.com/share/1CseSppMnQ/"
    },
    {
      id: 18,
      name: "Jakia Akter Lima",
      email: "jaky19028@gmail.com",
      contact: "01790582996",
      roles: ["Content Writer", "Research Strategist", "Social Media Manager"],
      type: 0,
      tenure: "1 year",
      joinDate: "2022",
      status: "Alumni",
      link: "#"
    },
    {
      id: 19,
      name: "Priontika Chanda",
      email: "ektubeshicool@gmail.com",
      contact: "01641411942",
      roles: ["Visual Designer"],
      type: 0,
      tenure: "8 months",
      joinDate: "2023",
      status: "Alumni",
      link: "https://wa.me/+8801641411942"
    },
    {
      id: 20,
      name: "Khan Mahabi Hoque Nayna",
      email: "naynanayn77@yahoo.com",
      contact: "01713620571",
      roles: ["Content Writer", "Data Analyst"],
      type: 0,
      tenure: "1 year",
      joinDate: "2022",
      status: "Alumni",
      link: "https://wa.me/+8801713620571"
    },
    {
      id: 21,
      name: "Md. Jubayerul Alam Fahim",
      email: "itasukeuchiha420@gmail.com",
      contact: "01883226601",
      roles: ["Content Writer", "Data Analyst"],
      type: 0,
      tenure: "6 months",
      joinDate: "2023",
      status: "Alumni",
      link: "https://wa.me/+8801883226601"
    },
  ];

  const [filter, setFilter] = useState("all"); // "all", "star", "active", "ex"
  const [searchQuery, setSearchQuery] = useState("");

  // Filter members based on selected filter and search
  const filteredMembers = allMembers.filter(member => {
    const matchesFilter = filter === "all" || 
      (filter === "star" && member.type === 2) ||
      (filter === "active" && member.type === 1) ||
      (filter === "ex" && member.type === 0);
    
    const matchesSearch = searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.roles.some(role => role.toLowerCase().includes(searchQuery.toLowerCase())) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Get color based on member type
  const getTypeColor = (type) => {
    switch(type) {
      case 2: return "bg-accentTertiary"; // Star - Golden yellow
      case 1: return "bg-brandPrimary";   // Active - Brand blue
      case 0: return "bg-deepCharcoal";   // Ex - Dark gray/black
      default: return "bg-gray-400";
    }
  };

  // Get type label
  const getTypeLabel = (type) => {
    switch(type) {
      case 2: return "Star Contributor";
      case 1: return "Active Member";
      case 0: return "Alumni Contributor";
      default: return "Member";
    }
  };

  // Get type icon
  const getTypeIcon = (type) => {
    switch(type) {
      case 2: return <FiStar className="w-4 h-4" />;
      case 1: return <FiUsers className="w-4 h-4" />;
      case 0: return <FiClock className="w-4 h-4" />;
      default: return <FiUser className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-paperWhite">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brandPrimary/10 via-paperWhite to-brandSecondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandPrimary/10 rounded-full mb-6">
              <FiUsers className="w-4 h-4 text-brandPrimary" />
              <span className="text-brandPrimary font-medium text-sm uppercase tracking-wider">
                Our Community
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-deepCharcoal mb-6">
              Meet Our <span className="text-brandPrimary">Contributors</span>
            </h1>
            
            <p className="text-xl text-darkCool max-w-3xl mx-auto leading-relaxed">
              A diverse community of student innovators, researchers, and creators 
              who are shaping the future through collaboration and impactful work.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: allMembers.filter(m => m.type === 1).length, label: "Active Members", color: "brandPrimary" },
              { value: allMembers.filter(m => m.type === 2).length, label: "Star Contributors", color: "accentTertiary" },
              { value: allMembers.filter(m => m.type === 0).length, label: "Alumni Network", color: "deepCharcoal" },
              { value: allMembers.length, label: "Total Contributors", color: "brandSecondary" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-pureWhite p-4 rounded-xl border border-lightCool text-center"
              >
                <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-darkCool">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="relative max-w-md">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-darkWarm w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, role, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-pureWhite border border-lightCool rounded-xl focus:outline-none focus:ring-2 focus:ring-brandTertiary focus:border-transparent text-deepCharcoal"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "all" 
                    ? "bg-brandPrimary text-pureWhite" 
                    : "bg-lightCool text-darkCool hover:bg-brandTertiary/20"
                }`}
              >
                All Members ({allMembers.length})
              </button>
              <button
                onClick={() => setFilter("star")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "star" 
                    ? "bg-accentTertiary text-charcoal" 
                    : "bg-lightCool text-darkCool hover:bg-accentTertiary/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FiStar className="w-4 h-4" />
                  Star ({allMembers.filter(m => m.type === 2).length})
                </span>
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "active" 
                    ? "bg-brandPrimary text-pureWhite" 
                    : "bg-lightCool text-darkCool hover:bg-brandTertiary/20"
                }`}
              >
                Active ({allMembers.filter(m => m.type === 1).length})
              </button>
              <button
                onClick={() => setFilter("ex")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === "ex" 
                    ? "bg-deepCharcoal text-pureWhite" 
                    : "bg-lightCool text-darkCool hover:bg-deepCharcoal/20"
                }`}
              >
                Alumni ({allMembers.filter(m => m.type === 0).length})
              </button>
            </div>
          </div>
        </div>

        {/* Star Contributors Spotlight */}
        {filter === "all" || filter === "star" ? (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accentTertiary/25 flex items-center justify-center">
                <FiStar className="w-5 h-5 text-accentTertiary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-deepCharcoal">Star Contributors</h2>
                <p className="text-darkCool">Exceptional members driving innovation forward</p>
              </div>
            </div>

            {/* FIXED DIMENSION CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMembers
                .filter(member => member.type === 2)
                .map(member => (
                  <a
                    key={member.id}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-pureWhite rounded-2xl border border-lightCool p-6 hover:shadow-xl hover:border-accentTertiary transition-all duration-300 h-[320px] flex flex-col">
                      {/* Member Type Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <div className={`px-3 py-1 ${getTypeColor(member.type)} text-pureWhite text-xs font-semibold rounded-full flex items-center gap-1`}>
                          {getTypeIcon(member.type)}
                          {getTypeLabel(member.type)}
                        </div>
                        <FiExternalLink className="w-4 h-4 text-darkCool group-hover:text-accentTertiary transition-colors flex-shrink-0" />
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 flex flex-col">
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brandPrimary/20 to-brandSecondary/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                          <span className="text-xl font-bold text-brandPrimary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-deepCharcoal mb-2 text-center line-clamp-1">{member.name}</h3>
                        
                        {/* Roles - Scrollable if too many */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
  {member.roles.map((role, idx) => (
    <span key={idx} className="text-xs px-2 py-1 bg-lightCool text-darkCool rounded">
      {role}
    </span>
  ))}
</div>

                        {/* Tenure */}
                        <div className="flex items-center justify-center gap-2 text-sm text-darkCool mb-4 flex-shrink-0">
                          <FiCalendar className="w-4 h-4 flex-shrink-0" />
                          <span className="text-center">{member.tenure} • {member.joinDate}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center gap-2 text-sm text-brandPrimary mt-auto flex-shrink-0">
                          <FiMail className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate text-center">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ) : null}

        {/* All Members Grid with FIXED DIMENSIONS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-deepCharcoal">
              {filter === "all" ? "All Contributors" : 
               filter === "star" ? "Star Contributors" :
               filter === "active" ? "Active Members" : "Alumni Network"}
            </h2>
            <div className="text-sm text-darkCool">
              Showing {filteredMembers.length} of {allMembers.length} members
            </div>
          </div>

          {/* GRID WITH FIXED HEIGHT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map(member => (
              <a
                key={member.id}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`bg-pureWhite rounded-xl border ${
                  member.type === 1 ? 'border-brandTertiary/30' : 
                  member.type === 2 ? 'border-accentTertiary/30' : 
                  'border-lightCool'
                } p-6 hover:shadow-lg transition-all duration-300 h-[280px] flex flex-col`}>
                  
                  {/* Member Header - Fixed height section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-16 h-16 rounded-full ${
                        member.type === 1 ? 'bg-brandPrimary/10' : 
                        member.type === 2 ? 'bg-accentTertiary/10' : 
                        'bg-deepCharcoal/10'
                      } flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-sm font-bold ${
                          member.type === 1 ? 'text-brandPrimary' : 
                          member.type === 2 ? 'text-accentTertiary' : 
                          'text-deepCharcoal'
                        }`}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-deepCharcoal group-hover:text-brandPrimary transition-colors truncate">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`px-2 py-0.5 ${getTypeColor(member.type)} text-pureWhite text-xs rounded-full truncate max-w-[120px]`}>
                            {getTypeLabel(member.type)}
                          </div>
                          <span className="text-xs text-darkCool truncate">{member.status}</span>
                        </div>
                      </div>
                    </div>
                    <FiExternalLink className="w-4 h-4 text-darkCool group-hover:text-brandPrimary transition-colors flex-shrink-0 mt-1" />
                  </div>

                  {/* Roles - Scrollable section */}
                  <div className="mb-4 flex-1 min-h-[48px] max-h-[72px] overflow-y-auto scrollbar-thin">
                    <div className="flex flex-wrap gap-2">
                      {member.roles.map((role, idx) => (
                        <span 
                          key={idx}
                          className={`text-xs px-2 py-1 rounded flex-shrink-0 ${
                            member.type === 1 ? 'bg-brandPrimary/10 text-brandPrimary' : 
                            member.type === 2 ? 'bg-accentTertiary/10 text-charcoal' : 
                            'bg-deepCharcoal/10 text-deepCharcoal'
                          }`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details - Fixed bottom section */}
                  <div className="space-y-2 text-sm mt-auto">
                    <div className="flex items-center gap-2 text-darkCool">
                      <FiCalendar className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{member.tenure} • {member.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-darkCool">
                      <FiMail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    {member.contact && (
                      <div className="flex items-center gap-2 text-darkCool">
                        <FiUser className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate text-sm">{member.contact}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-lightCool">
          <h3 className="text-lg font-bold text-deepCharcoal mb-4">Member Categories</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-accentTertiary"></div>
              <div>
                <span className="font-medium text-deepCharcoal">Star Contributors</span>
                <p className="text-sm text-darkCool">Exceptional impact and leadership</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-brandPrimary"></div>
              <div>
                <span className="font-medium text-deepCharcoal">Active Members</span>
                <p className="text-sm text-darkCool">Currently contributing to projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-deepCharcoal"></div>
              <div>
                <span className="font-medium text-deepCharcoal">Alumni Network</span>
                <p className="text-sm text-darkCool">Former members who contributed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </div>
  );
}

export default Team;