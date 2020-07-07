import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from './VideoCard';
import AssistentClassCard from './AssistentClassCard';
import { Grid } from '@material-ui/core';
import Header from './Header';
import VideoProvider from './VideoProvider';
import VideoContext, { useVideoContext } from './VideoContext';
import { useContext } from 'react';
import SelectedClassContext from './SelectedClassContext';

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


export default function VideoClass(){
    const classes = useStyles();
    const { setVideo } = useContext(VideoContext)
    const { setSelectedClass } = useContext(SelectedClassContext)

    useEffect(()=>{
        console.log("set initial videos")
        setSelectedClass({
          actualClass: 0
        })
        setVideo(
          {
            id: 1,
            title: [
                "Acelerando sua Evolução", 
                "Olhando as Oportunidades",
                "A Escolha da Stack",
                "Até 2 anos em 2 meses",
                "A milha extra",
            ],
            link: [ 
                "https://mega.nz/embed/GVg0DIzJ#ah3P-iXjXkYKfWayGkutHxTUMM6l4wTk9EiZ5PhKG1Y",
                "https://mega.nz/embed/rYhDmDCB#0VmrDI-b1GRIL5o7rARHlYwXIyT9uZSAhebwCz1VVcU",
                "https://mega.nz/embed/iYxEUKrI#Njo_so5ULLODfumHtXnroh9RoX5iGOYzgpseBjbJGf8",
                "https://mega.nz/embed/aR52iSJa#bUHKLZ95_Tz8c11YSCn60q0L-xjiTKIJZjeBZBVCd0g",
                "https://mega.nz/embed/3F4DDTTC#Hu2S0x54Mwpv-hN0XFsq8UkSBxk5FlSwmJbIlAwWMUc",
            ]
          })
      }, [setVideo, setSelectedClass])

    return(
        <Grid container>
          
        <Grid item xs={3}>
          <AssistentClassCard />
        </Grid>

        <Grid item xs={9}>
          <VideoCard />
        </Grid>

      </Grid>
    )
}