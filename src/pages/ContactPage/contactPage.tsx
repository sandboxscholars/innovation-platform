import React from "react";
import { 
  FiMail, 
  FiGlobe, 
  FiMessageSquare,
  FiPhone,
  FiMapPin,
  FiClock,
  FiUsers,
  FiExternalLink,
  FiMessageCircle
} from "react-icons/fi";
import { 
  FaFacebook, 
  FaInstagram, 
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaGithub
} from "react-icons/fa";

function ContactPage() {
  // Featured contributors for direct contact
  const featuredContributors = [
    {
      id: 1,
      name: "Mohammad Nafis Fuad",
      role: "Project Manager",
      photoInitials: "MNF",
      contactMethods: [
        {
          platform: "Email",
          icon: FiMail,
          value: "nafisfuad2024@gmail.com",
          link: "mailto:nafisfuad2024@gmail.com",
          color: "bg-red-100 text-red-600"
        },
        {
          platform: "WhatsApp",
          icon: FaWhatsapp,
          value: "+880 1967517101",
          link: "https://wa.me/8801967517101",
          color: "bg-green-100 text-green-600"
        },
        {
          platform: "Discord",
          icon: FaDiscord,
          value: "therealnafis",
          link: "https://discord.com/users/therealnafis",
          color: "bg-indigo-100 text-indigo-600"
        }
      ],
      availability: "Weekdays: 10 AM - 6 PM (GMT+6)",
      note: "Best for project inquiries and technical discussions"
    },
    {
      id: 2,
      name: "Ishita Reddy Yakkanti",
      role: "Executive Member",
      photoInitials: "IRY",
      contactMethods: [
        {
          platform: "Email",
          icon: FiMail,
          value: "krishnareddyym@gmail.com",
          link: "mailto:krishnareddyym@gmail.com",
          color: "bg-red-100 text-red-600"
        },
        {
          platform: "Discord",
          icon: FaDiscord,
          value: "ishitareddyyakkanti_13239",
          link: "https://discord.com/users/ishitareddyyakkanti_13239",
          color: "bg-indigo-100 text-indigo-600"
        },
      ],
      availability: "Weekdays: 9 AM - 5 PM (EST)",
      note: "Specializes in project management and strategy"
    }
  ];

  // Primary contact information
  const primaryContacts = [
    {
      title: "General Inquiries",
      email: "sandboxscholars.team@gmail.com",
      description: "For general questions about our organization",
      icon: FiMail
    },
    {
      title: "Project Submissions",
      email: "krishnareddyym@gmail.com",
      description: "To submit new project proposals",
      icon: FiMessageSquare
    },
    {
      title: "Article Submissions",
      email: "sandboxscholars.team@gmail.com",
      description: "For submitting articles and research papers",
      icon: FiMail
    },
    {
      title: "Collaboration",
      email: "nafisfuad2024@gmail.com",
      description: "Partnership and collaboration opportunities",
      icon: FiUsers
    }
  ];

  // Social media links
  const socialLinks = [
    { platform: "Facebook", icon: FaFacebook, link: "https://facebook.com/", color: "bg-blue-100 text-blue-700" },
    { platform: "Instagram", icon: FaInstagram, link: "https://instagram.com/sandbox_scholars", color: "bg-pink-100 text-pink-600" },
    { platform: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/company/sandbox-scholars", color: "bg-blue-100 text-blue-700" },
    { platform: "GitHub", icon: FaGithub, link: "https://github.com/sandboxscholars", color: "bg-gray-100 text-gray-800" },
  ];

  // Office information
  const officeInfo = [
    { icon: FiMapPin, text: "Operated Globally" },
    { icon: FiMail, text: "sandboxscholars.team@gmail.com" },
    { icon: FiClock, text: "Email Response Within 24-48 hours" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Logo */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            {/* Logo */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center">
  <div className="text-center">
    <div className="flex justify-center mb-2">
      <img 
        src="./src/assets/logo.svg" 
        alt="Sandbox Scholars logo" 
        className="h-33 md:h-34 w-auto drop-shadow-lg"
      />
    </div>
    <div className="text-white/90 text-lg font-medium">Sandbox Scholars</div>
  </div>
</div>

            {/* Organization Name & Tagline */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sandbox Scholars
              </h1>
              <div className="text-xl text-gray-600 mb-6">
                Student Innovation Network
              </div>
              <p className="text-gray-700 max-w-md text-lg">
                Connecting student innovators through collaboration, 
                research, and impactful projects.
              </p>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {officeInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <info.icon className="w-5 h-5 text-blue-600" />
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Official Contacts */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FiMail className="w-6 h-6 text-blue-600" />
                Official Contact Channels
              </h2>
              
              <div className="grid md:grid-cols-1 gap-3">
                {primaryContacts.map((contact, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium block mb-2"
                        >
                          {contact.email}
                        </a>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Contributors */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FiUsers className="w-6 h-6 text-blue-600" />
                Contact Our Team Directly
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {featuredContributors.map((contributor) => (
                  <div 
                    key={contributor.id}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Contributor Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-700">
                          {contributor.photoInitials}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{contributor.name}</h3>
                        <p className="text-gray-600">{contributor.role}</p>
                      </div>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-4 mb-6">
                      {contributor.contactMethods.map((method, idx) => (
                        <a
                          key={idx}
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center`}>
                              <method.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{method.platform}</div>
                              <div className="text-sm text-gray-600 truncate max-w-[180px]">
                                {method.value}
                              </div>
                            </div>
                          </div>
                          <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </a>
                      ))}
                    </div>

                    {/* Additional Info */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <FiClock className="w-4 h-4" />
                        <span>{contributor.availability}</span>
                      </div>
                      <p className="text-sm text-gray-600 italic">{contributor.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Social Links & Quick Info */}
          <div className="lg:col-span-1">
            {/* Social Media Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`flex flex-col items-center justify-center p-4 rounded-xl ${social.color} hover:shadow-md transition-all`}>
                      <social.icon className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">{social.platform}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response Times</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FiMessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email Response</div>
                    <div className="text-sm text-gray-600">Within 24-48 hours</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaDiscord className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Discord Support</div>
                    <div className="text-sm text-gray-600">Live chat during office hours</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-600">Direct messaging available</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup - REMOVED */}
            
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            For urgent matters outside office hours, please email{' '}
            <a href="mailto:sandboxscholars.team@gmail.com" className="text-blue-600 hover:underline font-medium">
              sandboxscholars.team@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            We strive to respond to all inquiries within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;