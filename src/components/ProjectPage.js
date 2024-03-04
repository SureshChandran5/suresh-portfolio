import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

const ProjectPage = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={project.id} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourcecode && (
        <a
          href={project.sourcecode}
          aria-label="source code"
          className="link link--icon"
        >
          <FaGithub />
        </a>
      )}

      {project.preview && (
        <a
          href={project.preview}
          aria-label="live preview"
          className="link link--icon"
        >
          <MdLaunch />
        </a>
      )}
    </div>
  );
};

export default ProjectPage;
