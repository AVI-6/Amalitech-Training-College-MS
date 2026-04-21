import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import RecentActivity from '../../components/ui/modal/RecentActivity'
import QuickAction from '../../components/ui/modal/QuickAction'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { LuBookOpenText, LuGraduationCap } from "react-icons/lu";
import { MdPeople } from 'react-icons/md'
import { BiBell } from 'react-icons/bi'
import RecentStudents from '../../components/ui/modal/RecentStudents'
import { useNavigate } from 'react-router-dom'
import { BsPencilSquare, BsPersonCheck, BsPlusSquare } from 'react-icons/bs'
import { IoStatsChartSharp } from 'react-icons/io5'
useNavigate

function AdminDashBoardPage() {
  const navigate = useNavigate()

  function handleStudent(){
    navigate('/admin/students/new-student')
  }
  function handleTeacher(){
    navigate('/admin/teachers/new-teacher')
  }
  function handleClass(){
    navigate('/admin/classes/new-class')
  }

  return (
    <div className='admin-page'>
      <div className="right-panel">
        <div className="top-content">
          <div className="admin-greeting-div">
            <h1>Hi, Andy Mensah</h1>
            <BiBell className='notification-icon' />
          </div>
          <div className="quick-updates">
            <div className="admin-updates-div">
              <AdminUpdates icon={<LuGraduationCap />} text={'Students'} value={'3,000'} />
            </div>
            <div className="admin-updates-div">
              <AdminUpdates icon={<MdPeople />} text={'Teachers'} value={'100'} />
            </div>
            <div className="admin-updates-div">
              <AdminUpdates icon={<LuBookOpenText />} text={'Active Classes'} value={'85'} />
            </div>
          </div>
          <div className="quick-actions">
            <QuickAction onClickStudent={handleStudent} onClickClass={handleClass} onClickTeacher={handleTeacher} />
          </div>
        </div>

        {/* Recent Activities */}
        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <div className="activities-recent">
            <RecentActivity recentIcon={<BsPersonCheck />} styles={{backgroundColor: '#22C55E1A', color: '#22c55e'}} currentTimeInMinutes={'2 minutes'} recentText={'Kofi Asante enrolled in CS-101'}/>
          </div>
          <div className="activities-recent">
            <RecentActivity recentIcon={<IoStatsChartSharp />} styles={{backgroundColor: '#3B82F61A', color: 'var(--color-info)'}} currentTimeInMinutes={'12 minutes'} recentText={'Grades updated for Math-202'} />
          </div>
          <div className="activities-recent">
            <RecentActivity recentIcon={<BsPencilSquare />} styles={{backgroundColor: '#3B82F61A', color: 'var(--color-info)'}} currentTimeInMinutes={'17 minutes'} recentText={'Ms. Adjei assigned to Web Dev 301 '} />
          </div>
          <div className="activities-recent">
            <RecentActivity recentIcon={<BsPlusSquare />} styles={{backgroundColor: '#22C55E1A', color: '#22c55e'}} currentTimeInMinutes={'1 hour'} recentText={'DS-401 class created'} />
          </div>
          <div className="activities-recent">
            <RecentActivity recentIcon={<IoStatsChartSharp />} styles={{backgroundColor: '#3B82F61A', color: 'var(--color-info)'}} currentTimeInMinutes={'2 hours'} recentText={'Mr Komla assigned to COM-404'} />
          </div>
        </div>


        {/* Recent Students */}
        <div className="recent-students">
          <div className="recent-students-header">
            <h2>Recent Students</h2>
            <button className='view-all-btn'>View All</button>
          </div>
          <div className="recents-div">

            <RecentStudents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoardPage
