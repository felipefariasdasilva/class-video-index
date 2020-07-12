import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from './Header';
import VideoProvider from './VideoProvider';
import VideoClass from './VideoClass';
import SelectedClassProvider from './SelectedClassProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "lightgrey",
        height: "100%"
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <VideoProvider>
            <SelectedClassProvider>

                <div className={classes.root}>
                    <Header/>
                    <center>
                        <h1>Videos</h1>
                        <VideoClass/>
                    </center>
                </div>
                
            </SelectedClassProvider>
        </VideoProvider>

    );
}
