import React from 'react'
import { ThemeProvider } from '@/providers/theme-provider'

export const Providers = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <React.Fragment>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
