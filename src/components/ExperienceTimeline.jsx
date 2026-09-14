"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./styling/ExperienceTimeline.css";

const allExperiences = [
  {
    year: "May 2026 - August 2026",
    title: "Software Development Intern",
    subtitle: "Amazon - AFFS ARS Team",
    description: [
      "Implemented a serverless Java automation system using AWS Lambda, DynamoDB, and EventBridge to replace an unscalable manual scheduling process across ∼74000 annual schedules for Amazon’s accountants",
      "Built resilient high-volume event processing with SQS and CloudWatch, using per-message failure reporting, retry logic, and a dead-letter queue to isolate and monitor failures",
      "Developed a React-based review UI enabling 160+ accountants to approve, reject, or edit computed schedules before activation, while maintaining auditability of all actions",
    ],
    type: "job",
  },
  {
    year: "May 2025 - May 2026",
    title: "Applied AI Lead",
    subtitle: "UBC Agrobot Engineering Design Team",
    description: [
      "Lead 20 engineers developing real-time vision systems for autonomous robotics, integrating advanced deep learning models into ROS for accurate crop detection",
      "Directed three machine learning projects, applying object localization to identify crops, image segmentation to distinguish crop from weed, and reinforcement learning for autonomous navigation",
    ],
    type: "job",
  },
  {
    year: "Jan 2025 - Jan 2026",
    title: "Full Stack Software Engineer Coop",
    subtitle: "Dialpad - CoreUX Team",
    description: [
      "Develop backend functionality in Python allowing custom logo uploads, seamless retrieval of previous media in chats, and scalable pagination to enhance user experience",
      "Collaborate with designers to develop Vue.js components by building reusable UI elements and managing state efficiently with Pinia, while ensuring responsive design across all devices to enhance the overall user experience",
      "Streamline performance for API endpoints by optimizing logic and removing redundant response parameters, decreasing response times by 80%",
    ],
    type: "job",
  },
  {
    year: "Sep 2024 - May 2025",
    title: "Machine Learning Engineer",
    subtitle: "UBC Agrobot Engineering Design Team",
    description: [
      "Build an autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection",
      "Create advanced machine learning models that address a variety of AgroBot's tasks such as detecting maize, weeds, and blueberry clusters, and implementing machine vision in the Robot Operating System (ROS)",
      "Gaining hands-on experience in developing machine learning models through end-to-end processes, from data collection to model deployment, within a collaborative environment",
    ],
    type: "job",
  },
  {
    year: "May 2024 - Aug 2024",
    title: "Software Developer Intern",
    subtitle: "University of Calgary IT Department",
    description: [
      "Create a dynamic website to facilitate the organization, share-ability, and storage of audit reports using HTML, CSS, and JavaScript ",
      "Implement authentication mechanisms to enforce role-based access control, safeguarding sensitive reports and limiting access exclusively to authorized personnel",
      "Utilize data from internal audit's staging database environment to refresh, update, and develop dashboards in PowerBI", 
    ],
    type: "job",
  },
  {
    year: "Feb 2023 - May 2024",
    title: "Software Developer",
    subtitle: "UBC Launchpad",
    description: [
      "Collaborate with an interdisciplinary team of developers and designers to ideate and build a project",
      "Employing industry-standard tools to address external stakeholders' challenges and bridge market gaps by creating interactive, responsive, and functional products",
      "Acquiring hands-on experience and refining industry collaboration skills with tools like GitHub and application of agile development with iterative design and cross-functional collaboration",
    ],
    type: "job",
  },
  {
    year: "Sep 2022 - Present",
    title: "University of British Columbia",
    subtitle: "Computer Engineering",
    description: [
      "Intermediate Data Structures and Algorithms (CPSC320), Data Structures and Algorithms (CPSC221)", 
      "Software Construction I (CPEN221) & II (CPEN320)", 
      "Introduction to Relational Databases (CPSC304)", 
      "Introduction to Probability (STAT302)",
    ],
    type: "education",
  },
  {
    year: "May 2024 - Aug 2024",
    title: "Udemy Certifications",
    subtitle: "Online Courses",
    description: [
      "Machine Learning A-Z (Python & R).",
      "Web Development Bootcamp 2024.",
      "Artificial Intelligence A-Z 2024.",
    ],
    type: "education",
  },
];

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState("job");

  const filteredExperiences = allExperiences.filter((item) => item.type === filter);

  return (
    <motion.section
      id="experience"
      className="timeline-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <div className="filter-buttons">
        <button className={`filter-button ${filter === "job" ? "active" : ""}`} onClick={() => setFilter("job")}>
          Experience
        </button>
        <button
          className={`filter-button ${filter === "education" ? "active" : ""}`}
          onClick={() => setFilter("education")}
        >
          Education
        </button>
      </div>

      <div className="timeline">
        <div className="timeline-line-desktop" />
        <div className="timeline-line-mobile" />

        {filteredExperiences.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content-wrapper">
              <div className="timeline-date">{item.year}</div>
              <div className="timeline-content-box">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <ul className="timeline-description">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
