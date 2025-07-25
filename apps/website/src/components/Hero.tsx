'use client'

import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material'
import { CalendarMonth, LocationOn } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { gradientButtonStyle, gradientButtonOutlinedStyle } from '@/styles/buttonStyles'
import GradientButton from './GradientButton'

export default function Hero() {
  const theme = useTheme()
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.95) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(233, 30, 99, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            color: 'white',
            mt: { xs: 10, md: 0 },
          }}
        >
          {/* Main Title */}
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
              fontWeight: 300,
              lineHeight: 0.9,
              mb: 3,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.8) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(255, 255, 255, 0.5)',
            }}
          >
            Fashionistas: A<br />
            Night of Glamour<br />
            & Fashion
          </Typography>

          {/* Event Tagline */}
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variant="h5"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              mb: 4,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              color: 'white',
              letterSpacing: '0.02em',
            }}
          >
            Medellín&apos;s most glamorous fashion show
          </Typography>

          {/* Date and Location */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarMonth sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="h6" sx={{ fontFamily: 'Inter, sans-serif', color: 'white' }}>
                August 14, 2025
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="h6" sx={{ fontFamily: 'Inter, sans-serif', color: 'white' }}>
                Medellín, Colombia
              </Typography>
            </Box>
          </Stack>

          {/* CTA Buttons */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <GradientButton
              size="large"
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Get Tickets
            </GradientButton>
            <GradientButton
              size="large"
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontFamily: 'Inter, sans-serif',
                background: 'transparent',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(233, 30, 99, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(233, 30, 99, 0.1), rgba(156, 39, 176, 0.1)), linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                },
              }}
            >
              Sign Up Now
            </GradientButton>
          </Stack>

          {/* Decorative Elements */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            sx={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.6, fontFamily: 'Inter, sans-serif', color: 'white' }}>
              Scroll to explore
            </Typography>
            <Box
              component={motion.div}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              sx={{
                width: 30,
                height: 50,
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                pt: 1,
                '&::after': {
                  content: '""',
                  width: 4,
                  height: 10,
                  backgroundColor: 'white',
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}