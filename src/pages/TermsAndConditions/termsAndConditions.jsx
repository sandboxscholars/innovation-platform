import React, { useState } from "react";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiCalendar,
  FiFileText,
  FiBook,
  FiCheckCircle,
  FiAlertCircle,
  FiExternalLink,
  FiSearch,
  FiDownload
} from "react-icons/fi";

function TermsAndConditions() {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // 13 standard sections for Terms and Conditions
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction and Acceptance of Terms",
      lastUpdated: "2026-02-10",
      required: true,
      content: `Welcome to Sandbox Scholars ("we," "us," "our," or the "Organization"). By accessing or using our website located at [sandboxscholars.org] (the "Site"), participating in our activities, contributing content, or using our code repositories, you ("you," "your," or "User") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, you must not access or use the Site or any of our resources.`
    },
    {
      id: "definitions",
      title: "2. Definitions and Interpretation",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        Sandbox Scholars is a fully student-operated, global online collective. We are focused on creating educational content (including articles and research), conducting bootcamps, managing open-source projects, and sharing narratives and advice relevant to younger generations. 
\n**Please note:** Sandbox Scholars is not a registered legal entity (e.g., a corporation, non-profit organization, or formal partnership). We operate as an unincorporated association of individual members. We are not recognized or endorsed by any government or official educational body.
      `
    },
    {
      id: "important disclaimers",
      title: "3. Important Disclaimers",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
      **Not Professional Advice:** All content provided on the Site and through our activities—including, but not limited to, articles, research, interviews, life advice, and project findings—is for informational, educational, and inspirational purposes only. It does not constitute professional advice of any kind (legal, financial, medical, career, or otherwise). You are solely responsible for your decisions and actions based on any information from our Site.
\n**"As Is" Basis:** The Site and all content, services, and code are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied.
\n**Limitation of Liability:** To the fullest extent permitted by applicable law, Sandbox Scholars and its individual members, contributors, and operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site, reliance on its content, or participation in our activities.
\n**Accuracy:** We do not warrant the accuracy, completeness, or usefulness of any information on the Site. Views expressed by contributors are their own and do not necessarily reflect the views of Sandbox Scholars as a whole.
      `
    },
    {
      id: "membership and age policy",
      title: "4. Membership & Age Policy",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        **Eligibility:** The Site and community are open to individuals aged 13 and over. By registering or contributing, you affirm that you meet this age requirement.
\n**Maturity Verification:** For certain participation, including but not limited to active contribution roles, we may employ methods such as voice calls to assess a user's maturity and suitability. This verification is at our sole discretion and does not constitute a guarantee of safety, accuracy, or endorsement. We are not liable for the outcomes of these informal assessments.
\n**Global Participation:** We welcome users from all countries. You are responsible for ensuring your use of the Site complies with your local laws and regulations.
      `
    },
    {
      id: "Intellectual Property (IP) Rights",
      title: "5. Intellectual Property (IP) Rights",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        \n**Site Content:** Original content published on the Sandbox Scholars Site (text, graphics, logos, design) is the intellectual property of Sandbox Scholars or its contributing members, protected by copyright and other laws.
\n**License for Your Contributions:** By submitting content (articles, code for publication, graphics, etc.) to Sandbox Scholars, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content in connection with the Site and our mission.
\n**Your Retained Rights:** You retain ownership of the copyright in your original work. You are free to publish it elsewhere, provided you acknowledge its initial publication with Sandbox Scholars if you wish.
\n**Open Source Repositories:**
\nOur software development team maintains public code repositories. The code in each specific repository is governed by its own open-source license (e.g., MIT, Apache, GPL) as stated within that repository's license file.
\n**Attribution Requirement:** Unless otherwise specified in a repository's specific license, any public use of our original code **must include clear and prominent attribution to "Sandbox Scholars"** with a link to the original repository. Failure to provide proper attribution is a violation of these Terms.
      `
    },
    {
      id: "User Conduct & Contributions",
      title: "6. User Conduct & Contributions",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        You agree not to submit, post, or transmit content that:
\nIs unlawful, threatening, abusive, defamatory, libelous, or invasive of another's privacy.
\nInfringes any patent, trademark, trade secret, copyright, or other intellectual property right.
\nContains false or misleading statements.
\nYou do not have the right to make available under any law or contractual relationship.
We reserve the right, but not the obligation, to monitor, edit, or remove any user content at our sole discretion.
      `
    },
    {
      id: "Interviews, Stories & Third-Party Content",
      title: "7. Interviews, Stories & Third-Party Content",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        \n**Your Responsibility:** If you submit an interview, personal story, or any content featuring a third party (e.g., an interviewee, a photograph of someone), you represent and warrant that you have obtained all necessary written consents, releases, and permissions from that person (and if a minor, from their parent/legal guardian).
\n**Release Form:** We may require you to provide a signed release form before we publish such content. You agree to cooperate with us in providing proof of consent.
      `
    },
    {
      id: "External Links",
      title: "8. External Links",
      lastUpdated: "2026-02-10",
      required: false,
      content: `
        The Site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
      `
    },
    {
      id: "Termination",
      title: "9. Termination",
      lastUpdated: "2026-02-10",
      required: false,
      content: `
        We may suspend or terminate your access to contribute to the Site or participate in our community, at our sole discretion, for any conduct we deem violates these Terms or is harmful to other users, us, or third parties.
      `
    },
    {
      id: "Governing Law & Dispute Resolution",
      title: "10. Governing Law & Dispute Resolution",
      lastUpdated: "2026-02-10",
      required: false,
      content: `
        These Terms shall be governed by and construed in accordance with the laws of the United Nations, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the state or federal courts located in Bangladesh, and you hereby consent to personal jurisdiction and venue in such courts.
      `
    },
    {
      id: "Changes to These Terms",
      title: "11. Changes to These Terms",
      lastUpdated: "2026-02-10",
      required: true,
      content: `
        We reserve the right to modify or replace these Terms at any time. The "Last Updated" date at the top will be revised. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
      `
    },
    {
      id: "Contact Information",
      title: "12. Contact Information",
      lastUpdated: "2026-02-10",
      required: false,
      content: `
        For any questions about these Terms and Conditions, please contact us at: sandboxscholars.team@gmail.com
      `
    },
    
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center justify-between mb-8">
            <div className="text-sm text-gray-500">
              <a href="/" className="hover:text-gray-700">Home</a>
              <span className="mx-2">/</span>
              <a href="/legal" className="hover:text-gray-700">Legal</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Terms & Conditions</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="/termsAndConditions" 
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </a>
              <a 
                href="/contact" 
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Usage Documentation
              </a>
            </div>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
              <FiFileText className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 text-sm font-medium uppercase tracking-wider">
                Legal Document
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span className="text-sm">Last Updated: February 10, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FiBook className="w-4 h-4" />
                <span className="text-sm">12 Sections</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                <span className="text-sm">Version 1.1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Navigation */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick Navigation</h2>
              <p className="text-sm text-gray-600">Jump to any section or search for specific terms</p>
            </div>
            <div className="relative w-full md:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  toggleSection(section.id);
                }}
                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 truncate">
                  {section.title.split('. ')[1]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <FiAlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700">
                These Terms and Conditions constitute a legal agreement between you and Sandbox Scholars. 
                By using our services, you agree to be bound by these terms. Please read them carefully. 
                If you have any questions, consult with a legal professional.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-gray-600">{index + 1}</span>
                </div>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    toggleSection(section.id);
                  }}
                  className="text-gray-700 hover:text-blue-600 hover:underline"
                >
                  {section.title}
                </a>
                <span className="text-xs text-gray-500 ml-auto">
                  {new Date(section.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {filteredSections.map((section) => (
            <div 
              key={section.id}
              id={section.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${
                    section.required ? 'bg-blue-100' : 'bg-gray-100'
                  } flex items-center justify-center`}>
                    {section.required ? (
                      <FiCheckCircle className="w-5 h-5 text-blue-600" />
                    ) : (
                      <FiFileText className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {section.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        Updated {new Date(section.lastUpdated).toLocaleDateString()}
                      </span>
                      {section.required && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          Required Reading
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedSections[section.id] ? (
                    <FiChevronUp className="w-5 h-5" />
                  ) : (
                    <FiChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <div className="prose prose-gray max-w-none">
                      {section.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Section {section.title.split('.')[0]}
                      </span>
                    
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Actions</h3>
              <p className="text-sm text-gray-600">Save, print, or download this document for your records</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <FiDownload className="w-4 h-4" />
                <span className="text-sm font-medium">Download PDF</span>
              </button>
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiFileText className="w-4 h-4" />
                <span className="text-sm font-medium">Print Document</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">
            This document was last reviewed and updated on February 10, 2026.
          </p>
          <p>
            For questions about these Terms, please contact{' '}
            <a href="mailto:sandboxscholars.team@gmail.com" className="text-blue-600 hover:underline">
              sandboxscholars.team@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default TermsAndConditions;

//again not sure why it is not updating