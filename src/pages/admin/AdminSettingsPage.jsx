import React from 'react';
import Button from '../../components/buttons/Button';
import SignOut from '../../components/ui/modal/SignOut';

function AdminSettingsPage() {
  const [settings, setSettings] = React.useState({
    fullName: 'Andy Mensah',
    email: 'Andymensah@gmail.com',
    phoneNumber: '+233 54 654 7890',
    currentPassword: '...............',
    newPassword: '...............',
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

  return (
    <div className="admin-settings-page">
      <div className="admin-settings-header">
        <h1>Settings</h1>
        <p>System and account configuration</p>
      </div>

      <form className="admin-settings-form" onSubmit={handleSubmit}>
        <section className="settings-section admin-settings-profile-section">
          <h2>Admin Profile</h2>
          <div className="settings-grid admin-settings-profile-grid">
            <div className="admin-profile-card">
              <div className="admin-avatar">AM</div>
              <div className="admin-profile-actions">
                <div>
                  <div className="admin-profile-name">Andy Mensah</div>
                  <div className="admin-profile-role">Administrator</div>
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
            styles={{ width: '100%', maxWidth: '320px' }}
          />
        </div>
      </form>
      <div className="admin-signout-div">
        <SignOut />
      </div>
    </div>
  );
}

export default AdminSettingsPage;
