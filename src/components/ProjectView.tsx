import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Divider,
  Grid,
  Image,
  Modal,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Project } from '../interfaces/project.interface';

interface ProjectViewInterface {
  project: Project | undefined;
  onClose: () => void;
}

export const ProjectView = (props: ProjectViewInterface) => {
  const { height } = useViewportSize();
  const { project, onClose } = props;
  const [activeStep, setActiveStep] = useState<number>(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const hasGallery = useMemo<boolean>(() => {
    if (project) {
      return project.gallery?.length > 0;
    }
    return false;
  }, [project]);

  const gallerySlides = project?.gallery.map((image, imageIdx) => (
    <Carousel.Slide key={`carousel-image-${imageIdx}`}>
      <Image
        src={image}
        fit="contain"
        height={isMobile ? '50vh' : height - 120}
      />
    </Carousel.Slide>
  ));

  if (!project) {
    return null;
  }

  return (
    <Modal
      size={'md'}
      fullScreen
      transitionDuration={200}
      opened={Boolean(project)}
      onClose={onClose}
      title={project?.label}
    >
      <Divider />
      <Grid>
        <Grid.Col sm={8}>
          {hasGallery ? (
            <Carousel withIndicators loop>
              {gallerySlides}
            </Carousel>
          ) : null}
        </Grid.Col>
        <Grid.Col p={'xl'} sm={hasGallery ? 4 : 12}>
          <Title order={4}>{project.label}</Title>
          <Title order={6}>{`Platform : ${project.platform}`}</Title>
          <Text>{project.description}</Text>
          <Divider
            sx={{
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <Text>{`Responsiblities : ${project.responsibility}`}</Text>
          <Text>{`Stack : ${project.tech}`}</Text>
        </Grid.Col>
      </Grid>
      <Divider />
    </Modal>
  );

  // return (
  //   <Fragment>
  //     <Grid container>
  //       {hasGallery && (
  //         <Grid item md={7} sm={12} xs={12}>
  //           <Box display="flex" flexDirection="column" overflow="hidden">
  //             <SwipeableViews
  //               axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  //               index={activeStep}
  //               onChangeIndex={handleStepChange}
  //               enableMouseEvents
  //             >
  //               {project.gallery.map((image, imageIdx) => (
  //                 <img
  //                   key={`project-image-${imageIdx}`}
  //                   alt={`${project.slug}-image-${imageIdx}`}
  //                   src={image}
  //                   width={'100%'}
  //                   height={500}
  //                   style={{
  //                     imageRendering: 'crisp-edges',
  //                     objectFit: 'scale-down',
  //                     objectPosition: 'center center',
  //                   }}
  //                 />
  //               ))}
  //             </SwipeableViews>
  //             <MobileStepper
  //               variant="dots"
  //               steps={project.gallery.length || 0}
  //               position="static"
  //               activeStep={activeStep}
  //               nextButton={
  //                 <Button
  //                   size="small"
  //                   onClick={handleNext}
  //                   disabled={activeStep === project.gallery.length - 1}
  //                 >
  //                   Next
  //                   {theme.direction === 'rtl' ? (
  //                     <KeyboardArrowLeft />
  //                   ) : (
  //                     <KeyboardArrowRight />
  //                   )}
  //                 </Button>
  //               }
  //               backButton={
  //                 <Button
  //                   size="small"
  //                   onClick={handleBack}
  //                   disabled={activeStep === 0}
  //                 >
  //                   {theme.direction === 'rtl' ? (
  //                     <KeyboardArrowRight />
  //                   ) : (
  //                     <KeyboardArrowLeft />
  //                   )}
  //                   Back
  //                 </Button>
  //               }
  //             />
  //           </Box>
  //         </Grid>
  //       )}
  //       <Grid item md={hasGallery ? 5 : 12} sm={12} xs={12}>
  //         <Box m={2}>
  //           <Typography variant="h5">{project?.label}</Typography>
  //           <Typography variant="body2">
  //             {`Platform: ${project?.platform}`}
  //           </Typography>
  //           <Divider />
  //           <Box pt={2} pb={2}>
  //             <Typography variant="caption">
  //               {`Technology: ${project?.tech}`}
  //             </Typography>
  //             <Typography variant="body1">{project?.description}</Typography>
  //           </Box>
  //           <Divider />
  //           <Typography paragraph variant="body2">
  //             {`Responsibility: ${project?.responsibility}`}
  //           </Typography>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </Fragment>
  // );
};
