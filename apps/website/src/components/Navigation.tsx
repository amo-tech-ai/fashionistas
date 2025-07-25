'use client'

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Menu,
  MenuItem,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon, KeyboardArrowDown } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  { label: 'Events', href: '/events' },
  { label: 'Tickets', href: '/tickets' },
  { 
    label: 'Partners', 
    href: '/partners',
    submenu: [
      { label: 'Sponsors', href: '/sponsors' },
      { label: 'Designers', href: '/designers' },
      { label: 'Models', href: '/models' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handlePartnersClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePartnersClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
          {/* Logo */}
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transition: 'opacity 0.3s ease',
                },
              }}
            >
              <Image
                src="/images/fashionistaslogo.png"
                alt="Fashionistas"
                width={140}
                height={45}
                style={{
                  width: 'auto',
                  height: '45px',
                  objectFit: 'contain',
                }}
                priority
              />
            </Box>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {menuItems.map((item) => (
                item.submenu ? (
                  <Box key={item.label}>
                    <Typography
                      onClick={handlePartnersClick}
                      sx={{
                        color: 'white',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.label}
                      <KeyboardArrowDown fontSize="small" />
                    </Typography>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handlePartnersClose}
                      sx={{
                        '& .MuiPaper-root': {
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          mt: 1,
                        },
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={handlePartnersClose}
                          component={Link}
                          href={subItem.href}
                          sx={{
                            color: 'white',
                            fontFamily: 'Inter, sans-serif',
                            '&:hover': {
                              backgroundColor: 'rgba(233, 30, 99, 0.1)',
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        cursor: 'pointer',
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          width: '0%',
                          height: 2,
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover': {
                          color: theme.palette.primary.main,
                          '&:after': {
                            width: '100%',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                )
              ))}
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  borderColor: 'white',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: 'rgba(233, 30, 99, 0.1)',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#1A1A1A',
            backgroundImage: 'none',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ fontFamily: 'Inter, sans-serif', color: 'white' }}>
              Menu
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <Link href={item.href} passHref style={{ textDecoration: 'none', width: '100%' }}>
                  <ListItemButton
                    onClick={handleDrawerToggle}
                    sx={{
                      textAlign: 'left',
                      '&:hover': {
                        backgroundColor: 'rgba(233, 30, 99, 0.1)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: {
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              mx: 2,
              width: 'calc(100% - 32px)',
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: 'rgba(233, 30, 99, 0.1)',
              },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}