import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Mentor } from '@/interfaces/mentor'
import { Container } from '@mui/material'

interface Props {
  mentor: Mentor
}

const CourseDescription: FC<Props> = ({ mentor }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ px: 1.5, py: 5 }}>
        {/* Course Details Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" sx={{ fontSize: 32 }}>
            {mentor.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{mentor.category}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {mentor.description}
          </Typography>
        </Box>

        {/* Why Take the Course Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" sx={{ fontSize: 32 }}>
            Why Take This Course
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This course is designed for individuals seeking [specific outcomes or skills]. Whether you are a beginner
            looking to [objective], an intermediate learner aiming to [goal], or an advanced professional striving to
            [achievement], this course provides a tailored learning experience to meet your unique needs.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Benefit from expert guidance, practical insights, and a supportive learning community. Join us on this
            educational journey to unlock your potential and achieve [desired outcomes].
          </Typography>
          {/* Add more reasons to take the course as needed */}
        </Box>

        {/* Additional Sections */}
        {/* Add more sections as needed, such as testimonials, course requirements, etc. */}
      </Box>
    </Container>
  )
}

export default CourseDescription
