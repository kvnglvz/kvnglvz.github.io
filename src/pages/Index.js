import { Box, Breadcrumbs, Button, Divider, IconButton, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Base from '../layout/Base';
import { map } from 'lodash';
import ListItemLink from '../components/ListItemText';
import socials from '../data/socials.json';
import publicSpeaking from '../data/publicSpeaking.json';
import interests from '../data/interests.json';
import { Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Close as CloseIcon } from '@material-ui/icons';
import { useRecoilState } from 'recoil';
import themeState from '../states/themeState';

const useStyles = makeStyles((theme) => ({
  profPic: {
    backgroundImage: `url("${process.env.PUBLIC_URL}/profpic3.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }
}));

const Index = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const classes = useStyles();

  const handleThemeChange = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light');

  return (
    <Base>
      <Box display='flex' flexDirection='row'>
        <Box p={1} minHeight={200}>
          <Typography variant='h4'>
            Kevin Galvez
            <IconButton size='small' onClick={handleThemeChange}>
              {
                theme === 'light' ? <Brightness4Icon/> : <Brightness7Icon />
              }
            </IconButton>
          </Typography>
          <Typography variant='body2'>Hi! I'm Kevin. I'm a programmer. I mostly work on frontend applications, both web and native mobile. I work in Baguio City. In my spare time, I try to play the piano and cook pasta.</Typography>
        </Box>
        <Box display='block' minWidth={160} className={classes.profPic} ml={2} mb={2} />
      </Box>
      <Divider />
      <Box p={1} display='flex' justifyContent='space-between'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={() => {}}>
            <Typography variant='h6'>Projects</Typography>
          </Link>
          <Link
            color="textPrimary"
            href="/"
            onClick={() => {}}
            aria-current="page"
          >
            <Typography variant='h6'>Breadcrumb</Typography>
          </Link>
        </Breadcrumbs>
        <IconButton size='small' onClick={() => {}}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box p={1}>
        {/* <Paper variant='outlined'>
          <Box p={1}>
            Test
          </Box>
        </Paper> */}
      </Box>
      <Divider />
      <Box p={1}>
        <Typography variant='h6'>Socials</Typography>
      </Box>
      <Divider />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(socials, ({ label, link}) => (
              <ListItemLink href={link} rel='noreferrer' target='_blank'>
                <ListItemText primary={label} primaryTypographyProps={{ variant: 'body1', color: 'primary' }} />
              </ListItemLink>
            ))
          }
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Typography variant='h6'>Public speaking</Typography>
      </Box>
      <Divider />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(publicSpeaking, ({ label, description, resources, date }) => (
              <ListItem>
                <ListItemText
                  primary={`${label} - ${date}`}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
                {/* <Typography variant='caption'>{date}</Typography> */}
                { resources && <Link href={resources} rel='noreferrer' target='_blank'>Resource</Link>}
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Typography variant='h6'>Interests</Typography>
      </Box>
      <Divider />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          {
            map(interests, ({ label, description, resources }) => (
              <ListItem>
                <ListItemText
                  primary={label}
                  secondary={description}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
                { resources && <Link href={resources} rel='noreferrer' target='_blank'>View</Link>}
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Typography variant='h6'>About this page</Typography>
      </Box>
      <Divider />
      <Box p={1} display='flex' flexDirection='column'>
        <List dense disablePadding>
          <ListItem>
            <ListItemText
              primary={'This page was made with React (CRA) and Material-UI'}
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

    </Base>
  );
};

export default Index;