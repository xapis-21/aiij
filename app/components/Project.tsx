type ProjectCardProps = {
  project: {
    title: string;
    link: string;
    image: string;
    description: string;
  };
};

const Project = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card border border-transparent hover:border-igreen duration-500 flex-shrink-0 w-64 h-72 p-4 bg-white s rounded-md mr-4 flex flex-col items-center group">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-20 h-20 object-cover rounded-full mb-4 gray "
        />
        <h3 className="text-xl font-semibold mb-2 text-center">
          {project.title}
        </h3>
              <p className="text-center text-sm">{project.description}</p>
              <span className="text-igreen text-xs font-semibold underline hidden group-hover:block duration-300 py-4">view on iRoom</span>
      </a>
    </div>
  );
};

export default Project;
