"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectsTag";

const projectsData = [
  {
    id: 1,
    title: "Custom Srm - My main Project",
    description:
      "React, Next, Tailwind, Typescript, Supabase, React-hook-form, zod",
    image: "/Images/srm.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/Project",
    previewUrl: "",
  },
  {
    id: 2,
    title: "CSS Dashboard Portfolio Website",
    description:
      "React, Next, Sccs, Typescript, Redux-toolkit, React-hook-form, Chart.js",
    image: "/Images/dashboard.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/dashboard",
    previewUrl: "https://dashboard-rust-five.vercel.app/",
  },
  {
    id: 3,
    title: "Custom-Popup",
    description: "React, Next, Tailwind, Typescript",
    image: "/Images/popup.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/custom-popup",
    previewUrl: "https://vite-project-seven-gamma.vercel.app/",
  },
  {
    id: 4,
    title: "Quiz",
    description: "Next, React, Typescript, Tailwind",
    image: "/Images/quiz.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/lune-test",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
