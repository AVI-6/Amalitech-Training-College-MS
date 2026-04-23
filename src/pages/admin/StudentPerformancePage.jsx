import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import ProgressBar from '../../components/admin/ProgressBar';
import '../../styles/studentPerformancePage.css';
import ReusableInfoForm from '../../components/forms/ReusableInfoForm'
import studentDatabaseUrl from '../../mocked DataBase/studentDatabase.json?url'

function StudentPerformancePage() {
  const { Id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const [student, setStudent] = useState(null);
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState([{
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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(studentDatabaseUrl);
        if (!response.ok) throw new Error('Failed to fetch students');
        const data = await response.json();
        setAllStudents(data);
        const foundStudent = data.find(s => s.id === Id);
        if (foundStudent) {
          setStudent(foundStudent);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [Id]);

  if (loading) return <div>Loading...</div>;
  if (!student) return <div>Student not found</div>;

  const classStudents = allStudents.filter(s => s.className === student.className);
  const studentPerformance = {
    name: student.name,
    id: student.id,
    className: student.className,
    metrics: {
      average: `${(student.gpa * 25).toFixed(0)}%`, // Assuming GPA out of 4, convert to %
      attendance: `${student.attendance}%`,
      grade: student.gpa >= 3.7 ? 'A' : student.gpa >= 3.0 ? 'B' : student.gpa >= 2.0 ? 'C' : 'D',
    },
    assessments: [
      { assessment: 'Quiz 1', score: 27, max: 30, progress: 90, grade: 'A+' },
      { assessment: 'Assignment 1', score: 18, max: 20, progress: 90, grade: 'A+' },
      { assessment: 'Quiz 2', score: 40, max: 50, progress: 85, grade: 'A' },
      { assessment: 'Midterm Exam', score: 50, max: 70, progress: 75, grade: 'B' },
    ],
    attendance: {
      present: Math.floor((student.attendance / 100) * 47), // Assuming 47 total sessions
      absent: 47 - Math.floor((student.attendance / 100) * 47),
      late: 0,
      rate: student.attendance,
    },
    classSummary: {
      title: student.className,
      subtitle: `${student.className} - ${classStudents.length} students`,
      teacher: 'Mrs. Lydia Asante', // Default, could be from DB if added
      schedule: 'Mon, Wed, Fri - 10:00 AM', // Default
    },
  };

  const studentName = searchParams.get('name') || studentPerformance.name;
  const className = searchParams.get('class') || studentPerformance.className;

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleCancel(){
    navigate('/admin/classes')
  }

  return (
    <div className="student-performance-page">
      <div className="student-performance-div">
        <AdminPageHeader title="Student Perfomance" subtitle={`${studentName} - ${studentPerformance.id} - ${className}`} backTo={`/admin/students/`} />
      </div>

      <div className="student-performance-page-bottom">

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

    </div>
  );
}

export default StudentPerformancePage;
