import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentGradesPage from '../../pages/students/StudentGradesPage';

function StudentGradesLayout() {
  return (
    <div className="students-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <StudentGradesPage />
      </div>
    </div>
  );
}

export default StudentGradesLayout;
