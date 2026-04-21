import { useMemo, useState } from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { LuClipboardCheck } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import PageHeader from '../../components/ui/modal/teachers/PageHeader';
import StudentAssessmentCard from '../../components/ui/modal/students/StudentAssessmentCard';
import { studentAssessments } from '../../data/studentAssessmentsData';
import '../../styles/students/studentAssessments.css';

const assessmentStats = [
  { id: 'total', icon: <FiBookOpen />, label: 'Total Assignments', value: '5' },
  { id: 'submitted', icon: <LuClipboardCheck />, label: 'Submitted', value: '3' },
  { id: 'overdue', icon: <MdOutlinePendingActions />, label: 'Overdue', value: '2' },
];

const filters = ['All', 'Pending', 'Submitted', 'Graded'];

function StudentAssessmentsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const visibleAssessments = useMemo(() => {
    return studentAssessments.filter((assessment) => {
      const matchesFilter = activeFilter === 'All' || assessment.filter === activeFilter;
      const matchesSearch =
        assessment.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        assessment.course.toLowerCase().includes(searchValue.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchValue]);

  return (
    <div className="student-assessments-page">
      <div className="student-assessments-header">
        <PageHeader userName="Hi, Kofi Wayoo" />
      </div>

      <section className="student-assessments-stats-grid">
        {assessmentStats.map((item) => (
          <article key={item.id} className="student-assessments-stat-card">
            <div className="student-assessments-stat-icon">{item.icon}</div>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </article>
        ))}
      </section>

      <section className="student-assessments-toolbar">
        <input
          className="student-assessments-search"
          type="search"
          placeholder="Search Assessments"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <div className="student-assessments-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? 'is-active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <div className="student-assessments-list">
        {visibleAssessments.map((assessment) => (
          <StudentAssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>
    </div>
  );
}

export default StudentAssessmentsPage;
