import React from 'react'
import '../../../../styles/teachers/TeachersQuickActions.css'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function TeachersQuickActions({ actionText, icon, color, handleclick }) {
  return (
    <div onClick={handleclick} className='second-teachers-dashboard-content-actions-div'>
      <div className={`teachers-action-icon ${color}`}>{icon}</div>
      <p>{ actionText }</p>
    </div>
  )
}

export default TeachersQuickActions
