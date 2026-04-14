import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import ProgressBar from '../../components/admin/ProgressBar';
import '../styles/classDetailsPage.css';

const classDetailsByCode = {
  'Math-202': {
    title: 'Math-202',
    subtitle: 'Mathematics -2500 students - Year 2',
    students: [
      { name: 'Ama Owusu', id: 'STU-001', gpa: '3.6', attendance: 90, status: 'Active' },
      { name: 'Yaw Bonsu', id: 'STU-002', gpa: '3.8', attendance: 90, status: 'Active' },
      { name: 'Yaw Afari', id: 'STU-002A', gpa: '2.4', attendance: 60, status: 'Active' },
      { name: 'Kweku Azonto', id: 'STU-003', gpa: '3.1', attendance: 90, status: 'Active' },
      { name: 'Collins Dabo', id: 'STU-004', gpa: '3.3', attendance: 90, status: 'Active' },
      { name: 'Cynthia Ofori', id: 'STU-005', gpa: '3.5', attendance: 90, status: 'Active' },
      { name: 'Leticia Agbley', id: 'STU-006', gpa: '4.0', attendance: 100, status: 'Active' },
      { name: 'Nikola Jokic', id: 'STU-007', gpa: '1.5', attendance: 80, status: 'Active' },
    ],
  },
};

function ClassDetailsPage() {
  const { classCode = '' } = useParams();
  const decodedClassCode = decodeURIComponent(classCode);
  const classDetails = classDetailsByCode[decodedClassCode] ?? classDetailsByCode['Math-202'];
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredStudents = classDetails.students.filter((student) =>
    `${student.name} ${student.id}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="class-details-page">
      <AdminPageHeader title={classDetails.title} subtitle={classDetails.subtitle} backTo="/admin/classes" />

      <div className="class-details-toolbar">
        <div className="class-details-search">
          <label htmlFor="classStudentSearch">Search</label>
          <input
            id="classStudentSearch"
            type="text"
            placeholder="Search Students"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button className="assign-teacher-button" type="button">
          + Assign Teacher
        </button>
      </div>

      <div className="class-students-table-wrapper">
        <table className="class-students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>GPA</th>
              <th>Attendance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.gpa}</td>
                <td>
                  <ProgressBar value={student.attendance} />
                </td>
                <td className="student-status-active">{student.status}</td>
                <td>
                  <Link
                    className="class-view-button"
                    to={`/admin/students/${student.id}/performance?name=${encodeURIComponent(student.name)}&class=${encodeURIComponent(classDetails.title)}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="class-details-footer">
        <p>Showing 1-9 of 260 results</p>
        <div className="class-pagination">
          <span className="pagination-arrow">◀</span>
          <span className="pagination-number active">1</span>
          <span className="pagination-number">2</span>
          <span className="pagination-number">3</span>
          <span className="pagination-number">4</span>
          <span className="pagination-dots">...</span>
          <span className="pagination-number">120</span>
          <span className="pagination-arrow active">▶</span>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsPage;
