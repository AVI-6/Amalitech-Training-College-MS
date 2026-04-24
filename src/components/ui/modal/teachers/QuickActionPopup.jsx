import React, { useEffect, useState } from 'react'
import Modal from "../../modal/Modal";
import '../../../../styles/teachers/modal.css'
import { Link, useNavigate } from 'react-router-dom';
import MyCLasses from '../teachers/MyCLasses';
import TeacherDataBaseUrl from '../../../../mocked DataBase/teacherDataBase.json?url'

function QuickActionPopup({ isOpen, onClose }) {
  const navigate = useNavigate()
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
      <Modal className='modal-div' isOpen={isOpen} onClose={onClose}>
        <h2>Create Assessment</h2>
    
        {teacherData ? teacherData.classesTaught.map((course, index) => {
          return (
            <div className="modal-card" key={index + course.title}>
              <Link to={'/teachers/assessments/create'}>
                <MyCLasses courseStudent={`${teacherData.studentsCount} students`} courseSchedule={course.schedule} courseTitle={course.title} />
              </Link>
            </div>
            )
        }): <div className="modal-card">Loading...</div>}
        {/* <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'24 students'} courseSchedule={'Next: Wednesday, 10:00 AM'} courseTitle={'Advanced JavaScript'} />
          </Link>
        </div>
        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'23 students'} courseSchedule={'Next: Thursday, 10:00 AM'} courseTitle={'React Fundamentals'} />
          </Link>
        </div>
        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'25 students'} courseSchedule={'Next: Friday, 10:00 AM'} courseTitle={'Web Development'} />
          </Link>
        </div> */}
      </Modal>
    </div>
  )
}

export default QuickActionPopup
