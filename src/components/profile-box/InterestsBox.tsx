import { Interest } from '../../types';
import { SegmentBox } from '../SegmentBox';
import interestsJson from '../../data/interests.json';
import { Anchor, Stack, Text, Title } from '@mantine/core';

const interests: Interest[] = interestsJson.map((data) => data as Interest);

export const InterestsBox = () => {
  if (interests.length === 0) return null;
  return (
    <SegmentBox label="Interests" spacing={'md'}>
      {interests &&
        interests.map((interest, interestIdx) => {
          return (
            <Stack key={`experience-${interestIdx}`} spacing={0}>
              {interest.resources ? (
                <Anchor
                  component="a"
                  href={interest.resources}
                  rel="noreferrer"
                  target="_blank"
                >
                  {interest.label}
                </Anchor>
              ) : (
                <Text>{`${interest.label}`}</Text>
              )}

              <Title order={6}>{interest.description}</Title>
            </Stack>
          );
        })}
    </SegmentBox>
  );
};
