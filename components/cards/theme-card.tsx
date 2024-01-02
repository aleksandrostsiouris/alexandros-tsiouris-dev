"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion"
import { Sun } from '../theme-toggle/sun'
import { Moon } from '../theme-toggle/moon'

export const ThemeCard = () => {
  const { theme, setTheme } = useTheme();
  // const [mounted, setIsMounted] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, [])

  // if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button
        data-toggle={theme === 'dark'}
        className='flex data-[toggle=false]:justify-end data-[toggle=true]:justify-start items-center rounded-full w-24 h-12 dark:bg-zinc-600 bg-primary-foreground dark:ring-2 dark:ring-zinc-500 px-2'
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}>
        <motion.div
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          layout
          className=' w-9 h-9 rounded-full'>
          <AnimatePresence>
            {
              theme === 'dark' ?
                <Sun /> :
                <Moon />
            }
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </motion.div>
  )
}
