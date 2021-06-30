/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Button, Link, List, ListItem, ListItemText, Typography, Grid, Dialog, DialogContent } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Base from '../layout/Base';
import { map } from 'lodash';
import ListItemLink from '../components/ListItemLink';
import socials from '../data/socials.json';
import publicSpeaking from '../data/publicSpeaking.json';
import interests from '../data/interests.json';
import projects from '../data/projects.json';
import { Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Close as CloseIcon } from '@material-ui/icons';
import BoxHeader from '../components/BoxHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head'
import { AppStoreSubscriber } from '../stores/appStore';
// import Image from 'next/image';
import ProjectView from '../components/ProjectView';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  linkPadding: {
    paddingLeft: theme.spacing(2)
  },
}));

const Index = () => {
  const [open, setOpen] = useState(false);
  const baseTheme = useTheme();
  const isSmDown = useMediaQuery(baseTheme.breakpoints.down('sm'));
  const isXs = useMediaQuery(baseTheme.breakpoints.only('xs'));

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
      // show the modal
      console.log('yeah yeah baby');
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
            <Typography variant='h4'>
              Kevin Galvez
            </Typography>
            <Typography paragraph variant='body1'>
              Hi! I&apos;m Kevin. I&apos;m a programmer. I mostly work on web and mobile apps. I work in Baguio City. In my spare time, I try to play the piano and cook pasta.
            </Typography>
            <AppStoreSubscriber>
              {({ theme }, { toggleTheme }) => (
                <IconButton size='small' onClick={toggleTheme} >
                  { theme === 'light' ? <Brightness4Icon/> : <Brightness7Icon /> }
                </IconButton>
              )}
            </AppStoreSubscriber>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          {/* <Image
            alt='kevin&apos;s picture'
            src='/images/profpic3.jpg'
            width={isSmDown ? '200vw' : '300vw'}
            height={isSmDown ? '200vh' : '300vh'}
            objectFit='contain'
            objectPosition='50% 50%'
            quality={100}
          /> */}
          <Box display='flex' justifyContent='center'>
            <img
              alt='kevin&apos;s picture'
              src={'/images/profpic3.jpg'}
              style={{
                width: isSmDown ? '50%' : '90%',
                height: isSmDown ? '50%' : '90%',
                objectFit: 'contain',
                objectPosition: '50% 50%'
              }}
            />
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
      <BoxHeader label='Socials' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(socials, ({ label, link }, socialIdx) => (
              <ListItemLink key={`socials-${socialIdx}`} href={link} rel='noreferrer' target='_blank'>
                <ListItemText primary={label} primaryTypographyProps={{ variant: 'body1', color: 'primary' }} />
              </ListItemLink>
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
        <DialogContent>
          <ProjectView onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </Base>
  );
};

export default Index;