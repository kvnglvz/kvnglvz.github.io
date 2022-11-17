import './ProfileBox.css';
import { useEffect } from 'react';
import {
  Anchor,
  Grid,
  Text,
  Divider,
  Title,
  Image,
  Stack,
  Group,
} from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import { AppStoreSubscriber, useAppStore } from '../stores/appStore';

import { Interest } from '../interfaces/interest.interface';
import { Project } from '../interfaces/project.interface';
import { Social } from '../interfaces/social.interface';
import { PublicSpeaking } from '../interfaces/public-speaking.interface';
import { Skill } from '../interfaces/skill.interface';
import { Experience } from '../interfaces/experience.interface';

import socialsJson from '../data/socials.json';
import publicSpeakingJson from '../data/publicSpeaking.json';
import skillsJson from '../data/skills.json';
import interestsJson from '../data/interests.json';
import projectsJson from '../data/projects.json';
import experiencesJson from '../data/experience.json';
import experimentsJson from '../data/experiments.json';

import { useNavigate, useSearchParams } from 'react-router-dom';

const socials: Social[] = socialsJson.map((social) => social as Social);
const publicSpeaking: PublicSpeaking[] = publicSpeakingJson.map(
  (publicSpeaking) => publicSpeaking as unknown as PublicSpeaking,
);
const skills: Skill[] = skillsJson.map((project) => project as Skill);
const interests: Interest[] = interestsJson.map(
  (project) => project as Interest,
);
const projects: Project[] = projectsJson.map((project) => project as Project);
const experiences: Experience[] = experiencesJson.map(
  (project) => project as Experience,
);
const experiments: Project[] = experimentsJson.map(
  (project) => project as Project,
);

export const ProfileBox = () => {
  const colorScheme = useColorScheme();
  const [, { setTheme }] = useAppStore();
  const [, setSearchParams] = useSearchParams();

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <Stack>
      <Grid
        sx={{
          flexDirection: isMobile ? 'column' : 'row-reverse',
        }}
      >
        <Grid.Col xs={12} sm={4}>
          <AppStoreSubscriber>
            {({ theme }) => (
              <Image
                className={theme === 'light' ? 'ImageGray' : ''}
                alt="kevin's picture"
                src="/images/profpic3.jpg"
                width={'100%'}
                height={'180px'}
                fit="contain"
                sx={{
                  objectPosition: 'center center',
                }}
              />
            )}
          </AppStoreSubscriber>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <Title order={6}>Hi, my name is </Title>
          <Title order={4}>Kevin Galvez </Title>
          <Text variant="text">
            a developer from Baguio City. I work on web applications. I&apos;m
            interested in mobile apps, project management, and teaching.
          </Text>
        </Grid.Col>
      </Grid>
      <Divider
        size={isMobile ? 1 : 0}
        label="Projects"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={0}>
        {projects &&
          projects.map((project, projectIdx) => {
            return (
              <Group spacing="xs" key={`project-${projectIdx}`}>
                {project.link ? (
                  <Anchor
                    component="a"
                    href={project.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {project.label}
                  </Anchor>
                ) : (
                  <Anchor
                    component="button"
                    onClick={() =>
                      setSearchParams({
                        project: project.slug,
                      })
                    }
                  >
                    {project.label}
                  </Anchor>
                )}
                {!isMobile ? (
                  <Text transform="lowercase">{project?.shortDescription}</Text>
                ) : null}
              </Group>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Experiments"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={0}>
        {experiments &&
          experiments.map((experiment, experimentIdx) => {
            // primary, secondary, body, gallery
            return (
              <Group spacing="xs" key={`experiment-${experimentIdx}`}>
                <Anchor
                  component="button"
                  onClick={() =>
                    setSearchParams({
                      experiment: experiment.slug,
                    })
                  }
                >
                  {experiment.label}
                </Anchor>
                {!isMobile ? (
                  <Text transform="lowercase">
                    {experiment?.shortDescription}
                  </Text>
                ) : null}
              </Group>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Work Experience"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={'md'}>
        {experiences &&
          experiences.map((experience, experienceIdx) => {
            const { company, position, work, duration } = experience;
            return (
              <Stack key={`experience-${experienceIdx}`} spacing={0}>
                <Text>{`${company} (${duration})`}</Text>
                <Text size={14}>{position}</Text>
                <Text size={12}>{work}</Text>
              </Stack>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Social"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={0}>
        {socials &&
          socials.map((social, socialIdx) => {
            const { label, link } = social;
            return (
              <Anchor
                key={`socials-${socialIdx}`}
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                {label}
              </Anchor>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Skills, tools and what's next"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={'md'}>
        {skills &&
          skills.map((skill, skillIdx) => {
            return (
              <Stack key={`experience-${skillIdx}`} spacing={0}>
                <Text>{skill.primary}</Text>
                <Text size={14}>{skill.secondary}</Text>
              </Stack>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Public speaking"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={'md'}>
        {publicSpeaking &&
          publicSpeaking.map((publicSpeaking, publicSpeakingIdx) => {
            return (
              <Stack key={`experience-${publicSpeakingIdx}`} spacing={0}>
                <Text
                  variant={publicSpeaking.resources ? 'link' : 'text'}
                  component={publicSpeaking.resources ? 'a' : 'text'}
                  href={publicSpeaking.resources}
                  rel="noreferrer"
                  target="_blank"
                >
                  {`${publicSpeaking.label} (${publicSpeaking.date})`}
                </Text>
                <Text size={14}>{publicSpeaking.description}</Text>
              </Stack>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="Interests"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={'md'}>
        {interests &&
          interests.map((interest, interestIdx) => {
            return (
              <Stack key={`experience-${interestIdx}`} spacing={0}>
                <Text
                  variant={interest.resources ? 'link' : 'text'}
                  component={interest.resources ? 'a' : 'text'}
                  href={interest.resources}
                  rel="noreferrer"
                  target="_blank"
                >
                  {`${interest.label}`}
                </Text>
                <Text size={14}>{interest.description}</Text>
              </Stack>
            );
          })}
      </Stack>
      <Divider
        size={isMobile ? 1 : 0}
        label="About this page"
        labelPosition={isMobile ? 'center' : 'left'}
      />
      <Stack ml={isMobile ? 0 : 'xl'} spacing={'md'}>
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
      </Stack>
    </Stack>
  );
};
