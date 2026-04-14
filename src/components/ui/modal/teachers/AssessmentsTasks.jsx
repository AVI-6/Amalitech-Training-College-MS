import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import { FaEye, FaTrash } from 'react-icons/fa'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import '../../../../styles/teachers/assessmentsTasks.css'
import { FaRegCalendarMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function AssessmentsTasks({ courseType, courseStatus, courseTitle, cousreCode, dueDate, submisions, dueDatepogress,  }) {

  const navigate = useNavigate()

  function handleViewAssessment(){
    navigate('/teachers/assessments/assessment-details')
  }
  return (
    <div className="assessments-task-wrapper">
      <div className="assessments-task-1">
        <p className="course-type">{courseType}</p>
        <p className="course-status">{courseStatus}</p>
      </div>
      <div className="assessments-task-2">
        <p className="course-title"> {courseTitle} </p>
      </div>
      <div className="assessments-task-3">
        <p className="course-code"> {cousreCode} </p>
      </div>
      <div className="assessments-task-4">
        <p className="course-date"> <FaRegCalendarMinus />{dueDate} </p>
      </div>
      <div className="assessments-task-5">
        <p className="submisions"> {submisions} </p>
      </div>
      <div className="assessments-task-6">
        <div className="due-date-progress" style={{width: `${dueDatepogress}`}}></div>
      </div>
      <div className="assessments-task-7">
        <div className="assessments-task-7-1">
          <ButtonWithIcon onClick={handleViewAssessment} name={'view'} buttonIcon={<FaEye/>} />
        </div>
        <div className="assessments-task-7-2">
          <p className="change"><HiOutlinePencilSquare className="change"/></p>
          <p className="delete"><RiDeleteBin6Line className="delete"/></p>
        </div>
      </div>
    </div>
  )
}

export default AssessmentsTasks
