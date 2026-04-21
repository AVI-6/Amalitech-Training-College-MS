import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ProgressBar from '../../features/ProgessBar/ProgressBar';
import Schedule from '../../features/schedule/components/Schedule';
import { getStudentCourseById } from '../../data/studentCoursesData';
import '../../styles/students/studentCourseDetails.css';

function StudentCourseDetailsPage() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = getStudentCourseById(courseId);

  if (!course) {
    return <Navigate to="/students/courses" replace />;
  }

  return (
    <div className="student-course-details-page">
      <div className="student-course-details-header">
        <h1>{course.title}</h1>
        <button type="button" onClick={() => navigate('/students/courses')}>
          <FiArrowLeft />
          Back
        </button>
      </div>

      <section className="student-course-details-card">
        <h2>Course Overview</h2>
        <div className="student-course-overview-grid">
          <div>
            <span>Course Code</span>
            <strong>{course.code}</strong>
          </div>
          <div className="student-course-overview-description">
            <span>Description</span>
            <p>{course.description}</p>
          </div>
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Learning Outcomes</h2>
        <div className="student-course-outcomes-list">
          {course.outcomes.map((outcome) => (
            <div key={outcome} className="student-course-outcome-item">
              <span />
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Upcoming Assignments</h2>
        <div className="student-course-assignment-list">
          {course.assignments.map((assignment) => (
            <div key={assignment.id} className="student-course-assignment-item">
              <div>
                <h3>{assignment.title}</h3>
                <p>{assignment.dueDate}</p>
              </div>
              <span className={`student-course-status-pill ${assignment.tone}`}>{assignment.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Recent Grades</h2>
        <div className="student-course-table-wrapper">
          <table className="student-course-details-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {course.grades.map((grade) => (
                <tr key={grade.id}>
                  <td>{grade.assignment}</td>
                  <td>
                    <span className={`student-course-grade-pill ${grade.tone}`}>{grade.score}</span>
                  </td>
                  <td>{grade.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Instructor</h2>
        <div className="student-course-instructor">
          <div className="student-course-instructor-top">
            <div className="student-course-instructor-avatar">
              <FiUser />
            </div>
            <div>
              <h3>{course.instructor.name}</h3>
              <p>{course.instructor.role}</p>
            </div>
          </div>
          <div className="student-course-instructor-info">
            <div>
              <span>Email:</span>
              <p>{course.instructor.email}</p>
            </div>
            <div>
              <span>Office Hours:</span>
              <p>{course.instructor.officeHours}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Class Schedule</h2>
        <div className="student-course-schedule-list">
          {course.classSchedule.map((scheduleItem) => (
            <Schedule
              key={scheduleItem.id}
              day={scheduleItem.day}
              time={scheduleItem.time}
              venue={scheduleItem.venue}
            />
          ))}
        </div>
      </section>

      <section className="student-course-details-card">
        <h2>Progress Overview</h2>
        <div className="student-course-progress-group">
          <div className="student-course-progress-copy">
            <span>Course Completion</span>
            <strong>{course.progressOverview.courseCompletion}%</strong>
          </div>
          <div className="student-course-progress-bar orange">
            <ProgressBar progress={course.progressOverview.courseCompletion} />
          </div>
        </div>
        <div className="student-course-progress-group">
          <div className="student-course-progress-copy">
            <span>Assignments Completed</span>
            <strong>{course.progressOverview.assignmentsCompleted}</strong>
          </div>
          <div className="student-course-progress-bar green">
            <ProgressBar progress={course.progressOverview.assignmentsProgress} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentCourseDetailsPage;
