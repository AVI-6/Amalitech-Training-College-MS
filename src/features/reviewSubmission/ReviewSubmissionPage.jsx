import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiDownload, FiFileText, FiLink2, FiTarget } from 'react-icons/fi';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import AdminField from '../../components/admin/AdminField';
import Button from '../../components/buttons/Button';
import WhiteButton from '../../components/buttons/WhiteButton';
import Badge from '../../components/teachers/Badge';
import './ReviewSubmissionPage.css';

const submissionData = {
  assignmentType: 'Assignment',
  status: 'Pending Review',
  badgeType: 'warning',
  title: 'React Components Assignment',
  student: {
    name: 'Carol Williams',
    email: 'carol.williams@student.sch',
    initials: 'CW',
  },
  submittedAt: 'Apr 14, 2026, 9:15 PM',
  dueDate: 'Apr 15, 2026, 11:59 PM',
  totalPoints: 100,
  repositoryLink: 'https://github.com/carolwilliams/react-todo-app',
  attachments: [
    { name: 'todo-app.zip', size: '2.4 MB' },
    { name: 'README.md', size: '12 KB' },
  ],
  comments: `I have completed the React Todo List application with all the required features. The GitHub repository includes:

- Component structure with proper separation of concerns
- State management using React hooks
- Add, delete, and mark tasks as complete
- Filter functionality (All, Active, Completed)
- Responsive design
- Unit tests

Please let me know if you need any clarifications.`,
};

function ReviewSubmissionPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    score: '',
    feedback: '',
  });
  const [errors, setErrors] = useState({
    score: '',
    feedback: '',
  });
  const [isSaved, setIsSaved] = useState(false);

  const scoreSummary = useMemo(() => {
    if (!formData.score) {
      return 'Score Out of 100';
    }

    return `${formData.score} / ${submissionData.totalPoints}`;
  }, [formData.score]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    if (isSaved) {
      setIsSaved(false);
    }
  };

  const validateForm = () => {
    const nextErrors = {
      score: '',
      feedback: '',
    };

    const numericScore = Number(formData.score);

    if (formData.score === '') {
      nextErrors.score = 'Enter a score before saving.';
    } else if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > submissionData.totalPoints) {
      nextErrors.score = `Score must be between 0 and ${submissionData.totalPoints}.`;
    }

    if (!formData.feedback.trim()) {
      nextErrors.feedback = 'Feedback is required before saving.';
    }

    setErrors(nextErrors);

    return !nextErrors.score && !nextErrors.feedback;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    setIsSaved(true);
  };

  const handleCancel = () => {
    setFormData({
      score: '',
      feedback: '',
    });
    setErrors({
      score: '',
      feedback: '',
    });
    setIsSaved(false);
    navigate('/teachers/assessments/assessment-details');
  };

  return (
    <div className="review-submission-page">
      <AdminPageHeader title="Review Submission" backTo="/teachers/assessments/assessment-details" />

      <div className="review-submission-shell">
        <section className="review-submission-card">
          <div className="review-submission-card-header">
            <div className="review-badge-row">
              <Badge label={submissionData.assignmentType} type="info" />
              <Badge label={submissionData.status} type={submissionData.badgeType} />
            </div>
            <h2>{submissionData.title}</h2>
          </div>

          <div className="review-student-row">
            <div className="review-avatar">{submissionData.student.initials}</div>
            <div className="review-student-meta">
              <h3>{submissionData.student.name}</h3>
              <p>{submissionData.student.email}</p>
            </div>
          </div>

          <div className="review-stats-grid">
            <div className="review-stat-item">
              <FiCalendar />
              <div>
                <span>Submitted</span>
                <strong>{submissionData.submittedAt}</strong>
              </div>
            </div>
            <div className="review-stat-item">
              <FiClock />
              <div>
                <span>Due Date</span>
                <strong>{submissionData.dueDate}</strong>
              </div>
            </div>
            <div className="review-stat-item">
              <FiTarget />
              <div>
                <span>Total Points</span>
                <strong>{submissionData.totalPoints}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="review-submission-card review-form-card">
          <div className="review-section">
            <div className="review-section-heading">
              <h3>Grade</h3>
              <p>{scoreSummary}</p>
            </div>
            <AdminField
              id="score"
              label="Score Out of 100"
              type="number"
              placeholder="e.g. 100"
              value={formData.score}
              onChange={handleChange}
            />
            {errors.score ? <p className="review-error-text">{errors.score}</p> : null}
          </div>

          <div className="review-section">
            <div className="review-section-heading">
              <h3>Submission</h3>
            </div>

            <div className="review-content-block">
              <span className="review-content-label">Repository Link</span>
              <div className="review-link-box">
                <FiLink2 />
                <a href={submissionData.repositoryLink} target="_blank" rel="noreferrer">
                  {submissionData.repositoryLink}
                </a>
              </div>
            </div>

            <div className="review-content-block">
              <span className="review-content-label">Attached Files</span>
              <div className="review-files-list">
                {submissionData.attachments.map((file) => (
                  <div key={file.name} className="review-file-item">
                    <div className="review-file-meta">
                      <div className="review-file-icon">
                        <FiFileText />
                      </div>
                      <div>
                        <strong>{file.name}</strong>
                        <span>{file.size}</span>
                      </div>
                    </div>
                    <button type="button" className="review-file-download" aria-label={`Download ${file.name}`}>
                      <FiDownload />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="review-content-block">
              <span className="review-content-label">Student Comments</span>
              <div className="review-comment-box">
                {submissionData.comments}
              </div>
            </div>
          </div>

          <div className="review-section">
            <div className="review-section-heading">
              <h3>Feedback</h3>
            </div>
            <AdminField
              id="feedback"
              label=" "
              type="textarea"
              placeholder="Provide detailed feedback for the student..."
              value={formData.feedback}
              onChange={handleChange}
              rows={7}
              className="review-feedback-field"
            />
            <p className="review-helper-text">
              Give constructive feedback on what the student did well and areas for improvement.
            </p>
            {errors.feedback ? <p className="review-error-text">{errors.feedback}</p> : null}
            {isSaved ? <p className="review-success-text">Grade saved successfully.</p> : null}
          </div>

          <div className="review-actions">
            <Button name="Save Grade" onClick={handleSave} />
            <WhiteButton name="Cancel" onClick={handleCancel} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReviewSubmissionPage;
