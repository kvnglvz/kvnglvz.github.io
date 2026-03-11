import '../css/ProfileBox.css';
import { useContext } from 'react';

import { AppContext } from '../App';
import AnimatedLayout from '@/components/AnimatedLayout';
import { WorkExperienceBox } from '@/components/profile-box/WorkExperienceBox';
import { ProjectsBox } from '@/components/profile-box/ProjectsBox';
import { ExperimentsBox } from '@/components/profile-box/ExperimentsBox';
import { StackBox } from '@/components/profile-box/StackBox';
import { SpeakingBox } from '@/components/profile-box/SpeakingBox';
import { SegmentBox } from '@/components/SegmentBox';

export const IndexPage = () => {
  const { colorScheme } = useContext(AppContext);

  return (
    <AnimatedLayout>
      <section>
        <p className="description">
          <span>
            is a <b>web developer</b>
          </span>
          <span>
            working on the <b>backend</b>
          </span>
          <span>
            but a <b>design noob</b>.
          </span>
        </p>
      </section>

      <SegmentBox label="Today">
        <p>
          I am a web developer for{' '}
          <a
            className="link arcanys"
            target="_blank"
            rel="noreferrer"
            href="https://www.arcanys.com/"
          >
            Arcanys
          </a>
          , working on different projects. I like to build high performant
          applications.
        </p>
        <p>
          Previously, I worked at{' '}
          <a
            className="link valhalla"
            target="_blank"
            rel="noreferrer"
            href="https://www.valhalla.team/"
          >
            Valhalla
          </a>
          ,{' '}
          <a
            className="link nms"
            target="_blank"
            rel="noreferrer"
            href="https://nms.ph/"
          >
            NMS Philippines
          </a>
          , and Animal Cracker Games.
        </p>
        <p>
          I hope to develop better interactive software for people to cultivate
          and share ideas, and to meaningfully express what brings them joy.
        </p>
      </SegmentBox>

      <SegmentBox label="Goal">
        {/* I hope to develop performant applications that */}
        {/* Towards that goal, I am a generalist and care deeply about systems,
        which form the fundamental building blocks of our applications; and
        interaction design, how we use and live with computers that are all
        around us. */}
        <p>I am also the creative director at a local church.</p>
        <p>Other interests: Minimalism, Woodworking, Furniture, Architecture</p>
      </SegmentBox>

      {/*<StackBox />*/}
      {/*<SpeakingBox />*/}
      {/*<div>
        <img
          className={colorScheme === 'light' ? 'ImageGray' : 'ImageGray'}
          alt="kevin's picture"
          src="/images/profpic.jpg"
          width={'100%'}
          style={{
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        />
      </div>*/}
    </AnimatedLayout>
  );
};
