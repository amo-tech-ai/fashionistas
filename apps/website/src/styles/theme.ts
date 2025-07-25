'use client'

import { createTheme } from '@mui/material/styles'

// Fashion-focused dark theme for EventsOS
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E91E63', // Fashion Pink
      light: '#F06292',
      dark: '#C2185B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700', // Gold
      light: '#FFE082',
      dark: '#FFC107',
      contrastText: '#000000',
    },
    background: {
      default: '#0A0A0A', // Very dark background
      paper: '#1A1A1A', // Slightly lighter for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      fontFamily: '"Playfair Display", serif',
    },
    body1: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"Inter", "Roboto", sans-serif',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 28px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(233, 30, 99, 0.4)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
          boxShadow: '0 3px 15px rgba(233, 30, 99, 0.3)',
          '&:hover': {
            background: 'linear-gradient(90deg, #D81B60 0%, #8E24AA 100%)',
            boxShadow: '0 6px 25px rgba(233, 30, 99, 0.5)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #FFD700 30%, #FFE082 90%)',
          boxShadow: '0 3px 15px rgba(255, 215, 0, 0.3)',
          color: '#000000',
        },
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1.1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(26, 26, 26, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(233, 30, 99, 0.2)',
            border: '1px solid rgba(233, 30, 99, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
})

export default theme