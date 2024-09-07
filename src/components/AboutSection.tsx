"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js/React</li>
        <li>JavaScript/TypeScript</li>
        <li>Supabase/Firebase</li>
        <li>Rest/GraphQl</li>
        <li>Tailwind/Scss</li>
        <li>Materil-ui/ShadCn</li>
        <li>Jest/React Testing Library/Storybook/Playwright</li>
        <li>OOP/SOLID/DRY/KISS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Odessa Polytechnic National University</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/about-image.png"
          alt="About Images"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a proficient front-end developer with expertise in building dynamic and scalable web applications using React and Next.js.
          I am highly skilled in TypeScript and JavaScript, utilizing modern state management solutions like Redux Toolkit.
          My experience spans across API integrations using REST and GraphQL, along with real-time data management through Firebase and Supabase.
          I have a strong foundation in styling using Tailwind CSS, SCSS, and UI frameworks like Material-UI and ShadCN.
          I follow best coding practices, including OOP principles like SOLID, DRY, and KISS, ensuring maintainable and efficient code.
          Additionally, I excel in testing with Jest, React Testing Library, Storybook, and Playwright.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
