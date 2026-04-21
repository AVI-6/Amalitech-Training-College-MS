function StudentGradeCard({ course }) {
  return (
    <section className="student-grade-card">
      <div className="student-grade-card-header">
        <h2>{course.title}</h2>
        <div className="student-grade-summary">
          <span>Course Average</span>
          <strong>{course.average}%</strong>
          <p className={`student-grade-pill ${course.gradeTone}`}>{course.grade}</p>
        </div>
      </div>

      <div className="student-grade-table-wrapper">
        <table className="student-grade-table">
          <thead>
            <tr>
              <th>Assessment</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {course.assessments.map((assessment) => (
              <tr key={assessment.id}>
                <td>{assessment.title}</td>
                <td>{assessment.score}</td>
                <td>{assessment.percentage}</td>
                <td>{assessment.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentGradeCard;
