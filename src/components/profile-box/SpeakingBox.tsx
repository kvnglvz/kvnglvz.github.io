import { PublicSpeaking } from '../../types';
import { SegmentBox } from '../SegmentBox';
import publicSpeakingJson from '../../data/publicSpeaking.json';

const publicSpeaking: PublicSpeaking[] = publicSpeakingJson.map(
  (publicSpeaking) => publicSpeaking as unknown as PublicSpeaking,
);

export const SpeakingBox = () => {
  if (publicSpeaking.length === 0) return null;
  return (
    <SegmentBox label="Public speaking" spacing={'md'}>
      {publicSpeaking.map((publicSpeaking, publicSpeakingIdx) => {
        return (
          <div key={`experience-${publicSpeakingIdx}`}>
            <span>{`${publicSpeaking.date}`}</span>
            <p>
              {publicSpeaking?.resources ? (
                <a
                  href={publicSpeaking.resources}
                  rel="noreferrer"
                  target="_blank"
                >
                  {publicSpeaking.label}
                </a>
              ) : (
                publicSpeaking.label
              )}
              {` — ${publicSpeaking.description}`}
            </p>
          </div>
        );
      })}
    </SegmentBox>
  );
};
