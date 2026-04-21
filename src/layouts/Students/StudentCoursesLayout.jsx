import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentCoursesPage from '../../pages/students/StudentCoursesPage';

function StudentCoursesLayout() {
  return (
    <div className="students-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <StudentCoursesPage />
      </div>
    </div>
  );
}

export default StudentCoursesLayout;
