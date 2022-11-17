import { useEffect, useState } from 'react';
// import ProjectView from '../components/ProjectView';
import { ProfileBox } from '../components/ProfileBox';
// import { ProjectPreviewBox } from '../components/ProjectPreviewBox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import projectsJson from '../data/projects.json';
import experimentsJson from '../data/experiments.json';
import { Project } from '../interfaces/project.interface';
import { Divider, Modal, Stack } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { ProjectView } from '../components/ProjectView';

const projects: Project[] = projectsJson.map((project) => project as any);
const experiments: Project[] = experimentsJson.map(
  (experiment) => experiment as any,
);

export const IndexPage = () => {
  const [searchParams] = useSearchParams();
  const { height } = useViewportSize();
  const navigate = useNavigate();

  const projectCode = searchParams.get('project');
  const experimentCode = searchParams.get('experiment');

  const [project, setProject] = useState<Project | undefined>(undefined);

  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleClearProject = () => {
    navigate('/');
  };

  useEffect(() => {
    if (projectCode) {
      const project = projects.find((project) => project.slug === projectCode);
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
      {/* {isSmDown ? (
        <Dialog
          PaperComponent={Box}
          PaperProps={{
            sx: {
              bgcolor: 'background.default',
            },
          }}
          maxWidth={false}
          fullWidth
          fullScreen
          open={Boolean(project)}
          onClose={handleClearProject}
          TransitionComponent={Transition}
        >
          <ProjectView project={project} onClose={handleClearProject} />
        </Dialog>
      ) : (
        <Dialog
          PaperComponent={Box}
          PaperProps={{
            sx: {
              p: 0,
              m: 0,
              position: 'fixed',
              right: 0,
              minHeight: '100vh',
              height: '100vh',
              maxHeight: '100vh',
            },
          }}
          maxWidth={false}
          open={Boolean(project)}
          onClose={handleClearProject}
          TransitionComponent={Transition}
        >
          <Box
            sx={{
              bgcolor: 'background.default',
              width: '65vw',
              minHeight: '100vh',
              overflowY: 'scroll',
              borderLeftColor: 'divider',
              borderLeftWidth: '1pt',
              borderLeftStyle: 'solid',
            }}
          >
            <ProjectPreviewBox project={project} onClose={handleClearProject} />
          </Box>
        </Dialog>
      )} */}
    </Stack>
  );
};
