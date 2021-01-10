import React, { Suspense, useContext } from "react"
import { VideoContext } from "../../context"
import Video from "../video"

export default function Videos() {
  const videos = useContext(VideoContext)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <hr />
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </Suspense>
    </div>
  )
}
