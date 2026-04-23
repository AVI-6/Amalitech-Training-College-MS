import Button from "./components/buttons/Button"
import Sidebar from "./components/navigation/Sidebar"
import AdminUpdates from "./components/ui/modal/AdminUpdates"
import LoginPage from './pages/LoginPage'
import { LuGraduationCap } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import QuickAction from "./components/ui/modal/QuickAction";
import { VscGraph } from "react-icons/vsc";
import RecentActivity from "./components/ui/modal/RecentActivity";
import AdminDashBoardLayout from "./layouts/admin/AdminDashBoardLayout.jsx";
import AdminStudentsLayout from "./layouts/admin/AdminStudentsLayout.jsx";
import AdminTeachersLayout from "./layouts/admin/AdminTeachersLayout.jsx";
import AdminClassesLayout from './layouts/admin/AdminClassesLayout.jsx'
import AdminSettingsLayout from './layouts/admin/AdminSettingsLayout.jsx'
import AdminTeacherDetailsLayout from './layouts/admin/AdminTeacherDetailsLayout.jsx'
import { BrowserRouter, Route, Routes, Navigate, } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout.jsx'
import AddNewClass from './layouts/admin/AdminNestedClassLayout.jsx'
import AdminStudentsDetailsLayout from './layouts/admin/AdminStudentsDetailsLayout.jsx'
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import TeacherLayout from "./layouts/Teacher/TeacherLayout.jsx";
import TeachersDashboardLayout from "./layouts/Teacher/TeachersDashboardLayout.jsx";
import MyCoursePageLayout from "./layouts/Teacher/MyCoursePageLayout.jsx";
import AssessmentsPageLayout from "./layouts/Teacher/AssessmentsPageLayout.jsx";
import CreateAssessmentsPageLayout from "./layouts/Teacher/CreateAssessmentsPageLayout.jsx";
import ViewAnalyticsPageLayout from "./layouts/Teacher/ViewAnalyticsPageLayout.jsx";
import AddNewStudentLayout from "./layouts/admin/AddNewStudentLayout.jsx";
import AssessmentDetailsLayout from "./layouts/Teacher/AssessmentDetailsLayout.jsx";
import ClassActiveLayout from "./layouts/Teacher/ClassActiveLayout.jsx";
import AddNewTeacherLayout from "./layouts/admin/AddNewTeacherLayout.jsx";
import AddNewClassLayout from "./layouts/admin/AddNewClassLayout.jsx";
import FirstSignUpLayout from "./layouts/ViewclassLayout.jsx";
import FirstSignUp from "./features/First Sign up/FirstSignUp.jsx";
import ViewClassLayout from "./layouts/ViewclassLayout.jsx";
import EmptyPageComponent from './components/ui/modal/EmptyPageComponent.jsx'
import ViewClassDetailsLayout from "./layouts/admin/ViewClassDetailsLayout.jsx";
import SettingsLayout from './layouts/Teacher/SettingsLayout.jsx'
import ResourcesLayout from "./layouts/Teacher/ResourcesLayout.jsx";
import ReviewSubmissionPage from "./features/reviewSubmission/ReviewSubmissionPage.jsx";
import ReviewLayout from "./layouts/Teacher/ReviewLayout.jsx";
import StudentDashboardLayout from "./layouts/Students/StudentDashboardLayout.jsx";
import StudentCoursesLayout from "./layouts/Students/StudentCoursesLayout.jsx";
import StudentGradesLayout from "./layouts/Students/StudentGradesLayout.jsx";
import StudentAssessmentsLayout from "./layouts/Students/StudentAssessmentsLayout.jsx";
import StudentCourseDetailsLayout from "./layouts/Students/StudentCourseDetailsLayout.jsx";
import StudentSettingsLayout from "./layouts/Students/StudentSettingsLayout.jsx";
import StudentAssessmentDetailsLayout from "./layouts/Students/StudentAssessmentDetailsLayout.jsx";
import ViewTimeTableLayout from "./layouts/Students/ViewTimeTableLayout.jsx";
import CreateResourceLayout from "./layouts/Teacher/CreateResourceLayout.jsx";
import AttendanceLayout from './layouts/Teacher/AttendanceLayout.jsx'
import AnnouncementLayout from './layouts/Teacher/AnnouncementLayout.jsx'
import GradeLayout from "./layouts/Teacher/GradeLayout.jsx";
import StudentLayout from "./layouts/Students/StudentLayout.jsx";
import AdminPageHeader from "./components/admin/AdminPageHeader.jsx";
import { Providers } from "./app/Providers";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {

  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to={'/login'} replace/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/sign-up" element={<FirstSignUp/>} />
            <Route path="/admin-header" element={<AdminPageHeader title={'Administrator Here'} backTo={()=>window.history.back()} />} />
          </Route>
          <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<AdminDashBoardLayout />}></Route>
            <Route path="students" element={<AdminStudentsLayout />} />
            <Route path="students/:Id" element={<AdminStudentsDetailsLayout />} />
            <Route path="students/new-student" element={<AddNewStudentLayout />} />
            <Route path="teachers" element={<AdminTeachersLayout />} />
            <Route path="teachers/:Id" element={<AdminTeacherDetailsLayout />} />
            <Route path="teachers/new-teacher" element={<AddNewTeacherLayout />} />
            <Route path="classes" element={<AdminClassesLayout />}/>
              <Route path="classes/new-class" element={<AddNewClassLayout />} />
              <Route path="classes/view-class" element={<ViewClassLayout />} />
              <Route path="classes/:details" element={<ViewClassDetailsLayout />} />
            
            <Route path="settings" element={<AdminSettingsLayout />} />
          </Route>
          <Route path="/teachers/*" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<TeachersDashboardLayout/>}/>
            <Route path="dashboard/attendance" element={<AttendanceLayout/>}/>
            <Route path="dashboard/post-announcements" element={<AnnouncementLayout/>}/>
            <Route path="courses" element={<MyCoursePageLayout />}/>
            <Route path="courses/my-course" element={<ClassActiveLayout />}/>
            <Route path="assessments" element={<AssessmentsPageLayout />}/>
            <Route path="assessments/create" element={<CreateAssessmentsPageLayout />} />
            <Route path="assessments/grade" element={<GradeLayout/>}/>
            <Route path="assessments/view-analytics" element={<ViewAnalyticsPageLayout />} />
            <Route path="assessments/assessment-details" element={<AssessmentDetailsLayout />} />
            <Route path="assessments/review-submission" element={<ReviewLayout />} />
            <Route path="resources" element={<ResourcesLayout />} />
            <Route path="resources/create" element={<CreateResourceLayout />} />
            <Route path="settings" element={<SettingsLayout />} />
          </Route>
          <Route path="/students/*" element={<ProtectedRoute allowedRoles={['student']}><StudentLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<StudentDashboardLayout/>}/>
            <Route path="courses" element={<StudentCoursesLayout />}/>
            <Route path="courses/:courseId" element={<StudentCourseDetailsLayout />}/>
            <Route path="courses/timetable" element={<ViewTimeTableLayout />}/>
            <Route path="grades" element={<StudentGradesLayout />}/>
            <Route path="assessments" element={<StudentAssessmentsLayout />}/>
            <Route path="assessments/:assessmentId" element={<StudentAssessmentDetailsLayout />}/>
            <Route path="settings" element={<StudentSettingsLayout />}/>
          </Route>
          <Route path="*" element={<EmptyPageComponent />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}

export default App
