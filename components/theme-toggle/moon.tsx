import { motion } from 'framer-motion'
import React from 'react'

export const Moon = () => {
  return (
    <motion.span
      className='flex w-full h-full shadow-sm shadow-zinc-400 justify-center items-center bg-zinc-200 rounded-full'>
      <span className='flex flex-col w-full h-full p-1'>
        <span className='flex w-3 h-3 bg-gray-300 rounded-full ring-1 ring-zinc-300 ms-2'></span>
        <span className='flex w-2 h-2 bg-gray-300 rounded-full ring-1 ring-zinc-300 me-1'></span>
        <span className='flex w-3 h-3 bg-gray-300 rounded-full ring-1 ring-zinc-300 ml-3'></span>
      </span>
    </motion.span>
  )
}
