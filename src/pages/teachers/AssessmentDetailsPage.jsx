import { useState } from "react";
import Card from "../../components/teachers/Card";
import Badge from "../../components/teachers/Badge";
import StudentRow from "../../components/teachers/ShowStudentsRow";
import HeaderWithButton from "../../components/navigation/HeaderWithButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import '../../styles/teachers/assessmentdetails.css'

export default function AssessmentDetails() {
  const [students] = useState([
    {
      name: "Alice Johnson",
      id: "STU01",
      status: "Graded",
      badgeType: "success",
      score: "95 / 100",
    },
    {
      name: "Bob Smith",
      id: "STU02",
      status: "Graded",
      badgeType: "success",
      score: "88 / 100",
    },
    {
      name: "Carol Williams",
      id: "STU03",
      status: "Pending Review",
      badgeType: "warning",
      score: "-",
    },
    {
      name: "David Brown",
      id: "STU04",
      status: "Late",
      badgeType: "error",
      score: "75 / 100",
    },
    {
      name: "Emma Davis",
      id: "STU05",
      status: "Graded",
      badgeType: "success",
      score: "92 / 100",
    },
  ]);

  const [notSubmitted] = useState([
    { name: "Frank Miller", id: "STU06" },
    { name: "Henry Moore", id: "STU08" },
    { name: "Josh Thompson", id: "STU10" },
    { name: "Grace Wilson", id: "STU07" },
    { name: "Isabelle Garcia", id: "STU09" },
  ]);

  return (
    <div className="container">
      <HeaderWithButton 
        btnName={'Back'} 
        headerText={'Assessment Details'} 
        btnIcon={<FaLongArrowAltLeft />} 
        styles={{backgroundColor: 'transparent', color: '#E8622A'}}
        className='container-header'
      />

      {/* Assignment Card */}
      <div className="empty-div-for-space"></div>
      <Card style={{marginTop: 70}}>
        <div className="flex-between">
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <Badge label="Assignment" type="info" />
              <Badge label="Active" type="success" />
            </div>

            <div className="title">React Components Assignment</div>
            <div className="muted">
              Build a complete React application using components, props, and
              state management.
            </div>
          </div>

          <button className="btn primary">Edit Assessment</button>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 24,
            fontSize: "14px",
          }}
        >
          <div>
            <div className="muted">Due Date</div>
            <div>Apr 15, 2026 at 11:59 PM</div>
          </div>
          <div>
            <div className="muted">Total Marks</div>
            <div>100 points</div>
          </div>
          <div>
            <div className="muted">Submissions</div>
            <div>23/28</div>
          </div>
          <div>
            <div className="muted">Created</div>
            <div>Apr 1, 2026</div>
          </div>
        </div>
      </Card>

      {/* Instructions */}
      <Card>
        <div className="section-title">Instructions</div>
        <div className="instruction-wrapper">

          <div className="muted" style={{ lineHeight: 1.8 }}>
            Create a todo list application with the following features:
            <ul style={{ marginLeft: 18, marginTop: 8 }}>
              <li>Add new tasks</li>
              <li>Mark tasks as complete</li>
              <li>Delete tasks</li>
              <li>Filter tasks (All, Active, Completed)</li>
              <li>Use proper component structure</li>
              <li>Implement state management</li>
            </ul>
            Submit your code via GitHub repository link.
          </div>
        </div>
        <div className="late-submission">
          <b>Late Submission Policy:</b> Late submissions accepted with 10% penalty per day
        </div>
      </Card>

      {/* Student Submissions */}
      <Card>
        <div className="section-title">Student Submissions (23)</div>
        {students.map((s, i) => (
          <StudentRow key={i} student={s} />
        ))}
      </Card>

      {/* Not Submitted */}
      <Card>
        <div className="section-title">Not Submitted (5)</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 12,
          }}
          className='attach' 
        >
          {notSubmitted.map((s, i) => (
            <div className="spaced"
              key={i}
              style={{
                padding: 12,
                border: "1px solid #f3d1d1",
                borderRadius: 6,
                background: "#fff5f5",
              }}
            >
              <div className="wrapped">

                <div style={{ fontWeight: 500 }}>{s.name}</div>
                <div className="muted">{s.id}</div>
              </div>
              <Badge label="Missing" type="error" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}