"use client"
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import "../../app/grid-layout.css";
import { Layout, WidthProvider, Responsive as RGL } from "react-grid-layout";
import { IntroCard } from '../cards/intro-card';
import { GithubCard } from '../cards/github-card';
import { ThemeCard } from '../cards/theme-card';
import { motion, stagger, useAnimate } from 'framer-motion';
import { LinkedInCard } from '../cards/linkedin-card';
import { MapCard } from '../cards/map/map-card';
import { SpotifyCard } from '../cards/spotify-card';
import { EmailCard } from '../cards/email-card';
import { cn } from '@/lib/utils';

export const Index = (
  { mapToken }: { mapToken: string }
) => {
  const [introIsDragging, setIntroIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>();
  const ResponsiveGridLayout = useMemo(() => WidthProvider(RGL), []);
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    if (typeof window === undefined) return;
    const isMobile = () => setIsMobile(window.innerWidth <= 400);

    window.addEventListener('resize', isMobile);
    isMobile();
    return () => window.removeEventListener('resize', isMobile)
  }, [])

  useEffect(() => {
    animate('span',
      {
        opacity: 1,
        visibility: "visible"
      },
      {
        delay: stagger(0.1,
          {
            startDelay: 0.3,
            ease: "easeOut",
            from: isMobile ? 'first' : 'center'
          })
      });
  }, [animate, isMobile])

  const layouts: { [key: string]: Layout[] } = {
    xs: [
      { i: "intro", x: 0, y: 0, w: 2, h: 2 },
      { i: "map", x: 0, y: 1, w: 1, h: 2 },
      { i: "linkedin", x: 1, y: 3, w: 1, h: 1 },
      { i: "github", x: 1, y: 4, w: 1, h: 1 },
      { i: "theme", x: 0, y: 2, w: 1, h: 1 },
      { i: "email", x: 1, y: 5, w: 1, h: 1 },
      { i: "spotify", x: 0, y: 6, w: 2, h: 1 },
    ],
    sm: [
      { i: "intro", x: 1, y: 2, w: 2, h: 2 },
      { i: "map", x: 0, y: 1, w: 1, h: 2 },
      { i: "github", x: 2, y: 1, w: 1, h: 1 },
      { i: "theme", x: 0, y: 0, w: 1, h: 1 },
      { i: "linkedin", x: 1, y: 1, w: 1, h: 1 },
      { i: "spotify", x: 1, y: 0, w: 2, h: 1 },
      { i: "email", x: 0, y: 3, w: 1, h: 1 },
    ],
    lg: [
      { i: "intro", x: 0, y: 0, w: 2, h: 2 },
      { i: "map", x: 3, y: 1, w: 1, h: 2 },
      { i: "github", x: 2, y: 0, w: 1, h: 1 },
      { i: "theme", x: 0, y: 2, w: 1, h: 1 },
      { i: "linkedin", x: 2, y: 1, w: 1, h: 1 },
      { i: "spotify", x: 1, y: 2, w: 2, h: 1 },
      { i: "email", x: 3, y: 0, w: 1, h: 1 },
    ],
  };

  return (
    <main className='w-full h-full flex justify-center items-center text-primary-foreground select-none'>
      <div className='flex justify-center items-center w-full h-full max-w-[768px] sm:max-w-[768px] md:max-w-[996px] lg:max-w-[1024px] xl:max-w-[1024px]'>
        <motion.div
          ref={scope}
          className='flex w-full h-full justify-center items-center'>
          <ResponsiveGridLayout
            onDragStart={(_, olditem) => {
              if (olditem.i === 'intro') {
                setIntroIsDragging(true)
              }
            }}
            isDraggable={!isMobile}
            onDragStop={() => setIntroIsDragging(false)}
            className="layout w-full h-full"
            isResizable={false}
            layouts={layouts}
            draggableCancel='.nonDraggable'
            containerPadding={{
              xxs: [50, 0],
              xs: [100, 0],
              sm: [110, 0],
              // md: [150, 0],
              lg: [100, 0],
              xl: [200, 0]
            }}
            margin={[20, 20]}
            breakpoints={{ xxl: 1536, xl: 1280, lg: 1024, md: 996, sm: 768, xs: 600, xxs: 0 }}
            cols={{
              xxs: 1,
              xs: 2,
              sm: 3,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4
            }}
            rowHeight={231}
            useCSSTransforms
          >
            <motion.span
              key="intro"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <IntroCard isDragging={introIsDragging} />
            </motion.span>
            <motion.span
              key="github"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <GithubCard />
            </motion.span>
            <motion.span
              key="email"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <EmailCard />
            </motion.span>
            <motion.span
              key="linkedin"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <LinkedInCard />
            </motion.span>
            <motion.span
              key="map"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <MapCard mapToken={mapToken} />
            </motion.span>
            <motion.span
              key="theme"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}
            >
              <ThemeCard />
            </motion.span>
            <motion.span
              key="spotify"
              className={
                cn(
                  'item border-2 border-zinc-200 dark:border-neutral-700 rounded-card items-center justify-center flex bg-white dark:bg-almost-primary hover:cursor-grab',
                  !isMobile ? "active:cursor-grabbing" : ""
                )
              }
              initial={{ opacity: 0, visibility: 'hidden' }}>
              <SpotifyCard />
            </motion.span>
          </ResponsiveGridLayout>
        </motion.div>



        {/* <GridLayout
          preventCollision={false}
          // onLayoutChange={(layout) => {
          //   console.log(layout)
          // }}
          rowHeight={20}
          isResizable={false}
          // containerPadding={[0, 0]}
          cols={1}
          isDraggable
          isDroppable
          className='layout w-full h-full flex justify-center items-center border-pink-200 border-2'
          layout={layout}
        // useCSSTransforms
        >
          <div className='bg-red-200 w-10 h-10' key="1">1</div>
          <div className='bg-red-200  w-10 h-10' key="2">2</div>
          <div className='bg-red-200  w-10 h-10' key="3">3</div>
        </GridLayout> */}
      </div >
    </main >
  )
}
