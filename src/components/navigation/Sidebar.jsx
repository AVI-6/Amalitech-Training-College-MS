import Logo from '../../assets/logo.png'
import { LuGraduationCap } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { IoApps } from "react-icons/io5";


export default function Sidebar({administrator}) {
  return (
    <div className='sidebar'>
      <div className="menu-container">
        <div className="logo-sidebar">
          <img src={Logo} alt="School System Logo" width={100}/>
        </div>
        <div className="nav-acc-div">
          <div className="nav-links">
            <div className="nav-link active">
              <IoApps />
              <a href='' to="/admin/staff"> Dashboard</a>
            </div>
            <div className="nav-link">
              <LuGraduationCap />
              <a href='' to="/admin/students"> Students</a>
            </div>
            <div className="nav-link">
              <MdPeopleAlt />
              <a href='' to="/admin/staff"> Teachers</a>
            </div>
            <div className="nav-link">
              <LuBookOpenText />
              <a href='' to="/admin/classes"> Classes</a>
            </div>
            <div className="settings nav-link">
              <GoGear />
              <a href='' to="/admin/settings"> Settings</a>
            </div>
          </div>
          <div className="sidebar-profile">
            <div className="profile-info">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Profile Picture" width={50} height={50} className='profile-pic'/>
              <div className="profile-text">
                <p className="profile-name">{administrator}</p>
                <p className="profile-role">Administrator</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
