'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Grid,
  useTheme,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material'
import { motion } from 'framer-motion'
import { CreditCard, Shield } from '@mui/icons-material'
import { gradientButtonStyle, gradientButtonOutlinedStyle } from '@/styles/buttonStyles'
import { useState, useEffect } from 'react'

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to August 14, 2025 (event date)
    const targetDate = new Date('2025-08-14T20:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2
        }}
      >
        Choose Your Perfect Ticket
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Inter, sans-serif',
          mb: 1
        }}
      >
        Reserve your spot for Medellín's most glamorous night!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'Inter, sans-serif',
          mb: 4
        }}
      >
        Join 100+ attendees who've already secured their tickets
      </Typography>

      {/* Countdown Display */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: { xs: 2, md: 4 },
        mb: 3
      }}>
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds }
        ].map((item, index) => (
          <Box key={item.label} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1
              }}
            >
              {formatNumber(item.value)}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.1em'
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic'
        }}
      >
        Don't miss out on Medellín's most glamorous event!
      </Typography>
    </Box>
  )
}

const ticketTiers = [
  {
    id: 'general',
    title: 'General Admission',
    description: 'Standard access to the Fashionistas Valentine\'s Event',
    price: 99,
    features: [
      'Standard seating',
      'Welcome drink',
      'Event program',
      'Access to general areas',
      'Basic networking opportunities'
    ],
    availability: 'Limited Tickets Remaining',
    buttonText: 'Select Ticket',
    gradient: false
  },
  {
    id: 'vip',
    title: 'VIP Experience',
    description: 'Premium access with exclusive perks and privileges',
    price: 249,
    features: [
      'Front-row seating',
      'Welcome champagne',
      'VIP lounge access',
      'Meet & greet opportunities',
      'After-party entry'
    ],
    availability: 'Only 20 VIP Tickets Left',
    buttonText: 'Select Ticket',
    badge: 'VIP',
    gradient: true
  },
  {
    id: 'sponsor',
    title: 'Sponsor Package',
    description: 'Ultimate experience with maximum visibility',
    price: 499,
    features: [
      'Premium seating',
      'Unlimited premium drinks',
      'Private suite access',
      'Brand visibility opportunities',
      'Private after-party suite'
    ],
    availability: '5 Exclusive Spots Left',
    buttonText: 'Select Ticket',
    badge: 'VIP',
    gradient: true
  }
]

export default function TicketSection() {
  const theme = useTheme()

  const handleTicketSelection = (ticketId: string, price: number) => {
    // This would integrate with Stripe
    console.log(`Selecting ${ticketId} ticket for $${price}`)
    // In a real implementation, this would redirect to Stripe Checkout
    // or open a Stripe payment modal
  }

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#0A0A0A',
        position: 'relative',
        background: 'linear-gradient(180deg, #0A0A0A 0%, rgba(26, 26, 26, 0.9) 100%)',
        overflow: 'hidden'
      }}
      id="tickets"
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(233, 30, 99, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <CountdownTimer />

        <Grid container spacing={4} justifyContent="center">
          {ticketTiers.map((tier, index) => (
            <Grid item xs={12} md={4} key={tier.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: tier.gradient ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tier.badge && (
                    <Chip
                      label={tier.badge}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem'
                      }}
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {tier.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: 'Inter, sans-serif',
                        mb: 3,
                        lineHeight: 1.5
                      }}
                    >
                      {tier.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h3"
                        component="span"
                        sx={{
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 700,
                          fontSize: '3rem'
                        }}
                      >
                        ${tier.price}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontFamily: 'Inter, sans-serif',
                          ml: 1
                        }}
                      >
                        /person
                      </Typography>
                    </Box>

                    <List sx={{ mb: 3 }}>
                      {tier.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.95rem'
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Shield sx={{ color: 'rgba(255, 255, 255, 0.6)', mr: 1, fontSize: '1rem' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        Secure payment with Stripe
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={() => handleTicketSelection(tier.id, tier.price)}
                      startIcon={<CreditCard />}
                      sx={{
                        ...(tier.gradient ? gradientButtonStyle : gradientButtonOutlinedStyle),
                        py: 1.5,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        borderRadius: 2,
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>

                  <Box sx={{ px: 4, pb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: tier.gradient ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: tier.gradient ? 600 : 400,
                        textAlign: 'center',
                        display: 'block'
                      }}
                    >
                      {tier.availability}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}