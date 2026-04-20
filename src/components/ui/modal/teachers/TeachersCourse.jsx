import '../../../../styles/teachers/teachersCourses.css'
import ButtonWithIconAfter from '../../../buttons/ButtonWithIconAfter'

function TeachersCourse({
  active,
  progress,
  onClick,
  title = 'Web Development',
  code = 'Web-dev 301',
  students = '28',
  schedule = 'Mon, Tue, Fri - 10:00 AM',
  room = 'Lab A',
  buttonText = 'View Details',
}) {
  return (
    <div className="course-page-bottom-content-wrapper">
      <div className="course-page-bottom-content-top-div">
        <div className="course-page-bottom-content-1">
          <div className="course-title">
            <div className="course-title-left-side">
              <h2>{title}</h2>
              <p>{code}</p>
            </div>
            <div className="course-title-right-side">
              <p>{active}</p>
            </div>
          </div>
          <div className="course-takers">
            <p>Students</p>
            <p>{students}</p>
          </div>
          <div className="course-schedule">
            <p>Schedule</p>
            <p>{schedule}</p>
          </div>
          <div className="course-venue">
            <p>Room</p>
            <p>{room}</p>
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
            <ButtonWithIconAfter onClick={onClick} className='course-details-btn' buttonIcon={'>'} name={buttonText} />
          </div>
        </div>
        <div className="course-page-bottom-content-2"></div>
      </div>
      <div className="course-page-bottom-content-bottom-div"></div>
    </div>
  )
}

export default TeachersCourse
