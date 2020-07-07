import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from './VideoCard';
import AssistentClassCard from './AssistentClassCard';
import { Grid } from '@material-ui/core';
import Header from './Header';
import VideoProvider from './VideoProvider';
import { useEffect } from 'react';
import VideoContext, { useVideoContext } from './VideoContext';
import { useContext } from 'react';
import VideoClass from './VideoClass';
import SelectedClassProvider from './SelectedClassProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "lightgrey",
    height: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardroot: {
    maxWidth: 700,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function App() {
  const classes = useStyles();
  const { setVideo } = useContext(VideoContext)

  return (
    <VideoProvider>
      <SelectedClassProvider>
       <div className={classes.root}>
      <Header />
      
      <center>
        <h1>Videos</h1>

       <VideoClass/>
        
      </center>

    </div>
    </SelectedClassProvider>
    </VideoProvider>
   
  );
}