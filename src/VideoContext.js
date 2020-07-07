import { createContext, useContext } from "react"

export const useVideoContext = () => useContext(VideoContext)

const VideoContext = createContext(
    
    
    {    
        id: "",
        title: [],
        link: [],
    }
    

)

export default VideoContext