import { Box, Breadcrumbs, Divider, IconButton, Link, List, ListItem, ListItemText, Typography, Grid, GridList, GridListTile, Dialog } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { Fragment, useEffect, useState } from 'react';
import Base from '../layout/Base';
import { map } from 'lodash';
import ListItemLink from '../components/ListItemLink';
import socials from '../data/socials.json';
import publicSpeaking from '../data/publicSpeaking.json';
import interests from '../data/interests.json';
import projects from '../data/projects.json';
import { Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Close as CloseIcon } from '@material-ui/icons';
import { useRecoilState } from 'recoil';
import themeState from '../states/themeState';
import Fade from '@material-ui/core/Fade';
import BoxHeader from '../components/BoxHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  profPic: {
    backgroundImage: `url("${process.env.PUBLIC_URL}/profpic3.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  linkPadding: {
    paddingLeft: theme.spacing(2)
  }
}));

const Index = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [open, setOpen] = useState(false);
  const baseTheme = useTheme();
  const dialogFullScreen = useMediaQuery(baseTheme.breakpoints.down('sm'));

  const classes = useStyles();

  const handleThemeChange = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Base>
      <Box display='flex' flexDirection='row'>
        <Box p={1} minHeight={200}>
          <Typography variant='h4'>
            Kevin Galvez
            <IconButton size='small' onClick={handleThemeChange}>
              { theme === 'light' ? <Brightness4Icon/> : <Brightness7Icon /> }
            </IconButton>
          </Typography>
          <Typography variant='body2'>
            Hi! I'm Kevin. I'm a programmer. I mostly work on frontend applications on web and mobile. I work in Baguio City. In my spare time, I try to play the piano and cook pasta.
          </Typography>
        </Box>
        <Box display='block' minWidth={160} className={classes.profPic} ml={2} mb={2} />
      </Box>
      <BoxHeader label='Projects' />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(projects, (project) => {
              const { label, description, platform, tech, responsibility, group, date, link } = project;
              return (
                <ListItemLink onClick={handleOpen}>
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
            map(socials, ({ label, link }) => (
              <ListItemLink href={link} rel='noreferrer' target='_blank'>
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
            map(publicSpeaking, ({ label, description, resources, resources_label, date }) => (
              <ListItem>
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
            map(interests, ({ label, description, resources, resources_label }) => (
              <ListItem>
                <ListItemText
                  primary={label}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                  secondaryTypographyProps={{ noWrap: true }}
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
              primary={'This page was made with React and Material-UI'}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText disableTypography>
              <Typography variant='body1'>
                Inspired by <Link href='/' rel='noreferrer' target='_blank'>Filip Hráček's</Link> Portfolio. I like the simplicity of his folio and I'm not much of a design person 😛
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Dialog open={open} fullScreen={dialogFullScreen}>
        <Grid container>
          <Grid item xs={9}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            Image
          </Grid>
          <Grid item xs={3}>
            3
          </Grid>
        </Grid>
      </Dialog>
    </Base>
  );
};

export default Index;