'use client'

import { useState } from 'react'
import SocialIcon from '@/components/social-icons'

export default function Comments({
  slug,
  ig,
  bsky,
  threads,
  x,
  fb,
  reddit,
  pinterest,
  linkedin,
  youtubeId,
}: {
  slug: string
  ig?: string
  bsky?: string
  threads?: string
  x?: string
  fb?: string
  reddit?: string
  pinterest?: string
  linkedin?: string
  youtubeId?: string
}) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {/* Share and Comment Section */}
      {(ig || threads || x || fb || reddit || pinterest || bsky || linkedin || youtubeId) && (
        <div className="flex flex-row items-center justify-center space-x-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">Share and Comment on</h2>
          {ig && <SocialIcon kind="instagram" href={ig} size={6} />}
          {bsky && <SocialIcon kind="bsky" href={bsky} size={6} />}
          {threads && <SocialIcon kind="threads" href={threads} size={6} />}
          {x && <SocialIcon kind="x" href={x} size={6} />}
          {fb && <SocialIcon kind="facebook" href={fb} size={6} />}
          {reddit && <SocialIcon kind="reddit" href={reddit} size={6} />}
          {pinterest && <SocialIcon kind="pinterest" href={pinterest} size={6} />}
          {linkedin && <SocialIcon kind="linkedin" href={linkedin} size={6} />}
          {youtubeId && (
            <SocialIcon
              kind="youtube"
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              size={6}
            />
          )}
        </div>
      )}
    </>
  )
}
