import { Social } from '../../types';
import { SegmentBox } from '../SegmentBox';
import socialsJson from '../../data/socials.json';
import { Anchor } from '@mantine/core';

const socials: Social[] = socialsJson.map((social) => social as Social);

export const SocialsBox = () => {
  if (socials.length === 0) return null;
  return (
    <SegmentBox label="Socials">
      {socials &&
        socials.map((social, socialIdx) => {
          const { label, link } = social;
          return (
            <Anchor
              key={`socials-${socialIdx}`}
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              {label}
            </Anchor>
          );
        })}
    </SegmentBox>
  );
};
