/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, Fab, useMediaQuery, Typography, MobileStepper, Button, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { KeyboardArrowLeft,  KeyboardArrowRight, Brightness7, Brightness4 as Brightness4Icon, Close as CloseIcon } from '@material-ui/icons'
import { find, isArray } from 'lodash';
import { useRouter } from 'next/router';
import projects from '../data/projects.json';
import useWindowResize from '../hooks/useWindowResize';

const useStyles = makeStyles((theme) => ({
  fabRoot: {
    height: theme.spacing(3),
    width: theme.spacing(3),
    minHeight: 0,
  },
  fab: {
    fontSize: '0.4rem',
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2)
  },
  root: {
    position: 'relative',
  },
  stepper: {

  }
}))

const ProjectView = (props) => {
  const { onClose } = props;
  const router = useRouter()
  const { project } = router.query;
  const [projectDetails, setProjectDetails] = useState(null);
  const { height, width } = useWindowResize();

  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const viewHeight = isXs ? height : (height - (height * 0.8));


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

  useEffect(() => {
    if (project) {
      const projectDetails = find(projects, ['slug', project]);
      if (projectDetails) {
        setProjectDetails(projectDetails);
      } else {
        onClose();
      }
    }
  }, [onClose, project]);

  const hasGallery = projectDetails?.gallery && isArray(projectDetails.gallery) && projectDetails.gallery.length > 0

  return (
    <Box className={classes.root}>
      <Grid container>
        {
          hasGallery && (
            <Grid item md={7} sm={12} xs={12}>
              {
                isArray(projectDetails?.gallery) && (
                  <Box display='flex' flexDirection='column' overflow='hidden'>
                    <img
                      key={'project-image'}
                      alt={`project-image-${activeStep}`}
                      src={projectDetails.gallery[activeStep]}
                      height={isXs ? 600 : 500}
                      style={{
                        imageRendering: 'crisp-edges',
                        objectFit:'scale-down',
                        objectPosition:'center center',
                      }}
                    />
                    <MobileStepper
                      variant='dots'
                      steps={projectDetails.gallery.length || 0}
                      position='static'
                      activeStep={activeStep}
                      nextButton={
                        <Button size='small' onClick={handleNext} disabled={activeStep === (projectDetails.gallery.length - 1)}>
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
                )
              }
            </Grid>
          )
        }
        <Grid item md={hasGallery ? 5 : 12} sm={12} xs={12}>
          <Box m={2} mt={isXs ? 2 : 6}>
            <Typography variant='h5'>
              { projectDetails?.label }
            </Typography>
            <Typography variant='body2'>
              {`Technology: ${projectDetails?.tech}`}
            </Typography>
            <Divider />
            <Box pt={2} pb={2}>
              <Typography variant='body1'>
                {projectDetails?.description}
              </Typography>
            </Box>
            <Divider />
            <Typography paragraph variant='body2'>
              {`Responsibility: ${projectDetails?.responsibility}`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Fab
        classes={{
          root: classes.fabRoot
        }}
        size='small'
        onClick={onClose}
        className={classes.fab}
      >
        <CloseIcon />
      </Fab>
    </Box>
  )
};

export default ProjectView;