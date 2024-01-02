import { motion } from 'framer-motion'
import React from 'react'

export const Sun = () => {
  return (
    <motion.span
      exit={{ opacity: 0 }}
      className='flex w-full h-full bg-yellow-500 rounded-full p-1'
    // animate={{
    //   opacity: 1,
    //   scale: 0.5,
    //   transition: {
    //     duration: 1
    //   }
    // }}
    >
      <span className='flex w-full h-full bg-yellow-300 rounded-full'></span>
    </motion.span>
  )
}
