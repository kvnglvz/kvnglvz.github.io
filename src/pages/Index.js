import { Box, Breadcrumbs, Divider, IconButton, Link, List, ListItem, ListItemText, Typography, Grid, GridList, GridListTile, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
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
  const [checked, setChecked] = useState(true);
  const classes = useStyles();

  const handleThemeChange = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  
  useEffect(() => {
    // setChecked(false);
  }, []);

  return (
    <Base>
      <Fade in={checked}>
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
            <Typography variant='body2'>Hi! I'm Kevin. I'm a programmer. I mostly work on frontend applications on web and mobile. I work in Baguio City. In my spare time, I try to play the piano and cook pasta.</Typography>
          </Box>
          <Box display='block' minWidth={160} className={classes.profPic} ml={2} mb={2} />
        </Box>
        <Divider />
        <Box p={1} display='flex' justifyContent='space-between'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="textPrimary" href="/" onClick={() => {}}>
              <Typography variant='h6'>Projects</Typography>
            </Link>
            {/* <Link
              color="textPrimary"
              href="/"
              onClick={() => {}}
              aria-current="page"
            >
              <Typography variant='h6'>Yurei Ninja</Typography>
            </Link> */}
          </Breadcrumbs>
          {/* <IconButton size='small' onClick={() => {}}>
            <CloseIcon />
          </IconButton> */}
        </Box>
        <Divider />
        <Box p={1} height={300}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box ml={2}>
                1
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box mr={2}>
                <GridList cellHeight={100} cols={1}>
                  <GridListTile cols={1}>
                    1
                  </GridListTile>
                  <GridListTile cols={1}>
                    2
                  </GridListTile>
                  <GridListTile cols={1}>
                    3
                  </GridListTile>
                  <GridListTile cols={1}>
                    4
                  </GridListTile>
                </GridList>
              </Box>
            </Grid>
          </Grid>
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
              map(publicSpeaking, ({ label, description, resources, resources_label, date }) => (
                <ListItem>
                  <ListItemText
                    primary={`${label} - ${date}`}
                    secondary={description}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
                  {/* <Typography variant='caption'>{date}</Typography> */}
                  { resources && <Link href={resources} rel='noreferrer' target='_blank'>{resources_label}</Link>}
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
              map(interests, ({ label, description, resources, resources_label }) => (
                <ListItem>
                  <ListItemText
                    primary={label}
                    secondary={description}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
                  { resources && <Link href={resources} rel='noreferrer' target='_blank'>{ resources_label }</Link>}
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
      </Fade>
    </Base>
  );
};

export default Index;