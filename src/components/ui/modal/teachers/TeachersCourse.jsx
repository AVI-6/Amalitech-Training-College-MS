import '../../../../styles/teachers/teachersCourses.css'
import ButtonWithIconAfter from '../../../buttons/ButtonWithIconAfter'

function TeachersCourse({progress, onClick}) {
  return (
    <div className="course-page-bottom-content-wrapper">
      <div className="course-page-bottom-content-top-div">
        <div className="course-page-bottom-content-1">
          <div className="course-title">
            <div className="course-title-left-side">
              <h2>Web Development</h2>
              <p>Web-dev 301</p>
            </div>
            <div className="course-title-right-side">
              <p>Active</p>
            </div>
          </div>
          <div className="course-takers">
            <p>Students</p>
            <p>28</p>
          </div>
          <div className="course-schedule">
            <p>Schedule</p>
            <p>Mon, Tue, Fri - 10:00 AM</p>
          </div>
          <div className="course-venue">
            <p>Room</p>
            <p>Lab A</p>
          </div>
          <div className="course-progress">
            <div className="course-progress-title">
              <p>Course Progress</p>
              <p> {progress}% </p>
            </div>
            <div className='teachers-course-progress-div'>
              <div className="teachers-progress" style={{width:`${progress}%`}}></div>
            </div>
          </div>
          <div className="course-details">
            <ButtonWithIconAfter onClick={onClick} className='course-details-btn' buttonIcon={'>'} name={'View Details'} />
          </div>
        </div>
        <div className="course-page-bottom-content-2"></div>
      </div>
      <div className="course-page-bottom-content-bottom-div"></div>
    </div>
  )
}

export default TeachersCourse
