import React, { useState } from 'react'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import InputForForm from '../../components/forms/InputForForm'
import TextAreaForForm from '../../components/forms/TextAreaForForm'
import { FaUpload } from 'react-icons/fa'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import WhiteButton from '../../components/buttons/WhiteButton'
import '../../styles/teachers/createResourcepage.css'
import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function CreateResourcesPage() {
  const navigate = useNavigate()
  const [newResource, setNewResource] = useState([])

  function handleCancel(){
    navigate('/teachers/resources')
  }

  function createNewResource(){
    const newResources = {
      id: 'res-006',
      title: 'Redux Tutorial Documentation',
      course: 'React Fundamentals',
      type: 'Guide',
      status: 'Published',
      size: '2.1 MB',
      uploadedAt: 'Apr 9, 2026',
      downloads: 18,
      format: 'PDF',
      kind: 'file',
    }

    setNewResource(prev => [{newResources, ...prev}])
    navigate('/teachers/resources')
  }
  return (
    <div className='create-resource-page-div'>
      <div className="create-resource-page-top">
        <AdminPageHeader title={'Upload Resource'} backTo={'/teachers/resources'}/>
      </div>
      <div className="create-resource-page-bottom">
        <div className="create-resource-wrapper">
          <div className="create-resource-wrapper-header">
            <h3>Resource Details</h3>
          </div>
          <div className="create-resource-wrapper-bottom">
            <InputForForm title={'Title'} placeholder={'eg. week 3 lecture note - react components'} text={newResource.text} />
            <TextAreaForForm assessmentDesc={'Description'} placeholder={'Brief description of resource'} />
            <div className="file-page">
              <FiUpload className='upload-new-resource-file' />
              <p>Click to upload or drag and drop</p>
              <p className='resource-file-type'>PDF, DOC, PPT, ZIP (max 500MB) </p>
            </div>
          </div>
        </div>
        <div className="save-new-resource">
          <ButtonWithIcon name={'Upload'} onClick={createNewResource} />
          <WhiteButton name={'Cancel'} onClick={handleCancel} />
        </div>
      </div>
    </div>
  )
}

export default CreateResourcesPage
