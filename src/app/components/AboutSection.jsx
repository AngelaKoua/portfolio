"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ecole Centrale Casablanca</li>
        <li>International Institute for Water and Environmental Engineering (2ie) </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://coursera.org/verify/IS7VQPEUK3AB" target="_blank">Agile project management of Google - Coursera</a></li>
        <li><a href="https://coursera.org/verify/RTE2GWVXT544" target="_blank">Microsoft data analysis - Coursera</a></li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/8SAGJ42TNAVX" target="_blank">Bootstrap 5 - Coursera</a></li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-center py-12 px-4 xl:gap-20 sm:py-20 xl:px-20">
        <div className="relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
           <Image 
             src="/images/about-image.png" 
             width={550} 
             height={550} 
             className="rounded-2xl border border-white/10 shadow-2xl relative"
             alt="About Me"
           />
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed mb-10">
            I am a Data Science and AI enthusiast with a passion for creating data-driven solutions and interactive analytical tools. 
            I have extensive experience working with <span className="text-white font-medium">Python, Flask, Next.js, and Machine Learning</span>. 
            I am a quick learner, always looking to expand my knowledge in areas like <span className="text-primary-400">predictive maintenance</span> and <span className="text-secondary-400">Large Language Models (LLMs)</span>.
            I thrive in collaborative environments and am excited to develop innovative applications that leverage real-time data visualization and intelligent automation.
          </p>
          <div className="flex flex-row justify-start gap-4 mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="min-h-[200px] border-t border-white/5 pt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
