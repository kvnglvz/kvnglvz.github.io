import { Skill } from '../../types';
import { SegmentBox } from '../SegmentBox';
import skillsJson from '../../data/skills.json';
import { Stack, Text, Title } from '@mantine/core';

const skills: Skill[] = skillsJson.map((project) => project as Skill);

export const StackBox = () => {
  if (skills.length === 0) return null;
  return (
    <SegmentBox label="Skills, tools and what's next" spacing={'sm'}>
      {skills &&
        skills.map((skill, skillIdx) => {
          return (
            <Stack key={`experience-${skillIdx}`} spacing={0}>
              <Text>{skill.primary}</Text>
              <Title order={6}>{skill.secondary}</Title>
            </Stack>
          );
        })}
    </SegmentBox>
  );
};
