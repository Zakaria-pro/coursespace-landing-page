import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import TopHeaderBanner from '@/components/home/banner'
import { Container } from '@mui/material'

const DynamicHomeHero = dynamic(() => import('../../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../../components/home/courses-list'))
const DynamicHomeNewsLetter = dynamic(() => import('../../components/home/newsletter'))

const Course: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeHero /> */}
      {/* <DynamicHomePopularCourse /> */}
      {/* <DynamicHomeFeature /> */}
      {/* <DynamicHomeTestimonial /> */}
      <TopHeaderBanner
        title="Discover our online courses"
        subtitle="Embrace the opportunity to explore, learn, and thrive in the digital realm of knowledge that Chaimae's online courses offer"
      />
      <Container sx={{ pt: '70vh' }}>
        <DynamicHomeOurMentors />
        <DynamicHomeNewsLetter />
      </Container>
    </>
  )
}

Course.getLayout = (page) => <MainLayout isHome={false}>{page}</MainLayout>

export default Course
