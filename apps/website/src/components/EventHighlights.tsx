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
  IconButton
} from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Circle, CircleOutlined } from '@mui/icons-material'
import { gradientButtonStyle } from '@/styles/buttonStyles'

const eventHighlights = [
  {
    id: 1,
    title: 'Runway Collection',
    description: "Experience our exclusive Valentine's collection featuring elegant evening wear and haute couture designs.",
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1738223985/cruise-fashion_f1gaxb.jpg',
    alt: 'Runway Collection'
  },
  {
    id: 2,
    title: 'Luxury Lingerie',
    description: 'Discover the most sophisticated and glamorous lingerie designs from top international designers.',
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1738222945/swim-fashion_l1arzm.jpg',
    alt: 'Luxury Lingerie'
  },
  {
    id: 3,
    title: 'Backstage Glamour',
    description: 'Get exclusive behind-the-scenes access to the preparation and excitement before the show.',
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1738223218/june-fashion_jya3sr.jpg',
    alt: 'Backstage Glamour'
  }
]

export default function EventHighlights() {
  const theme = useTheme()
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#0A0A0A',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: 'white',
          }}
        >
          Event Highlights
        </Typography>

        <Grid container spacing={4}>
          {eventHighlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={highlight.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(233, 30, 99, 0.3)',
                      border: '1px solid rgba(233, 30, 99, 0.3)',
                      '& .card-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', height: 300 }}>
                    <CardMedia
                      component="img"
                      image={highlight.image}
                      alt={highlight.alt}
                      className="card-image"
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                      }}
                    />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      sx={{
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1.75rem',
                        mb: 2,
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        ...gradientButtonStyle,
                        py: 1.5,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Carousel Dots for Mobile */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
            gap: 1,
          }}
        >
          {eventHighlights.map((_, index) => (
            <IconButton
              key={index}
              size="small"
              onClick={() => setActiveSlide(index)}
              sx={{ p: 0 }}
            >
              {activeSlide === index ? (
                <Circle sx={{ fontSize: 10, color: theme.palette.primary.main }} />
              ) : (
                <CircleOutlined sx={{ fontSize: 10, color: 'rgba(255, 255, 255, 0.3)' }} />
              )}
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  )
}