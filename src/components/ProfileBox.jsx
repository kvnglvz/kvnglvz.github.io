import { Brightness4, Brightness7, Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Divider, Grid, IconButton, Link, List, ListItem, ListItemText, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { AppStoreSubscriber } from '../stores/appStore';
import BoxHeader from './BoxHeader';
import ListItemLink from './ListItemLink';

import socials from '../data/socials.json';
import publicSpeaking from '../data/publicSpeaking.json';
import skills from '../data/skills.json';
import interests from '../data/interests.json';
import projects from '../data/projects.json';
import experiences from '../data/experience.json';
import experiments from '../data/experiments.json';

import './ProfileBox.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const socialIcons = {
  'Twitter': Twitter,
  'LinkedIn': LinkedIn,
  'GitHub': GitHub,
  'Email': Email
};

const PaddedLink = styled(Link)(() => ({
  paddingLeft: 2,
}));

const SocialBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'start',
  '& > *': {
    marginRight: 2
  }
}));

export const ProfileBox = () => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Fragment>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={2}
        direction={isXs ? 'column-reverse' : 'row-reverse'}
      >
        <Grid item sm={8} xs={12}>
          <Box display='block' p={1} mb={6}>
            <Typography variant='h6'>
              Hi, my name is 
            </Typography>
            <Typography variant='h4'>
                Kevin Galvez
            </Typography>
            <Typography paragraph variant='body1'>
              a developer from Baguio City. I mostly work on web applications but is trying to spark fire (again) with mobile apps.
            </Typography>
            <SocialBox>
              {
                socials && socials.map && socials.map(({ link, label }, socialIdx) => (
                  <IconButton
                    key={`socials-${socialIdx}`}
                    edge='start'
                    size='small'
                    component='a'
                    href={link}
                    rel='noreferrer'
                    target='_blank'
                  >
                    {
                      React.createElement(socialIcons[label])
                    }
                  </IconButton>
                ))
              }
              <Divider orientation='vertical' flexItem sx={{ mx: 1 }}/>
              <AppStoreSubscriber>
                {({ theme }, { toggleTheme }) => (
                  <IconButton edge='start' size='small' onClick={toggleTheme} >
                    {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
                  </IconButton>
                )}
              </AppStoreSubscriber>
            </SocialBox>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box>
            <AppStoreSubscriber>
              {({ theme }) => (
                <img
                  className={
                    theme === 'light'
                      ? 'ImageGray' :
                      ''
                  }
                  alt='kevin&apos;s picture'
                  src='/images/profpic3.jpg'
                  width={'100%'}
                  height={isSmDown ? 200 : 300}
                  style={{
                    objectFit: 'scale-down',
                    objectPosition: 'center center',
                  }}
                />
              )}
            </AppStoreSubscriber>
          </Box>
        </Grid>
      </Grid>
      <BoxHeader label='Projects' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            projects && projects.map && projects.map((project, projectIdx) => {
              const { slug, label, link } = project;
              // primary, secondary, body, gallery
              return (
                <ListItemLink
                  key={projectIdx}
                  onClick={() => (
                    setSearchParams({
                      project: slug
                    })
                  )}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ color: 'primary', variant: 'body1' }}
                  />
                  { link && (
                    <PaddedLink href={link} rel='noreferrer' target='_blank'>
                      Link</PaddedLink>
                  )}
                </ListItemLink>
              );
            })
          }
        </List>
      </Box>
      <BoxHeader label='Experiments' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            experiments && experiments.map && experiments.map((experiments, expirementsIdx) => {
              const { slug, label, link } = experiments;
              // primary, secondary, body, gallery
              return (
                <ListItemLink
                  key={`experiments-${slug}-${expirementsIdx}`}
                  onClick={() => (
                    setSearchParams({
                      experiment: slug
                    })
                  )}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ color: 'primary', variant: 'body1' }}
                  />
                  { link && (
                    <PaddedLink href={link} rel='noreferrer' target='_blank'>
                      Link</PaddedLink>
                  )}
                </ListItemLink>
              );
            })
          }
        </List>
      </Box>
      {
        experiences && experiences.length > 0 && (
          <Fragment>
            <BoxHeader label='Work experience' />
            <Box p={1} display='flex' flexDirection='column'>
              <List dense disablePadding>
                {
                  experiences && experiences.map && experiences.map((experience, expIdx) => {
                    const { company, position, work, duration } = experience;
                    return (
                      <ListItem key={`experience-${expIdx}`}>
                        <ListItemText
                          primary={`${company} (${duration})`}
                          secondary={`${position} | ${work}`}
                          primaryTypographyProps={{ variant: 'body1' }}
                          secondaryTypographyProps={{ noWrap: false }}
                        />
                        {/* { resources && (
                          <PaddedLink href={resources} rel='noreferrer' target='_blank'>
                            {resources_label}
                          </PaddedLink>
                        )} */}
                      </ListItem>
                    );
                  })
                }
              </List>
            </Box>
          </Fragment>
        )
      }
      <BoxHeader label='Skills, tools and what&apos;s next' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            skills && skills.map && skills.map(({ primary, secondary }, toolsIdx) => (
              <ListItem key={`tools-${toolsIdx}`}>
                <ListItemText
                  primary={primary}
                  secondary={secondary}
                  primaryTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
                  secondaryTypographyProps={{ color: 'inherit', variant: 'body1' }}
                />
              </ListItem>
            ))
          }
        </List>
      </Box>
      <BoxHeader label='Public speaking' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            publicSpeaking && publicSpeaking.map && publicSpeaking.map(({ label, description, resources, resources_label, date }, publicSpeakingIdx) => (
              <ListItem key={`publicSpeaking-${publicSpeakingIdx}`}>
                <ListItemText
                  primary={`${label} (${date})`}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                  secondaryTypographyProps={{ noWrap: true }}
                />
                { resources && (
                  <PaddedLink href={resources} rel='noreferrer' target='_blank'>
                    {resources_label}
                  </PaddedLink>
                )}
              </ListItem>
            ))
          }
        </List>
      </Box>
      <BoxHeader label='Interests' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            interests && interests.map && interests.map(({ label, description, resources, resources_label }, interestsIdx) => (
              <ListItem key={`interests-${interestsIdx}`}>
                <ListItemText
                  primary={label}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
                { resources && (
                  <PaddedLink href={resources} rel='noreferrer' target='_blank'>
                    { resources_label }
                  </PaddedLink>
                )}
              </ListItem>
            ))
          }
        </List>
      </Box>
      <BoxHeader label='About this page' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          <ListItem>
            <ListItemText
              primary={'This page was made with React and MUIv5'}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText disableTypography>
              <Typography variant='body1'>
                Inspired by <Link href='https://filiph.net/' rel='noreferrer' target='_blank'>Filip Hráček&apos;s</Link> Portfolio. I like the simplicity of his folio and I&apos;m not much of a design person 😛
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
};