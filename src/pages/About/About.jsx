import React from 'react';

function About() {
  // Team members data
  const teamMembers = [
    { id: 1, name: 'Alex Morgan', role: 'President', department: 'Computer Science' },
    { id: 2, name: 'Taylor Chen', role: 'Vice President', department: 'Engineering' },
    { id: 3, name: 'Jordan Patel', role: 'Creative Director', department: 'Design' },
    { id: 4, name: 'Morgan Lee', role: 'Project Lead', department: 'Business' },
  ];

  // Milestones data
  const milestones = [
    { year: '2020', title: 'Organization Founded', description: 'Started with 5 passionate students' },
    { year: '2021', title: 'First Hackathon', description: 'Hosted 200+ participants' },
    { year: '2022', title: 'Community Outreach', description: 'Partnered with 10+ schools' },
    { year: '2023', title: 'International Recognition', description: 'Featured in global innovation forum' },
  ];

  return (
    <div className="min-h-screen bg-paperWhite text-deepCharcoal">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-blue-500/10 via-white to-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200">
              <span className="text-orange-600 font-semibold">About Our Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 tracking-tight">
              Innovating Through <span className="text-orange-600">Collaboration</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A student-led non-profit organization dedicated to fostering innovation, 
              creativity, and real-world impact through collaborative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-700 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower students with the tools, knowledge, and network needed to 
              transform innovative ideas into impactful solutions that address 
              real-world challenges.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <span className="text-orange-600 font-semibold">Focus Areas:</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Innovation', 'Collaboration', 'Education', 'Community', 'Sustainability'].map((item, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-yellow-50 rounded-full text-gray-700 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-orange-600">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a global network of student innovators who lead with creativity, 
              collaborate across disciplines, and drive positive change in their 
              communities and beyond.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-600">250+</div>
                <div className="text-sm text-gray-500">Active Members</div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-12 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that guide every project and partnership
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Innovation First', 
                description: 'We believe in pushing boundaries and exploring new possibilities in everything we do.',
              },
              { 
                title: 'Collaborative Spirit', 
                description: 'Great ideas grow through diverse perspectives and shared passion.',
              },
              { 
                title: 'Student-Led', 
                description: 'Empowering students to take initiative and lead projects that matter to them.',
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-10 h-1 ${index === 0 ? 'bg-blue-700' : index === 1 ? 'bg-blue-500' : 'bg-orange-600'} mb-4`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our growth and impact</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold text-blue-700 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-600 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate students leading our initiatives across various disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-blue-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-orange-600 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-500 text-sm">{member.department}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              View Full Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of innovators and start creating meaningful change today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors">
              Join Our Community
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;