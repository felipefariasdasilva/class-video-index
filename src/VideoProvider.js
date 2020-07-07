import React, { useState } from 'react'
import merge from 'lodash.merge'
import VideoContext from './VideoContext'

const VideoProvider = ( { children } ) => {

    const setVideo = ( 
            {   
                id,
                title,
                link
            }
        
        ) => {

        updateVideo( prevState => {
            const newState = { ...prevState }
            return merge( newState, { 
                id,
                title,
                link
            } )
        })
    }
    
    const videoState = {
        id: '',
        title: [],
        link: [],
        setVideo
    }

    const [video, updateVideo] = useState(videoState)

    return(
        <VideoContext.Provider value={video}>
            { children }
        </VideoContext.Provider>
    )   
}

export default VideoProvider
