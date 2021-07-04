/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Button, Link, List, ListItem, ListItemText, Typography, Grid, Dialog, DialogContent, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Base from '../layout/Base';
import { map } from 'lodash';
import ListItemLink from '../components/ListItemLink';
import socials from '../data/socials.json';
import publicSpeaking from '../data/publicSpeaking.json';
import skills from '../data/skills.json';
import interests from '../data/interests.json';
import projects from '../data/projects.json';
import { Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Close as CloseIcon, Twitter, LinkedIn, GitHub, Email } from '@material-ui/icons';
import BoxHeader from '../components/BoxHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head'
import { AppStoreSubscriber, useAppStore } from '../stores/appStore';
import ProjectView from '../components/ProjectView';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const socialIcons = {
  'Twitter': Twitter,
  'LinkedIn': LinkedIn,
  'GitHub': GitHub,
  'Email': Email
};

const useStyles = makeStyles((theme) => ({
  imageGray: {
    filter: 'grayscale(100%)'
  },
  linkPadding: {
    paddingLeft: theme.spacing(2)
  },
  socialBox: {
    '& > *': {
      marginRight: theme.spacing(2)
    },
  }
}));

const Index = () => {
  const [open, setOpen] = useState(false);
  const [,actions] = useAppStore();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const router = useRouter();

  const classes = useStyles();
  
  const handleCloseDialog = () => {
    router.push('/', undefined, { shallow: true });
  };

  const handleOnClickProject = (slug) => {
    router.push(`/?project=${slug}`, undefined, { shallow: true });
  }

  useEffect(() => {
    if (router.query.project) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [router.query.project]);

  return (
    <Base>
      <Head>
        <title>Kevin Galvez | Application Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Kevin Galvez&apos; portfolio || Application developer from 2600 Philippines' />
      </Head>

      <Grid container justify='center' alignItems='center' spacing={2} direction={isXs ? 'column-reverse' : 'row'}>
        <Grid item sm={8} xs={12}>
          <Box display='block' p={1} mb={6}>
            {
              !isXs && (
                <AppStoreSubscriber>
                  {({ theme }, { toggleTheme }) => (
                    <IconButton edge='start' size='small' onClick={toggleTheme} >
                      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                  )}
                </AppStoreSubscriber>
              )
            }
            <Typography variant='h6'>
              Hi, my name is 
            </Typography>
            <Typography variant='h4'>
              Kevin Galvez
            </Typography>
            <Typography paragraph variant='body1'>
              a developer from Baguio City. I mostly work on web applications but is trying to spark fire (again) with mobile apps.
            </Typography>
            <Box display='flex' flexDirection='row' justifyContent='start' alignItems='start' className={classes.socialBox}>
              {
                isXs && (
                  <Fragment>
                    <AppStoreSubscriber>
                      {({ theme }, { toggleTheme }) => (
                        <IconButton edge='start' size='small' onClick={toggleTheme} >
                          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>
                      )}
                    </AppStoreSubscriber>
                    <Divider orientation='vertical' flexItem />
                  </Fragment>
                )
              }
              {
                map(socials, ({ link, label }, socialIdx) => (
                  <IconButton key={`socials-${socialIdx}`}  edge='start' size='small' component='a' href={link} rel='noreferrer' target='_blank' >
                    {
                      React.createElement(socialIcons[label])
                    }
                  </IconButton>
                ))
              }
            </Box>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box>
            <AppStoreSubscriber>
              {({ theme }) => (
                <img
                  className={theme === 'light' ? classes.imageGray : ''}
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
            map(projects, (project, projectIdx) => {
              const { slug, label, link } = project;
              // primary, secondary, body, gallery
              return (
                <ListItemLink key={projectIdx} onClick={() => (
                  handleOnClickProject(slug)
                )}>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ color: 'primary', variant: 'body1' }}
                  />
                  { link && <Link className={classes.linkPadding} href={link} rel='noreferrer' target='_blank'>Link</Link>}
                </ListItemLink>
              )
            })
          }
        </List>
      </Box>
      <BoxHeader label='Skills, tools and what&apos;s next' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            skills.map(({ primary, secondary }, toolsIdx) => (
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
            map(publicSpeaking, ({ label, description, resources, resources_label, date }, publicSpeakingIdx) => (
              <ListItem key={`publicSpeaking-${publicSpeakingIdx}`}>
                <ListItemText
                  primary={`${label} - ${date}`}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                  secondaryTypographyProps={{ noWrap: true }}
                />
                { resources && <Link className={classes.linkPadding} href={resources} rel='noreferrer' target='_blank'>{resources_label}</Link>}
              </ListItem>
            ))
          }
        </List>
      </Box>
      <BoxHeader label='Interests' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(interests, ({ label, description, resources, resources_label }, interestsIdx) => (
              <ListItem key={`interests-${interestsIdx}`}>
                <ListItemText
                  primary={label}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
                { resources && <Link className={classes.linkPadding} href={resources} rel='noreferrer' target='_blank'>{ resources_label }</Link>}
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
              primary={'This page was made with React, Next.js and Material-UI'}
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
      <Dialog onClose={handleCloseDialog} maxWidth='md' fullWidth open={open} fullScreen={isSmDown}>
        <ProjectView onClose={handleCloseDialog} />
      </Dialog>
    </Base>
  );
};

export default Index;