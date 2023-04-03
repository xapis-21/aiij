import { Key } from "react";
import Project from "./Project";

type ProjectsProps = {
  projects: any[];
};

const projects = [
  {
    title: "Hard Questions",
    link: "https://www.theiroom.com/program/hard-questions",
    image: "/images/projects/hq.png",
    description:
      "Engaging government officials and NGO leaders in candid discussions and addressing public concerns.",
  },
  {
    title: "Social Justice",
    link: "https://www.theiroom.com/program/social-justice",
    image: "/images/projects/social-justice.png",
    description:
      "Uncovering stories of inequality, discrimination, and injustice in our society.",
  },
  {
    title: "Human Rights",
    link: "https://www.theiroom.com/program/human-rights",
    image: "/images/projects/human-rights.png",
    description:
      "Exposing violations and advocating for the protection of human rights",
  },
  {
    title: "Accountability",
    link: "https://www.theiroom.com/program/accountability",
    image: "/images/projects/accountability.png",
    description:
      "Holding power to account and promoting transparency in government and institutions",
  },
  {
    title: "Climate Change and Environmental Crime",
    link: "https://www.theiroom.com/program/climate-change-and-environmental-crime",
    image: "/images/projects/climate-change.png",
    description:
      "Exposing illegal activities that harm our planet and its resources.",
  },
  // Add more projects here
];

const ProjectCards = () => {
  return (
    <div className="projects-section max-w-[1280px] mx-auto">
      <div
        className="flex flex-col items-start
        "
      >
        <h1 className="text-center text-6xl font-bold mb-4">Our Projects</h1>
        <h2 className="text-4xl max-w-[600px]">
          We focus on critical areas where investigative journalism can make a
          real impact, shedding light on pressing issues and giving a voice to
          the voiceless
        </h2>
      </div>
      <div className="projects-container flex space-x-4 pb-4 py-8">
        {projects.map((project: any, index: Key | null | undefined) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
