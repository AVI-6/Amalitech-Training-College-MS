import React from 'react'
import AssessmentHeader from '../../components/navigation/AssessmentHeader'
import TopPerformance from '../../features/top performance/component/TopPerformance'
import ClassPerformance from '../../features/analytics/components/ClassPerformance'
import StudentAtRisk from '../../features/students at risk/components/StudentAtRisk'

// CSS is in classperformance.css
function ViewAnalytics() {
  return (
    <div className='view-analytics-page-div'>
      <div className="view-analytics-header-div">
        <AssessmentHeader assessmentTitle={'View Analytics & Report'} setPath={'/teachers/assessments/'} />
      </div>
      <div className="view-analytics-second-div">
        <h3>Class Performance</h3>
        <div className="individual-performance">
          <ClassPerformance />
        </div>
      </div>
      <div className="view-analytics-third-div">
        <h3>Top Performance</h3>
        <div className="top-performance">
          <TopPerformance />
        </div>
      </div>
      <div className="view-analytics-final-div">
        <h3>Students at Risk</h3>
        <div>
          <StudentAtRisk 
            styles={{color: 'var(--color-error)', borderColor: 'var(--color-error)'}}
            hoverStyles={{color: 'var(--color-error)', backgroundColor: '#ef444449'}}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewAnalytics
