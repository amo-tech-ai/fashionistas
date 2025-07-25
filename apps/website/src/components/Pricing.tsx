'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const tiers = [
  {
    title: 'Starter',
    price: '99',
    description: 'Perfect for small events and testing the platform',
    features: [
      'Up to 500 attendees',
      'Basic AI automation',
      'Email support',
      'Standard integrations',
      'Event analytics'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'outlined' as const,
  },  {
    title: 'Professional',
    price: '299',
    description: 'For growing event agencies and corporate teams',
    features: [
      'Up to 5,000 attendees',
      'Advanced AI agents',
      'Priority support',
      'All integrations',
      'Custom branding',
      'API access'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained' as const,
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale events',
    features: [
      'Unlimited attendees',
      'Custom AI workflows',
      'Dedicated support',
      'White-label options',
      'On-premise deployment',
      'SLA guarantee'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined' as const,
  },
]
export default function Pricing() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }} id="pricing">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Choose the plan that fits your event needs
        </Typography>
        
        <Grid container spacing={3} alignItems="flex-start">
          {tiers.map((tier) => (
            <Grid item xs={12} sm={6} md={4} key={tier.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  ...(tier.highlighted && {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                    borderStyle: 'solid',
                  })
                }}
              >                {tier.highlighted && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    MOST POPULAR
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, pt: tier.highlighted ? 4 : 3 }}>
                  <Typography variant="h4" component="h3" gutterBottom>
                    {tier.title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h3" component="span" fontWeight="bold">
                      ${tier.price}
                    </Typography>                    {tier.price !== 'Custom' && (
                      <Typography variant="h6" component="span" color="text.secondary">
                        /month
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {tier.description}
                  </Typography>
                  <List dense>
                    {tier.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    size="large"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}