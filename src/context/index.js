import React, { createContext, useState } from "react"

const VideoContext = createContext(undefined)
const VideoDispatchContext = createContext(undefined)

function VideoProvider({ children }) {
  const [videos, setVideos] = useState([])

  return (
    <VideoContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={setVideos}>
        {children}
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  )
}

export { VideoProvider, VideoContext, VideoDispatchContext }
