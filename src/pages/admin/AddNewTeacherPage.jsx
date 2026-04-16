import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import AdminFormSection from '../../components/admin/AdminFormSection';
import AdminField from '../../components/admin/AdminField';
import '../styles/addNewTeacherPage.css';

const genderOptions = [
  { value: '', label: 'Select Gender' },
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
];

const subjectOptions = [
  { value: '', label: 'Select Subject' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Cyber Security', label: 'Cyber Security' },
  { value: 'Web Development', label: 'Web Development' },
];

const classOptions = [
  { value: '', label: 'Select Class' },
  { value: 'Math-202', label: 'Math-202' },
  { value: 'CSI-100', label: 'CSI-100' },
  { value: 'Web Dev 301', label: 'Web Dev 301' },
];

function AddNewTeacherPage() {
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
    subjectSpecialization: '',
    employmentStartDate: '',
    highestQualification: '',
    yearsOfExperience: '',
    assignClass: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-teacher-page">
      <AdminPageHeader title="Add New Teacher" subtitle="Fill out the form to add a new teacher" backTo="/admin/teachers" />

      <form className="add-teacher-form" onSubmit={handleSubmit}>
        <AdminFormSection title="Personal Information">
          <AdminField id="firstName" label="First name" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
          <AdminField id="lastName" label="Last Name" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />
          <AdminField id="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
          <AdminField id="gender" label="Gender" type="select" value={formData.gender} onChange={handleChange} options={genderOptions} />
          <AdminField id="email" label="Email" type="email" placeholder="student@email.com" value={formData.email} onChange={handleChange} />
          <AdminField id="phoneNumber" label="Phone Number" type="tel" placeholder="+233 50 876 656 7888" value={formData.phoneNumber} onChange={handleChange} />
        </AdminFormSection>

        <AdminFormSection title="Contact Information">
          <AdminField id="address" label="Address" placeholder="Enter street address" value={formData.address} onChange={handleChange} />
          <AdminField id="city" label="City" placeholder="Enter city" value={formData.city} onChange={handleChange} />
          <AdminField id="country" label="Country" placeholder="Enter country" value={formData.country} onChange={handleChange} />
        </AdminFormSection>

        <AdminFormSection title="Professional Information">
          <AdminField id="subjectSpecialization" label="Subject Specialization" type="select" value={formData.subjectSpecialization} onChange={handleChange} options={subjectOptions} />
          <AdminField id="employmentStartDate" label="Employment Start Date" type="date" value={formData.employmentStartDate} onChange={handleChange} />
          <AdminField id="highestQualification" label="Highest Qualification" placeholder="Eg: PHD, MSC" value={formData.highestQualification} onChange={handleChange} />
          <AdminField id="yearsOfExperience" label="Years of Experience" placeholder="Enter years of experience" value={formData.yearsOfExperience} onChange={handleChange} />
          <AdminField id="assignClass" label="Assign Class" type="select" value={formData.assignClass} onChange={handleChange} options={classOptions} className="admin-field-half" />
        </AdminFormSection>

        <div className="admin-form-actions">
          <button className="admin-primary-button" type="submit">
            Add Teacher
          </button>
          <button className="admin-secondary-button" type="button" onClick={() => navigate('/admin/teachers')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewTeacherPage;
