import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import AdminFormSection from '../../components/admin/AdminFormSection';
import AdminField from '../../components/admin/AdminField';
import '../styles/addNewClassPage.css';

const yearOptions = [
  { value: '', label: 'Select Year' },
  { value: 'Year 1', label: 'Year 1' },
  { value: 'Year 2', label: 'Year 2' },
  { value: 'Year 3', label: 'Year 3' },
];

const teacherOptions = [
  { value: '', label: 'Assign later' },
  { value: 'Mrs. Lydia Asante', label: 'Mrs. Lydia Asante' },
  { value: 'Mr. Daniel Mensah', label: 'Mr. Daniel Mensah' },
  { value: 'Dr. Nana Yeboah', label: 'Dr. Nana Yeboah' },
];

function AddNewClassPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    className: 'eg: Cyber Security',
    classCode: '',
    capacity: '',
    academicYear: '',
    startDate: '',
    endDate: '',
    description: '',
    teacher: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-class-page">
      <AdminPageHeader title="Add New Class" subtitle="Fill out the form to add a new class" backTo="/admin/classes" />

      <form className="add-class-form" onSubmit={handleSubmit}>
        <AdminFormSection title="Class Information">
          <AdminField id="className" label="Class Name" value={formData.className} onChange={handleChange} />
          <AdminField id="classCode" label="Class Code" placeholder="Enter class code" value={formData.classCode} onChange={handleChange} />
          <AdminField id="capacity" label="Capacity" placeholder="Maximum students" value={formData.capacity} onChange={handleChange} />
          <AdminField id="academicYear" label="Academic Year" type="select" value={formData.academicYear} onChange={handleChange} options={yearOptions} />
          <AdminField id="startDate" label="Start Date" type="date" value={formData.startDate} onChange={handleChange} />
          <AdminField id="endDate" label="End Date" type="date" value={formData.endDate} onChange={handleChange} />
          <AdminField id="description" label="Description" type="textarea" placeholder="Enter class description" value={formData.description} onChange={handleChange} className="admin-field-full" />
        </AdminFormSection>

        <AdminFormSection title="Assign Teacher (Optional)">
          <AdminField id="teacher" label="Select Teacher" type="select" value={formData.teacher} onChange={handleChange} options={teacherOptions} className="admin-field-half" />
        </AdminFormSection>

        <div className="admin-form-actions">
          <button className="admin-primary-button" type="submit">
            Add Class
          </button>
          <button className="admin-secondary-button" type="button" onClick={() => navigate('/admin/classes')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewClassPage;
