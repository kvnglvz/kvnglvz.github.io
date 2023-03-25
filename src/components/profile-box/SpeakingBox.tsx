import { PublicSpeaking } from '../../types';
import { SegmentBox } from '../SegmentBox';
import publicSpeakingJson from '../../data/publicSpeaking.json';
import { Stack, Text } from '@mantine/core';

const publicSpeaking: PublicSpeaking[] = publicSpeakingJson.map(
  (publicSpeaking) => publicSpeaking as unknown as PublicSpeaking,
);

export const SpeakingBox = () => {
  if (publicSpeaking.length === 0) return null;
  return (
    <SegmentBox label="Public speaking" spacing={'md'}>
      {publicSpeaking &&
        publicSpeaking.map((publicSpeaking, publicSpeakingIdx) => {
          return (
            <Stack key={`experience-${publicSpeakingIdx}`} spacing={0}>
              <Text>{`${publicSpeaking.date}`}</Text>
              <Text
                variant={publicSpeaking.resources ? 'link' : 'text'}
                component={publicSpeaking.resources ? 'a' : 'text'}
                href={publicSpeaking.resources}
                rel="noreferrer"
                target="_blank"
              >
                {`${publicSpeaking.label}`}
              </Text>
              <Text size={14}>{publicSpeaking.description}</Text>
            </Stack>
          );
        })}
    </SegmentBox>
  );
};
