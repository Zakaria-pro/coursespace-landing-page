import { useRouter } from 'next/router'
import { MentorCardItem } from '@/components/mentor'
import { data } from './../../components/home/mentors.data'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import TopHeaderBanner from '@/components/home/banner'
import { Box, Container, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import CourseDescription from '@/components/course/course-description'

const DynamicHomeNewsLetter = dynamic(() => import('../../components/home/newsletter'))
const DynamicHomeLearningProcess = dynamic(() => import('../../components/home/learning-process'))

const Course: NextPageWithLayout = () => {
  const router = useRouter()
  const { id } = router.query

  // Find the mentor with the matching ID
  const mentor = data.find((mentor) => mentor.id === Number(id))

  // If mentor is not found, you can handle it accordingly
  if (!mentor) {
    return <div>Mentor not found</div>
  }

  return (
    <>
      <TopHeaderBanner
        title={mentor.name}
        subtitle="Embrace the opportunity to explore, learn, and thrive in the digital realm of knowledge that Chaimae's online courses offer"
      />
      <div style={{ paddingTop: '70vh' }}>
        <CourseDescription mentor={mentor} />
        <DynamicHomeLearningProcess imageSrc="" altText="" />

        <DynamicHomeNewsLetter />
      </div>
    </>
  )
}

Course.getLayout = (page) => <MainLayout isHome={false}>{page}</MainLayout>

export default Course
