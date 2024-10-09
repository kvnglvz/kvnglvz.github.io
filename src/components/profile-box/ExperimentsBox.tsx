import { Project } from '../../types';
import { SegmentBox } from '../SegmentBox';
import experimentsJson from '../../data/experiments.json';

const experiments: Project[] = experimentsJson.map(
  (project) => project as Project,
);

export const ExperimentsBox = () => {
  if (experiments.length === 0) return null;
  return (
    <SegmentBox label="Experiments">
      {experiments.map((project) => {
        return (
          <p key={`project-${project.slug}`}>
            {project.link ? (
              <a href={project?.link} rel="noreferrer" target="_blank">
                {project.label}
              </a>
            ) : (
              project.label
            )}
            {` — ${project?.shortDescription}`}
          </p>
        );
      })}
    </SegmentBox>
  );
};
