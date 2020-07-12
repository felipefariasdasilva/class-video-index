import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Button, Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {useVideoContext} from './VideoContext';
import SelectedClassContext, {useSelectedClassContext} from './SelectedClassContext';
import {useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "lightgrey",
        height: "100vh"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    cardroot: {
        maxWidth: 700,
        marginBottom: '3%'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest})
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    divstyle: {
        flexGrow: 1
    }
}));

export default function VideoCard() {

    const classes = useStyles();
    const video = useVideoContext()
    const {setSelectedClass} = useContext(SelectedClassContext)
    const actualClass = useSelectedClassContext()
    const [selectedVideo, setSelectedVideo] = useState(0)
   
    const handleNextClick = () => {
        console.log("next")
        setSelectedClass({actualClass: selectedVideo + 1})
        console.log("card: ", actualClass);
        setSelectedVideo(selectedVideo + 1)
    }

    const handleBackClick = () => {
        console.log("back")
        setSelectedClass({
            actualClass: selectedVideo - 1
        })
        console.log(actualClass);
        setSelectedVideo(actualClass)
    }

    useEffect(() => {}, [setSelectedClass])

    return (
        <div className={
            classes.divstyle
        }>
            <Grid>
                <Card className={
                    classes.cardroot
                }>
                    <CardHeader avatar={
                            <Avatar
                        aria-label="recipe"
                            className={classes.avatar}>
                        FF</Avatar>
                        }
                        action={
                            <IconButton
                        aria-label="settings"><MoreVertIcon/></IconButton>
                        }
                        title={
                            video.title[actualClass]
                        }
                        subheader="Next Level Week by Rocketseat"/>
                    <center>
                        <iframe width="95%" height="360" frameborder="0"
                            src={
                                video.link[selectedVideo]
                            }
                            allowfullscreen>
                            teste
                        </iframe>
                    </center>
                </Card>

            </Grid>

            <div>
                <Button variant="contained" onClick={handleBackClick} item xs={6}>Back</Button>
                <Button variant="contained" color="primary" onClick={handleNextClick} item xs={6}>Next</Button>
            </div>

        </div>

    )
}
