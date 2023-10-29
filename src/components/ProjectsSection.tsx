"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectsTag";

const projectsData = [
  {
    id: 1,
    title: "Dashboard(main) Portfolio Website",
    description: "Project 1 description",
    image: "/Images/dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/dashboard",
    previewUrl: "https://dashboard-rust-five.vercel.app/",
  },
  {
    id: 2,
    title: "Code Portfolio Application",
    description: "Project 2 description",
    image: "/Images/code.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/Code",
    previewUrl: "https://code-git-master-vlas-pravsha.vercel.app",
  },
  {
    id: 3,
    title: "CloudCamp Portfolio Website",
    description: "Project 3 description",
    image: "/Images/cloudCamp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/CloudCamp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Abz Portfolio Website",
    description: "Project 4 description",
    image: "/Images/abz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vlas-Pravsha/abz",
    previewUrl: "https://abz.vercel.app/",
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
