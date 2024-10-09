import { Project } from '../../types';
import { SegmentBox } from '../SegmentBox';
import projectsJson from '../../data/projects.json';
import { useContext } from 'react';
import { AppContext } from '../../App';

const projects: Project[] = projectsJson.map((project) => project as Project);

export const ProjectsBox = () => {
  if (projects.length === 0) return null;
  return (
    <SegmentBox label="Projects">
      {projects.map((project, projectIdx) => (
        <div key={`project-${projectIdx}`}>
          {project.link ? (
            <a href={project.link} rel="noreferrer" target="_blank">
              {project.label}
            </a>
          ) : (
            <span>{project.label}</span>
          )}
          {<p>{project?.shortDescription}</p>}
        </div>
      ))}
    </SegmentBox>
  );
};
