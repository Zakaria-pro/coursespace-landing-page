import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Container } from '@mui/material'

interface LearnCardProps {
  imageSrc: string
  altText: string
}

const LearnCard: React.FC<LearnCardProps> = ({ imageSrc, altText }) => {
  return (
    <Container maxWidth="lg" sx={{ pb: 10 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left side with image */}
        <Box
          sx={{
            flex: { xs: 'none', md: '0 0 50%' },
            height: { xs: 200, md: 'auto' },
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1616587894289-86480e533129?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={altText}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Box>

        {/* Right side with text content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2, fontSize: 24 }}>
              How You'll Learn
            </Typography>

            <ol>
              <li>
                <Typography variant="body1" sx={{ mb: 2, fontSize: 18 }}>
                  Classes are held via real-time video calls with your instructor. You'll log in to your live online
                  classes via your MyBerlitz platform with the click of a button.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" sx={{ mb: 2, fontSize: 18 }}>
                  Your friendly Berlitz instructor will welcome you, establish the goals for the lesson, and start your
                  learning.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" sx={{ mb: 2, fontSize: 18 }}>
                  All live online classes use our proven Berlitz Method. This means your instructor will deliver your
                  classes in your target language and have you using your new skills right away.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" sx={{ fontSize: 18 }}>
                  Every lesson follows the present, practice, and perform structure. New learning content is presented
                  by your instructor, you then take part in both guided practice and general practice, and are then
                  encouraged to perform what you have learnt.
                </Typography>
              </li>
            </ol>
          </CardContent>
        </Box>
      </Card>
    </Container>
  )
}

export default LearnCard
