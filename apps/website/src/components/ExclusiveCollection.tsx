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
import { gradientButtonStyle, gradientButtonOutlinedStyle } from '@/styles/buttonStyles'

const exclusiveCollections = [
  {
    id: 1,
    title: 'Summer Swim Collection',
    designer: 'By Aqua Luxe',
    description: 'Premium swimwear featuring bold colors and contemporary cuts for the confident fashionista.',
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1737104247/f-swim-007_doqxfu.jpg',
    alt: 'Summer Swim Collection'
  },
  {
    id: 2,
    title: 'Resort Wear Elegance',
    designer: 'By Coastal Couture',
    description: 'Sophisticated beachwear combining comfort with high-end fashion for luxury resort destinations.',
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1737103864/f-swim-005_ognocc.jpg',
    alt: 'Resort Wear Collection'
  },
  {
    id: 3,
    title: 'Designer Showcase',
    designer: 'By Creative Studio',
    description: 'Exclusive designer pieces showcasing innovative patterns and contemporary style.',
    image: 'https://res.cloudinary.com/dzqy2ixl0/image/upload/v1738046766/fashion-designer_ecsahi.jpg',
    alt: 'Fashion Designer Collection'
  }
]

export default function ExclusiveCollection() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#0A0A0A',
        position: 'relative',
        background: 'linear-gradient(180deg, #0A0A0A 0%, rgba(26, 26, 26, 0.8) 100%)',
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
            mb: 8,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: 'white',
            letterSpacing: '0.02em',
          }}
        >
          Exclusive Collection
        </Typography>

        <Grid container spacing={4}>
          {exclusiveCollections.map((collection, index) => (
            <Grid item xs={12} md={4} key={collection.id}>
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
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    '&:hover .card-image': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      overflow: 'hidden',
                      borderRadius: 2,
                      mb: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={collection.image}
                      alt={collection.alt}
                      className="card-image"
                      sx={{
                        width: '100%',
                        height: 450,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 0, pb: 3 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '1.5rem',
                        mb: 0.5,
                      }}
                    >
                      {collection.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        mb: 2,
                      }}
                    >
                      {collection.designer}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                      }}
                    >
                      {collection.description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 0, gap: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        ...gradientButtonOutlinedStyle,
                        flex: 1,
                        py: 1.5,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        borderRadius: 1,
                      }}
                    >
                      Explore
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        ...gradientButtonStyle,
                        flex: 1,
                        py: 1.5,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        borderRadius: 1,
                      }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}