import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Close as CloseIcon,
  VideoLibrary,
  Collections,
  FilterNone,
} from '@mui/icons-material';
import {
  AppBar,
  Button,
  Divider,
  MobileStepper,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

export const ProjectPreviewBox = (props) => {
  const { project, onClose } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const navigationRef = useRef();

  const handleNext = () => {
    if (activeStep === project.gallery.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const hasGallery =
    project?.gallery && project.gallery?.map && project.gallery.length > 0;

  const navigationKeyHandler = (event) => {
    if (event.code === 'ArrowRight') handleNext();
    if (event.code === 'ArrowLeft') handleBack();
  };

  const focusOnNavInput = () => {
    if (navigationRef.current) navigationRef.current.focus();
  };

  if (!project) {
    return <Navigate to={'/'} />;
  }

  return (
    <Box onClick={focusOnNavInput}>
      <AppBar
        color="inherit"
        position="sticky"
        sx={{
          bgcolor: 'background.default',
        }}
        elevation={0}
      >
        <Toolbar
          disableGutters
          sx={{
            px: 1,
          }}
        >
          <Button
            startIcon={<CloseIcon />}
            disableFocusRipple
            disableTouchRipple
            disableRipple
            onClick={onClose}
          >
            or Press [esc] to close
          </Button>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h4">{project.label}</Typography>
        <Typography variant="body2" paragraph>
          <span>
            Platform: <strong>{project.platform}</strong> |{' '}
          </span>
          <span>
            Technology: <strong>{project.tech}</strong> |{' '}
          </span>
          <span>
            Responsibility: <strong>{project.responsibility}</strong>
          </span>
        </Typography>
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
        <Paper square variant="outlined">
          {hasGallery ? (
            <Fragment>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {project.gallery.map((image, imageIdx) => (
                  <img
                    key={`project-image-${imageIdx}`}
                    alt={`${project.slug}-image-${imageIdx}`}
                    src={image}
                    width={'100%'}
                    height={500}
                    style={{
                      imageRendering: 'crisp-edges',
                      objectFit: 'scale-down',
                      objectPosition: 'center center',
                    }}
                  />
                ))}
              </SwipeableViews>
              <input
                style={{ border: 0, padding: 0, height: 0, width: 0 }}
                autoFocus
                autoComplete="none"
                onKeyDown={navigationKeyHandler}
                ref={navigationRef}
              />
              <MobileStepper
                variant="dots"
                steps={project.gallery.length || 0}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === project.gallery.length - 1}
                    endIcon={
                      theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )
                    }
                  >
                    Next
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    startIcon={
                      theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )
                    }
                  >
                    Back
                  </Button>
                }
              />
            </Fragment>
          ) : (
            <Stack
              height={'50vh'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={2}
            >
              <Stack
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
              >
                <FilterNone
                  color="disabled"
                  sx={{
                    fontSize: '4.16rem',
                  }}
                />
                <Collections
                  color="disabled"
                  sx={{
                    fontSize: '4.5rem',
                  }}
                />
                <VideoLibrary
                  color="disabled"
                  sx={{
                    fontSize: '4.5rem',
                  }}
                />
              </Stack>
              <Typography align="center" variant="body1">
                No preview for this project.
              </Typography>
            </Stack>
          )}
        </Paper>
      </Box>
    </Box>
  );
};
