"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { LinkPreview } from '../ui/link-preview';

export const GithubCard = () => {
  return (
    <LinkPreview
      url='https://github.com/aleksandrostsiouris'>
      <motion.div
        whileHover={{
          rotateZ: -30,
          transition: {
            type: 'spring',
            bounce: 0.7,
          }
        }}
        whileTap={{
          rotateZ: 30
        }}
        className='hover:cursor-pointer'
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}>
        <FaGithub className="w-12 h-12 dark:text-primary-foreground" />
      </motion.div>
    </LinkPreview>
  )
}
