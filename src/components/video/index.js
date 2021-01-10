import React from "react"

export default function Videos({ video }) {
  return video ? (
    <>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <h4>{video.url}</h4>
    </>
  ) : null
}
