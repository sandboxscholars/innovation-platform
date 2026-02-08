import React from 'react';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Team", href: "/team" },
    { name: "Submission", href: "/submit-articles" },
    { name: "Join Us", href: "/join-us" },
  ];

  const resources = [
    { name: "Publications", href: "/blogs" },
    { name: "Documentation", href: "/termsAndConditions" },
    { name: "Community", href: "https://www.instagram.com/sandbox_scholars/", external: true },
    { name: "Support", href: "mailto:sandboxscholars.team@gmail.com", mailto: true },
    { name: "Ask Questions", href: "mailto:sandboxscholars.team@gmail.com?subject=Question", mailto: true }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/sandbox-scholars/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/sandbox_scholars/", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaGithub, href: "https://github.com/sandboxscholars", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:sandboxscholars.team@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Brand & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
  <a href="/">
    <img 
      src="/logo.svg" 
      alt="Organization Logo" 
      className="w-12 h-12"
    />
  </a>
</div>
              <div>
                <h3 className="text-xl font-bold text-white">Sandbox Scholars</h3>
                <p className="text-sm text-gray-400">Student Innovation Network</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering students to innovate, create, and lead through collaborative projects and research.
            </p>
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-2">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-blue-500"
                />
                <a 
  href="mailto:sandboxscholars.team@gmail.com?subject=Contact%20Request&body=Hello%20Sandbox%20Scholars%20Team%2C%0D%0A%0D%0AKeep%20me%20updated%20with%20your%20newsletters%2C%20projects%2C%20and%20contributing%20opportunities."
  className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
>
  <FaPaperPlane className="w-4 h-4" />
</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">sandboxscholars.team@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">We Respond within a few days</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Operated Globally</span>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Sandbox Scholars. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="/termsAndConditions" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/termsAndConditions" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/termsAndConditions" className="hover:text-white transition-colors">Work Culture</a>
            <a href="/termsAndConditions" className="hover:text-white transition-colors">More info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;