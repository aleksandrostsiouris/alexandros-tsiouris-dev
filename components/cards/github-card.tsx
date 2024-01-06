import { motion } from 'framer-motion';
import React from 'react'
import { FaGithub } from "react-icons/fa";

export const GithubCard = () => {
  return (
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
      onTouchStart={e => e.stopPropagation()}
      onClick={() => window.open("https://github.com/aleksandrostsiouris", "__blank")}>
      <FaGithub className="w-12 h-12 dark:text-primary-foreground" />
    </motion.div>
  )
}
