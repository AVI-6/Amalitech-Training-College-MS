import React from 'react'
import Modal from "../../modal/Modal";
import '../../../../styles/teachers/modal.css'
import { Link } from 'react-router-dom';
import MyCLasses from '../teachers/MyCLasses';

function QuickActionPopup({ isOpen, onClose }) {
  return (
    <div className='modal'>
      <Modal className='modal-div' isOpen={isOpen} onClose={onClose}>
        <h2>Create Assessment</h2>

        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
            <MyCLasses courseStudent={'28 students'} courseSchedule={'Next: Tuesday, 10:00 AM'} courseTitle={'Web Development'} />
          </Link>
        </div>
        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'24 students'} courseSchedule={'Next: Wednesday, 10:00 AM'} courseTitle={'Advanced JavaScript'} />
          </Link>
        </div>
        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'23 students'} courseSchedule={'Next: hursday, 10:00 AM'} courseTitle={'React Fundamentals'} />
          </Link>
        </div>
        <div className="modal-card">
          <Link to={'/teachers/assessments/create'}>
          <MyCLasses courseStudent={'25 students'} courseSchedule={'Next: Friday, 10:00 AM'} courseTitle={'Web Development'} />
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default QuickActionPopup
