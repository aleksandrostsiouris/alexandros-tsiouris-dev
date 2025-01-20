"use client"
import React from 'react'
import posthog from "posthog-js"
import { PostHogProvider as PHP } from "posthog-js/react"

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })
}

export const PostHogProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <PHP client={posthog}>
      {children}
    </PHP>
  )
}
