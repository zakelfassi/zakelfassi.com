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

  const renderSocialIcon = (
    kind:
      | 'bsky'
      | 'threads'
      | 'x'
      | 'reddit'
      | 'pinterest'
      | 'linkedin'
      | 'instagram'
      | 'facebook'
      | 'youtube',
    href: string | undefined
  ) => {
    if (href === undefined) return null
    return href === '' ? (
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    ) : (
      <SocialIcon kind={kind} href={href} size={6} />
    )
  }

  const isLoading = [ig, bsky, threads, x, fb, reddit, pinterest, linkedin, youtubeId].some(
    (item) => item === ''
  )

  return (
    <>
      {/* Share and Comment Section */}
      {(ig !== undefined ||
        threads !== undefined ||
        x !== undefined ||
        fb !== undefined ||
        reddit !== undefined ||
        pinterest !== undefined ||
        bsky !== undefined ||
        linkedin !== undefined ||
        youtubeId !== undefined) && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            {isLoading ? 'Loading comment sources' : 'Share and Comment on'}
          </h2>
          {isLoading && (
            <p className="text-sm text-gray-500">
              This will take a few minutes – please check back later
            </p>
          )}
          <div className="flex flex-row space-x-4">
            {renderSocialIcon('instagram', ig)}
            {renderSocialIcon('bsky', bsky)}
            {renderSocialIcon('threads', threads)}
            {renderSocialIcon('x', x)}
            {renderSocialIcon('facebook', fb)}
            {renderSocialIcon('reddit', reddit)}
            {renderSocialIcon('pinterest', pinterest)}
            {renderSocialIcon('linkedin', linkedin)}
            {youtubeId !== undefined &&
              (youtubeId === '' ? (
                <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
              ) : (
                <SocialIcon
                  kind="youtube"
                  href={`https://www.youtube.com/watch?v=${youtubeId}`}
                  size={6}
                />
              ))}
          </div>
        </div>
      )}
    </>
  )
}
