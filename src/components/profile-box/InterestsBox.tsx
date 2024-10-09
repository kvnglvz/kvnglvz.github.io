import { Interest } from '../../types';
import { SegmentBox } from '../SegmentBox';
import interestsJson from '../../data/interests.json';

const interests: Interest[] = interestsJson.map(
  (data) => data as unknown as Interest,
);

export const InterestsBox = () => {
  if (interests.length === 0) return null;
  return (
    <SegmentBox label="Interests" spacing={'md'}>
      {interests &&
        interests.map((interest, interestIdx) => {
          return (
            <div key={`experience-${interestIdx}`}>
              {interest.resources ? (
                <a href={interest.resources} rel="noreferrer" target="_blank">
                  {interest.label}
                </a>
              ) : (
                <span>{`${interest.label}`}</span>
              )}

              <p>{interest.description}</p>
            </div>
          );
        })}
    </SegmentBox>
  );
};
