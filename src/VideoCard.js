import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "lightgrey",
      height: "100vh",
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
    divstyle:{
        flexGrow: 1,
    }
  }));

export default function VideoCard(){

    const classes = useStyles();

    const [videos,setVideos] = useState(
        [ 
            "https://mega.nz/embed/GVg0DIzJ#ah3P-iXjXkYKfWayGkutHxTUMM6l4wTk9EiZ5PhKG1Y",
            "https://mega.nz/embed/rYhDmDCB#0VmrDI-b1GRIL5o7rARHlYwXIyT9uZSAhebwCz1VVcU",
            "https://mega.nz/embed/iYxEUKrI#Njo_so5ULLODfumHtXnroh9RoX5iGOYzgpseBjbJGf8",
            "https://mega.nz/embed/aR52iSJa#bUHKLZ95_Tz8c11YSCn60q0L-xjiTKIJZjeBZBVCd0g",
            "https://mega.nz/embed/3F4DDTTC#Hu2S0x54Mwpv-hN0XFsq8UkSBxk5FlSwmJbIlAwWMUc",

        ]
    )

 
      
    return(
        <div className={classes.divstyle}>
            {
                videos.map(video => (
                    <Card className={classes.cardroot}>
                        <CardHeader
                        avatar={
                            <Avatar 
                                aria-label="recipe" 
                                className={classes.avatar}
                            >
                            FF
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Next Level Week"
                        subheader="by Rocketseat"
                    />
                    <center>
                        <iframe 
                            width="640" 
                            height="360" 
                            frameborder="0" 
                            src={video} 
                            allowfullscreen >teste</iframe>
                    </center>
                    </Card>
                ))
            }
        </div>
        
    )
}
