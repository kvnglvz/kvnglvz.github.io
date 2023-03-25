import { Experience } from '../../types';
import { SegmentBox } from '../SegmentBox';
import experiencesJson from '../../data/experience.json';
import { Anchor, Group, Stack, Text, Title } from '@mantine/core';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useSearchParams } from 'react-router-dom';

const workExperience: Experience[] = experiencesJson.map(
  (project) => project as Experience,
);

export const WorkExperienceBox = () => {
  const { isMobile } = useContext(AppContext);
  const [, setSearchParams] = useSearchParams();

  if (workExperience.length === 0) return null;
  return (
    <SegmentBox label="Work Experience" spacing="md">
      {workExperience.map((experience, experienceIdx) => {
        const { company, position, duration } = experience;
        return (
          <Stack key={`experience-${experienceIdx}`} spacing={0}>
            <Text>{`${duration}`}</Text>
            <Title order={6}>{`${position} @ ${company}`}</Title>
            {experience.projects.map((project) => (
              <Group spacing="xs" key={`project-${project.slug}`}>
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
            ))}
          </Stack>
        );
      })}
    </SegmentBox>
  );
};
