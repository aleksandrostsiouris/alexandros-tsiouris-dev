"use client"
import React from 'react'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';

export const IntroCard = (
  { isDragging }: { isDragging: boolean }
) => {
  // const [isDragging, setIsDragging] = useState(false)

  return (

    <div
      className='flex flex-col w-full h-full justify-center items-center select-none gap-12 mt-10'
    // onMouseDown={e => e.stopPropagation()}
    // onTouchStart={e => e.stopPropagation()}
    >

      <AnimatePresence mode='popLayout'>
        {
          isDragging ?
            <motion.div
              key='fist'
              className='flex w-32 h-28 relative'
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              <div className='dark:bg-inherit bg-zinc-600 rounded-full blur-2xl w-32 h-28'>
              </div>
              <Image
                className='bg-transparent'
                src="/dizzy.png"
                alt="dizzy-memoji"
                fill />
            </motion.div> :
            <motion.div
              key='laptop'
              className='flex w-20 h-28 relative'
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              <div className='dark:bg-inherit bg-zinc-700 rounded-full blur-2xl w-32 h-28'>
              </div>
              <Image
                className='bg-transparent'
                src="/memoji.png"
                alt="memoji"
                fill />
            </motion.div>
        }
      </AnimatePresence>
      <div className='flex justify-center items-center px-10'>
        <p className=''>
          I&apos;m
          <span
            className='text-3xl font-semibold font-pacifico tracking-widest'> Alex
          </span>
          , a full-stack software engineer located in Greece, love working with .NET, React, Node/Bun and more
        </p>
      </div>

    </div>
  )
}
