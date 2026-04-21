import Badge from "./Badge";

export default function StudentRow({ student, onReview }) {
  return (
    <div className="student-row">
      <div className="student-row-main">
        <div className="student-row-title">
          <h3>{student.name}</h3>
          <span className="student-row-id">{student.id}</span>
          <div className="student-row-badges">
            {student.statuses.map((status) => (
              <Badge key={`${student.id}-${status.label}`} label={status.label} type={status.type} />
            ))}
          </div>
        </div>
        <p className="student-row-submitted">Submitted: {student.submittedAt}</p>
      </div>

      <div className={`student-row-score ${student.score === null ? 'pending' : ''}`}>
        <strong>{student.score === null ? '-' : student.score}</strong>
        <span>{student.score === null ? '' : '/ 100'}</span>
      </div>

      <button className="student-row-review-button" type="button" onClick={() => onReview?.(student)}>
        Review
      </button>
    </div>
  );
}
