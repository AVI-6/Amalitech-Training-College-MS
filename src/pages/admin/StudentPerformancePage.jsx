import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import ProgressBar from '../../components/admin/ProgressBar';
import '../../styles/studentPerformancePage.css';
import ReusableInfoForm from '../../components/forms/ReusableInfoForm'

const performanceDataByStudent = {
  'STU-001': {
    name: 'Ama Owusu',
    id: 'STU-001',
    className: 'Math-202',
    metrics: {
      average: '89%',
      attendance: '90%',
      grade: 'A',
    },
    assessments: [
      { assessment: 'Quiz 1', score: 27, max: 30, progress: 90, grade: 'A+' },
      { assessment: 'Assignment 1', score: 18, max: 20, progress: 90, grade: 'A+' },
      { assessment: 'Quiz 2', score: 40, max: 50, progress: 85, grade: 'A' },
      { assessment: 'Midterm Exam', score: 50, max: 70, progress: 75, grade: 'B' },
    ],
    attendance: {
      present: 45,
      absent: 2,
      late: 0,
      rate: 90,
    },
    classSummary: {
      title: 'Math-202',
      subtitle: 'Mathematics -2500 students',
      teacher: 'Mrs. Lydia Asante',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
    },
  },
};

function StudentPerformancePage() {
  const { studentId  } = useParams();
  const [searchParams] = useSearchParams();
  const studentPerformance = performanceDataByStudent[studentId] ?? performanceDataByStudent['STU-001'];
  const studentName = searchParams.get('name') || studentPerformance.name;
  const className = searchParams.get('class') || studentPerformance.className;
  const navigate = useNavigate()
  const [form, setForm] = React.useState([{
    firstName: '',
    lastName: '', 
    dateofBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    subSpecialization: '',
    enrolledDate: '', 
    highestQualification: '',
    yearofExperience: '',
    assignedCLass: ''
  }])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleCancel(){
    navigate('/admin/classes')
  }

  return (
    <div className="student-performance-page">
      <AdminPageHeader title="Student Perfomance" subtitle={`${studentName} - ${studentPerformance.id} - ${className}`} backTo={`/admin/students/`} />

      <section className="student-performance-summary">
        <div className="student-performance-identity">
          <h2>{studentName}</h2>
          <p>
            {studentPerformance.id} - {className} - Enrolled January 2025
          </p>
        </div>
        <div className="student-performance-metrics">
          <div>
            <strong>{studentPerformance.metrics.average}</strong>
            <span>Average</span>
          </div>
          <div className="metric-attendance">
            <strong>{studentPerformance.metrics.attendance}</strong>
            <span>Attendance</span>
          </div>
          <div className="metric-grade">
            <strong>{studentPerformance.metrics.grade}</strong>
            <span>Grade</span>
          </div>
        </div>
      </section>

      <section className="student-performance-breakdown">
        <h3>Grade Breakdown</h3>
        <div className="student-performance-table-wrapper">
          <table className="student-performance-table">
            <thead>
              <tr>
                <th>Assessment</th>
                <th>Score</th>
                <th>Max</th>
                <th>Progress</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentPerformance.assessments.map((item) => (
                <tr key={item.assessment}>
                  <td>{item.assessment}</td>
                  <td>{item.score}</td>
                  <td>{item.max}</td>
                  <td>
                    <ProgressBar value={item.progress} />
                  </td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="student-performance-bottom">
        <section className="attendance-log-card">
          <h3>Attendance Log</h3>
          <div className="attendance-log-stats">
            <div>
              <span>Present</span>
              <strong>{studentPerformance.attendance.present}</strong>
            </div>
            <div>
              <span>Absent</span>
              <strong>{studentPerformance.attendance.absent}</strong>
            </div>
            <div>
              <span>Late</span>
              <strong>{studentPerformance.attendance.late}</strong>
            </div>
          </div>
          <div className="attendance-rate">
            <span>Attendance Rate</span>
            <ProgressBar value={studentPerformance.attendance.rate} />
          </div>
        </section>

        <section className="class-summary-card">
          {/* <h3>{studentPerformance.classSummary.title}</h3>
          <p>{studentPerformance.classSummary.subtitle}</p>
          <div className="class-summary-meta">
            <span>Teacher</span>
            <strong>{studentPerformance.classSummary.teacher}</strong>
          </div>
          <div className="class-summary-meta">
            <span>Schedule</span>
            <strong>{studentPerformance.classSummary.schedule}</strong>
          </div>
          <div className="class-summary-meta">
            <span>Search</span>
            <input type="text" placeholder="Search Students" readOnly />
          </div> */}
          <ReusableInfoForm form={form} name={'Save Changes'} handleCancel={handleCancel} handleChange={handleChange} />
        </section>
      </div>
    </div>
  );
}

export default StudentPerformancePage;
