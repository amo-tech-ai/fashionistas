import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'
import WhatsAppButton from '@/components/WhatsAppButton'

// Configure fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EventsOS - Medellín Fashion Events Platform',
  description: 'Transform your fashion events with intelligent automation. From runway shows to galas, manage everything with AI-powered tools.',
  keywords: 'fashion events, event management, Medellín, runway shows, galas, AI automation',
  openGraph: {
    title: 'EventsOS - Medellín Fashion Events Platform',
    description: 'Transform your fashion events with intelligent automation.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <WhatsAppButton />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}