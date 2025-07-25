'use client'

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { 
  EventNote, 
  People, 
  Analytics, 
  AutoAwesome, 
  CloudSync, 
  Security 
} from '@mui/icons-material'

const features = [
  {
    icon: <EventNote fontSize="large" />,
    title: 'Smart Planning',
    description: 'AI-powered timeline generation and task automation for flawless event execution.'
  },
  {
    icon: <People fontSize="large" />,
    title: 'Attendee Management',
    description: 'Seamless registration, check-in, and personalized experiences for every guest.'
  },
  {
    icon: <Analytics fontSize="large" />,
    title: 'Real-time Analytics',
    description: 'Track engagement, measure ROI, and generate comprehensive post-event reports.'
  },  {
    icon: <AutoAwesome fontSize="large" />,
    title: 'AI Agents',
    description: 'Intelligent assistants handle routine tasks while you focus on strategy.'
  },
  {
    icon: <CloudSync fontSize="large" />,
    title: 'Seamless Integrations',
    description: 'Connect with Twenty CRM, SendGrid, WhatsApp, and your favorite tools.'
  },
  {
    icon: <Security fontSize="large" />,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with industry standards.'
  }
]

export default function Features() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }} id="features">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          Everything You Need to Run Exceptional Events
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          From intimate fashion shows to large-scale corporate galas
        </Typography>        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}