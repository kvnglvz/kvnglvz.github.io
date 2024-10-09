import { Fragment } from 'react';
import { Experience } from '../../types';
import { SegmentBox } from '../SegmentBox';
import experiencesJson from '../../data/experience.json';

const workExperience: Experience[] = experiencesJson.map(
  (project) => project as Experience,
);

export const WorkExperienceBox = () => {
  if (workExperience.length === 0) return null;
  return (
    <SegmentBox label="Work">
      {workExperience.map((experience, experienceIdx) => {
        const { company, position, duration, work } = experience;
        return (
          <div key={`experience-${experienceIdx}`}>
            <p>
              {`${duration} - ${position} @ ${company}`}
              {experience.projects?.map((project) => (
                <span key={`project-${project.slug}`}>
                  {project.link ? (
                    <a href={project?.link} rel="noreferrer" target="_blank">
                      ${project.label}&nbsp;
                    </a>
                  ) : (
                    `${project.label} `
                  )}
                </span>
              ))}
            </p>
            <span>{work}</span>
          </div>
        );
      })}
    </SegmentBox>
  );
};
