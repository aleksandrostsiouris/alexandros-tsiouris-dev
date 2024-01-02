"use client"
import React from 'react'
import { FaGithub } from "react-icons/fa";

export const GithubCard = () => {
  return (
    <div
      className='hover:cursor-pointer'
      onMouseDown={e => e.stopPropagation()}
      onTouchStart={e => e.stopPropagation()}
      onClick={() => window.open("https://github.com/aleksandrostsiouris", "__blank")}>
      <FaGithub className="w-12 h-12 dark:text-primary-foreground" />
    </div>
  )
}
