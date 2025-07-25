import { SxProps } from '@mui/material'

export const gradientButtonStyle: SxProps = {
  background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
  color: 'white',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 2,
  px: 3,
  py: 1.5,
  boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(90deg, #D81B60 0%, #8E24AA 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(233, 30, 99, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
  },
  '&.Mui-disabled': {
    background: 'linear-gradient(90deg, rgba(233, 30, 99, 0.4) 0%, rgba(156, 39, 176, 0.4) 100%)',
    color: 'rgba(255, 255, 255, 0.6)',
  }
}

export const gradientButtonOutlinedStyle: SxProps = {
  background: 'transparent',
  color: '#E91E63',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 2,
  px: 3,
  py: 1.5,
  border: '2px solid transparent',
  backgroundImage: 'linear-gradient(#0A0A0A, #0A0A0A), linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(233, 30, 99, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
  }
}
