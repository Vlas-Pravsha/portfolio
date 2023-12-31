"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectsTag";

const projectsData = [
  {
    id: 1,
    title: "Dashboard(main) Portfolio Website",
    description:
      "React, Next, Sccs, JavaScript, Typescript, Redux-toolkit, React-hook-form, Chart.js",
    image: "/Images/dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/dashboard",
    previewUrl: "https://dashboard-rust-five.vercel.app/",
  },

  {
    id: 2,
    title: "Vue-sneakers",
    description: "Vue, Vite, Tailwind, JavaScript",
    image: "/Images/vueSneakersjpg.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/vue-sneakers",
    previewUrl: "https://vue-sneakers-vlas-pravsha.vercel.app/",
  },
  {
    id: 3,
    title: "Abz Portfolio Website",
    description: "React, Next, Sccs, JavaScript, Typescript, React-hook-form",
    image: "/Images/abz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/abz",
    previewUrl: "https://abz.vercel.app/",
  },
  {
    id: 4,
    title: "Code Portfolio Application",
    description: "Next, React, JavaScript, Typescript, Scss",
    image: "/Images/code.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/Code",
    previewUrl: "https://code-git-master-vlas-pravsha.vercel.app",
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
