import { Skill } from '../../types';
import { SegmentBox } from '../SegmentBox';
import skillsJson from '../../data/skills.json';

const skills: Skill[] = skillsJson.map((project) => project as Skill);

export const StackBox = () => {
  if (skills.length === 0) return null;
  return (
    <SegmentBox label="Skills, tools and what's next" spacing={'sm'}>
      {skills &&
        skills.map((skill, skillIdx) => {
          return (
            <div key={`experience-${skillIdx}`}>
              <span>{skill.primary}</span>
              <p>{skill.secondary}</p>
            </div>
          );
        })}
    </SegmentBox>
  );
};
