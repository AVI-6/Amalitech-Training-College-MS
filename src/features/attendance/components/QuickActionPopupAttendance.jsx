import React from 'react'
import Modal from "../../../components/ui/modal/Modal";
import '../../../styles/teachers/modal.css'
import { Link } from 'react-router-dom';
import MyCLasses from '../../../components/ui/modal/teachers/MyCLasses';

function QuickActionPopupAttendance({ isOpenAttendance, onCloseAttendance }) {
  return (
    <div className='modal'>
      <Modal className='modal-div' isOpen={isOpenAttendance} onClose={onCloseAttendance}>
        <h2>Take Attendance</h2>

        <div className="card">
          <Link to={'/teachers/dashboard/attendance'}>
            <MyCLasses courseStudent={'28 students'} courseSchedule={'Next: Tuesday, 10:00 AM'} courseTitle={'Web Development'} />
          </Link>
        </div>
        <div className="card">
          <Link to={'/teachers/dashboard/attendance'}>
          <MyCLasses courseStudent={'24 students'} courseSchedule={'Next: Wednesday, 10:00 AM'} courseTitle={'Advanced JavaScript'} />
          </Link>
        </div>
        <div className="card">
          <Link to={'/teachers/dashboard/attendance'}>
          <MyCLasses courseStudent={'23 students'} courseSchedule={'Next: hursday, 10:00 AM'} courseTitle={'React Fundamentals'} />
          </Link>
        </div>
        <div className="card">
          <Link to={'/teachers/dashboard/attendance'}>
          <MyCLasses courseStudent={'25 students'} courseSchedule={'Next: Friday, 10:00 AM'} courseTitle={'Web Development'} />
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default QuickActionPopupAttendance
