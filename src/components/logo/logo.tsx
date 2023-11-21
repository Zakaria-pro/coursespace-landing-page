import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  // onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ variant }) => {
  return (
    <Link href="/">
      <Typography
        variant="h4"
        component="h1"
        sx={{
          backgroundColor: 'white',
          padding: '10px 15px',
          borderRadius: 6,
          fontWeight: 700,
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'background.paper', // Change the background color on hover if needed
          },
        }}
      >
        Course<span>space</span>
      </Typography>
    </Link>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
