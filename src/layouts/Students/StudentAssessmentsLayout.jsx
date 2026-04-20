import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentAssessmentsPage from '../../pages/students/StudentAssessmentsPage';

function StudentAssessmentsLayout() {
  return (
    <div className="students-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <StudentAssessmentsPage />
      </div>
    </div>
  );
}

export default StudentAssessmentsLayout;
