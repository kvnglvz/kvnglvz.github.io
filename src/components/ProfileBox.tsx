import './ProfileBox.css';
import { useContext } from 'react';
import { Anchor, Grid, Text, Title, Image, Stack } from '@mantine/core';

import { WorkExperienceBox } from './profile-box/WorkExperienceBox';
import { ProjectsBox } from './profile-box/ProjectsBox';
import { ExperimentsBox } from './profile-box/ExperimentsBox';
import { SocialsBox } from './profile-box/SocialsBox';
import { StackBox } from './profile-box/StackBox';
import { SpeakingBox } from './profile-box/SpeakingBox';
import { InterestsBox } from './profile-box/InterestsBox';
import { SegmentBox } from './SegmentBox';
import { AppContext } from '../App';

export const ProfileBox = () => {
  const { isMobile, colorScheme } = useContext(AppContext);
  return (
    <Stack>
      <Grid
        sx={{
          flexDirection: isMobile ? 'column' : 'row-reverse',
        }}
      >
        <Grid.Col xs={12} sm={4}>
          <Image
            className={colorScheme === 'light' ? 'ImageGray' : ''}
            alt="kevin's picture"
            src="/images/profpic3.jpg"
            width={'100%'}
            height={'180px'}
            fit="contain"
            sx={{
              objectPosition: 'center center',
            }}
          />
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <Title order={6}>Hi, my name is </Title>
          <Title order={4}>Kevin Galvez </Title>
          <Text>
            a fullstack developer from Baguio city. I have high interest in
            performant applications, project management, and teaching.
          </Text>
        </Grid.Col>
      </Grid>
      <WorkExperienceBox />
      <ProjectsBox />
      <ExperimentsBox />
      <SocialsBox />
      <StackBox />
      {/* <SpeakingBox /> */}
      <InterestsBox />
      <SegmentBox label="About this page" spacing="md">
        <Text>
          This page was made with React, Vite, TypeScript, and{' '}
          <Anchor href="https://mantine.dev/" rel="noreferrer" target="_blank">
            Mantine
          </Anchor>
        </Text>
        <Text>
          Inspired by{' '}
          <Anchor href="https://filiph.net/" rel="noreferrer" target="_blank">
            Filip Hráček&apos;s
          </Anchor>{' '}
          Portfolio. I like the simplicity of his folio and I&apos;m not much of
          a design person 😛
        </Text>
      </SegmentBox>
    </Stack>
  );
};
