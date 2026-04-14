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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to={'/login'} replace/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Route>
          <Route element={<AdminLayout/>}>
            <Route path="/admin/dashboard" element={<AdminDashBoardLayout />}></Route>
            <Route path="/admin/students" element={<AdminStudentsLayout />} />
            <Route path="/admin/students/:id" element={<AdminStudentsDetailsLayout />} />
            <Route path="/admin/students/new-student" element={<AddNewStudentLayout />} />
            <Route path="/admin/teachers" element={<AdminTeachersLayout />} />
            <Route path="/admin/teachers/:id" element={<AdminTeacherDetailsLayout />} />
            <Route path="/admin/classes" element={<AdminClassesLayout />}>
              <Route path="/admin/classes/new" element={<AddNewClass />} />
              <Route path="/admin/classes/:details" element={<AddNewClass />} />
            </Route>
            <Route path="/admin/settings" element={<AdminSettingsLayout />} />
          </Route>
          <Route element={<TeacherLayout/>}>
            <Route path="/teachers/dashboard" element={<TeachersDashboardLayout/>}/>
            <Route path="/teachers/courses" element={<MyCoursePageLayout />}/>
            <Route path="/teachers/courses/my-course" element={<ClassActiveLayout />}/>
            <Route path="/teachers/assessments" element={<AssessmentsPageLayout />}/>
            <Route path="/teachers/assessments/create" element={<CreateAssessmentsPageLayout />} />
            <Route path="/teachers/assessments/view-analytics" element={<ViewAnalyticsPageLayout />} />
            <Route path="/teachers/assessments/assessment-details" element={<AssessmentDetailsLayout />} />
          </Route>
          <Route path="*" element={<h1>Opps!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
