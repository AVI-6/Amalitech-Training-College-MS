import React from 'react'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import WhiteButton from '../../components/buttons/WhiteButton'
import CategoriesContents from '../../components/ui/modal/admin/CategoriesContents'
import Button from '../../components/buttons/Button'
import RecentStudents from '../../components/ui/modal/RecentStudents'
import { FaPerson } from 'react-icons/fa6'
import Schedule from '../../features/schedule/components/Schedule'
import RecentStudentsAttendacnce from '../../components/ui/modal/RecentStudentsAttendacnce'
import AdminPageHeader from '../../components/admin/AdminPageHeader'

function ViewClassDetails() {
  return (
    <div className='view-class-details-div'>
      <div className="view-class-details-top-content">
        <AdminPageHeader title={'Web Development -2500 students - Year 3'} subtitle={'Web-dev 301'} backTo={'/admin/classes'} />
      </div>
      <div className="view-class-details-bottom-content">
        <div className="class-details-class-info">
          <div className="details-class-info-top-content">
            <h3>Class Information</h3>
            <WhiteButton name={'Edit Class'} />
          </div>
          <div className="class-info-bottom-content">
            <div className="class-id">
              <p>Class ID</p>
              <b>Web-dev 301</b>
            </div>
            <div className="class-desc">
              <p>Description</p>
              <b>Introduction to modern web development covering HTML, CSS, JavaScript, and React fundamentals.</b>
            </div>
            <div className="class-semester">
              <p>Semester</p>
              <b>Fall 2025</b>
            </div>
          </div>
        </div>
        <div className="enrolled-students-div">
          <div className="enrolled-students-top-content">
            <h3>Enrolled Students</h3>
            <Button name={'Add Student'} styles={{backgroundColor: 'transparent', border: '1px solid #333', color: 'black'}}/>
          </div>
          <div className="enrolled-students-bottom-content">
            <div className="enrolled-div">
              <div className="enrolled-search">
                <CategoriesContents none2={'none'} none3={'none'}/>
              </div>
              <div className="students">
                <RecentStudentsAttendacnce />
              </div>
            </div>
          </div>
        </div>
        <div className="assigned-teacher">
          <h3>Assigned Teacher</h3>
          <div className="teacher-content">
            <div className="teacher-content-top">
              <div className="assigned-teacher-img"><FaPerson/></div>
              <div className="desc">
                <b>Dr Micheal Chen</b>
                <p>TCH001</p>
              </div>
            </div>
            <div className="teacher-mail">
              <p>Email: MichealChen@amalitech.edu</p>
            </div>
            <div className="teacher-specialization">
              <p>Specialization: Web Development</p>
            </div>
            <div className="reasign-div">
              <Button name={'Reassign Teacher'} styles={{backgroundColor: 'transparent', border: '1px solid #333', color: 'black'}}/>
            </div>
          </div>
        </div>
        <div className="class-schedule-div">
          <div className="schedule-header">
            <h3>CLass Schedule</h3>
          </div>
          <div className="schedules">
            <Schedule day={'Monday'} venue={'Lab A'} time={'10:00 AM to 12:00 PM'}/>
            <Schedule day={'Wednesday'} venue={'Lab A'} time={'12:00 AM to 2:00 PM'}/>
            <Schedule day={'Friday'} venue={'Lab A'} time={'10:00 AM to 12:00 PM'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewClassDetails
