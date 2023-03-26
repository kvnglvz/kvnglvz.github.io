import { Project } from '../../types';
import { SegmentBox } from '../SegmentBox';
import projectsJson from '../../data/projects.json';
import { Anchor, Group, Text } from '@mantine/core';
import { useContext } from 'react';
import { AppContext } from '../../App';

const projects: Project[] = projectsJson.map((project) => project as Project);

export const ProjectsBox = () => {
  const { isMobile } = useContext(AppContext);

  if (projects.length === 0) return null;
  return (
    <SegmentBox label="Projects">
      {projects.map((project, projectIdx) => (
        <Group spacing="xs" key={`project-${projectIdx}`}>
          {project.link ? (
            <Anchor
              component="a"
              href={project.link}
              rel="noreferrer"
              target="_blank"
            >
              {project.label}
            </Anchor>
          ) : (
            <Text>{project.label}</Text>
          )}
          {!isMobile ? (
            <Text transform="lowercase">{project?.shortDescription}</Text>
          ) : null}
        </Group>
      ))}
    </SegmentBox>
  );
};
