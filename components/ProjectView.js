import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, Fab, useMediaQuery, Typography, MobileStepper, Button, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { KeyboardArrowLeft,  KeyboardArrowRight, Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Close as CloseIcon } from '@material-ui/icons'
// import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize'
import SwipeableViews from 'react-swipeable-views';
import { find, isArray } from 'lodash';
import { useRouter } from 'next/router';
import projects from '../data/projects.json';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1)
  },
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    height: '100%'
  },

  stepper: {

  }
}))

const ProjectView = (props) => {
  const { onClose } = props;
  const router = useRouter()
  const { project } = router.query;
  const [projectDetails, setProjectDetails] = useState(null);

  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
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

  {/* <Image
        alt={`project-image-${imageIdx}`}
        src={image}
        width='500vw'
        height={isSmDown ? '700vh' : '500vh'}
        objectFit='contain'
        objectPosition='50% 50%'
        quality={100}
      /> */}

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item md={7} sm={12}>
          {
            isArray(projectDetails?.gallery) && (
              <Fragment>
                <Box display='flex' justifyContent='center'>
                  <SwipeableViews
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {
                      projectDetails.gallery.map((image, imageIdx) => (
                        <Box key={`image-${imageIdx}`} display='flex' justifyContent='center' height='100%' alignItems='center'>
                          {
                            Math.abs(activeStep - imageIdx) <= 2 ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                alt={`project-image-${imageIdx}`}
                                src={image}
                                style={{
                                  width: '65%',
                                  height: '65%',
                                  objectFit: 'contain',
                                  objectPosition:'50% 50%'
                                }}
                              />
                            ) : null
                          }
                        </Box>
                      ))
                    }
                  </SwipeableViews>
                </Box>
                <MobileStepper
                  variant='dots'
                  steps={3}
                  position='static'
                  activeStep={activeStep}
                  // className={classes.root}
                  nextButton={
                    <Button size='small' onClick={handleNext} disabled={activeStep === 2}>
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
              </Fragment>
            )
          }
        </Grid>
        <Grid item md={5} sm={12}>
          <Box m={2} mt={6} height={320}>
            <Typography variant='h5' noWrap>
              { projectDetails?.label }
            </Typography>
            <Typography variant='body2' noWrap>
              {`Technology: ${projectDetails?.tech}`}
            </Typography>
            <Divider />
            <Box pt={2} pb={2}>
              <Typography variant='body1' noWrap>
                {projectDetails?.description}
              </Typography>
            </Box>
            <Divider />
            <Typography paragraph variant='caption'>
              {`Responsibility: ${projectDetails?.responsibility}`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Fab
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