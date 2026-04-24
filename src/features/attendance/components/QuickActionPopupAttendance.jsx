import React, { useEffect, useState } from 'react'
import Modal from "../../../components/ui/modal/Modal";
import '../../../styles/teachers/modal.css'
import { Link } from 'react-router-dom';
import MyCLasses from '../../../components/ui/modal/teachers/MyCLasses';
import TeacherDataBaseUrl from '../../../mocked DataBase/teacherDataBase.json?url'

function QuickActionPopupAttendance({ isOpenAttendance, onCloseAttendance }) {
  const [teacherData, setTeacherData] = useState(null);
  
  useEffect(()=>{
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(TeacherDataBaseUrl);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch teacher data');
        }
        const foundTeacher = data.find(teacher => teacher.id === "TEA-001");

        if(foundTeacher){
          setTeacherData(foundTeacher);
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  },[])
  return (
    <div className='modal'>
      <Modal className='modal-div' isOpen={isOpenAttendance} onClose={onCloseAttendance}>
        <h2>Take Attendance</h2>

        {teacherData ? teacherData.classesTaught.map((course, index) => {
          return (
            <div className="modal-card" key={index + course.title}>
              <Link to={'/teachers/dashboard/attendance'}>
                <MyCLasses courseStudent={`${course.students} students`} courseSchedule={course.schedule} courseTitle={course.title} />
              </Link>
            </div>
          )
        }): <div className="modal-card">Loading...</div>}
      </Modal>
    </div>
  )
}

export default QuickActionPopupAttendance
