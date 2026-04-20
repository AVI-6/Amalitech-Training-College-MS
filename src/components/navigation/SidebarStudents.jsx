import Logo from '../../assets/logo.png'
import { LuGraduationCap } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { IoApps } from "react-icons/io5";
import { NavLink } from 'react-router-dom'


export default function Sidebar({administrator}) {
  return (
    <div className='sidebar'>
      <div className="menu-container">
        <div className="logo-sidebar">
          <img src={Logo} alt="School System Logo" width={100}/>
        </div>
        <div className="nav-acc-div">
          <div className="nav-links">
            <NavLink to="/students/dashboard" className="nav-link">
              <IoApps className='nav-link-icon' />
              <p> Dashboard </p>
            </NavLink>
            <NavLink to="/students/courses" className="nav-link">
              <LuGraduationCap className='nav-link-icon' />
              <p> My Courses</p>
            </NavLink>
            <NavLink to="/students/grades" className="nav-link">
              <MdPeopleAlt className='nav-link-icon' />
              <p> My Grades </p>
            </NavLink>
            <NavLink to="/students/assessments" className="nav-link">
              <LuBookOpenText className='nav-link-icon' />
              <p> Assessments </p>
            </NavLink>
            <NavLink to="/students/settings" className="settings nav-link">
              <GoGear className='nav-link-icon' />
              <p> Settings</p>
            </NavLink>
          </div>
          <div className="sidebar-profile">
            <NavLink to='/students/settings' className="profile-info">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Profile Picture" width={50} height={50} className='profile-pic'/>
              <div className="profile-text">
                <p className="profile-name">{administrator}</p>
                <p className="profile-role">Student</p>
              </div>
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  )
}
