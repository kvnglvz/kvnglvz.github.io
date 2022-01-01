import { Box, Dialog, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { forwardRef, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectView from '../components/ProjectView';
import { useWindowSize } from '../hooks/useWindowSize';
import { ProfileBox } from '../components/ProfileBox';
import { ProjectPreviewBox } from '../components/ProjectPreviewBox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import projects from '../data/projects.json';

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction='left' 
      ref={ref}
      {...props}
      in={Boolean(props.in)}
    />
  );
});


export const IndexPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectCode = searchParams.get('project');
  const [project, setProject] = useState(null);
  const { width, height } = useWindowSize();

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleClearProject = () => {
    navigate('/');
  };

  useEffect(() => {
    if (projectCode) {
      setProject(projects.find((project) => project.slug === projectCode));
    } else {
      setProject(null);
    }
  }, [projectCode]);

  return (
    <Box
      height={height}
      width={width}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      <Box
        sx={isSmDown ? ({
          width: '100vw',
          p: '5vh',
        }) : ({
          width: '50vw',
          py: '5vh',
          pl: '10vw',
        })}
      >
        <ProfileBox />
      </Box>
      {
        isSmDown ? (
          <Dialog
            PaperComponent={Box}
            PaperProps={{
              sx: {
                bgcolor: 'background.default'
              }
            }}
            maxWidth={false}
            fullWidth
            fullScreen
            open={Boolean(project)}
            onClose={handleClearProject}
            TransitionComponent={Transition}
          >
            <ProjectView
              project={project}
              onClose={handleClearProject}
            />
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
              }
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
                borderLeftStyle: 'solid'
              }}
            >
              <ProjectPreviewBox
                project={project}
                onClose={handleClearProject}
              />
            </Box>
          </Dialog>
        )
      }
    </Box>
  );
};
