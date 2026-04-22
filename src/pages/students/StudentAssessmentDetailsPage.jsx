import { useRef, useState } from 'react';
import { FiArrowLeft, FiExternalLink, FiUploadCloud } from 'react-icons/fi';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getStudentAssessmentById } from '../../data/studentAssessmentsData';
import '../../styles/students/studentAssessmentDetails.css';

function StudentAssessmentDetailsPage() {
  const navigate = useNavigate();
  const { assessmentId } = useParams();
  const assessment = getStudentAssessmentById(assessmentId);
  const [repositoryLink, setRepositoryLink] = useState('https://github.com/username/project');
  const [comments, setComments] = useState('');
  const fileRef = useRef()

  if (!assessment) {
    return <Navigate to="/students/assessments" replace />;
  }

  const handleFileChange = (e) => {
  const file = e.target.files[0];
    console.log(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
  };

  return (
    <div className="student-assessment-details-page">
      <div className="student-assessment-details-header">
        <h1>Assessment Details</h1>
        <button type="button" onClick={() => navigate('/students/assessments')}>
          <FiArrowLeft />
          Back
        </button>
      </div>

      <section className="student-assessment-details-card">
        <div className="student-assessment-details-badges">
          <span className={`student-assessment-details-pill ${assessment.typeTone}`}>{assessment.type}</span>
          {assessment.dueLabel ? (
            <span className={`student-assessment-details-pill ${assessment.dueTone}`}>{assessment.dueLabel}</span>
          ) : null}
        </div>

        <h2>{assessment.title}</h2>
        <p className="student-assessment-course">{assessment.course}</p>
        <p className="student-assessment-description">{assessment.description}</p>

        <div className="student-assessment-summary-grid">
          <div>
            <span>Due Date</span>
            <strong>{assessment.dueDateValue}</strong>
            <small>{assessment.dueTimeValue}</small>
          </div>
          <div>
            <span>Total Points</span>
            <strong>{assessment.totalPoints}</strong>
          </div>
          <div>
            <span>Late Penalty</span>
            <strong className="late">{assessment.latePenalty}</strong>
          </div>
        </div>
      </section>

      <section className="student-assessment-details-card">
        <h3>Instructions</h3>
        <div className="student-assessment-instructions">
          {assessment.instructions.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="student-assessment-details-card">
        <h3>Your Submission</h3>

        <div className="student-assessment-field">
          <label htmlFor="repository-link">Repository/Project Link</label>
          <div className="student-assessment-link-input">
            <input
              id="repository-link"
              type="url"
              value={repositoryLink}
              onChange={(event) => setRepositoryLink(event.target.value)}
              placeholder="https://github.com/username/project"
            />
            <FiExternalLink />
          </div>
        </div>

        <div className="student-assessment-field" 
          onClick={() => fileRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <label>Upload Files (Optional)</label>
          <input type="file" ref={fileRef} id="" onChange={handleFileChange} hidden />
          <div className="student-assessment-upload-box">
            <FiUploadCloud />
            <p>Drop files here or click to browse</p>
            <small>Supports: PDF, DOC, ZIP, PNG, JPG (Max 10MB)</small>
            <button type="button">Choose Files</button>
          </div>
        </div>

        <div className="student-assessment-field">
          <label htmlFor="submission-comments">Comments/Notes</label>
          <textarea
            id="submission-comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            placeholder="Add any comments or notes for your instructor..."
          />
        </div>

        <div className="student-assessment-actions">
          <button type="button" className="submit">
            Submit Assessment
          </button>
          <button type="button" className="cancel" onClick={() => navigate('/students/assessments')}>
            Cancel
          </button>
        </div>
      </section>

      <section className="student-assessment-details-card status-card">
        <h3>Status</h3>
        <div className="student-assessment-status-grid">
          <div>
            <span>Submission Status</span>
            <strong className={assessment.submissionStatusTone}>{assessment.submissionStatus}</strong>
          </div>
          <div>
            <span>Time Remaining</span>
            <strong>{assessment.timeRemaining}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentAssessmentDetailsPage;
