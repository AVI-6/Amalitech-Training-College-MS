import React, { useEffect } from 'react'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { FaRegFilePdf, FaRegFolder } from "react-icons/fa6";
import { BiBell, BiBookAdd } from 'react-icons/bi';
import '../../styles/teachers/teachersdashboardpage.css'
import ButtonWithIconAfter from '../../components/buttons/ButtonWithIconAfter';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LuBookOpenText, LuClipboardCheck, LuClock3, LuFileText } from "react-icons/lu";
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
import QuickActionPopupAnnouncement from '../../features/announcement/components/QuickActionPopupAnnouncement';
import QuickActionPopupGrade from '../../features/grades/components/QuickActionPopupGrade';
import QuickActionPopupResources from '../../features/resources/QuickActionPopupResources';
import TeacherDataBaseUrl from '../../mocked DataBase/teacherDataBase.json?url'



function TeachersDashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalAnOpen, setModalAnOpen] = useState(false);
  const [modalGOpen, setModalGOpen] = useState(false);
  const [modalROpen, setModalROpen] = useState(false);
  const [teacherData, setTeacherData] = useState(null);
  const navigate = useNavigate()

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
          {teacherData && <PageHeader userName={`Hi ${teacherData.firstName} ${teacherData.lastName},`}/>}
        </div>
        <div className="first-teachers-dashboard-content-updates">
          {teacherData ? (
            <>
              <AdminUpdates text={'Total Classes'} value={teacherData.classesTaught.length} icon={<BiBookAdd/>} />
              <AdminUpdates text={'Total Students'} value={teacherData.studentsCount} icon={<LuBookOpenText />} />
              <AdminUpdates text={"Today's Sessions"} value={teacherData.todaySchedule.length} icon={<BiBookAdd/>} />
            </>
          ): <AdminUpdates text={'Loading...'} value={0} icon={<BiBookAdd/>} />}
        </div>
      </div>
      <div className="first-teachers-dashboard-content-bottom">
        <div className="second-teachers-dashboard-contents">
          <div className="second-teachers-dashboard-content teachers-quick-actions-div">

            <div className="second-teachers-dashboard-content-h1">
              <h1>Quick Actions</h1>
            </div>
            <div className="second-teachers-dashboard-content-actions">
              <TeachersQuickActions actionText={'Create Assessment'} color={'violet'} icon={<FaRegFilePdf />} handleclick={(e) => { e.preventDefault(); setModalOpen(true); }} />

              <TeachersQuickActions actionText={'Take Attendance'} color={'orange'} icon={<LuClipboardCheck/>} handleclick={(e) => { e.preventDefault(); setModalAOpen(true); }} />

              <TeachersQuickActions actionText={'Enter Grades'} color={'accent'} icon={<LuFileText />} handleclick={(e) => { e.preventDefault(); setModalGOpen(true); }} />

              <TeachersQuickActions actionText={'Post Announcement'} color={'blue'} icon={<FiMessageSquare  />}handleclick={(e) => { e.preventDefault(); setModalAnOpen(true); }} />

              <TeachersQuickActions actionText={'Upload Resource'} color={'green'} icon={<FaRegFolder />} handleclick={(e) => { e.preventDefault(); setModalROpen(true); }} />

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
             {teacherData && teacherData.classesTaught.map((course, index) => (
                <MyCLasses
                  key={index + course.title}
                  onClick={handleMyCourse}
                  courseStudent={`${course.students} students`}
                  courseSchedule={`Next: ${course.schedule}`}
                  courseTitle={course.title}
                />
              ))}
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
        </div>

      </div>
      <QuickActionPopup isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <QuickActionPopupAttendance isOpenAttendance={modalAOpen} onCloseAttendance={() => setModalAOpen(false)} />
      <QuickActionPopupAnnouncement isOpenAnnouncement={modalAnOpen} onCloseAnnouncement={() => setModalAnOpen(false)} />
      <QuickActionPopupGrade isOpenGrade={modalGOpen} onCloseGrade={() => setModalGOpen(false)} />
      <QuickActionPopupResources isOpenResource={modalROpen} onCloseResource={() => setModalROpen(false)} />
    </div>
  )
}

export default TeachersDashboardPage
