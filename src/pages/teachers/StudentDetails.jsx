import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import studentDatabaseUrl from '../../mocked DataBase/studentDatabase.json?url'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import { FaMessage, FaRegCircleUser } from 'react-icons/fa6'
import '../../styles/teachers/studentsDetails.css'
import { BsEnvelope } from 'react-icons/bs'
import { LuPhone } from 'react-icons/lu'
import { FaRegCalendar } from 'react-icons/fa'
import Error from '../../components/ui/feedback/Error'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { SlGraduation } from 'react-icons/sl'
import { FiAward } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

function StudentDetails() {
  const [studentDetails, setStudentDetails] = React.useState(null)
  const {cdetails} = useParams()
  console.log(cdetails)
  useEffect(()=>{
    const fetchStudentDetails = async () => {
      try {
        // Simulate fetching student details from an API
        const response = await fetch(studentDatabaseUrl)
        if (!response.ok) {
          throw new Error('Failed to fetch student details')
        }
        const data = await response.json()
        console.log(data.id)
        const studentDetails = data.find(student => student.id === cdetails) // Replace with actual student ID
        setStudentDetails(studentDetails)
        console.log('Student Details:', data)
      } catch (error) {
        console.error('Error fetching student details:', error)
      }
    }

    fetchStudentDetails()
  },[cdetails])
  return (
    <div className='student-details-page-div'>
      <div className="student-details-header-div">
        <AdminPageHeader title={'Student Details'} backTo={()=>window.history.back()} />
      </div>
      {studentDetails ? (
        <div className="student-deatils-content-div">
          <div className="student-details-top-wrapper">
            <div className="student-details-top">
              <div className="student-details-top-left">
                <FaRegCircleUser />
              </div>
              <div className="student-details-top-right">
                <h1>{studentDetails.name}</h1>
                <div className="details-right-middle">
                  <p>ID: {studentDetails.id}</p>
                  <p className='student-details-status'>{studentDetails.status}</p>
                </div>
                <div> {studentDetails.courses.map((course) => (
                  <div className='' key={course.code}>
                    <p>{course.title}</p>
                  </div>
                ))} </div>
              </div>
            </div> 
            <div className="student-details-bottom-wrapper">
              <div className="student-details-bottom">
                <BsEnvelope />
                <div className="student-details-bottom-mail">
                  <label htmlFor="">Email</label>
                  <p> {studentDetails.email} </p>
                </div>
              </div>
              <div className="student-details-bottom">
                <LuPhone />
                <div className="student-details-bottom-mail">
                  <label htmlFor="">Phone</label>
                  <p> {studentDetails.phone} </p>
                </div>
              </div>
              <div className="student-details-bottom">
                <FaRegCalendar />
                <div className="student-details-bottom-mail">
                  <label htmlFor="">Enrollment Date</label>
                  <p> {studentDetails.enrollmentDate} </p>
                </div>
              </div>
            </div>          
          </div>
          <div className="quick-details">
            <AdminUpdates icon={<SlGraduation/>} text={'G.P.A'} value={(studentDetails.gpa).toFixed(2)} />
            <AdminUpdates icon={<SlGraduation/>} text={'Average Attendance'} 
              value={(studentDetails.attendance.reduce((a, b) => a + b, 0) / studentDetails.attendance.length * 100).toFixed(2) + '%'} 
            />
            <AdminUpdates icon={<FiAward/>} text={'Credits out of 120 required'} value={studentDetails.credits} />
          </div>
          
          <div className="details-contacts">
            <h3>Contact Information</h3>
            <div className="details-contacts-item">
              <IoLocationOutline />
              <div>
                <label htmlFor="">Address</label>
                <p>{studentDetails.address}</p>
                <p>{studentDetails.region}</p>  
              </div>
            </div>
            <div className="details-contacts-item">
              <FaRegCalendar />
              <div>
                <label htmlFor="">Date of Birth</label>
                <p>{studentDetails.dateOfBirth}</p>
              </div>
            </div>
          </div>

          <div className="student-details-bottom-content">
            <h3>Recent Grades</h3>
            <div className="student-details-grades">
              {studentDetails.grades.map((grade, index) => (
                <div className="student-details-grade-item" key={index}>
                  <div className="student-details-grade-item-left">
                    <p>{grade.course}</p>
                    <p className='color'>{grade.semester}</p>
                  </div>
                  <p className='student-details-grade-item-right'>{grade.value}%</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      ) : (
        <Error message={`Failed to load student details. ${cdetails} does not exist. Please try again later.`} />
      )}

    </div>
  )
}

export default StudentDetails


