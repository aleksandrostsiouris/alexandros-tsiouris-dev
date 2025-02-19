import type { Metadata } from 'next'
import { Montserrat, Caveat, Pacifico } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers/providers'
import { PostHogProvider } from '@/providers/posthog-provider'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--montserrat'
});
const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
  variable: '--caveat'
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--pacifico'
});

export const metadata: Metadata = {
  title: 'Alexander Tsiouris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en">
      <PostHogProvider>
        <body
          suppressHydrationWarning
          className={cn(
            pacifico.variable,
            montserrat.className,
            montserrat.variable,
            caveat.variable,
            "bg-background dark:bg-background scrollbar-none"
          )}>
          <Providers>
            {children}
          </Providers>
        </body>
      </PostHogProvider>
    </html>
  )
}
