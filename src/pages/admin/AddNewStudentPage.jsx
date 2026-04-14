import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import AdminFormSection from '../../components/admin/AdminFormSection';
import AdminField from '../../components/admin/AdminField';
import '../../styles/admin/addNewClassPage.css';

const genderOptions = [
  { value: '', label: 'Select Gender' },
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
];

const classOptions = [
  { value: '', label: 'Select Class' },
  { value: 'Math-202', label: 'Math-202' },
  { value: 'Web Dev 301', label: 'Web Dev 301' },
  { value: 'CSI-100', label: 'CSI-100' },
];

function AddNewStudentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    assignClass: '',
    enrolmentDate: '',
    studentId: 'Auto-generated',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-student-page">
      <AdminPageHeader
        title="Add New Students"
        subtitle="Fill out the form to add a new student"
        backTo="/admin/students"
      />

      <form className="add-student-form" onSubmit={handleSubmit}>
        <AdminFormSection title="Personal Information">
          <AdminField className={'admin-field'} id="firstName" label="First name" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
          <AdminField className={'admin-field'} id="lastName" label="Last Name" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />
          <AdminField className={'admin-field'} id="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
          <AdminField className={'admin-field'} id="gender" label="Gender" type="select" value={formData.gender} onChange={handleChange} options={genderOptions} />
          <AdminField className={'admin-field'} id="email" label="Email" type="email" placeholder="student@email.com" value={formData.email} onChange={handleChange} />
          <AdminField className={'admin-field'} id="phoneNumber" label="Phone Number" type="tel" placeholder="+233 50 876 856 7898" value={formData.phoneNumber} onChange={handleChange} />
        </AdminFormSection>

        <AdminFormSection title="Contact Information">
          <AdminField className={'admin-field'} id="address" label="Address" placeholder="Enter street address" value={formData.address} onChange={handleChange} />
          <AdminField className={'admin-field'} id="city" label="City" placeholder="Enter city" value={formData.city} onChange={handleChange} />
          <AdminField className={'admin-field'} id="country" label="Country" placeholder="Enter country" value={formData.country} onChange={handleChange} />
        </AdminFormSection>

        <AdminFormSection title="Academic Information">
          <AdminField className={'admin-field'} id="assignClass" label="Assign Class" type="select" value={formData.assignClass} onChange={handleChange} options={classOptions} />
          <AdminField className={'admin-field'} id="enrolmentDate" label="Enrolment Date" type="date" value={formData.enrolmentDate} onChange={handleChange} />
          <AdminField id="studentId" label="Student ID" value={formData.studentId} readOnly disabled className="admin-field-full" />
        </AdminFormSection>

        <div className="admin-form-actions">
          <button className="admin-primary-button" type="submit">
            Add Student
          </button>
          <button className="admin-secondary-button" type="button" onClick={() => navigate('/admin/students')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewStudentPage;
