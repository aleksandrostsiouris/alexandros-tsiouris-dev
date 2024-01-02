"use client"

import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export const LinkedInCard = () => {
  return (
    <div
      className='hover:cursor-pointer'
      onMouseDown={e => e.stopPropagation()}
      onTouchStart={e => e.stopPropagation()}
      onClick={() => window.open("https://www.linkedin.com/in/alexandros-tsiouris-8684bb166/", "__blank")}>
      <FaLinkedin className="w-12 h-12 dark:text-primary-foreground" />
    </div>
  )
}
