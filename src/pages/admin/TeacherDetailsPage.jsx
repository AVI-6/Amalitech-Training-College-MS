import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminFormSection from '../../components/admin/AdminFormSection'
import AdminField from '../../components/admin/AdminField'
import SuccessToast from '../../components/ui/feedback/SuccessToast'
import teacherDatabase from '../../mocked DataBase/teacherDataBase.json'
import ReusableInfoForm from '../../components/forms/ReusableInfoForm'

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
    navigate('/admin/teachers')
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2500)
  }

  const handleDelete = () => {
    navigate('/admin/teachers')
  }

  return (
    <div className="teacher-details-page">
      {showToast && <SuccessToast message="Changes saved successfully." />}
      <div className="admin-details-page-header">
        <AdminPageHeader
          title={`${teacher.firstName} ${teacher.lastName}`}
          subtitle={`View activities of ${teacher.firstName} ${teacher.lastName}`}
          backTo="/admin/teachers"
        />

      </div>

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

        <ReusableInfoForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          form={formData}
          handleDelete = {handleDelete}
          name ={'Save Changes'}
        />

        
          <div className="teacher-delete-card">
            <div>
              <h3>Delete Teacher Profile</h3>
              <p>Deleting the profile of a teacher cannot be undone once you approve.</p>
            </div>
            <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
      </div>
    </div>
  )
}

export default TeacherDetailsPage
