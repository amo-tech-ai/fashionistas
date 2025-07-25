'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Grid,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import GradientButton from './GradientButton'
import { gradientButtonStyle } from '@/styles/buttonStyles'

const partnerOpportunities = [
  {
    id: 'model',
    title: 'Register as a Model',
    description: 'Join the runway and showcase your talent at Medellín\'s most glamorous event.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop',
    alt: 'Professional model showcasing fashion on runway'
  },
  {
    id: 'designer',
    title: 'Sign Up as a Designer',
    description: 'Showcase your lingerie designs to an exclusive audience of fashion enthusiasts.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2787&auto=format&fit=crop',
    alt: 'Fashion designer working on lingerie designs'
  },
  {
    id: 'sponsor',
    title: 'Become a Sponsor',
    description: 'Partner with us to reach luxury fashion consumers and industry leaders.',
    image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=2787&auto=format&fit=crop',
    alt: 'Luxury fashion event sponsorship opportunity'
  }
]

export default function PartnerSection() {
  const theme = useTheme()

  const handleSignUp = (partnerId: string) => {
    // This would integrate with the registration system
    console.log(`Signing up as ${partnerId}`)
    // In a real implementation, this would open a registration modal
    // or redirect to a dedicated signup page
  }

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#0A0A0A',
        position: 'relative',
        background: 'linear-gradient(180deg, #0A0A0A 0%, rgba(26, 26, 26, 0.8) 100%)',
      }}
      id="partners"
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(233, 30, 99, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="h2"
            sx={{
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              letterSpacing: '0.02em',
            }}
          >
            Join the Fashionistas Experience!
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Be part of Medellín's most anticipated fashion event
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {partnerOpportunities.map((opportunity, index) => (
            <Grid item xs={12} md={4} key={opportunity.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    },
                    '&:hover .card-image': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      overflow: 'hidden',
                      height: 300,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={opportunity.image}
                      alt={opportunity.alt}
                      className="card-image"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    {/* Subtle overlay for better text contrast */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '30%',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
                      }}
                    />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1.5rem',
                        mb: 2,
                        lineHeight: 1.3
                      }}
                    >
                      {opportunity.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.6,
                        fontSize: '1rem'
                      }}
                    >
                      {opportunity.description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <GradientButton
                      fullWidth
                      size="large"
                      onClick={() => handleSignUp(opportunity.id)}
                      sx={{
                        py: 1.5,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        borderRadius: 2,
                      }}
                    >
                      Sign Up Now
                    </GradientButton>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Call-to-Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic'
            }}
          >
            Limited spots available for each opportunity. Join us now!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}