import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentAssessmentDetailsPage from '../../pages/students/StudentAssessmentDetailsPage';

function StudentAssessmentDetailsLayout() {
  return (
    <div className="students-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <StudentAssessmentDetailsPage />
      </div>
    </div>
  );
}

export default StudentAssessmentDetailsLayout;
