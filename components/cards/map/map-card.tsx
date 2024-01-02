"use client"
import Head from 'next/head';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from "next/image"
// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md
// https://docs.mapbox.com/api/maps/styles/

export const MapCard = (
  { mapToken }: { mapToken: string }
) => {
  const { theme } = useTheme();
  const Map = useMemo(() => {
    return ReactMapboxGl({
      accessToken: mapToken,
      keyboard: false,
      scrollZoom: false,
      doubleClickZoom: false,
      attributionControl: false,
      maxZoom: 0,
      minZoom: 0,
      touchZoomRotate: false,
      boxZoom: false,
      interactive: false
    })
  }, [mapToken]);
  // useEffect(() => {

  // }, [])

  return (
    <div
      // onMouseDown={e => e.stopPropagation()}
      // onTouchStart={e => e.stopPropagation()}
      className='w-full h-full relative'>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div className='w-full h-full rounded-card'>
        <Map
          center={[23.774647768336976, 37.89796815467385]}
          zoom={[9]}
          style={theme === 'dark' ? 'mapbox://styles/mapbox/dark-v11' : "mapbox://styles/mapbox/light-v11"}
          className=' rounded-card w-full h-full'
        />
      </div>
      <motion.div
        className='w-20 h-20 rounded-full ring-2 ring-zinc-500 dark:ring-2 dark:ring-zinc-500 bg-zinc-500 dark:bg-zinc-50 backdrop-blur-[0.4px] bg-opacity-20 dark:bg-opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2
          }
        }}>
        <div className='flex w-full h-full items-center justify-center'>
          <motion.div
            whileHover={{
              scale: 1.2,
              rotateZ: 10,
              transition: {
                duration: 0.4,
                ease: 'easeInOut'
              }
            }}
            className='flex w-8 h-12 relative'
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Image
              className='bg-transparent'
              src="/memoji.png"
              alt="memoji"
              fill />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
