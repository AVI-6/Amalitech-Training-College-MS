import Badge from "./Badge";

export default function StudentRow({ student }) {
  return (
    <div className="student-row">
      <div>
        <div style={{ fontWeight: 500 }}>{student.name}</div>
        <div className="muted">{student.id}</div>
      </div>

      <Badge label={student.status} type={student.badgeType} />

      <div style={{ fontWeight: 600, color: "var(--color-success)" }}>
        {student.score}
      </div>

      <button className="btn">Review</button>
    </div>
  );
}