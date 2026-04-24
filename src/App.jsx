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
import AuthConfirmPage from "./pages/AuthConfirmPage.jsx";
import SetPasswordPage from "./pages/SetPasswordPage.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to={'/login'} replace/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/sign-up" element={<FirstSignUp/>} />
            <Route path="/auth/confirm/*" element={<AuthConfirmPage />} />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/admin-header" element={<AdminPageHeader title={'Administrator Here'} backTo={()=>window.history.back()} />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route element={<AdminLayout/>}>
              <Route path="/admin/dashboard" element={<AdminDashBoardLayout />}></Route>
              <Route path="/admin/students" element={<AdminStudentsLayout />} />
              <Route path="/admin/students/:id" element={<AdminStudentsDetailsLayout />} />
              <Route path="/admin/students/new-student" element={<AddNewStudentLayout />} />
              <Route path="/admin/teachers" element={<AdminTeachersLayout />} />
              <Route path="/admin/teachers/:id" element={<AdminTeacherDetailsLayout />} />
              <Route path="/admin/teachers/new-teacher" element={<AddNewTeacherLayout />} />
              <Route path="/admin/classes" element={<AdminClassesLayout />}/>
                <Route path="/admin/classes/new-class" element={<AddNewClassLayout />} />
                <Route path="/admin/classes/view-class" element={<ViewClassLayout />} />
                <Route path="/admin/classes/view-class-details" element={<ViewClassDetailsLayout />} />
              <Route path="/admin/settings" element={<AdminSettingsLayout />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route element={<TeacherLayout/>}>
              <Route path="/teachers/dashboard" element={<TeachersDashboardLayout/>}/>
              <Route path="/teachers/dashboard/attendance" element={<AttendanceLayout/>}/>
              <Route path="/teachers/dashboard/post-announcements" element={<AnnouncementLayout/>}/>
              <Route path="/teachers/courses" element={<MyCoursePageLayout />}/>
              <Route path="/teachers/courses/my-course" element={<ClassActiveLayout />}/>
              <Route path="/teachers/assessments" element={<AssessmentsPageLayout />}/>
              <Route path="/teachers/assessments/create" element={<CreateAssessmentsPageLayout />} />
              <Route path="/teachers/assessments/grade" element={<GradeLayout/>}/>
              <Route path="/teachers/assessments/view-analytics" element={<ViewAnalyticsPageLayout />} />
              <Route path="/teachers/assessments/assessment-details" element={<AssessmentDetailsLayout />} />
              <Route path="/teachers/assessments/review-submission" element={<ReviewLayout />} />
              <Route path="/teachers/resources" element={<ResourcesLayout />} />
              <Route path="/teachers/resources/create" element={<CreateResourceLayout />} />
              <Route path="/teachers/settings" element={<SettingsLayout />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route element={<StudentLayout/>}>
              <Route path="/students/dashboard" element={<StudentDashboardLayout/>}/>
              <Route path="/students/courses" element={<StudentCoursesLayout />}/>
              <Route path="/students/courses/:courseId" element={<StudentCourseDetailsLayout />}/>
              <Route path="/students/courses/timetable" element={<ViewTimeTableLayout />}/>
              <Route path="/students/grades" element={<StudentGradesLayout />}/>
              <Route path="/students/assessments" element={<StudentAssessmentsLayout />}/>
              <Route path="/students/assessments/:assessmentId" element={<StudentAssessmentDetailsLayout />}/>
              <Route path="/students/settings" element={<StudentSettingsLayout />}/>
              {/* <Route path="/students/courses/my-course" element={<ClassActiveLayout />}/>
              <Route path="/students/courses/my-course" element={<ClassActiveLayout />}/>
              <Route path="/students/assessments/create" element={<CreateAssessmentsPageLayout />} />
              <Route path="/students/assessments/view-analytics" element={<ViewAnalyticsPageLayout />} />
              <Route path="/students/assessments/assessment-details" element={<AssessmentDetailsLayout />} />
              <Route path="/students/assessments/review-submission" element={<ReviewLayout />} />
              <Route path="/students/resources" element={<ResourcesLayout />} /> */}
            </Route>
          </Route>
          <Route path="*" element={<EmptyPageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
