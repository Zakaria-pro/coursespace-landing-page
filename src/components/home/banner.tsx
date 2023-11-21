import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Header } from '../header' // Import your Header component here

interface TopHeaderBannerProps {
  title: string
  subtitle: string
}

const backgroundImage =
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const TopHeaderBanner: FC<TopHeaderBannerProps> = ({ title, subtitle }) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative', // Position relative for containing absolute elements
    width: '100%',
  }

  const bannerStyle: React.CSSProperties = {
    width: '100%',
    height: '70vh',
    position: 'absolute', // Position absolute for overlay
    top: 0,
    left: 0,
    background: `url(${backgroundImage}) center/cover`,
  }
  const headerContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2, // Set the zIndex to ensure the Header is on top
  }

  const overlayStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(18,124,113,0.2)', // Transparent background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }

  return (
    <Box sx={containerStyle}>
      <Box sx={bannerStyle}>
        <Box sx={overlayStyle}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: 16, md: 24 }, textAlign: 'center', px: { xs: 2, md: 10 } }}
          >
            {subtitle}
          </Typography>
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: 24, md: 48 } }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box sx={headerContainerStyle}>
        <Header isHome={false} /> {/* Include the Header component */}
      </Box>
    </Box>
  )
}

export default TopHeaderBanner
