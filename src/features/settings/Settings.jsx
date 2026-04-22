import React from 'react';
import Button from '../../components/buttons/Button';
import SignOut from '../../components/ui/modal/SignOut';
import { useNavigate } from 'react-router-dom';
import HeaderWithButton from '../../components/navigation/HeaderWithButton';
import { HiOutlineUserCircle } from 'react-icons/hi';
import '../../styles/students/studentSettings.css';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

function AdminSettingsPage({
  pageTitle,
  role,
  variant = 'default',
  profileName,
  initialSettings,
  academicInfo,
}) {
  const [settings, setSettings] = React.useState({
    fullName: 'Andy Mensah',
    email: 'Andymensah@gmail.com',
    phoneNumber: '+233 54 654 7890',
    currentPassword: '...............',
    newPassword: '...............',
    studentId: 'STU-001',
    programme: 'Web Development',
    enrollmentDate: '06/06/2025',
    ...initialSettings,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const navigate =useNavigate()

  function handleSignOutNavigate(){
    navigate('/login')
  }

  const isStudent = variant === 'student';

  return (
    <div className={`admin-settings-page ${isStudent ? 'student-settings-page' : ''}`}>
      <div className="admin-settings-header">
        <AdminPageHeader title={'Settings'} subtitle={'System and account configuration'} />
        <h1>Settings</h1>
        <p>System and account configuration</p>
      </div>

      <form className="admin-settings-form" onSubmit={handleSubmit}>
        <section className="settings-section admin-settings-profile-section">
          <h2>{pageTitle}</h2>
          <div className="settings-grid admin-settings-profile-grid">
            <div className="admin-profile-card">
              <div className="admin-avatar"><HiOutlineUserCircle className='admin-avatar-icon'/></div>
              <div className="admin-profile-actions">
                <div>
                  <div className="admin-profile-name">{profileName || pageTitle}</div>
                  <div className="admin-profile-role">{role} </div>
                </div>
                <button type="button" className="change-photo-button">Change Photo</button>
              </div>
            </div>

            <div className="settings-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={settings.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label htmlFor="adminEmail">Email</label>
              <input
                id="adminEmail"
                name="email"
                type="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field settings-field-half">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={settings.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {isStudent ? (
          <section className="settings-section student-settings-academic-section">
            <h2>Academic Information</h2>
            <div className="settings-grid">
              <div className="settings-field">
                <label htmlFor="studentId">Student ID</label>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  value={settings.studentId}
                  onChange={handleChange}
                />
              </div>

              <div className="settings-field">
                <label htmlFor="enrollmentDate">Enrollment Date</label>
                <input
                  id="enrollmentDate"
                  name="enrollmentDate"
                  type="text"
                  value={settings.enrollmentDate}
                  onChange={handleChange}
                />
              </div>

              <div className="settings-field settings-field-half">
                <label htmlFor="programme">Programme</label>
                <input
                  id="programme"
                  name="programme"
                  type="text"
                  value={settings.programme}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
        ) : null}

        <section className="settings-section">
          <h2>Security Settings</h2>
          <div className="settings-grid">
            <div className="settings-field">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={settings.currentPassword}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={settings.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <div className="settings-actions">
          <Button
            name="Save Changes"
            btnType="submit"
            styles={{ width: '100%', maxWidth: isStudent ? '220px' : '320px' }}
          />
        </div>
      </form>
      <div className="admin-signout-div">
        <SignOut onClick={handleSignOutNavigate}/>
      </div>
    </div>
  );
}

export default AdminSettingsPage;
