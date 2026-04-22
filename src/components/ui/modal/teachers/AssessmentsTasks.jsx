import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import { FaEye, FaTrash } from 'react-icons/fa'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import '../../../../styles/teachers/assessmentsTasks.css'
import { FaRegCalendarMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function AssessmentsTasks() {
  const assessments = [
    {
      id: 1,
      courseType: "Assignment",
      courseStatus: "Active",
      courseTitle: "React Components Assignment",
      cousreCode: "Web Development",
      dueDate: "Apr 15, 2026 • 11:59 PM",
      submisions: "23/28",
      dueDatepogress: 82,
      points: 100
    },
    {
      id: 2,
      courseType: "Quiz",
      courseStatus: "Active",
      courseTitle: "JavaScript Fundamentals Quiz",
      cousreCode: "Advanced JavaScript",
      dueDate: "Apr 12, 2026 • 10:00 AM",
      submisions: "20/25",
      dueDatepogress: 80,
      points: 50
    },
    {
      id: 3,
      courseType: "Midterm",
      courseStatus: "Upcoming",
      courseTitle: "Midterm Exam - React Fundamentals",
      cousreCode: "React Fundamentals",
      dueDate: "Apr 19, 2026 • 9:00 AM",
      submisions: "0/25",
      dueDatepogress: 0,
      points: 200
    },
    {
      id: 4,
      courseType: "Project",
      courseStatus: "Active",
      courseTitle: "Full Stack Application Project",
      cousreCode: "Web Development",
      dueDate: "Apr 25, 2026 • 11:59 PM",
      submisions: "5/28",
      dueDatepogress: 18,
      points: 70
    },
    {
      id: 5,
      courseType: "Assignment",
      courseStatus: "Closed",
      courseTitle: "Async Programming Exercise",
      cousreCode: "JavaScript",
      dueDate: "Apr 8, 2026 • 11:59 PM",
      submisions: "27/28",
      dueDatepogress: 96,
      points: 80
    },
    {
      id: 6,
      courseType: "Lab",
      courseStatus: "Active",
      courseTitle: "Redux State Management Lab",
      cousreCode: "React Fundamentals",
      dueDate: "Apr 14, 2026 • 5:00 PM",
      submisions: "18/25",
      dueDatepogress: 72,
      points: 150
    },
  ];

  const navigate = useNavigate()

  function handleViewAssessment(){
    navigate('/teachers/assessments/assessment-details')
  }
  return (
    <div className="assessments-task-wrapper-div">
      {assessments.map(a=>{
        return(
          <div className="assessments-tasks-wrapper" key={a.id}>

            <div className="assessments-task-1">
              <p className={`course-type ${a.courseType.toLocaleLowerCase()}`}>{a.courseType}</p>
              <p className={`course-status ${a.courseStatus.toLocaleLowerCase()}`}>{a.courseStatus}</p>
            </div>
            <div className="assessments-task-2">
              <p className="course-title"> {a.courseTitle} </p>
            </div>
            <div className="assessments-task-3">
              <p className="course-code"> {a.cousreCode} </p>
            </div>
            <div className="assessments-task-4">
              <p className="course-date"> <FaRegCalendarMinus />{a.dueDate} </p>
            </div>
            <div className="assessments-task-5">
              <p className="submisions">Submissions: {a.submisions} </p>
              <b className='points'> {a.points} pts</b>
            </div>
            <div className="assessments-task-6">
              <div className="due-date-progress" style={{width: `${a.dueDatepogress}%`}}></div>
            </div>
            <div className="assessments-task-7">
              <div className="assessments-task-7-1">
                <ButtonWithIcon onClick={handleViewAssessment} name={'view'} buttonIcon={<FaEye/>} />
              </div>
              <div className="assessments-task-7-2">
                <p className="change"><HiOutlinePencilSquare className="change" onClick={()=>navigate('/teachers/assessments/create')}/></p>
                <p className="delete"><RiDeleteBin6Line className="delete" onClick={()=>navigate('/teachers/assessments')}/></p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AssessmentsTasks
