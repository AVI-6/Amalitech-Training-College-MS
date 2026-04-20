import SidebarStudents from '../../components/navigation/SidebarStudents';
import Settings from '../../features/settings/Settings';

function StudentSettingsLayout() {
  return (
    <div className="teachers-dashboard-layout-div admin-layout">
      <div className="layout-left-panel">
        <SidebarStudents administrator={'Kofi Wayoo'} />
      </div>
      <div className="layout-right-panel">
        <Settings
          academicInfo
          initialSettings={{
            fullName: 'Andy Mensah',
            email: 'Andymensah@gmail.com',
            phoneNumber: '+233 54 654 7890',
            studentId: 'STU-001',
            programme: 'Web Development',
            enrollmentDate: '06/06/2025',
          }}
          pageTitle="Student Profile"
          profileName="Kofi Wayoo"
          role="Student"
          variant="student"
        />
      </div>
    </div>
  );
}

export default StudentSettingsLayout;
