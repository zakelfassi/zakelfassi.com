import React from 'react'

type YouTubeProps = {
  videoId: string
}

const YouTube: React.FC<YouTubeProps> = ({ videoId }) => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video player"
        className="absolute left-0 top-0 h-full w-full"
      />
    </div>
  )
}

export default YouTube
