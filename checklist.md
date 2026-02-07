# Done:
## Home
- Hero: A small paragraph of text, likely the white rectangular box to be added to the left side of the hero page. ✅
- Key: The page itself seems okay with design, but a little improvement for readability is required. ✅
- Projects_and_Vision ✅
- Our blogs ✅ The all articles section has to be removed, and the image for the magnifying glass is also uncanny. 
- About us & why join us ❌
- workflow ❌
- Meet ✅
- Footer ✅

## Sub-sections
- about us ✅
- projects ✅
- blogs ✅
- Join us ✅
- policy-terms

## Features:
- Dark mode ⚫ FAILED
- Documentary style note (Hundreds of them) for all projects & Blogs 🟡 THE FOLLOWING CODE TO BE ADDED
----------------------------------------------------------
// In your routing
<Route path="/projects/:projectId" element={<ProjectDetail />} />

// ProjectDetail.jsx
import ContentTemplate from '../components/ContentTemplate';
import projectData from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);
  
  return <ContentTemplate {...project} />;
}

// Or use directly with data
<ContentTemplate
  title="Your Project Title"
  type="Project"
  content="Your detailed description here..."
  tags={["React", "Node.js", "MongoDB"]}
  // ... other props
/>
----------------------------------------------------------

## Internal:
- Color palette 🟡









## **Terms and Conditions for Sandbox Scholars**

**Last Updated:** [Date of Publication, e.g., October 26, 2023]

### **1. Acceptance of Terms**
Welcome to Sandbox Scholars ("we," "us," "our," or the "Organization"). By accessing or using our website located at [sandboxscholars.org] (the "Site"), participating in our activities, contributing content, or using our code repositories, you ("you," "your," or "User") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, you must not access or use the Site or any of our resources.

### **2. About Sandbox Scholars**
Sandbox Scholars is a fully student-operated, global online collective. We are focused on creating educational content (including articles and research), conducting bootcamps, managing open-source projects, and sharing narratives and advice relevant to younger generations. **Please note:** Sandbox Scholars is not a registered legal entity (e.g., a corporation, non-profit organization, or formal partnership). We operate as an unincorporated association of individual members. We are not recognized or endorsed by any government or official educational body.

### **3. Important Disclaimers**
*   **Not Professional Advice:** All content provided on the Site and through our activities—including, but not limited to, articles, research, interviews, life advice, and project findings—is for informational, educational, and inspirational purposes only. It does not constitute professional advice of any kind (legal, financial, medical, career, or otherwise). You are solely responsible for your decisions and actions based on any information from our Site.
*   **"As Is" Basis:** The Site and all content, services, and code are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied.
*   **Limitation of Liability:** To the fullest extent permitted by applicable law, Sandbox Scholars and its individual members, contributors, and operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site, reliance on its content, or participation in our activities.
*   **Accuracy:** We do not warrant the accuracy, completeness, or usefulness of any information on the Site. Views expressed by contributors are their own and do not necessarily reflect the views of Sandbox Scholars as a whole.

### **4. Membership & Age Policy**
*   **Eligibility:** The Site and community are open to individuals aged 13 and over. By registering or contributing, you affirm that you meet this age requirement.
*   **Maturity Verification:** For certain participation, including but not limited to active contribution roles, we may employ methods such as voice calls to assess a user's maturity and suitability. This verification is at our sole discretion and does not constitute a guarantee of safety, accuracy, or endorsement. We are not liable for the outcomes of these informal assessments.
*   **Global Participation:** We welcome users from all countries. You are responsible for ensuring your use of the Site complies with your local laws and regulations.

