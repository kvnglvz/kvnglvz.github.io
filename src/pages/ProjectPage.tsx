import '../css/ProfileBox.css';
import { useContext } from 'react';

import { AppContext } from '../App';
import AnimatedLayout from '@/components/AnimatedLayout';
import { ProjectsBox } from '@/components/profile-box/ProjectsBox';
import { WorkExperienceBox } from '@/components/profile-box/WorkExperienceBox';
import { ExperimentsBox } from '@/components/profile-box/ExperimentsBox';

export const ProjectPage = () => {
  const { colorScheme } = useContext(AppContext);

  return (
    <AnimatedLayout>
      <WorkExperienceBox />
      <ExperimentsBox />

      <ProjectsBox />
    </AnimatedLayout>
  );
};
