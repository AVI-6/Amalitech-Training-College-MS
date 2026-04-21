import React from 'react'
import PageHeader from '../../components/ui/modal/teachers/PageHeader'
import '../../styles/teachers/assessmentspage.css'
import CategoriesContents from '../../components/ui/modal/admin/CategoriesContents'
import AssessmentsTasks from '../../components/ui/modal/teachers/AssessmentsTasks'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function AssessmentsPage() {
  const navigation = useNavigate()
  return (
    <div className='assessments-page-div'>
      <div className="assessments-page-header">
        <HeaderWithButton headerText={'Manage Assessments'} onClick={()=> navigation('/teachers/assessments/create')} btnIcon={<FaPlus/>} btnName={'Create Assessment'} />
      </div>
      <div className="assessments-page-bottom">
        <div className="assessments-page-bottom-1">
          <CategoriesContents
            Students='Assessment Type' 
           />
        </div>
        <div className="assessments-page-bottom-2">
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={65}
          />
        </div>
      </div>
    </div>
  )
}

export default AssessmentsPage
