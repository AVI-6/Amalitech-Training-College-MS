import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminFormSection from '../../components/admin/AdminFormSection'
import AdminField from '../../components/admin/AdminField'
import SuccessToast from '../../components/ui/feedback/SuccessToast'
import teacherDatabase from '../../mocked DataBase/teacherDataBase.json'

function TeacherDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const teacher = useMemo(() => teacherDatabase.find((item) => item.id === id), [id])
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState(() => ({
    firstName: teacher?.firstName || '',
    lastName: teacher?.lastName || '',
    email: teacher?.email || '',
    phoneNumber: teacher?.phoneNumber || '',
    dateOfBirth: teacher?.dateOfBirth || '',
    hireDate: teacher?.hireDate || '',
    address: teacher?.address || '',
    city: teacher?.city || '',
    country: teacher?.country || '',
    subjectSpecialization: teacher?.subjectSpecialization || teacher?.subject || '',
    highestQualification: teacher?.highestQualification || '',
    yearsOfExperience: teacher?.yearsOfExperience || '',
    assignClass: teacher?.assignClass || '',
  }))

  if (!teacher) {
    return <div className="teacher-details-page"><p>Teacher not found.</p></div>
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2500)
  }

  const handleDelete = () => {
    navigate('/admin/teachers')
  }

  return (
    <div className="teacher-details-page">
      {showToast && <SuccessToast message="Changes saved successfully." />}
      <AdminPageHeader
        title={`${teacher.firstName} ${teacher.lastName}`}
        subtitle={`View activities of ${teacher.firstName} ${teacher.lastName}`}
        backTo="/admin/teachers"
      />

      <div className="teacher-summary-grid">
        <div className="teacher-overview-card">
          <div className="teacher-stat-row">
            <div className="teacher-stat-card">
              <div className="teacher-stat-label">Active Classes</div>
              <div className="teacher-stat-value">{teacher.classCount}</div>
            </div>
            <div className="teacher-stat-card">
              <div className="teacher-stat-label">Students</div>
              <div className="teacher-stat-value">{teacher.studentsCount}</div>
            </div>
            <div className="teacher-stat-card">
              <div className="teacher-stat-label">Experience</div>
              <div className="teacher-stat-value">{teacher.experience} yrs</div>
            </div>
          </div>

          <div className="teacher-classes-taught">
            <div className="teacher-section-title">Classes Taught</div>
            <div className="teacher-classes-list">
              {teacher.classesTaught.map((classItem) => (
                <div key={classItem.title} className="teacher-class-item">
                  <div>
                    <strong>{classItem.title}</strong>
                    <p>{classItem.schedule}</p>
                  </div>
                  <span>{classItem.students} students</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="teacher-details-form" onSubmit={handleSubmit}>
          <AdminFormSection title="Personal Information">
            <AdminField id="firstName" label="First name" name="firstName" value={formData.firstName} onChange={handleChange} />
            <AdminField id="lastName" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
            <AdminField id="email" label="Email" type="email" value={formData.email} name="email" onChange={handleChange} />
            <AdminField id="phoneNumber" label="Phone Number" type="tel" value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} />
            <AdminField id="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange} />
            <AdminField id="hireDate" label="Hire Date" type="date" value={formData.hireDate} name="hireDate" onChange={handleChange} />
          </AdminFormSection>

          <AdminFormSection title="Contact Information">
            <AdminField id="address" label="Address" value={formData.address} name="address" onChange={handleChange} />
            <AdminField id="city" label="City" value={formData.city} name="city" onChange={handleChange} />
            <AdminField id="country" label="Country" value={formData.country} name="country" onChange={handleChange} />
          </AdminFormSection>

          <AdminFormSection title="Professional Information">
            <AdminField id="subjectSpecialization" label="Subject Specialization" type="select" value={formData.subjectSpecialization} name="subjectSpecialization" onChange={handleChange} options={[
              { value: teacher.subject, label: teacher.subject },
              { value: 'Web Development', label: 'Web Development' },
              { value: 'Data Science', label: 'Data Science' },
            ]} />
            <AdminField id="highestQualification" label="Highest Qualification" value={formData.highestQualification} name="highestQualification" onChange={handleChange} />
            <AdminField id="yearsOfExperience" label="Years of Experience" value={formData.yearsOfExperience} name="yearsOfExperience" onChange={handleChange} />
            <AdminField id="assignClass" label="Assign Class" type="select" value={formData.assignClass} name="assignClass" onChange={handleChange} options={teacher.classesTaught.map((c) => ({ value: c.title, label: c.title }))} />
          </AdminFormSection>

          <div className="teacher-details-actions">
            <button className="admin-primary-button" type="submit">Save Changes</button>
            <button className="admin-secondary-button" type="button" onClick={() => navigate('/admin/teachers')}>Cancel</button>
          </div>

          <div className="teacher-delete-card">
            <div>
              <h3>Delete Teacher Profile</h3>
              <p>Deleting the profile of a teacher cannot be undone once you approve.</p>
            </div>
            <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeacherDetailsPage
