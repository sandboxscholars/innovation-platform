import React, { useState } from "react";
import { 
  FiTarget, 
  FiZap, 
  FiPenTool, 
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiArrowRight,
  FiChevronRight,
  FiBarChart2
} from "react-icons/fi";

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 1,
      icon: FiTarget,
      title: "Research & Planning",
      description: "Thorough analysis of project requirements, research methodology design, and strategic planning to establish clear objectives and success metrics.",
      duration: "1-2 weeks",
      color: "brandPrimary",
      details: [
        "Problem identification and scope definition",
        "Literature review and market research",
        "Resource allocation and timeline planning",
        "Stakeholder alignment and goal setting"
      ]
    },
    {
      id: 2,
      icon: FiZap,
      title: "Prototype & Testing",
      description: "Rapid prototyping of concepts followed by iterative testing and feedback collection to validate ideas and identify improvement areas.",
      duration: "2-3 weeks",
      color: "brandSecondary",
      details: [
        "Rapid prototype development",
        "User testing and feedback sessions",
        "Iterative design improvements",
        "Technical feasibility assessment"
      ]
    },
    {
      id: 3,
      icon: FiPenTool,
      title: "Development & Creation",
      description: "Systematic implementation of validated concepts into functional solutions using appropriate technologies and development methodologies.",
      duration: "3-6 weeks",
      color: "accentPrimary",
      details: [
        "Full-scale development phase",
        "Code implementation and integration",
        "Quality assurance testing",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      icon: FiCheckCircle,
      title: "Refinement & Delivery",
      description: "Final polishing, optimization, documentation, and deployment of completed projects with user training and support materials.",
      duration: "1-2 weeks",
      color: "accentSecondary",
      details: [
        "Final testing and bug fixes",
        "Documentation and user guides",
        "Deployment and launch preparation",
        "Post-launch support planning"
      ]
    },
  ];

  const workflowStats = [
    { value: "95%", label: "Project Success Rate", icon: FiCheckCircle },
    { value: "4.8/5", label: "Student Satisfaction", icon: FiUsers },
    { value: "30%", label: "Faster Iteration", icon: FiZap },
    { value: "50+", label: "Projects Delivered", icon: FiTrendingUp },
  ];

  // Section REMOVED
}