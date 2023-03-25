import { Project } from '../../types';
import { SegmentBox } from '../SegmentBox';
import experimentsJson from '../../data/experiments.json';
import { Anchor, Group, Text } from '@mantine/core';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useSearchParams } from 'react-router-dom';

const experiments: Project[] = experimentsJson.map(
  (project) => project as Project,
);

export const ExperimentsBox = () => {
  const { isMobile } = useContext(AppContext);
  const [, setSearchParams] = useSearchParams();

  if (experiments.length === 0) return null;
  return (
    <SegmentBox label="Experiments">
      {experiments.map((project, projectIdx) => {
        return (
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
              <Anchor
                component="button"
                onClick={() =>
                  setSearchParams({
                    project: project.slug,
                  })
                }
              >
                {project.label}
              </Anchor>
            )}
            {!isMobile ? (
              <Text transform="lowercase">{project?.shortDescription}</Text>
            ) : null}
          </Group>
        );
      })}
    </SegmentBox>
  );
};
