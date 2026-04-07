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
import AdminDashBoardPage from "./pages/AdminDashBoardPage";
import AdminStudentsPage from "./pages/AdminStudentsPage";
import AdminTeachersPage from "./pages/AdminTeachersPage";
import AdminClassesPage from './pages/AdminClassesPage'
import RecentClasses from "./components/ui/modal/RecentClasses";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AdminDashBoardLayout from "./layouts/AdminDashBoardLayout.jsx";
import AdminClassesLayout from "./layouts/AdminClassesLayout.jsx";

function App() {

  return (
    <>
      {/* <LoginPage title={"Login"} titleDesc={"Login to access account"} logo={logo}/> */}
      {/* <Button name={"Hover me"}/> */}
      {/* <Sidebar /> */}
      {/* <AdminUpdates icon={<LuGraduationCap/>} text={'Students'} value={'3,000'}/> */}
      {/* <QuickAction />
      <RecentActivity /> */}
      {/* <AdminDashBoardPage /> */}
      {/* <AdminTeachersPage /> */}
      {/* <AdminClassesPage /> */}
      {/* <RecentClasses /> */}
      {/* <AdminClassesPage /> */}
      {/* <AdminClassesLayout /> */}
      <LoginPage />
    </>
  )
}

export default App
