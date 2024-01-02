"use client"
import React from 'react'
import { ThemeProvider as NTP } from "next-themes";

export const ThemeProvider = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <NTP
      attribute='class'>
      {children}
    </NTP>
  )
}