### **5. Intellectual Property (IP) Rights**
*   **Site Content:** Original content published on the Sandbox Scholars Site (text, graphics, logos, design) is the intellectual property of Sandbox Scholars or its contributing members, protected by copyright and other laws.
*   **License for Your Contributions:** By submitting content (articles, code for publication, graphics, etc.) to Sandbox Scholars, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content in connection with the Site and our mission.
*   **Your Retained Rights:** You retain ownership of the copyright in your original work. You are free to publish it elsewhere, provided you acknowledge its initial publication with Sandbox Scholars if you wish.
*   **Open Source Repositories:**
    *   Our software development team maintains public code repositories. The code in each specific repository is governed by its own open-source license (e.g., MIT, Apache, GPL) as stated within that repository's license file.
    *   **Attribution Requirement:** Unless otherwise specified in a repository's specific license, any public use of our original code **must include clear and prominent attribution to "Sandbox Scholars"** with a link to the original repository. Failure to provide proper attribution is a violation of these Terms.

### **6. User Conduct & Contributions**
You agree not to submit, post, or transmit content that:
*   Is unlawful, threatening, abusive, defamatory, libelous, or invasive of another's privacy.
*   Infringes any patent, trademark, trade secret, copyright, or other intellectual property right.
*   Contains false or misleading statements.
*   You do not have the right to make available under any law or contractual relationship.
We reserve the right, but not the obligation, to monitor, edit, or remove any user content at our sole discretion.

### **7. Interviews, Stories & Third-Party Content**
*   **Your Responsibility:** If you submit an interview, personal story, or any content featuring a third party (e.g., an interviewee, a photograph of someone), you represent and warrant that you have obtained all necessary written consents, releases, and permissions from that person (and if a minor, from their parent/legal guardian).
*   **Release Form:** We may require you to provide a signed release form before we publish such content. You agree to cooperate with us in providing proof of consent.

### **8. External Links**
The Site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.

### **9. Termination**
We may suspend or terminate your access to contribute to the Site or participate in our community, at our sole discretion, for any conduct we deem violates these Terms or is harmful to other users, us, or third parties.

### **10. Governing Law & Dispute Resolution**
These Terms shall be governed by and construed in accordance with the laws of the State of [Your State, e.g., Delaware], United States, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the state or federal courts located in [Your County/State, e.g., New Castle County, Delaware], and you hereby consent to personal jurisdiction and venue in such courts.

### **11. Changes to These Terms**
We reserve the right to modify or replace these Terms at any time. The "Last Updated" date at the top will be revised. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.

### **12. Contact Information**
For any questions about these Terms and Conditions, please contact us at: **[Your Public Contact Email Address, e.g., legal@sandboxscholars.org]**

---

## **Immediate Next Steps & Final Recommendations:**

1.  **Fill in the Blanks:** Before publishing, you **must** insert:
    *   Your actual website URL in Section 1.
    *   The date of publication at the top.
    *   Your chosen governing state/location in Section 10. (This is important even for a global organization.)
    *   A dedicated, public contact email in Section 12.

2.  **Create a Privacy Policy:** This is **non-negotiable and legally required**. You can use a reputable generator (like Termly.io or Iubenda) and tailor it to your actual data practices (e.g., what data you collect on the website, in voice calls, from contributors).

3.  **Create a Simple Consent/Release Form:** For interviews and stories, create a basic digital form that includes:
    *   Interviewee's name and signature (or parent's if minor).
    *   A statement granting Sandbox Scholars permission to publish the content.
    *   Confirmation that they understand it will be public.

4.  **Display the Documents:** Create separate pages on your website for "Terms and Conditions" and "Privacy Policy." Link to them clearly in your website footer and anywhere users sign up or submit content.

5.  **Code Repository Attribution:** Ensure every public repository has a clear `LICENSE.md` or `LICENSE.txt` file with the chosen open-source license. Within that file or the `README.md`, explicitly state the attribution requirement as noted in Section 5.

**FINAL DISCLAIMER: THIS TEMPLATE IS PROVIDED AS A STARTING POINT FOR INFORMATIONAL PURPOSES. THE UNINCORPORATED STATUS OF SANDBOX SCHOLARS EXPOSES ITS MEMBERS TO PERSONAL LIABILITY RISKS. CONSULTING WITH A QUALIFIED LEGAL PROFESSIONAL TO REVIEW THIS DOCUMENT AND ADVISE ON RISK MITIGATION AND POTENTIAL FORMALIZATION IS STRONGLY ADVISED BEFORE GOING LIVE.******