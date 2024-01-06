"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'

export const SpotifyCard = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme } = useTheme();
  // const playerRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className='flex w-full h-full items-center justify-center bg-[#282828] rounded-card'>
      <section className='w-full h-full flex justify-center items-center mx-5'>
        <iframe
          // ref={playerRef}
          className='rounded-card'
          src='https://open.spotify.com/embed/playlist/36DUMWypeO6Pbimw91NOny?utm_source=generator&theme=0'
          // src={`https://open.spotify.com/embed/playlist/36DUMWypeO6Pbimw91NOny?utm_source=generator&theme=${theme === 'dark' ? 0 : 1}`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </section>
    </div>
  )
}
