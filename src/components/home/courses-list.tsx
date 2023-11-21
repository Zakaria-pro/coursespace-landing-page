import React from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data' // Assuming your data is available here
import { Container } from '@mui/material'

const CoursesList = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h1" sx={{ fontSize: 40, textAlign: 'center' }}>
        Our Language Courses
      </Typography>

      <Grid container spacing={3}>
        {data.map((course) => (
          <Grid key={course.id} item xs={12} sm={6} md={4} lg={4}>
            <Link href={`/courses/${course.id}`}>
              <MentorCardItem key={course.id} item={course} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CoursesList
