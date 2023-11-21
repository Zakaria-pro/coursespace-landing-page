import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
  isHome: Boolean
}

const MainLayout: FC<Props> = ({ children, isHome }) => {
  return (
    <Box component="main">
      {isHome && <Header isHome={true} />}

      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
