import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, Typography, MobileStepper, Button, Divider, Toolbar, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, Close as CloseIcon } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { Navigate } from 'react-router-dom';

const ProjectView = (props) => {
  const { project, onClose } = props;

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // useEffect(() => {
  //   if (!project && typeof onClose === 'function') onClose();
  // }, [onClose, project]);

  const hasGallery = (
    project?.gallery
    && project.gallery?.map
    && project.gallery.length > 0
  );

  if (!project) {
    return <Navigate to={'/'} />;
  }

  return (
    <Fragment>
      <Toolbar
        variant='dense'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'    
        }}
      >
        <IconButton
          size='small'
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Grid container>
        {
          hasGallery && (
            <Grid item md={7} sm={12} xs={12}>
              <Box display='flex' flexDirection='column' overflow='hidden'>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {
                    project.gallery.map((image, imageIdx) => (
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
                    ))
                  }
                </SwipeableViews>
                <MobileStepper
                  variant='dots'
                  steps={project.gallery.length || 0}
                  position='static'
                  activeStep={activeStep}
                  nextButton={
                    <Button size='small' onClick={handleNext} disabled={activeStep === (project.gallery.length - 1)}>
                      Next
                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                  }
                  backButton={
                    <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                      Back
                    </Button>
                  }
                />
              </Box>
            </Grid>
          )
        }
        <Grid item md={hasGallery ? 5 : 12} sm={12} xs={12}>
          <Box m={2}>
            <Typography variant='h5'>
              { project?.label }
            </Typography>
            <Typography variant='body2'>
              {`Platform: ${project?.platform}`}
            </Typography>
            <Divider />
            <Box pt={2} pb={2}>
              <Typography variant='caption'>
                {`Technology: ${project?.tech}`}
              </Typography>
              <Typography variant='body1'>
                {project?.description}
              </Typography>
            </Box>
            <Divider />
            <Typography paragraph variant='body2'>
              {`Responsibility: ${project?.responsibility}`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ProjectView;