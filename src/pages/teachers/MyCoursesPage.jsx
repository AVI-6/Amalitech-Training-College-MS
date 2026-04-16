import React from 'react'
import PageHeader from '../../components/ui/modal/teachers/PageHeader'
import '../../styles/teachers/mycoursepage.css'
import TeachersCourse from '../../components/ui/modal/teachers/TeachersCourse'
import { useNavigate } from 'react-router-dom'

function MyCoursesPage() {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/teachers/courses/my-course')
  }
  return (
    <div className='my-courses-page-div'>
      <div className="my-course-page-top-content">
        <PageHeader userName={'Hi Sarah Mitchell,'} />
      </div>
      <div className="my-course-page-bottom-content">
        <TeachersCourse onClick={handleNavigate} progress={65}/>
        <TeachersCourse onClick={handleNavigate} progress={45}/>
        <TeachersCourse onClick={handleNavigate} progress={90}/>
        <TeachersCourse onClick={handleNavigate} progress={55}/>
      </div>
    </div>
  )
}

export default MyCoursesPage
