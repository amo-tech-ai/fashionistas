'use client'

import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  TextField, 
  IconButton, 
  Link,
  Card,
  CardContent,
  useTheme,
  InputAdornment
} from '@mui/material'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  LocationOn, 
  Phone, 
  Email as EmailIcon,
  Send
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'
import { gradientButtonStyle } from '@/styles/buttonStyles'

export default function Footer() {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) {
      // This would integrate with email service
      console.log(`Subscribing email: ${email}`)
      setIsSubscribed(true)
      setEmail('')
      // Reset after 3 seconds for demo
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubscribe()
    }
  }

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Event Highlights', href: '#highlights' },
    { label: 'Designer Showcase', href: '#designers' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Sponsors', href: '#partners' },
    { label: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/fashionistas-medellin',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/fashionistas_medellin',
      label: 'Instagram'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/fashionistas_med',
      label: 'Twitter'
    }
  ]

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A0A0A',
        background: 'linear-gradient(180deg, #0A0A0A 0%, rgba(15, 15, 15, 0.95) 100%)',
        py: 8,
        mt: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 80%, rgba(233, 30, 99, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={6}>
          {/* Column 1: Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                {/* Logo */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3
                  }}
                >
                  <Image
                    src="/images/fashionistaslogo.png"
                    alt="Fashionistas Logo"
                    width={50}
                    height={50}
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      color: 'white'
                    }}
                  >
                    Fashionistas
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6,
                    mb: 3,
                    maxWidth: '300px'
                  }}
                >
                  A next-gen community for fashion lovers. It offers a free, all-in-one platform to explore designer wear, connect with fellow fashion enthusiasts, and access exclusive content and media features. Discover trends, share your style, and stay connected with everything fashion.
                </Typography>

                {/* Learn More Button */}
                <GradientButton
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                  }}
                >
                  Learn More
                </GradientButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Column 2: Navigation Menu */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Quick Links
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Column 3: Newsletter and Contact */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Newsletter Subscription */}
              <Card
                sx={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  mb: 4
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    Stay Updated
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'Inter, sans-serif',
                      mb: 3,
                      lineHeight: 1.5
                    }}
                  >
                    Get the latest updates on fashion events, exclusive offers, and behind-the-scenes content.
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isSubscribed}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                        '& .MuiOutlinedInput-input': {
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.5)',
                          },
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleSubscribe}
                              disabled={isSubscribed}
                              sx={{
                                color: isSubscribed ? theme.palette.success.main : theme.palette.primary.main,
                                '&:hover': {
                                  backgroundColor: 'rgba(233, 30, 99, 0.1)',
                                },
                              }}
                            >
                              <Send />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  {isSubscribed && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.success.main,
                        fontFamily: 'Inter, sans-serif',
                        mt: 1,
                        display: 'block'
                      }}
                    >
                      ✓ Successfully subscribed!
                    </Typography>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    mb: 3
                  }}
                >
                  Contact Info
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.4
                      }}
                    >
                      Centro de Convenciones Plaza Mayor<br />
                      Medellín, Antioquia, Colombia
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      +57 (4) 555-0123
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      hello@fashionistas-medellin.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Social Media Icons */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Follow Us
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        width: 48,
                        height: 48,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)',
                        },
                      }}
                    >
                      <social.icon fontSize="small" />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 6,
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            © 2025 Fashionistas Medellín. All rights reserved.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Powered by EventsOS
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}