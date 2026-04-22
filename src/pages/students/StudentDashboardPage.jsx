import { useMemo, useState } from 'react';
import { FiBookOpen, FiCalendar, FiClock, FiFileText } from 'react-icons/fi';
import { LuBookOpenCheck, LuClipboardCheck, LuNotebookText } from 'react-icons/lu';
import { MdOutlineArrowForward } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/ui/modal/teachers/PageHeader';
import TeachersQuickActions from '../../components/ui/modal/teachers/TeachersQuickActions';
import '../../styles/students/studentDashboard.css';
import QuickActionPopupStudents from '../../components/ui/modal/students/QuickActionPopupStudents';

const stats = [
  { id: 'courses', icon: <LuBookOpenCheck />, label: 'Enrolled Courses', value: '5' },
  { id: 'gpa', icon: <PiGraduationCap />, label: 'Current G.P.A', value: '3.11' },
  { id: 'attendance', icon: <FiCalendar />, label: 'Your Attendance Rate', value: '75%' },
];

const quickActions = [
  {
    id: 'submit-assignment',
    actionText: 'Submit Assessment',
    icon: <FiBookOpen />,
    color: 'violet',
  },
  {
    id: 'view-timetable',
    actionText: 'View Timetable',
    icon: <LuNotebookText />,
    color: 'accent',
  },
  {
    id: 'view-grades',
    actionText: 'View Grades',
    icon: <FiFileText />,
    color: 'navy',
  },
];

const myCourses = [
  { id: 'course-1', title: 'Web Development', instructor: 'Dr. Michael Chen', progress: 65 },
  { id: 'course-2', title: 'Data Structures', instructor: 'Prof. Sarah Williams', progress: 45 },
  { id: 'course-3', title: 'UI/UX Design', instructor: 'Ms. Emily Davis', progress: 80 },
];

const upcomingClasses = [
  { id: 'class-1', title: 'Web Development 101', time: 'Today, 10:00 AM', room: 'Lab A' },
  { id: 'class-2', title: 'Data Structures', time: 'Today, 2:00 PM', room: 'Room 201' },
  { id: 'class-3', title: 'UI/UX Design', time: 'Tomorrow, 11:00 AM', room: 'Lab C' },
];

const overview = [
  { id: 'semester', label: 'Semester Progress', value: '60%', progress: 60, tone: 'green' },
  { id: 'assignments', label: 'Assignments Completed', value: '12/15', progress: 80, tone: 'blue' },
];

function StudentDashboardPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)

  const courseCards = useMemo(
    () =>
      myCourses.map((course) => (
        <article key={course.id} className="student-course-card">
          <div className="student-course-top">
            <div>
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
            </div>
            <span>{course.progress}%</span>
          </div>
          <div className="student-course-progress-copy">Progress</div>
          <div className="student-course-progress-track">
            <span style={{ width: `${course.progress}%` }} />
          </div>
        </article>
      )),
    []
  );

  return (
    <div className="student-dashboard-page">
      <div className="student-dashboard-header">
        <PageHeader userName="Hi, Kofi Wayoo" />
      </div>

      <section className="student-stats-grid">
        {stats.map((item) => (
          <article key={item.id} className="student-stat-card">
            <div className="student-stat-icon">{item.icon}</div>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </article>
        ))}
      </section>

      <section className="student-panel">
        <div className="student-panel-heading">
          <h2>Quick Actions</h2>
        </div>
        <div className="student-quick-actions-grid">
          {quickActions.map((action) => (
            <TeachersQuickActions
              key={action.id}
              actionText={action.actionText}
              icon={action.icon}
              color={action.color}
              handleclick={(e) => {
                e.preventDefault(); 
                if (action.id === 'submit-assignment') {
                  setModalOpen(true);
                  // navigate('/students/assessments/details');
                  return;
                }

                if (action.id === 'view-grades') {
                  navigate('/students/grades');
                  return;
                }

                if (action.id === 'view-timetable') {
                  navigate('/students/courses/timetable');
                  return;
                }
              }}
            />
          ))}
        </div>
      </section>

      <section className="student-panel">
        <div className="student-panel-heading student-panel-heading-row">
          <h2>My Courses</h2>
          <button type="button" className="student-view-all-button" onClick={() => navigate('/students/courses')}>
            View All <MdOutlineArrowForward />
          </button>
        </div>
        <div className="student-courses-list">{courseCards}</div>
      </section>

      <section className="student-panel">
        <div className="student-panel-heading">
          <h2>Upcoming Classes</h2>
        </div>
        <div className="student-upcoming-list">
          {upcomingClasses.map((item) => (
            <article key={item.id} className="student-upcoming-item">
              <div>
                <h3>{item.title}</h3>
                <p>
                  <FiClock />
                  {item.time}
                </p>
              </div>
              <span>{item.room}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="student-panel">
        <div className="student-panel-heading">
          <h2>Quick Overview</h2>
        </div>
        <div className="student-overview-grid">
          {overview.map((item) => (
            <article key={item.id} className="student-overview-card">
              <div className="student-overview-copy">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
              <div className="student-overview-track">
                <span className={item.tone} style={{ width: `${item.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <QuickActionPopupStudents onClose={() => setModalOpen(false)} isOpen={modalOpen} />
    </div>
  );
}

export default StudentDashboardPage;
