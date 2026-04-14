import React from 'react'
import PageHeader from '../../components/ui/modal/teachers/PageHeader'
import '../../styles/teachers/assessmentspage.css'
import CategoriesContents from '../../components/ui/modal/admin/CategoriesContents'
import AssessmentsTasks from '../../components/ui/modal/teachers/AssessmentsTasks'

function AssessmentsPage() {
  return (
    <div className='assessments-page-div'>
      <div className="assessments-page-header">
        <PageHeader userName={'Manage Assessments'}/>
      </div>
      <div className="assessments-page-bottom">
        <div className="assessments-page-bottom-1">
          <CategoriesContents />
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
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={95}
          />
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={35}
          />
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={85}
          />
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={35}
          />
          <AssessmentsTasks 
            courseType={'Assignment'}
            courseStatus={'active'}
            courseCode={'web development'}
            dueDate={'Due Apr 15, 2026, at 11:59 PM'}
            submisions={'Submissions 23/26'}
            dueDatepogress={85}
          />
        </div>
      </div>
    </div>
  )
}

export default AssessmentsPage
