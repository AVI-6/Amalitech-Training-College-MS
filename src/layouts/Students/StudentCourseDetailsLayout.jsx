import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentCourseDetailsPage from '../../pages/students/StudentCourseDetailsPage';

function StudentCourseDetailsLayout() {
  return (
    <div className="students-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <StudentCourseDetailsPage />
      </div>
    </div>
  );
}

export default StudentCourseDetailsLayout;
