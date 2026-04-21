import { FiBookOpen, FiClock, FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function StudentAssessmentCard({ assessment }) {
  const navigate = useNavigate();

  return (
    <article
      className="student-assessment-card"
      onClick={() => navigate(`/students/assessments/${assessment.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate(`/students/assessments/${assessment.id}`);
        }
      }}
    >
      <div className="student-assessment-badges">
        <span className={`student-assessment-pill ${assessment.typeTone}`}>{assessment.type}</span>
        <span className={`student-assessment-pill ${assessment.statusTone}`}>{assessment.status}</span>
        {assessment.dueLabel ? (
          <span className={`student-assessment-pill ${assessment.dueTone}`}>{assessment.dueLabel}</span>
        ) : null}
      </div>

      <h2>{assessment.title}</h2>

      <div className="student-assessment-meta">
        <p>
          <FiBookOpen />
          {assessment.course}
        </p>
        <p>
          <FiClock />
          {assessment.dueDate}
        </p>
        <p>
          <FiFileText />
          {assessment.points}
        </p>
      </div>
    </article>
  );
}

export default StudentAssessmentCard;
