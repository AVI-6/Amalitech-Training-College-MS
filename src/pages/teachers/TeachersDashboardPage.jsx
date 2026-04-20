import React from 'react'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { FaRegFilePdf, FaRegFolder } from "react-icons/fa6";
import { BiBell, BiBookAdd } from 'react-icons/bi';
import '../../styles/teachers/teachersdashboardpage.css'
import ButtonWithIconAfter from '../../components/buttons/ButtonWithIconAfter';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LuClipboardCheck, LuClock3, LuFileText } from "react-icons/lu";
import { RiHomeGearLine } from "react-icons/ri";
import PageHeader from '../../components/ui/modal/teachers/PageHeader';
import TeachersQuickActions from '../../components/ui/modal/teachers/TeachersQuickActions';
import { FiMessageSquare } from 'react-icons/fi';
import { VscGraph } from 'react-icons/vsc';
import QuickActionPopup from '../../components/ui/modal/teachers/QuickActionPopup';
import { useState } from 'react';
import MyCLasses from '../../components/ui/modal/teachers/MyCLasses';
import { useNavigate } from 'react-router-dom';
import QuickActionPopupAttendance from '../../features/attendance/components/QuickActionPopupAttendance';



function TeachersDashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalGOpen, setModalGOpen] = useState(false);
  const navigate = useNavigate()

  function handleView(){
    navigate('/teachers/courses')
  }
  function handleMyCourse(){
    navigate('/teachers/courses/my-course')
  }

  return (
    <div className='teachers-dashboard-page-div'>
      <div className="first-teachers-dashboard-content">
        <div className="first-teachers-dashboard-content-h1">
          <PageHeader userName={'Hi Sarah Mitchell,'}/>
        </div>
        <div className="first-teachers-dashboard-content-updates">
          <AdminUpdates text={'Total Teachers'} value={'85'} icon={<BiBookAdd/>} />
          <AdminUpdates text={'Total Teachers'} value={'85'} icon={<BiBookAdd/>} />
          <AdminUpdates text={'Total Teachers'} value={'85'} icon={<BiBookAdd/>} />
        </div>
      </div>
      <div className="second-teachers-dashboard-content">
        <div className="second-teachers-dashboard-content-h1">
          <h1>Quick Actions</h1>
        </div>
        <div className="second-teachers-dashboard-content-actions">
          <TeachersQuickActions actionText={'Create Assessment'} color={'violet'} icon={<FaRegFilePdf />} handleclick={(e) => { e.preventDefault(); setModalOpen(true); }} />

          <TeachersQuickActions actionText={'Take Attendance'} color={'orange'} icon={<LuClipboardCheck/>} handleclick={(e) => { e.preventDefault(); setModalAOpen(true); }} />

          <TeachersQuickActions actionText={'Enter Grades'} color={'accent'} icon={<LuFileText />} handleclick={(e) => { e.preventDefault(); setModalGOpen(true); }} />

          <TeachersQuickActions actionText={'Post Announcement'} color={'blue'} icon={<FiMessageSquare  />}handleclick={(e) => { e.preventDefault(); setModalOpen(true); }} />

          <TeachersQuickActions actionText={'Upload Resource'} color={'green'} icon={<FaRegFolder />} handleclick={(e) => { e.preventDefault(); setModalOpen(true); }} />

          <TeachersQuickActions actionText={'View Analytics'} color={'navy'} icon={<VscGraph/> } handleclick={(e) => { e.preventDefault(); navigate('/teachers/assessments/view-analytics') }} />
          
        </div>
      </div>
      <div className="third-teachers-dashboard-content">
        <div className="third-teachers-dashboard-content-h1">
          <div className="third-teachers-dashboard-content-h1-text">
            <h1>My Classes</h1>
          </div>
          <div className="third-teachers-dashboard-content-h1-btn">
            <ButtonWithIconAfter onClick={handleView} buttonIcon={<MdOutlineKeyboardArrowRight/>} name={'View More'}/>
          </div>
        </div>
        <div className="third-teachers-dashboard-content-h1-courses-div">
          <MyCLasses onClick={handleMyCourse} courseStudent={'28 students'} courseSchedule={'Next: Tuesday, 10:00 AM'} courseTitle={'Web Development'} />
          <MyCLasses onClick={handleMyCourse} courseStudent={'24 students'} courseSchedule={'Next: Wednesday, 10:00 AM'} courseTitle={'Advanced JavaScript'} />
          <MyCLasses onClick={handleMyCourse} courseStudent={'23 students'} courseSchedule={'Next: hursday, 10:00 AM'} courseTitle={'React Fundamentals'} />
          <MyCLasses onClick={handleMyCourse} courseStudent={'25 students'} courseSchedule={'Next: Friday, 10:00 AM'} courseTitle={'Web Development'} />
        </div>
        
      </div>
      <div className="fourth-teachers-dashboard-content">
        <div className="teachers-dashboard-content-top-div">
          <h1>Upcoming Sessions</h1>
        </div>
        <div className="teachers-dashboard-content-bottom-div">
          <div className="teachers-dashboard-content-bottom-div-wrapper">
            <div className="bottom-div-wrapper-content">
              <div className="third-teachers-dashboard-content-h1-courses border-bottom">
                <div className="h1-courses-left">
                  <div className="h1-course-left-top">
                    <h3>Web Development</h3>
                  </div>
                  <div className="h1-course-left-bottom">
                    <div><small><LuClock3 /> 10:00 AM - 12:00 PM </small></div>
                    <div><small><RiHomeGearLine /> Room: Lab A </small></div>
                    
                  </div>
                </div>
                <div className="h1-courses-right upcoming">
                  <p>up Coming</p>
                </div>
              </div>
              <div className="third-teachers-dashboard-content-h1-courses border-bottom">
                <div className="h1-courses-left">
                  <div className="h1-course-left-top">
                    <h3>Web Development</h3>
                  </div>
                  <div className="h1-course-left-bottom">
                    <div><small><LuClock3 /> 10:00 AM - 12:00 PM </small></div>
                    <div><small><RiHomeGearLine /> Room: Lab A </small></div>
                  </div>
                </div>
                <div className="h1-courses-right upcoming">
                  <p>up Coming</p>
                </div>
              </div>
              <div className="third-teachers-dashboard-content-h1-courses border-bottom">
                <div className="h1-courses-left">
                  <div className="h1-course-left-top">
                    <h3>Department Meeting</h3>
                  </div>
                  <div className="h1-course-left-bottom h1-course-right-bottom">
                    <div><small><LuClock3 /> 10:00 AM - 12:00 PM </small></div>
                    <div><small><RiHomeGearLine /> Room: Jane Nelson Auditorium </small></div>
                  </div>
                </div>
                <div className="h1-courses-right">
                  <p>meeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickActionPopup isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <QuickActionPopupAttendance isOpenAttendance={modalAOpen} onCloseAttendance={() => setModalAOpen(false)} />
      <QuickActionPopupAttendance isOpenAttendance={modalAOpen} onCloseAttendance={() => setModalAOpen(false)} />
    </div>
  )
}

export default TeachersDashboardPage
