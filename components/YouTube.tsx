import React from 'react'

type YouTubeProps = {
  videoId: string
}

const YouTube: React.FC<YouTubeProps> = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video player"
        className="h-full w-full"
      />
    </div>
  )
}

export default YouTube
