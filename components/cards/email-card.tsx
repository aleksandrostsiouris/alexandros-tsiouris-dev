"use client"
import { motion } from "framer-motion";
import { MdAlternateEmail } from "react-icons/md";

export const EmailCard = () => {
  return (
    <motion.div
      whileHover={{
        rotateZ: -60,
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
      onClick={() => { window.location.href = "mailto:alexandros.tsiouris.dev@gmail.com" }}>
      <MdAlternateEmail className="w-12 h-12 dark:text-primary-foreground" />
    </ motion.div>
  )
}
