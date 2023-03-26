import { useEffect, useState } from 'react';
import { ProfileBox } from '../components/ProfileBox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import projectsJson from '../data/projects.json';
import experimentsJson from '../data/experiments.json';
import { Stack } from '@mantine/core';
import { ProjectView } from '../components/ProjectView';
import { Project } from '../types';

const projects: Project[] = projectsJson.map((project) => project as any);
const experiments: Project[] = experimentsJson.map(
  (experiment) => experiment as any,
);

export const IndexPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const projectCode = searchParams.get('project');
  const experimentCode = searchParams.get('experiment');

  const [project, setProject] = useState<Project>();

  const handleClearProject = () => {
    navigate('/');
  };

  useEffect(() => {
    if (projectCode) {
      const project = projects.find((project) => project.slug === projectCode);
      console.log('projectCode', projectCode, 'project', project);
      setProject(project);
    } else if (experimentCode) {
      const experiment = experiments.find(
        (experiment) => experiment.slug === experimentCode,
      );
      setProject(experiment);
    } else {
      setProject(undefined);
    }
  }, [projectCode, experimentCode]);

  return (
    <Stack>
      <ProfileBox />
      <ProjectView project={project} onClose={handleClearProject} />
    </Stack>
  );
};
