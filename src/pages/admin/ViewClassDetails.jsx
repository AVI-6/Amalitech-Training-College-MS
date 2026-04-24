import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import classDataBaseUrl from '../../mocked DataBase/classDataBase.json?url'

function ViewClassDetails() {
  const { details: classCode } = useParams();
  console.log(classCode);
  const [classDetails, setClassDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await fetch(classDataBaseUrl);
        if (!response.ok) throw new Error('Failed to fetch class details');
        const data = await response.json();
        const foundClass = data.find((item) => item.code === classCode);
        setClassDetails(foundClass || null);
      } catch (error) {
        console.error('Error fetching class record:', error);
        setClassDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchClass();
  }, [classCode]);

  if (loading) return <div>Loading...</div>;
  if (!classDetails) return <div>Class not found</div>;

  return (
    <div className='view-class-details-div'>
      <div className="view-class-details-top-content">
        <AdminPageHeader
          title={`${classDetails.title} - ${classDetails.students} students`}
          subtitle={classDetails.code}
          backTo={'/admin/classes'}
        />
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
              <b>{classDetails.code}</b>
            </div>
            <div className="class-desc">
              <p>Description</p>
              <b>{`Introduction to ${classDetails.title} covering fundamentals, practical projects, and hands-on lessons.`}</b>
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
                <b>{classDetails.instructor}</b>
                <p>{classDetails.code}</p>
              </div>
            </div>
            <div className="teacher-mail">
              <p>Email: {classDetails.instructor.replace(' ', '').toLowerCase()}@amalitech.edu</p>
            </div>
            <div className="teacher-specialization">
              <p>Specialization: {classDetails.title}</p>
            </div>
            <div className="reasign-div">
              <Button name={'Reassign Teacher'} styles={{backgroundColor: 'transparent', border: '1px solid #333', color: 'black'}}/>
            </div>
          </div>
        </div>
        <div className="class-schedule-div">
          <div className="schedule-header">
            <h3>Class Schedule</h3>
          </div>
          <div className="schedules">
            <Schedule day={'Monday'} venue={'Lab A'} time={classDetails.schedule} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewClassDetails
