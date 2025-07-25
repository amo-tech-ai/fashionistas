'use client'

import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const GradientButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
  backgroundSize: '200% 100%',
  backgroundPosition: '0% 50%',
  color: '#FFFFFF',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 24,
  padding: '12px 32px',
  fontSize: '1rem',
  boxShadow: '0 4px 20px rgba(233, 30, 99, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    background: 'linear-gradient(90deg, #D81B60 0%, #8E24AA 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 30px rgba(233, 30, 99, 0.5)',
    backgroundPosition: '100% 50%',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
  
  // Add a subtle shimmer effect
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transition: 'left 0.5s ease',
  },
  
  '&:hover::before': {
    left: '100%',
  },
  
  '&.MuiButton-sizeLarge': {
    padding: '14px 40px',
    fontSize: '1.1rem',
  },
  
  '&.MuiButton-sizeSmall': {
    padding: '8px 24px',
    fontSize: '0.9rem',
  },
  
  '&:disabled': {
    background: 'linear-gradient(90deg, #9E9E9E 0%, #757575 100%)',
    color: 'rgba(255, 255, 255, 0.6)',
  },
}))

export default GradientButton
