import React, { Suspense } from "react"
import { VideoProvider } from "../context"
const Videos = React.lazy(() => import("./Videos"))
const SearchVideo = React.lazy(() => import("./SearchVideo"))
const Container = React.lazy(() => import("./Container"))

export default function App() {
  return (
    <VideoProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <SearchVideo />
          <Videos />
        </Container>
      </Suspense>
    </VideoProvider>
  )
}
