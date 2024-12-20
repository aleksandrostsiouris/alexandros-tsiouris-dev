import { motion } from 'framer-motion';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { LinkPreview } from '../ui/link-preview';

export const LinkedInCard = () => {
  return (
    <LinkPreview url='https://www.linkedin.com/in/alexandros-tsiouris-8684bb166'>
      <motion.div
        whileHover={{
          rotateZ: -15,
          transition: {
            type: 'spring',
            bounce: 0.7,
          }
        }}
        whileTap={{
          rotateZ: 15
        }}
        className='hover:cursor-pointer'
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}>
        <FaLinkedin className="w-12 h-12 dark:text-primary-foreground" />
      </motion.div>
    </LinkPreview>
  )
}
