import { Project } from '../../types';
import { SegmentBox } from '../SegmentBox';
import experimentsJson from '../../data/experiments.json';
import { Anchor, Group, Text } from '@mantine/core';
import { Fragment, useContext } from 'react';
import { AppContext } from '../../App';

const experiments: Project[] = experimentsJson.map(
  (project) => project as Project,
);

export const ExperimentsBox = () => {
  const { isMobile } = useContext(AppContext);

  if (experiments.length === 0) return null;
  return (
    <SegmentBox label="Experiments">
      {experiments.map((project) => {
        return (
          <Text key={`project-${project.slug}`}>
            {project.link ? (
              <Anchor
                component="a"
                href={project?.link}
                rel="noreferrer"
                target="_blank"
              >
                {project.label}
              </Anchor>
            ) : (
              <Anchor
                component="a"
                underline={false}
                color="dimmed"
                sx={{ cursor: 'default' }}
              >
                {project.label}
              </Anchor>
            )}
            {isMobile ? null : ` | ${project?.shortDescription}`}
          </Text>
        );
      })}
    </SegmentBox>
  );
};
